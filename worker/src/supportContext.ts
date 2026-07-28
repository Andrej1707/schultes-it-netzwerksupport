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
    phoneDisplay: '+49 1567 9616310',
    email: 'kontakt@schultes-it.de',
    remoteFrom: '25 Euro',
    onSiteFrom: '',
  },
  ludwigsburg: {
    id: 'ludwigsburg',
    kind: 'location',
    displayName: 'Schultes IT & Netzwerksupport, Standort Ludwigsburg',
    operatorName: 'Andrej Schultes',
    city: 'Ludwigsburg',
    serviceAreas: ['Ludwigsburg', 'Kornwestheim', 'Asperg', 'Tamm', 'Remseck am Neckar'],
    phoneDisplay: '+49 1567 9616310',
    email: 'kontakt@schultes-it.de',
    remoteFrom: '25 Euro',
    onSiteFrom: '49 Euro',
  },
}

export function resolveSupportLocation(value: unknown) {
  return typeof value === 'string' ? supportLocations[value] : undefined
}

export function supportContextInstructions(location?: SupportLocationContext) {
  if (!location) {
    return `AKTUELLER SEITENKONTEXT
- Der Besucher befindet sich auf einer zentralen Markenseite und hat noch keinen Standort gewählt.
- Nenne keine Telefonnummer, E-Mail-Adresse, standortbezogenen Preise oder einen bestimmten Betreiber.
- Erkläre bei Kontakt-, Preis-, Termin- oder Fernwartungsfragen, dass diese Angaben zum jeweiligen Standort gehören.
- Verweise auf die Standortauswahl unter https://schultes-it.de/standorte/.`
  }

  if (location.kind === 'central-remote') {
    return `AKTUELLER SEITENKONTEXT
- Der Besucher befindet sich auf einer zentralen deutschlandweiten Fernwartungsseite von Schultes IT.
- Betreiber und verantwortlicher Ansprechpartner: ${location.operatorName}
- Einsatzgebiet der Fernwartung: Deutschland
- Telefon: ${location.phoneDisplay}
- E-Mail: ${location.email}
- Fernwartung ab ${location.remoteFrom}
- Du darfst ausschließlich diese zentralen Fernwartungs-Kontaktdaten und den Fernwartungspreis nennen.
- Stelle die Fernwartung als zentralen Service von Schultes IT dar, nicht als Leistung eines regionalen Standorts.
- Für Hilfe vor Ort verweist du auf https://schultes-it.de/standorte/.`
  }

  return `AKTUELLER SEITENKONTEXT
- Gewählter Standort: ${location.displayName}
- Verantwortlicher Ansprechpartner: ${location.operatorName}
- Einsatzgebiet: ${location.serviceAreas.join(', ')}
- Telefon: ${location.phoneDisplay}
- E-Mail: ${location.email}
- Fernwartung ab ${location.remoteFrom}; Vor-Ort-Service ab ${location.onSiteFrom}
- Du darfst ausschließlich diese Kontaktdaten und Preise nennen.
- Formuliere klar, dass Fernwartung und Leistungen durch diesen Standort betreut und abgerechnet werden.`
}

export function directContactSentence(location?: SupportLocationContext) {
  if (!location) {
    return 'Wähle unter https://schultes-it.de/standorte/ einen aktiven Standort für direkten Kontakt.'
  }
  return location.kind === 'central-remote'
    ? `Du erreichst ${location.operatorName} für die zentrale Fernwartung unter ${location.phoneDisplay} oder per E-Mail an ${location.email}.`
    : `Du erreichst ${location.operatorName} vom Standort ${location.city} unter ${location.phoneDisplay} oder per E-Mail an ${location.email}.`
}
