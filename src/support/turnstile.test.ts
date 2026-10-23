import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

class ScriptStub extends EventTarget {
  dataset: Record<string, string> = {}
  remove = vi.fn()
}

beforeEach(() => {
  vi.resetModules()
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

function setup() {
  const scripts: ScriptStub[] = []
  const browser: { turnstile?: object; setTimeout: typeof setTimeout; clearTimeout: typeof clearTimeout } = {
    setTimeout,
    clearTimeout,
  }
  vi.stubGlobal('window', browser)
  vi.stubGlobal('document', {
    querySelector: () => scripts.find((script) => !script.remove.mock.calls.length) ?? null,
    createElement: () => new ScriptStub(),
    head: { appendChild: (script: ScriptStub) => scripts.push(script) },
  })
  return { scripts, browser }
}

describe('Turnstile loading', () => {
  it('shares a pending load and returns the loaded API', async () => {
    const { scripts, browser } = setup()
    const { loadTurnstile } = await import('./turnstile')
    const first = loadTurnstile()
    expect(loadTurnstile()).toBe(first)
    expect(scripts).toHaveLength(1)
    browser.turnstile = { render: vi.fn(), reset: vi.fn(), remove: vi.fn() }
    scripts[0].dispatchEvent(new Event('load'))
    await expect(first).resolves.toBe(browser.turnstile)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('allows a new attempt after a failed script instead of waiting for an event that already fired', async () => {
    const { scripts, browser } = setup()
    const { loadTurnstile } = await import('./turnstile')
    const failed = expect(loadTurnstile()).rejects.toThrow('turnstile_unavailable')
    scripts[0].dispatchEvent(new Event('error'))
    await failed
    expect(scripts[0].remove).toHaveBeenCalledOnce()

    const retry = loadTurnstile()
    expect(scripts).toHaveLength(2)
    browser.turnstile = { render: vi.fn(), reset: vi.fn(), remove: vi.fn() }
    scripts[1].dispatchEvent(new Event('load'))
    await expect(retry).resolves.toBe(browser.turnstile)
  })

  it('fails a hanging script in finite time and makes it retryable', async () => {
    const { scripts } = setup()
    const { loadTurnstile } = await import('./turnstile')
    const failed = expect(loadTurnstile()).rejects.toThrow('turnstile_unavailable')
    await vi.advanceTimersByTimeAsync(15_000)
    await failed
    expect(scripts[0].remove).toHaveBeenCalledOnce()
    expect(vi.getTimerCount()).toBe(0)
  })
})
