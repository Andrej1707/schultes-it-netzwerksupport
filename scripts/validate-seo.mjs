import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const siteUrl = 'https://schultes-it.de'
const cloudflareBeaconToken = '9ae74b8a40a94aa885b1c61231e312c6'
const previewImageUrl = `${siteUrl}/og-cover.png`
const routes = [
  '/',
  '/pc-system/',
  '/netzwerk-wlan/',
  '/webseiten/',
  '/tools-automation/',
  '/installation/',
  '/it-consulting/',
  '/windows-einrichten/',
  '/benutzerkonten/',
  '/email/',
  '/drucker/',
  '/programme/',
  '/office-installation/',
  '/router-entstoerung/',
  '/fernwartung/',
  '/it-notdienst/',
]

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
  assert(
    html.includes(`<meta property="og:image" content="${previewImageUrl}" />`),
    `Open Graph image is missing or not PNG in ${outputPath}.`,
  )
  assert(
    html.includes('<meta property="og:image:width" content="1200" />') &&
      html.includes('<meta property="og:image:height" content="630" />'),
    `Open Graph image dimensions are missing in ${outputPath}.`,
  )
  assert(
    html.includes(`<meta name="twitter:image" content="${previewImageUrl}" />`),
    `Twitter preview image is missing or not PNG in ${outputPath}.`,
  )
  assert(
    html.includes('https://static.cloudflareinsights.com/beacon.min.js'),
    `Cloudflare Web Analytics script is missing in ${outputPath}.`,
  )
  assert(
    html.includes(cloudflareBeaconToken),
    `Cloudflare Web Analytics token is missing in ${outputPath}.`,
  )
  assert(
    html.includes("script-src 'self' https://static.cloudflareinsights.com"),
    `Cloudflare script origin is missing from the CSP in ${outputPath}.`,
  )
  assert(
    html.includes("connect-src 'self' https://cloudflareinsights.com"),
    `Cloudflare analytics endpoint is missing from the CSP in ${outputPath}.`,
  )
}

console.log(`SEO validation passed for ${routes.length} canonical routes.`)
