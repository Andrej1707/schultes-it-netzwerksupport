import {
  primaryServiceTemplates,
  remoteServiceTemplates,
  servicePageBySlug,
  topicServiceTemplates,
} from '../content/services'
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
    .map((slug) =>
      [...topicServiceTemplates, ...remoteServiceTemplates].find(
        (service) => service.slug === slug,
      ),
    )
    .filter((service) => Boolean(service))
    .map((service) =>
      pageLink(
        service?.slug === 'pc-langsam'
          ? '/fernwartung/windows-hilfe/'
          : service?.serviceGroup === 'remote' && service.path
            ? service.path
            : '/standorte/',
        service?.situations[0]?.title ?? service?.title ?? 'IT-Hilfe',
      ),
    )
    .join('')
  const serviceLinks = primaryServiceTemplates
    .map((service) => pageLink('/standorte/', service.title, service.description))
    .join('')
  const remoteProcess = remoteServiceTemplates.find((service) => service.slug === 'fernwartung')?.process
    .map(
      (step) =>
        `<li><strong>${escapeHtml(step.title)}</strong><span>${escapeHtml(step.text)}</span></li>`,
    )
    .join('') ?? ''

  return `<section aria-labelledby="direkte-hilfe">
    <h2 id="direkte-hilfe">Zwei Wege zur passenden IT-Hilfe</h2>
    <ul>
      ${pageLink(
        '/fernwartung/',
        'Deutschlandweite IT-Hilfe per Fernwartung',
        'Windows, Drucker, E-Mail und typische PC-Probleme zentral mit Schultes IT prüfen.',
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
    <p><a href="/fernwartung/">Fernwartung direkt ansehen</a></p>
  </section>
  <section aria-labelledby="einstiegspreise">
    <h2 id="einstiegspreise">Transparente Einstiegspreise</h2>
    <p>Für die zentrale Fernwartung gilt: ${escapeHtml(
      remoteServiceTemplates[0]?.price ?? 'individueller Absprache',
    )}. Vor-Ort-Service wird vom gewählten Standort transparent angeboten.${
      firstLocation
        ? ` Service bei dir in ${escapeHtml(firstLocation.city)} ab ${escapeHtml(firstLocation.pricing.onSiteFrom)}.`
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
    <h2 id="direkter-kontakt">Passenden Ansprechpartner finden</h2>
    <p><a href="/fernwartung/">Fernwartung anfragen</a> · <a href="/standorte/">Aktiven Standort auswählen</a></p>
  </section>`
}

function servicesContent() {
  return `<section aria-labelledby="leistungsbereiche">
    <h2 id="leistungsbereiche">Leistungsbereiche</h2>
    <ul>${primaryServiceTemplates
      .map((service) => pageLink('/standorte/', service.title, service.description))
      .join('')}</ul>
  </section>`
}

function remoteContent() {
  return `<section aria-labelledby="fernwartungsthemen">
    <h2 id="fernwartungsthemen">Fernwartungsthemen</h2>
    <ul>${remoteServiceTemplates
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
    <p>Jeder aktive Standort bietet seine eigenen Kontaktwege und weist aus, welche Anliegen vor Ort oder per Fernwartung betreut werden.</p>
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
    ${
      contact.phoneHref && contact.phoneDisplay && contact.email
        ? `<p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a> · <a href="mailto:${contact.email}">${escapeHtml(contact.email)}</a></p>`
        : `<p><a href="${contact.actionHref}">${escapeHtml(contact.actionLabel)}</a></p>`
    }
    <p>${escapeHtml(contact.remoteSupportNote)}</p>
  </section>
  ${
    service.templateSlug === 'fernwartung' && !service.locationId
      ? remoteContent()
      : ''
  }
  ${
    service.locationContext
      ? `<section aria-labelledby="standort-kontext"><h2 id="standort-kontext">${escapeHtml(
          service.locationContext.heading,
        )}</h2><p>${escapeHtml(service.locationContext.text)}</p><ul>${service.locationContext.points
          .map((point) => `<li>${escapeHtml(point)}</li>`)
          .join('')}</ul></section>`
      : ''
  }`
}

function guidesContent() {
  const guides = publicServicePages.filter((service) =>
    service.serviceGroup === 'remote'
      ? service.templateSlug !== 'fernwartung'
      : service.scope === 'location' && service.serviceGroup === 'topic',
  )

  return `<section aria-labelledby="ratgeberthemen">
    <h2 id="ratgeberthemen">Konkrete Hilfe nach Thema</h2>
    <ul>${guides
      .map((service) => pageLink(service.path ?? `/${service.slug}/`, service.title, service.description))
      .join('')}</ul>
  </section>`
}

function legalContent(page: SitePage) {
  const legalLocation = activeLocations[0]
  const legalContact = legalLocation ? contactForLocation(legalLocation) : undefined
  return `<section aria-labelledby="rechtlicher-kontakt">
    <h2 id="rechtlicher-kontakt">Schultes IT &amp; Netzwerksupport</h2>
    <p>Andrej Schultes · Egerländer Str. 24 · 71638 Ludwigsburg</p>
    ${
      legalContact
        ? `<p><a href="mailto:${legalContact.email}">${escapeHtml(legalContact.email)}</a></p>`
        : ''
    }
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
    return `<section><h2>Regional selbstständig. Zentral unterstützt.</h2><p>Schultes IT bereitet eine skalierbare Struktur für eigenständige regionale Standortinhaber vor.</p><p><a href="/standorte/">Aktive Ansprechpartner ansehen</a></p></section>`
  }
  if (page.kind === 'about') {
    const firstLocation = activeLocations[0]
    return `<section><h2>${firstLocation ? `Begonnen in ${escapeHtml(firstLocation.city)}.` : 'Regional gedacht.'} Für ganz Deutschland.</h2><p>Schultes IT verbindet zentrale deutschlandweite Fernwartung mit eigenverantwortlich betriebenen regionalen Standorten.</p><p><a href="/fernwartung/">Fernwartung ansehen</a> · ${firstLocation ? `<a href="${firstLocation.path}">Ersten Standort ansehen</a> · ` : ''}<a href="/standortinhaber-werden/">Standortinhaber werden</a></p></section>`
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
      ${
        contact.phoneHref && contact.phoneDisplay
          ? `<a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a>`
          : `<a href="${contact.actionHref}">${escapeHtml(contact.actionLabel)}</a>`
      }
    </footer>
  </div>`
}
