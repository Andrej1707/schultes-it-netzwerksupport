import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { SiteView } from '../SiteView'
import type { SitePage } from './types'
import { guideDataForPage } from '../content/guides/articles'

// The build and browser share the complete page tree, including legal content.
// Keep this server-only module out of the client entry point.
export function renderStaticPageContent(page: SitePage) {
  return renderToString(createElement(SiteView, { page, guideData: guideDataForPage(page) }), {
    identifierPrefix: 'schultes-',
  })
}
