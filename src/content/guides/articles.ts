// Build-only content. The browser receives the current article, never the whole library.
import { securityGuides } from './security'
import { windowsGuides } from './windows'
import { networkGuides } from './network'
import { dataGuides } from './data'
import { everydayGuides } from './everyday'
import { guideCatalog } from './catalog'
import type { GuidePageData } from './types'
import type { SitePage } from '../../site/types'

export const guideArticles = [...securityGuides, ...windowsGuides, ...networkGuides, ...dataGuides, ...everydayGuides]
export const guideArticleBySlug = new Map(guideArticles.map(article => [article.slug, article]))

export function guideDataForPage(page: SitePage): GuidePageData | undefined {
  if (page.kind === 'guides') return { entries: guideCatalog }
  if (page.kind !== 'guide') return undefined
  const article = guideArticleBySlug.get(page.guideSlug ?? '')
  if (!article) throw new Error(`Missing article for ${page.path}`)
  return { article, entries: guideCatalog.filter(entry => article.relatedSlugs.includes(entry.slug)) }
}
