export const siteConfig = {
  name: 'Schultes IT',
  legalName: 'Schultes IT & Netzwerksupport',
  alternateName: 'Schultes IT- & Netzwerksupport',
  url: 'https://schultes-it.de',
  language: 'de-DE',
  country: 'DE',
  countryName: 'Deutschland',
  logoPath: '/logo-512.svg',
  previewImagePath: '/og-cover.png',
  founder: {
    name: 'Andrej Schultes',
  },
  remoteSupport: {
    downloadPath: '/downloads/rustdesk.exe',
    operatorName: 'Andrej Schultes',
    phoneDisplay: '+49 1567 9616310',
    phoneHref: 'tel:+4915679616310',
    email: 'kontakt@schultes-it.de',
    priceFrom: '25 €',
    contactNote:
      'Die deutschlandweite Fernwartung wird zentral durch Schultes IT und Andrej Schultes betreut.',
  },
} as const

export const previewImageUrl = `${siteConfig.url}${siteConfig.previewImagePath}`
export const logoImageUrl = `${siteConfig.url}${siteConfig.logoPath}`
