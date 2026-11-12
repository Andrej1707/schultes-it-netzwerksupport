import { createHash } from 'node:crypto'
import { readFile, readdir, stat } from 'node:fs/promises'
import { join, resolve, sep } from 'node:path'
import { guideCatalog } from '../src/content/guides/catalog.ts'

const siteUrl = 'https://schultes-it.de'
const cloudflareBeaconToken = '9ae74b8a40a94aa885b1c61231e312c6'
const previewImageUrl = `${siteUrl}/og-cover.png`
const distDirectory = resolve(process.cwd(), 'dist')
const checkedAssets = new Set()
const photoOwners = new Map()
const photoContentOwners = new Map()
const guideByPath = new Map(guideCatalog.map(guide => [`/ratgeber/${guide.slug}/`, guide]))

function previewForPage(page) {
  if (page.kind === 'guide') {
    const guide = guideByPath.get(page.path)
    assert(guide, `No guide catalog entry for ${page.path}.`)
    return {
      url: `${siteUrl}/images/${guide.image}-1280.webp`,
      alt: guide.imageAlt,
      width: 1280,
      height: 853,
      type: 'image/webp',
    }
  }
  return { url: previewImageUrl, alt: page.title, width: 1200, height: 630, type: 'image/png' }
}

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
    .replaceAll('&apos;', "'")
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
}

function plainText(value) {
  return decodeHtml(
    value.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()
}

function attributeValue(tag, name) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'))
  return decodeHtml(match?.[1] ?? match?.[2] ?? match?.[3] ?? '')
}

function isImagePreload(tag) {
  return attributeValue(tag, 'rel').toLowerCase().split(/\s+/).includes('preload')
    && attributeValue(tag, 'as').toLowerCase() === 'image'
}

function validateCriticalImagePreloads(html, path, isAlias = false) {
  const preloads = [...html.matchAll(/<link\b[^>]*>/gi)].filter((match) => isImagePreload(match[0]))
  const heroes = [...html.matchAll(/<img\b[^>]*>/gi)].filter((match) =>
    attributeValue(match[0], 'fetchpriority').toLowerCase() === 'high',
  )
  assert(
    heroes.length <= 1 && preloads.length === (isAlias ? 0 : heroes.length),
    `Expected exactly one preload per critical hero and none for other images or redirects in ${path}.`,
  )
  if (!preloads.length) return

  const preload = preloads[0]
  const hero = heroes[0]
  const head = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i)
  assert(head, `Missing head for the critical image preload in ${path}.`)
  const csp = [...head[0].matchAll(/<meta\b[^>]*>/gi)].find((match) =>
    attributeValue(match[0], 'http-equiv').toLowerCase() === 'content-security-policy',
  )
  const firstStyle = [...head[0].matchAll(/<(?:style|link)\b[^>]*>/gi)].find((match) =>
    /^<style\b/i.test(match[0])
      || attributeValue(match[0], 'rel').toLowerCase().split(/\s+/).includes('stylesheet'),
  )
  assert(
    csp && firstStyle && preload.index >= head.index + csp.index + csp[0].length
      && preload.index + preload[0].length <= head.index + firstStyle.index,
    `Critical image preload in ${path} must be inside the head, after CSP and before styles.`,
  )
  assert(
    attributeValue(preload[0], 'fetchpriority').toLowerCase() === 'high'
      && attributeValue(hero[0], 'loading').toLowerCase() === 'eager',
    `Critical image and preload must retain eager/high priority in ${path}.`,
  )

  // Match the preferred picture source when present, otherwise the img itself.
  // Compare rendered values, not image names/extensions or guessed sizes.
  const picture = [...html.matchAll(/<picture\b[^>]*>[\s\S]*?<\/picture>/gi)].find((match) =>
    hero.index > match.index && hero.index < match.index + match[0].length,
  )
  const source = picture?.[0].match(/<source\b[^>]*>/i)?.[0]
  const target = source ?? hero[0]
  const srcset = attributeValue(target, 'srcset')
  assert(
    attributeValue(preload[0], 'imagesrcset') === srcset
      && attributeValue(preload[0], 'imagesizes') === attributeValue(target, 'sizes'),
    `Critical image preload srcset/sizes do not match the hero in ${path}.`,
  )
  if (source) {
    assert(
      srcset && attributeValue(preload[0], 'type') === attributeValue(source, 'type')
        && attributeValue(preload[0], 'media') === attributeValue(source, 'media'),
      `Critical image preload must match the preferred picture source type/media in ${path}.`,
    )
  }
  const href = attributeValue(preload[0], 'href')
  assert(
    srcset
      ? !href || srcset.split(',').some((candidate) => candidate.trim().split(/\s+/)[0] === href)
      : href === attributeValue(hero[0], 'src'),
    `Critical image preload points at a different image from the hero in ${path}.`,
  )
}

async function validateLocalAsset(
  reference,
  pageUrl,
  path,
  requiredLocal = false,
) {
  if (!reference || reference.startsWith('data:') || reference.startsWith('#'))
    return
  const url = new URL(reference, pageUrl)
  if (url.origin !== siteUrl) {
    assert(
      !requiredLocal,
      `Asset ${reference} in ${path} is blocked by the site's self-only asset CSP.`,
    )
    return
  }
  const assetPath = resolve(
    distDirectory,
    `.${decodeURIComponent(url.pathname)}`,
  )
  assert(
    assetPath.startsWith(`${distDirectory}${sep}`),
    `Asset path escapes dist in ${path}.`,
  )
  if (checkedAssets.has(assetPath)) return
  const asset = await stat(assetPath).catch(() => undefined)
  assert(
    asset?.isFile() && asset.size > 0,
    `Local asset ${url.pathname} in ${path} is missing or empty.`,
  )
  checkedAssets.add(assetPath)

  if (url.pathname.endsWith('.css')) {
    const css = await readFile(assetPath, 'utf8')
    for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
      await validateLocalAsset(match[1].trim(), url.href, url.pathname, true)
    }
  }
}

async function validateAssets(html, pageUrl, path) {
  for (const match of html.matchAll(
    /<(img|source|video|script|link)\b[^>]*>/gi,
  )) {
    const tag = match[0]
    const kind = match[1].toLowerCase()
    if (kind === 'link') {
      const rel = attributeValue(tag, 'rel').toLowerCase()
      if (
        /^(stylesheet|icon|apple-touch-icon|preload|modulepreload|alternate)$/.test(
          rel,
        )
      ) {
        await validateLocalAsset(
          attributeValue(tag, 'href'),
          pageUrl,
          path,
          true,
        )
      }
      if (isImagePreload(tag)) {
        await validateSrcset(attributeValue(tag, 'imagesrcset'), pageUrl, path)
      }
      continue
    }
    await validateLocalAsset(
      attributeValue(tag, 'src'),
      pageUrl,
      path,
      kind !== 'script',
    )
    await validateLocalAsset(attributeValue(tag, 'poster'), pageUrl, path, true)
    await validateSrcset(attributeValue(tag, 'srcset'), pageUrl, path)
  }
  const previewTag = html.match(/<meta\b[^>]*property="og:image"[^>]*>/i)?.[0] ?? ''
  await validateLocalAsset(attributeValue(previewTag, 'content'), pageUrl, path, true)
}

async function validateSrcset(srcset, pageUrl, path) {
  if (!srcset || srcset.startsWith('data:')) return
  for (const candidate of srcset.split(',')) {
    await validateLocalAsset(candidate.trim().split(/\s+/)[0], pageUrl, path, true)
  }
}

function outputPath(route) {
  return route === '/' ? 'index.html' : `${route.slice(1)}index.html`
}

async function validateInlinePageStyles(html, page, path) {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? ''
  assert(
    ![...html.matchAll(/<link\b[^>]*>/gi)].some((match) =>
      attributeValue(match[0], 'rel').toLowerCase().split(/\s+/).includes('stylesheet'),
    ),
    `Canonical page ${path} must render without an external stylesheet request.`,
  )

  const family = page.path === '/' || ['home', 'legal'].includes(page.kind)
    ? undefined
    : page.kind === 'service'
      ? 'service'
      : ['guide', 'guides'].includes(page.kind)
        ? 'guides'
        : 'network'
  const expected = [inlineStyleAssets.get('shared')]
  if (family) expected.push(inlineStyleAssets.get(family))
  const styles = [...head.matchAll(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi)]
    .filter((match) => attributeValue(match[1], 'data-inline-style'))
  const hrefs = styles.map((match) => attributeValue(match[1], 'data-inline-style'))
  assert(
    hrefs.length === expected.length &&
      new Set(hrefs).size === hrefs.length &&
      expected.every((asset) => hrefs.includes(asset.href)),
    `Missing, duplicate or incorrect shared/page-family inline CSS in ${path}.`,
  )
  for (const style of styles) {
    const href = attributeValue(style[1], 'data-inline-style')
    const asset = expected.find((candidate) => candidate.href === href)
    assert(
      style[2].replaceAll('<\\/style', '</style') === asset.css,
      `Inline stylesheet ${href} in ${path} differs from its built CSS asset.`,
    )
    await validateLocalAsset(href, `${siteUrl}${page.path}`, path, true)
  }
}

function structuredData(html, path) {
  const matches = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ]
  assert(
    matches.length === 1,
    `Expected exactly one structured-data graph in ${path}.`,
  )
  const match = matches[0]
  const cspTag =
    html.match(
      /<meta\b[^>]*http-equiv="Content-Security-Policy"[^>]*>/i,
    )?.[0] ?? ''
  const csp = attributeValue(cspTag, 'content')
  const scriptPolicy =
    csp
      .split(';')
      .find((directive) => directive.trim().startsWith('script-src ')) ?? ''
  const hash = createHash('sha256').update(match[1]).digest('base64')
  assert(
    scriptPolicy.includes(`'sha256-${hash}'`),
    `Structured data SHA-256 does not match the CSP in ${path}.`,
  )

  try {
    return JSON.parse(match[1])
  } catch (error) {
    throw new Error(`Structured data in ${path} is invalid JSON: ${error}`)
  }
}

function validateSharedHtml(html, page, path, canonicalUrl, indexable) {
  const preview = previewForPage(page)
  const robots = indexable
    ? 'index, follow, max-image-preview:large'
    : 'noindex, follow, max-image-preview:large'

  assert(
    html.includes(`<link rel="canonical" href="${canonicalUrl}" />`),
    `Invalid canonical URL in ${path}.`,
  )
  assert(
    [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/gi)].length === 1,
    `Expected exactly one canonical URL in ${path}.`,
  )
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? ''
  const titles = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)]
  assert(
    titles.length === 1 && plainText(titles[0][1]) === page.title,
    `Invalid or duplicate title in ${path}.`,
  )
  const descriptions = [
    ...html.matchAll(/<meta\b[^>]*name="description"[^>]*>/gi),
  ]
  assert(
    descriptions.length === 1 &&
      attributeValue(descriptions[0][0], 'content') === page.description,
    `Invalid or duplicate meta description in ${path}.`,
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
    html.includes(`<meta property="og:image" content="${preview.url}" />`),
    `Open Graph image does not match the page's preview image in ${path}.`,
  )
  assert(
    html.includes(`<meta property="og:image:secure_url" content="${preview.url}" />`) &&
      html.includes(`<meta property="og:image:type" content="${preview.type}" />`) &&
      html.includes(`<meta property="og:type" content="${page.kind === 'guide' ? 'article' : 'website'}" />`),
    `Open Graph image URL, MIME type or page type is incorrect in ${path}.`,
  )
  assert(
    html.includes(`<meta property="og:image:width" content="${preview.width}" />`) &&
      html.includes(`<meta property="og:image:height" content="${preview.height}" />`),
    `Open Graph image dimensions are missing or incorrect in ${path}.`,
  )
  assert(
    html.includes(`<meta name="twitter:image" content="${preview.url}" />`),
    `Twitter preview image does not match the page's preview image in ${path}.`,
  )
  for (const [attribute, name] of [['property', 'og:image:alt'], ['name', 'twitter:image:alt']]) {
    const tag = html.match(new RegExp(`<meta\\b[^>]*${attribute}="${name}"[^>]*>`, 'i'))?.[0] ?? ''
    assert(attributeValue(tag, 'content') === preview.alt, `Incorrect ${name} in ${path}.`)
  }
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
  const staticHeadings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)]
  assert(
    staticHeadings.length === 1,
    `Expected exactly one static H1 in ${path}; found ${staticHeadings.length}.`,
  )
  assert(
    plainText(staticHeadings[0][1]) ===
      `${page.heading} ${page.accent}`.replace(/\s+/g, ' ').trim(),
    `Static H1 does not match the route content in ${path}.`,
  )
  assert(
    /<nav\b[^>]*aria-label="Hauptnavigation"[^>]*>(?:(?!<\/nav>)[\s\S])*href="\/leistungen\/"/i.test(
      html,
    ),
    `Static crawlable navigation is missing in ${path}.`,
  )
  assert(
    !html.includes('<!--$!-->'),
    `A suspended component left fallback content in ${path}.`,
  )
}

function validateRedirectAlias(html, page, path, canonicalUrl) {
  assert(
    html.includes('<script src="/site-redirect.js"></script>') &&
      html.indexOf('<script src="/site-redirect.js"></script>') <
        html.indexOf('<meta http-equiv="refresh"'),
    `Redirect alias ${path} must preserve query parameters and anchors before meta refresh.`,
  )
  assert(
    !/<script\b[^>]*type="module"/i.test(html),
    `Redirect alias ${path} must not load the application before leaving.`,
  )
  assert(
    html.includes(`<link rel="canonical" href="${canonicalUrl}" />`),
    `Invalid canonical URL in redirect alias ${path}.`,
  )
  assert(
    html.includes(
      '<meta name="robots" content="index, follow, max-image-preview:large" />',
    ),
    `Redirect alias ${path} must remain crawlable so Google can process the redirect.`,
  )
  assert(
    html.includes(
      `<meta http-equiv="refresh" content="0; url=${canonicalUrl}" />`,
    ),
    `Redirect alias ${path} is missing its permanent zero-second meta refresh.`,
  )
  assert(
    html.includes(`<a href="${canonicalUrl}">Zur aktuellen Seite</a>`),
    `Redirect alias ${path} needs a crawlable fallback link.`,
  )
  assert(
    html.includes(`data-page-id="${page.id}"`),
    `Page identity is missing in redirect alias ${path}.`,
  )
  assert(
    !html.includes('content="noindex, follow'),
    `Redirect alias ${path} must not combine a permanent redirect with noindex.`,
  )
}

const manifest = JSON.parse(await read('site-manifest.json'))
const builtAssetNames = await readdir(join(distDirectory, 'assets'))
const inlineStyleAssets = new Map()
for (const [family, prefix] of [
  ['shared', 'index-'],
  ['service', 'page-service-'],
  ['network', 'page-network-'],
  ['guides', 'page-guides-'],
]) {
  const matches = builtAssetNames.filter((name) => name.startsWith(prefix) && name.endsWith('.css'))
  assert(matches.length === 1, `Expected one built ${family} stylesheet; found ${matches.length}.`)
  const href = `/assets/${matches[0]}`
  const css = await read(href.slice(1))
  assert(css.trim().length > 0, `Built ${family} stylesheet ${href} is empty.`)
  inlineStyleAssets.set(family, { href, css })
}
const sitemap = await read('sitemap.xml')
const textSitemap = await read('sitemap.txt')
const robots = await read('robots.txt')
const logo = await read('logo-512.svg')
const sitemapLines = textSitemap.trim().split(/\r?\n/)
const inboundLinks = new Map(manifest.pages.map((page) => [page.path, 0]))
const canonicalTitles = new Map()
const pageHtmlByPath = new Map()
const aliasPaths = new Set(
  manifest.pages.flatMap((page) =>
    page.aliases.map((alias) =>
      alias === '/' ? '/' : `${alias.replace(/\/+$/, '')}/`,
    ),
  ),
)

const canonicalPaths = new Set(manifest.pages.map((page) => page.path))
const redirectTargets = new Map(manifest.redirects.map((redirect) => [redirect.path, redirect.target]))
const expectedSitemapUrls = manifest.pages
  .filter((page) => page.indexable)
  .map((page) => `${siteUrl}${page.path}`)
  .sort()
const xmlSitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => decodeHtml(match[1]))
  .sort()
assert(
  JSON.stringify([...sitemapLines].sort()) === JSON.stringify(expectedSitemapUrls) &&
    JSON.stringify(xmlSitemapUrls) === JSON.stringify(expectedSitemapUrls),
  'XML and text sitemaps must contain exactly the indexable canonical routes.',
)
assert(
  manifest.pages.filter((page) => page.kind === 'location').length === 1 &&
    manifest.pages.some((page) => page.path === '/' && page.kind === 'location') &&
    !manifest.pages.some((page) => ['locations', 'owner'].includes(page.kind)),
  'The public site must present one local business on the homepage, without branch-selection pages.',
)
assert(
  redirectTargets.size === aliasPaths.size,
  'The redirect manifest must describe every compatibility alias exactly once.',
)
for (const redirect of manifest.redirects) {
  assert(
    aliasPaths.has(redirect.path) && canonicalPaths.has(redirect.target) &&
      !redirectTargets.has(redirect.target) && redirect.path !== redirect.target &&
      redirect.robots === 'index, follow, max-image-preview:large',
    `Redirect ${redirect.path} must be crawlable and point directly to a canonical destination.`,
  )
}
const historicalRoutes = JSON.parse(await readFile(
  join(process.cwd(), 'docs/seo/historical-routes.json'), 'utf8',
))
for (const { path } of historicalRoutes.routeInventory) {
  assert(
    canonicalPaths.has(path) || redirectTargets.has(path),
    `Audited historical URL ${path} is missing its canonical page or direct redirect.`,
  )
}

assert(
  robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
  'robots.txt does not reference the canonical XML sitemap.',
)
assert(
  !sitemap.includes('github.io'),
  'sitemap.xml contains the old GitHub Pages host.',
)
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
  pageHtmlByPath.set(page.path, html)
  assert(
    !canonicalTitles.has(page.title),
    `Duplicate title on ${page.path} and ${canonicalTitles.get(page.title)}.`,
  )
  canonicalTitles.set(page.title, page.path)
  const xmlMatches =
    sitemap.match(
      new RegExp(`<loc>${canonicalUrl.replaceAll('/', '\\/')}</loc>`, 'g'),
    ) ?? []

  assert(
    xmlMatches.length === (page.indexable ? 1 : 0),
    `Unexpected sitemap.xml entry count for ${canonicalUrl}.`,
  )
  assert(
    sitemapLines.includes(canonicalUrl) === page.indexable,
    `Unexpected sitemap.txt state for ${canonicalUrl}.`,
  )
  validateSharedHtml(html, page, canonicalOutput, canonicalUrl, page.indexable)
  validateCriticalImagePreloads(html, canonicalOutput)
  await validateInlinePageStyles(html, page, canonicalOutput)
  await validateAssets(html, canonicalUrl, canonicalOutput)
  // Service photography stays unique. Editorial covers are intentionally repeated
  // between the library, their article and related-reading cards.
  for (const match of (page.kind === 'guide' || page.kind === 'guides') ? [] : html.matchAll(/<img\b[^>]*>/gi)) {
    const src = attributeValue(match[0], 'src')
    if (!src.startsWith('/images/')) continue
    assert(
      !photoOwners.has(src),
      `Photo ${src} is reused on ${page.path}; first placement: ${photoOwners.get(src)}.`,
    )
    photoOwners.set(src, page.path)
    const bytes = await readFile(join(distDirectory, src.slice(1)))
    const fingerprint = createHash('sha256').update(bytes).digest('hex')
    assert(
      !photoContentOwners.has(fingerprint),
      `Photo bytes in ${src} duplicate ${photoContentOwners.get(fingerprint)}.`,
    )
    photoContentOwners.set(fingerprint, src)
  }

  const data = structuredData(html, canonicalOutput)
  const graph = data['@graph']
  assert(
    Array.isArray(graph),
    `Structured data graph is missing in ${canonicalOutput}.`,
  )
  if (page.kind === 'guide') {
    const articles = graph.filter(node => node['@type'] === 'Article')
    assert(
      articles.length === 1 && articles[0].image === previewForPage(page).url,
      `Article schema image must match the guide catalog and social preview in ${canonicalOutput}.`,
    )
  }

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

  for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>/gi)) {
    const url = new URL(decodeHtml(match[1]), canonicalUrl)
    if (url.origin !== siteUrl) continue
    const href =
      url.pathname === '/' ? '/' : `${url.pathname.replace(/\/+$/, '')}/`
    assert(
      !aliasPaths.has(href),
      `Internal link ${href} in ${canonicalOutput} points to a compatibility alias.`,
    )
    if (inboundLinks.has(href) && href !== page.path) {
      inboundLinks.set(href, inboundLinks.get(href) + 1)
    }
    if (inboundLinks.has(href)) {
      if (url.hash) {
        const destination =
          pageHtmlByPath.get(href) ?? (await read(outputPath(href)))
        pageHtmlByPath.set(href, destination)
        const target = decodeURIComponent(url.hash.slice(1))
        const ids = [...destination.matchAll(/\bid="([^"]*)"/g)].map((entry) =>
          decodeHtml(entry[1]),
        )
        assert(
          ids.includes(target),
          `Internal fragment ${url.pathname}${url.hash} in ${canonicalOutput} has no target.`,
        )
      }
    } else {
      await validateLocalAsset(url.href, canonicalUrl, canonicalOutput)
    }
  }

  if (page.schemaKind === 'location-service') {
    const service = graph.find((node) => node['@type'] === 'Service')
    const location = graph.find(
      (node) => node['@type'] === 'ProfessionalService',
    )
    assert(
      service,
      `Location-owned Service schema is missing in ${canonicalOutput}.`,
    )
    assert(
      location,
      `Owning ProfessionalService schema is missing in ${canonicalOutput}.`,
    )
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
      page.path.startsWith('/leistungen/'),
      `Local service is outside the canonical service tree: ${page.path}.`,
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
    const location = graph.find(
      (node) => node['@type'] === 'ProfessionalService',
    )
    assert(
      location,
      `ProfessionalService schema is missing in ${canonicalOutput}.`,
    )
    assert(
      typeof location.address?.addressLocality === 'string' &&
        location.address.addressLocality.length > 0,
      `Location address is invalid in ${canonicalOutput}.`,
    )
    assert(
      Array.isArray(location.areaServed),
      `Location service area is missing in ${canonicalOutput}.`,
    )
  }

  if (page.schemaKind === 'brand') {
    const webPage = graph.find((node) => node['@id'] === `${canonicalUrl}#webpage`)
    assert(
      webPage?.about?.['@id'] === organization['@id'],
      'The brand homepage must retain its separate Organization identity.',
    )
    if (webPage?.mentions) {
      const business = graph.find((node) => node['@id'] === webPage.mentions['@id'])
      const visible = plainText(html.split('<body')[1]?.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '') ?? '')
      assert(business?.['@type'] === 'ProfessionalService' &&
        visible.includes(business.address.addressLocality) &&
        visible.includes(business.address.streetAddress) &&
        html.includes(`href="${new URL(business.url).pathname}"`),
      'The featured local business must be real, visible and linked from the initial homepage HTML.')
    }
  }

  const bodyText = plainText(
    (html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '').replace(
      /<script\b[^>]*>[\s\S]*?<\/script>/gi,
      '',
    ),
  )
  for (const faqPage of graph.filter((node) => node['@type'] === 'FAQPage')) {
    for (const question of faqPage.mainEntity ?? []) {
      assert(
        bodyText.includes(plainText(question.name)) &&
          bodyText.includes(plainText(question.acceptedAnswer?.text ?? '')),
        `FAQ structured data describes content absent from the rendered page in ${canonicalOutput}.`,
      )
    }
  }
  if (page.kind === 'legal') {
    assert(
      !bodyText.includes('Die vollständigen Anbieterangaben werden direkt') &&
        !bodyText.includes(
          'Die vollständigen Datenschutzhinweise werden direkt',
        ) &&
        (page.legalPage === 'impressum'
          ? /Egerländer/.test(bodyText)
          : /Verantwortlich/.test(bodyText)),
      `Complete legal content is missing from the initial HTML in ${canonicalOutput}.`,
    )
  }

  for (const alias of page.aliases) {
    const aliasOutput = outputPath(alias)
    const aliasHtml = await read(aliasOutput)
    validateRedirectAlias(aliasHtml, page, aliasOutput, canonicalUrl)
    validateCriticalImagePreloads(aliasHtml, aliasOutput, true)
    structuredData(aliasHtml, aliasOutput)
    await validateAssets(aliasHtml, `${siteUrl}${alias}`, aliasOutput)
    assert(
      !sitemapLines.includes(`${siteUrl}${alias}`),
      `Legacy alias ${alias} must not be included in the sitemap.`,
    )
  }
}

for (const page of manifest.pages.filter(
  (candidate) => candidate.indexable && candidate.path !== '/',
)) {
  assert(
    inboundLinks.get(page.path) > 0,
    `Indexable route ${page.path} is orphaned from static internal links.`,
  )
}

const notFoundHtml = await read('404.html')
structuredData(notFoundHtml, '404.html')
validateCriticalImagePreloads(notFoundHtml, '404.html')
await validateInlinePageStyles(notFoundHtml, { path: '/404.html', kind: 'not-found' }, '404.html')
await validateAssets(notFoundHtml, `${siteUrl}/404.html`, '404.html')
assert(
  notFoundHtml.includes(
    '<meta name="robots" content="noindex, follow, max-image-preview:large" />',
  ),
  '404.html must be excluded from indexing.',
)
assert(
  notFoundHtml.includes('data-prerendered="true"'),
  '404.html needs a static recovery page.',
)
assert(
  [...notFoundHtml.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)].length === 1,
  '404.html must contain exactly one recovery heading.',
)

console.log(
  `SEO validation passed for ${manifest.pages.filter((page) => page.indexable).length} indexable routes, ` +
    `${manifest.pages.filter((page) => !page.indexable).length} non-indexable canonical routes and ` +
    `${manifest.pages.flatMap((page) => page.aliases).length} permanent compatibility redirects; ` +
    `${photoOwners.size} unique photographic placements verified.`,
)
