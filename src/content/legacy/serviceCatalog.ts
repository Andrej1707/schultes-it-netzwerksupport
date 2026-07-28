import type { ServicePageData } from '../types'
import { networkTopicPages } from './networkTopicPages'
import { peopleSafetyTopicPages } from './peopleSafetyTopicPages'
import { primaryServicePages } from './primaryServices'
import { responseTopicPages } from './responseTopicPages'
import { setupTopicPages } from './setupTopicPages'

export type { ServiceIconName, ServicePageData } from '../types'
export { primaryServicePages } from './primaryServices'

export const topicPages: ServicePageData[] = [
  ...setupTopicPages,
  ...responseTopicPages,
  ...networkTopicPages,
  ...peopleSafetyTopicPages,
]

export const servicePages: ServicePageData[] = [...primaryServicePages, ...topicPages]

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>
