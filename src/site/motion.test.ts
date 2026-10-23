import { afterEach, describe, expect, it, vi } from 'vitest'
import { installPageMotion } from './motion'

// A small DOM/observer harness keeps lifecycle regressions testable without a
// browser dependency. Geometry and intersection delivery are controlled by tests.
class MotionElement extends EventTarget {
  selector = '.p-help-topics > a'
  parentElement: MotionElement | null = null
  dataset: Record<string, string> = {}
  classes = new Set<string>()
  properties = new Map<string, string>()
  rect = { top: 900, bottom: 1100, width: 300, height: 200 }
  classList = {
    add: (...names: string[]) => names.forEach((name) => this.classes.add(name)),
    remove: (...names: string[]) => names.forEach((name) => this.classes.delete(name)),
    contains: (name: string) => this.classes.has(name),
    toggle: (name: string, force: boolean) =>
      force ? this.classes.add(name) : this.classes.delete(name),
  }
  style = {
    setProperty: (name: string, value: string) => this.properties.set(name, value),
    removeProperty: (name: string) => this.properties.delete(name),
  }
  getBoundingClientRect() { return this.rect }
  contains(target: MotionElement): boolean {
    return this === target || !!target?.parentElement && this.contains(target.parentElement)
  }
}

let cleanup: (() => void) | undefined
afterEach(() => {
  cleanup?.()
  cleanup = undefined
  vi.unstubAllGlobals()
})

function setup(elements: MotionElement[], reduced = false) {
  const preference = Object.assign(new EventTarget(), { matches: reduced })
  const document = Object.assign(new EventTarget(), {
    visibilityState: 'visible',
    getElementById: () => null,
  })
  const window = Object.assign(new EventTarget(), {
    innerHeight: 800,
    location: { hash: '' },
    matchMedia: () => preference,
    IntersectionObserver: true,
  })
  const root = Object.assign(new MotionElement(), {
    querySelector: () => null,
    querySelectorAll: (selector: string) => elements.filter((element) =>
      selector.split(',').some((part) => part.trim() === element.selector)),
  })
  for (const element of elements) element.parentElement = root
  let callback: IntersectionObserverCallback
  const observed = new Set<Element>()
  class Observer {
    constructor(onChange: IntersectionObserverCallback) { callback = onChange }
    observe(element: Element) { observed.add(element) }
    unobserve(element: Element) { observed.delete(element) }
    disconnect() { observed.clear() }
  }
  vi.stubGlobal('window', window)
  vi.stubGlobal('document', document)
  vi.stubGlobal('Element', MotionElement)
  vi.stubGlobal('HTMLElement', MotionElement)
  vi.stubGlobal('IntersectionObserver', Observer)
  cleanup = installPageMotion(root as unknown as HTMLElement)
  const intersect = (element: MotionElement) => callback([
    { target: element, isIntersecting: true, boundingClientRect: element.rect },
  ] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
  const dispatch = (type: string, target: MotionElement, extras = {}) => {
    const event = new Event(type)
    Object.defineProperty(event, 'target', { value: target })
    Object.assign(event, extras)
    root.dispatchEvent(event)
  }
  return { root, preference, document, window, observed, intersect, dispatch }
}

describe('progressive page motion', () => {
  it('keeps already painted content still and prepares only offscreen content', () => {
    const hero = new MotionElement()
    hero.selector = '.p-home-heading > h1'
    hero.rect = { top: 100, bottom: 250, width: 600, height: 150 }
    const below = new MotionElement()
    setup([hero, below])
    expect(hero.classes.size).toBe(0)
    expect(hero.dataset.motion).toBe('done')
    expect(below.classes.has('p-motion-pending')).toBe(true)
    expect(below.classes.has('p-motion-enter')).toBe(false)
  })

  it('reveals once and removes temporary state when the animation finishes or is cancelled', () => {
    for (const ending of ['animationend', 'animationcancel']) {
      const card = new MotionElement()
      const { intersect, dispatch } = setup([card])
      intersect(card)
      expect(card.classes.has('p-motion-pending')).toBe(false)
      expect(card.classes.has('p-motion-enter')).toBe(true)
      dispatch(ending, card, { animationName: 'p-motion-rise' })
      expect(card.classes.size).toBe(0)
      expect(card.properties.size).toBe(0)
      intersect(card)
      expect(card.classes.size).toBe(0)
      cleanup?.()
    }
  })

  it('does not hide content when reduced motion is already enabled', () => {
    const card = new MotionElement()
    const { observed } = setup([card], true)
    expect(card.classes.size).toBe(0)
    expect(observed.size).toBe(0)
  })

  it('immediately reveals pending and active content when reduced motion is enabled', () => {
    const active = new MotionElement()
    const pending = new MotionElement()
    const { preference, intersect, observed } = setup([active, pending])
    intersect(active)
    preference.matches = true
    preference.dispatchEvent(new Event('change'))
    expect(active.classes.size).toBe(0)
    expect(pending.classes.size).toBe(0)
    expect(observed.size).toBe(0)
  })

  it('never leaves a focused block hidden', () => {
    const card = new MotionElement()
    const { dispatch, observed } = setup([card])
    dispatch('focusin', card)
    expect(card.classes.size).toBe(0)
    expect(observed.has(card as unknown as Element)).toBe(false)
  })

  it('does not replay an active animation or hide visible content when returning to a tab', () => {
    const active = new MotionElement()
    const pending = new MotionElement()
    const { document, intersect } = setup([active, pending])
    intersect(active)
    document.visibilityState = 'hidden'
    document.dispatchEvent(new Event('visibilitychange'))
    pending.rect = { top: 100, bottom: 300, width: 300, height: 200 }
    document.visibilityState = 'visible'
    document.dispatchEvent(new Event('visibilitychange'))
    expect(active.classes.size).toBe(0)
    expect(pending.classes.size).toBe(0)
  })

  it('shows all content for printing and restores unmodified markup on cleanup', () => {
    const card = new MotionElement()
    const { window } = setup([card])
    window.dispatchEvent(new Event('beforeprint'))
    expect(card.classes.size).toBe(0)
    cleanup?.()
    expect(card.dataset.motion).toBeUndefined()
    expect(card.properties.size).toBe(0)
  })

  it('does not fade out responsive content that becomes visible after setup', () => {
    const card = new MotionElement()
    card.rect = { top: 0, bottom: 0, width: 0, height: 0 }
    const { intersect } = setup([card])
    card.rect = { top: 100, bottom: 300, width: 300, height: 200 }
    intersect(card)
    expect(card.classes.size).toBe(0)
    expect(card.dataset.motion).toBe('done')
  })
})
