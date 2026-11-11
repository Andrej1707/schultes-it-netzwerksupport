import { getServicePath } from '../content/services'
import type { ServicePageData } from '../content/types'
import { publicServicePages } from './publicServices'

export type ServiceNavigationLink = { slug: string; label: string; href: string }
export type ServiceNavigationGroup = { id: string; title: string; links: ServiceNavigationLink[] }

const groupDefinitions = [
  {
    id: 'services',
    title: 'Leistungen entdecken',
    items: [
      ['pc-system', 'PC & Laptop'],
      ['netzwerk-wlan', 'Netzwerk & WLAN'],
      ['webseiten', 'Webseiten & Webdesign'],
      ['tools-automation', 'Tools & Automation'],
      ['it-consulting', 'IT-Beratung'],
    ],
  },
  {
    id: 'everyday',
    title: 'Einrichten & verstehen',
    items: [
      ['windows-einrichten', 'Windows einrichten'],
      ['installation', 'Geräte einrichten'],
      ['benutzerkonten', 'Benutzerkonten'],
      ['email', 'E-Mail einrichten'],
      ['office-installation', 'Office installieren'],
      ['programme', 'Programme installieren'],
      ['drucker', 'Drucker & Scanner'],
      ['senioren-handy-hilfe', 'Handy-Hilfe für Senioren'],
    ],
  },
  {
    id: 'problems',
    title: 'Probleme lösen',
    items: [
      ['it-notdienst', 'IT-Notdienst'],
      ['pc-langsam', 'PC ist langsam'],
      ['pc-startet-nicht', 'PC startet nicht'],
      ['router-entstoerung', 'Router & Internet'],
      ['fritzbox-hilfe', 'FRITZ!Box-Hilfe'],
      ['mesh-wlan-einrichten', 'Mesh-WLAN einrichten'],
      ['betrugsverdacht-phishing-hilfe', 'Betrugsverdacht & Phishing'],
    ],
  },
  {
    id: 'remote',
    title: 'Hilfe per Fernwartung',
    items: [
      ['fernwartung', 'So funktioniert Fernwartung'],
      ['fernwartung-windows-hilfe', 'Windows-Hilfe'],
      ['fernwartung-drucker-hilfe', 'Drucker-Hilfe'],
      ['fernwartung-email-outlook', 'E-Mail & Outlook'],
    ],
  },
] as const

/** Resolve links from the same canonical service data used by the page registry. */
export function createServiceNavigation(services: ServicePageData[]): ServiceNavigationGroup[] {
  const available = new Map(services.map((service) => [service.templateSlug ?? service.slug, service]))
  const included = new Set<string>()
  const groups: ServiceNavigationGroup[] = groupDefinitions.map(({ id, title, items }) => ({
    id,
    title,
    links: items.flatMap(([templateSlug, label]) => {
      const service = available.get(templateSlug)
      if (!service) return []
      included.add(service.slug)
      return [{ slug: service.slug, label, href: getServicePath(service) }]
    }),
  }))

  // New services stay discoverable before their editorial grouping is refined.
  const additional = services.filter((service) => !included.has(service.slug))
  if (additional.length) {
    groups.push({
      id: 'more',
      title: 'Weitere Hilfe',
      links: additional.map((service) => ({
        slug: service.slug,
        label: service.shortTitle,
        href: getServicePath(service),
      })),
    })
  }
  return groups.filter((group) => group.links.length > 0)
}

export const serviceNavigationGroups = createServiceNavigation(publicServicePages)
