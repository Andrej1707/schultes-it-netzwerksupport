import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { contactForPage } from '../site/contacts'
import { siteConfig } from '../site/config'
import { serviceNavigationGroups } from '../site/navigation'
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
  const header = useRef<HTMLElement>(null)
  const contact = contactForPage(page)
  const phoneHref = contact.phoneHref ?? siteConfig.remoteSupport.phoneHref
  const phoneDisplay = contact.phoneDisplay ?? siteConfig.remoteSupport.phoneDisplay
  const email = contact.email ?? siteConfig.remoteSupport.email

  useEffect(() => {
    const details = menu.current
    if (!details) return
    const reflectOpen = () => { document.body.dataset.menuOpen = String(details.open) }
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !details.open) return
      details.open = false
      summary.current?.focus()
      event.preventDefault()
    }
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) details.open = false
    }
    reflectOpen()
    details.addEventListener('toggle', reflectOpen)
    document.addEventListener('keydown', escape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      delete document.body.dataset.menuOpen
      details.removeEventListener('toggle', reflectOpen)
      document.removeEventListener('keydown', escape)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [])

  return (
    <div id="top" className={`premium-site p-kind-${page.kind}`} data-prerendered="true">
      <a className="p-skip" href="#main-content">Zum Inhalt springen</a>
      <header className="p-header sn-header" ref={header}>
        <div className="sn-header-inner">
          <PremiumLogo />
          <nav aria-label="Hauptnavigation" className="sn-navigation">
            <details
              className="sn-menu"
              ref={menu}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false
              }}
            >
              <summary ref={summary} aria-controls="sn-menu-panel">
                <span className="sn-desktop-menu-label">Leistungen & Hilfe</span>
                <span className="sn-mobile-menu-label">Menü</span>
                <ChevronDown className="sn-menu-chevron" size={14} aria-hidden="true" />
                <Menu className="sn-menu-icon-open" size={22} aria-hidden="true" />
                <X className="sn-menu-icon-close" size={22} aria-hidden="true" />
              </summary>
              <div
                className="sn-menu-panel"
                id="sn-menu-panel"
                onClick={(event) => {
                  if (event.target instanceof Element && event.target.closest('a') && menu.current) menu.current.open = false
                }}
              >
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
