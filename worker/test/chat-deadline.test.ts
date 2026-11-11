import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { SupportGuard } from '../src/index'
import { SUPPORT_CHAT_PROCESSING_TIMEOUT_MS } from '../../src/support/timing'

beforeEach(() => {
  vi.useFakeTimers()
  vi.spyOn(AbortSignal, 'timeout').mockImplementation((ms) => {
    const controller = new AbortController()
    setTimeout(() => controller.abort(new DOMException('Timed out', 'TimeoutError')), ms)
    return controller.signal
  })
  vi.stubGlobal('crypto', {
    subtle: {
      importKey: async () => ({}),
      sign: async () => new Uint8Array(32).buffer,
    },
  })
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

function setupGuard(reservationDelay = 0) {
  const now = Date.now()
  const records = new Map<string, unknown>([['session:test', {
    createdAt: now,
    expiresAt: now + 86_400_000,
    ipHash: 'test-ip',
    minute: 0,
    minuteCount: 0,
    hour: 0,
    hourCount: 0,
    day: '',
    dayTokens: 0,
    inFlight: false,
    history: [],
    basicHelpGiven: false,
  }]])
  let firstTransaction = true
  const storage = {
    get: async (key: string) => records.get(key),
    put: async (key: string, value: unknown) => { records.set(key, value) },
    transaction: async (callback: (transaction: unknown) => Promise<unknown>) => {
      if (firstTransaction && reservationDelay) {
        firstTransaction = false
        await new Promise((resolve) => setTimeout(resolve, reservationDelay))
      }
      return callback(storage)
    },
  }
  const guard = new SupportGuard(
    { storage } as unknown as DurableObjectState,
    { OPENAI_API_KEY: 'test', HASH_SALT: 'test' } as ConstructorParameters<typeof SupportGuard>[1],
  )
  return { guard, records }
}

function stubProvider(delays: number[]) {
  let call = 0
  const fetch = vi.fn((url: string, init: RequestInit) => new Promise<Response>((resolve, reject) => {
    const signal = init.signal
    if (signal?.aborted) {
      reject(signal.reason)
      return
    }
    const onAbort = () => {
      clearTimeout(timeout)
      reject(signal?.reason)
    }
    const timeout = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve(Response.json(url.endsWith('/moderations')
        ? { results: [{ flagged: false }] }
        : { output_text: 'Fernhilfe kostet ab 25 Euro.', usage: { total_tokens: 90 } }))
    }, delays[call++] ?? 0)
    signal?.addEventListener('abort', onAbort, { once: true })
  }))
  vi.stubGlobal('fetch', fetch)
  return fetch
}

function chatRequest() {
  return new Request('https://support.internal/chat', {
    method: 'POST',
    body: JSON.stringify({ sessionId: 'test', contextId: 'ludwigsburg', message: 'Was kostet Fernhilfe?' }),
  })
}

describe('chat processing deadline', () => {
  it('completes a slow answer and both moderation checks inside the budget', async () => {
    const { guard, records } = setupGuard()
    const fetch = stubProvider([14_000, 29_000, 14_000])
    const result = guard.fetch(chatRequest())
    await vi.advanceTimersByTimeAsync(57_000)
    const response = await result
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ reply: 'Fernhilfe kostet ab 25 Euro.' })
    expect(fetch).toHaveBeenCalledTimes(3)
    expect(records.get('session:test')).toMatchObject({ inFlight: false, dayTokens: 90 })
  })

  it('applies one total deadline even after earlier processing used some of the budget', async () => {
    const { guard, records } = setupGuard(10_000)
    const fetch = stubProvider([14_000, 29_000, 14_000])
    const result = guard.fetch(chatRequest())
    await vi.advanceTimersByTimeAsync(SUPPORT_CHAT_PROCESSING_TIMEOUT_MS)
    const response = await result
    expect(response.status).toBe(504)
    expect(await response.json()).toEqual({ error: 'assistant_timeout' })
    expect(fetch).toHaveBeenCalledTimes(3)
    // A timed-out answer must not leave the session locked or add an unchecked
    // reply to the conversation; actual generation usage is still accounted for.
    expect(records.get('session:test')).toMatchObject({ inFlight: false, history: [], dayTokens: 90 })
  })

  it('retains the individual moderation limit and releases the session on failure', async () => {
    const { guard, records } = setupGuard()
    const fetch = stubProvider([20_000])
    const result = guard.fetch(chatRequest())
    await vi.advanceTimersByTimeAsync(15_000)
    const response = await result
    expect(response.status).toBe(504)
    expect(await response.json()).toEqual({ error: 'assistant_timeout' })
    expect(fetch).toHaveBeenCalledOnce()
    expect(records.get('session:test')).toMatchObject({ inFlight: false, history: [], dayTokens: 0 })
  })
})
