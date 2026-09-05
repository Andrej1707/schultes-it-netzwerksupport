import { useEffect } from 'react'
import { SiteView } from './SiteView'
import type { SitePage } from './site/types'
import { installPageMotion } from './site/motion'

export default function App({ initialPage }: { initialPage: SitePage }) {
  useEffect(() => {
    const content = document.getElementById('main-content')
    if (content) return installPageMotion(content)
  }, [initialPage.path])
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
