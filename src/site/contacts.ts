import type { ServicePageData } from '../content/types'
import { siteConfig } from './config'
import { activeLocationById, type ServiceLocation } from './locations'
import type { SitePage } from './types'

export type ContactProfile = {
  source: 'central' | 'central-remote' | 'location'
  supportContextId: string
  locationId?: string
  displayName: string
  operatorName: string
  phoneDisplay?: string
  phoneHref?: string
  email?: string
  actionHref: string
  actionLabel: string
  remoteSupportAvailable: boolean
  remoteSupportNote: string
  imprintUrl: string
  ownAccountNotice?: string
}

export type LocationContactProfile = ContactProfile & {
  source: 'location'
  phoneDisplay: string
  phoneHref: string
  email: string
}

export type DirectContactProfile = ContactProfile & {
  source: 'central-remote' | 'location'
  phoneDisplay: string
  phoneHref: string
  email: string
}

export const centralContact: ContactProfile = {
  source: 'central',
  supportContextId: 'central',
  displayName: siteConfig.name,
  operatorName: 'Schultes-IT-Netzwerk',
  actionHref: '/standorte/',
  actionLabel: 'Standort auswählen',
  remoteSupportAvailable: false,
  remoteSupportNote: siteConfig.remoteSupport.contactNote,
  imprintUrl: '/impressum/',
}

export const centralRemoteContact: DirectContactProfile = {
  source: 'central-remote',
  supportContextId: 'central-remote',
  displayName: siteConfig.legalName,
  operatorName: siteConfig.remoteSupport.operatorName,
  phoneDisplay: siteConfig.remoteSupport.phoneDisplay,
  phoneHref: siteConfig.remoteSupport.phoneHref,
  email: siteConfig.remoteSupport.email,
  actionHref: siteConfig.remoteSupport.phoneHref,
  actionLabel: `${siteConfig.remoteSupport.operatorName} anrufen`,
  remoteSupportAvailable: true,
  remoteSupportNote: siteConfig.remoteSupport.contactNote,
  imprintUrl: '/impressum/',
}

export function contactForLocation(location: ServiceLocation): LocationContactProfile {
  const operator = location.operator

  return {
    source: 'location',
    supportContextId: location.id,
    locationId: location.id,
    displayName: operator.businessName ?? location.name,
    operatorName: operator.responsiblePerson ?? operator.name,
    phoneDisplay: operator.businessPhoneDisplay ?? location.phoneDisplay,
    phoneHref: operator.businessPhoneHref ?? location.phoneHref,
    email: operator.businessEmail ?? location.email,
    actionHref: operator.businessPhoneHref ?? location.phoneHref,
    actionLabel: `${operator.responsiblePerson ?? operator.name} anrufen`,
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

export function contactForService(service: ServicePageData): DirectContactProfile {
  const location = service.locationId ? activeLocationById[service.locationId] : undefined
  return location ? contactForLocation(location) : centralRemoteContact
}

export function contactForPage(page: SitePage) {
  if (page.locationId) return contactForLocationId(page.locationId)
  return page.kind === 'service' ? centralRemoteContact : centralContact
}
