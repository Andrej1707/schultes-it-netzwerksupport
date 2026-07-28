import { activeLocations } from './locations'
import { publicServicePages } from './publicServices'
import type { SitePage, ResolvedSiteRoute, SchemaKind } from './types'

const lastModified = '2026-07-28'

const structuralPages: SitePage[] = [
  {
    id: 'home',
    kind: 'home',
    schemaKind: 'brand',
    path: '/',
    title: 'Schultes IT | Fernwartung deutschlandweit & Hilfe vor Ort',
    description:
      'Schultes IT verbindet standortbetreute Fernwartung mit persönlichem Vor-Ort-Service über regionale, selbstständige Ansprechpartner.',
    keywords:
      'Schultes IT, Fernwartung, IT Hilfe, PC Hilfe, regionale IT Standorte, Computerhilfe',
    eyebrow: 'SCHULTES IT / DEUTSCHLAND',
    heading: 'Technik-Hilfe,',
    accent: 'die dich erreicht.',
    intro:
      'Schultes IT verbindet sichere Fernwartung mit persönlicher Hilfe durch klar verantwortliche regionale Ansprechpartner.',
    indexable: true,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    id: 'services',
    kind: 'services',
    schemaKind: 'services',
    path: '/leistungen/',
    title: 'IT-Leistungen | Schultes IT',
    description:
      'PC- und Laptop-Hilfe, Netzwerk und WLAN, Webseiten sowie Automation: zentrale Leistungen von Schultes IT im Überblick.',
    keywords:
      'IT Leistungen, PC Hilfe, WLAN Hilfe, Webseiten, Automation, Schultes IT',
    eyebrow: 'LEISTUNGEN / ÜBERBLICK',
    heading: 'Technikbereiche klar geordnet.',
    accent: 'Der passende Einstieg ohne Umwege.',
    intro:
      'Vier Leistungsbereiche werden über aktive Standorte persönlich betreut: vor Ort, per Fernwartung oder als klar abgestimmtes Projekt.',
    indexable: true,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    id: 'locations',
    kind: 'locations',
    schemaKind: 'locations',
    path: '/standorte/',
    title: 'Schultes-IT-Standorte | Persönliche Hilfe in deiner Region',
    description:
      'Finde einen regionalen Schultes-IT-Standort für persönliche PC-, WLAN- und Technik-Hilfe bei dir vor Ort.',
    keywords:
      'Schultes IT Standorte, IT Hilfe vor Ort, PC Hilfe regional, Computerhilfe in der Nähe',
    eyebrow: 'STANDORTE / REGIONALE HILFE',
    heading: 'Persönliche IT-Hilfe.',
    accent: 'So nah wie sinnvoll.',
    intro:
      'Aktive Standorte betreuen ihr klar definiertes Einsatzgebiet persönlich und nach gemeinsamen Qualitätsstandards.',
    indexable: true,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    id: 'owner',
    kind: 'owner',
    schemaKind: 'owner',
    path: '/standortinhaber-werden/',
    title: 'Schultes-IT-Standort aufbauen | Standortinhaber werden',
    description:
      'Perspektive für selbstständige IT-Dienstleister: einen regionalen Schultes-IT-Standort eigenverantwortlich aufbauen und Teil des Netzwerks werden.',
    keywords:
      'IT Standort selbstständig, IT Service Marke, Standortinhaber werden, Schultes IT Netzwerk',
    eyebrow: 'NETZWERK / PERSPEKTIVE',
    heading: 'Selbstständig vor Ort.',
    accent: 'Gemeinsam unter einer starken Marke.',
    intro:
      'Schultes IT bereitet ein Modell für rechtlich selbstständige regionale Betreiber mit klaren Gebieten, Systemen und Qualitätsstandards vor.',
    indexable: true,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    id: 'guides',
    kind: 'guides',
    schemaKind: 'guides',
    path: '/ratgeber/',
    title: 'IT-Ratgeber | Verständliche Hilfe von Schultes IT',
    description:
      'Verständliche Orientierung bei typischen PC-, Windows-, WLAN-, E-Mail- und Sicherheitsproblemen – ohne unnötiges Fachchinesisch.',
    keywords:
      'IT Ratgeber, PC Problem Hilfe, WLAN Problem, Windows Hilfe, Phishing erkennen, Schultes IT',
    eyebrow: 'RATGEBER / ERSTE ORIENTIERUNG',
    heading: 'Technikprobleme verstehen.',
    accent: 'Sicher den nächsten Schritt wählen.',
    intro:
      'Die vorhandenen Hilfeseiten werden hier thematisch gebündelt und künftig um weitere verständliche Beiträge ergänzt.',
    indexable: true,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.75,
  },
  {
    id: 'about',
    kind: 'about',
    schemaKind: 'about',
    path: '/ueber-schultes-it/',
    title: 'Über Schultes IT | Marke, Anspruch & Netzwerk',
    description:
      'Was Schultes IT ausmacht: verständliche Technik-Hilfe, sichere Fernwartung und ein wachsendes Netzwerk regionaler, selbstständiger Standorte.',
    keywords:
      'Über Schultes IT, Andrej Schultes, IT Service Netzwerk, Fernwartung Deutschland',
    eyebrow: 'MARKE / ÜBER SCHULTES IT',
    heading: 'Eine Marke für verständliche IT-Hilfe.',
    accent: 'Zentral gedacht, regional persönlich.',
    intro:
      'Aus dem inhabergeführten Standort Ludwigsburg entsteht eine deutschlandweite Service-Struktur mit klarer Verantwortung.',
    indexable: true,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    id: 'imprint',
    kind: 'legal',
    schemaKind: 'legal',
    path: '/impressum/',
    title: 'Impressum | Schultes IT & Netzwerksupport',
    description:
      'Impressum und Anbieterkennzeichnung von Schultes IT & Netzwerksupport.',
    keywords: 'Schultes IT Impressum, Anbieterkennzeichnung',
    eyebrow: 'RECHTLICH / IMPRESSUM',
    heading: 'Impressum',
    accent: 'Angaben zum Anbieter.',
    intro: 'Verantwortliche Person und direkte Kontaktmöglichkeiten.',
    indexable: false,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.1,
    legalPage: 'impressum',
  },
  {
    id: 'privacy',
    kind: 'legal',
    schemaKind: 'legal',
    path: '/datenschutz/',
    title: 'Datenschutz | Schultes IT & Netzwerksupport',
    description:
      'Datenschutzerklärung von Schultes IT für Website, Standortsuche, Analytics und Support-Assistent.',
    keywords: 'Schultes IT Datenschutz, Datenschutzerklärung',
    eyebrow: 'RECHTLICH / DATENSCHUTZ',
    heading: 'Datenschutz',
    accent: 'Transparent erklärt.',
    intro: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
    indexable: false,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.1,
    legalPage: 'datenschutz',
  },
]

const locationSitePages: SitePage[] = activeLocations.map((location) => ({
    id: `location-${location.id}`,
    kind: 'location',
    schemaKind: 'location',
    path: location.path,
    aliases: location.aliases,
    title: `IT-Hilfe ${location.city} | Schultes IT Standort`,
    description:
      `Schultes IT ${location.city}: persönliche PC-, Laptop-, WLAN-, Router- und ` +
      'Technik-Hilfe bei dir vor Ort, ergänzt durch sichere Fernwartung.',
    keywords:
      `IT Hilfe ${location.city}, PC Hilfe ${location.city}, WLAN Hilfe ${location.city}, ` +
      `Computerhilfe ${location.city}, Schultes IT ${location.city}`,
    eyebrow: `STANDORT / ${location.city.toUpperCase()}`,
    heading: `Dein Ansprechpartner in ${location.city}.`,
    accent: 'Direkt bei dir vor Ort.',
    intro:
      `${location.operator.name} betreibt den Standort ${location.city} als ` +
      `${location.operator.role.toLowerCase()}.`,
    indexable: true,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.95,
    locationId: location.id,
  }))

function schemaKindForService(scope: string | undefined): SchemaKind {
  if (scope === 'location') return 'location-service'
  return 'network-service'
}

const serviceSitePages: SitePage[] = publicServicePages.map((service) => ({
  id: `service-${service.slug}`,
  kind: 'service',
  schemaKind: schemaKindForService(service.scope),
  path: service.path ?? `/${service.slug}/`,
  aliases: service.legacyPaths,
  title: service.seoTitle,
  description: service.seoDescription,
  keywords: service.keywords,
  eyebrow: service.code,
  heading: service.heroLead,
  accent: service.heroAccent,
  intro: service.heroText,
  indexable: true,
  lastModified,
  changeFrequency: 'monthly',
  priority:
    service.serviceGroup === 'primary'
      ? 0.86
      : service.serviceGroup === 'remote'
        ? 0.82
        : 0.72,
  serviceSlug: service.slug,
  locationId: service.locationId,
}))

export const sitePages: SitePage[] = [
  ...structuralPages,
  ...locationSitePages,
  ...serviceSitePages,
]
export const indexableSitePages = sitePages.filter((page) => page.indexable)

export function normalizePathname(pathname: string) {
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0] || '/'
  const withLeadingSlash = withoutQueryOrHash.startsWith('/')
    ? withoutQueryOrHash
    : `/${withoutQueryOrHash}`
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/')
  return collapsed === '/' ? '/' : `${collapsed.replace(/\/+$/, '')}/`
}

const canonicalPageByPath = new Map(sitePages.map((page) => [page.path, page]))
const aliasPageByPath = new Map<string, SitePage>()

for (const page of sitePages) {
  for (const alias of page.aliases ?? []) {
    const normalizedAlias = normalizePathname(alias)
    if (canonicalPageByPath.has(normalizedAlias) || aliasPageByPath.has(normalizedAlias)) {
      throw new Error(`Duplicate site route: ${normalizedAlias}`)
    }
    aliasPageByPath.set(normalizedAlias, page)
  }
}

export function resolveSiteRoute(pathname: string): ResolvedSiteRoute | undefined {
  const requestedPath = normalizePathname(pathname)
  const canonicalPage = canonicalPageByPath.get(requestedPath)
  if (canonicalPage) return { page: canonicalPage, requestedPath, isAlias: false }

  const aliasPage = aliasPageByPath.get(requestedPath)
  if (aliasPage) return { page: aliasPage, requestedPath, isAlias: true }

  return undefined
}
