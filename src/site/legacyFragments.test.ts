import { describe, expect, it } from 'vitest'
import { legacyFragmentRedirect } from './legacyFragments'
import { resolveSiteRoute } from './routes'
import { renderStaticPageContent } from './staticContent'

function redirect(path: string, hash: string, search = '') {
  const page = resolveSiteRoute(path)?.page
  if (!page) throw new Error(`Unknown test route: ${path}`)
  return legacyFragmentRedirect(page, hash, search)
}

describe('historical fragment links', () => {
  it('takes old homepage links to the actual service overview or original local operator', () => {
    expect(redirect('/', '#leistungen', '?utm_source=google')).toBe('/leistungen/?utm_source=google')
    expect(redirect('/', '#kontakt', '?ref=a%2Fb')).toBe('/standorte/ludwigsburg/?ref=a%2Fb#kontakt')
    expect(redirect('/', '#/impressum', '?ref=alt')).toBe('/impressum/?ref=alt')
  })

  it('repairs renamed service and skip targets after a legacy path has resolved', () => {
    expect(redirect('/pc-system/', '#was-ich-loese', '?ref=alt')).toBe(
      '/standorte/ludwigsburg/pc-laptop/?ref=alt#service-solutions',
    )
    expect(redirect('/fernwartung/', '#service-main')).toBe('/fernwartung/#main-content')
    expect(redirect('/impressum/', '#legal-main')).toBe('/impressum/#main-content')
  })

  it('leaves current, unknown and out-of-scope fragments untouched to avoid loops', () => {
    expect(redirect('/', '#top')).toBeUndefined()
    expect(redirect('/', '#unbekannt')).toBeUndefined()
    expect(redirect('/standorte/ludwigsburg/', '#preise')).toBeUndefined()
    expect(redirect('/fernwartung/', '#service-contact')).toBeUndefined()
    expect(redirect('/fernwartung/', '#service-solutions')).toBeUndefined()
    expect(redirect('/leistungen/', '#kontakt')).toBeUndefined()
  })

  it('lands every supported historical fragment on existing static content', () => {
    const oldLinks = [
      ...['leistungen', 'preise', 'projekte', 'kompetenzen', 'andrej', 'ludwigsburg',
        'arbeitsweise', 'alltagshilfe', 'kontakt', 'main', '/impressum', '/datenschutz']
        .map((fragment) => ['/', `#${fragment}`]),
      ['/pc-system/', '#was-ich-loese'],
      ['/pc-system/', '#service-main'],
      ['/impressum/', '#legal-main'],
    ]
    for (const [path, hash] of oldLinks) {
      const destination = redirect(path, hash)
      expect(destination, `${path}${hash}`).toBeDefined()
      const url = new URL(destination!, 'https://schultes-it.de')
      const route = resolveSiteRoute(url.pathname)
      expect(route?.isAlias, destination).toBe(false)
      if (url.hash) {
        expect(renderStaticPageContent(route!.page), destination).toContain(`id="${url.hash.slice(1)}"`)
      }
    }
  })
})
