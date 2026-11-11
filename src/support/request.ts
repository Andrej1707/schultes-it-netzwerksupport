export type ApiError = Error & { code?: string; status?: number }

export async function requestSupportJson<T>(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const headers = new Headers(init.headers)
    headers.set('Content-Type', 'application/json')
    const response = await fetch(url, { ...init, headers, signal: controller.signal })
    // Do not swallow an abort while the response body is still downloading.
    const payload = (await response.json()) as T & { error?: string }
    if (!response.ok) {
      const error = new Error(payload.error ?? 'request_failed') as ApiError
      error.code = payload.error
      error.status = response.status
      throw error
    }
    return payload
  } catch (error) {
    if (controller.signal.aborted) {
      const timeoutError = new Error('request_timeout') as ApiError
      timeoutError.code = 'request_timeout'
      throw timeoutError
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}

export function getSupportErrorMessage(code?: string) {
  switch (code) {
    case 'request_timeout':
    case 'assistant_timeout':
      return 'Die Antwort hat zu lange gedauert. Deine Nachricht bleibt im Eingabefeld. Du kannst es erneut versuchen oder Andrej direkt kontaktieren.'
    case 'rate_limited':
      return 'Das waren gerade zu viele Nachrichten. Warte bitte kurz und versuche es dann erneut.'
    case 'request_in_progress':
      return 'Deine vorherige Anfrage wird noch verarbeitet. Warte bitte kurz, bevor du sie erneut sendest.'
    case 'daily_limit_reached':
      return 'Der Assistent hat für heute sein Limit erreicht. Andrej bleibt direkt erreichbar.'
    case 'session_limit_reached':
      return 'Diese Unterhaltung hat ihr Sicherheitslimit erreicht. Bestätige bitte erneut, dass du ein Mensch bist. Deine Nachricht bleibt erhalten.'
    case 'assistant_unavailable':
    case 'service_unavailable':
      return 'Der Assistent ist gerade nicht erreichbar. Deine Nachricht bleibt im Eingabefeld. Du kannst Andrej direkt kontaktieren oder es später erneut versuchen.'
    default:
      return 'Das hat gerade nicht geklappt. Deine Nachricht bleibt im Eingabefeld. Bitte prüfe deine Verbindung und versuche es erneut.'
  }
}
