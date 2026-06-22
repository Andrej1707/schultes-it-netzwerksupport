import { describe, expect, it } from 'vitest'
import {
  MAX_MESSAGE_CHARS,
  normalizeMessage,
  parsePositiveLimit,
  reserveTokenUpperBound,
  utcDay,
  utf8Length,
} from '../src/limits'

describe('support input limits', () => {
  it('normalizes safe text and removes control characters', () => {
    expect(normalizeMessage('  WLAN\u0000 geht nicht  ')).toBe('WLAN geht nicht')
  })

  it('rejects empty, non-text and oversized messages', () => {
    expect(normalizeMessage('   ')).toBeNull()
    expect(normalizeMessage({})).toBeNull()
    expect(normalizeMessage('x'.repeat(MAX_MESSAGE_CHARS + 1))).toBeNull()
  })

  it('estimates tokens conservatively without counting every UTF-8 byte as a token', () => {
    const prompt = 'Du bist ein Assistent.'
    const history = [{ content: 'Mein Router blinkt.' }]
    const message = 'Was kann ich prüfen?'
    const inputBytes = utf8Length([prompt, history[0].content, message].join('\n'))
    const reservation = reserveTokenUpperBound(prompt, history, message)
    expect(reservation).toBeGreaterThan(inputBytes)
    expect(reservation).toBeLessThan(inputBytes + 450 + 256)
  })

  it('uses safe defaults for invalid limits', () => {
    expect(parsePositiveLimit(undefined, 5)).toBe(5)
    expect(parsePositiveLimit('-1', 5)).toBe(5)
    expect(parsePositiveLimit('12', 5)).toBe(12)
  })

  it('uses a stable UTC budget day', () => {
    expect(utcDay(Date.UTC(2026, 5, 22, 23, 59))).toBe('2026-06-22')
  })
})
