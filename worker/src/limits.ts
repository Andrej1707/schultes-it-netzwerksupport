export const MAX_MESSAGE_CHARS = 1_200
export const MAX_HISTORY_MESSAGES = 8
export const MAX_OUTPUT_TOKENS = 450
export const SESSION_TTL_MS = 24 * 60 * 60 * 1_000

export function normalizeMessage(value: unknown) {
  if (typeof value !== 'string') return null
  const normalized = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim()
  if (normalized.length === 0 || normalized.length > MAX_MESSAGE_CHARS) return null
  return normalized
}

export function utf8Length(value: string) {
  return new TextEncoder().encode(value).byteLength
}

export function reserveTokenUpperBound(systemPrompt: string, history: Array<{ content: string }>, message: string) {
  const input = [systemPrompt, ...history.map((entry) => entry.content), message].join('\n')
  return utf8Length(input) + MAX_OUTPUT_TOKENS + 256
}

export function utcDay(timestamp = Date.now()) {
  return new Date(timestamp).toISOString().slice(0, 10)
}

export function minuteBucket(timestamp = Date.now()) {
  return Math.floor(timestamp / 60_000)
}

export function hourBucket(timestamp = Date.now()) {
  return Math.floor(timestamp / 3_600_000)
}

export function parsePositiveLimit(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}
