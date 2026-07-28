import { describe, expect, it } from 'vitest'
import {
  indexableSitePages,
  normalizePathname,
  resolveSiteRoute,
  sitePages,
} from './routes'
import { activeLocations } from './locations'
import { publicServicePages } from './publicServices'

describe('site routing', () => {
  it('normalizes nested paths and trailing slashes', () => {
    expect(normalizePathname('fernwartung//windows-hilfe')).toBe(
      '/fernwartung/windows-hilfe/',
    )
    expect(normalizePathname('/standorte/ludwigsburg')).toBe('/standorte/ludwigsburg/')
    expect(normalizePathname('/')).toBe('/')
  })

  it('resolves the full nested route instead of only the first segment', () => {
    const route = resolveSiteRoute('/fernwartung/windows-hilfe/')

    expect(route?.page.serviceSlug).toBe('fernwartung-windows-hilfe')
    expect(route?.page.locationId).toBeUndefined()
    expect(route?.isAlias).toBe(false)
  })

  it('keeps old service URLs as non-canonical compatibility aliases', () => {
    const route = resolveSiteRoute('/pc-system/')

    expect(route?.page.path).toBe('/standorte/ludwigsburg/pc-laptop/')
    expect(route?.isAlias).toBe(true)
  })

  it('keeps former regional remote URLs only as compatibility aliases', () => {
    const legacy = resolveSiteRoute(
      '/standorte/ludwigsburg/fernwartung/windows-hilfe/',
    )

    expect(legacy?.page.path).toBe('/fernwartung/windows-hilfe/')
    expect(legacy?.page.locationId).toBeUndefined()
    expect(legacy?.isAlias).toBe(true)
  })

  it('moves local problem pages below the Ludwigsburg location', () => {
    const canonical = resolveSiteRoute('/standorte/ludwigsburg/pc-langsam/')
    const legacy = resolveSiteRoute('/pc-langsam/')

    expect(canonical?.page.locationId).toBe('ludwigsburg')
    expect(canonical?.isAlias).toBe(false)
    expect(legacy?.page.path).toBe(canonical?.page.path)
    expect(legacy?.isAlias).toBe(true)
  })

  it('has unique canonical routes and keeps every indexable page discoverable', () => {
    const paths = sitePages.map((page) => page.path)

    expect(new Set(paths).size).toBe(paths.length)
    expect(indexableSitePages).toHaveLength(sitePages.length - 2)
    expect(resolveSiteRoute('/impressum/')?.page.legalPage).toBe('impressum')
    expect(resolveSiteRoute('/datenschutz/')?.page.indexable).toBe(false)
  })

  it('publishes location routes only for active locations', () => {
    const activeIds = new Set(activeLocations.map((location) => location.id))
    const publishedLocationIds = sitePages
      .filter((page) => page.locationId)
      .map((page) => page.locationId)

    expect(publishedLocationIds.length).toBeGreaterThan(0)
    expect(publishedLocationIds.every((locationId) => activeIds.has(locationId!))).toBe(true)
    expect(
      publicServicePages
        .filter((service) => service.locationId)
        .every((service) => activeIds.has(service.locationId!)),
    ).toBe(true)
  })
})
