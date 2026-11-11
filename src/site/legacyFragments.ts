import type { SitePage } from './types'

// Old homepage anchors that still exist on the local homepage need no redirect.
export function legacyFragmentRedirect(
  page: Pick<SitePage, 'kind' | 'path'>,
  hash: string,
  search = '',
): string | undefined {
  if (hash === '#/impressum') return `/impressum/${search}`
  if (hash === '#/datenschutz') return `/datenschutz/${search}`

  if (page.path === '/') {
    if (hash === '#main') return `/${search}#main-content`
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
