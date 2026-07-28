export type LocationOperator = {
  name: string
  role: string
  model: 'owner-operated' | 'independent-licensee'
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
    operator: {
      name: 'Andrej Schultes',
      role: 'Inhaber und regionaler Ansprechpartner',
      model: 'owner-operated',
    },
  },
]

export const locationById = Object.fromEntries(
  locations.map((location) => [location.id, location]),
) as Record<string, ServiceLocation>
