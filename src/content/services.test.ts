import { describe, expect, it } from 'vitest'
import {
  centralServicePages,
  createLocationService,
  getLocationService,
  getLocationServices,
  locationServicePages,
  primaryServiceTemplates,
  remoteServiceTemplates,
  servicePages,
  topicServiceTemplates,
} from './services'
import { activeLocations, type ServiceLocation } from '../site/locations'

describe('service page generation', () => {
  it('creates every regional rubric for every active location', () => {
    const locationTemplates = [
      ...primaryServiceTemplates,
      ...topicServiceTemplates,
    ]

    for (const location of activeLocations) {
      const services = getLocationServices(location.id)

      expect(services).toHaveLength(locationTemplates.length)
      expect(new Set(services.map((service) => service.templateSlug))).toEqual(
        new Set(locationTemplates.map((service) => service.slug)),
      )
      expect(services.every((service) => service.serviceGroup !== 'remote')).toBe(true)
    }
  })

  it('publishes remote support exactly once as central canonical pages', () => {
    expect(centralServicePages).toHaveLength(remoteServiceTemplates.length)
    expect(
      centralServicePages.map((service) => service.path),
    ).toEqual([
      '/fernwartung/',
      '/fernwartung/windows-hilfe/',
      '/fernwartung/drucker-hilfe/',
      '/fernwartung/email-outlook/',
    ])
    expect(
      centralServicePages.every(
        (service) =>
          service.scope === 'national' &&
          !service.locationId &&
          service.deliveryMode === 'remote',
      ),
    ).toBe(true)
    expect(
      centralServicePages.every((service) =>
        activeLocations.every((location) =>
          service.legacyPaths?.some((path) => path.startsWith(`${location.path}fernwartung/`)),
        ),
      ),
    ).toBe(true)
  })

  it('publishes only unique canonical paths and slugs', () => {
    expect(new Set(servicePages.map((service) => service.path)).size).toBe(
      servicePages.length,
    )
    expect(new Set(servicePages.map((service) => service.slug)).size).toBe(
      servicePages.length,
    )
    expect(
      locationServicePages.every(
        (service) =>
          service.scope === 'location' &&
          service.locationId &&
          service.path?.startsWith(`/standorte/`),
      ),
    ).toBe(true)
  })

  it('adds visible location-specific context to every generated page', () => {
    expect(
      locationServicePages.every(
        (service) =>
          service.locationContext &&
          service.locationContext.text.length >= 80 &&
          service.locationContext.points.length >= 3,
      ),
    ).toBe(true)
  })

  it('retains the specific local PC and WLAN search intent', () => {
    for (const location of activeLocations) {
      const pc = getLocationService(location.id, 'pc-system')!
      expect(pc.seoTitle).toBe(`PC-Hilfe ${location.city} | Computer- & Laptop-Hilfe`)
      expect(pc.seoDescription).toBe(
        `PC-Hilfe in ${location.city}, wenn Computer oder Laptop langsam sind, nicht starten oder Windows Probleme macht. Bei dir vor Ort oder per Fernhilfe.`,
      )

      const wlan = getLocationService(location.id, 'netzwerk-wlan')!
      expect(wlan.seoTitle).toBe(`WLAN-Hilfe ${location.city} | Router & Internet-Probleme`)
      expect(wlan.seoDescription).toContain(location.city)
      expect(wlan.seoDescription).not.toContain('…')
    }
  })

  it('describes the actual local problem rather than using a shortened navigation label', () => {
    for (const location of activeLocations) {
      const startup = getLocationService(location.id, 'pc-startet-nicht')!
      expect(startup.shortTitle).toBe('Startproblem')
      expect(startup.seoTitle).toBe(`PC startet nicht ${location.city} | Laptop geht nicht an`)
      expect(startup.seoDescription).toContain('Windows bootet nicht')
      expect(startup.seoDescription).not.toContain('…')
    }
  })

  it('localizes the original metadata for another location without inheriting Ludwigsburg', () => {
    const location: ServiceLocation = {
      ...activeLocations[0],
      id: 'test-location',
      slug: 'test-location',
      path: '/standorte/test-location/',
      city: 'Teststadt',
      region: 'Testregion',
      ownsLegacyServiceAliases: false,
    }
    const pc = createLocationService(
      primaryServiceTemplates.find((service) => service.slug === 'pc-system')!,
      location,
    )
    expect(pc.seoTitle).toBe('PC-Hilfe Teststadt | Computer- & Laptop-Hilfe')
    expect(pc.seoDescription).toContain('PC-Hilfe in Teststadt')
    expect(pc.seoDescription).not.toContain('Ludwigsburg')
    expect(pc.path).toBe('/standorte/test-location/pc-laptop/')
    expect(pc.legacyPaths).toEqual([])

    const startup = createLocationService(
      topicServiceTemplates.find((service) => service.slug === 'pc-startet-nicht')!,
      location,
    )
    expect(startup.seoTitle).toBe('PC startet nicht Teststadt | Laptop geht nicht an')
    expect(startup.seoDescription).toContain('PC startet nicht in Teststadt?')
    expect(startup.seoDescription).not.toContain('Ludwigsburg')
  })

  it('preserves the national remote metadata and the PC repair limitations', () => {
    expect(centralServicePages.find((service) => service.slug === 'fernwartung')?.seoTitle)
      .toBe('Fernwartung deutschlandweit | Schultes IT Remote-Hilfe')
    expect(primaryServiceTemplates.find((service) => service.slug === 'pc-system')?.seoTitle)
      .toBe('PC- & Laptop-Hilfe | Schultes IT Deutschland')
    for (const location of activeLocations) {
      const pc = getLocationService(location.id, 'pc-system')!
      expect(pc.faqs.find((faq) => faq.question === 'Kannst du bei jedem Defekt helfen?')?.answer)
        .toContain('Wenn eine Spezialreparatur nötig ist, sage ich das offen.')
    }
  })

  it('explains local PC repair scope without promising every hardware repair', () => {
    for (const location of activeLocations) {
      const pc = getLocationService(location.id, 'pc-system')!
      const repairFaq = pc.faqs.find(
        (faq) => faq.question === `Was ist bei einer PC-Reparatur in ${location.city} möglich?`,
      )
      expect(repairFaq?.answer).toContain('Software-, Einrichtungs- oder Hardwareproblem')
      expect(repairFaq?.answer).toContain('Kosten werden vorab mit dir abgestimmt')
      expect(repairFaq?.answer).toContain('Spezialreparatur')
      expect(repairFaq?.answer).toContain('nicht jeder Hardwaredefekt kann vor Ort behoben werden')
      expect(
        getLocationServices(location.id)
          .filter((service) => service.templateSlug !== 'pc-system')
          .some((service) => service.faqs.some((faq) => faq.question.startsWith('Was ist bei einer PC-Reparatur'))),
      ).toBe(false)
    }
    expect(
      [...primaryServiceTemplates, ...centralServicePages]
        .some((service) => service.faqs.some((faq) => faq.question.startsWith('Was ist bei einer PC-Reparatur'))),
    ).toBe(false)
  })

  it('keeps operator contacts and prices owned by each active location', () => {
    expect(new Set(activeLocations.map((location) => location.phoneHref)).size).toBe(
      activeLocations.length,
    )
    expect(new Set(activeLocations.map((location) => location.email)).size).toBe(
      activeLocations.length,
    )

    for (const location of activeLocations) {
      const services = getLocationServices(location.id)
      expect(
        services
          .filter((service) => service.deliveryMode === 'hybrid')
          .every((service) => service.price?.includes(location.pricing.onSiteFrom)),
      ).toBe(true)
    }
  })
})
