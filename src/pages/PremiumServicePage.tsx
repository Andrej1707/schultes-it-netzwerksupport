import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  FileText,
  Globe2,
  Headphones,
  Laptop,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Printer,
  Router,
  Settings2,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { getServicePath, servicePageBySlug } from '../content/services'
import type { ServicePageData } from '../content/types'
import { contactForService } from '../site/contacts'
import { siteConfig } from '../site/config'
import { activeLocationById } from '../site/locations'
import { servicePhotos } from '../site/photos'
import { rustdeskFileSize, rustdeskRelease } from '../site/rustdesk'

type ServiceFamily =
  | 'pc'
  | 'network'
  | 'web'
  | 'automation'
  | 'remote'
  | 'people'
  | 'safety'
  | 'urgent'
  | 'advice'

function familyFor(service: ServicePageData): ServiceFamily {
  const topic = service.templateSlug ?? service.slug
  if (service.deliveryMode === 'remote') return 'remote'
  if (topic === 'webseiten') return 'web'
  if (topic === 'tools-automation') return 'automation'
  if (topic === 'senioren-handy-hilfe') return 'people'
  if (topic === 'betrugsverdacht-phishing-hilfe' || topic === 'benutzerkonten')
    return 'safety'
  if (topic === 'it-notdienst' || topic === 'pc-startet-nicht') return 'urgent'
  if (topic === 'it-consulting') return 'advice'
  if (
    [
      'netzwerk-wlan',
      'fritzbox-hilfe',
      'mesh-wlan-einrichten',
      'router-entstoerung',
    ].includes(topic)
  )
    return 'network'
  return 'pc'
}

function iconFor(service: ServicePageData): LucideIcon {
  const topic = service.templateSlug ?? service.slug
  if (topic.includes('drucker')) return Printer
  if (topic.includes('email') || topic.includes('outlook')) return Mail
  if (topic.includes('senioren')) return Smartphone
  if (topic.includes('phishing') || topic.includes('benutzerkonten'))
    return ShieldCheck
  return { laptop: Laptop, router: Router, globe: Globe2, bot: Workflow }[
    service.icon
  ]
}

const editorialCopy: Record<
  ServiceFamily,
  { label: string; situations: string; solutions: string; process: string }
> = {
  pc: {
    label: 'Einfach wieder arbeiten.',
    situations: 'Kommt dir das bekannt vor?',
    solutions: 'Alles, was dein Gerät weiterbringt.',
    process: 'Vom Problem zurück in deinen Alltag.',
  },
  network: {
    label: 'Verbunden. In jedem Raum.',
    situations: 'Wo hakt die Verbindung?',
    solutions: 'Das ganze Netzwerk im Blick.',
    process: 'Verstehen. Verbinden. Vor Ort testen.',
  },
  web: {
    label: 'Dein Auftritt. Weitergedacht.',
    situations: 'Deine Website kann mehr.',
    solutions: 'Von der ersten Idee bis zum letzten Detail.',
    process: 'Ein klarer Weg zu deiner neuen Website.',
  },
  automation: {
    label: 'Weniger Routine. Mehr Spielraum.',
    situations: 'Hier steckt oft unnötige Arbeit.',
    solutions: 'Dein Ablauf gibt die Richtung vor.',
    process: 'Klein anfangen. An echten Fällen wachsen.',
  },
  remote: {
    label: 'Persönlich. Auch aus der Ferne.',
    situations: 'Was funktioniert gerade nicht?',
    solutions: 'Das lässt sich gemeinsam prüfen.',
    process: 'Du startest. Du siehst mit. Du entscheidest.',
  },
  people: {
    label: 'Technik in deinem Tempo.',
    situations: 'Keine Frage ist zu einfach.',
    solutions: 'Schritt für Schritt sicherer werden.',
    process: 'Zeit zum Fragen. Raum zum Verstehen.',
  },
  safety: {
    label: 'Klarheit gibt Sicherheit.',
    situations: 'Erst einordnen. Dann handeln.',
    solutions: 'Sichere nächste Schritte.',
    process: 'Ruhig und nachvollziehbar vorgehen.',
  },
  urgent: {
    label: 'Ein klarer nächster Schritt.',
    situations: 'Was genau ist passiert?',
    solutions: 'Gezielt prüfen, was jetzt hilft.',
    process: 'Die Ursache vor der schnellen Vermutung.',
  },
  advice: {
    label: 'Gute Entscheidungen beginnen hier.',
    situations: 'Eine Entscheidung steht an?',
    solutions: 'Technik, die zu dir passt.',
    process: 'Vom offenen Punkt zur klaren Richtung.',
  },
}

function ServicePhoto({
  subject,
  alt,
  eager = false,
}: {
  subject: string
  alt: string
  eager?: boolean
}) {
  return (
    <img
      className="ps-photo"
      src={`/images/${subject}-1280.webp`}
      srcSet={`/images/${subject}-640.webp 640w, /images/${subject}-1280.webp 1280w, /images/${subject}-1920.webp 1920w`}
      sizes="(max-width: 760px) 100vw, (max-width: 1200px) 60vw, 900px"
      width={1536}
      height={1024}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  )
}

function NetworkMap() {
  return (
    <figure className="ps-network-map">
      <figcaption>Zusammen gedacht.</figcaption>
      <div className="ps-network-root">
        <Router aria-hidden="true" />
        <strong>Router & Internet</strong>
      </div>
      <ul>
        <li>
          <Laptop aria-hidden="true" />
          <span>Arbeitsplatz</span>
        </li>
        <li>
          <Smartphone aria-hidden="true" />
          <span>WLAN-Geräte</span>
        </li>
        <li>
          <Printer aria-hidden="true" />
          <span>Drucker</span>
        </li>
      </ul>
      <p>Vom Anschluss bis zum einzelnen Gerät.</p>
    </figure>
  )
}

function AutomationMap() {
  const steps = [
    { icon: FileText, title: 'Informationen', text: 'Dateien & Eingaben' },
    { icon: Settings2, title: 'Verarbeiten', text: 'Nach klaren Regeln' },
    { icon: ShieldCheck, title: 'Kontrollieren', text: 'Freigabe durch dich' },
    {
      icon: ArrowUpRight,
      title: 'Weiterarbeiten',
      text: 'Mit geordneten Daten',
    },
  ]
  return (
    <figure className="ps-automation-map">
      <figcaption>So kann ein Ablauf einfacher werden.</figcaption>
      <ol>
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li key={step.title}>
              <span className="ps-flow-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <small>0{index + 1}</small>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowDown className="ps-flow-arrow" aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
      <p>
        Ein Beispiel. Den passenden Ablauf entwickeln wir aus deiner täglichen
        Arbeit.
      </p>
    </figure>
  )
}

function HeroVisual({
  service,
  family,
}: {
  service: ServicePageData
  family: ServiceFamily
}) {
  const Icon = iconFor(service)
  const photo = servicePhotos[service.templateSlug ?? service.slug]
  if (family === 'web') {
    return (
      <div className="ps-web-stage">
        <span className="ps-web-stage-label">
          Konzept. Design. Entwicklung.
        </span>
        <p>
          Deine Idee.
          <br />
          <span>Unverwechselbar.</span>
        </p>
        <div className="ps-web-stage-bottom">
          <span>
            Ein klarer Auftritt.
            <br />
            Auf jedem Bildschirm.
          </span>
          <a
            href="#service-solutions"
            aria-label="Leistungen für deine neue Website entdecken"
          >
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }
  if (family === 'automation') return <AutomationMap />
  if (family === 'network') {
    return (
      <div className="ps-network-stage">
        <ServicePhoto subject={photo.name} alt={photo.alt} eager />
        <NetworkMap />
      </div>
    )
  }
  if (family === 'remote') {
    return (
      <aside
        className="ps-remote-stage"
        aria-label="Fernwartung auf deinem Windows-PC"
      >
        <ServicePhoto subject={photo.name} alt={photo.alt} eager />
        <div className="ps-remote-stage-copy">
          <span className="ps-stage-icon">
            <Headphones aria-hidden="true" />
          </span>
          <h2>Hilfe, die bei dir ankommt.</h2>
          <p>
            Am eigenen Bildschirm. Mit einem echten Ansprechpartner und der
            Kontrolle in deiner Hand.
          </p>
          <a className="ps-text-link" href="#rustdesk-download">
            Zum Windows-Download <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </aside>
    )
  }
  if (family === 'safety' || family === 'urgent') {
    return (
      <aside className="ps-focus-stage">
        <span className="ps-stage-icon">
          <Icon aria-hidden="true" />
        </span>
        <p className="ps-focus-title">
          {family === 'safety' ? (
            <>
              Erst Ruhe.
              <br />
              <span>Dann Klarheit.</span>
            </>
          ) : (
            <>
              Wir fangen
              <br />
              <span>bei der Ursache an.</span>
            </>
          )}
        </p>
        <ul>
          {service.confidencePoints.slice(0, 3).map((point) => (
            <li key={point}>
              <Check aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a href="#service-contact" className="ps-text-link">
          Persönlich besprechen <ArrowUpRight aria-hidden="true" />
        </a>
      </aside>
    )
  }
  return (
    <div className="ps-photo-stage">
      <ServicePhoto subject={photo.name} alt={photo.alt} eager />
      <div className="ps-photo-caption">
        <Icon aria-hidden="true" />
        <span>{service.tags.join(' · ')}</span>
      </div>
    </div>
  )
}

function RemoteDownload({ service }: { service: ServicePageData }) {
  const contact = contactForService(service)
  return (
    <section
      className="ps-download ps-section ps-wrap"
      id="rustdesk-download"
      aria-labelledby="ps-download-heading"
    >
      <div className="ps-download-copy">
        <span className="ps-eyebrow">Fernwartung vorbereiten</span>
        <h2 id="ps-download-heading">
          Ein Download.
          <br />
          <span>Dann sprechen wir.</span>
        </h2>
        <p>
          Lade RustDesk auf deinen Windows-PC. Öffne die Datei erst nach
          telefonischer Abstimmung mit {contact.operatorName}. ID oder Code
          nennst du ausschließlich deinem vereinbarten Ansprechpartner.
        </p>
        <a className="ps-text-link" href={contact.phoneHref}>
          <Phone aria-hidden="true" /> Termin direkt abstimmen
        </a>
      </div>
      <div className="ps-download-panel">
        <div className="ps-download-heading">
          <Monitor aria-hidden="true" />
          <span>
            Für deinen Windows-PC
            <strong>RustDesk {rustdeskRelease.version}</strong>
          </span>
        </div>
        <a
          className="ps-button"
          href={`${siteConfig.remoteSupport.downloadPath}?v=${rustdeskRelease.version}`}
          download="rustdesk.exe"
          type="application/vnd.microsoft.portable-executable"
        >
          <ArrowDownToLine aria-hidden="true" /> RustDesk herunterladen
        </a>
        <p className="ps-file-meta">rustdesk.exe · {rustdeskFileSize}</p>
        <details className="ps-file-details">
          <summary>
            Datei prüfen <ChevronDown aria-hidden="true" />
          </summary>
          <p>SHA-256</p>
          <code>{rustdeskRelease.sha256.toUpperCase()}</code>
          <a href={rustdeskRelease.releaseUrl} target="_blank" rel="noreferrer">
            Offizielle RustDesk-Veröffentlichung
          </a>
        </details>
        <p className="ps-download-note">
          <ShieldCheck aria-hidden="true" />
          <span>
            Keine Zugangscodes im Website-Chat oder an unbekannte Personen
            weitergeben. Du kannst die Verbindung jederzeit beenden.
          </span>
        </p>
      </div>
    </section>
  )
}

export default function PremiumServicePage({
  service,
}: {
  service: ServicePageData
}) {
  const family = familyFor(service)
  const copy = editorialCopy[family]
  const Icon = iconFor(service)
  const contact = contactForService(service)
  const location = service.locationId
    ? activeLocationById[service.locationId]
    : undefined
  const relatedServices = service.related
    .map((slug) => servicePageBySlug[slug])
    .filter((entry): entry is ServicePageData => Boolean(entry))
  const isProject = service.deliveryMode === 'project'
  const isRemote = service.deliveryMode === 'remote'
  const [copyStatus, setCopyStatus] = useState('')
  const copyReset = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(
    () => () => {
      if (copyReset.current) clearTimeout(copyReset.current)
    },
    [],
  )

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay)
      setCopyStatus('Telefonnummer kopiert')
    } catch {
      setCopyStatus(`Telefonnummer: ${contact.phoneDisplay}`)
    }
    if (copyReset.current) clearTimeout(copyReset.current)
    copyReset.current = setTimeout(() => setCopyStatus(''), 4000)
  }

  return (
    <div className={`ps-page ps-family-${family}`}>
      <nav className="ps-breadcrumb ps-wrap" aria-label="Brotkrümelnavigation">
        <a href="/">Start</a>
        <span aria-hidden="true">/</span>
        {location ? (
          <>
            <a href={location.path}>{location.city}</a>
            <span aria-hidden="true">/</span>
          </>
        ) : (
          <>
            <a href={isRemote ? '/fernwartung/' : '/leistungen/'}>
              {isRemote ? 'Fernwartung' : 'Leistungen'}
            </a>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span aria-current="page">{service.shortTitle}</span>
      </nav>

      <section className="ps-hero ps-wrap" aria-labelledby="ps-service-heading">
        <div className="ps-hero-copy">
          <p className="ps-eyebrow">
            <Icon aria-hidden="true" />
            {service.title}
            {location ? ` · ${location.city}` : ''}
          </p>
          <h1 id="ps-service-heading">
            {service.heroLead}
            <span> {service.heroAccent}</span>
          </h1>
          <p className="ps-hero-text">{service.heroText}</p>
          <div className="ps-hero-actions">
            <a className="ps-button" href="#service-contact">
              {isProject ? 'Projekt besprechen' : 'Hilfe anfragen'}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="ps-text-link"
              href={isRemote ? '#rustdesk-download' : '#service-solutions'}
            >
              {isRemote ? 'Fernwartung vorbereiten' : 'Leistungen entdecken'}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="ps-hero-price">{service.price}</p>
        </div>
        <HeroVisual service={service} family={family} />
      </section>

      <div className="ps-service-facts ps-wrap">
        <strong>{copy.label}</strong>
        <span>
          <MapPin aria-hidden="true" />
          {service.areaLabel ?? 'Persönlich & regional'}
        </span>
        <span>
          {service.modeLabel ??
            (isProject
              ? 'Individuelle Projektbetreuung'
              : 'Vor Ort / per Fernwartung')}
        </span>
      </div>

      {isRemote && <RemoteDownload service={service} />}

      <section
        className="ps-situations ps-section ps-wrap"
        aria-labelledby="ps-situations-heading"
      >
        <div className="ps-section-intro">
          <span className="ps-eyebrow">Dein Anliegen</span>
          <h2 id="ps-situations-heading">{copy.situations}</h2>
          <p>{service.description}</p>
        </div>
        <div className="ps-situation-list">
          {service.situations.map((item, index) => (
            <article key={item.title}>
              <span className="ps-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="ps-solutions ps-section"
        id="service-solutions"
        aria-labelledby="ps-solutions-heading"
      >
        <div className="ps-wrap">
          <div className="ps-section-intro">
            <span className="ps-eyebrow">So hilft Schultes IT</span>
            <h2 id="ps-solutions-heading">{copy.solutions}</h2>
            <ul className="ps-topic-tags" aria-label="Schwerpunkte">
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="ps-solution-list">
            {service.solutions.map((solution, index) => (
              <article key={solution.title}>
                <span className="ps-solution-marker">
                  {family === 'automation' || family === 'web' ? (
                    String(index + 1).padStart(2, '0')
                  ) : (
                    <Check aria-hidden="true" />
                  )}
                </span>
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ps-audiences ps-section ps-wrap"
        aria-labelledby="ps-audiences-heading"
      >
        <div className="ps-section-intro">
          <span className="ps-eyebrow">Für wen ist das?</span>
          <h2 id="ps-audiences-heading">
            {isProject
              ? 'Für Menschen mit eigenen Ideen.'
              : 'Für deinen Alltag. Und deinen Betrieb.'}
          </h2>
        </div>
        <div className="ps-audience-list">
          {service.audiences.map((audience) => (
            <article key={audience.label}>
              <h3>{audience.label}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="ps-process ps-section ps-wrap"
        aria-labelledby="ps-process-heading"
      >
        <div className="ps-section-intro">
          <span className="ps-eyebrow">Unser Weg</span>
          <h2 id="ps-process-heading">{copy.process}</h2>
        </div>
        <ol>
          {service.process.map((step, index) => (
            <li key={step.title}>
              <span className="ps-process-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="ps-confidence ps-wrap"
        aria-labelledby="ps-confidence-heading"
      >
        <div>
          <ShieldCheck className="ps-confidence-icon" aria-hidden="true" />
          <span className="ps-eyebrow">Darauf kannst du dich verlassen</span>
          <h2 id="ps-confidence-heading">{service.confidenceTitle}</h2>
          <p>{service.confidenceText}</p>
        </div>
        <ul>
          {service.confidencePoints.map((point) => (
            <li key={point}>
              <Check aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {service.locationContext && (
        <section
          className="ps-local ps-section ps-wrap"
          aria-labelledby="ps-local-heading"
        >
          <div className="ps-section-intro">
            <span className="ps-eyebrow">
              <MapPin aria-hidden="true" />
              {service.locationContext.eyebrow}
            </span>
            <h2 id="ps-local-heading">{service.locationContext.heading}</h2>
            <p>{service.locationContext.text}</p>
            {location && (
              <a className="ps-text-link" href={location.path}>
                Standort {location.city} kennenlernen{' '}
                <ArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="ps-local-points">
            {service.locationContext.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </section>
      )}

      <section
        className="ps-faq ps-section ps-wrap"
        aria-labelledby="ps-faq-heading"
      >
        <div className="ps-section-intro">
          <span className="ps-eyebrow">Gut zu wissen</span>
          <h2 id="ps-faq-heading">
            Deine Fragen.
            <br />
            <span>Klare Antworten.</span>
          </h2>
        </div>
        <div className="ps-faq-list">
          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section
          className="ps-related ps-section ps-wrap"
          aria-labelledby="ps-related-heading"
        >
          <div className="ps-related-heading">
            <h2 id="ps-related-heading">Passt auch zu deinem Anliegen.</h2>
            <a className="ps-text-link" href="/leistungen/">
              Alle Leistungen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="ps-related-list">
            {relatedServices.map((related) => {
              const RelatedIcon = iconFor(related)
              return (
                <a href={getServicePath(related)} key={related.slug}>
                  <RelatedIcon aria-hidden="true" />
                  <strong>{related.title}</strong>
                  <p>{related.description}</p>
                  <span className="ps-text-link">
                    Mehr erfahren <ArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              )
            })}
          </div>
        </section>
      )}

      <section
        className="ps-contact ps-wrap"
        id="service-contact"
        aria-labelledby="ps-contact-heading"
      >
        <div>
          <span className="ps-eyebrow">Direkt mit {contact.operatorName}</span>
          <h2 id="ps-contact-heading">
            {isProject ? (
              <>
                Deine Idee.
                <br />
                <span>Der nächste Schritt.</span>
              </>
            ) : (
              <>
                Ein Gespräch.
                <br />
                <span>Viel mehr Klarheit.</span>
              </>
            )}
          </h2>
          <p>
            {isProject
              ? `Erzähl ${contact.operatorName}, was du vorhast. Gemeinsam klärt ihr Ziele, Umfang und einen sinnvollen Start.`
              : `Beschreibe ${contact.operatorName} einfach, was nicht funktioniert. Gemeinsam klärt ihr, ob Fernhilfe oder ein Termin bei dir sinnvoll ist.`}
          </p>
          <p className="ps-contact-price">{service.price}</p>
          {location && (
            <p className="ps-pricing-note">{location.pricing.note}</p>
          )}
        </div>
        <div className="ps-contact-panel">
          <a className="ps-contact-call" href={contact.phoneHref}>
            <Phone aria-hidden="true" />
            <span>
              Direkt anrufen
              <strong data-nosnippet>{contact.phoneDisplay}</strong>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="ps-contact-email" href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" />
            <span data-nosnippet>{contact.email}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button className="ps-copy-phone" onClick={copyPhone} type="button">
            <Copy aria-hidden="true" />
            Telefonnummer kopieren
          </button>
          <p className="ps-copy-status" role="status">
            {copyStatus}
          </p>
          <p className="ps-contact-note">
            {contact.displayName} · {contact.remoteSupportNote}
          </p>
          {contact.ownAccountNotice && (
            <p className="ps-operator-note">{contact.ownAccountNotice}</p>
          )}
          <a className="ps-operator-link" href={contact.imprintUrl}>
            Angaben zum Anbieter <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  )
}
