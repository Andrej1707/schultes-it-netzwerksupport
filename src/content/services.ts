import {
  primaryServicePages as legacyPrimaryServicePages,
  topicPages as legacyTopicPages,
} from './legacy/serviceCatalog'
import type { ServicePageData } from './types'

const categoryConfig = {
  'pc-system': {
    path: '/leistungen/pc-laptop/',
    legacyPaths: ['/pc-system/'],
    seoTitle: 'PC- & Laptop-Hilfe | Schultes IT Deutschland',
    seoDescription:
      'PC- und Laptop-Hilfe von Schultes IT: deutschlandweit per Fernwartung und persönlich über regionale Standorte. Verständlich, sicher und ohne Fachchinesisch.',
    keywords:
      'PC Hilfe, Laptop Hilfe, Computerhilfe, Windows Hilfe, PC Support Deutschland, regionale IT Hilfe',
  },
  'netzwerk-wlan': {
    path: '/leistungen/netzwerk-wlan/',
    legacyPaths: ['/netzwerk-wlan/'],
    seoTitle: 'Netzwerk- & WLAN-Hilfe | Schultes IT',
    seoDescription:
      'Hilfe bei WLAN, Router, Mesh und kleinen Netzwerken: per Fernwartung, wenn möglich, oder persönlich über einen regionalen Schultes-IT-Standort.',
    keywords:
      'WLAN Hilfe, Netzwerk Hilfe, Router Hilfe, Mesh einrichten, Internet Probleme, Schultes IT',
  },
  webseiten: {
    path: '/leistungen/webseiten/',
    legacyPaths: ['/webseiten/'],
    seoTitle: 'Webseiten für Selbstständige & Betriebe | Schultes IT',
    seoDescription:
      'Moderne, schnelle und verständlich betreute Webseiten von Schultes IT für Selbstständige, kleine Unternehmen, Vereine und regionale Betriebe.',
    keywords:
      'Webseite erstellen lassen, Webdesign Deutschland, Firmenwebseite, lokale Unternehmen, responsive Webdesign',
  },
  'tools-automation': {
    path: '/leistungen/automation/',
    legacyPaths: ['/tools-automation/'],
    seoTitle: 'Tools & Automation für kleine Betriebe | Schultes IT',
    seoDescription:
      'Praktische Tools, Automatisierungen und Prototypen von Schultes IT: wiederkehrende Abläufe vereinfachen und digitale Arbeit nachvollziehbar verbessern.',
    keywords:
      'Automation kleine Unternehmen, individuelle Tools, Prozessautomatisierung, KI Prototyp, Schultes IT',
  },
} as const

function replaceLocalBrandCopy(value: string) {
  return value
    .replaceAll('in Ludwigsburg und Umgebung', 'über regionale Schultes-IT-Standorte')
    .replaceAll('aus Ludwigsburg', 'aus dem Schultes-IT-Netzwerk')
    .replaceAll('in Ludwigsburg', 'bei Schultes IT')
    .replaceAll('Ludwigsburg und Umgebung', 'regionale Einsatzgebiete')
    .replaceAll('Ludwigsburg', 'Deutschland')
}

function mapServiceCopy(service: ServicePageData, transform: (value: string) => string) {
  return {
    ...service,
    description: transform(service.description),
    heroText: transform(service.heroText),
    audiences: service.audiences.map((entry) => ({ ...entry, text: transform(entry.text) })),
    situations: service.situations.map((entry) => ({ ...entry, text: transform(entry.text) })),
    solutions: service.solutions.map((entry) => ({ ...entry, text: transform(entry.text) })),
    process: service.process.map((entry) => ({ ...entry, text: transform(entry.text) })),
    confidenceText: transform(service.confidenceText),
    confidencePoints: service.confidencePoints.map(transform),
    faqs: service.faqs.map((entry) => ({ ...entry, answer: transform(entry.answer) })),
  }
}

export const primaryServicePages: ServicePageData[] = legacyPrimaryServicePages.map((service) => {
  const config = categoryConfig[service.slug as keyof typeof categoryConfig]
  if (!config) {
    throw new Error(`Missing category route configuration for ${service.slug}.`)
  }

  return {
    ...mapServiceCopy(service, replaceLocalBrandCopy),
    ...config,
    legacyPaths: [...config.legacyPaths],
    scope: 'network',
    areaLabel: 'Deutschland / regionale Standorte',
    modeLabel: 'Remote / regional vor Ort',
  }
})

function remoteService(input: {
  slug: string
  path: string
  code: string
  title: string
  shortTitle: string
  description: string
  seoTitle: string
  seoDescription: string
  keywords: string
  heroLead: string
  heroAccent: string
  heroText: string
  price?: string
  situations: ServicePageData['situations']
  solutions: ServicePageData['solutions']
  confidenceTitle: string
  confidenceText: string
  faqs: ServicePageData['faqs']
  related: string[]
  icon?: ServicePageData['icon']
}): ServicePageData {
  return {
    ...input,
    icon: input.icon ?? 'laptop',
    tags: ['Deutschlandweit', 'Fernwartung', 'Sichere Hilfe'],
    scope: 'national',
    areaLabel: 'Deutschlandweit',
    modeLabel: 'Sichere Fernwartung',
    price: input.price ?? 'Fernhilfe ab 25 €',
    audiences: [
      {
        label: 'Privatpersonen',
        text: 'Direkte Hilfe am eigenen Windows-PC, ohne Anfahrt und in verständlicher Sprache.',
      },
      {
        label: 'Seniorinnen & Senioren',
        text: 'Ruhige Begleitung mit klaren Schritten. Du behältst jederzeit die Kontrolle über dein Gerät.',
      },
      {
        label: 'Familien & Angehörige',
        text: 'Unterstützung für Eltern oder Großeltern, auch wenn du selbst nicht vor Ort sein kannst.',
      },
      {
        label: 'Kleine Betriebe',
        text: 'Pragmatische Remote-Hilfe für einzelne Arbeitsplätze, Programme und alltägliche Störungen.',
      },
    ],
    process: [
      {
        title: 'Problem kurz beschreiben',
        text: 'Du erklärst in normalen Worten, was nicht funktioniert. Eine fertige Diagnose brauchst du nicht.',
      },
      {
        title: 'Fernwartung gemeinsam starten',
        text: 'Nach direkter Abstimmung startest du RustDesk. Zugangsdaten werden niemals über den Website-Chat abgefragt.',
      },
      {
        title: 'Sicher prüfen und lösen',
        text: 'Du siehst jeden Schritt am Bildschirm und kannst die Verbindung jederzeit selbst beenden.',
      },
      {
        title: 'Ergebnis verständlich übergeben',
        text: 'Am Ende weißt du, was geändert wurde und was du künftig selbst beachten kannst.',
      },
    ],
    confidencePoints: [
      'Keine versteckte Dauerverbindung',
      'Du siehst und kontrollierst jeden Schritt',
      'Keine Passwörter, PINs oder TANs im Chat',
      'Abbruch jederzeit durch dich möglich',
    ],
  }
}

const legacyRemote = legacyTopicPages.find((service) => service.slug === 'fernwartung')

if (!legacyRemote) {
  throw new Error('The legacy remote support service is missing.')
}

const nationalRemoteOverview: ServicePageData = {
  ...mapServiceCopy(legacyRemote, replaceLocalBrandCopy),
  path: '/fernwartung/',
  legacyPaths: [],
  scope: 'national',
  areaLabel: 'Deutschlandweit',
  modeLabel: 'Sichere Fernwartung',
  seoTitle: 'Fernwartung deutschlandweit | Schultes IT Remote-Hilfe',
  seoDescription:
    'Deutschlandweite IT-Hilfe per Fernwartung für Windows, Drucker, E-Mail, Outlook und Programme. Persönlich erklärt, sicher begleitet und ohne Anfahrt.',
  keywords:
    'Fernwartung Deutschland, Remote IT Hilfe, PC Fernhilfe, Windows Hilfe online, Computerhilfe per Fernwartung, Schultes IT',
  heroLead: 'IT-Hilfe, egal wo du in Deutschland bist.',
  heroAccent: 'Sicher per Fernwartung.',
  heroText:
    'Viele Windows-, Programm-, Drucker- und E-Mail-Probleme lassen sich direkt aus der Ferne lösen. Du bleibst am Gerät, siehst jeden Schritt und entscheidest jederzeit selbst.',
  related: [
    'fernwartung-windows-hilfe',
    'fernwartung-drucker-hilfe',
    'fernwartung-email-outlook',
  ],
}

const nationalRemoteChildren: ServicePageData[] = [
  remoteService({
    slug: 'fernwartung-windows-hilfe',
    path: '/fernwartung/windows-hilfe/',
    code: 'REMOTE/WIN/01',
    title: 'Windows-Hilfe per Fernwartung',
    shortTitle: 'Windows-Hilfe',
    description:
      'Deutschlandweite Hilfe bei Windows-Fehlern, Updates, Einstellungen und langsamen Computern per sicherer Fernwartung.',
    seoTitle: 'Windows-Hilfe per Fernwartung | Deutschlandweit',
    seoDescription:
      'Windows-Hilfe deutschlandweit per Fernwartung: Fehler, Updates, Programme und Einstellungen gemeinsam prüfen. Sicher, verständlich und ohne Anfahrt.',
    keywords:
      'Windows Hilfe Fernwartung, Windows 11 Hilfe online, PC Hilfe remote, Windows Fehler beheben, Computerhilfe Deutschland',
    heroLead: 'Windows macht Probleme?',
    heroAccent: 'Wir schauen gemeinsam direkt hinein.',
    heroText:
      'Wenn Windows hängt, Updates scheitern oder Einstellungen unklar sind, kann Fernwartung oft schneller helfen als ein Vor-Ort-Termin. Du behältst dabei jederzeit die Kontrolle.',
    situations: [
      {
        title: 'Windows ist plötzlich sehr langsam',
        text: 'Programme reagieren zäh, der Start dauert lange oder der Computer wirkt ohne erkennbaren Grund überlastet.',
      },
      {
        title: 'Updates schlagen immer wieder fehl',
        text: 'Windows meldet Fehler, startet Updates erneut oder bleibt bei einem bestimmten Stand hängen.',
      },
      {
        title: 'Programme starten nicht mehr',
        text: 'Ein wichtiges Programm öffnet sich nicht, zeigt Meldungen oder funktioniert nach einer Änderung nicht mehr.',
      },
      {
        title: 'Einstellungen sind verstellt',
        text: 'Anzeige, Ton, Standardprogramme oder Benutzerkonto verhalten sich plötzlich anders als gewohnt.',
      },
    ],
    solutions: [
      {
        title: 'Fehler strukturiert eingrenzen',
        text: 'Meldungen, Ereignisse und betroffene Programme werden nachvollziehbar geprüft.',
      },
      {
        title: 'Updates und Systemzustand prüfen',
        text: 'Windows-Updates, Speicherplatz und wichtige Systemkomponenten werden sinnvoll kontrolliert.',
      },
      {
        title: 'Programme wieder nutzbar machen',
        text: 'Einstellungen, Reparaturmöglichkeiten und saubere Neuinstallation werden gemeinsam abgewogen.',
      },
      {
        title: 'Alltag verständlich einrichten',
        text: 'Ansicht, Standardprogramme und häufig genutzte Funktionen werden passend konfiguriert.',
      },
    ],
    confidenceTitle: 'Remote-Hilfe ohne Kontrollverlust.',
    confidenceText:
      'Du startest die Verbindung selbst, siehst jede Änderung und kannst sie jederzeit sofort beenden.',
    faqs: [
      {
        question: 'Welche Windows-Versionen werden unterstützt?',
        answer:
          'Der Schwerpunkt liegt auf aktuell unterstützten Windows-Versionen. Ob dein konkretes System sinnvoll per Fernwartung bearbeitet werden kann, klären wir vorab.',
      },
      {
        question: 'Kann Fernwartung einen defekten PC reparieren?',
        answer:
          'Hardwaredefekte oder ein PC, der gar nicht mehr startet, brauchen meist Hilfe vor Ort. Dann wird ehrlich auf einen regionalen Standort oder einen passenden nächsten Schritt verwiesen.',
      },
      {
        question: 'Muss ich technische Begriffe kennen?',
        answer:
          'Nein. Du beschreibst nur, was du siehst. Die technische Einordnung übernimmt Schultes IT.',
      },
    ],
    related: ['fernwartung', 'pc-system', 'fernwartung-email-outlook'],
  }),
  remoteService({
    slug: 'fernwartung-drucker-hilfe',
    path: '/fernwartung/drucker-hilfe/',
    code: 'REMOTE/PRINT/02',
    title: 'Drucker-Hilfe per Fernwartung',
    shortTitle: 'Drucker-Hilfe',
    description:
      'Deutschlandweite Fernhilfe bei Druckerwarteschlangen, Treibern, WLAN-Druckern und Scan-Software.',
    seoTitle: 'Drucker-Hilfe per Fernwartung | Deutschlandweit',
    seoDescription:
      'Drucker druckt nicht? Deutschlandweite Hilfe per Fernwartung bei Treibern, Warteschlange, WLAN-Verbindung und Scan-Software.',
    keywords:
      'Drucker Hilfe Fernwartung, Drucker druckt nicht, WLAN Drucker Hilfe, Druckertreiber, Scanner Hilfe online',
    heroLead: 'Der Drucker streikt.',
    heroAccent: 'Die Ursache muss nicht im Drucker liegen.',
    heroText:
      'Viele Druckprobleme entstehen in Windows, im Treiber oder in der Warteschlange. Genau diese Bereiche lassen sich per Fernwartung oft schnell und sauber prüfen.',
    situations: [
      {
        title: 'Aufträge bleiben in der Warteschlange',
        text: 'Der Druckauftrag erscheint, wird aber nicht verarbeitet oder blockiert alle weiteren Dokumente.',
      },
      {
        title: 'Der Drucker wird als offline angezeigt',
        text: 'Windows findet das Gerät nicht mehr, obwohl es eingeschaltet und mit dem Netzwerk verbunden ist.',
      },
      {
        title: 'Treiber oder Software fehlen',
        text: 'Nach einem PC-Wechsel oder Update fehlen Funktionen, Einstellungen oder die Scan-Anwendung.',
      },
      {
        title: 'Scannen funktioniert nicht',
        text: 'Der Drucker kann drucken, aber der Scanner wird am Computer nicht erkannt oder die Software startet nicht.',
      },
    ],
    solutions: [
      {
        title: 'Warteschlange bereinigen',
        text: 'Blockierte Aufträge und den Windows-Druckdienst kontrolliert prüfen und neu starten.',
      },
      {
        title: 'Treiber sauber einrichten',
        text: 'Passende Hersteller-Treiber auswählen und unnötige doppelte Drucker entfernen.',
      },
      {
        title: 'Netzwerkerkennung prüfen',
        text: 'Verbindung und Adresse des Druckers nachvollziehen, soweit das aus der Ferne möglich ist.',
      },
      {
        title: 'Scan-Software verbinden',
        text: 'Vorhandene Scan-Funktionen testen und eine verständliche Nutzung einrichten.',
      },
    ],
    confidenceTitle: 'Erst digital prüfen, dann unnötige Anfahrt vermeiden.',
    confidenceText:
      'Wenn Papierstau, Kabel, Defekt oder WLAN-Reichweite vor Ort geprüft werden müssen, wird das klar gesagt.',
    faqs: [
      {
        question: 'Kann jedes Druckerproblem per Fernwartung gelöst werden?',
        answer:
          'Nein. Mechanische Defekte, Papierstau, Tinte oder eine instabile Funkverbindung am Standort benötigen gegebenenfalls Hilfe vor Ort.',
      },
      {
        question: 'Hilfst du auch bei Scannern?',
        answer:
          'Ja, wenn es um Windows-Erkennung, Treiber oder Scan-Software geht und das Gerät grundsätzlich erreichbar ist.',
      },
      {
        question: 'Brauche ich das Druckermodell?',
        answer:
          'Hilfreich ist die genaue Modellbezeichnung. Wenn du sie nicht findest, schauen wir gemeinsam, wo sie am Gerät steht.',
      },
    ],
    related: ['fernwartung', 'drucker', 'netzwerk-wlan'],
    icon: 'router',
  }),
  remoteService({
    slug: 'fernwartung-email-outlook',
    path: '/fernwartung/email-outlook/',
    code: 'REMOTE/MAIL/03',
    title: 'E-Mail- & Outlook-Hilfe',
    shortTitle: 'E-Mail & Outlook',
    description:
      'Deutschlandweite Fernhilfe bei Outlook, E-Mail-Konten, Versand, Empfang und verständlicher Einrichtung.',
    seoTitle: 'Outlook- & E-Mail-Hilfe per Fernwartung',
    seoDescription:
      'E-Mail oder Outlook funktioniert nicht? Deutschlandweite Fernhilfe bei Einrichtung, Anmeldung, Versand, Empfang und Synchronisierung.',
    keywords:
      'Outlook Hilfe Fernwartung, E-Mail Hilfe online, Outlook geht nicht, E-Mail einrichten, IMAP SMTP Hilfe',
    heroLead: 'E-Mails sollen ankommen.',
    heroAccent: 'Nicht zum Technikprojekt werden.',
    heroText:
      'Ob Outlook nicht startet, Nachrichten hängen oder ein Konto neu verbunden werden muss: Viele Ursachen lassen sich gemeinsam per Fernwartung prüfen.',
    situations: [
      {
        title: 'E-Mails werden nicht gesendet',
        text: 'Nachrichten bleiben im Postausgang oder führen immer wieder zu einer unklaren Fehlermeldung.',
      },
      {
        title: 'Neue Nachrichten kommen nicht an',
        text: 'Das Postfach wirkt leer, synchronisiert nicht oder zeigt am Handy andere Inhalte als am PC.',
      },
      {
        title: 'Outlook fragt ständig nach dem Passwort',
        text: 'Die Anmeldung wiederholt sich, obwohl das Passwort scheinbar richtig eingegeben wurde.',
      },
      {
        title: 'Ein Konto soll neu eingerichtet werden',
        text: 'E-Mail-Adresse, Anbieter und vorhandene Zugangsdaten sollen sauber mit dem gewünschten Programm verbunden werden.',
      },
    ],
    solutions: [
      {
        title: 'Kontoeinstellungen prüfen',
        text: 'Anbieter, Servertyp und vorhandene Einstellungen nachvollziehbar kontrollieren.',
      },
      {
        title: 'Versand und Empfang testen',
        text: 'Fehler gezielt eingrenzen, ohne wahllos Konten oder Nachrichten zu löschen.',
      },
      {
        title: 'Outlook stabilisieren',
        text: 'Profil, Updates und typische lokale Ursachen sinnvoll prüfen.',
      },
      {
        title: 'Synchronisierung erklären',
        text: 'Verständlich einordnen, warum Handy und PC unterschiedliche Zustände anzeigen können.',
      },
    ],
    confidenceTitle: 'Deine Zugangsdaten bleiben bei dir.',
    confidenceText:
      'Passwörter werden nicht im Chat gesendet. Notwendige Eingaben machst du selbst am eigenen Gerät.',
    faqs: [
      {
        question: 'Muss ich mein E-Mail-Passwort nennen?',
        answer:
          'Nein. Passwörter gehören weder in den Chat noch an fremde Personen. Falls eine Anmeldung nötig ist, gibst du das Passwort selbst ein.',
      },
      {
        question: 'Hilfst du auch bei anderen Mailprogrammen?',
        answer:
          'Ja, je nach Anbieter und Programm. Vorab wird kurz geklärt, ob eine sichere Fernwartung sinnvoll möglich ist.',
      },
      {
        question: 'Kannst du ein verlorenes Passwort wiederherstellen?',
        answer:
          'Die Wiederherstellung läuft immer über den jeweiligen Anbieter. Schultes IT kann sichere Schritte erklären, aber keine Anbieter-Sicherheitsprüfung umgehen.',
      },
    ],
    related: ['fernwartung', 'email', 'fernwartung-windows-hilfe'],
    icon: 'globe',
  }),
]

export const nationalRemotePages = [nationalRemoteOverview, ...nationalRemoteChildren]

export const topicPages: ServicePageData[] = legacyTopicPages
  .filter((service) => service.slug !== 'fernwartung')
  .map((service) => ({
    ...service,
    path: `/standorte/ludwigsburg/${service.slug}/`,
    legacyPaths: [`/${service.slug}/`],
    scope: 'location',
    locationId: 'ludwigsburg',
    areaLabel: 'Ludwigsburg & Umgebung',
    modeLabel: 'Bei dir / ergänzend remote',
  }))

export const servicePages: ServicePageData[] = [
  ...primaryServicePages,
  ...nationalRemotePages,
  ...topicPages,
]

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>

export const servicePageByPath = Object.fromEntries(
  servicePages.map((service) => [service.path, service]),
) as Record<string, ServicePageData>

export function getServicePath(service: ServicePageData) {
  return service.path ?? `/${service.slug}/`
}
