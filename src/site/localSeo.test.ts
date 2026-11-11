import { describe, expect, it } from 'vitest'
import { sitePages } from './routes'
import { renderStaticPageContent } from './staticContent'
import { activeLocationById } from './locations'
import { siteConfig } from './config'

describe('local discovery in the initial HTML', () => {
  it('shows the real business, direct contact and national remote support on the homepage', () => {
    const home = sitePages.find((page) => page.path === '/')!
    const location = activeLocationById[siteConfig.featuredLocationId]
    const html = renderStaticPageContent(home)
    expect(home.kind).toBe('location')
    expect(home.title).toContain(`IT-Hilfe ${location.city}`)
    expect(html).toContain('href="/fernwartung/"')
    expect(html).toContain(location.streetAddress)
    expect(html).toContain(location.operator.name)
    expect(html).toContain(`href="${location.phoneHref}"`)
    expect(html).not.toContain('href="/standorte/"')
    expect(html).not.toContain('href="/standortinhaber-werden/"')
  })

  it('keeps prices, contact and useful local service links in the initial homepage HTML', () => {
    const home = sitePages.find((page) => page.path === '/')!
    const html = renderStaticPageContent(home)
    expect(home.heading).toContain('Computerhilfe')
    expect(html).toContain('id="preise"')
    expect(html).toContain('id="kontakt"')
    expect(html).toContain('href="/leistungen/pc-laptop/"')
    expect(html).toContain('href="/leistungen/netzwerk-wlan/"')
    expect(html).toContain('49 €')
    expect(html).toContain('25 €')
  })
})
