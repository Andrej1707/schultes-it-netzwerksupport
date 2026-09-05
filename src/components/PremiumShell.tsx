import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { contactForPage } from '../site/contacts'
import { siteConfig } from '../site/config'
import { activeLocations } from '../site/locations'
import { publicServicePages } from '../site/publicServices'
import type { SitePage } from '../site/types'

const navigation = [
  ['Fernwartung', '/fernwartung/'],
  ['Leistungen', '/leistungen/'],
  ['Standorte', '/standorte/'],
  ['Ratgeber', '/ratgeber/'],
  ['Über uns', '/ueber-schultes-it/'],
] as const

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
      <span>
        Schultes <b>IT</b>
      </span>
    </a>
  )
}

export function PremiumShell({
  page,
  children,
}: {
  page: SitePage
  children: ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const contact = contactForPage(page)
  useEffect(() => {
    document.body.dataset.menuOpen = String(menuOpen)
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', escape)
    return () => {
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', escape)
    }
  }, [menuOpen])
  return (
    <div
      id="top"
      className={`premium-site p-kind-${page.kind}`}
      data-prerendered="true"
    >
      <a className="p-skip" href="#main-content">
        Zum Inhalt springen
      </a>
      <header className="p-header">
        <div className="p-header-inner">
          <PremiumLogo />
          <nav aria-label="Hauptnavigation" className="p-navigation">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                aria-current={page.path === href ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="p-header-actions">
            <a
              className="p-header-contact"
              href={contact.phoneHref ?? '/fernwartung/'}
            >
              {contact.phoneHref ? (
                <>
                  <Phone size={15} aria-hidden="true" /> Anrufen
                </>
              ) : (
                <>
                  Hilfe finden <ArrowUpRight size={15} aria-hidden="true" />
                </>
              )}
            </a>
            <button
              ref={menuButton}
              className="p-menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              aria-controls="p-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <nav
          id="p-mobile-menu"
          className="p-mobile-menu"
          aria-label="Mobile Navigation"
          hidden={!menuOpen}
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a href="/standortinhaber-werden/">
            Standortinhaber werden
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="p-footer">
        <div className="p-footer-top">
          <div>
            <PremiumLogo />
            <p>Persönliche IT. Durchdacht bis ins Detail.</p>
            <span>
              Deutschlandweit per Fernwartung.
              <br />
              Vor Ort in {activeLocations.map((l) => l.city).join(', ')}.
            </span>
          </div>
          <div>
            <h2>Dein nächster Schritt.</h2>
            <a className="p-text-link" href="/fernwartung/">
              Fernwartung anfragen <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="p-text-link" href="/standorte/">
              Hilfe vor Ort finden <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div>
            <h2>Schultes IT</h2>
            <a href="/leistungen/">Leistungen</a>
            <a href="/ratgeber/">Ratgeber</a>
            <a href="/ueber-schultes-it/">Über Schultes IT</a>
            <a href="/standortinhaber-werden/">Standortinhaber werden</a>
            <a
              href="https://github.com/Andrej1707"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <details className="p-footer-directory">
          <summary>
            Alle Leistungen und Hilfethemen{' '}
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div>
            {publicServicePages.map((service) => (
              <a href={service.path} key={service.slug}>
                {service.title}
                {service.locationId
                  ? ` · ${activeLocations.find((l) => l.id === service.locationId)?.city ?? ''}`
                  : ''}
              </a>
            ))}
          </div>
        </details>
        <div className="p-footer-bottom">
          <span>© {new Date().getFullYear()} Andrej Schultes</span>
          <a href="/impressum/">Impressum</a>
          <a href="/datenschutz/">Datenschutz</a>
          <a href={`mailto:${contact.email ?? siteConfig.remoteSupport.email}`}>
            Kontakt
          </a>
        </div>
      </footer>
    </div>
  )
}
