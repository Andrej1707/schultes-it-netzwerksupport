import type { ServicePageData } from '../content/types'
import { siteConfig } from './config'
import { activeLocationById, type ServiceLocation } from './locations'
import type { SitePage } from './types'

export type ContactProfile = {
  source: 'central' | 'location'
  displayName: string
  operatorName: string
  phoneDisplay: string
  phoneHref: string
  email: string
  remoteSupportAvailable: boolean
  remoteSupportNote: string
  imprintUrl: string
  ownAccountNotice?: string
}

export const centralContact: ContactProfile = {
  source: 'central',
  displayName: siteConfig.legalName,
  operatorName: siteConfig.founder.name,
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: siteConfig.phoneHref,
  email: siteConfig.email,
  remoteSupportAvailable: true,
  remoteSupportNote: siteConfig.remoteSupport.contactNote,
  imprintUrl: '/impressum/',
}

export function contactForLocation(location: ServiceLocation): ContactProfile {
  const operator = location.operator

  return {
    source: 'location',
    displayName: operator.businessName ?? location.name,
    operatorName: operator.responsiblePerson ?? operator.name,
    phoneDisplay: operator.businessPhoneDisplay ?? location.phoneDisplay,
    phoneHref: operator.businessPhoneHref ?? location.phoneHref,
    email: operator.businessEmail ?? location.email,
    remoteSupportAvailable: location.remoteSupport.available,
    remoteSupportNote: location.remoteSupport.note,
    imprintUrl: operator.imprint?.url ?? '/impressum/',
    ownAccountNotice: operator.ownAccountNotice,
  }
}

export function contactForLocationId(locationId?: string) {
  const location = locationId ? activeLocationById[locationId] : undefined
  return location ? contactForLocation(location) : centralContact
}

export function contactForService(service: ServicePageData) {
  return service.scope === 'location'
    ? contactForLocationId(service.locationId)
    : centralContact
}

export function contactForPage(page: SitePage) {
  return page.locationId ? contactForLocationId(page.locationId) : centralContact
}
