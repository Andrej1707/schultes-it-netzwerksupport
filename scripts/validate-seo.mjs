import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const siteUrl = 'https://schultes-it.de'
const cloudflareBeaconToken = '9ae74b8a40a94aa885b1c61231e312c6'
const previewImageUrl = `${siteUrl}/og-cover.png`

async function read(relativePath) {
  return readFile(join(process.cwd(), 'dist', relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function outputPath(route) {
  return route === '/' ? 'index.html' : `${route.slice(1)}index.html`
}

function structuredData(html, path) {
  const match = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i,
  )
  assert(match, `Structured data is missing in ${path}.`)

  try {
    return JSON.parse(match[1])
  } catch (error) {
    throw new Error(`Structured data in ${path} is invalid JSON: ${error}`)
  }
}

function validateSharedHtml(html, page, path, canonicalUrl, indexable) {
  const robots = indexable
    ? 'index, follow, max-image-preview:large'
    : 'noindex, follow, max-image-preview:large'

  assert(
    html.includes(`<link rel="canonical" href="${canonicalUrl}" />`),
    `Invalid canonical URL in ${path}.`,
  )
  assert(
    html.includes(`<meta name="robots" content="${robots}" />`),
    `Invalid robots directive in ${path}.`,
  )
  assert(
    html.includes(`<meta property="og:url" content="${canonicalUrl}" />`),
    `Invalid Open Graph URL in ${path}.`,
  )
  assert(
    html.includes(`<meta property="og:image" content="${previewImageUrl}" />`),
    `Open Graph image is missing or not PNG in ${path}.`,
  )
  assert(
    html.includes('<meta property="og:image:width" content="1200" />') &&
      html.includes('<meta property="og:image:height" content="630" />'),
    `Open Graph image dimensions are missing in ${path}.`,
  )
  assert(
    html.includes(`<meta name="twitter:image" content="${previewImageUrl}" />`),
    `Twitter preview image is missing or not PNG in ${path}.`,
  )
  assert(
    html.includes('https://static.cloudflareinsights.com/beacon.min.js'),
    `Cloudflare Web Analytics script is missing in ${path}.`,
  )
  assert(
    html.includes(cloudflareBeaconToken),
    `Cloudflare Web Analytics token is missing in ${path}.`,
  )
  assert(
    html.includes("script-src 'self' https://static.cloudflareinsights.com"),
    `Cloudflare script origin is missing from the CSP in ${path}.`,
  )
  assert(
    html.includes("connect-src 'self' https://cloudflareinsights.com"),
    `Cloudflare analytics endpoint is missing from the CSP in ${path}.`,
  )
  assert(
    html.includes(`data-page-id="${page.id}"`),
    `Page identity is missing in ${path}.`,
  )
}

const manifest = JSON.parse(await read('site-manifest.json'))
const sitemap = await read('sitemap.xml')
const textSitemap = await read('sitemap.txt')
const robots = await read('robots.txt')
const sitemapLines = textSitemap.trim().split(/\r?\n/)

assert(
  robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
  'robots.txt does not reference the canonical XML sitemap.',
)
assert(!sitemap.includes('github.io'), 'sitemap.xml contains the old GitHub Pages host.')
assert(
  new Set(sitemapLines).size === sitemapLines.length,
  'sitemap.txt contains duplicate canonical URLs.',
)

for (const page of manifest.pages) {
  const canonicalUrl = `${siteUrl}${page.path}`
  const canonicalOutput = outputPath(page.path)
  const html = await read(canonicalOutput)
  const xmlMatches =
    sitemap.match(new RegExp(`<loc>${canonicalUrl.replaceAll('/', '\\/')}</loc>`, 'g')) ?? []

  assert(
    xmlMatches.length === (page.indexable ? 1 : 0),
    `Unexpected sitemap.xml entry count for ${canonicalUrl}.`,
  )
  assert(
    sitemapLines.includes(canonicalUrl) === page.indexable,
    `Unexpected sitemap.txt state for ${canonicalUrl}.`,
  )
  validateSharedHtml(html, page, canonicalOutput, canonicalUrl, page.indexable)

  const data = structuredData(html, canonicalOutput)
  const graph = data['@graph']
  assert(Array.isArray(graph), `Structured data graph is missing in ${canonicalOutput}.`)

  const organization = graph.find((node) => node['@type'] === 'Organization')
  assert(organization, `Organization schema is missing in ${canonicalOutput}.`)

  if (page.schemaKind === 'national-service') {
    const service = graph.find((node) => node['@type'] === 'Service')
    assert(service, `Service schema is missing in ${canonicalOutput}.`)
    assert(
      service.areaServed?.['@type'] === 'Country' &&
        service.areaServed?.name === 'Deutschland',
      `National areaServed is invalid in ${canonicalOutput}.`,
    )
  }

  if (page.schemaKind === 'location') {
    const location = graph.find((node) => node['@type'] === 'ProfessionalService')
    assert(location, `ProfessionalService schema is missing in ${canonicalOutput}.`)
    assert(
      typeof location.address?.addressLocality === 'string' &&
        location.address.addressLocality.length > 0,
      `Location address is invalid in ${canonicalOutput}.`,
    )
    assert(Array.isArray(location.areaServed), `Location service area is missing in ${canonicalOutput}.`)
  }

  if (page.schemaKind === 'brand') {
    assert(
      !graph.some((node) => node['@type'] === 'ProfessionalService'),
      'The brand home page must not pretend to be a single local business.',
    )
  }

  for (const alias of page.aliases) {
    const aliasOutput = outputPath(alias)
    const aliasHtml = await read(aliasOutput)
    validateSharedHtml(aliasHtml, page, aliasOutput, canonicalUrl, false)
    assert(
      !sitemapLines.includes(`${siteUrl}${alias}`),
      `Legacy alias ${alias} must not be included in the sitemap.`,
    )
  }
}

console.log(
  `SEO validation passed for ${manifest.pages.length} canonical routes and ` +
    `${manifest.pages.flatMap((page) => page.aliases).length} compatibility aliases.`,
)
