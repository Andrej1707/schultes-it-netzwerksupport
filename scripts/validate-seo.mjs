import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createHash } from 'node:crypto'

const siteUrl = 'https://schultes-it.de'
const cloudflareBeaconToken = '9ae74b8a40a94aa885b1c61231e312c6'
const previewImageUrl = `${siteUrl}/og-cover.png`
const expectedLastModified = '2026-07-10'
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
  '/pc-langsam/',
  '/pc-startet-nicht/',
  '/fritzbox-hilfe/',
  '/mesh-wlan-einrichten/',
  '/senioren-handy-hilfe/',
  '/betrugsverdacht-phishing-hilfe/',
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
const titles = new Set()
const descriptions = new Set()

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
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim()
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"\s*\/>/i)?.[1]?.trim()
  const canonicalMatches = html.match(/<link rel="canonical" href="[^"]+"\s*\/>/gi) ?? []
  const h1Matches = html.match(/<h1\b/gi) ?? []
  const structuredDataSource = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i,
  )?.[1]

  assert(xmlMatches.length === 1, `Expected exactly one sitemap.xml entry for ${url}.`)
  assert(
    sitemap.includes(`<loc>${url}</loc>\n    <lastmod>${expectedLastModified}</lastmod>`),
    `sitemap.xml has a stale lastmod value for ${url}.`,
  )
  assert(textSitemap.split(/\r?\n/).includes(url), `sitemap.txt is missing ${url}.`)
  assert(Boolean(title), `Missing title in ${outputPath}.`)
  assert(Boolean(description), `Missing meta description in ${outputPath}.`)
  assert(!titles.has(title), `Duplicate title found: ${title}.`)
  assert(!descriptions.has(description), `Duplicate meta description found: ${description}.`)
  titles.add(title)
  descriptions.add(description)
  assert(canonicalMatches.length === 1, `Expected one canonical tag in ${outputPath}.`)
  assert(html.includes(`<link rel="canonical" href="${url}" />`), `Invalid canonical URL in ${outputPath}.`)
  assert(
    html.includes('<link rel="sitemap" type="application/xml" href="/sitemap.xml" />'),
    `Sitemap discovery link is missing in ${outputPath}.`,
  )
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
    html.includes('<meta property="og:site_name" content="Schultes IT & Netzwerksupport" />'),
    `Open Graph site name is missing in ${outputPath}.`,
  )
  assert(
    html.includes('<meta name="geo.placename" content="Ludwigsburg" />'),
    `Local geo metadata is missing in ${outputPath}.`,
  )
  assert(!html.includes('<div id="root"></div>'), `App shell was not statically rendered in ${outputPath}.`)
  assert(h1Matches.length === 1, `Expected one statically rendered H1 in ${outputPath}.`)
  assert(html.includes('<main'), `Statically rendered main content is missing in ${outputPath}.`)
  assert(
    html.includes("#root [style*='opacity:0']"),
    `No-JavaScript visibility fallback is missing in ${outputPath}.`,
  )
  assert(structuredDataSource, `JSON-LD is missing in ${outputPath}.`)
  const structuredDataHash = createHash('sha256').update(structuredDataSource).digest('base64')
  assert(
    html.includes(`sha256-${structuredDataHash}`),
    `The CSP hash does not match the JSON-LD block in ${outputPath}.`,
  )

  const structuredData = JSON.parse(structuredDataSource)
  const graph = Array.isArray(structuredData['@graph'])
    ? structuredData['@graph']
    : [structuredData]
  const business = graph.find((entry) => entry['@type'] === 'ProfessionalService')
  assert(business, `ProfessionalService schema is missing in ${outputPath}.`)
  assert(business.address?.addressLocality === 'Ludwigsburg', `LocalBusiness city is invalid in ${outputPath}.`)
  assert(business.geo?.latitude && business.geo?.longitude, `GeoCoordinates are missing in ${outputPath}.`)
  assert(business.hasMap, `Google Maps reference is missing in ${outputPath}.`)
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

assert(titles.size === routes.length, 'Not every route has a unique title.')
assert(descriptions.size === routes.length, 'Not every route has a unique meta description.')

console.log(
  `SEO validation passed for ${routes.length} statically rendered canonical routes.`,
)
