import { activeLocationById } from './locations'
import { siteConfig } from './config'
import { publicServicePages } from './publicServices'
import { rustdeskRelease } from './rustdesk'
import { guideCatalog } from '../content/guides/catalog'
import type { SitePage, ResolvedSiteRoute, SchemaKind } from './types'

const lastModified = '2026-11-11'
const localSeoUpdated = '2026-11-11'
const homeLocation = activeLocationById[siteConfig.featuredLocationId]
const remoteLastModified = [lastModified, rustdeskRelease.publishedAt.slice(0, 10)]
  .sort()
  .at(-1)!

const structuralPages: SitePage[] = [
  {
    id: 'home',
    kind: 'location',
    schemaKind: 'location',
    path: '/',
    aliases: homeLocation.aliases,
    locationId: homeLocation.id,
    title: 'IT-Hilfe Ludwigsburg | PC, WLAN & Fernwartung | Schultes IT',
    description:
      'Andrej Schultes hilft bei PC-, Laptop- und WLAN-Problemen in Ludwigsburg und Umgebung. Persönlich vor Ort oder deutschlandweit per Fernwartung.',
    keywords:
      'IT Hilfe Ludwigsburg, PC Hilfe Ludwigsburg, Computerhilfe, WLAN Hilfe, Andrej Schultes, Fernwartung',
    eyebrow: 'SCHULTES IT / LUDWIGSBURG',
    heading: 'Einfach gute Technik.',
    accent: 'Für deinen Alltag. Für dein Unternehmen.',
    intro:
      'Andrej Schultes unterstützt Privatpersonen und kleine Unternehmen in Ludwigsburg und Umgebung. Fernwartung ist deutschlandweit möglich.',
    indexable: true,
    lastModified: localSeoUpdated,
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
      'PC- und Laptop-Hilfe, Netzwerk und WLAN, Webseiten sowie Automation von Andrej Schultes in Ludwigsburg und Umgebung.',
    keywords:
      'IT Leistungen, PC Hilfe, WLAN Hilfe, Webseiten, Automation, Schultes IT',
    eyebrow: 'LEISTUNGEN / ÜBERBLICK',
    heading: 'Technikbereiche klar geordnet.',
    accent: 'Der passende Einstieg ohne Umwege.',
    intro:
      'Ob zu Hause, im eigenen Betrieb oder für eine private Idee: Andrej hilft vor Ort, per Fernwartung oder im gemeinsam abgestimmten Projekt.',
    indexable: true,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
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
      'Windows, WLAN, E-Mail oder ein verdächtiger Anruf: Finde verständliche Orientierung und die passende Hilfe für dein Technikproblem.',
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
    title: 'Über Andrej Schultes | Persönliche IT-Hilfe in Ludwigsburg',
    description:
      'Lerne Andrej Schultes kennen: persönliche Computer- und WLAN-Hilfe in Ludwigsburg und Umgebung, verständlich erklärt und direkt abgestimmt.',
    keywords:
      'Über Schultes IT, Andrej Schultes, IT Hilfe Ludwigsburg, Fernwartung Deutschland',
    eyebrow: 'ANDREJ / ÜBER SCHULTES IT',
    heading: 'Ein Mensch für deine Technik.',
    accent: 'Persönlich. Verständlich. Direkt.',
    intro:
      'Andrej Schultes hilft Privatpersonen und kleinen Unternehmen bei Technikproblemen in Ludwigsburg und Umgebung – und per Fernwartung deutschlandweit.',
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
      'Datenschutzerklärung von Schultes IT für Website, Kontakt, Analytics und Support-Assistent.',
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
  lastModified: service.locationId ? localSeoUpdated : remoteLastModified,
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
  ...serviceSitePages,
  ...guideCatalog.map((guide): SitePage => ({
    id: `guide-${guide.slug}`, kind: 'guide', schemaKind: 'guide',
    path: `/ratgeber/${guide.slug}/`, guideSlug: guide.slug,
    title: `${guide.title} | Schultes IT Ratgeber`,
    description: guide.description, keywords: '',
    eyebrow: 'SCHULTES IT / RATGEBER', heading: guide.title, accent: '',
    intro: guide.description, indexable: true, lastModified: guide.updated,
    changeFrequency: 'monthly', priority: 0.65,
  })),
]
export const indexableSitePages = sitePages.filter((page) => page.indexable)

export const notFoundPage: SitePage = {
  ...structuralPages[0],
  id: 'not-found', kind: 'not-found', path: '/404.html',
  title: 'Seite nicht gefunden | Schultes IT',
  description: 'Die angeforderte Seite wurde nicht gefunden. Finde die passende IT-Hilfe bei Schultes IT.',
  eyebrow: 'SEITE NICHT GEFUNDEN', heading: 'Diese Seite gibt es nicht.',
  accent: 'Die passende Hilfe aber schon.',
  intro: 'Vielleicht wurde der Link falsch geschrieben. Hier findest du den Weg zur passenden Unterstützung.',
  indexable: false,
}

export function normalizePathname(pathname: string) {
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0] || '/'
  const withLeadingSlash = withoutQueryOrHash.startsWith('/')
    ? withoutQueryOrHash
    : `/${withoutQueryOrHash}`
  // GitHub Pages serves these document URLs as the same HTML as their directory.
  // Resolve them identically in the browser so hydration cannot turn a real page into a 404.
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/').replace(/\/index\.html$/, '/')
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

export function canonicalRedirect(
  pathname: string,
  search = '',
  hash = '',
): string | undefined {
  const route = resolveSiteRoute(pathname)
  if (!route || pathname === route.page.path) return undefined
  return `${route.page.path}${search}${hash}`
}
