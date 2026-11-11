import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  MapPin,
  MessageSquareText,
  Phone,
  RefreshCw,
  ShieldCheck,
  X,
} from 'lucide-react'
import type { ContactProfile } from '../site/contacts'
import { readSession, removeSession, saveSession, type SupportSession as Session } from './session'
import { loadTurnstile } from './turnstile'
import { getSupportErrorMessage, requestSupportJson, type ApiError } from './request'
import {
  SUPPORT_CHAT_REQUEST_TIMEOUT_MS,
  SUPPORT_SESSION_REQUEST_TIMEOUT_MS,
  SUPPORT_SLOW_RESPONSE_NOTICE_MS,
} from './timing'
import './support.css'

type Message = {
  id: string
  role: 'assistant' | 'user'
  content: string
}

type Phase = 'needs-verification' | 'verifying' | 'ready' | 'sending' | 'unavailable'

const SESSION_STORAGE_KEY_PREFIX = 'schultes-support-session-v3'
const apiUrl = (import.meta.env.VITE_SUPPORT_API_URL ?? '').replace(/\/$/, '')
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''
const isConfigured = Boolean(apiUrl && turnstileSiteKey)
function welcomeMessage(contact: ContactProfile): Message {
  return {
    id: 'welcome',
    role: 'assistant',
    content:
      contact.source === 'location'
        ? `Hi, ich bin der digitale Assistent für ${contact.displayName}. Erzähl mir einfach, wobei du Hilfe brauchst. Ich frage bei Bedarf nach, gehe mit dir sichere erste Schritte durch und hole ${contact.operatorName} erst dazu, wenn persönliche Hilfe wirklich sinnvoll ist.`
        : contact.source === 'central-remote'
          ? `Hi, ich bin der digitale Assistent für die deutschlandweite Fernwartung von Schultes IT. Erzähl mir einfach, was an deinem Gerät nicht funktioniert. Ich gehe mit dir sichere erste Schritte durch und hole ${contact.operatorName} dazu, wenn Fernwartung sinnvoll ist.`
        : 'Hi, ich bin der digitale Assistent von Schultes IT. Erzähl mir einfach, wobei du Hilfe brauchst. Ich gebe dir eine sichere erste Orientierung und helfe dir anschließend, Andrej persönlich zu erreichen.',
  }
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

async function requestJson<T>(path: string, init: RequestInit): Promise<T> {
  return requestSupportJson<T>(
    `${apiUrl}${path}`,
    init,
    path === '/chat' ? SUPPORT_CHAT_REQUEST_TIMEOUT_MS : SUPPORT_SESSION_REQUEST_TIMEOUT_MS,
  )
}

export default function SupportBot({ contact }: { contact: ContactProfile }) {
  const sessionStorageKey =
    `${SESSION_STORAGE_KEY_PREFIX}-${contact.supportContextId}`
  const [existingSession] = useState(() => readSession(sessionStorageKey))
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>(
    !isConfigured ? 'unavailable' : existingSession ? 'ready' : 'needs-verification',
  )
  const [session, setSession] = useState<Session | null>(existingSession)
  const [messages, setMessages] = useState<Message[]>(
    existingSession ? [welcomeMessage(contact)] : [],
  )
  const [draft, setDraft] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [waitingLonger, setWaitingLonger] = useState(false)
  const [showDirectContact, setShowDirectContact] = useState(false)
  const sendingRef = useRef(false)
  const turnstileContainer = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setWaitingLonger(false)
    if (phase !== 'sending') return
    const timeout = window.setTimeout(() => setWaitingLonger(true), SUPPORT_SLOW_RESPONSE_NOTICE_MS)
    return () => window.clearTimeout(timeout)
  }, [phase])

  const clearSession = useCallback((message?: string) => {
    removeSession(sessionStorageKey)
    setSession(null)
    setMessages([])
    setShowDirectContact(false)
    setPhase('needs-verification')
    setErrorMessage(
      message ?? 'Deine Sitzung ist abgelaufen. Bitte bestätige kurz erneut, dass du ein Mensch bist. Deine Nachricht bleibt erhalten.',
    )
  }, [sessionStorageKey])

  const createSession = useCallback(async (turnstileToken: string) => {
    setPhase('verifying')
    setErrorMessage('')
    try {
      const result = await requestJson<{ sessionToken: string; expiresAt: number }>('/session', {
        method: 'POST',
        body: JSON.stringify({ turnstileToken }),
      })
      const nextSession = { token: result.sessionToken, expiresAt: result.expiresAt }
      saveSession(sessionStorageKey, nextSession)
      setSession(nextSession)
      setMessages([welcomeMessage(contact)])
      setShowDirectContact(false)
      setPhase('ready')
      window.setTimeout(() => textareaRef.current?.focus({ preventScroll: true }), 80)
    } catch (error) {
      const apiError = error as ApiError
      setPhase('needs-verification')
      setErrorMessage(
        apiError.code === 'verification_rate_limited'
          ? 'Zu viele Prüfversuche. Bitte warte etwas oder nutze den direkten Kontakt.'
          : 'Die Sicherheitsprüfung hat nicht geklappt. Bitte versuche es erneut.',
      )
      if (widgetId.current) window.turnstile?.reset(widgetId.current)
    }
  }, [contact, sessionStorageKey])

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
      window.scrollTo({ top: scrollPosition, behavior: 'instant' })
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
          theme: 'light',
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
      window.setTimeout(() => launcherRef.current?.focus({ preventScroll: true }), 0)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const container = messagesRef.current
    if (!open || !container) return
    container.scrollTo({
      top: container.scrollHeight,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }, [messages, open])

  useEffect(() => {
    const container = suggestionsRef.current
    if (!open || !container) return
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const maxScroll = container.scrollWidth - container.clientWidth
      if (
        maxScroll <= 0 ||
        (event.deltaY < 0 && container.scrollLeft <= 0) ||
        (event.deltaY > 0 && container.scrollLeft >= maxScroll - 1)
      ) return
      event.preventDefault()
      container.scrollBy({ left: event.deltaY, behavior: 'instant' })
    }
    // React's delegated wheel handler is passive. Register locally so the
    // horizontal gesture does not also scroll the surrounding chat panel.
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [messages.length, open, phase])

  const sendMessage = async (suggestion?: string) => {
    const content = (suggestion ?? draft).trim()
    if (!content || sendingRef.current || !session) return
    // Keep the draft throughout the request, including session renewal or a
    // failed connection. Retrying always requires another deliberate click.
    setDraft(content)
    if (session.expiresAt <= Date.now() + 5_000) {
      clearSession()
      return
    }

    const userMessage: Message = { id: crypto.randomUUID(), role: 'user', content }
    sendingRef.current = true
    setMessages((current) => [...current, userMessage])
    setErrorMessage('')
    setPhase('sending')

    try {
      const result = await requestJson<{ reply: string; escalated?: boolean }>('/chat', {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.token}` },
        body: JSON.stringify({
          message: content,
          contextId: contact.supportContextId,
        }),
      })
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'assistant', content: result.reply },
      ])
      setShowDirectContact(Boolean(result.escalated))
      setDraft('')
      setPhase('ready')
      window.setTimeout(() => textareaRef.current?.focus({ preventScroll: true }), 50)
    } catch (error) {
      const apiError = error as ApiError
      // A failed optimistic bubble must not look like a delivered message.
      setMessages((current) => current.filter((message) => message.id !== userMessage.id))
      if (apiError.status === 401 || apiError.code === 'session_expired') {
        clearSession()
        return
      }
      if (apiError.code === 'session_limit_reached') {
        clearSession(getSupportErrorMessage(apiError.code))
        return
      }
      setErrorMessage(getSupportErrorMessage(apiError.code))
      setPhase('ready')
    } finally {
      sendingRef.current = false
    }
  }

  const close = () => {
    setOpen(false)
    window.setTimeout(() => launcherRef.current?.focus({ preventScroll: true }), 0)
  }

  const scrollSuggestions = (direction: -1 | 1) => {
    suggestionsRef.current?.scrollBy({
      left: direction * Math.max(220, suggestionsRef.current.clientWidth * 0.72),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
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
              <p>Der Assistent ist gerade nicht verfügbar. Andrej hilft dir persönlich weiter.</p>
              <a href={contact.phoneHref ?? contact.actionHref}>
                {contact.phoneHref ? <Phone aria-hidden="true" /> : <MapPin aria-hidden="true" />}
                {contact.phoneHref ? 'Jetzt anrufen' : contact.actionLabel}
              </a>
            </div>
          ) : phase === 'needs-verification' || phase === 'verifying' ? (
            <div className="support-state support-verification">
              <ShieldCheck aria-hidden="true" />
              <h2>Kurz bestätigen, dass du ein Mensch bist</h2>
              <p>Die Prüfung schützt den Assistenten vor Spam und startet eine sichere Sitzung.</p>
              <div ref={turnstileContainer} className="support-turnstile" />
              {phase === 'verifying' && <span className="support-loading"><LoaderCircle /> Sichere Sitzung wird erstellt</span>}
              {errorMessage && <p className="support-error" role="alert">{errorMessage}</p>}
              <a href={contact.phoneHref ?? contact.actionHref}>
                <Phone aria-hidden="true" /> Direkt zu Andrej
              </a>
            </div>
          ) : (
            <>
              <div ref={messagesRef} className="support-messages" aria-live="polite" aria-relevant="additions">
                {messages.map((message) => (
                  <div className={`support-message is-${message.role}`} key={message.id}>
                    {message.role === 'assistant' && <Bot aria-hidden="true" />}
                    <p>{message.content}</p>
                  </div>
                ))}
                {phase === 'sending' && (
                  <div className="support-message is-assistant is-typing">
                    <Bot aria-hidden="true" />
                    <p>
                      <span className="support-typing-dots" aria-hidden="true"><i /><i /><i /></span>
                      <span role="status">
                        {waitingLonger
                          ? 'Die Antwort braucht etwas länger. Du musst deine Nachricht nicht erneut senden.'
                          : 'Antwort wird erstellt …'}
                      </span>
                    </p>
                  </div>
                )}
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
                  {contact.phoneHref ? <Phone aria-hidden="true" /> : <MapPin aria-hidden="true" />}
                  <span>
                    <strong>
                      {contact.phoneHref
                        ? `Direkt zu ${contact.operatorName}`
                        : 'Direkt zu Andrej'}
                    </strong>
                    <small>Du kannst trotzdem ganz normal weiterfragen.</small>
                  </span>
                  <a href={contact.phoneHref ?? contact.actionHref}>
                    {contact.phoneHref ? 'Anrufen' : 'Kontakt'}
                  </a>
                </div>
              )}

              {errorMessage && (
                <div className="support-inline-error" role="alert">
                  <span>{errorMessage}</span>
                  {draft.trim() && (
                    <button type="button" onClick={() => void sendMessage()} disabled={phase === 'sending'}>
                      <RefreshCw aria-hidden="true" /> Erneut versuchen
                    </button>
                  )}
                  <a href={contact.phoneHref ?? contact.actionHref}>
                    {contact.phoneHref ? <Phone aria-hidden="true" /> : <MapPin aria-hidden="true" />}
                    {contact.phoneHref ? 'Anrufen' : 'Kontakt'}
                  </a>
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
            <a href="/datenschutz/">Datenschutz</a>
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
