import { activeLocations } from './locations'
import type { SitePage } from './types'

// Public links in the June/July 2026 homepage (for example 5eb3336:src/App.tsx).
// Their local content now lives with the operator who owns the legacy service URLs.
const localHomeFragments = new Set([
  '#preise', '#projekte', '#kompetenzen', '#andrej', '#ludwigsburg',
  '#arbeitsweise', '#alltagshilfe', '#kontakt',
])

export function legacyFragmentRedirect(
  page: Pick<SitePage, 'kind' | 'path'>,
  hash: string,
  search = '',
): string | undefined {
  if (hash === '#/impressum') return `/impressum/${search}`
  if (hash === '#/datenschutz') return `/datenschutz/${search}`

  if (page.kind === 'home') {
    if (hash === '#leistungen') return `/leistungen/${search}`
    if (hash === '#main') return `/${search}#main-content`
    const owner = activeLocations.find((location) => location.ownsLegacyServiceAliases)
    if (owner && localHomeFragments.has(hash)) return `${owner.path}${search}${hash}`
  }

  if (page.kind === 'service') {
    if (hash === '#was-ich-loese') return `${page.path}${search}#service-solutions`
    if (hash === '#service-main') return `${page.path}${search}#main-content`
  }

  if (page.kind === 'legal' && hash === '#legal-main') {
    return `${page.path}${search}#main-content`
  }

  return undefined
}
