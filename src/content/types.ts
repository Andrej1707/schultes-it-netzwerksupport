export type ServiceIconName = 'laptop' | 'router' | 'globe' | 'bot'

export type ServiceScope = 'national' | 'network' | 'location'

export type ServicePageData = {
  slug: string
  path?: string
  legacyPaths?: string[]
  scope?: ServiceScope
  locationId?: string
  areaLabel?: string
  modeLabel?: string
  icon: ServiceIconName
  code: string
  title: string
  shortTitle: string
  description: string
  tags: string[]
  seoTitle: string
  seoDescription: string
  keywords: string
  heroLead: string
  heroAccent: string
  heroText: string
  price: string
  audiences: Array<{ label: string; text: string }>
  situations: Array<{ title: string; text: string }>
  solutions: Array<{ title: string; text: string }>
  process: Array<{ title: string; text: string }>
  confidenceTitle: string
  confidenceText: string
  confidencePoints: string[]
  faqs: Array<{ question: string; answer: string }>
  related: string[]
}
