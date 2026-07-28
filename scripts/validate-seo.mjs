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

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
}

function plainText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
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
  assert(
    html.includes('data-prerendered="true"'),
    `Static crawlable page content is missing in ${path}.`,
  )
  const staticHeading = html.match(/<h1>([\s\S]+?)<\/h1>/i)?.[1]
  assert(
    staticHeading,
    `A static H1 is missing in ${path}.`,
  )
  assert(
    plainText(staticHeading) === `${page.heading} ${page.accent}`,
    `Static H1 does not match the route content in ${path}.`,
  )
  assert(
    /<nav aria-label="Hauptnavigation">[\s\S]+?href="\/standorte\/"/i.test(html),
    `Static crawlable navigation is missing in ${path}.`,
  )
}

const manifest = JSON.parse(await read('site-manifest.json'))
const sitemap = await read('sitemap.xml')
const textSitemap = await read('sitemap.txt')
const robots = await read('robots.txt')
const logo = await read('logo-512.svg')
const sitemapLines = textSitemap.trim().split(/\r?\n/)
const inboundLinks = new Map(manifest.pages.map((page) => [page.path, 0]))
const aliasPaths = new Set(
  manifest.pages.flatMap((page) =>
    page.aliases.map((alias) => (alias === '/' ? '/' : `${alias.replace(/\/+$/, '')}/`)),
  ),
)

assert(
  robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
  'robots.txt does not reference the canonical XML sitemap.',
)
assert(!sitemap.includes('github.io'), 'sitemap.xml contains the old GitHub Pages host.')
assert(
  new Set(sitemapLines).size === sitemapLines.length,
  'sitemap.txt contains duplicate canonical URLs.',
)
assert(
  !sitemap.includes('<changefreq>') && !sitemap.includes('<priority>'),
  'sitemap.xml contains values that Google explicitly ignores.',
)
assert(
  /<svg[^>]+width="512"[^>]+height="512"/i.test(logo),
  'The organization logo must expose stable dimensions of at least 112x112.',
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
  assert(
    organization.logo?.width >= 112 &&
      organization.logo?.height >= 112 &&
      organization.logo?.contentUrl === `${siteUrl}/logo-512.svg`,
    `Organization logo schema is invalid in ${canonicalOutput}.`,
  )
  assert(
    !organization.telephone && !organization.email,
    `Central Organization schema leaks a location contact in ${canonicalOutput}.`,
  )
  assert(
    organization.contactPoint?.email === 'kontakt@schultes-it.de',
    `Central Organization contact email is invalid in ${canonicalOutput}.`,
  )

  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1] === '/' ? '/' : `${match[1].replace(/\/+$/, '')}/`
    assert(
      !aliasPaths.has(href),
      `Internal link ${href} in ${canonicalOutput} points to a compatibility alias.`,
    )
    if (inboundLinks.has(href) && href !== page.path) {
      inboundLinks.set(href, inboundLinks.get(href) + 1)
    }
  }

  if (page.schemaKind === 'location-service') {
    const service = graph.find((node) => node['@type'] === 'Service')
    const location = graph.find((node) => node['@type'] === 'ProfessionalService')
    assert(service, `Location-owned Service schema is missing in ${canonicalOutput}.`)
    assert(location, `Owning ProfessionalService schema is missing in ${canonicalOutput}.`)
    assert(
      (Array.isArray(service.areaServed) && service.areaServed.length > 0) ||
        (service.areaServed?.['@type'] === 'Country' &&
          service.areaServed?.name === 'Deutschland'),
      `Service areaServed is invalid in ${canonicalOutput}.`,
    )
    assert(
      service.provider?.['@id'] === location['@id'],
      `Service provider does not reference its owning location in ${canonicalOutput}.`,
    )
    assert(
      page.path.startsWith('/standorte/'),
      `Location-owned service is outside the canonical location tree: ${page.path}.`,
    )
  }

  if (page.schemaKind === 'network-service') {
    const service = graph.find((node) => node['@type'] === 'Service')
    assert(service, `Central Service schema is missing in ${canonicalOutput}.`)
    assert(
      page.path.startsWith('/fernwartung/'),
      `Central remote service is outside the Fernwartung tree: ${page.path}.`,
    )
    assert(
      service.provider?.['@id'] === `${siteUrl}/#organization`,
      `Central remote provider is not Schultes IT in ${canonicalOutput}.`,
    )
    assert(
      service.areaServed?.['@type'] === 'Country' &&
        service.areaServed?.name === 'Deutschland',
      `Central remote areaServed is not Germany in ${canonicalOutput}.`,
    )
    assert(
      !graph.some((node) => node['@type'] === 'ProfessionalService'),
      `Central remote page must not expose a regional provider in ${canonicalOutput}.`,
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

for (const page of manifest.pages.filter((candidate) => candidate.indexable && candidate.path !== '/')) {
  assert(
    inboundLinks.get(page.path) > 0,
    `Indexable route ${page.path} is orphaned from static internal links.`,
  )
}

const notFoundHtml = await read('404.html')
assert(
  notFoundHtml.includes('<meta name="robots" content="noindex, follow, max-image-preview:large" />'),
  '404.html must be excluded from indexing.',
)
assert(
  notFoundHtml.includes('data-prerendered="true"'),
  '404.html needs a static recovery page.',
)

console.log(
  `SEO validation passed for ${manifest.pages.filter((page) => page.indexable).length} indexable routes, ` +
    `${manifest.pages.filter((page) => !page.indexable).length} non-indexable canonical routes and ` +
    `${manifest.pages.flatMap((page) => page.aliases).length} compatibility aliases.`,
)
