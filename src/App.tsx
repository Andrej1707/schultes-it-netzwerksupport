import { lazy, Suspense, useEffect, useState } from 'react'
import { servicePageBySlug } from './content/services'
import {
  BrandHomePage,
  NotFoundPage,
  StructuredNetworkPage,
} from './pages/NetworkPages'
import { resolveSiteRoute } from './site/routes'

const legacySite = () => import('./legacy/LegacySite')
const LegalLayout = lazy(() =>
  legacySite().then((module) => ({ default: module.LegalLayout })),
)
const MarketingApp = lazy(() =>
  legacySite().then((module) => ({ default: module.MarketingApp })),
)
const ServicePage = lazy(() =>
  legacySite().then((module) => ({ default: module.ServicePage })),
)
const SupportBot = lazy(() => import('./support/SupportBot'))

function RouteLoading() {
  return (
    <main className="route-loading" aria-live="polite">
      <span>Schultes IT</span>
      <p>Seite wird geladen…</p>
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const route = resolveSiteRoute(window.location.pathname)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  let page = <NotFoundPage />

  if (hash === '#/impressum') page = <LegalLayout page="impressum" />
  else if (hash === '#/datenschutz') page = <LegalLayout page="datenschutz" />
  else if (route?.page.kind === 'legal' && route.page.legalPage) {
    page = <LegalLayout page={route.page.legalPage} />
  } else if (route?.page.kind === 'home') page = <BrandHomePage page={route.page} />
  else if (route?.page.kind === 'location' && route.page.locationId === 'ludwigsburg') {
    page = <MarketingApp />
  }
  else if (route?.page.kind === 'service' && route.page.serviceSlug) {
    const service = servicePageBySlug[route.page.serviceSlug]
    page = service ? <ServicePage service={service} /> : <NotFoundPage />
  } else if (route) {
    page = <StructuredNetworkPage page={route.page} />
  }

  return (
    <>
      <Suspense fallback={<RouteLoading />}>{page}</Suspense>
      <Suspense fallback={null}>
        <SupportBot />
      </Suspense>
    </>
  )
}

export default App
