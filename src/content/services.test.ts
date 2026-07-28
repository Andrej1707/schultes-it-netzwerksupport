import { describe, expect, it } from 'vitest'
import {
  centralServicePages,
  getLocationServices,
  locationServicePages,
  primaryServiceTemplates,
  remoteServiceTemplates,
  servicePages,
  topicServiceTemplates,
} from './services'
import { activeLocations } from '../site/locations'

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
