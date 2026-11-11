import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Laptop,
  MapPin,
  Workflow,
  Wifi,
} from 'lucide-react'
import { PremiumImage } from '../components/PremiumShell'
import { siteConfig } from '../site/config'
import { activeLocationById } from '../site/locations'
import { getServicePath, getLocationServicesByGroup } from '../content/services'
import { guideCatalog } from '../content/guides/catalog'
import type { SitePage } from '../site/types'

export default function PremiumHomePage({ page }: { page: SitePage }) {
  const location = activeLocationById[siteConfig.featuredLocationId]
  const localServices = location
    ? getLocationServicesByGroup(location.id, 'primary')
    : []
  const serviceHref = (icon: string) => {
    const service = localServices.find((s) => s.icon === icon)
    return service ? getServicePath(service) : '/leistungen/'
  }
  return (
    <>
      <section className="p-home-hero">
        <div className="p-home-heading">
          <p className="p-eyebrow">
            Schultes IT · Ludwigsburg
          </p>
          <h1>
            {page.heading}
            <span>
              {page.accent.split(/(?<=\.)\s+/).map((audience) => (
                <span className="p-home-audience" key={audience}>
                  {audience}{' '}
                </span>
              ))}
            </span>
          </h1>
          <p className="p-home-intro">
            Computerhilfe in Ludwigsburg und Umgebung.
            <br />
            Deutschlandweit per Fernwartung.
          </p>
          <div className="p-actions">
            <a className="p-button" href={location.phoneHref}>
              Andrej anrufen <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="p-button p-button-outline" href="/fernwartung/">
              Fernwartung entdecken
            </a>
          </div>
          <p className="p-home-direct">Dein Ansprechpartner: Andrej Schultes · <a href={`mailto:${location.email}`}>{location.email}</a></p>
        </div>
        <div className="p-home-product">
          <PremiumImage
            name="workspace"
            eager
            alt="Heller Arbeitsplatz mit Computer, Laptop und Router"
            sizes="(max-width: 750px) 100vw, 750px"
          />
        </div>
        <div className="p-home-assurance">
          <span>
            <Check size={15} aria-hidden="true" /> Verständlich erklärt
          </span>
          <span>
            <Check size={15} aria-hidden="true" /> Kosten vorher besprochen
          </span>
          <span>
            <Check size={15} aria-hidden="true" /> Ein persönlicher
            Ansprechpartner
          </span>
        </div>
      </section>

      <section id="leistungen" className="p-product-pair" aria-label="Netzwerk und Webseiten">
        <article className="p-product-card p-product-wifi">
          <div className="p-product-copy">
            <p className="p-eyebrow">Netzwerk & WLAN</p>
            <h2>
              WLAN.
              <br />
              Überall zu Hause.
            </h2>
            <p>
              Vom Router bis ins Arbeitszimmer.
              <br />
              Ein Netzwerk, das zu deinem Alltag passt.
            </p>
            <a className="p-text-link" href={serviceHref('router')}>
              Netzwerk verbessern <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <PremiumImage
            name="wifi"
            alt="WLAN-Router auf einem Sideboard in einem hellen Wohnraum"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </article>
        <article id="projekte" className="p-product-card p-product-web">
          <div className="p-product-copy">
            <p className="p-eyebrow">Webseiten & digitale Projekte</p>
            <h2>
              Dein Auftritt.
              <br />
              Mit Wirkung.
            </h2>
            <p>
              Eine klare Idee. Ein eigenes Design.
              <br />
              Und Technik, die dahinter funktioniert.
            </p>
            <a className="p-text-link" href={serviceHref('globe')}>
              Webprojekt besprechen{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div
            className="p-web-showcase"
            aria-label="Webentwicklung: Gestaltung, Inhalte und Technik"
          >
            <div className="p-web-tab">
              <Code2 size={18} aria-hidden="true" />
              <span>Von der Idee zur Website.</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="p-web-statement">
              <span>01 — Gestaltung</span>
              <strong>
                Ein Auftritt.
                <br />
                Ganz deiner.
              </strong>
              <div>
                <span>Inhalte, die ankommen.</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </div>
            <div className="p-web-foundation">
              <span>02 — Technik</span>
              <strong>Schnell. Zugänglich. Auffindbar.</strong>
            </div>
          </div>
        </article>
      </section>

      <section id="alltagshilfe" className="p-home-help p-section">
        <div className="p-section-heading">
          <p className="p-eyebrow">IT-Hilfe, die dich erreicht.</p>
          <h2>
            Ein kleines Problem.
            <br />
            Wieder ein guter Tag.
          </h2>
          <p>
            Du musst die Ursache nicht kennen. Sag einfach, was nicht
            funktioniert.
          </p>
        </div>
        <div className="p-help-topics">
          {(
            [
              [
                Laptop,
                'Der PC ist langsam.',
                'Windows gemeinsam prüfen.',
                '/fernwartung/windows-hilfe/',
              ],
              [
                Wifi,
                'Das WLAN bricht ab.',
                'Router und Verbindung verstehen.',
                serviceHref('router'),
              ],
              [
                Globe2,
                'E-Mails kommen nicht an.',
                'Outlook und Konten einrichten.',
                '/fernwartung/email-outlook/',
              ],
              [
                Workflow,
                'Der Drucker macht Ärger.',
                'Drucken wieder möglich machen.',
                '/fernwartung/drucker-hilfe/',
              ],
            ] as const
          ).map(([Icon, title, text, href]) => (
            <a className="p-help-topic" href={href} key={title}>
              <Icon size={26} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight size={21} aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="p-text-link" href="/ratgeber/">
          {guideCatalog.length} Ratgeber für deinen Technikalltag <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="preise" className="p-support-stage">
        <PremiumImage
          name="support"
          alt="Hände an einem Laptop während der Computerarbeit"
          sizes="(max-width: 760px) 100vw, 55vw"
        />
        <div>
          <p className="p-eyebrow">Fernwartung deutschlandweit</p>
          <h2>
            Persönliche Hilfe.
            <br />
            Ganz ohne Anfahrt.
          </h2>
          <p>
            Windows, Programme, Drucker oder E-Mail: Wir schauen gemeinsam hin.
            Du startest die Verbindung selbst und behältst jederzeit die
            Kontrolle.
          </p>
          <p className="p-price">
            Ab {siteConfig.remoteSupport.priceFrom}
            <small>Umfang und Kosten klären wir vorher.</small>
          </p>
          <a className="p-button" href="/fernwartung/">
            So funktioniert Fernwartung{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="arbeitsweise" className="p-section p-home-process">
        <div className="p-section-heading">
          <p className="p-eyebrow">Einfach gut begleitet.</p>
          <h2>
            Vom ersten Gespräch
            <br />
            bis zum letzten Klick.
          </h2>
        </div>
        <ol>
          {[
            [
              'Kurz schildern',
              'Du beschreibst, was nicht klappt. Eine fertige Diagnose ist nicht nötig.',
            ],
            [
              'Passenden Weg finden',
              'Wir klären, ob Fernwartung reicht oder ein Termin vor Ort sinnvoll ist.',
            ],
            [
              'Sorgfältig lösen',
              'Die Ursache wird Schritt für Schritt geprüft. Kosten und Änderungen werden besprochen.',
            ],
            [
              'Verständlich übergeben',
              'Du weißt, was gemacht wurde und worauf du künftig achten kannst.',
            ],
          ].map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="ludwigsburg" className="p-local-stage p-section">
        <div id="kompetenzen">
          <p className="p-eyebrow">Persönlich in Ludwigsburg</p>
          <h2>
            PC, Laptop und WLAN.
            <br />
            Persönlich unterstützt.
          </h2>
          <p>
            Andrej Schultes unterstützt Privatpersonen und kleine Unternehmen
            in Ludwigsburg und Umgebung. Ob Windows, Laptop oder WLAN:
            Wir klären dein Anliegen persönlich und stimmen Aufwand und Termin vorher ab.
          </p>
          <a className="p-text-link" href="/leistungen/">
            Alle Leistungen entdecken <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <article>
          <MapPin size={28} aria-hidden="true" />
          <span>Ein Betrieb. Dein Ansprechpartner.</span>
          <h3>{location.city}</h3>
          <p>{location?.content.serviceAreaSummary}</p>
          {location ? (
            <p>
              {location.operator.name}<br />
              {location.streetAddress}, {location.postalCode} {location.city}
            </p>
          ) : null}
          <p className="p-price">
            Ab {location?.pricing.onSiteFrom}
            <small>{location?.pricing.note}</small>
          </p>
          <a
            className="p-button p-button-outline"
            href={location.phoneHref}
          >
            Vor-Ort-Termin abstimmen <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
      </section>

      <section id="andrej" className="p-home-about p-section">
        <div>
          <p className="p-eyebrow">Über Schultes IT</p>
          <h2>
            Gute Technik braucht
            <br />
            einen Menschen dahinter.
          </h2>
          <p>
            Andrej Schultes hat Schultes IT in Ludwigsburg aufgebaut. Der
            Anspruch: verständliche Hilfe, ehrliche Grenzen und Lösungen, die im
            Alltag funktionieren.
          </p>
          <a className="p-text-link" href="/ueber-schultes-it/">
            Mehr über Schultes IT <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="p-eyebrow">Für kleine Unternehmen</p>
          <h3>
            Mehr Zeit für
            <br />
            dein eigentliches Geschäft.
          </h3>
          <p>
            Arbeitsplätze, Netzwerke, Webseiten und wiederkehrende Abläufe:
            Unterstützung für die Technik, auf die dein Betrieb angewiesen ist.
          </p>
          <a className="p-text-link" href={serviceHref('bot')}>
            Tools & Automation entdecken{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section id="kontakt" className="p-endnote">
        <p className="p-eyebrow">Dein nächster Schritt</p>
        <h2>
          Was darf wieder
          <br />
          einfacher werden?
        </h2>
        <div className="p-actions">
          <a className="p-button" href={location.phoneHref}>
            {location.phoneDisplay} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="p-text-link" href={`mailto:${location.email}`}>
            E-Mail schreiben <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
