import { lazy, StrictMode, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { canonicalRedirect, notFoundPage, resolveSiteRoute } from './site/routes'
import { contactForPage } from './site/contacts'
import type { GuidePageData } from './content/guides/types'
import './premium.css'
import './motion.css'
import './navigation.css'

const redirectTo = canonicalRedirect(
  window.location.pathname,
  window.location.search,
  window.location.hash,
)

if (redirectTo) {
  // Keep the static fallback visible while leaving an alias; do not mount the
  // full application or start a support session on a URL that is going away.
  window.location.replace(redirectTo)
} else {
  const route = resolveSiteRoute(window.location.pathname)
  const page = route?.page ?? notFoundPage
  const root = document.getElementById('root')!
  const guidePayload = document.getElementById('guide-data')?.textContent
  const guideData: GuidePageData | undefined = guidePayload ? JSON.parse(guidePayload) : undefined
  const app = (
    <StrictMode>
      <App initialPage={page} guideData={guideData} />
    </StrictMode>
  )
  if (root.querySelector('[data-prerendered="true"]') && !route?.isAlias) {
    hydrateRoot(root, app, { identifierPrefix: 'schultes-' })
  } else {
    createRoot(root, { identifierPrefix: 'schultes-' }).render(app)
  }
  const SupportBot = lazy(() => import('./support/SupportBot'))
  const supportRoot = document.getElementById('support-root')
  if (supportRoot)
    createRoot(supportRoot).render(
      <StrictMode>
        <Suspense fallback={null}>
          <SupportBot contact={contactForPage(page)} />
        </Suspense>
      </StrictMode>,
    )
}
