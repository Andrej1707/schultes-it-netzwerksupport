export type BusinessAddress = {
  streetAddress: string
  postalCode: string
  city: string
  country: 'DE'
}

export type OperatorImprint = {
  url?: string
  details?: string[]
}

export type LocationOperator = {
  name: string
  role: string
  model: 'owner-operated' | 'independent-licensee'
  businessName?: string
  legalForm?: string
  businessAddress?: BusinessAddress
  businessPhoneDisplay?: string
  businessPhoneHref?: string
  businessEmail?: string
  responsiblePerson?: string
  vatId?: string
  imprint?: OperatorImprint
  operatesInOwnNameAndAccount?: boolean
  ownAccountNotice?: string
}

export type ServiceLocation = {
  id: string
  slug: string
  path: string
  aliases?: string[]
  name: string
  status: 'active' | 'preparing'
  city: string
  region: string
  postalCode: string
  streetAddress: string
  country: 'DE'
  latitude: number
  longitude: number
  serviceRadiusKm: number
  serviceAreas: string[]
  phoneDisplay: string
  phoneHref: string
  email: string
  mapsUrl: string
  mapsEmbedUrl: string
  pricing: {
    onSiteFrom: string
    remoteFrom?: string
    note: string
  }
  remoteSupport: {
    available: boolean
    note: string
  }
  trust?: {
    source: 'Google'
    ratingValue: number
    reviewCount: number
    quote?: string
    profileUrl: string
  }
  operator: LocationOperator
}

export const locations: ServiceLocation[] = [
  {
    id: 'ludwigsburg',
    slug: 'ludwigsburg',
    path: '/standorte/ludwigsburg/',
    aliases: ['/ludwigsburg/'],
    name: 'Schultes IT Ludwigsburg',
    status: 'active',
    city: 'Ludwigsburg',
    region: 'Landkreis Ludwigsburg',
    postalCode: '71638',
    streetAddress: 'Egerländer Str. 24',
    country: 'DE',
    latitude: 48.8886228,
    longitude: 9.2064228,
    serviceRadiusKm: 45,
    serviceAreas: [
      'Ludwigsburg',
      'Kornwestheim',
      'Asperg',
      'Remseck am Neckar',
      'Tamm',
      'Bietigheim-Bissingen',
    ],
    phoneDisplay: '+49 1567 9616310',
    phoneHref: 'tel:+4915679616310',
    email: 'it.schulteslb@gmail.com',
    mapsUrl: 'https://maps.app.goo.gl/9riyhNzidDpzvynd8',
    mapsEmbedUrl: 'https://www.google.com/maps?q=48.8886228%2C9.2064228&z=17&output=embed',
    pricing: {
      onSiteFrom: '49 €',
      remoteFrom: '25 €',
      note: 'Weitere Leistungen und mögliche Zusatzkosten werden vorab transparent abgestimmt.',
    },
    remoteSupport: {
      available: true,
      note: 'Der Standort kann geeignete Probleme ergänzend per Fernwartung bearbeiten.',
    },
    trust: {
      source: 'Google',
      ratingValue: 5,
      reviewCount: 2,
      quote: 'Super schnelle Hilfe',
      profileUrl: 'https://maps.app.goo.gl/9riyhNzidDpzvynd8',
    },
    operator: {
      name: 'Andrej Schultes',
      role: 'Inhaber und regionaler Ansprechpartner',
      model: 'owner-operated',
      businessName: 'Schultes IT & Netzwerksupport',
      businessAddress: {
        streetAddress: 'Egerländer Str. 24',
        postalCode: '71638',
        city: 'Ludwigsburg',
        country: 'DE',
      },
      businessPhoneDisplay: '+49 1567 9616310',
      businessPhoneHref: 'tel:+4915679616310',
      businessEmail: 'it.schulteslb@gmail.com',
      responsiblePerson: 'Andrej Schultes',
      imprint: {
        url: '/impressum/',
      },
      operatesInOwnNameAndAccount: true,
      ownAccountNotice:
        'Der inhabergeführte Standort Ludwigsburg arbeitet im eigenen Namen und auf eigene Rechnung.',
    },
  },
]

export function filterActiveLocations(candidates: ServiceLocation[]) {
  return candidates.filter((location) => location.status === 'active')
}

export const activeLocations = filterActiveLocations(locations)

export const locationById = Object.fromEntries(
  locations.map((location) => [location.id, location]),
) as Record<string, ServiceLocation>

export const activeLocationById = Object.fromEntries(
  activeLocations.map((location) => [location.id, location]),
) as Record<string, ServiceLocation>
