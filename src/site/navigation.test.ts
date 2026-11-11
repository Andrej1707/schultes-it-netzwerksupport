import { describe, expect, it } from 'vitest'
import { getServicePath } from '../content/services'
import { publicServicePages } from './publicServices'
import { createServiceNavigation, serviceNavigationGroups } from './navigation'

describe('service navigation', () => {
  it('makes every published service discoverable exactly once', () => {
    const links = serviceNavigationGroups.flatMap((group) => group.links)
    expect(links.map((link) => link.slug).sort()).toEqual(publicServicePages.map((service) => service.slug).sort())
    expect(new Set(links.map((link) => link.slug)).size).toBe(links.length)
    for (const service of publicServicePages) {
      expect(links.find((link) => link.slug === service.slug)?.href).toBe(getServicePath(service))
    }
  })

  it('keeps newly published services visible without a new hardcoded menu entry', () => {
    const service = { ...publicServicePages[0], slug: 'new-help', templateSlug: 'new-help', path: '/leistungen/new-help/' }
    const groups = createServiceNavigation([...publicServicePages, service])
    expect(groups.find((group) => group.id === 'more')?.links).toEqual([
      { slug: 'new-help', label: service.shortTitle, href: service.path },
    ])
  })
})
