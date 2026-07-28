export const siteConfig = {
  name: 'Schultes IT',
  legalName: 'Schultes IT & Netzwerksupport',
  alternateName: 'Schultes IT- & Netzwerksupport',
  url: 'https://schultes-it.de',
  language: 'de-DE',
  country: 'DE',
  countryName: 'Deutschland',
  email: 'it.schulteslb@gmail.com',
  phoneDisplay: '+49 1567 9616310',
  phoneHref: 'tel:+4915679616310',
  previewImagePath: '/og-cover.png',
  founder: {
    name: 'Andrej Schultes',
  },
  remoteSupport: {
    downloadPath: '/downloads/rustdesk.exe',
    price: 'Fernhilfe ab 25 €',
  },
} as const

export const previewImageUrl = `${siteConfig.url}${siteConfig.previewImagePath}`
