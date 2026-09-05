import { PremiumShell } from './components/PremiumShell'
import PremiumHomePage from './pages/PremiumHomePage'
import PremiumServicePage from './pages/PremiumServicePage'
import PremiumNetworkPages from './pages/PremiumNetworkPages'
import { ImprintContent, PrivacyContent } from './pages/LegalContent'
import { servicePageBySlug } from './content/services'
import type { SitePage } from './site/types'

export function SiteView({ page }: { page: SitePage }) {
  const service = page.serviceSlug
    ? servicePageBySlug[page.serviceSlug]
    : undefined
  return (
    <PremiumShell page={page}>
      {page.kind === 'home' ? (
        <PremiumHomePage page={page} />
      ) : page.kind === 'service' && service ? (
        <PremiumServicePage service={service} />
      ) : page.kind === 'legal' ? (
        <article className="p-legal">
          <header className="p-legal-hero">
            <p className="p-eyebrow">{page.eyebrow}</p>
            <h1>
              {page.heading}
              <span>{page.accent}</span>
            </h1>
            <p>{page.intro}</p>
            <nav className="p-legal-nav" aria-label="Rechtliche Seiten">
              <a
                href="/impressum/"
                aria-current={
                  page.legalPage === 'impressum' ? 'page' : undefined
                }
              >
                Impressum
              </a>
              <a
                href="/datenschutz/"
                aria-current={
                  page.legalPage === 'datenschutz' ? 'page' : undefined
                }
              >
                Datenschutz
              </a>
            </nav>
          </header>
          {page.legalPage === 'impressum' ? (
            <ImprintContent />
          ) : (
            <PrivacyContent />
          )}
        </article>
      ) : (
        <PremiumNetworkPages page={page} />
      )}
    </PremiumShell>
  )
}
