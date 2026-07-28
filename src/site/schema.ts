import { servicePageBySlug } from '../content/services'
import { locationById, locations } from './locations'
import { previewImageUrl, siteConfig } from './config'
import { sitePages } from './routes'
import type { SitePage } from './types'

type SchemaNode = Record<string, unknown>

const organizationId = `${siteConfig.url}/#organization`
const websiteId = `${siteConfig.url}/#website`

function organizationSchema(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/favicon.svg`,
    image: previewImageUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
    },
    areaServed: {
      '@type': 'Country',
      name: siteConfig.countryName,
    },
  }
}

function websiteSchema(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${siteConfig.url}/`,
    name: siteConfig.legalName,
    publisher: { '@id': organizationId },
    inLanguage: siteConfig.language,
  }
}

function locationSchema(locationId: string): SchemaNode | undefined {
  const location = locationById[locationId]
  if (!location) return undefined

  return {
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}${location.path}#location`,
    name: location.name,
    url: `${siteConfig.url}${location.path}`,
    image: previewImageUrl,
    telephone: location.phoneDisplay,
    email: location.email,
    priceRange: 'Fernhilfe ab 25 EUR, Service beim Kunden ab 49 EUR',
    brand: { '@id': organizationId },
    founder: {
      '@type': 'Person',
      name: location.operator.name,
      jobTitle: location.operator.role,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      postalCode: location.postalCode,
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    },
    areaServed: location.serviceAreas.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs: [location.mapsUrl],
  }
}

function breadcrumbSchema(page: SitePage): SchemaNode {
  const parts = page.path.split('/').filter(Boolean)
  const crumbs: Array<{ name: string; item: string }> = [
    { name: 'Startseite', item: `${siteConfig.url}/` },
  ]

  let currentPath = '/'
  for (const part of parts) {
    currentPath += `${part}/`
    const matchedPage = sitePages.find((candidate) => candidate.path === currentPath)
    crumbs.push({
      name: matchedPage?.heading ?? part.replaceAll('-', ' '),
      item: `${siteConfig.url}${currentPath}`,
    })
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  }
}

function serviceSchema(page: SitePage): SchemaNode[] {
  if (!page.serviceSlug) return []
  const service = servicePageBySlug[page.serviceSlug]
  if (!service) return []

  const pageUrl = `${siteConfig.url}${page.path}`
  const national = page.schemaKind === 'national-service'
  const location = service.locationId ? locationById[service.locationId] : undefined
  const providerId = location
    ? `${siteConfig.url}${location.path}#location`
    : organizationId

  return [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: service.title,
      serviceType: service.shortTitle,
      description: service.heroText,
      provider: { '@id': providerId },
      areaServed: national
        ? { '@type': 'Country', name: siteConfig.countryName }
        : location
          ? location.serviceAreas.map((name) => ({ '@type': 'City', name }))
          : { '@type': 'Country', name: siteConfig.countryName },
      availableChannel: national
        ? {
            '@type': 'ServiceChannel',
            serviceUrl: pageUrl,
            availableLanguage: 'Deutsch',
          }
        : undefined,
      audience: service.audiences.map((audience) => ({
        '@type': 'Audience',
        audienceType: audience.label,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Leistungen ${service.title}`,
        itemListElement: service.solutions.map((solution) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: solution.title,
            description: solution.text,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]
}

export function structuredDataForPage(page: SitePage) {
  const pageUrl = `${siteConfig.url}${page.path}`
  const graph: SchemaNode[] = [organizationSchema(), websiteSchema()]

  if (page.locationId) {
    const localBusiness = locationSchema(page.locationId)
    if (localBusiness) graph.push(localBusiness)
  }

  if (page.kind === 'locations') {
    graph.push({
      '@type': 'ItemList',
      itemListElement: locations
        .filter((location) => location.status === 'active')
        .map((location, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: { '@id': `${siteConfig.url}${location.path}#location` },
        })),
    })
  }

  graph.push({
    '@type':
      page.kind === 'about'
        ? 'AboutPage'
        : page.kind === 'guides' || page.kind === 'locations' || page.kind === 'services'
          ? 'CollectionPage'
          : 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': websiteId },
    about:
      page.kind === 'location' && page.locationId
        ? { '@id': `${pageUrl}#location` }
        : { '@id': organizationId },
    publisher: { '@id': organizationId },
    inLanguage: siteConfig.language,
  })

  graph.push(...serviceSchema(page), breadcrumbSchema(page))

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
