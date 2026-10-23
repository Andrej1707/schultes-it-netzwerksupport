export type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId?: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let pendingLoad: Promise<TurnstileApi> | undefined

export function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (pendingLoad) return pendingLoad

  pendingLoad = new Promise<TurnstileApi>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-schultes-turnstile]')
    const script = existing ?? document.createElement('script')
    const cleanup = () => {
      window.clearTimeout(timeout)
      script.removeEventListener('load', onLoad)
      script.removeEventListener('error', onError)
    }
    const onError = () => {
      cleanup()
      script.remove()
      reject(new Error('turnstile_unavailable'))
    }
    const onLoad = () => {
      if (!window.turnstile) {
        onError()
        return
      }
      cleanup()
      resolve(window.turnstile)
    }
    const timeout = window.setTimeout(onError, 15_000)
    script.addEventListener('load', onLoad, { once: true })
    script.addEventListener('error', onError, { once: true })
    if (!existing) {
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.dataset.schultesTurnstile = 'true'
      document.head.appendChild(script)
    }
  }).catch((error: unknown) => {
    pendingLoad = undefined
    throw error
  })

  return pendingLoad
}
