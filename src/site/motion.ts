type MotionKind = 'rise' | 'image' | 'hero'

// Small blocks only: no nested reveals, legal copy, live search results or support UI.
const groups: { selector: string; kind: MotionKind; stagger?: boolean }[] = [
  {
    selector: '.p-home-heading > h1, .ps-hero-copy > h1, .pn-page-intro > h1',
    kind: 'hero',
  },
  {
    selector:
      '.p-home-product, .ps-hero > :last-child, .pn-local-hero-visual, .pn-guide-cover, .pn-owner-composition, .pn-about-visual, .pn-region-diagram',
    kind: 'image',
  },
  {
    selector:
      '.p-section-heading, .p-endnote > h2, .ps-section-intro, .ps-related-heading, .pn-section-title, .pn-about-statement > h2',
    kind: 'rise',
  },
  {
    selector:
      '.p-product-copy, .p-product-card > img, .p-web-showcase, .p-support-stage > *, .p-local-stage > *, .p-home-about > *, .pn-product-copy, .pn-product-visual, .pn-about-story',
    kind: 'rise',
  },
  {
    selector:
      '.p-help-topics > a, .p-home-process ol > li, .ps-situation-list > article, .ps-solution-list > article, .ps-audience-list > article, .ps-process > ol > li, .ps-related-list > a, .pn-local-service-grid > a, .pn-price-grid > article, .pn-project-index > article, .pn-process-list > li, .pn-responsibilities > article, .pn-owner-steps > li, .pn-about-principles > article',
    kind: 'rise',
    stagger: true,
  },
]

/** Progressive enhancement: HTML and CSS are visible before/without this controller. */
export function installPageMotion(root: HTMLElement) {
  if (!('IntersectionObserver' in window) || root.querySelector('.p-legal'))
    return () => {}

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const targets = new Map<HTMLElement, { kind: MotionKind; delay: number }>()
  const seen = new WeakSet<HTMLElement>()
  let observer: IntersectionObserver | undefined

  for (const group of groups) {
    const siblings = new Map<Element | null, number>()
    for (const element of root.querySelectorAll<HTMLElement>(group.selector)) {
      const index = siblings.get(element.parentElement) ?? 0
      siblings.set(element.parentElement, index + 1)
      targets.set(element, {
        kind: group.kind,
        delay: group.stagger ? Math.min(index, 3) * 65 : 0,
      })
    }
  }
  // A parent and child must never fade or move on top of each other.
  for (const element of targets.keys()) {
    let parent = element.parentElement
    while (parent && parent !== root) {
      if (targets.has(parent)) {
        targets.delete(element)
        break
      }
      parent = parent.parentElement
    }
  }

  const settle = (element: HTMLElement) => {
    seen.add(element)
    observer?.unobserve(element)
    element.classList.remove('p-motion-enter')
    element.style.removeProperty('--p-motion-delay')
    element.style.removeProperty('--p-motion-opacity')
    element.dataset.motion = 'done'
  }
  const settleAll = () => {
    observer?.disconnect()
    for (const element of targets.keys()) settle(element)
  }
  const reveal = (element: HTMLElement, initiallyVisible = false) => {
    if (seen.has(element)) return
    seen.add(element)
    observer?.unobserve(element)
    if (preference.matches || document.visibilityState === 'hidden') {
      settle(element)
      return
    }
    const settings = targets.get(element)!
    const mobile = window.matchMedia('(max-width: 700px)').matches
    element.dataset.motion = settings.kind
    element.style.setProperty(
      '--p-motion-delay',
      `${mobile ? 0 : settings.delay}ms`,
    )
    // Never fade out already painted introductory content or the main product image.
    element.style.setProperty(
      '--p-motion-opacity',
      initiallyVisible || settings.kind === 'hero' ? '1' : '0',
    )
    element.classList.add('p-motion-enter')
  }
  const settleTarget = (target: Element) => {
    for (const element of targets.keys()) {
      if (
        element === target ||
        element.contains(target) ||
        target.contains(element)
      )
        settle(element)
    }
  }
  const onHashChange = () => {
    try {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1)),
      )
      if (target) settleTarget(target)
    } catch {
      /* A malformed external hash must not affect the page. */
    }
  }
  const onFocus = (event: FocusEvent) => {
    if (event.target instanceof Element) settleTarget(event.target)
  }
  const onAnimationEnd = (event: AnimationEvent) => {
    if (
      event.target instanceof HTMLElement &&
      targets.has(event.target) &&
      event.animationName.startsWith('p-motion-')
    )
      settle(event.target)
  }

  if (!preference.matches) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement)
        }
      },
      { rootMargin: '0px 0px 32px 0px', threshold: 0 },
    )
    onHashChange()
    // Collect geometry before adding animation classes to avoid alternating layout writes/reads.
    const bounds = [...targets].map(([element]) => ({
      element,
      rect: element.getBoundingClientRect(),
    }))
    for (const { element, rect } of bounds) {
      if (seen.has(element) || rect.height === 0) continue
      if (rect.top < window.innerHeight && rect.bottom > 0)
        reveal(element, true)
      else if (rect.bottom <= 0) settle(element)
      else observer.observe(element)
    }
  }

  // Changes to accessibility preferences take effect immediately, including active reveals.
  preference.addEventListener('change', settleAll)
  root.addEventListener('focusin', onFocus)
  root.addEventListener('animationend', onAnimationEnd)
  window.addEventListener('hashchange', onHashChange)
  window.addEventListener('beforeprint', settleAll)
  return () => {
    settleAll()
    for (const element of targets.keys()) delete element.dataset.motion
    preference.removeEventListener('change', settleAll)
    root.removeEventListener('focusin', onFocus)
    root.removeEventListener('animationend', onAnimationEnd)
    window.removeEventListener('hashchange', onHashChange)
    window.removeEventListener('beforeprint', settleAll)
  }
}
