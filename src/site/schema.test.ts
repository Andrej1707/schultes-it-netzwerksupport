import { describe, expect, it } from 'vitest'
import { activeLocationById, activeLocations } from './locations'
import { sitePages } from './routes'
import { structuredDataForPage } from './schema'

type SchemaNode = Record<string, unknown>

function graphFor(path: string) {
  const page = sitePages.find((candidate) => candidate.path === path)
  if (!page) throw new Error(`Missing test page: ${path}`)

  return structuredDataForPage(page)['@graph'] as SchemaNode[]
}

describe('structured data', () => {
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
    const graph = graphFor('/standorte/ludwigsburg/pc-langsam/')
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

  it('lists only active locations on the public location overview', () => {
    const itemList = graphFor('/standorte/').find(
      (node) => node['@type'] === 'ItemList',
    )
    const items = itemList?.itemListElement as SchemaNode[]

    expect(items).toHaveLength(activeLocations.length)
    expect(items.every((item) => {
      const linkedLocation = item.item as { '@id': string }
      return activeLocations.some((location) =>
        linkedLocation['@id'].includes(location.path),
      )
    })).toBe(true)
  })
})
