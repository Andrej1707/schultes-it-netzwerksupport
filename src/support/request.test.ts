import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getSupportErrorMessage, requestSupportJson } from './request'
import { SUPPORT_CHAT_REQUEST_TIMEOUT_MS } from './timing'

beforeEach(() => vi.useFakeTimers())
afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('support requests', () => {
  it('receives a valid slow reply after the former 35-second cutoff', async () => {
    const fetch = vi.fn((_url: string, init: RequestInit) => new Promise<Response>((resolve, reject) => {
      const timeout = setTimeout(() => resolve(Response.json({ reply: 'Hier ist die Antwort.' })), 57_000)
      init.signal?.addEventListener('abort', () => {
        clearTimeout(timeout)
        reject(new DOMException('Aborted', 'AbortError'))
      }, { once: true })
    }))
    vi.stubGlobal('fetch', fetch)
    const result = requestSupportJson('https://support.test/chat', { method: 'POST' }, SUPPORT_CHAT_REQUEST_TIMEOUT_MS)
    await vi.advanceTimersByTimeAsync(57_000)
    await expect(result).resolves.toEqual({ reply: 'Hier ist die Antwort.' })
    expect(fetch).toHaveBeenCalledOnce()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('ends a hanging request with a specific timeout without automatically sending it again', async () => {
    const fetch = vi.fn((_url: string, init: RequestInit) => new Promise<Response>((_resolve, reject) => {
      init.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true })
    }))
    vi.stubGlobal('fetch', fetch)
    const result = expect(requestSupportJson('https://support.test/chat', { method: 'POST' }, SUPPORT_CHAT_REQUEST_TIMEOUT_MS))
      .rejects.toMatchObject({ code: 'request_timeout' })
    await vi.advanceTimersByTimeAsync(SUPPORT_CHAT_REQUEST_TIMEOUT_MS)
    await result
    expect(fetch).toHaveBeenCalledOnce()
    expect(vi.getTimerCount()).toBe(0)
    expect(getSupportErrorMessage('request_timeout')).toContain('Nachricht bleibt im Eingabefeld')
  })

  it('does not turn a timeout while receiving the JSON body into a successful empty answer', async () => {
    vi.stubGlobal('fetch', vi.fn(async (_url: string, init: RequestInit) => ({
      ok: true,
      json: () => new Promise((_resolve, reject) => {
        init.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true })
      }),
    })))
    const result = expect(requestSupportJson('https://support.test/chat', { method: 'POST' }, 1_000))
      .rejects.toMatchObject({ code: 'request_timeout' })
    await vi.advanceTimersByTimeAsync(1_000)
    await result
    expect(vi.getTimerCount()).toBe(0)
  })

  it('preserves server error codes and status for session recovery', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => Response.json({ error: 'session_expired' }, { status: 401 })))
    await expect(requestSupportJson('https://support.test/chat', { method: 'POST' }, SUPPORT_CHAT_REQUEST_TIMEOUT_MS))
      .rejects.toMatchObject({ code: 'session_expired', status: 401 })
    expect(vi.getTimerCount()).toBe(0)
  })

  it('distinguishes an in-flight request from a rate limit', () => {
    expect(getSupportErrorMessage('request_in_progress')).toContain('noch verarbeitet')
    expect(getSupportErrorMessage('request_in_progress')).not.toContain('zu viele')
  })
})
