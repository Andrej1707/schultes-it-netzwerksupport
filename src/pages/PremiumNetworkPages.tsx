import { useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Globe2,
  Laptop,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  getLocationServicesByGroup,
  getServicePath,
  remoteServiceTemplates,
} from '../content/services'
import { contactForLocation } from '../site/contacts'
import {
  activeLocationById,
  activeLocations,
  type ServiceLocation,
} from '../site/locations'
import type { SitePage } from '../site/types'

const serviceArt = [
  'overview-pc',
  'overview-network',
  'overview-web',
  'overview-automation',
] as const
const serviceAccents = ['computer', 'network', 'web', 'automation'] as const
const servicePrompts = [
  'Damit dein Alltag wieder läuft.',
  'Gute Verbindung. In jedem Raum.',
  'Ein Auftritt, der zu dir passt.',
  'Weniger wiederholen. Mehr erledigen.',
]

function Photo({
  name,
  alt,
  eager = false,
  className = '',
}: {
  name: string
  alt: string
  eager?: boolean
  className?: string
}) {
  return (
    <img
      className={className}
      src={`/images/${name}-1280.webp`}
      srcSet={`/images/${name}-640.webp 640w, /images/${name}-1280.webp 1280w, /images/${name}-1920.webp 1920w`}
      sizes="(max-width: 700px) 100vw, 60vw"
      width="1536"
      height="1024"
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  )
}

function Breadcrumb({ page }: { page: SitePage }) {
  if (page.path === '/') return null
  return (
    <nav className="pn-breadcrumb" aria-label="Brotkrümelnavigation">
      <a href="/">Startseite</a>
      <ChevronRight aria-hidden="true" />
      <span aria-current="page">
        {page.locationId
          ? (activeLocationById[page.locationId]?.city ?? page.heading)
          : page.title.split('|')[0].trim()}
      </span>
    </nav>
  )
}

function PageTitle({
  page,
  children,
  className = '',
}: {
  page: SitePage
  children?: ReactNode
  className?: string
}) {
  return (
    <header className={`pn-page-intro ${className}`}>
      <Breadcrumb page={page} />
      <p className="pn-eyebrow">{page.eyebrow}</p>
      <h1>
        {page.heading} <span>{page.accent}</span>
      </h1>
      <p className="pn-intro-copy">{page.intro}</p>
      {children}
    </header>
  )
}

function LinkButton({
  href,
  children,
  secondary = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
}) {
  return (
    <a
      className={`pn-button${secondary ? ' pn-button-secondary' : ''}`}
      href={href}
    >
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  )
}

function SectionTitle({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="pn-section-title">
      <p className="pn-eyebrow">{label}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </header>
  )
}

function RemoteBanner() {
  return (
    <section className="pn-remote-banner pn-container">
      <div className="pn-remote-symbol" aria-hidden="true">
        <Globe2 />
      </div>
      <div>
        <p className="pn-eyebrow">DEUTSCHLANDWEIT</p>
        <h2>Hilfe braucht nicht immer eine Anfahrt.</h2>
        <p>
          Windows, Programme, Drucker oder E-Mail gemeinsam per Fernwartung
          prüfen. Du startest die Verbindung und behältst die Kontrolle.
        </p>
      </div>
      <LinkButton href="/fernwartung/">Fernwartung ansehen</LinkButton>
    </section>
  )
}

function ServicesPage({ page }: { page: SitePage }) {
  const services = getLocationServicesByGroup(activeLocations[0].id, 'primary')
  return (
    <div className="pn-page pn-services">
      <div className="pn-container">
        <PageTitle page={page} className="pn-centered">
          <nav className="pn-topic-nav" aria-label="Leistungsbereiche">
            {services.map((service, index) => (
              <a href={`#bereich-${service.slug}`} key={service.slug}>
                <span>0{index + 1}</span>
                {service.shortTitle}
                <ArrowDown aria-hidden="true" />
              </a>
            ))}
          </nav>
        </PageTitle>
      </div>
      <div className="pn-product-stages pn-container">
        {services.map((service, index) => (
          <section
            className={`pn-product-stage pn-product-${serviceAccents[index]}`}
            id={`bereich-${service.slug}`}
            key={service.slug}
          >
            <div className="pn-product-copy">
              <p className="pn-eyebrow">
                0{index + 1} / {service.shortTitle}
              </p>
              <h2>{servicePrompts[index]}</h2>
              <p>{service.description}</p>
              <ul className="pn-check-list">
                {service.solutions.slice(0, 3).map((solution) => (
                  <li key={solution.title}>
                    <Check aria-hidden="true" />
                    {solution.title}
                  </li>
                ))}
              </ul>
              <LinkButton href={getServicePath(service)}>Leistung ansehen</LinkButton>
              <small>Persönlich mit Andrej Schultes abstimmen.</small>
            </div>
            <div className="pn-product-visual">
              <Photo name={serviceArt[index]} alt="" eager={index === 0} />
              {index === 2 ? (
                <div className="pn-web-caption">
                  <span>DEINE IDEE.</span>
                  <strong>
                    Dein eigener
                    <br />
                    Auftritt.
                  </strong>
                  <span>WEBSEITEN / INDIVIDUELL ENTWICKELT</span>
                </div>
              ) : null}
              {index === 3 ? (
                <div
                  className="pn-flow-overlay"
                  aria-label="Ablauf einer Automation"
                >
                  <span>Wiederkehrende Aufgabe</span>
                  <ArrowDown aria-hidden="true" />
                  <strong>Ein klarer Ablauf.</strong>
                  <ArrowDown aria-hidden="true" />
                  <span>Mehr Zeit für die Arbeit</span>
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </div>
      <RemoteBanner />
    </div>
  )
}

function CopyNumber({ number }: { number: string }) {
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(number)
      setCopied(true)
      setMessage('Telefonnummer kopiert.')
    } catch {
      setCopied(false)
      setMessage(
        `Kopieren ist gerade nicht möglich. Die Nummer lautet ${number}.`,
      )
    }
  }
  return (
    <div className="pn-copy-number">
      <button
        type="button"
        className="pn-text-link"
        onClick={() => {
          void copy()
        }}
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? 'Nummer kopiert' : 'Telefonnummer kopieren'}
      </button>
      <span
        className={copied ? 'pn-visually-hidden' : 'pn-copy-message'}
        role="status"
      >
        {message}
      </span>
    </div>
  )
}

function ConsentMap({ location }: { location: ServiceLocation }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="pn-consent-map">
      {enabled ? (
        <iframe
          title={`Google-Karte: ${location.name}`}
          src={location.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="pn-map-placeholder">
          <MapPin aria-hidden="true" />
          <p className="pn-eyebrow">{location.city}</p>
          <h3>
            Hier beginnt
            <br />
            persönlicher Support.
          </h3>
          <p>
            Google Maps wird erst nach deinem Klick geladen. Dabei können
            personenbezogene Daten an Google übertragen werden.
          </p>
          <button
            type="button"
            className="pn-button"
            onClick={() => setEnabled(true)}
          >
            Google Maps laden
            <ArrowUpRight aria-hidden="true" />
          </button>
          <a className="pn-text-link" href="/datenschutz/">
            Details zum Datenschutz
          </a>
        </div>
      )}
      {enabled ? (
        <button
          className="pn-map-disable"
          type="button"
          onClick={() => setEnabled(false)}
        >
          Karte deaktivieren
        </button>
      ) : null}
    </div>
  )
}

const localProjects = [
  {
    title: 'ReviewPilot',
    type: 'Workflow-Agent · Konzept',
    text: 'Ein strukturierter Ansatz für lokale Lead-Recherche, Kontaktverwaltung und Akquise-Workflows. Informationen vorbereiten, sortieren und handhabbar machen.',
    tags: ['Recherche', 'CRM-Logik', 'Agenten'],
  },
  {
    title: 'E-Rechnung Zahlungshelfer',
    type: 'Desktop-App · Prototyp',
    text: 'PDF-, XML- und E-Rechnungen erkennen, Zahlungsdaten extrahieren und den nächsten Schritt verständlich vorbereiten. Entwickelt aus einem echten Alltagsproblem.',
    tags: ['Dokumente', 'Datenextraktion', 'Desktop'],
  },
  {
    title: 'BMA Screenshot Analyzer',
    type: 'Analyse-Tool · Prototyp',
    text: 'Ein Werkzeug zur Analyse und Dokumentation technischer Screenshots aus Anlagenumgebungen – mit Fokus auf wiederkehrende, saubere Dokumentationsarbeit.',
    tags: ['Analyse', 'Dokumentation', 'Praxis'],
  },
  {
    title: 'Lokale KI-Systeme',
    type: 'Experimente · In Entwicklung',
    text: 'Prototypen mit lokal laufender KI, Memory, Websuche und Assistenzlogik. Im Mittelpunkt steht die Unterstützung echter Arbeitsabläufe.',
    tags: ['Local AI', 'Memory', 'Automation'],
  },
]

function LocalProjects() {
  return (
    <section className="pn-project-section pn-container" id="projekte">
      <SectionTitle
        label="AUS DER WERKSTATT"
        title="Von der Idee zum Werkzeug."
      >
        Eigene Konzepte und Prototypen von Andrej Schultes. Der
        Entwicklungsstand steht bei jedem Projekt.
      </SectionTitle>
      <div className="pn-project-index">
        {localProjects.map((project, index) => (
          <article key={project.title}>
            <span className="pn-project-number">0{index + 1}</span>
            <div>
              <p className="pn-eyebrow">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="pn-area-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <Workflow aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}

function LocationPage({
  page,
  location,
}: {
  page: SitePage
  location: ServiceLocation
}) {
  const contact = contactForLocation(location)
  const services = getLocationServicesByGroup(location.id, 'primary')
  const topics = getLocationServicesByGroup(location.id, 'topic')
  return (
    <div className="pn-page pn-local">
      <section className="pn-container pn-local-hero">
        <div>
          <PageTitle page={page}>
            <p className="pn-local-lead">
              {location.content.localSupportApproach}
            </p>
            <div className="pn-actions">
              <LinkButton href={contact.phoneHref}>
                Andrej anrufen
              </LinkButton>
              <a className="pn-text-link" href="#alltagshilfe">
                Passende Hilfe finden
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </PageTitle>
        </div>
        <div className="pn-local-hero-visual">
          <Photo
            name="ludwigsburg-service"
            alt="Persönliche Computerhilfe mit Werkzeugen direkt am Laptop zu Hause"
            eager
          />
          <aside className="pn-contact-card" id="andrej">
            <span className="pn-active-label">
              Dein direkter Ansprechpartner
            </span>
            <h2>{contact.operatorName}</h2>
            <p>{location.operator.role}</p>
            <a className="pn-phone-link" href={contact.phoneHref}>
              <Phone aria-hidden="true" />
              <span data-nosnippet>{contact.phoneDisplay}</span>
            </a>
            <a className="pn-text-link" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              {contact.email}
            </a>
            <CopyNumber number={contact.phoneDisplay} />
          </aside>
        </div>
      </section>
      <nav
        className="pn-local-subnav pn-container"
        aria-label="Auf dieser Seite"
      >
        <a href="#leistungen">Leistungen</a>
        <a href="#alltagshilfe">Alle Hilfethemen</a>
        <a href="#preise">Preise</a>
        <a href="#ludwigsburg">Einsatzgebiet</a>
        <a href="#arbeitsweise">Arbeitsweise</a>
        {location.id === 'ludwigsburg' ? (
          <a href="#projekte">Projekte</a>
        ) : null}
        <a href="#kontakt">Kontakt</a>
      </nav>
      <section className="pn-container pn-local-services" id="leistungen">
        <SectionTitle
          label={`PERSÖNLICH IN ${location.city.toUpperCase()}`}
          title={`PC-, Laptop- und WLAN-Hilfe in ${location.city}.`}
        >
          {location.content.businessSupportApproach}
        </SectionTitle>
        <div className="pn-local-service-grid">
          {services.map((service, index) => (
            <a
              className={`pn-local-service pn-local-service-${index}`}
              href={getServicePath(service)}
              key={service.slug}
            >
              <span>0{index + 1}</span>
              <h3>{service.shortTitle}</h3>
              <p>{service.description}</p>
              <strong>
                Leistung ansehen
                <ArrowUpRight aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>
      </section>
      <section className="pn-container pn-local-topics" id="alltagshilfe">
        <SectionTitle
          label="DEIN PROBLEM IN DEINEN WORTEN"
          title="Was funktioniert gerade nicht?"
        >
          Vom Drucker bis zum Handy: Wähle dein Thema und finde direkt die passende Hilfe.
        </SectionTitle>
        <div className="pn-topic-links">
          {topics.map((service) => (
            <a href={getServicePath(service)} key={service.slug}>
              <span>{service.shortTitle}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
      <section className="pn-local-prices" id="preise">
        <div className="pn-container">
          <SectionTitle
            label="VORHER KLAR ABGESTIMMT"
            title="Ein klarer Einstieg."
          >
            Du schilderst dein Anliegen. Gemeinsam klären wir Aufwand, Kosten
            und einen passenden Termin.
          </SectionTitle>
          <div className="pn-price-grid">
            <article>
              <Globe2 aria-hidden="true" />
              <h3>Fernhilfe</h3>
              <p>Für geeignete Probleme direkt am Computer.</p>
              <strong>
                <small>ab</small> {location.pricing.remoteFrom ?? 'auf Anfrage'}
              </strong>
              <a className="pn-text-link" href="/fernwartung/">
                Ablauf & Fernwartungsdownload
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
            <article>
              <MapPin aria-hidden="true" />
              <h3>Service bei dir</h3>
              <p>Persönliche Hilfe in {location.city} und Umgebung.</p>
              <strong>
                <small>ab</small> {location.pricing.onSiteFrom}
              </strong>
              <a className="pn-text-link" href={contact.phoneHref}>
                Vor-Ort-Termin abstimmen
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
            <article>
              <Workflow aria-hidden="true" />
              <h3>Web & individuelle Tools</h3>
              <p>Eine Webseite oder ein Ablauf, der dir Arbeit abnimmt.</p>
              <strong className="pn-price-project">
                {location.pricing.projectLabel}
              </strong>
              <a className="pn-text-link" href={`mailto:${contact.email}`}>
                Projekt besprechen
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          </div>
          <p className="pn-price-note">{location.pricing.note}</p>
          {location.trust ? (
            <aside className="pn-review-line">
              <Star aria-hidden="true" />
              <strong>
                {location.trust.ratingValue.toLocaleString('de-DE', {
                  minimumFractionDigits: 1,
                })}{' '}
                / 5
              </strong>
              <span>{location.trust.reviewCount} Google-Rezensionen</span>
              {location.trust.quote ? (
                <blockquote>„{location.trust.quote}“</blockquote>
              ) : null}
              <a
                className="pn-text-link"
                href={location.trust.profileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Im Google-Profil ansehen
                <ArrowUpRight aria-hidden="true" />
              </a>
            </aside>
          ) : null}
        </div>
      </section>
      <section className="pn-container pn-local-map-section" id="ludwigsburg">
        <ConsentMap location={location} />
        <div>
          <p className="pn-eyebrow">ECHT REGIONAL</p>
          <h2>Ich komme zu deiner Technik.</h2>
          <p>{location.content.serviceAreaSummary}</p>
          <div className="pn-area-tags">
            {location.serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <address>
            <strong>{contact.displayName}</strong>
            <br />
            {location.streetAddress}
            <br />
            {location.postalCode} {location.city}
          </address>
          <p className="pn-small">
            Geschäftsanschrift. Termine nach persönlicher Vereinbarung.
          </p>
          <a
            className="pn-text-link"
            href={location.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            In Google Maps öffnen
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="pn-small">{contact.ownAccountNotice}</p>
        </div>
      </section>
      <section className="pn-container pn-local-process" id="arbeitsweise">
        <span id="kompetenzen" aria-hidden="true" />
        <SectionTitle
          label="SO GEHE ICH VOR"
          title="Erst verstehen. Dann lösen."
        >
          {location.content.operatorApproach}
        </SectionTitle>
        <ol className="pn-process-list">
          {[
            [
              'Verstehen',
              'Was passiert wirklich? Gemeinsam erfassen wir das Problem und was du von deiner Technik erwartest.',
            ],
            [
              'Eingrenzen',
              'Gerät, Netzwerk und Software strukturiert prüfen. Ursachen und sichtbare Symptome auseinanderhalten.',
            ],
            [
              'Lösen & erklären',
              'Den sinnvollen Weg abstimmen, umsetzen und testen. Du erfährst verständlich, was sich geändert hat.',
            ],
          ].map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {location.id === 'ludwigsburg' ? <LocalProjects /> : null}
      <section className="pn-container pn-contact-end" id="kontakt">
        <p className="pn-eyebrow">
          DIREKT MIT {contact.operatorName.toUpperCase()}
        </p>
        <h2>
          Beschreib einfach,
          <br />
          was nicht klappt.
        </h2>
        <p>
          {contact.remoteSupportNote} Termine für Vor-Ort-Hilfe vereinbaren wir
          persönlich.
        </p>
        <div className="pn-actions">
          <LinkButton href={contact.phoneHref}>
            <span data-nosnippet>{contact.phoneDisplay}</span>
          </LinkButton>
          <LinkButton href={`mailto:${contact.email}`} secondary>
            E-Mail schreiben
          </LinkButton>
        </div>
        <CopyNumber number={contact.phoneDisplay} />
      </section>
    </div>
  )
}

const guideEntries = [
  ...remoteServiceTemplates
    .filter((service) => service.slug !== 'fernwartung')
    .map((service) => ({
      service,
      category: 'remote',
      label: 'Deutschlandweit · Fernwartung',
    })),
  ...activeLocations.flatMap((location) =>
    getLocationServicesByGroup(location.id, 'topic').map((service) => ({
      service,
      category: 'local',
      label: `${location.city} · regionale Hilfe`,
    })),
  ),
]

function GuidesPage({ page }: { page: SitePage }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const normalizedQuery = query.trim().toLocaleLowerCase('de-DE')
  const entries = guideEntries.filter(
    ({ service, category: entryCategory }) =>
      (category === 'all' || category === entryCategory) &&
      `${service.shortTitle} ${service.description} ${service.keywords}`
        .toLocaleLowerCase('de-DE')
        .includes(normalizedQuery),
  )
  return (
    <div className="pn-page pn-guides">
      <div className="pn-container pn-guides-hero">
        <PageTitle page={page} />
        <div className="pn-guide-cover" aria-hidden="true">
          <span>SCHULTES IT</span>
          <strong>
            Wissen,
            <br />
            was hilft.
          </strong>
          <div>
            <Laptop />
            <Network />
            <ShieldCheck />
          </div>
          <span>VERSTÄNDLICHE ORIENTIERUNG</span>
        </div>
      </div>
      <section
        className="pn-container pn-guide-library"
        aria-label="Ratgeber und Hilfeseiten"
      >
        <div className="pn-guide-tools">
          <label className="pn-search">
            <Search aria-hidden="true" />
            <span className="pn-visually-hidden">Hilfethemen durchsuchen</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Was macht Probleme? Zum Beispiel WLAN …"
            />
          </label>
          <div className="pn-filter-buttons" aria-label="Hilfeseiten filtern">
            {[
              ['all', 'Alle Themen'],
              ['remote', 'Fernwartung'],
              ['local', 'Regionale Hilfe'],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() => setCategory(value)}
                aria-pressed={category === value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <p className="pn-result-count" role="status">
          {entries.length}{' '}
          {entries.length === 1
            ? 'passende Hilfeseite'
            : 'passende Hilfeseiten'}
        </p>
        <div className="pn-guide-results">
          {entries.map(({ service, label }, index) => (
            <a
              className="pn-guide-entry"
              href={getServicePath(service)}
              key={service.slug}
            >
              <span className="pn-guide-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="pn-eyebrow">{label}</p>
                <h2>{service.shortTitle}</h2>
                <p>{service.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        {entries.length === 0 ? (
          <div className="pn-empty-state">
            <h2>Kein Treffer? Beschreib uns das Problem.</h2>
            <p>
              Du musst die Ursache oder den richtigen Fachbegriff nicht kennen.
            </p>
            <button
              className="pn-text-link"
              type="button"
              onClick={() => {
                setQuery('')
                setCategory('all')
              }}
            >
              Filter zurücksetzen
              <ArrowRight aria-hidden="true" />
            </button>
            <LinkButton href="/fernwartung/">
              Persönliche Hilfe finden
            </LinkButton>
          </div>
        ) : null}
      </section>
      <section className="pn-container pn-guide-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <h2>Unsicher? Erst kurz abstimmen.</h2>
          <p>
            Wenn wichtige Daten betroffen sind oder du Betrug vermutest,
            beschreibe die Situation bei der Anfrage. Gemeinsam klären wir den
            nächsten sinnvollen Schritt.
          </p>
          <a className="pn-text-link" href="/#kontakt">
            Andrej direkt kontaktieren
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  )
}

function Principle({
  Icon,
  title,
  children,
}: {
  Icon: LucideIcon
  title: string
  children: ReactNode
}) {
  return (
    <article>
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

function AboutPage({ page }: { page: SitePage }) {
  const firstLocation = activeLocations[0]
  return (
    <div className="pn-page pn-about">
      <div className="pn-container">
        <PageTitle page={page} className="pn-about-intro" />
      </div>
      <section className="pn-about-editorial pn-container">
        <div className="pn-about-visual">
          <Photo
            name="about-workshop"
            alt="Sorgfältig ausgestatteter Arbeitsplatz für Computerprüfung und Reparatur"
            eager
          />
          <div className="pn-founder-signature">
            <span>AUFGEBAUT VON</span>
            <strong>Andrej Schultes</strong>
            <span>{firstLocation?.city ?? 'Schultes IT'}</span>
          </div>
        </div>
        <div className="pn-about-story">
          <p className="pn-eyebrow">DER ANFANG</p>
          <h2>
            {firstLocation
              ? `Begonnen in ${firstLocation.city}.`
              : 'Regional aufgebaut.'}
          </h2>
          <p>
            Andrej Schultes hat Schultes IT als direkten, verständlichen
            IT-Service in Ludwigsburg aufgebaut. Von der ersten Frage bis zur
            fertigen Lösung bleibt er dein persönlicher Ansprechpartner.
          </p>
          <p>
            Computer, Netzwerk, Webseite oder ein kleines digitales Werkzeug:
            Ausgangspunkt ist das konkrete Problem. Ziel ist eine Lösung, die
            im Alltag funktioniert.
          </p>
          {firstLocation ? (
            <a className="pn-text-link" href="/#kontakt">
              Andrej direkt kontaktieren
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </section>
      <section className="pn-container pn-about-statement">
        <p className="pn-eyebrow">DER ANSPRUCH</p>
        <h2>
          Gute Technik
          <br />
          macht den Alltag <em>leichter.</em>
        </h2>
        <p>
          Eine Anfrage darf mit „Es geht nicht“ anfangen. Verständlich
          einordnen, ehrlich abgrenzen und die nächsten Schritte erklären –
          dafür ist Schultes IT da.
        </p>
      </section>
      <section
        className="pn-about-principles pn-container"
        aria-label="Wofür Schultes IT steht"
      >
        <Principle Icon={Phone} title="Direkt erreichbar">
          Klare Ansprechpartner und eine persönliche Abstimmung. Du weißt, wer
          sich um dein Anliegen kümmert.
        </Principle>
        <Principle Icon={ShieldCheck} title="Nachvollziehbar sicher">
          Keine geheimen Fernzugriffe. Du startest die Verbindung selbst und
          behältst die Kontrolle über dein Gerät.
        </Principle>
        <Principle Icon={Workflow} title="Verständlich übergeben">
          Die Ursache eingrenzen, die Lösung prüfen und erklären, was sich
          verändert hat. Ehrliche Grenzen gehören dazu.
        </Principle>
      </section>
      <section className="pn-container pn-about-outlook">
        <div>
          <p className="pn-eyebrow">DIE NÄCHSTEN SCHRITTE</p>
          <h2>
            In Ludwigsburg.
            <br />
            Für deinen Alltag.
          </h2>
          <p>
            Schultes IT hilft Privatpersonen und kleinen Unternehmen in
            Ludwigsburg und Umgebung. Für geeignete Probleme ist Fernwartung
            auch deutschlandweit möglich.
          </p>
          <p>
            Du beschreibst dein Anliegen direkt Andrej. Gemeinsam klärt ihr,
            was sinnvoll ist, welche Kosten entstehen und wie es weitergeht.
          </p>
          <div className="pn-actions">
            <LinkButton href="/#kontakt">Kontakt aufnehmen</LinkButton>
            <a className="pn-text-link" href="/leistungen/">
              Leistungen entdecken
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside>
          <span className="pn-eyebrow">SCHULTES IT</span>
          <strong>
            Persönlich helfen.
            <br />
            Gemeinsam
            <br />
            <span>weiterdenken.</span>
          </strong>
          <Network aria-hidden="true" />
        </aside>
      </section>
    </div>
  )
}

function NotFoundPage({ page }: { page: SitePage }) {
  return (
    <div className="pn-page pn-not-found pn-container">
      <span className="pn-404" aria-hidden="true">
        404
      </span>
      <PageTitle page={page}>
        <div className="pn-actions">
          <LinkButton href="/">Zur Startseite</LinkButton>
          <LinkButton href="/#kontakt" secondary>
            Persönliche Hilfe
          </LinkButton>
        </div>
      </PageTitle>
    </div>
  )
}

export default function PremiumNetworkPages({ page }: { page: SitePage }) {
  if (page.kind === 'services') return <ServicesPage page={page} />
  if (
    page.kind === 'location' &&
    page.locationId &&
    activeLocationById[page.locationId]
  )
    return (
      <LocationPage
        page={page}
        location={activeLocationById[page.locationId]}
      />
    )
  if (page.kind === 'guides') return <GuidesPage page={page} />
  if (page.kind === 'about') return <AboutPage page={page} />
  return <NotFoundPage page={page} />
}
