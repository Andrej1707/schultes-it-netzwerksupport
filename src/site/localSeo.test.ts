import { describe, expect, it } from 'vitest'
import { sitePages } from './routes'
import { renderStaticPageContent } from './staticContent'
import { activeLocationById } from './locations'
import { siteConfig } from './config'

describe('local discovery in the initial HTML', () => {
  it('connects the brand homepage to the real local location and national remote support', () => {
    const home = sitePages.find((page) => page.kind === 'home')!
    const location = activeLocationById[siteConfig.featuredLocationId]
    const html = renderStaticPageContent(home)
    expect(home.title).toContain(`IT-Hilfe ${location.city}`)
    expect(html).toContain(`href="${location.path}"`)
    expect(html).toContain('href="/fernwartung/"')
    expect(html).toContain(location.streetAddress)
    expect(html).toContain(`Vor Ort in ${location.city}`)
    expect(html).toContain('PC, Laptop und WLAN.')
  })

  it('gives the local landing page its own service intent and self canonical path', () => {
    const home = sitePages.find((page) => page.kind === 'home')!
    for (const page of sitePages.filter((page) => page.kind === 'location')) {
      const html = renderStaticPageContent(page)
      expect(page.title).not.toBe(home.title)
      expect(page.title).toContain('IT-Service')
      expect(page.heading).toContain('Computerhilfe')
      expect(html).toContain('id="preise"')
      expect(html).toContain('id="kontakt"')
      expect(html).toContain(`href="${page.path}pc-laptop/"`)
      expect(html).toContain(`href="${page.path}netzwerk-wlan/"`)
    }
  })
})
