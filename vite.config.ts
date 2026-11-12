import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { siteConfig } from './src/site/config'
import {
  indexableSitePages,
  normalizePathname,
  notFoundPage,
  resolveSiteRoute,
  sitePages,
} from './src/site/routes'
import { structuredDataForPage } from './src/site/schema'
import { renderStaticPageContent } from './src/site/staticContent'
import { pageStyleSources, withPageStyles, type PageStyleFamily, type PageStyleHrefs } from './src/site/pageStyles'
import type { SitePage } from './src/site/types'
import { guideDataForPage } from './src/content/guides/articles'

function escapeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function htmlAttribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'))
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? ''
}

function isImagePreload(tag: string) {
  return htmlAttribute(tag, 'rel').toLowerCase().split(/\s+/).includes('preload')
    && htmlAttribute(tag, 'as').toLowerCase() === 'image'
}

function hoistCriticalImagePreloads(html: string) {
  const criticalPreloads: string[] = []
  const cleanHtml = html.replace(/<link\b[^>]*>/gi, (tag) => {
    if (!isImagePreload(tag)) return tag
    // These are React's generated resource hints, outside the component tree.
    // Keep the original responsive attributes so client preload() reuses them.
    if (htmlAttribute(tag, 'fetchpriority').toLowerCase() === 'high') criticalPreloads.push(tag)
    return ''
  })
  if (!criticalPreloads.length) return cleanHtml

  const head = cleanHtml.match(/<head\b[^>]*>[\s\S]*?<\/head>/i)
  const csp = head && [...head[0].matchAll(/<meta\b[^>]*>/gi)].find((match) =>
    htmlAttribute(match[0], 'http-equiv').toLowerCase() === 'content-security-policy',
  )
  if (!head || !csp) throw new Error('Critical image preloads require a Content-Security-Policy in the head.')
  const insertAt = head.index! + csp.index! + csp[0].length
  return `${cleanHtml.slice(0, insertAt)}\n    ${criticalPreloads.join('\n    ')}${cleanHtml.slice(insertAt)}`
}

function replaceMeta(
  html: string,
  attribute: 'name' | 'property',
  key: string,
  value: string,
) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/>`,
    'i',
  )
  const replacement = `<meta ${attribute}="${key}" content="${escapeAttribute(value)}" />`

  return pattern.test(html)
    ? html.replace(pattern, replacement)
    : html.replace('</head>', `  ${replacement}\n</head>`)
}

function outputPath(pathname: string) {
  const normalized = normalizePathname(pathname)
  return normalized === '/' ? 'index.html' : `${normalized.slice(1)}index.html`
}

function replaceRootContent(html: string, page: SitePage) {
  const root = `<div id="root"><!-- seo-prerender:start -->${renderStaticPageContent(page)}<!-- seo-prerender:end --></div>`
  const prerenderedRoot =
    /<div id="root"><!-- seo-prerender:start -->[\s\S]*?<!-- seo-prerender:end --><\/div>/

  if (prerenderedRoot.test(html)) {
    return html.replace(prerenderedRoot, root)
  }

  return html.replace('<div id="root"></div>', root)
}

function replaceAliasRootContent(html: string, canonicalUrl: string) {
  const root = `<div id="root"><!-- seo-prerender:start --><main class="seo-redirect" data-prerendered="true"><h1>Diese Seite ist umgezogen.</h1><p>Du wirst direkt zur aktuellen Seite weitergeleitet.</p><p><a href="${escapeAttribute(canonicalUrl)}">Zur aktuellen Seite</a></p></main><!-- seo-prerender:end --></div>`
  const prerenderedRoot =
    /<div id="root"><!-- seo-prerender:start -->[\s\S]*?<!-- seo-prerender:end --><\/div>/

  if (prerenderedRoot.test(html)) {
    return html.replace(prerenderedRoot, root)
  }

  return html.replace('<div id="root"></div>', root)
}

function renderPageHtml(baseHtml: string, page: SitePage, isAlias = false, styleHrefs: PageStyleHrefs = {}) {
  // The built homepage is reused as the template for every route. Discard its
  // hints before SSR generates this page's own resources (none for redirects).
  baseHtml = baseHtml.replace(/<link\b[^>]*>/gi, (tag) => isImagePreload(tag) ? '' : tag)
  // Each page gets only its own article (or the short library catalog), as inert JSON.
  // Escape '<' so article text cannot terminate the script element.
  const guideData = isAlias ? undefined : guideDataForPage(page)
  baseHtml = baseHtml.replace(/<script id="guide-data" type="application\/json">[\s\S]*?<\/script>/g, '')
  if (guideData) baseHtml = baseHtml.replace('</body>', `<script id="guide-data" type="application/json">${JSON.stringify(guideData).replaceAll('<', '\\u003c')}</script>\n</body>`)
  const canonicalUrl = `${siteConfig.url}${page.path}`
  const article = guideData?.article
  const previewImage = article
    ? `${siteConfig.url}/images/${article.image}-1280.webp`
    : `${siteConfig.url}/og-cover.png`
  const previewAlt = article?.imageAlt ?? page.title
  const structuredData = JSON.stringify(structuredDataForPage(page), null, 2)
  const structuredDataInner = `\n${structuredData}\n`
  const hash = createHash('sha256').update(structuredDataInner).digest('base64')
  // A redirect communicates a move, not removal. Keep alias documents crawlable
  // even if a future destination is intentionally excluded from search results.
  const robots = !isAlias && !page.indexable
    ? 'noindex, follow, max-image-preview:large'
    : 'index, follow, max-image-preview:large'

  let html = (isAlias
    ? replaceAliasRootContent(baseHtml, canonicalUrl)
    : replaceRootContent(baseHtml, page))
    .replace(/<html\b([^>]*)>/i, (_match, attributes: string) => {
      const cleanAttributes = attributes
        .replace(/\s*data-page-id="[^"]*"/i, '')
        .trim()
      const prefix = cleanAttributes ? ` ${cleanAttributes}` : ''
      return `<html${prefix} data-page-id="${page.id}">`
    })
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeXml(page.title)}</title>`)
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">${structuredDataInner}</script>`,
    )
    .replace(/sha256-[^']+/, `sha256-${hash}`)

  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'name', 'keywords', page.keywords)
  html = replaceMeta(html, 'name', 'robots', robots)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl)
  html = replaceMeta(html, 'property', 'og:type', article ? 'article' : 'website')
  html = replaceMeta(html, 'property', 'og:image', previewImage)
  html = replaceMeta(html, 'property', 'og:image:secure_url', previewImage)
  html = replaceMeta(html, 'property', 'og:image:type', article ? 'image/webp' : 'image/png')
  html = replaceMeta(html, 'property', 'og:image:width', article ? '1280' : '1200')
  html = replaceMeta(html, 'property', 'og:image:height', article ? '853' : '630')
  html = replaceMeta(html, 'property', 'og:image:alt', previewAlt)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  html = replaceMeta(html, 'name', 'twitter:image', previewImage)
  html = replaceMeta(html, 'name', 'twitter:image:alt', previewAlt)

  if (isAlias) {
    html = html
      // Redirect documents need neither React nor the support assistant. A small
      // blocking script keeps search parameters/fragments before meta refresh.
      .replace(/<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, '')
      .replace(
        '</head>',
        `  <script src="/site-redirect.js"></script>\n  <meta http-equiv="refresh" content="0; url=${escapeAttribute(canonicalUrl)}" />\n</head>`,
      )
  }

  return hoistCriticalImagePreloads(withPageStyles(html, page, styleHrefs, isAlias))
}

function sitemapXml() {
  const entries = indexableSitePages
    .map(
      (page) => `  <url>
    <loc>${escapeXml(`${siteConfig.url}${page.path}`)}</loc>
    <lastmod>${page.lastModified}</lastmod>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
}

function sitemapText() {
  return `${indexableSitePages.map((page) => `${siteConfig.url}${page.path}`).join('\n')}\n`
}

function staticPagesPlugin(): Plugin {
  const home = sitePages.find((page) => page.path === '/')
  if (!home) throw new Error('The site registry must contain a home page.')

  return {
    name: 'generate-static-site-pages',
    enforce: 'post',
    transformIndexHtml(html, context) {
      if (context.server) {
        const pathname = new URL(context.originalUrl ?? context.path, siteConfig.url).pathname
        const route = resolveSiteRoute(pathname)
        const devStyles = Object.fromEntries(
          Object.entries(pageStyleSources).map(([family, source]) => [family, `${source}?direct`]),
        )
        return renderPageHtml(html, route?.page ?? notFoundPage, route?.isAlias ?? false, devStyles)
      }
      return renderPageHtml(html, home)
    },
    generateBundle(_options, bundle) {
      const indexAsset = Object.values(bundle).find(
        (entry) => entry.type === 'asset' && entry.fileName === 'index.html',
      )

      if (!indexAsset || indexAsset.type !== 'asset') {
        this.error('Could not find the built index.html for static page generation.')
        return
      }

      const baseHtml = String(indexAsset.source)
      const styleHrefs: PageStyleHrefs = {}
      for (const [family, source] of Object.entries(pageStyleSources)) {
        const asset = Object.values(bundle).find((entry) => entry.type === 'asset'
          && entry.fileName.endsWith('.css')
          && entry.originalFileNames.some((name) => name.replaceAll('\\', '/').endsWith(source.slice(1))))
        if (!asset) this.error(`Could not find the built ${family} stylesheet (${source}).`)
        styleHrefs[family as PageStyleFamily] = `/${asset.fileName}`
      }
      // Every canonical page can paint from its first response, including deep
      // links from search. Only that page's shared + family styles are embedded.
      const inlinePageStyles = (html: string) => html.replace(
        /<link\b[^>]*rel="stylesheet"[^>]*>/g,
        (link) => {
          const href = link.match(/href="([^"]+)"/)?.[1]
          const asset = href ? bundle[href.replace(/^\//, '')] : undefined
          if (!asset || asset.type !== 'asset' || !asset.fileName.endsWith('.css')) {
            this.error(`Could not inline the page stylesheet: ${href ?? link}`)
          }
          const css = String(asset.source)
          // Relative CSS URLs would resolve against the document after inlining.
          // Fail loudly if a future stylesheet adds such an external dependency.
          if (/@import\b|url\(/i.test(css)) this.error(`Inline stylesheet needs URL resolution: ${href}`)
          return `<style data-inline-style="${escapeAttribute(href!)}">${css.replaceAll('</style', '<\\/style')}</style>`
        },
      )
      indexAsset.source = inlinePageStyles(renderPageHtml(baseHtml, home, false, styleHrefs))

      for (const page of sitePages) {
        if (page.path !== '/') {
          this.emitFile({
            type: 'asset',
            fileName: outputPath(page.path),
            source: inlinePageStyles(renderPageHtml(baseHtml, page, false, styleHrefs)),
          })
        }

        for (const alias of page.aliases ?? []) {
          this.emitFile({
            type: 'asset',
            fileName: outputPath(alias),
            source: renderPageHtml(baseHtml, page, true, styleHrefs),
          })
        }
      }

      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: inlinePageStyles(renderPageHtml(baseHtml, notFoundPage, false, styleHrefs)),
      })

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapXml(),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.txt',
        source: sitemapText(),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'site-manifest.json',
        source: JSON.stringify(
          {
            generatedFrom: 'src/site/routes.ts',
            purpose: 'Build verification only; not a Google indexing directive.',
            pages: sitePages.map((page) => ({
              id: page.id,
              kind: page.kind,
              schemaKind: page.schemaKind,
              path: page.path,
              aliases: page.aliases ?? [],
              indexable: page.indexable,
              indexingReason: page.indexable
                ? 'Canonical public content intended for search results.'
                : page.kind === 'legal'
                  ? 'Legal information remains accessible but is intentionally excluded from search results.'
                  : 'Intentionally excluded from search results.',
              lastModified: page.lastModified,
              legalPage: page.legalPage,
              heading: page.heading,
              accent: page.accent,
              title: page.title,
              description: page.description,
            })),
            redirects: sitePages.flatMap((page) =>
              (page.aliases ?? []).map((alias) => ({
                path: alias,
                target: page.path,
                mechanism: 'zero-second-meta-refresh',
                robots: 'index, follow, max-image-preview:large',
                reason: 'Historical URL retained as a permanent move directly to its canonical destination.',
              })),
            ),
            notFound: {
              path: '/404.html',
              indexable: false,
              reason: 'Recovery page for unknown URLs, not searchable content.',
            },
          },
          null,
          2,
        ),
      })
    },
  }
}

function localSupportCspPlugin(): Plugin {
  return {
    name: 'local-support-csp',
    apply: 'serve',
    transformIndexHtml(html) {
      return html
        .replace(
          "connect-src 'self'",
          "connect-src 'self' http://127.0.0.1:8787 http://localhost:8787",
        )
        .replace(
          /\s*<!-- Cloudflare Web Analytics -->[\s\S]*?<!-- End Cloudflare Web Analytics -->/i,
          '',
        )
    },
  }
}

export default defineConfig({
  plugins: [react(), localSupportCspPlugin(), staticPagesPlugin()],
  base: '/',
  build: {
    rolldownOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        ...Object.fromEntries(Object.entries(pageStyleSources).map(([family, source]) => [
          `page-${family}`,
          fileURLToPath(new URL(`.${source}`, import.meta.url)),
        ])),
      },
    },
  },
})
