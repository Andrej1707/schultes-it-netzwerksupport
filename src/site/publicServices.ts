import { servicePages } from '../content/services'
import { activeLocationById } from './locations'

export const publicServicePages = servicePages.filter(
  (service) => !service.locationId || Boolean(activeLocationById[service.locationId]),
)

export const publicTopicPages = publicServicePages.filter(
  (service) => service.scope === 'location',
)
