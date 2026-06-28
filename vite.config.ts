import { createHash } from 'node:crypto'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { servicePages, type ServicePageData } from './src/serviceCatalog'

const siteUrl = 'https://schultes-it.de'
const previewImageUrl = `${siteUrl}/og-cover.png`

function businessSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#business`,
    name: 'Schultes IT & Netzwerksupport',
    alternateName: 'Schultes IT- & Netzwerksupport',
    url: `${siteUrl}/`,
    image: previewImageUrl,
    telephone: '+49 1523 3364752',
    email: 'it.schulteslb@gmail.com',
    priceRange: 'Fernhilfe ab 25 EUR, Service beim Kunden ab 49 EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Egerländer Str. 24',
      postalCode: '71638',
      addressLocality: 'Ludwigsburg',
      addressCountry: 'DE',
    },
    areaServed: { '@type': 'City', name: 'Ludwigsburg' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: ['https://maps.app.goo.gl/9riyhNzidDpzvynd8'],
  }
}

function serviceSchema(service: ServicePageData) {
  const url = `${siteUrl}/${service.slug}/`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessSchema(),
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Schultes IT & Netzwerksupport',
        inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.seoTitle,
        description: service.seoDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${url}#service` },
        publisher: { '@id': `${siteUrl}/#business` },
        mainEntity: { '@id': `${url}#service` },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.shortTitle,
        description: service.heroText,
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'City', name: 'Ludwigsburg' },
        audience: service.audiences.map((audience) => ({
          '@type': 'Audience',
          audienceType: audience.label,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Leistungen ${service.title}`,
          itemListElement: service.solutions.map((solution) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: solution.title,
              description: solution.text,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leistungen',
            item: `${siteUrl}/#leistungen`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }
}

function escapeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function replaceMeta(html: string, attribute: 'name' | 'property', key: string, value: string) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/>`,
    'i',
  )
  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${escapeAttribute(value)}" />`,
  )
}

function servicePagesPlugin(): Plugin {
  return {
    name: 'generate-service-pages',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const indexAsset = Object.values(bundle).find(
        (entry) => entry.type === 'asset' && entry.fileName === 'index.html',
      )

      if (!indexAsset || indexAsset.type !== 'asset') {
        this.error('Could not find the built index.html for service page generation.')
        return
      }

      const baseHtml = String(indexAsset.source)

      servicePages.forEach((service) => {
        const url = `${siteUrl}/${service.slug}/`
        const structuredData = JSON.stringify(serviceSchema(service), null, 2)
        const structuredDataInner = `\n${structuredData}\n`
        const hash = createHash('sha256').update(structuredDataInner).digest('base64')

        let html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/i, `<title>${service.seoTitle}</title>`)
          .replace(
            /<link rel="canonical" href="[^"]*"\s*\/>/i,
            `<link rel="canonical" href="${url}" />`,
          )
          .replace(
            /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
            `<script type="application/ld+json">${structuredDataInner}</script>`,
          )
          .replace(/sha256-[^']+/, `sha256-${hash}`)

        html = replaceMeta(html, 'name', 'description', service.seoDescription)
        html = replaceMeta(html, 'name', 'keywords', service.keywords)
        html = replaceMeta(html, 'property', 'og:title', service.seoTitle)
        html = replaceMeta(html, 'property', 'og:description', service.seoDescription)
        html = replaceMeta(html, 'property', 'og:url', url)
        html = replaceMeta(html, 'name', 'twitter:title', service.seoTitle)
        html = replaceMeta(html, 'name', 'twitter:description', service.seoDescription)

        this.emitFile({
          type: 'asset',
          fileName: `${service.slug}/index.html`,
          source: html,
        })
      })
    },
  }
}

function localSupportCspPlugin(): Plugin {
  return {
    name: 'local-support-csp',
    apply: 'serve',
    transformIndexHtml(html) {
      return html.replace(
        "connect-src 'self'",
        "connect-src 'self' http://127.0.0.1:8787 http://localhost:8787",
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), localSupportCspPlugin(), servicePagesPlugin()],
  base: '/',
})
