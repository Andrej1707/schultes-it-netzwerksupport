import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { SiteView } from '../SiteView'
import type { SitePage } from './types'

// The build and browser share the complete page tree, including legal content.
// Keep this server-only module out of the client entry point.
export function renderStaticPageContent(page: SitePage) {
  return renderToString(createElement(SiteView, { page }), {
    identifierPrefix: 'schultes-',
  })
}
