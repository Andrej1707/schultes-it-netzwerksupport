export type ServiceIconName = 'laptop' | 'router' | 'globe' | 'bot'

export type ServiceScope = 'national' | 'network' | 'location'
export type ServiceGroup = 'primary' | 'remote' | 'topic'
export type DeliveryMode = 'remote' | 'hybrid' | 'project'

export type ServicePageData = {
  slug: string
  templateSlug?: string
  path?: string
  legacyPaths?: string[]
  scope?: ServiceScope
  serviceGroup?: ServiceGroup
  deliveryMode?: DeliveryMode
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
  locationContext?: {
    eyebrow: string
    heading: string
    text: string
    points: string[]
  }
}
