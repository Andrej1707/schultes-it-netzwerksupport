import { lazy, StrictMode, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { notFoundPage, resolveSiteRoute } from './site/routes'
import { contactForPage } from './site/contacts'
import './premium.css'
import './premium-service.css'
import './premium-network.css'

const route = resolveSiteRoute(window.location.pathname)
const page = route?.page ?? notFoundPage
const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App initialPage={page} />
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
