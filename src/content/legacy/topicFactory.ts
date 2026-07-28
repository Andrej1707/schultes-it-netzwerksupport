import type { ServiceIconName, ServicePageData } from '../types'

export type TopicPageInput = {
  slug: string
  icon: ServiceIconName
  code: string
  title: string
  shortTitle: string
  description: string
  tags: string[]
  seoTitle: string
  seoDescription: string
  keywords: string
  heroLead: string
  heroAccent: string
  heroText: string
  price: string
  audienceHint: string
  situations: ServicePageData['situations']
  solutions: ServicePageData['solutions']
  confidenceTitle: string
  confidenceText: string
  confidencePoints: string[]
  faqs: ServicePageData['faqs']
  related: string[]
}

export function topicPage(input: TopicPageInput): ServicePageData {
  return {
    ...input,
    audiences: [
      {
        label: 'Privatpersonen',
        text: `${input.audienceHint} Verständlich erklärt, ohne dass du vorher Fachbegriffe kennen musst.`,
      },
      {
        label: 'Seniorinnen & Senioren',
        text: 'Ruhige Unterstützung, klare Schritte und genug Zeit für Rückfragen.',
      },
      {
        label: 'Familien & Angehörige',
        text: 'Hilfe, wenn Technik für Eltern, Großeltern oder Kinder zuverlässig laufen soll.',
      },
      {
        label: 'Kleine Betriebe',
        text: 'Pragmatische Hilfe für einzelne Arbeitsplätze, kleine Büros und lokale Abläufe.',
      },
    ],
    process: [
      {
        title: 'Kurz schildern',
        text: 'Du beschreibst in normalen Worten, was nicht klappt. Eine fertige Diagnose ist nicht nötig.',
      },
      {
        title: 'Sinnvollen Weg wählen',
        text: 'Ich kläre, ob Fernwartung reicht oder ob ein Termin bei dir vor Ort besser ist.',
      },
      {
        title: 'Sauber prüfen',
        text: 'Ich ändere nicht wahllos Einstellungen, sondern prüfe Schritt für Schritt die wahrscheinliche Ursache.',
      },
      {
        title: 'Verständlich übergeben',
        text: 'Am Ende weißt du, was gemacht wurde, worauf du achten solltest und wann du dich wieder melden kannst.',
      },
    ],
  }
}
