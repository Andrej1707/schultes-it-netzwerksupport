import { useEffect } from 'react'
import { SiteView } from './SiteView'
import type { SitePage } from './site/types'
import { installPageMotion } from './site/motion'
import { legacyFragmentRedirect } from './site/legacyFragments'

export default function App({ initialPage }: { initialPage: SitePage }) {
  useEffect(() => {
    const content = document.getElementById('main-content')
    if (content) return installPageMotion(content)
  }, [initialPage.path])
  useEffect(() => {
    const resolveLegacyHash = () => {
      const legacyPath = legacyFragmentRedirect(
        initialPage,
        window.location.hash,
        window.location.search,
      )
      if (legacyPath) window.location.replace(legacyPath)
    }
    resolveLegacyHash()
    window.addEventListener('hashchange', resolveLegacyHash)
    return () => window.removeEventListener('hashchange', resolveLegacyHash)
  }, [initialPage])
  return <SiteView page={initialPage} />
}
