import { useCallback, useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeEuro,
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
  Star,
  UserRound,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react'
import {
  getLocationServicesByGroup,
  getServicePath,
  primaryServiceTemplates,
  remoteServiceTemplates,
  topicServiceTemplates,
} from '../content/services'
import type { ServiceIconName } from '../content/types'
import {
  Logo,
  NetworkCanvas,
  ShortcutMenu,
  SiteFooter,
} from '../components/SiteChrome'
import { findNearestLocation } from '../site/locationFinder'
import { activeLocationById, activeLocations } from '../site/locations'
import {
  contactForLocation,
  contactForPage,
  type ContactProfile,
} from '../site/contacts'
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

const homeProblemSlugs = [
  'pc-langsam',
  'pc-startet-nicht',
  'router-entstoerung',
  'fernwartung-email-outlook',
] as const

const serviceTemplates = [
  ...primaryServiceTemplates,
  ...remoteServiceTemplates,
  ...topicServiceTemplates,
]
const serviceTemplateBySlug = Object.fromEntries(
  serviceTemplates.map((service) => [service.slug, service]),
)
const homeProblems = homeProblemSlugs.map((slug) => serviceTemplateBySlug[slug])
const remoteOverview = serviceTemplateBySlug.fernwartung
const firstActiveLocation = activeLocations[0]

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
          activeLocations,
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
            'Noch kein Standort deckt deine Region ab. Wähle einen aktiven Standort und kläre dort, ob Fernwartung möglich ist.',
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
          {state.status === 'outside' ? <a href="/standorte/"> Standorte ansehen</a> : null}
        </p>
      ) : null}
    </div>
  )
}

function NetworkHeader({
  menuOpen,
  onMenuToggle,
  contact,
}: {
  menuOpen: boolean
  onMenuToggle: () => void
  contact: ContactProfile
}) {
  return (
    <header className="site-header service-header">
      <Logo />
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        <a href="/standorte/">Fernwartung</a>
        <a href="/leistungen/">Leistungen</a>
        <a href="/standorte/">Standorte</a>
        <a href="/ratgeber/">Ratgeber</a>
        <a href="/ueber-schultes-it/">Über Schultes IT</a>
      </nav>
      <div className="header-actions">
        <a className="header-call" href={contact.phoneHref ?? contact.actionHref}>
          {contact.phoneHref ? <Phone size={16} aria-hidden="true" /> : <MapPin size={16} aria-hidden="true" />}
          <span data-nosnippet>{contact.phoneDisplay ?? contact.actionLabel}</span>
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
  const contact = contactForPage(page)

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
        contact={contact}
      />
      <ShortcutMenu open={menuOpen} onClose={() => setMenuOpen(false)} contact={contact} />

      <main className={`network-page ${compact ? 'network-page-compact' : ''}`} id="network-main">
        {children}
      </main>

      {contact.phoneHref && contact.phoneDisplay && contact.email ? (
        <div className="mobile-contact-dock" aria-label="Schnellkontakt">
          <a href={contact.phoneHref}>
            <Phone aria-hidden="true" />
            <span>
              <small>JETZT ANRUFEN</small>
              <span data-nosnippet>{contact.phoneDisplay}</span>
            </span>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" />
            <span>E-Mail</span>
          </a>
        </div>
      ) : (
        <div className="mobile-contact-dock mobile-location-dock" aria-label="Standort auswählen">
          <a href={contact.actionHref}>
            <MapPin aria-hidden="true" />
            <span>
              <small>DIREKTE HILFE</small>
              <span>{contact.actionLabel}</span>
            </span>
          </a>
        </div>
      )}
      <SiteFooter contact={contact} />
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
            href="/standorte/"
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
              Standort für Fernwartung wählen <ArrowUpRight aria-hidden="true" />
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

      <section className="guide-group brand-home-section">
        <header>
          <span>03 / HÄUFIGE PROBLEME</span>
          <h2>Du musst die Ursache nicht kennen. Das Symptom reicht.</h2>
        </header>
        <div className="guide-link-grid">
          {homeProblems.map((service) => {
            const Icon = iconByName[service.icon]
            return (
              <a href="/standorte/" key={service.slug}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{service.situations[0]?.title ?? service.shortTitle}</strong>
                  <small>{service.description}</small>
                </span>
                <ChevronRight aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </section>

      <section className="brand-home-section">
        <header className="brand-section-heading">
          <span>04 / WICHTIGSTE LEISTUNGEN</span>
          <h2>Vom einzelnen PC bis zum digitalen Arbeitsablauf.</h2>
        </header>
        <ServiceOverview />
      </section>

      <section className="about-network brand-audiences">
        <article>
          <span>05 / PRIVATKUNDEN</span>
          <UserRound aria-hidden="true" />
          <h2>Ruhige Hilfe für Technik im Alltag.</h2>
          <p>
            PC, Laptop, WLAN, Drucker oder E-Mail werden verständlich geprüft. Du musst keine
            Fachbegriffe kennen und behältst bei Fernwartung jederzeit die Kontrolle.
          </p>
          <a href="/ratgeber/">
            Passende Hilfe finden <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
        <article>
          <span>06 / KLEINE UNTERNEHMEN</span>
          <Building2 aria-hidden="true" />
          <h2>Pragmatischer Support ohne Ticket-Labyrinth.</h2>
          <p>
            Unterstützung für Arbeitsplätze, Netzwerk, Webseiten und wiederkehrende Abläufe.
            Umfang, Verantwortung und Kosten werden vor der Umsetzung klar abgestimmt.
          </p>
          <a href="/leistungen/">
            Leistungen für Betriebe <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
      </section>

      <section className="network-principles brand-process">
        <header>
          <span>07 / FERNWARTUNG</span>
          <h2>Vier klare Schritte. Du siehst jederzeit, was passiert.</h2>
        </header>
        <div>
          {remoteOverview.process.map((step, index) => (
            <article key={step.title}>
              <span className="brand-step-number">{String(index + 1).padStart(2, '0')}</span>
              <Workflow aria-hidden="true" />
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-offer-section">
        <header className="brand-section-heading">
          <span>08 / PREISE & VERTRAUEN</span>
          <h2>Ein klarer Einstieg. Keine versteckten Versprechen.</h2>
        </header>
        <div className="brand-offer-grid">
          <article>
            <BadgeEuro aria-hidden="true" />
            <small>DEUTSCHLANDWEIT / REMOTE</small>
            <h3>Preise je Standort</h3>
            <p>Fernwartung wird vom ausgewählten Standort persönlich betreut und abgerechnet.</p>
            <a href="/standorte/">
              Standort auswählen <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
          <article>
            <MapPin aria-hidden="true" />
            <small>{firstActiveLocation?.city.toUpperCase() ?? 'REGIONAL'} / VOR ORT</small>
            <h3>
              Service bei dir ab {firstActiveLocation?.pricing.onSiteFrom ?? 'individueller Absprache'}
            </h3>
            <p>
              {firstActiveLocation?.pricing.note ??
                'Der zuständige Standort stimmt Umfang und mögliche Zusatzkosten vorher ab.'}
            </p>
            <a href={firstActiveLocation?.path ?? '/standorte/'}>
              Standort ansehen <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
          {firstActiveLocation?.trust ? (
            <article className="brand-trust-card">
              <Star aria-hidden="true" />
              <small>{firstActiveLocation.trust.source.toUpperCase()} / NACHWEIS</small>
              <h3>
                {firstActiveLocation.trust.ratingValue.toLocaleString('de-DE', {
                  minimumFractionDigits: 1,
                })}{' '}
                von 5
              </h3>
              <p>
                {firstActiveLocation.trust.reviewCount} Google-Rezensionen
                {firstActiveLocation.trust.quote
                  ? ` · „${firstActiveLocation.trust.quote}“`
                  : ''}
              </p>
              <a href={firstActiveLocation.trust.profileUrl} target="_blank" rel="noreferrer">
                Google-Profil öffnen <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ) : null}
        </div>
      </section>

      <section className="brand-location-section">
        <header className="brand-section-heading">
          <span>09 / STANDORTFINDER</span>
          <h2>Persönliche Hilfe beginnt beim richtigen Ansprechpartner.</h2>
        </header>
        <LocationFinder />
        <a className="brand-inline-link" href="/standorte/">
          Alle aktiven Standorte ansehen <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <section className="about-network brand-about">
        <article>
          <span>10 / SCHULTES IT</span>
          <ShieldCheck aria-hidden="true" />
          <h2>Direkt aufgebaut von Andrej Schultes.</h2>
          <p>
            Schultes IT steht für verständliche Hilfe, ehrliche Grenzen und Lösungen, die im Alltag
            funktionieren.
            {firstActiveLocation
              ? ` ${firstActiveLocation.city} ist der erste inhabergeführte Standort des Netzwerks.`
              : ''}
          </p>
          <a href="/ueber-schultes-it/">
            Mehr über Schultes IT <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
        <article className="brand-owner-entry">
          <span>11 / NETZWERK AUFBAUEN</span>
          <Network aria-hidden="true" />
          <h2>Eigene Region. Gemeinsame Marke.</h2>
          <p>
            Für selbstständige IT-Dienstleister entsteht eine klare Grundlage für regionale
            Schultes-IT-Standorte. Noch ohne automatisiertes Bewerberportal und ohne vorschnelle
            Gebietszusage.
          </p>
          <a href="/standortinhaber-werden/">
            Modell kennenlernen <ArrowUpRight aria-hidden="true" />
          </a>
        </article>
      </section>

      <section className="network-cta">
        <div>
          <span>12 / DIREKTER KONTAKT</span>
          <h2>Beschreib einfach, was nicht funktioniert.</h2>
          <p>
            Schultes IT klärt mit dir, ob Fernwartung reicht oder ein regionaler Termin sinnvoller
            ist.
          </p>
        </div>
        <a href="/standorte/">
          <MapPin aria-hidden="true" />
          <span>
            <small>PASSENDEN KONTAKT FINDEN</small>
            <strong>Standort auswählen</strong>
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
      {primaryServiceTemplates.map((service, index) => {
        const Icon = iconByName[service.icon]
        return (
          <a href="/standorte/" key={service.slug}>
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
          <span>AKTIVE STANDORTE / {String(activeLocations.length).padStart(2, '0')}</span>
          <h2>Regional erreichbar. Klar verantwortlich.</h2>
        </header>
        {activeLocations.map((location) => (
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
  const location = activeLocationById[locationId]
  if (!location) return null
  const contact = contactForLocation(location)
  const primaryServices = getLocationServicesByGroup(locationId, 'primary')
  const remoteServices = getLocationServicesByGroup(locationId, 'remote')
  const topicServices = getLocationServicesByGroup(locationId, 'topic')

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
          {contact.ownAccountNotice ? <p>{contact.ownAccountNotice}</p> : null}
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
      <section className="guide-group">
        <header>
          <span>02 / LEISTUNGEN AM STANDORT</span>
          <h2>Alle Hilfebereiche mit einem klar verantwortlichen Ansprechpartner.</h2>
        </header>
        <div className="guide-link-grid">
          {[...primaryServices, ...remoteServices].map((service) => {
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
      <section className="guide-group">
        <header>
          <span>03 / HÄUFIG GESUCHT</span>
          <h2>Direkte Einstiege für typische Probleme.</h2>
        </header>
        <div className="guide-link-grid">
          {topicServices.map((service) => {
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
      <section className="network-cta">
        <div>
          <span>04 / DIREKTER KONTAKT</span>
          <h2>Problem kurz schildern. Passenden nächsten Schritt klären.</h2>
          <p>
            Der Standort prüft, ob ein Vor-Ort-Termin, Fernwartung oder ein anderer Weg sinnvoll
            ist.
          </p>
        </div>
        <a href={contact.phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>STANDORT ANRUFEN</small>
            <strong data-nosnippet>{contact.phoneDisplay}</strong>
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
        <a href="/standorte/ludwigsburg/">
          <MapPin aria-hidden="true" />
          <span>
            <small>ERSTEN KONTAKT FINDEN</small>
            <strong>Aktiven Standort ansehen</strong>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </>
  )
}

function GuideOverview() {
  return (
    <>
      {activeLocations.map((location, locationIndex) => {
        const guides = [
          ...getLocationServicesByGroup(location.id, 'remote').filter(
            (service) => service.templateSlug !== 'fernwartung',
          ),
          ...getLocationServicesByGroup(location.id, 'topic'),
        ]
        return guides.length > 0 ? (
        <section className="guide-group">
          <header>
              <span>{String(locationIndex + 1).padStart(2, '0')} / STANDORT {location.city.toUpperCase()}</span>
              <h2>Fernwartung und konkrete Hilfe aus {location.city}</h2>
          </header>
          <div className="guide-link-grid">
              {guides.map((service) => {
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
        ) : null
      })}
    </>
  )
}

function AboutOverview() {
  const firstLocation = activeLocations[0]

  return (
    <>
      <section className="about-network">
        <article>
          <span>01 / URSPRUNG</span>
          <h2>{firstLocation ? `Begonnen in ${firstLocation.city}.` : 'Regional aufgebaut.'}</h2>
          <p>
            Andrej Schultes hat Schultes IT als direkten, verständlichen IT-Service aufgebaut.
            {firstLocation
              ? ` Standort ${firstLocation.city} bleibt inhabergeführt und bildet den ersten realen Standort des Netzwerks.`
              : ' Der erste aktive Standort wird hier veröffentlicht, sobald er vollständig vorbereitet ist.'}
          </p>
          {firstLocation ? (
            <a href={firstLocation.path}>
              Standort {firstLocation.city} <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </article>
        <article>
          <span>02 / RICHTUNG</span>
          <h2>Gedacht für ganz Deutschland.</h2>
          <p>
            Standortgebundene Fernwartung und selbstständige regionale Standorte sollen gemeinsam
            wachsen, ohne persönliche Verantwortung durch anonyme Strukturen zu ersetzen.
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
    intro: 'Nutze die Startseite oder die Standortsuche.',
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
        <a href="/standorte/">
          Standorte <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </NetworkShell>
  )
}
