import { describe, expect, it } from 'vitest'
import { activeLocationById } from './locations'
import { notFoundPage, sitePages } from './routes'
import { structuredDataForPage } from './schema'

type SchemaNode = Record<string, unknown>

function graphFor(path: string) {
  const page = sitePages.find((candidate) => candidate.path === path)
  if (!page) throw new Error(`Missing test page: ${path}`)

  return structuredDataForPage(page)['@graph'] as SchemaNode[]
}

describe('structured data', () => {
  it('omits breadcrumbs on the homepage and recovery page while keeping valid subpage trails', () => {
    const recoveryGraph = structuredDataForPage(notFoundPage)['@graph'] as SchemaNode[]
    expect(recoveryGraph.some((node) => node['@type'] === 'BreadcrumbList')).toBe(false)
    expect(recoveryGraph.find((node) => node['@type'] === 'WebPage')?.url)
      .toBe('https://schultes-it.de/404.html')
    expect(graphFor('/').some((node) => node['@type'] === 'BreadcrumbList')).toBe(false)
    for (const page of sitePages.filter((page) => page.path !== '/')) {
      const trails = graphFor(page.path).filter((node) => node['@type'] === 'BreadcrumbList')
      expect(trails, page.path).toHaveLength(1)
      const items = trails[0].itemListElement as { position: number; item: string }[]
      expect(items.length, page.path).toBeGreaterThanOrEqual(2)
      expect(items.map((item) => item.position), page.path).toEqual(items.map((_, index) => index + 1))
      expect(items.at(-1)?.item, page.path).toBe(`https://schultes-it.de${page.path}`)
    }
  })

  it('connects the visible homepage location without making remote support local-only', () => {
    const business = graphFor('/').find((node) => node['@type'] === 'ProfessionalService')
    expect(business?.['@id']).toBe('https://schultes-it.de/#location')
    expect(business?.address).toMatchObject({ addressLocality: 'Ludwigsburg' })
    expect(business?.aggregateRating).toBeUndefined()
    const remote = graphFor('/fernwartung/').find((node) => node['@type'] === 'Service')
    expect(remote?.provider).toEqual({ '@id': 'https://schultes-it.de/#organization' })
  })

  it('describes the actual service as each service page main entity', () => {
    for (const page of sitePages.filter((page) => page.serviceSlug)) {
      const webPage = graphFor(page.path).find((node) => node['@type'] === 'WebPage')
      expect(webPage?.mainEntity).toEqual({ '@id': `https://schultes-it.de${page.path}#service` })
      expect(webPage?.about).toEqual(webPage?.mainEntity)
    }
  })
  it('publishes the professional email as the central contact point', () => {
    const organization = graphFor('/').find(
      (node) => node['@type'] === 'Organization',
    )

    expect(organization?.contactPoint).toMatchObject({
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'kontakt@schultes-it.de',
    })
    expect(organization?.telephone).toBeUndefined()
  })

  it('marks remote support as centrally owned and available in Germany', () => {
    const service = graphFor('/fernwartung/windows-hilfe/').find(
      (node) => node['@type'] === 'Service',
    )

    expect(service?.provider).toEqual({
      '@id': 'https://schultes-it.de/#organization',
    })
    expect(service?.areaServed).toEqual({
      '@type': 'Country',
      name: 'Deutschland',
    })
    expect(service?.availableChannel).toMatchObject({
      '@type': 'ServiceChannel',
      availableLanguage: 'Deutsch',
    })
  })

  it('uses the configured local operator and regional service area', () => {
    const location = activeLocationById.ludwigsburg
    const graph = graphFor('/leistungen/pc-langsam/')
    const localBusiness = graph.find((node) => node['@type'] === 'ProfessionalService')
    const service = graph.find((node) => node['@type'] === 'Service')

    expect(localBusiness).toMatchObject({
      name: location.operator.businessName,
      telephone: location.operator.businessPhoneDisplay,
      email: location.operator.businessEmail,
      description: location.operator.ownAccountNotice,
    })
    expect(service?.areaServed).toEqual(
      location.serviceAreas.map((name) => ({ '@type': 'City', name })),
    )
  })

  it('uses the homepage as the single business and service breadcrumbs use canonical paths', () => {
    expect(sitePages.some((page) => page.path === '/standorte/')).toBe(false)
    const homepage = graphFor('/')
    expect(homepage.filter((node) => node['@type'] === 'ProfessionalService')).toHaveLength(1)
    const webPage = homepage.find((node) => node['@type'] === 'WebPage')
    expect(webPage?.mainEntity).toEqual({ '@id': 'https://schultes-it.de/#location' })
    const crumbs = graphFor('/leistungen/pc-langsam/').find((node) => node['@type'] === 'BreadcrumbList')
    const items = crumbs?.itemListElement as { item: string }[]
    expect(items.map((item) => item.item)).toEqual([
      'https://schultes-it.de/',
      'https://schultes-it.de/leistungen/',
      'https://schultes-it.de/leistungen/pc-langsam/',
    ])
  })
})
