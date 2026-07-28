import { describe, expect, it } from 'vitest'
import {
  indexableSitePages,
  normalizePathname,
  resolveSiteRoute,
  sitePages,
} from './routes'

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
    expect(route?.isAlias).toBe(false)
  })

  it('keeps old service URLs as non-canonical compatibility aliases', () => {
    const route = resolveSiteRoute('/pc-system/')

    expect(route?.page.path).toBe('/leistungen/pc-laptop/')
    expect(route?.isAlias).toBe(true)
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
})
