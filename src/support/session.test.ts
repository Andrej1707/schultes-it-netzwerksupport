import { afterEach, describe, expect, it, vi } from 'vitest'
import { readSession, removeSession, saveSession } from './session'

afterEach(() => vi.unstubAllGlobals())

describe('support session storage', () => {
  it('continues safely when browser storage access is blocked', () => {
    const blocked = () => { throw new DOMException('Storage blocked', 'SecurityError') }
    vi.stubGlobal('sessionStorage', { getItem: blocked, setItem: blocked, removeItem: blocked })

    expect(readSession('chat')).toBeNull()
    expect(() => saveSession('chat', { token: 'valid', expiresAt: Date.now() + 60_000 })).not.toThrow()
    expect(() => removeSession('chat')).not.toThrow()
  })

  it('accepts an unexpired session', () => {
    const session = { token: 'valid', expiresAt: Date.now() + 60_000 }
    vi.stubGlobal('sessionStorage', { getItem: () => JSON.stringify(session) })
    expect(readSession('chat')).toEqual(session)
  })

  it.each([
    'invalid json',
    'null',
    '{}',
    JSON.stringify({ token: 'valid' }),
    JSON.stringify({ token: 'valid', expiresAt: 'never' }),
    JSON.stringify({ token: 123, expiresAt: Date.now() + 60_000 }),
    JSON.stringify({ token: 'valid', expiresAt: 0 }),
  ])('discards unusable persisted data: %s', (value) => {
    const removeItem = vi.fn()
    vi.stubGlobal('sessionStorage', { getItem: () => value, removeItem })
    expect(readSession('chat')).toBeNull()
    expect(removeItem).toHaveBeenCalledWith('chat')
  })
})
