import { afterEach, describe, expect, it, vi } from 'vitest'
import { createMenuHoverIntent } from './menuHoverIntent'

afterEach(() => vi.useRealTimers())

function setup(initiallyOpen = false) {
  vi.useFakeTimers()
  let opened = initiallyOpen
  const open = vi.fn(() => { opened = true })
  const close = vi.fn(() => { opened = false })
  return { open, close, intent: createMenuHoverIntent({ isOpen: () => opened, open, close }) }
}

describe('desktop menu hover intent', () => {
  it('ignores a quick pass over the trigger instead of opening after the pointer left', () => {
    const { intent, open } = setup()
    intent.enter()
    vi.advanceTimersByTime(90)
    intent.leave()
    vi.advanceTimersByTime(500)
    expect(open).not.toHaveBeenCalled()
  })

  it('opens after a short intentional hover and tolerates the gap into the panel', () => {
    const { intent, open, close } = setup()
    intent.enter()
    vi.advanceTimersByTime(120)
    expect(open).toHaveBeenCalledTimes(1)
    intent.leave()
    vi.advanceTimersByTime(100)
    intent.enter()
    vi.advanceTimersByTime(500)
    expect(close).not.toHaveBeenCalled()
  })

  it('reverses an open panel immediately and only closes after a fresh departure', () => {
    const { intent, open, close } = setup(true)
    intent.leave()
    vi.advanceTimersByTime(179)
    intent.enter()
    expect(open).toHaveBeenCalledTimes(1)
    intent.leave()
    vi.advanceTimersByTime(179)
    expect(close).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1)
    expect(close).toHaveBeenCalledTimes(1)
  })

  it('cancels pending work for Escape, touch changes, and unmount', () => {
    const { intent, open, close } = setup()
    intent.enter()
    intent.cancel()
    vi.advanceTimersByTime(500)
    expect(open).not.toHaveBeenCalled()
    expect(close).not.toHaveBeenCalled()
  })
})
