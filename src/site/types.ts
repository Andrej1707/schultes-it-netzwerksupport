export type SitePageKind =
  | 'home'
  | 'services'
  | 'service'
  | 'locations'
  | 'location'
  | 'owner'
  | 'guides'
  | 'about'

export type SchemaKind =
  | 'brand'
  | 'services'
  | 'national-service'
  | 'network-service'
  | 'location-service'
  | 'locations'
  | 'location'
  | 'owner'
  | 'guides'
  | 'about'

export type ChangeFrequency = 'weekly' | 'monthly' | 'yearly'

export type SitePage = {
  id: string
  kind: SitePageKind
  schemaKind: SchemaKind
  path: string
  aliases?: string[]
  title: string
  description: string
  keywords: string
  eyebrow: string
  heading: string
  accent: string
  intro: string
  indexable: boolean
  lastModified: string
  changeFrequency: ChangeFrequency
  priority: number
  serviceSlug?: string
  locationId?: string
}

export type ResolvedSiteRoute = {
  page: SitePage
  requestedPath: string
  isAlias: boolean
}
