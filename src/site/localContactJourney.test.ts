import { describe, expect, it } from 'vitest'
import { localInquiryHref } from './contacts'
import { activeLocationById } from './locations'
import { resolveSiteRoute } from './routes'
import { renderStaticPageContent } from './staticContent'

function renderRoute(path: string) {
  const route = resolveSiteRoute(path)
  if (!route) throw new Error(`Missing route: ${path}`)
  return renderStaticPageContent(route.page)
}

describe('direct contact journeys', () => {
  it('offers remote support, Ludwigsburg and direct contact in the homepage hero', () => {
    const html = renderRoute('/')
    const hero = html.slice(html.indexOf('p-home-hero'), html.indexOf('p-home-product'))
    expect(hero).toContain('href="/fernwartung/"')
    expect(hero).toContain('href="/standorte/ludwigsburg/"')
    expect(hero).toContain('href="tel:+491791707411"')
    expect(hero).toContain('href="mailto:kontakt@schultes-it.de"')
    expect(html).toContain('Fernwartung ab <!-- -->25 €')
  })

  it('keeps the local email and phone journey available in prerendered HTML', () => {
    const html = renderRoute('/standorte/ludwigsburg/')
    const hero = html.slice(html.indexOf('pn-local-hero'), html.indexOf('pn-local-hero-visual'))
    expect(hero).toContain('href="tel:+491791707411"')
    expect(hero).toContain('mailto:kontakt@schultes-it.de?subject=')
    expect(hero).toContain('href="/fernwartung/"')
    expect(hero).toContain('Vor Ort ab <!-- -->49 €')
    expect(html).toContain('Kein E-Mail-Programm eingerichtet?')
  })

  it('routes prepared requests to the actual operator and preserves encoded text', () => {
    const location = {
      ...activeLocationById.ludwigsburg,
      city: 'Test & Stadt',
      operator: {
        ...activeLocationById.ludwigsburg.operator,
        responsiblePerson: 'Erika Beispiel',
        businessEmail: 'erika@example.invalid',
      },
    }
    const href = new URL(localInquiryHref(location))
    expect(href.pathname).toBe('erika@example.invalid')
    expect(href.searchParams.get('subject')).toBe('IT-Hilfe in Test & Stadt anfragen')
    expect(href.searchParams.get('body')).toContain('Hallo Erika Beispiel,\r\n')
    expect(href.searchParams.get('body')).toContain('Mein Ort / meine PLZ:')
    expect(href.searchParams.get('body')).toContain('Fernwartung oder ein Vor-Ort-Termin')
  })
})
