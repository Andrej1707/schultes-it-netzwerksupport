import { createHash } from 'node:crypto'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { siteConfig } from './src/site/config'
import { indexableSitePages, normalizePathname, sitePages } from './src/site/routes'
import { structuredDataForPage } from './src/site/schema'
import { renderStaticPageContent } from './src/site/staticContent'
import type { SitePage } from './src/site/types'

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

function renderPageHtml(baseHtml: string, page: SitePage, isAlias = false) {
  const canonicalUrl = `${siteConfig.url}${page.path}`
  const structuredData = JSON.stringify(structuredDataForPage(page), null, 2)
  const structuredDataInner = `\n${structuredData}\n`
  const hash = createHash('sha256').update(structuredDataInner).digest('base64')
  const robots = !page.indexable
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
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`)
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
  html = replaceMeta(html, 'property', 'og:image:alt', page.title)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  html = replaceMeta(html, 'name', 'twitter:image:alt', page.title)

  if (isAlias) {
    html = html.replace(
      '</head>',
      `  <meta http-equiv="refresh" content="0; url=${escapeAttribute(canonicalUrl)}" />\n</head>`,
    )
  }

  return html
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
    transformIndexHtml(html) {
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
      indexAsset.source = renderPageHtml(baseHtml, home)

      for (const page of sitePages) {
        if (page.path !== '/') {
          this.emitFile({
            type: 'asset',
            fileName: outputPath(page.path),
            source: renderPageHtml(baseHtml, page),
          })
        }

        for (const alias of page.aliases ?? []) {
          this.emitFile({
            type: 'asset',
            fileName: outputPath(alias),
            source: renderPageHtml(baseHtml, page, true),
          })
        }
      }

      const notFoundPage: SitePage = {
        ...home,
        id: 'not-found',
        kind: 'not-found',
        path: '/404.html',
        title: 'Seite nicht gefunden | Schultes IT',
        description:
          'Die angeforderte Seite wurde nicht gefunden. Nutze die Navigation zu Fernwartung, Leistungen oder Standorten.',
        eyebrow: 'SYSTEM / 404',
        heading: 'Diese Seite gibt es nicht.',
        accent: 'Die passende Hilfe aber schon.',
        intro:
          'Nutze die Hauptnavigation oder starte bei der deutschlandweiten Fernwartung.',
        indexable: false,
      }
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: renderPageHtml(baseHtml, notFoundPage),
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
            pages: sitePages.map((page) => ({
              id: page.id,
              kind: page.kind,
              schemaKind: page.schemaKind,
              path: page.path,
              aliases: page.aliases ?? [],
              indexable: page.indexable,
              lastModified: page.lastModified,
              legalPage: page.legalPage,
              heading: page.heading,
              accent: page.accent,
            })),
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
})
