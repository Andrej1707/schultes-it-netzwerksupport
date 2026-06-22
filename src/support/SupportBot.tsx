import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  MessageSquareText,
  Phone,
  RefreshCw,
  ShieldCheck,
  X,
} from 'lucide-react'
import './support.css'

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId?: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

type Session = {
  token: string
  expiresAt: number
}

type Message = {
  id: string
  role: 'assistant' | 'user'
  content: string
}

type ApiError = Error & { code?: string; status?: number }
type Phase = 'needs-verification' | 'verifying' | 'ready' | 'sending' | 'unavailable'

const SESSION_STORAGE_KEY = 'schultes-support-session-v2'
const apiUrl = (import.meta.env.VITE_SUPPORT_API_URL ?? '').replace(/\/$/, '')
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''
const isConfigured = Boolean(apiUrl && turnstileSiteKey)
const phoneHref = 'tel:+4915233364752'

const welcomeMessage: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Hi, ich bin der digitale Assistent von Schultes IT. Erzähl mir einfach, wobei du Hilfe brauchst. Ich frage bei Bedarf nach, probiere mit dir sichere Basics und hole Andrej erst dazu, wenn persönliche Hilfe wirklich sinnvoll ist.',
}

const quickPrompts = [
  'Mein WLAN geht nicht',
  'Internet ist überall weg',
  'Mein PC startet nicht',
  'Mein PC ist sehr langsam',
  'Mein Drucker druckt nicht',
  'Mein Handy hat kein WLAN',
  'Was kostet Fernhilfe?',
  'Was kostet Vor-Ort-Hilfe?',
  'Kommst du zu mir?',
  'Wann bist du erreichbar?',
  'Welche Leistungen gibt es?',
  'Wie erreiche ich Andrej?',
]

function readSession(): Session | null {
  try {
    const value = sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (!value) return null
    const parsed = JSON.parse(value) as Session
    if (!parsed.token || parsed.expiresAt <= Date.now() + 30_000) {
      sessionStorage.removeItem(SESSION_STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    sessionStorage.removeItem(SESSION_STORAGE_KEY)
    return null
  }
}

async function loadTurnstile() {
  if (window.turnstile) return window.turnstile

  const existing = document.querySelector<HTMLScriptElement>('script[data-schultes-turnstile]')
  const script = existing ?? document.createElement('script')
  if (!existing) {
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.schultesTurnstile = 'true'
    document.head.appendChild(script)
  }

  await new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve()
      return
    }
    const onLoad = () => resolve()
    const onError = () => reject(new Error('turnstile_unavailable'))
    script.addEventListener('load', onLoad, { once: true })
    script.addEventListener('error', onError, { once: true })
  })

  if (!window.turnstile) throw new Error('turnstile_unavailable')
  return window.turnstile
}

async function requestJson<T>(path: string, init: RequestInit): Promise<T> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 35_000)
  try {
    const response = await fetch(`${apiUrl}${path}`, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...init.headers },
      signal: controller.signal,
    })
    const payload = (await response.json().catch(() => ({}))) as T & { error?: string }
    if (!response.ok) {
      const error = new Error(payload.error ?? 'request_failed') as ApiError
      error.code = payload.error
      error.status = response.status
      throw error
    }
    return payload
  } finally {
    window.clearTimeout(timeout)
  }
}

function getErrorMessage(code?: string) {
  switch (code) {
    case 'rate_limited':
    case 'request_in_progress':
      return 'Das waren gerade zu viele Nachrichten. Warte bitte kurz und versuche es dann erneut.'
    case 'daily_limit_reached':
      return 'Das gemeinsame Tagesbudget des Assistenten ist heute aufgebraucht. Andrej ist weiterhin direkt per Telefon erreichbar.'
    case 'session_limit_reached':
      return 'Diese Unterhaltung hat ihr Sicherheitslimit erreicht. Bestätige dich bitte kurz erneut, um einen frischen Chat zu starten.'
    case 'assistant_unavailable':
    case 'service_unavailable':
      return 'Der Assistent ist gerade nicht erreichbar. Du kannst Andrej direkt anrufen oder später erneut versuchen.'
    default:
      return 'Das hat gerade nicht geklappt. Bitte prüfe deine Verbindung und versuche es erneut.'
  }
}

export default function SupportBot() {
  const existingSession = useRef<Session | null>(readSession())
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>(
    !isConfigured ? 'unavailable' : existingSession.current ? 'ready' : 'needs-verification',
  )
  const [session, setSession] = useState<Session | null>(existingSession.current)
  const [messages, setMessages] = useState<Message[]>(existingSession.current ? [welcomeMessage] : [])
  const [draft, setDraft] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showDirectContact, setShowDirectContact] = useState(false)
  const turnstileContainer = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const messageEndRef = useRef<HTMLDivElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const clearSession = useCallback((message?: string) => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY)
    setSession(null)
    setMessages([])
    setShowDirectContact(false)
    setPhase('needs-verification')
    setErrorMessage(
      message ?? 'Deine Sitzung ist abgelaufen. Bitte bestätige kurz erneut, dass du ein Mensch bist.',
    )
  }, [])

  const createSession = useCallback(async (turnstileToken: string) => {
    setPhase('verifying')
    setErrorMessage('')
    try {
      const result = await requestJson<{ sessionToken: string; expiresAt: number }>('/session', {
        method: 'POST',
        body: JSON.stringify({ turnstileToken }),
      })
      const nextSession = { token: result.sessionToken, expiresAt: result.expiresAt }
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextSession))
      setSession(nextSession)
      setMessages([welcomeMessage])
      setShowDirectContact(false)
      setPhase('ready')
      window.setTimeout(() => textareaRef.current?.focus(), 80)
    } catch (error) {
      const apiError = error as ApiError
      setPhase('needs-verification')
      setErrorMessage(
        apiError.code === 'verification_rate_limited'
          ? 'Zu viele Prüfversuche. Bitte warte etwas oder ruf Andrej direkt an.'
          : 'Die Sicherheitsprüfung hat nicht geklappt. Bitte versuche es erneut.',
      )
      if (widgetId.current) window.turnstile?.reset(widgetId.current)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.supportOpen = open ? 'true' : 'false'
    if (!open) {
      return () => {
        delete document.body.dataset.supportOpen
      }
    }

    const scrollPosition = window.scrollY
    const bodyStyle = document.body.style
    const htmlStyle = document.documentElement.style
    const previous = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
      paddingRight: bodyStyle.paddingRight,
      overscrollBehavior: htmlStyle.overscrollBehavior,
    }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    bodyStyle.position = 'fixed'
    bodyStyle.top = `-${scrollPosition}px`
    bodyStyle.width = '100%'
    bodyStyle.overflow = 'hidden'
    if (scrollbarWidth > 0) bodyStyle.paddingRight = `${scrollbarWidth}px`
    htmlStyle.overscrollBehavior = 'none'

    return () => {
      delete document.body.dataset.supportOpen
      bodyStyle.position = previous.position
      bodyStyle.top = previous.top
      bodyStyle.width = previous.width
      bodyStyle.overflow = previous.overflow
      bodyStyle.paddingRight = previous.paddingRight
      htmlStyle.overscrollBehavior = previous.overscrollBehavior
      window.scrollTo(0, scrollPosition)
    }
  }, [open])

  useEffect(() => {
    if (!open || phase !== 'needs-verification' || !isConfigured || !turnstileContainer.current) {
      return
    }

    let cancelled = false
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !turnstileContainer.current || widgetId.current) return
        widgetId.current = turnstile.render(turnstileContainer.current, {
          sitekey: turnstileSiteKey,
          theme: 'dark',
          size: 'flexible',
          language: 'de',
          action: 'support_session',
          callback: (token: string) => void createSession(token),
          'error-callback': () => {
            setErrorMessage('Die Sicherheitsprüfung konnte nicht geladen werden. Bitte später erneut versuchen.')
          },
          'expired-callback': () => {
            if (widgetId.current) turnstile.reset(widgetId.current)
          },
        })
      })
      .catch(() => {
        if (!cancelled) setErrorMessage('Die Sicherheitsprüfung ist gerade nicht erreichbar.')
      })

    return () => {
      cancelled = true
      if (widgetId.current) {
        window.turnstile?.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [createSession, open, phase])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      window.setTimeout(() => launcherRef.current?.focus(), 0)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (open) messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, open])

  const sendMessage = async (suggestion?: string) => {
    const content = (suggestion ?? draft).trim()
    if (!content || phase === 'sending' || !session) return
    if (session.expiresAt <= Date.now() + 5_000) {
      clearSession()
      return
    }

    const userMessage: Message = { id: crypto.randomUUID(), role: 'user', content }
    setMessages((current) => [...current, userMessage])
    setDraft('')
    setErrorMessage('')
    setPhase('sending')

    try {
      const result = await requestJson<{ reply: string; escalated?: boolean }>('/chat', {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.token}` },
        body: JSON.stringify({ message: content }),
      })
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'assistant', content: result.reply },
      ])
      setShowDirectContact(Boolean(result.escalated))
      setPhase('ready')
      window.setTimeout(() => textareaRef.current?.focus(), 50)
    } catch (error) {
      const apiError = error as ApiError
      if (apiError.status === 401 || apiError.code === 'session_expired') {
        clearSession()
        return
      }
      if (apiError.code === 'session_limit_reached') {
        clearSession(getErrorMessage(apiError.code))
        return
      }
      setErrorMessage(getErrorMessage(apiError.code))
      setPhase('ready')
    }
  }

  const close = () => {
    setOpen(false)
    window.setTimeout(() => launcherRef.current?.focus(), 0)
  }

  const scrollSuggestions = (direction: -1 | 1) => {
    suggestionsRef.current?.scrollBy({
      left: direction * Math.max(220, suggestionsRef.current.clientWidth * 0.72),
      behavior: 'smooth',
    })
  }

  return (
    <div className={`support-bot ${open ? 'is-open' : ''}`} data-nosnippet>
      {open && (
        <section
          className="support-panel"
          id="business-support-panel"
          role="dialog"
          aria-labelledby="support-title"
        >
          <header className="support-header">
            <div className="support-identity">
              <span className="support-avatar" aria-hidden="true"><Bot /></span>
              <span>
                <small><i /> BUSINESS ASSIST</small>
                <strong id="support-title">Schultes IT Hilfe</strong>
              </span>
            </div>
            <button type="button" className="support-close" onClick={close} aria-label="Assistent schließen">
              <X aria-hidden="true" />
            </button>
          </header>

          {phase === 'unavailable' ? (
            <div className="support-state">
              <RefreshCw aria-hidden="true" />
              <h2>Assistent wird eingerichtet</h2>
              <p>Die direkte Hilfe ist noch nicht freigeschaltet. Andrej erreichst du weiterhin telefonisch.</p>
              <a href={phoneHref}><Phone aria-hidden="true" /> Jetzt anrufen</a>
            </div>
          ) : phase === 'needs-verification' || phase === 'verifying' ? (
            <div className="support-state support-verification">
              <ShieldCheck aria-hidden="true" />
              <h2>Kurz Mensch bestätigen</h2>
              <p>Die Prüfung schützt den Assistenten vor Spam und startet eine sichere Sitzung.</p>
              <div ref={turnstileContainer} className="support-turnstile" />
              {phase === 'verifying' && <span className="support-loading"><LoaderCircle /> Sichere Sitzung wird erstellt</span>}
              {errorMessage && <p className="support-error" role="alert">{errorMessage}</p>}
            </div>
          ) : (
            <>
              <div className="support-messages" aria-live="polite" aria-relevant="additions">
                {messages.map((message) => (
                  <div className={`support-message is-${message.role}`} key={message.id}>
                    {message.role === 'assistant' && <Bot aria-hidden="true" />}
                    <p>{message.content}</p>
                  </div>
                ))}
                {phase === 'sending' && (
                  <div className="support-message is-assistant is-typing" aria-label="Antwort wird erstellt">
                    <Bot aria-hidden="true" /><p><i /><i /><i /></p>
                  </div>
                )}
                <div ref={messageEndRef} />
              </div>

              {messages.length <= 1 && (
                <section className="support-suggestion-block" aria-labelledby="support-suggestions-title">
                  <header>
                    <span id="support-suggestions-title">Schnellfragen · {quickPrompts.length}</span>
                    <div>
                      <button type="button" onClick={() => scrollSuggestions(-1)} aria-label="Fragen nach links scrollen">
                        <ChevronLeft aria-hidden="true" />
                      </button>
                      <button type="button" onClick={() => scrollSuggestions(1)} aria-label="Fragen nach rechts scrollen">
                        <ChevronRight aria-hidden="true" />
                      </button>
                    </div>
                  </header>
                  <div
                    ref={suggestionsRef}
                    className="support-suggestions"
                    aria-label="Häufige Fragen"
                    onWheel={(event) => {
                      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
                      event.preventDefault()
                      event.currentTarget.scrollBy({ left: event.deltaY, behavior: 'auto' })
                    }}
                  >
                    {quickPrompts.map((prompt, index) => (
                      <button type="button" key={prompt} onClick={() => void sendMessage(prompt)}>
                        <small>{String(index + 1).padStart(2, '0')}</small>{prompt}
                      </button>
                    ))}
                  </div>
                  <small className="support-swipe-hint">Wischen, Mausrad oder Pfeile zum Wechseln</small>
                </section>
              )}

              {showDirectContact && (
                <div className="support-handoff" role="status">
                  <Phone aria-hidden="true" />
                  <span>
                    <strong>Direkt zu Andrej</strong>
                    <small>Du kannst trotzdem ganz normal weiterfragen.</small>
                  </span>
                  <a href={phoneHref}>Anrufen</a>
                </div>
              )}

              {errorMessage && (
                <div className="support-inline-error" role="alert">
                  <span>{errorMessage}</span>
                  <a href={phoneHref}><Phone aria-hidden="true" /> Anrufen</a>
                </div>
              )}

              <form
                className="support-compose"
                onSubmit={(event) => {
                  event.preventDefault()
                  void sendMessage()
                }}
              >
                <label htmlFor="support-message">Deine Nachricht</label>
                <div>
                  <textarea
                    ref={textareaRef}
                    id="support-message"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value.slice(0, 1_200))}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault()
                        void sendMessage()
                      }
                    }}
                    placeholder={showDirectContact ? 'Frag einfach weiter …' : 'Schreib deine Frage …'}
                    rows={2}
                    maxLength={1_200}
                    disabled={phase === 'sending'}
                  />
                  <button type="submit" disabled={!draft.trim() || phase === 'sending'} aria-label="Nachricht senden">
                    {phase === 'sending' ? <LoaderCircle /> : <ArrowUp />}
                  </button>
                </div>
                <small>Keine Passwörter, PINs oder Zahlungsdaten senden.</small>
              </form>
            </>
          )}

          <footer className="support-footer">
            <span><CheckCircle2 aria-hidden="true" /> Sichere erste Hilfe</span>
            <a href="/#/datenschutz">Datenschutz</a>
          </footer>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        className="support-launcher"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Assistent schließen' : 'KI-Assistent öffnen'}
        aria-expanded={open}
        aria-controls="business-support-panel"
      >
        <MessageSquareText aria-hidden="true" />
        <span>KI-Hilfe</span>
        <i aria-hidden="true" />
      </button>
    </div>
  )
}
