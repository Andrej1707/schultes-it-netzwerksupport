import type { ServiceLocation } from './locations'

export type Coordinates = {
  latitude: number
  longitude: number
}

export type LocationMatch = {
  location: ServiceLocation
  distanceKm: number
  inServiceArea: boolean
}

const earthRadiusKm = 6371

function toRadians(value: number) {
  return (value * Math.PI) / 180
}

export function distanceInKm(from: Coordinates, to: Coordinates) {
  const latitudeDistance = toRadians(to.latitude - from.latitude)
  const longitudeDistance = toRadians(to.longitude - from.longitude)
  const fromLatitude = toRadians(from.latitude)
  const toLatitude = toRadians(to.latitude)
  const haversine =
    Math.sin(latitudeDistance / 2) ** 2 +
    Math.cos(fromLatitude) * Math.cos(toLatitude) * Math.sin(longitudeDistance / 2) ** 2

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine))
}

export function findNearestLocation(
  coordinates: Coordinates,
  candidates: ServiceLocation[],
): LocationMatch | undefined {
  const activeLocations = candidates.filter((location) => location.status === 'active')
  const nearest = activeLocations
    .map((location) => ({
      location,
      distanceKm: distanceInKm(coordinates, {
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    }))
    .sort((left, right) => left.distanceKm - right.distanceKm)[0]

  if (!nearest) return undefined

  return {
    ...nearest,
    inServiceArea: nearest.distanceKm <= nearest.location.serviceRadiusKm,
  }
}
