import { useCallback, useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Globe2,
  Laptop,
  LocateFixed,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Radar,
  Router,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react'
import {
  getServicePath,
  nationalRemotePages,
  primaryServicePages,
  topicPages,
} from '../content/services'
import type { ServiceIconName } from '../content/types'
import {
  Logo,
  NetworkCanvas,
  ShortcutMenu,
  SiteFooter,
} from '../components/SiteChrome'
import { findNearestLocation } from '../site/locationFinder'
import { locationById, locations } from '../site/locations'
import { siteConfig } from '../site/config'
import type { SitePage } from '../site/types'

const iconByName: Record<ServiceIconName, LucideIcon> = {
  laptop: Laptop,
  router: Router,
  globe: Globe2,
  bot: Bot,
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

type LocationState =
  | { status: 'idle' }
  | { status: 'locating' }
  | { status: 'unavailable'; message: string }
  | { status: 'outside'; message: string }

function LocationFinder({ autoDetectGranted = false }: { autoDetectGranted?: boolean }) {
  const [state, setState] = useState<LocationState>({ status: 'idle' })

  const locate = useCallback(() => {
    if (!navigator.geolocation) {
      setState({
        status: 'unavailable',
        message: 'Dein Browser unterstützt keine Standortsuche. Du kannst den Standort direkt auswählen.',
      })
      return
    }

    setState({ status: 'locating' })
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const match = findNearestLocation(
          { latitude: coords.latitude, longitude: coords.longitude },
          locations,
        )

        if (!match) {
          setState({
            status: 'unavailable',
            message: 'Aktuell ist kein aktiver Vor-Ort-Standort hinterlegt.',
          })
          return
        }

        if (match.inServiceArea) {
          window.location.assign(match.location.path)
          return
        }

        setState({
          status: 'outside',
          message:
            'Noch kein Vor-Ort-Standort deckt deine Region ab. Per Fernwartung kann Schultes IT dir trotzdem deutschlandweit helfen.',
        })
      },
      (error) => {
        setState({
          status: 'unavailable',
          message:
            error.code === error.PERMISSION_DENIED
              ? 'Standortzugriff wurde nicht freigegeben. Deine Auswahl unten funktioniert trotzdem.'
              : 'Dein Standort konnte gerade nicht bestimmt werden. Bitte wähle einen Standort manuell.',
        })
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600_000 },
    )
  }, [])

  useEffect(() => {
    if (!autoDetectGranted || !navigator.permissions) return

    void navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
      if (permission.state === 'granted') locate()
    })
  }, [autoDetectGranted, locate])

  return (
    <div className="location-finder">
      <div>
        <span>
          <LocateFixed aria-hidden="true" /> STANDORTFINDER
        </span>
        <strong>Welcher Standort passt zu deiner Region?</strong>
        <p>
          Die Entfernung wird ausschließlich in deinem Browser berechnet. Koordinaten werden nicht
          an Schultes IT übertragen oder gespeichert.
        </p>
      </div>
      <button type="button" onClick={locate} disabled={state.status === 'locating'}>
        {state.status === 'locating' ? 'Standort wird geprüft ...' : 'Nächsten Standort finden'}
        <ArrowUpRight aria-hidden="true" />
      </button>
      {state.status !== 'idle' && state.status !== 'locating' ? (
        <p className="location-finder-result" role="status">
          {state.message}
          {state.status === 'outside' ? (
            <a href="/fernwartung/"> Zur deutschlandweiten Fernwartung</a>
          ) : null}
        </p>
      ) : null}
    </div>
  )
}

function NetworkHeader({
  menuOpen,
  onMenuToggle,
}: {
  menuOpen: boolean
  onMenuToggle: () => void
}) {
  return (
    <header className="site-header service-header">
      <Logo />
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        <a href="/fernwartung/">Fernwartung</a>
        <a href="/leistungen/">Leistungen</a>
        <a href="/standorte/">Standorte</a>
        <a href="/ratgeber/">Ratgeber</a>
        <a href="/ueber-schultes-it/">Über Schultes IT</a>
      </nav>
      <div className="header-actions">
        <a className="header-call" href={siteConfig.phoneHref}>
          <Phone size={16} aria-hidden="true" />
          <span data-nosnippet>{siteConfig.phoneDisplay}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          aria-controls="shortcut-menu"
          onClick={onMenuToggle}
        >
          <span className="menu-toggle-label">Menü</span>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function NetworkShell({
  page,
  children,
  compact = false,
}: {
  page: SitePage
  children: React.ReactNode
  compact?: boolean
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    document.body.dataset.networkPage = page.kind
    document.body.dataset.menuOpen = menuOpen ? 'true' : 'false'
    document.title = page.title
    return () => {
      delete document.body.dataset.networkPage
      delete document.body.dataset.menuOpen
    }
  }, [menuOpen, page.kind, page.title])

  return (
    <>
      <a className="skip-link" href="#network-main">
        Zum Inhalt springen
      </a>
      <NetworkCanvas />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true">
        <motion.span style={{ scaleY: scrollYProgress }} />
      </div>

      <NetworkHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
      />
      <ShortcutMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className={`network-page ${compact ? 'network-page-compact' : ''}`} id="network-main">
        {children}
      </main>

      <div className="mobile-contact-dock" aria-label="Schnellkontakt">
        <a href={siteConfig.phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>JETZT ANRUFEN</small>
            <span data-nosnippet>{siteConfig.phoneDisplay}</span>
          </span>
        </a>
        <a href={`mailto:${siteConfig.email}`}>
          <Mail aria-hidden="true" />
          <span>E-Mail</span>
        </a>
      </div>
      <SiteFooter />
    </>
  )
}

function PageHero({ page }: { page: SitePage }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="network-hero">
      <motion.div
        className="network-hero-copy"
        variants={reveal}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        <nav className="service-breadcrumb" aria-label="Brotkrümelnavigation">
          <a href="/">Startseite</a>
          <ChevronRight aria-hidden="true" />
          <span aria-current="page">{page.heading}</span>
        </nav>
        <span className="network-eyebrow">
          <CircleDot aria-hidden="true" />
          {page.eyebrow}
        </span>
        <h1>
          {page.heading}
          <span>{page.accent}</span>
        </h1>
        <p>{page.intro}</p>
      </motion.div>
      <motion.aside
        className="network-signal-card"
        variants={reveal}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        <Radar aria-hidden="true" />
        <span>NETWORK STATUS</span>
        <strong>SKALIERBAR / BEREIT</strong>
        <div>
          <i />
          <i />
          <i />
          <i />
        </div>
      </motion.aside>
    </section>
  )
}

export function BrandHomePage({ page }: { page: SitePage }) {
  const reduceMotion = useReducedMotion()

  return (
    <NetworkShell page={page}>
      <section className="brand-home-hero">
        <motion.div
          className="brand-home-copy"
          variants={reveal}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <span className="network-eyebrow">
            <CircleDot aria-hidden="true" />
            {page.eyebrow}
          </span>
          <h1>
            Technik-Hilfe,
            <span>die dich erreicht.</span>
          </h1>
          <p>
            Schultes IT verbindet sichere Fernwartung in ganz Deutschland mit persönlicher Hilfe
            durch regionale Ansprechpartner.
          </p>
        </motion.div>

        <div className="brand-entry-grid">
          <motion.a
            href="/fernwartung/"
            className="brand-entry brand-entry-remote"
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <span>01 / DEUTSCHLANDWEIT</span>
            <Globe2 aria-hidden="true" />
            <h2>IT-Hilfe per Fernwartung</h2>
            <p>
              Windows, Programme, E-Mail oder Drucker direkt gemeinsam prüfen. Ohne Anfahrt, mit
              deiner Kontrolle.
            </p>
            <strong>
              Fernwartung starten <ArrowUpRight aria-hidden="true" />
            </strong>
          </motion.a>
          <motion.a
            href="/standorte/"
            className="brand-entry brand-entry-local"
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
          >
            <span>02 / REGIONAL</span>
            <MapPin aria-hidden="true" />
            <h2>Persönliche Hilfe vor Ort</h2>
            <p>
              Finde einen Schultes-IT-Standort für PC, WLAN, Router und Technik direkt in deiner
              Region.
            </p>
            <strong>
              Standort finden <ArrowUpRight aria-hidden="true" />
            </strong>
          </motion.a>
        </div>
      </section>

      <section className="network-principles">
        <header>
          <span>03 / EIN SYSTEM, ZWEI WEGE</span>
          <h2>Die Hilfe richtet sich nach dem Problem. Nicht nach der Entfernung.</h2>
        </header>
        <div>
          <article>
            <ShieldCheck aria-hidden="true" />
            <strong>Sicher und nachvollziehbar</strong>
            <p>Keine versteckten Zugriffe, keine Passwörter im Chat und klare nächste Schritte.</p>
          </article>
          <article>
            <Network aria-hidden="true" />
            <strong>Zentral organisiert</strong>
            <p>Eine Marke, gemeinsame Standards und eine Website für bundesweite Sichtbarkeit.</p>
          </article>
          <article>
            <UserRound aria-hidden="true" />
            <strong>Regional verantwortlich</strong>
            <p>Vor-Ort-Service wird von einem klar zuständigen Ansprechpartner übernommen.</p>
          </article>
        </div>
      </section>

      <section className="network-cta">
        <div>
          <span>04 / NICHT SICHER?</span>
          <h2>Beschreib einfach, was nicht funktioniert.</h2>
          <p>
            Schultes IT klärt mit dir, ob Fernwartung reicht oder ein regionaler Termin sinnvoller
            ist.
          </p>
        </div>
        <a href={siteConfig.phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>PROBLEM BESPRECHEN</small>
            <strong data-nosnippet>{siteConfig.phoneDisplay}</strong>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </NetworkShell>
  )
}

function ServiceOverview() {
  return (
    <section className="network-card-grid" aria-label="Leistungsbereiche">
      {primaryServicePages.map((service, index) => {
        const Icon = iconByName[service.icon]
        return (
          <a href={getServicePath(service)} key={service.slug}>
            <span>0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <strong>
              Bereich ansehen <ArrowUpRight aria-hidden="true" />
            </strong>
          </a>
        )
      })}
    </section>
  )
}

function LocationsOverview() {
  return (
    <>
      <LocationFinder autoDetectGranted />
      <section className="location-list" aria-label="Aktive Schultes-IT-Standorte">
        <header>
          <span>AKTIVE STANDORTE / {String(locations.length).padStart(2, '0')}</span>
          <h2>Regional erreichbar. Klar verantwortlich.</h2>
        </header>
        {locations.map((location) => (
          <article key={location.id}>
            <div className="location-list-code">
              <MapPin aria-hidden="true" />
              <span>{location.postalCode}</span>
            </div>
            <div>
              <small>AKTIVER STANDORT</small>
              <h3>{location.city}</h3>
              <p>
                {location.operator.name} · {location.operator.role}
              </p>
              <div className="location-area-tags">
                {location.serviceAreas.slice(0, 4).map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
            <a href={location.path}>
              Standort ansehen <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>
    </>
  )
}

function LocationDetailOverview({ locationId }: { locationId: string }) {
  const location = locationById[locationId]
  if (!location) return null

  return (
    <>
      <section className="operator-model">
        <div>
          <span>01 / REGIONALER ANSPRECHPARTNER</span>
          <h2>{location.operator.name}</h2>
          <p>
            {location.operator.role}. Der Standort betreut Kundinnen und Kunden in einem klar
            definierten regionalen Einsatzgebiet und arbeitet nach den gemeinsamen
            Schultes-IT-Qualitätsstandards.
          </p>
          <div className="location-area-tags">
            {location.serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <div className="operator-status">
          <MapPin aria-hidden="true" />
          <small>AKTIVER STANDORT</small>
          <strong>{location.city}</strong>
          <p>{location.region} · Termine nach persönlicher Vereinbarung.</p>
        </div>
      </section>
      <section className="network-cta">
        <div>
          <span>02 / DIREKTER KONTAKT</span>
          <h2>Problem kurz schildern. Passenden nächsten Schritt klären.</h2>
          <p>
            Der Standort prüft, ob ein Vor-Ort-Termin, Fernwartung oder ein anderer Weg sinnvoll
            ist.
          </p>
        </div>
        <a href={location.phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>STANDORT ANRUFEN</small>
            <strong data-nosnippet>{location.phoneDisplay}</strong>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </>
  )
}

function OwnerOverview() {
  const central = [
    'Aufbau und Bewerbung der Gesamtmarke',
    'Zentrale Website, Systeme und deutschlandweite SEO-Struktur',
    'Fernwartungsangebote, Vorlagen und gemeinsame Prozesse',
    'Weiterentwicklung der technischen und organisatorischen Grundlage',
  ]
  const regional = [
    'Selbstständiger Aufbau des regionalen Kundenstamms',
    'Vor-Ort-Service im vereinbarten Einsatzgebiet',
    'Eigene Kundenbearbeitung, Abrechnung und wirtschaftliche Verantwortung',
    'Einhaltung gemeinsamer Qualitäts- und Markenstandards',
  ]

  return (
    <>
      <section className="operator-model">
        <div>
          <span>01 / DAS MODELL</span>
          <h2>Keine Anstellung. Keine klassische Filiale.</h2>
          <p>
            Künftige Standortinhaber arbeiten rechtlich selbstständig, auf eigene Rechnung und auf
            eigenes wirtschaftliches Risiko. Sie nutzen Marke, Systeme und Unterstützung von
            Schultes IT gegen eine umsatzabhängige System- beziehungsweise Lizenzgebühr.
          </p>
        </div>
        <div className="operator-status">
          <Sparkles aria-hidden="true" />
          <small>AKTUELLER STATUS</small>
          <strong>Struktur im Aufbau</strong>
          <p>Noch kein automatisiertes Bewerberportal und keine sofortige Gebietszusage.</p>
        </div>
      </section>
      <section className="responsibility-grid">
        <article>
          <Building2 aria-hidden="true" />
          <h2>Schultes IT zentral</h2>
          {central.map((item) => (
            <p key={item}>
              <CheckCircle2 aria-hidden="true" /> {item}
            </p>
          ))}
        </article>
        <article>
          <MapPin aria-hidden="true" />
          <h2>Standortinhaber regional</h2>
          {regional.map((item) => (
            <p key={item}>
              <CheckCircle2 aria-hidden="true" /> {item}
            </p>
          ))}
        </article>
      </section>
      <section className="network-cta">
        <div>
          <span>02 / INTERESSE VORMERKEN</span>
          <h2>Du denkst unternehmerisch und kannst Technik verständlich erklären?</h2>
          <p>
            Eine kurze Nachricht mit Region, Erfahrung und deiner Vorstellung reicht für einen
            ersten unverbindlichen Austausch.
          </p>
        </div>
        <a href={`mailto:${siteConfig.email}?subject=Interesse%20als%20Standortinhaber`}>
          <Mail aria-hidden="true" />
          <span>
            <small>UNVERBINDLICH MELDEN</small>
            <strong data-nosnippet>{siteConfig.email}</strong>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </>
  )
}

function GuideOverview() {
  const remoteGuides = nationalRemotePages.filter((service) => service.path !== '/fernwartung/')

  return (
    <>
      <section className="guide-group">
        <header>
          <span>01 / DEUTSCHLANDWEIT</span>
          <h2>Hilfe, die per Fernwartung möglich ist</h2>
        </header>
        <div className="guide-link-grid">
          {remoteGuides.map((service) => (
            <a href={getServicePath(service)} key={service.slug}>
              <Globe2 aria-hidden="true" />
              <span>
                <strong>{service.shortTitle}</strong>
                <small>{service.description}</small>
              </span>
              <ChevronRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
      <section className="guide-group">
        <header>
          <span>02 / STANDORT LUDWIGSBURG</span>
          <h2>Konkrete Hilfe bei typischen Problemen</h2>
        </header>
        <div className="guide-link-grid">
          {topicPages.map((service) => {
            const Icon = iconByName[service.icon]
            return (
              <a href={getServicePath(service)} key={service.slug}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{service.shortTitle}</strong>
                  <small>{service.description}</small>
                </span>
                <ChevronRight aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

function AboutOverview() {
  return (
    <>
      <section className="about-network">
        <article>
          <span>01 / URSPRUNG</span>
          <h2>Begonnen in Ludwigsburg.</h2>
          <p>
            Andrej Schultes hat Schultes IT als direkten, verständlichen IT-Service aufgebaut. Der
            Standort Ludwigsburg bleibt inhabergeführt und bildet den ersten realen Standort des
            Netzwerks.
          </p>
          <a href="/standorte/ludwigsburg/">
            Standort Ludwigsburg <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
        <article>
          <span>02 / RICHTUNG</span>
          <h2>Gedacht für ganz Deutschland.</h2>
          <p>
            Zentrale Fernwartung und selbstständige regionale Standorte sollen gemeinsam wachsen,
            ohne persönliche Verantwortung durch anonyme Strukturen zu ersetzen.
          </p>
          <a href="/standortinhaber-werden/">
            Netzwerkmodell ansehen <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
      </section>
      <section className="network-principles">
        <header>
          <span>03 / ANSPRUCH</span>
          <h2>Verständlich helfen. Ehrlich abgrenzen. Sauber dokumentieren.</h2>
        </header>
        <div>
          <article>
            <UserRound aria-hidden="true" />
            <strong>Menschen vor Fachbegriffen</strong>
            <p>Eine Anfrage darf mit „Es geht nicht“ beginnen. Die Einordnung ist unsere Aufgabe.</p>
          </article>
          <article>
            <ShieldCheck aria-hidden="true" />
            <strong>Sicherheit vor Tempo</strong>
            <p>Kein unnötiges Risiko, keine geheimen Zugriffe und keine falschen Versprechen.</p>
          </article>
          <article>
            <Workflow aria-hidden="true" />
            <strong>System statt Kopien</strong>
            <p>Standorte nutzen gemeinsame Daten und Standards, bleiben regional verantwortlich.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export function StructuredNetworkPage({ page }: { page: SitePage }) {
  return (
    <NetworkShell page={page} compact>
      <PageHero page={page} />
      {page.kind === 'services' ? <ServiceOverview /> : null}
      {page.kind === 'locations' ? <LocationsOverview /> : null}
      {page.kind === 'location' && page.locationId ? (
        <LocationDetailOverview locationId={page.locationId} />
      ) : null}
      {page.kind === 'owner' ? <OwnerOverview /> : null}
      {page.kind === 'guides' ? <GuideOverview /> : null}
      {page.kind === 'about' ? <AboutOverview /> : null}
    </NetworkShell>
  )
}

export function NotFoundPage() {
  const page: SitePage = {
    id: 'not-found',
    kind: 'about',
    schemaKind: 'about',
    path: window.location.pathname,
    title: 'Seite nicht gefunden | Schultes IT',
    description: 'Die angeforderte Seite wurde nicht gefunden.',
    keywords: '',
    eyebrow: 'SYSTEM / 404',
    heading: 'Diese Seite ist nicht verbunden.',
    accent: 'Der nächste sinnvolle Weg ist es.',
    intro: 'Nutze die Startseite, die Fernwartung oder die Standortsuche.',
    indexable: false,
    lastModified: '2026-07-28',
    changeFrequency: 'yearly',
    priority: 0,
  }

  return (
    <NetworkShell page={page} compact>
      <PageHero page={page} />
      <section className="not-found-actions">
        <a href="/">
          Startseite <ArrowUpRight aria-hidden="true" />
        </a>
        <a href="/fernwartung/">
          Fernwartung <ArrowUpRight aria-hidden="true" />
        </a>
        <a href="/standorte/">
          Standorte <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </NetworkShell>
  )
}
