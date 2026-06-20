import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const siteUrl = 'https://schultes-it.de'
const routes = ['/', '/pc-system/', '/netzwerk-wlan/', '/webseiten/', '/tools-automation/']

async function read(relativePath) {
  return readFile(join(process.cwd(), 'dist', relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const sitemap = await read('sitemap.xml')
const textSitemap = await read('sitemap.txt')
const robots = await read('robots.txt')

assert(
  robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
  'robots.txt does not reference the canonical XML sitemap.',
)
assert(!sitemap.includes('github.io'), 'sitemap.xml contains the old GitHub Pages host.')

for (const route of routes) {
  const url = `${siteUrl}${route}`
  const outputPath = route === '/' ? 'index.html' : `${route.slice(1)}index.html`
  const html = await read(outputPath)
  const xmlMatches = sitemap.match(new RegExp(`<loc>${url.replaceAll('/', '\\/')}</loc>`, 'g')) ?? []

  assert(xmlMatches.length === 1, `Expected exactly one sitemap.xml entry for ${url}.`)
  assert(textSitemap.split(/\r?\n/).includes(url), `sitemap.txt is missing ${url}.`)
  assert(html.includes(`<link rel="canonical" href="${url}" />`), `Invalid canonical URL in ${outputPath}.`)
  assert(
    html.includes('index, follow, max-image-preview:large'),
    `Indexing robots directive is missing in ${outputPath}.`,
  )
}

console.log(`SEO validation passed for ${routes.length} canonical routes.`)
