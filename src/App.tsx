import { useEffect } from 'react'
import { SiteView } from './SiteView'
import type { SitePage } from './site/types'

export default function App({ initialPage }: { initialPage: SitePage }) {
  useEffect(() => {
    const resolveLegacyHash = () => {
      const legacyPath =
        window.location.hash === '#/impressum'
          ? '/impressum/'
          : window.location.hash === '#/datenschutz'
            ? '/datenschutz/'
            : null
      if (legacyPath) window.location.replace(legacyPath)
    }
    resolveLegacyHash()
    window.addEventListener('hashchange', resolveLegacyHash)
    return () => window.removeEventListener('hashchange', resolveLegacyHash)
  }, [])
  return <SiteView page={initialPage} />
}
