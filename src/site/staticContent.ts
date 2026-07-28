import { servicePageBySlug } from '../content/services'
import { siteConfig } from './config'
import { contactForLocation, contactForPage } from './contacts'
import { activeLocationById, activeLocations } from './locations'
import { publicServicePages } from './publicServices'
import type { SitePage } from './types'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function pageLink(path: string, title: string, text?: string) {
  return `<li><a href="${path}"><strong>${escapeHtml(title)}</strong>${
    text ? `<span>${escapeHtml(text)}</span>` : ''
  }</a></li>`
}

function siteNavigation() {
  return `<nav aria-label="Hauptnavigation">
    <a href="/fernwartung/">Fernwartung</a>
    <a href="/leistungen/">Leistungen</a>
    <a href="/standorte/">Standorte</a>
    <a href="/ratgeber/">Ratgeber</a>
    <a href="/ueber-schultes-it/">Über Schultes IT</a>
  </nav>`
}

function homeContent() {
  const firstLocation = activeLocations[0]
  const locationsList = activeLocations
    .map((location) =>
      pageLink(
        location.path,
        `Standort ${location.city}`,
        `Persönliche IT-Hilfe durch ${location.operator.name}`,
      ),
    )
    .join('')
  const problemLinks = [
    'pc-langsam',
    'pc-startet-nicht',
    'router-entstoerung',
    'fernwartung-email-outlook',
  ]
    .map((slug) => servicePageBySlug[slug])
    .map((service) =>
      pageLink(service.path ?? `/${service.slug}/`, service.situations[0]?.title ?? service.title),
    )
    .join('')
  const serviceLinks = publicServicePages
    .filter((service) => service.scope === 'network')
    .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
    .join('')
  const remoteProcess = servicePageBySlug.fernwartung.process
    .map(
      (step) =>
        `<li><strong>${escapeHtml(step.title)}</strong><span>${escapeHtml(step.text)}</span></li>`,
    )
    .join('')

  return `<section aria-labelledby="direkte-hilfe">
    <h2 id="direkte-hilfe">Zwei Wege zur passenden IT-Hilfe</h2>
    <ul>
      ${pageLink(
        '/fernwartung/',
        'Deutschlandweite IT-Hilfe per Fernwartung',
        'Sichere Unterstützung für Windows, Drucker, E-Mail und typische PC-Probleme.',
      )}
      ${pageLink(
        '/standorte/',
        'Persönliche Vor-Ort-Hilfe',
        'Finde einen aktiven Schultes-IT-Standort in deiner Region.',
      )}
    </ul>
  </section>
  <section aria-labelledby="aktive-standorte">
    <h2 id="aktive-standorte">Aktive Standorte</h2>
    <ul>${locationsList}</ul>
  </section>
  <section aria-labelledby="haeufige-probleme">
    <h2 id="haeufige-probleme">Häufige IT-Probleme</h2>
    <ul>${problemLinks}</ul>
  </section>
  <section aria-labelledby="wichtigste-leistungen">
    <h2 id="wichtigste-leistungen">Wichtigste Leistungen</h2>
    <ul>${serviceLinks}</ul>
  </section>
  <section aria-labelledby="zielgruppen">
    <h2 id="zielgruppen">Hilfe für Privatkunden und kleine Unternehmen</h2>
    <p>Privatpersonen erhalten ruhige, verständliche Unterstützung für Technik im Alltag. Kleine Unternehmen bekommen pragmatische Hilfe für Arbeitsplätze, Netzwerke, Webseiten und Abläufe.</p>
  </section>
  <section aria-labelledby="fernwartungsablauf">
    <h2 id="fernwartungsablauf">Ablauf einer Fernwartung</h2>
    <ol>${remoteProcess}</ol>
    <p><a href="/fernwartung/">Deutschlandweite Fernwartung ansehen</a></p>
  </section>
  <section aria-labelledby="einstiegspreise">
    <h2 id="einstiegspreise">Transparente Einstiegspreise</h2>
    <p>${escapeHtml(siteConfig.remoteSupport.price)}${
      firstLocation
        ? ` · Service bei dir in ${escapeHtml(firstLocation.city)} ab ${escapeHtml(firstLocation.pricing.onSiteFrom)}`
        : ''
    }</p>
    <p>${firstLocation ? escapeHtml(firstLocation.pricing.note) : 'Der genaue Umfang wird vorab abgestimmt.'}</p>
  </section>
  <section aria-labelledby="vertrauen">
    <h2 id="vertrauen">Vertrauen und vorhandene Nachweise</h2>
    ${
      firstLocation?.trust
        ? `<p>${escapeHtml(firstLocation.trust.source)}: ${escapeHtml(
            firstLocation.trust.ratingValue.toLocaleString('de-DE', {
              minimumFractionDigits: 1,
            }),
          )} von 5 bei ${firstLocation.trust.reviewCount} Rezensionen.</p><p><a href="${firstLocation.trust.profileUrl}">Google-Profil ansehen</a></p>`
        : '<p>Direkte Ansprechpartner, nachvollziehbare Abläufe und transparente Abstimmung.</p>'
    }
  </section>
  <section aria-labelledby="ueber-andrej">
    <h2 id="ueber-andrej">Schultes IT und Andrej Schultes</h2>
    <p>Schultes IT steht für verständliche Hilfe, ehrliche Grenzen und Lösungen, die im Alltag funktionieren.</p>
    <p><a href="/ueber-schultes-it/">Mehr über Schultes IT</a> · <a href="/standortinhaber-werden/">Eigenen Standort aufbauen</a></p>
  </section>
  <section aria-labelledby="direkter-kontakt">
    <h2 id="direkter-kontakt">Problem direkt besprechen</h2>
    <p><a href="${siteConfig.phoneHref}">${escapeHtml(siteConfig.phoneDisplay)}</a> · <a href="mailto:${siteConfig.email}">${escapeHtml(siteConfig.email)}</a></p>
  </section>`
}

function servicesContent() {
  return `<section aria-labelledby="leistungsbereiche">
    <h2 id="leistungsbereiche">Leistungsbereiche</h2>
    <ul>${publicServicePages
      .filter((service) => service.scope === 'network')
      .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
      .join('')}</ul>
  </section>`
}

function remoteContent() {
  return `<section aria-labelledby="fernwartungsthemen">
    <h2 id="fernwartungsthemen">Fernwartungsthemen</h2>
    <ul>${publicServicePages
      .filter((service) => service.scope === 'national')
      .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
      .join('')}</ul>
  </section>`
}

function locationsContent() {
  return `<section aria-labelledby="standortliste">
    <h2 id="standortliste">Aktive Schultes-IT-Standorte</h2>
    <ul>${activeLocations
      .map((location) =>
        pageLink(
          location.path,
          location.name,
          `Einsatzgebiet: ${location.serviceAreas.join(', ')}`,
        ),
      )
      .join('')}</ul>
    <p>Außerhalb eines aktiven Einsatzgebiets hilft Schultes IT deutschlandweit per <a href="/fernwartung/">Fernwartung</a>.</p>
  </section>`
}

function locationContent(page: SitePage) {
  const location = page.locationId ? activeLocationById[page.locationId] : undefined
  if (!location) return ''
  const contact = contactForLocation(location)

  const localServices = publicServicePages
    .filter((service) => service.locationId === location.id)

  return `<section aria-labelledby="standortkontakt">
    <h2 id="standortkontakt">${escapeHtml(contact.operatorName)}</h2>
    <p>${escapeHtml(location.operator.role)} für ${escapeHtml(location.city)} und Umgebung.</p>
    <p>Einsatzgebiet: ${escapeHtml(location.serviceAreas.join(', '))}</p>
    <p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a> · <a href="mailto:${contact.email}">${escapeHtml(contact.email)}</a></p>
    ${contact.ownAccountNotice ? `<p>${escapeHtml(contact.ownAccountNotice)}</p>` : ''}
  </section>
  <section aria-labelledby="hilfe-${escapeHtml(location.slug)}">
    <h2 id="hilfe-${escapeHtml(location.slug)}">Häufig gesuchte Hilfe in ${escapeHtml(location.city)}</h2>
    <ul>${localServices
      .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
      .join('')}</ul>
  </section>`
}

function serviceContent(page: SitePage) {
  const service = page.serviceSlug ? servicePageBySlug[page.serviceSlug] : undefined
  if (!service) return ''
  const contact = contactForPage(page)

  return `<section aria-labelledby="typische-probleme">
    <h2 id="typische-probleme">Typische Probleme</h2>
    <ul>${service.situations
      .map(
        (situation) =>
          `<li><strong>${escapeHtml(situation.title)}</strong><span>${escapeHtml(situation.text)}</span></li>`,
      )
      .join('')}</ul>
  </section>
  <section aria-labelledby="loesungen">
    <h2 id="loesungen">Dabei hilft Schultes IT</h2>
    <ul>${service.solutions
      .map(
        (solution) =>
          `<li><strong>${escapeHtml(solution.title)}</strong><span>${escapeHtml(solution.text)}</span></li>`,
      )
      .join('')}</ul>
  </section>
  <section aria-labelledby="ablauf">
    <h2 id="ablauf">So läuft die Hilfe ab</h2>
    <ol>${service.process
      .map(
        (step) =>
          `<li><strong>${escapeHtml(step.title)}</strong><span>${escapeHtml(step.text)}</span></li>`,
      )
      .join('')}</ol>
  </section>
  <section aria-labelledby="fragen">
    <h2 id="fragen">Häufige Fragen</h2>
    ${service.faqs
      .map(
        (faq) =>
          `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`,
      )
      .join('')}
  </section>
  <section aria-labelledby="service-kontakt">
    <h2 id="service-kontakt">Direkter Kontakt</h2>
    <p>${escapeHtml(contact.displayName)} · ${escapeHtml(contact.operatorName)}</p>
    <p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a> · <a href="mailto:${contact.email}">${escapeHtml(contact.email)}</a></p>
    <p>${escapeHtml(contact.remoteSupportNote)}</p>
  </section>
  ${service.slug === 'fernwartung' ? remoteContent() : ''}`
}

function guidesContent() {
  const guides = publicServicePages.filter(
    (service) => service.scope === 'national' || service.scope === 'location',
  )

  return `<section aria-labelledby="ratgeberthemen">
    <h2 id="ratgeberthemen">Konkrete Hilfe nach Thema</h2>
    <ul>${guides
      .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
      .join('')}</ul>
  </section>`
}

function legalContent(page: SitePage) {
  return `<section aria-labelledby="rechtlicher-kontakt">
    <h2 id="rechtlicher-kontakt">Schultes IT &amp; Netzwerksupport</h2>
    <p>Andrej Schultes · Egerländer Str. 24 · 71638 Ludwigsburg</p>
    <p><a href="${siteConfig.phoneHref}">${escapeHtml(siteConfig.phoneDisplay)}</a> · <a href="mailto:${siteConfig.email}">${escapeHtml(siteConfig.email)}</a></p>
    <p>Die vollständigen ${page.legalPage === 'impressum' ? 'Anbieterangaben' : 'Datenschutzhinweise'} werden direkt auf dieser Seite angezeigt.</p>
  </section>`
}

function supplementalContent(page: SitePage) {
  if (page.kind === 'home') return homeContent()
  if (page.kind === 'services') return servicesContent()
  if (page.kind === 'locations') return locationsContent()
  if (page.kind === 'location') return locationContent(page)
  if (page.kind === 'service') return serviceContent(page)
  if (page.kind === 'guides') return guidesContent()
  if (page.kind === 'legal') return legalContent(page)
  if (page.kind === 'owner') {
    return `<section><h2>Regional selbstständig. Zentral unterstützt.</h2><p>Schultes IT bereitet eine skalierbare Struktur für eigenständige regionale Standortinhaber vor.</p><p><a href="mailto:${siteConfig.email}?subject=Interesse%20als%20Standortinhaber">Interesse unverbindlich mitteilen</a></p></section>`
  }
  if (page.kind === 'about') {
    const firstLocation = activeLocations[0]
    return `<section><h2>${firstLocation ? `Begonnen in ${escapeHtml(firstLocation.city)}.` : 'Regional gedacht.'} Für ganz Deutschland.</h2><p>Schultes IT verbindet zentrale Fernwartung mit eigenverantwortlich betriebenen regionalen Standorten.</p><p>${firstLocation ? `<a href="${firstLocation.path}">Ersten Standort ansehen</a> · ` : ''}<a href="/standortinhaber-werden/">Standortinhaber werden</a></p></section>`
  }
  return ''
}

export function renderStaticPageContent(page: SitePage) {
  const contact = contactForPage(page)

  return `<div class="seo-prerender" data-prerendered="true">
    <a class="seo-skip-link" href="#seo-main">Zum Inhalt springen</a>
    <header>
      <a class="seo-brand" href="/" aria-label="Schultes IT Startseite">Schultes IT</a>
      ${siteNavigation()}
    </header>
    <main id="seo-main">
      <p class="seo-eyebrow">${escapeHtml(page.eyebrow)}</p>
      <h1>${escapeHtml(page.heading)} <span>${escapeHtml(page.accent)}</span></h1>
      <p class="seo-intro">${escapeHtml(page.intro)}</p>
      ${supplementalContent(page)}
    </main>
    <footer>
      <a href="/impressum/">Impressum</a>
      <a href="/datenschutz/">Datenschutz</a>
      <a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a>
    </footer>
  </div>`
}
