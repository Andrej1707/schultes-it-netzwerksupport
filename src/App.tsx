import { useEffect, useState } from 'react'
import { servicePageBySlug } from './content/services'
import {
  LegalLayout,
  MarketingApp,
  ServicePage,
} from './legacy/LegacySite'
import {
  BrandHomePage,
  NotFoundPage,
  StructuredNetworkPage,
} from './pages/NetworkPages'
import { resolveSiteRoute } from './site/routes'
import SupportBot from './support/SupportBot'

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
  else if (route?.page.kind === 'home') page = <BrandHomePage page={route.page} />
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
      {page}
      <SupportBot />
    </>
  )
}

export default App
