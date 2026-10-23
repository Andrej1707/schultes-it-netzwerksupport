export type SupportSession = {
  token: string
  expiresAt: number
}

export function removeSession(storageKey: string) {
  try {
    sessionStorage.removeItem(storageKey)
  } catch {
    // Storage can be blocked; the chat can still keep its session in memory.
  }
}

export function saveSession(storageKey: string, session: SupportSession) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(session))
  } catch {
    // Persistence is optional and must not turn successful verification into an error.
  }
}

export function readSession(storageKey: string): SupportSession | null {
  try {
    const value = sessionStorage.getItem(storageKey)
    if (!value) return null
    const parsed = JSON.parse(value) as Partial<SupportSession> | null
    if (
      !parsed ||
      typeof parsed.token !== 'string' ||
      !parsed.token.trim() ||
      typeof parsed.expiresAt !== 'number' ||
      !Number.isFinite(parsed.expiresAt) ||
      parsed.expiresAt <= Date.now() + 30_000
    ) {
      removeSession(storageKey)
      return null
    }
    return { token: parsed.token, expiresAt: parsed.expiresAt }
  } catch {
    removeSession(storageKey)
    return null
  }
}
