/** Page styles enter the HTML head; production embeds them before first paint. */
export const pageStyleSources = {
  service: '/src/premium-service.css',
  network: '/src/premium-network.css',
  guides: '/src/guides.css',
} as const

export type PageStyleFamily = keyof typeof pageStyleSources
export type PageStyleHrefs = Partial<Record<PageStyleFamily, string>>

export function pageStyleFamily(page: { path: string; kind: string }): PageStyleFamily | null {
  // The restored home and legal pages use the common premium stylesheet.
  if (page.path === '/' || page.kind === 'home' || page.kind === 'legal') return null
  if (page.kind === 'service') return 'service'
  if (page.kind === 'guides' || page.kind === 'guide') return 'guides'
  return 'network'
}

/** Replacing a previously rendered page also replaces its family stylesheet. */
export function withPageStyles(html: string, page: { path: string; kind: string }, hrefs: PageStyleHrefs, isAlias = false) {
  const cleanHtml = html.replace(/\s*<link\b[^>]*\bdata-page-style="[^"]*"[^>]*>/gi, '')
  const family = isAlias ? null : pageStyleFamily(page)
  const href = family ? hrefs[family] : undefined
  if (!family || !href) return cleanHtml
  return cleanHtml.replace('</head>', `  <link rel="stylesheet" href="${href}" data-page-style="${family}" />\n</head>`)
}
