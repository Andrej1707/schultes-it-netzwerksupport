import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { contactForPage } from '../site/contacts'
import { siteConfig } from '../site/config'
import { serviceNavigationGroups } from '../site/navigation'
import { createMenuHoverIntent } from '../site/menuHoverIntent'
import type { SitePage } from '../site/types'

export function PremiumImage({
  name,
  alt,
  eager = false,
  className = '',
  sizes = '(max-width: 760px) 100vw, 1200px',
}: {
  name: 'workspace' | 'wifi' | 'support'
  alt: string
  eager?: boolean
  className?: string
  sizes?: string
}) {
  return (
    <img
      className={className}
      src={`/images/${name}-1280.webp`}
      srcSet={`/images/${name}-640.webp 640w, /images/${name}-1280.webp 1280w, /images/${name}-1920.webp 1920w`}
      sizes={sizes}
      width={1536}
      height={1024}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  )
}

export function PremiumLogo() {
  return (
    <a className="p-logo" href="/" aria-label="Schultes IT – Startseite">
      <img src="/favicon.svg" alt="" width={30} height={30} />
      <span>Schultes <b>IT</b></span>
    </a>
  )
}

function ServiceNavigation({ page, context }: { page: SitePage; context: 'menu' | 'footer' }) {
  return (
    <div className={`sn-service-groups sn-service-groups-${context}`}>
      {serviceNavigationGroups.map((group) => (
        <section className={`sn-service-group sn-group-${group.id}`} key={group.id} aria-labelledby={`${context}-${group.id}`}>
          <h2 id={`${context}-${group.id}`}>{group.title}</h2>
          <ul>
            {group.links.map((link) => (
              <li key={link.slug}>
                <a href={link.href} aria-current={page.path === link.href ? 'page' : undefined}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export function PremiumShell({ page, children }: { page: SitePage; children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null)
  const summary = useRef<HTMLElement>(null)
  const contact = contactForPage(page)
  const phoneHref = contact.phoneHref ?? siteConfig.remoteSupport.phoneHref
  const phoneDisplay = contact.phoneDisplay ?? siteConfig.remoteSupport.phoneDisplay
  const email = contact.email ?? siteConfig.remoteSupport.email

  useEffect(() => {
    const details = menu.current
    const trigger = summary.current
    const panel = details?.querySelector<HTMLElement>('.sn-menu-panel')
    if (!details || !trigger || !panel) return
    const desktopHover = window.matchMedia('(min-width: 861px) and (hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let closeTimer: number | undefined
    let suppressHoverUntilLeave = false
    const reflectOpen = () => { document.body.dataset.menuOpen = String(details.open) }
    const cancelClose = () => {
      if (closeTimer !== undefined) window.clearTimeout(closeTimer)
      closeTimer = undefined
    }
    const finishClose = () => {
      cancelClose()
      details.open = false
      delete details.dataset.menuMotion
      reflectOpen()
    }
    const openMenu = () => {
      cancelClose()
      if (!desktopHover.matches || reducedMotion.matches) {
        delete details.dataset.menuMotion
        details.open = true
      } else {
        if (!details.open) {
          details.dataset.menuMotion = 'closed'
          details.open = true
          // Establish the initial frame; reversals keep their interpolated CSS values.
          panel.getBoundingClientRect()
        }
        details.dataset.menuMotion = 'open'
      }
      reflectOpen()
    }
    const closeMenu = (animate = true) => {
      hoverIntent.cancel()
      if (!details.open) return
      if (!animate || !desktopHover.matches || reducedMotion.matches) return finishClose()
      if (details.dataset.menuMotion === 'closed') return
      details.dataset.menuMotion = 'closed'
      closeTimer = window.setTimeout(finishClose, 180)
    }
    const hasKeyboardFocus = () => {
      const focused = document.activeElement
      return focused instanceof Element && details.contains(focused) && focused.matches(':focus-visible')
    }
    const hoverIntent = createMenuHoverIntent({
      isOpen: () => details.open,
      open: openMenu,
      close: () => { if (!hasKeyboardFocus()) closeMenu() },
    })
    const enter = (event: PointerEvent) => {
      if (desktopHover.matches && event.pointerType !== 'touch' && !suppressHoverUntilLeave) hoverIntent.enter()
    }
    const leave = (event: PointerEvent) => {
      suppressHoverUntilLeave = false
      if (desktopHover.matches && event.pointerType !== 'touch') hoverIntent.leave()
    }
    const toggleWithClick = (event: MouseEvent) => {
      event.preventDefault()
      hoverIntent.cancel()
      if (details.open && details.dataset.menuMotion !== 'closed') {
        suppressHoverUntilLeave = true
        closeMenu(event.detail !== 0)
      } else openMenu()
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      hoverIntent.cancel()
      if (!details.open) return
      suppressHoverUntilLeave = true
      trigger.focus()
      closeMenu(false)
      event.preventDefault()
    }
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !details.contains(event.target)) closeMenu(false)
    }
    const focusOut = (event: FocusEvent) => {
      if (!(event.relatedTarget instanceof Node) || !details.contains(event.relatedTarget)) closeMenu(false)
    }
    const focusIn = () => {
      hoverIntent.cancel()
      if (details.open) openMenu()
    }
    const followLink = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a')) closeMenu(false)
    }
    const changeInputMode = () => {
      hoverIntent.cancel()
      suppressHoverUntilLeave = false
      if (panel.contains(document.activeElement)) trigger.focus()
      finishClose()
    }
    const changeMotion = () => {
      if (!reducedMotion.matches) return
      if (details.dataset.menuMotion === 'closed') finishClose()
      else delete details.dataset.menuMotion
    }
    reflectOpen()
    details.addEventListener('toggle', reflectOpen)
    details.addEventListener('pointerenter', enter)
    details.addEventListener('pointerleave', leave)
    details.addEventListener('focusout', focusOut)
    details.addEventListener('focusin', focusIn)
    trigger.addEventListener('click', toggleWithClick)
    panel.addEventListener('click', followLink)
    desktopHover.addEventListener('change', changeInputMode)
    reducedMotion.addEventListener('change', changeMotion)
    document.addEventListener('keydown', escape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      hoverIntent.cancel()
      cancelClose()
      delete details.dataset.menuMotion
      delete document.body.dataset.menuOpen
      details.removeEventListener('toggle', reflectOpen)
      details.removeEventListener('pointerenter', enter)
      details.removeEventListener('pointerleave', leave)
      details.removeEventListener('focusout', focusOut)
      details.removeEventListener('focusin', focusIn)
      trigger.removeEventListener('click', toggleWithClick)
      panel.removeEventListener('click', followLink)
      desktopHover.removeEventListener('change', changeInputMode)
      reducedMotion.removeEventListener('change', changeMotion)
      document.removeEventListener('keydown', escape)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [])

  return (
    <div id="top" className={`premium-site p-kind-${page.kind}`} data-prerendered="true">
      <a className="p-skip" href="#main-content">Zum Inhalt springen</a>
      <header className="p-header sn-header">
        <div className="sn-header-inner">
          <PremiumLogo />
          <nav aria-label="Hauptnavigation" className="sn-navigation">
            <details className="sn-menu" ref={menu}>
              <summary ref={summary} aria-controls="sn-menu-panel">
                <span className="sn-desktop-menu-label">Leistungen & Hilfe</span>
                <span className="sn-mobile-menu-label">Menü</span>
                <ChevronDown className="sn-menu-chevron" size={14} aria-hidden="true" />
                <Menu className="sn-menu-icon-open" size={22} aria-hidden="true" />
                <X className="sn-menu-icon-close" size={22} aria-hidden="true" />
              </summary>
              <div className="sn-menu-panel" id="sn-menu-panel">
                <div className="sn-menu-content">
                  <div className="sn-menu-intro">
                    <p>Gute Hilfe beginnt mit deinem Anliegen.</p>
                    <a href="/leistungen/" aria-current={page.path === '/leistungen/' ? 'page' : undefined}>
                      Alle Leistungen <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                  <ServiceNavigation page={page} context="menu" />
                  <div className="sn-menu-utilities">
                    <a href="/ratgeber/">Hilfethemen durchsuchen</a>
                    <a href="/ueber-schultes-it/">Über Schultes IT</a>
                    <a href="/#kontakt">Kontakt & Termine <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </details>
            <a className="sn-header-link" href="/fernwartung/" aria-current={page.path === '/fernwartung/' ? 'page' : undefined}>Fernwartung</a>
            <a className="sn-header-link" href="/ueber-schultes-it/" aria-current={page.path === '/ueber-schultes-it/' ? 'page' : undefined}>Über uns</a>
            <a className="sn-header-link" href="/#kontakt">Kontakt</a>
          </nav>
          <a className="sn-call" href={phoneHref} aria-label={`Schultes IT anrufen: ${phoneDisplay}`}>
            <Phone size={15} aria-hidden="true" /><span>Anrufen</span>
          </a>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="sn-footer">
        <div className="sn-footer-inner">
          <div className="sn-footer-intro">
            <div>
              <PremiumLogo />
              <p>Persönliche IT-Hilfe in Ludwigsburg und Umgebung.</p>
              <span>Bei dir vor Ort. Deutschlandweit per Fernwartung.</span>
            </div>
            <div className="sn-footer-contact">
              <h2>Einfach persönlich klären.</h2>
              <a href={phoneHref}><Phone size={16} aria-hidden="true" /><span data-nosnippet>{phoneDisplay}</span></a>
              <a href={`mailto:${email}`}>{email}</a>
              <a href="/#kontakt">Kontakt & Termine <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <nav aria-label="Alle Leistungen und Hilfethemen"><ServiceNavigation page={page} context="footer" /></nav>
          <nav className="sn-footer-utilities" aria-label="Weitere Informationen">
            <a href="/leistungen/">Alle Leistungen</a>
            <a href="/ratgeber/">Ratgeber</a>
            <a href="/ueber-schultes-it/">Über Schultes IT</a>
            <a href="https://github.com/Andrej1707" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
          <div className="sn-footer-bottom">
            <span>© {new Date().getFullYear()} Andrej Schultes</span>
            <a href="/impressum/">Impressum</a>
            <a href="/datenschutz/">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
