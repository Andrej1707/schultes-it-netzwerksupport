import { describe, expect, it } from 'vitest'
import {
  getLocationServices,
  servicePages,
  serviceTemplates,
} from './services'
import { activeLocations } from '../site/locations'

describe('location-owned service generation', () => {
  it('creates every rubric for every active location', () => {
    for (const location of activeLocations) {
      const services = getLocationServices(location.id)

      expect(services).toHaveLength(serviceTemplates.length)
      expect(new Set(services.map((service) => service.templateSlug))).toEqual(
        new Set(serviceTemplates.map((service) => service.slug)),
      )
    }
  })

  it('publishes only unique location-owned canonical paths and slugs', () => {
    expect(new Set(servicePages.map((service) => service.path)).size).toBe(
      servicePages.length,
    )
    expect(new Set(servicePages.map((service) => service.slug)).size).toBe(
      servicePages.length,
    )
    expect(
      servicePages.every(
        (service) =>
          service.scope === 'location' &&
          service.locationId &&
          service.path?.startsWith(`/standorte/`),
      ),
    ).toBe(true)
  })

  it('adds visible location-specific context to every generated page', () => {
    expect(
      servicePages.every(
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
          .filter((service) => service.deliveryMode === 'remote')
          .every((service) => service.price?.includes(location.pricing.remoteFrom ?? '')),
      ).toBe(true)
      expect(
        services
          .filter((service) => service.deliveryMode === 'hybrid')
          .every((service) => service.price?.includes(location.pricing.onSiteFrom)),
      ).toBe(true)
    }
  })
})
