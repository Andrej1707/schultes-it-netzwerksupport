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
    contactNote:
      'Fernwartung wird durch den ausgewählten Schultes-IT-Standort persönlich betreut.',
  },
} as const

export const previewImageUrl = `${siteConfig.url}${siteConfig.previewImagePath}`
export const logoImageUrl = `${siteConfig.url}${siteConfig.logoPath}`
