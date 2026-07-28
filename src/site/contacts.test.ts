import { describe, expect, it } from 'vitest'
import { getLocationService, servicePageBySlug } from '../content/services'
import {
  contactForLocation,
  contactForService,
} from './contacts'
import { activeLocationById, type ServiceLocation } from './locations'

describe('contact resolution', () => {
  it('uses the central contact for nationwide remote support', () => {
    const service = servicePageBySlug['fernwartung-windows-hilfe']
    if (!service) throw new Error('Missing central remote support page.')

    expect(contactForService(service)).toMatchObject({
      source: 'central-remote',
      supportContextId: 'central-remote',
      operatorName: 'Andrej Schultes',
      phoneHref: 'tel:+4915679616310',
      email: 'kontakt@schultes-it.de',
    })
  })

  it('uses the configured location contact for local services', () => {
    const service = getLocationService('ludwigsburg', 'pc-langsam')
    if (!service) throw new Error('Missing Ludwigsburg problem page.')
    const contact = contactForService(service)

    expect(contact.source).toBe('location')
    expect(contact.displayName).toBe('Schultes IT & Netzwerksupport')
    expect(contact.operatorName).toBe('Andrej Schultes')
    expect(contact.email).toBe('kontakt@schultes-it.de')
    expect(contact.remoteSupportNote).toContain('Standort')
  })

  it('prefers independent operator business details when configured', () => {
    const base = activeLocationById.ludwigsburg
    const independent: ServiceLocation = {
      ...base,
      id: 'independent-test',
      slug: 'independent-test',
      path: '/standorte/independent-test/',
      operator: {
        ...base.operator,
        model: 'independent-licensee',
        businessName: 'Beispiel IT Service GmbH',
        businessPhoneDisplay: '+49 30 123456',
        businessPhoneHref: 'tel:+4930123456',
        businessEmail: 'kontakt@beispiel.invalid',
        responsiblePerson: 'Erika Beispiel',
        operatesInOwnNameAndAccount: true,
        ownAccountNotice: 'Der Betreiber arbeitet im eigenen Namen und auf eigene Rechnung.',
      },
    }

    expect(contactForLocation(independent)).toMatchObject({
      displayName: 'Beispiel IT Service GmbH',
      operatorName: 'Erika Beispiel',
      phoneHref: 'tel:+4930123456',
      email: 'kontakt@beispiel.invalid',
      ownAccountNotice: 'Der Betreiber arbeitet im eigenen Namen und auf eigene Rechnung.',
    })
  })
})
