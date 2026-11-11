export type SupportLocationContext = {
  id: string
  kind: 'central-remote' | 'location'
  displayName: string
  operatorName: string
  city: string
  serviceAreas: string[]
  phoneDisplay: string
  email: string
  remoteFrom: string
  onSiteFrom: string
}

const supportLocations: Record<string, SupportLocationContext> = {
  'central-remote': {
    id: 'central-remote',
    kind: 'central-remote',
    displayName: 'Schultes IT & Netzwerksupport',
    operatorName: 'Andrej Schultes',
    city: 'Deutschland',
    serviceAreas: ['Deutschland'],
    phoneDisplay: '+49 179 1707411',
    email: 'kontakt@schultes-it.de',
    remoteFrom: '25 Euro',
    onSiteFrom: '',
  },
  ludwigsburg: {
    id: 'ludwigsburg',
    kind: 'location',
    displayName: 'Schultes IT & Netzwerksupport',
    operatorName: 'Andrej Schultes',
    city: 'Ludwigsburg',
    serviceAreas: ['Ludwigsburg', 'Kornwestheim', 'Asperg', 'Tamm', 'Remseck am Neckar', 'Bietigheim-Bissingen'],
    phoneDisplay: '+49 179 1707411',
    email: 'kontakt@schultes-it.de',
    remoteFrom: '25 Euro',
    onSiteFrom: '49 Euro',
  },
}

export function resolveSupportLocation(value: unknown) {
  if (value === 'central') return supportLocations.ludwigsburg
  return typeof value === 'string' && Object.hasOwn(supportLocations, value)
    ? supportLocations[value]
    : undefined
}

export function supportContextInstructions(
  location: SupportLocationContext = supportLocations.ludwigsburg,
) {
  if (location.kind === 'central-remote') {
    return `AKTUELLER SEITENKONTEXT
- Der Besucher befindet sich auf einer deutschlandweiten Fernwartungsseite von Schultes IT.
- Inhaber und direkter Ansprechpartner: ${location.operatorName}
- Einsatzgebiet der Fernwartung: Deutschland
- Telefon: ${location.phoneDisplay}
- E-Mail: ${location.email}
- Fernwartung ab ${location.remoteFrom}
- Du darfst ausschließlich diese Kontaktdaten und den bekannten Fernwartungspreis nennen.
- Fernwartung wird persönlich mit Andrej Schultes abgestimmt.
- Für Hilfe vor Ort in Ludwigsburg und Umgebung verweist du auf https://schultes-it.de/#kontakt. Eine Standortwahl ist nicht nötig.`
  }

  return `AKTUELLER SEITENKONTEXT
- Betrieb: ${location.displayName}
- Inhaber und direkter Ansprechpartner: ${location.operatorName}
- Einsatzgebiet vor Ort: ${location.serviceAreas.join(', ')}
- Fernwartung ist deutschlandweit möglich.
- Telefon: ${location.phoneDisplay}
- E-Mail: ${location.email}
- Fernwartung ab ${location.remoteFrom}; Vor-Ort-Service ab ${location.onSiteFrom}
- Du darfst ausschließlich diese Kontaktdaten und Preise nennen.
- Andrej Schultes betreut und berechnet die Leistungen persönlich. Es gibt keine Standort- oder Partnerauswahl.`
}

export function directContactSentence(
  location: SupportLocationContext = supportLocations.ludwigsburg,
) {
  return location.kind === 'central-remote'
    ? `Du erreichst ${location.operatorName} für deutschlandweite Fernwartung unter ${location.phoneDisplay} oder per E-Mail an ${location.email}.`
    : `Du erreichst ${location.operatorName} in Ludwigsburg direkt unter ${location.phoneDisplay} oder per E-Mail an ${location.email}.`
}
