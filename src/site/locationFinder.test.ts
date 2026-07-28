import { describe, expect, it } from 'vitest'
import { distanceInKm, findNearestLocation } from './locationFinder'
import { locations, type ServiceLocation } from './locations'

describe('location finder', () => {
  it('calculates zero distance for identical coordinates', () => {
    expect(
      distanceInKm(
        { latitude: 48.8886228, longitude: 9.2064228 },
        { latitude: 48.8886228, longitude: 9.2064228 },
      ),
    ).toBeCloseTo(0, 6)
  })

  it('selects Ludwigsburg for a nearby customer', () => {
    const result = findNearestLocation(
      { latitude: 48.897, longitude: 9.192 },
      locations,
    )

    expect(result?.location.id).toBe('ludwigsburg')
    expect(result?.inServiceArea).toBe(true)
  })

  it('does not promise on-site coverage across Germany', () => {
    const result = findNearestLocation(
      { latitude: 52.52, longitude: 13.405 },
      locations,
    )

    expect(result?.location.id).toBe('ludwigsburg')
    expect(result?.inServiceArea).toBe(false)
  })

  it('ignores locations that are not active yet', () => {
    const preparing: ServiceLocation = {
      ...locations[0],
      id: 'future',
      slug: 'future',
      path: '/standorte/future/',
      status: 'preparing',
      latitude: 52.52,
      longitude: 13.405,
    }
    const result = findNearestLocation(
      { latitude: 52.52, longitude: 13.405 },
      [...locations, preparing],
    )

    expect(result?.location.id).toBe('ludwigsburg')
  })
})
