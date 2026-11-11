import { describe, expect, it } from 'vitest'
import { guideArticles, guideDataForPage } from './articles'
import { guideCatalog } from './catalog'
import { sitePages, resolveSiteRoute } from '../../site/routes'
import { renderStaticPageContent } from '../../site/staticContent'
import { structuredDataForPage } from '../../site/schema'
import { withPageStyles } from '../../site/pageStyles'

describe('the guide library', () => {
  it('publishes seventy distinct, useful guides with working related articles and service destinations', () => {
    expect(guideArticles).toHaveLength(70)
    const slugs = new Set(guideArticles.map(article => article.slug))
    expect(slugs.size).toBe(70)
    expect(new Set(guideArticles.map(article => article.title)).size).toBe(70)
    expect(new Set(guideArticles.map(article => article.image)).size).toBe(70)
    for (const category of ['sicherheit', 'windows', 'wlan', 'daten', 'alltag']) {
      expect(guideArticles.filter(article => article.category === category)).toHaveLength(14)
    }
    for (const article of guideArticles) {
      expect(article.sections.length, article.slug).toBeGreaterThanOrEqual(3)
      expect(article.takeaways, article.slug).toHaveLength(3)
      expect(article.sources.length, article.slug).toBeGreaterThanOrEqual(1)
      for (const source of article.sources) expect(new URL(source.url).protocol).toBe('https:')
      for (const related of article.relatedSlugs) {
        expect(slugs.has(related), `${article.slug} -> ${related}`).toBe(true)
        expect(related).not.toBe(article.slug)
      }
      expect(resolveSiteRoute(article.servicePath)?.isAlias, article.servicePath).toBe(false)
    }
  })

  it('renders every article link without JavaScript and supplies only the active article to hydration', () => {
    const library = sitePages.find(page => page.kind === 'guides')!
    const html = renderStaticPageContent(library)
    for (const entry of guideCatalog) expect(html).toContain(`href="/ratgeber/${entry.slug}/"`)
    expect(guideDataForPage(sitePages.find(page => page.path === '/')!)).toBeUndefined()
    for (const page of sitePages.filter(page => page.kind === 'guide')) {
      const data = guideDataForPage(page)!
      expect(data.article?.slug).toBe(page.guideSlug)
      expect(data.entries.length).toBeLessThanOrEqual(3)
      expect(data.entries.every(entry => !('sections' in entry))).toBe(true)
      const graph = structuredDataForPage(page)['@graph']
      expect(graph.find(node => node['@type'] === 'Article')?.headline).toBe(page.heading)
    }
  })

  it('keeps page-specific CSS available before hydration and out of the homepage', () => {
    const hrefs = { service: '/service.css', network: '/network.css', guides: '/guides.css' }
    const base = '<html><head></head><body></body></html>'
    for (const page of sitePages) {
      const html = withPageStyles(base, page, hrefs)
      if (page.kind === 'guide' || page.kind === 'guides') expect(html).toContain('href="/guides.css"')
      if (page.path === '/') expect(html).not.toContain('data-page-style')
      if (page.kind === 'service') expect(html).toContain('href="/service.css"')
    }
  })
})
