import {
  INPUT_BLOCKED_REPLY,
  BUSINESS_SYSTEM_PROMPT,
  SAFE_FALLBACK_REPLY,
} from './knowledge'
import {
  hourBucket,
  MAX_HISTORY_MESSAGES,
  MAX_OUTPUT_TOKENS,
  minuteBucket,
  normalizeMessage,
  parsePositiveLimit,
  reserveTokenUpperBound,
  SESSION_TTL_MS,
  utcDay,
} from './limits'
import {
  classifySupportIntent,
  containsDisallowedOutput,
  DIRECT_HANDOFF_REPLY,
  getBasicSupportReply,
  OUT_OF_SCOPE_REPLY,
} from './policy'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type SessionRecord = {
  createdAt: number
  expiresAt: number
  ipHash: string
  minute: number
  minuteCount: number
  hour: number
  hourCount: number
  day: string
  dayTokens: number
  inFlight: boolean
  history: ChatMessage[]
  basicHelpGiven: boolean
}

type IpRecord = {
  minute: number
  minuteCount: number
  hour: number
  hourCount: number
  day: string
  dayCount: number
  expiresAt: number
}

type Env = {
  SUPPORT_GUARD: DurableObjectNamespace
  OPENAI_API_KEY: string
  TURNSTILE_SECRET_KEY: string
  HASH_SALT: string
  ALLOWED_ORIGINS?: string
  TURNSTILE_HOSTNAMES?: string
  OPENAI_MODEL?: string
  OPENAI_BASE_URL?: string
  TURNSTILE_VERIFY_URL?: string
  DAILY_TOKEN_LIMIT?: string
  SESSION_DAILY_TOKEN_LIMIT?: string
  SESSION_RPM_LIMIT?: string
  SESSION_HOURLY_LIMIT?: string
  IP_RPM_LIMIT?: string
  IP_HOURLY_LIMIT?: string
  IP_DAILY_LIMIT?: string
}

type Reservation = {
  session: SessionRecord
  reservedTokens: number
  usageKey: string
  sessionKey: string
}

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
}

function json(data: unknown, status = 200, extraHeaders: HeadersInit = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  })
}

function allowedOrigins(env: Env) {
  return new Set(
    (env.ALLOWED_ORIGINS ?? 'https://schultes-it.de')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  )
}

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

async function readJson(request: Request) {
  const contentLength = Number.parseInt(request.headers.get('content-length') ?? '0', 10)
  if (contentLength > 16_384) throw new Error('payload_too_large')
  return request.json() as Promise<Record<string, unknown>>
}

async function hmac(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value))
  return [...new Uint8Array(signature)]
    .slice(0, 16)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

async function verifyTurnstile(token: string, ip: string, env: Env) {
  if (!env.TURNSTILE_SECRET_KEY) return false
  const form = new FormData()
  form.set('secret', env.TURNSTILE_SECRET_KEY)
  form.set('response', token)
  form.set('remoteip', ip)
  form.set('idempotency_key', crypto.randomUUID())

  const response = await fetch(
    env.TURNSTILE_VERIFY_URL ?? 'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form, signal: AbortSignal.timeout(10_000) },
  )
  if (!response.ok) return false
  const result = (await response.json()) as {
    success?: boolean
    hostname?: string
    action?: string
    metadata?: { result_with_testing_key?: boolean }
  }
  const usesTestingKey = result.metadata?.result_with_testing_key === true
  if (!result.success || (!usesTestingKey && result.action !== 'support_session')) return false

  const hostnames = (env.TURNSTILE_HOSTNAMES ?? '')
    .split(',')
    .map((hostname) => hostname.trim())
    .filter(Boolean)
  return usesTestingKey || hostnames.length === 0 || (result.hostname ? hostnames.includes(result.hostname) : false)
}

async function moderate(text: string, env: Env) {
  const response = await fetch(`${env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1'}/moderations`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'omni-moderation-latest', input: text }),
    signal: AbortSignal.timeout(15_000),
  })
  if (!response.ok) throw new Error(`moderation_${response.status}`)
  const payload = (await response.json()) as { results?: Array<{ flagged?: boolean }> }
  return payload.results?.[0]?.flagged === true
}

function extractOutputText(payload: Record<string, unknown>) {
  if (typeof payload.output_text === 'string') return payload.output_text.trim()
  const output = Array.isArray(payload.output) ? payload.output : []
  for (const item of output) {
    if (!item || typeof item !== 'object') continue
    const content = Array.isArray((item as { content?: unknown }).content)
      ? (item as { content: unknown[] }).content
      : []
    for (const part of content) {
      if (
        part &&
        typeof part === 'object' &&
        (part as { type?: unknown }).type === 'output_text' &&
        typeof (part as { text?: unknown }).text === 'string'
      ) {
        return (part as { text: string }).text.trim()
      }
    }
  }
  return ''
}

async function createModelResponse(session: SessionRecord, message: string, sessionId: string, env: Env) {
  const input = [...session.history, { role: 'user' as const, content: message }]
  const safetyId = await hmac(sessionId, env.HASH_SALT)
  const response = await fetch(`${env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1'}/responses`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? 'gpt-5.4-mini',
      instructions: BUSINESS_SYSTEM_PROMPT,
      input,
      tools: [],
      max_output_tokens: MAX_OUTPUT_TOKENS,
      store: false,
      safety_identifier: `support_${safetyId}`,
    }),
    signal: AbortSignal.timeout(30_000),
  })

  if (!response.ok) throw new Error(`responses_${response.status}`)
  const payload = (await response.json()) as Record<string, unknown> & {
    usage?: { total_tokens?: number }
  }
  const text = extractOutputText(payload)
  if (!text) throw new Error('empty_response')
  return {
    text,
    totalTokens: Math.max(0, payload.usage?.total_tokens ?? 0),
  }
}

export class SupportGuard {
  private state: DurableObjectState
  private env: Env

  constructor(state: DurableObjectState, env: Env) {
    this.state = state
    this.env = env
  }

  async fetch(request: Request) {
    const url = new URL(request.url)
    if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

    try {
      const body = await readJson(request)
      if (url.pathname === '/session') return this.createSession(body)
      if (url.pathname === '/chat') return this.chat(body)
      return json({ error: 'not_found' }, 404)
    } catch (error) {
      console.error('SupportGuard request failed', error instanceof Error ? error.message : 'unknown')
      return json({ error: 'service_unavailable' }, 503)
    }
  }

  private async createSession(body: Record<string, unknown>) {
    const sessionId = typeof body.sessionId === 'string' ? body.sessionId : ''
    const ipHash = typeof body.ipHash === 'string' ? body.ipHash : ''
    if (!sessionId || !ipHash) return json({ error: 'invalid_session' }, 400)

    const now = Date.now()
    const hour = hourBucket(now)
    const verificationKey = `verify:${ipHash}`
    const accepted = await this.state.storage.transaction(async (transaction) => {
      const verification = (await transaction.get<{ hour: number; count: number }>(verificationKey)) ?? {
        hour,
        count: 0,
      }
      const count = verification.hour === hour ? verification.count : 0
      if (count >= 10) return false
      await transaction.put(verificationKey, { hour, count: count + 1, expiresAt: now + SESSION_TTL_MS })
      const session: SessionRecord = {
        createdAt: now,
        expiresAt: now + SESSION_TTL_MS,
        ipHash,
        minute: minuteBucket(now),
        minuteCount: 0,
        hour,
        hourCount: 0,
        day: utcDay(now),
        dayTokens: 0,
        inFlight: false,
        history: [],
        basicHelpGiven: false,
      }
      await transaction.put(`session:${sessionId}`, session)
      return true
    })

    if (!accepted) return json({ error: 'verification_rate_limited' }, 429)
    if ((await this.state.storage.getAlarm()) === null) {
      await this.state.storage.setAlarm(now + 6 * 60 * 60 * 1_000)
    }
    return json({ ok: true, expiresAt: now + SESSION_TTL_MS })
  }

  private async chat(body: Record<string, unknown>) {
    const sessionId = typeof body.sessionId === 'string' ? body.sessionId : ''
    const message = normalizeMessage(body.message)
    if (!sessionId || !message) return json({ error: 'invalid_message' }, 400)

    const reservation = await this.reserve(sessionId, message)
    if (reservation instanceof Response) return reservation

    let actualTokens = 0
    try {
      if (reservation.session.basicHelpGiven) {
        await this.finish(reservation, 0, { message, reply: DIRECT_HANDOFF_REPLY })
        return json({ reply: DIRECT_HANDOFF_REPLY, escalated: true })
      }

      const intent = classifySupportIntent(message)
      if (intent === 'out-of-scope') {
        await this.finish(reservation, 0, {
          message,
          reply: OUT_OF_SCOPE_REPLY,
          basicHelpGiven: true,
        })
        return json({ reply: OUT_OF_SCOPE_REPLY, blocked: true, escalated: true })
      }

      if (intent === 'basic-support') {
        const reply = getBasicSupportReply(message)
        await this.finish(reservation, 0, { message, reply, basicHelpGiven: true })
        return json({ reply, blocked: false, escalated: false })
      }

      if (await moderate(message, this.env)) {
        await this.finish(reservation, 0, {
          message,
          reply: INPUT_BLOCKED_REPLY,
          basicHelpGiven: true,
        })
        return json({ reply: INPUT_BLOCKED_REPLY, blocked: true, escalated: true })
      }

      const generated = await createModelResponse(reservation.session, message, sessionId, this.env)
      actualTokens = generated.totalTokens > 0 ? generated.totalTokens : reservation.reservedTokens
      const outputFlagged =
        containsDisallowedOutput(generated.text) || (await moderate(generated.text, this.env))
      const reply = outputFlagged ? SAFE_FALLBACK_REPLY : generated.text
      await this.finish(reservation, actualTokens, {
        message,
        reply,
        basicHelpGiven: outputFlagged,
      })
      return json({ reply, blocked: outputFlagged, escalated: outputFlagged })
    } catch (error) {
      if (actualTokens > 0) await this.finish(reservation, actualTokens, null)
      else await this.release(reservation)
      console.error('AI support request failed', error instanceof Error ? error.message : 'unknown')
      return json({ error: 'assistant_unavailable' }, 503)
    }
  }

  private async reserve(sessionId: string, message: string): Promise<Reservation | Response> {
    const now = Date.now()
    const day = utcDay(now)
    const minute = minuteBucket(now)
    const hour = hourBucket(now)
    const sessionKey = `session:${sessionId}`
    const usageKey = `usage:${day}`
    const dailyLimit = parsePositiveLimit(this.env.DAILY_TOKEN_LIMIT, 1_000_000)
    const sessionDailyLimit = parsePositiveLimit(this.env.SESSION_DAILY_TOKEN_LIMIT, 20_000)
    const sessionRpm = parsePositiveLimit(this.env.SESSION_RPM_LIMIT, 5)
    const sessionHourly = parsePositiveLimit(this.env.SESSION_HOURLY_LIMIT, 30)
    const ipRpm = parsePositiveLimit(this.env.IP_RPM_LIMIT, 12)
    const ipHourly = parsePositiveLimit(this.env.IP_HOURLY_LIMIT, 100)
    const ipDaily = parsePositiveLimit(this.env.IP_DAILY_LIMIT, 150)

    return this.state.storage.transaction(async (transaction) => {
      const session = await transaction.get<SessionRecord>(sessionKey)
      if (!session || session.expiresAt <= now) return json({ error: 'session_expired' }, 401)
      if (session.inFlight) return json({ error: 'request_in_progress' }, 409)

      const minuteCount = session.minute === minute ? session.minuteCount : 0
      const hourCount = session.hour === hour ? session.hourCount : 0
      const sessionDayTokens = session.day === day ? session.dayTokens : 0
      if (minuteCount >= sessionRpm || hourCount >= sessionHourly) {
        return json({ error: 'rate_limited' }, 429)
      }

      const ipKey = `ip:${session.ipHash}`
      const currentIp = (await transaction.get<IpRecord>(ipKey)) ?? {
        minute,
        minuteCount: 0,
        hour,
        hourCount: 0,
        day,
        dayCount: 0,
        expiresAt: now + SESSION_TTL_MS,
      }
      const currentIpMinuteCount = currentIp.minute === minute ? currentIp.minuteCount : 0
      const currentIpHourCount = currentIp.hour === hour ? currentIp.hourCount : 0
      const currentIpDayCount = currentIp.day === day ? currentIp.dayCount : 0
      if (
        currentIpMinuteCount >= ipRpm ||
        currentIpHourCount >= ipHourly ||
        currentIpDayCount >= ipDaily
      ) {
        return json({ error: 'rate_limited' }, 429)
      }

      const reservedTokens = reserveTokenUpperBound(
        BUSINESS_SYSTEM_PROMPT,
        session.history,
        message,
      )
      const globalUsage = (await transaction.get<number>(usageKey)) ?? 0
      if (globalUsage + reservedTokens > dailyLimit) return json({ error: 'daily_limit_reached' }, 429)
      if (sessionDayTokens + reservedTokens > sessionDailyLimit) {
        return json({ error: 'session_limit_reached' }, 429)
      }

      const updatedSession: SessionRecord = {
        ...session,
        minute,
        minuteCount: minuteCount + 1,
        hour,
        hourCount: hourCount + 1,
        day,
        dayTokens: sessionDayTokens + reservedTokens,
        inFlight: true,
      }
      const updatedIp: IpRecord = {
        minute,
        minuteCount: currentIpMinuteCount + 1,
        hour,
        hourCount: currentIpHourCount + 1,
        day,
        dayCount: currentIpDayCount + 1,
        expiresAt: now + SESSION_TTL_MS,
      }
      await transaction.put(sessionKey, updatedSession)
      await transaction.put(ipKey, updatedIp)
      await transaction.put(usageKey, globalUsage + reservedTokens)

      return { session: updatedSession, reservedTokens, usageKey, sessionKey }
    })
  }

  private async finish(
    reservation: Reservation,
    actualTokens: number,
    exchange: { message: string; reply: string; basicHelpGiven?: boolean } | null,
  ) {
    await this.state.storage.transaction(async (transaction) => {
      const globalUsage = (await transaction.get<number>(reservation.usageKey)) ?? 0
      const session = await transaction.get<SessionRecord>(reservation.sessionKey)
      await transaction.put(
        reservation.usageKey,
        Math.max(0, globalUsage - reservation.reservedTokens + actualTokens),
      )
      if (!session) return
      const history = exchange
        ? [
            ...reservation.session.history,
            { role: 'user' as const, content: exchange.message },
            { role: 'assistant' as const, content: exchange.reply },
          ].slice(-MAX_HISTORY_MESSAGES)
        : session.history
      await transaction.put(reservation.sessionKey, {
        ...session,
        dayTokens: Math.max(0, session.dayTokens - reservation.reservedTokens + actualTokens),
        inFlight: false,
        history,
        basicHelpGiven: session.basicHelpGiven || exchange?.basicHelpGiven === true,
      } satisfies SessionRecord)
    })
  }

  private async release(reservation: Reservation) {
    await this.finish(reservation, 0, null)
  }

  async alarm() {
    const now = Date.now()
    const currentDay = utcDay(now)
    const entries = await this.state.storage.list<unknown>()
    const expired: string[] = []
    for (const [key, value] of entries) {
      if (key.startsWith('usage:') && key !== `usage:${currentDay}`) expired.push(key)
      if (
        (key.startsWith('session:') || key.startsWith('ip:') || key.startsWith('verify:')) &&
        value &&
        typeof value === 'object' &&
        'expiresAt' in value &&
        typeof value.expiresAt === 'number' &&
        value.expiresAt <= now
      ) {
        expired.push(key)
      }
    }
    if (expired.length > 0) await this.state.storage.delete(expired)
    await this.state.storage.setAlarm(now + 6 * 60 * 60 * 1_000)
  }
}

async function handleSession(request: Request, env: Env) {
  if (!env.OPENAI_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.HASH_SALT) {
    return json({ error: 'service_unavailable' }, 503)
  }
  const body = await readJson(request)
  const turnstileToken = typeof body.turnstileToken === 'string' ? body.turnstileToken : ''
  if (!turnstileToken || turnstileToken.length > 4_096) return json({ error: 'invalid_verification' }, 400)
  const ip = request.headers.get('CF-Connecting-IP') ?? '127.0.0.1'
  if (!(await verifyTurnstile(turnstileToken, ip, env))) {
    return json({ error: 'verification_failed' }, 403)
  }

  const sessionId = `${crypto.randomUUID()}-${crypto.randomUUID()}`
  const ipHash = await hmac(ip, env.HASH_SALT)
  const guard = env.SUPPORT_GUARD.get(env.SUPPORT_GUARD.idFromName('global'))
  const response = await guard.fetch('https://support.internal/session', {
    method: 'POST',
    body: JSON.stringify({ sessionId, ipHash }),
  })
  if (!response.ok) return response
  const result = (await response.json()) as { expiresAt: number }
  return json({ sessionToken: sessionId, expiresAt: result.expiresAt })
}

async function handleChat(request: Request, env: Env) {
  const authorization = request.headers.get('Authorization') ?? ''
  const sessionId = authorization.startsWith('Bearer ') ? authorization.slice(7).trim() : ''
  if (!sessionId || sessionId.length > 128) return json({ error: 'session_required' }, 401)
  const body = await readJson(request)
  const guard = env.SUPPORT_GUARD.get(env.SUPPORT_GUARD.idFromName('global'))
  return guard.fetch('https://support.internal/chat', {
    method: 'POST',
    body: JSON.stringify({ sessionId, message: body.message }),
  })
}

export default {
  async fetch(request: Request, env: Env) {
    const origin = request.headers.get('Origin') ?? ''
    const originAllowed = allowedOrigins(env).has(origin)
    if (!originAllowed) return json({ error: 'origin_not_allowed' }, 403)
    const cors = corsHeaders(origin)
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })

    const url = new URL(request.url)
    try {
      let response: Response
      if (request.method === 'GET' && url.pathname === '/health') {
        response = json({ ok: true, model: env.OPENAI_MODEL ?? 'gpt-5.4-mini' })
      } else if (request.method === 'POST' && url.pathname === '/session') {
        response = await handleSession(request, env)
      } else if (request.method === 'POST' && url.pathname === '/chat') {
        response = await handleChat(request, env)
      } else {
        response = json({ error: 'not_found' }, 404)
      }
      const headers = new Headers(response.headers)
      Object.entries(cors).forEach(([key, value]) => headers.set(key, value))
      return new Response(response.body, { status: response.status, headers })
    } catch (error) {
      console.error('Worker request failed', error instanceof Error ? error.message : 'unknown')
      return json({ error: 'service_unavailable' }, 503, cors)
    }
  },
} satisfies ExportedHandler<Env>
