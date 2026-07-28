import type { ServicePageData } from '../types'
import { topicPage } from './topicFactory'

export const peopleSafetyTopicPages: ServicePageData[] = [
  topicPage({
      slug: 'senioren-handy-hilfe',
      icon: 'laptop',
      code: 'TOP/SEN/16',
      title: 'Senioren Handy Hilfe',
      shortTitle: 'Senioren Handy',
      description:
        'Geduldige Handy- und Smartphone-Hilfe für Seniorinnen und Senioren in Ludwigsburg: WLAN, Apps, Fotos, WhatsApp, E-Mail und Einstellungen.',
      tags: ['Senioren', 'Handy', 'Smartphone'],
      seoTitle: 'Senioren Handy Hilfe Ludwigsburg | Smartphone einfach erklärt',
      seoDescription:
        'Senioren Handy Hilfe in Ludwigsburg: Smartphone, WhatsApp, Fotos, WLAN, E-Mail und Einstellungen ruhig erklärt. Hilfe bei dir vor Ort.',
      keywords:
        'Senioren Handy Hilfe Ludwigsburg, Smartphone Hilfe Senioren, Handy einrichten Senioren, WhatsApp Hilfe, Handy Hilfe Ludwigsburg, Smartphone einrichten',
      heroLead: 'Handyhilfe ohne Stress.',
      heroAccent: 'Ruhig, geduldig und verständlich.',
      heroText:
        'Smartphones können praktisch sein, aber auch schnell überfordern. Ich erkläre WLAN, Apps, Fotos, WhatsApp, E-Mail und wichtige Einstellungen in normaler Sprache und in deinem Tempo.',
      price: 'Bei dir vor Ort ab 49 € · Fernhilfe nur wenn sinnvoll',
      audienceHint: 'Für Seniorinnen, Senioren und Angehörige, die Smartphone-Hilfe ruhig und verständlich brauchen.',
      situations: [
        {
          title: 'WhatsApp, Fotos oder E-Mail sind unklar',
          text: 'Nachrichten, Bilder, Anhänge oder Kontakte sollen sicherer bedient werden.',
        },
        {
          title: 'Das Handy ist neu',
          text: 'WLAN, Konto, Apps, Sicherheit und Grundbedienung sollen eingerichtet werden.',
        },
        {
          title: 'Ständig kommen Meldungen',
          text: 'Updates, Berechtigungen, Speicher oder Werbung sorgen für Unsicherheit.',
        },
        {
          title: 'Angehörige wollen entlasten',
          text: 'Eltern oder Großeltern brauchen Hilfe, die geduldig erklärt und nicht nur schnell klickt.',
        },
      ],
      solutions: [
        {
          title: 'Grundfunktionen erklären',
          text: 'Telefonieren, Nachrichten, Fotos, WLAN und wichtige Einstellungen in Ruhe zeigen.',
        },
        {
          title: 'Apps einrichten',
          text: 'Benötigte Apps installieren, sortieren und unklare Berechtigungen erklären.',
        },
        {
          title: 'Sicherheit besprechen',
          text: 'PIN, Sperrbildschirm, Betrugsnachrichten und vorsichtiger Umgang mit Links verständlich machen.',
        },
        {
          title: 'E-Mail und Kontakte prüfen',
          text: 'Konten, Kontakte und einfache Nutzung gemeinsam testen.',
        },
        {
          title: 'Fotos und Speicher ordnen',
          text: 'Zeigen, wo Bilder liegen und was beim Löschen oder Sichern wichtig ist.',
        },
        {
          title: 'Merkhilfe geben',
          text: 'Auf Wunsch die wichtigsten Schritte einfach zusammenfassen, damit du sie wiederfindest.',
        },
      ],
      confidenceTitle: 'Tempo runter. Verstehen hoch.',
      confidenceText:
        'Gerade bei Handyhilfe ist Geduld wichtiger als Tempo. Ich nehme mir Zeit, damit du nicht nur zuschaust, sondern danach selbst sicherer wirst.',
      confidencePoints: [
        'Geduldige Erklärung',
        'Keine Bloßstellung',
        'Sicherheit und Betrug mitdenken',
        'Hilfe bei dir vor Ort',
      ],
      faqs: [
        {
          question: 'Hilfst du auch, wenn ich mich mit dem Handy kaum auskenne?',
          answer:
            'Ja. Genau dafür ist diese Hilfe gedacht. Du musst keine Fachbegriffe kennen.',
        },
        {
          question: 'Kannst du WhatsApp erklären?',
          answer:
            'Ja, zum Beispiel Nachrichten, Bilder, Kontakte, Gruppen und worauf man bei unbekannten Links achten sollte.',
        },
        {
          question: 'Soll ich dir meine PIN schicken?',
          answer:
            'Nein. PINs und Passwörter niemals per Chat oder E-Mail senden. Wenn etwas entsperrt werden muss, gibst du es selbst ein.',
        },
        {
          question: 'Kommst du zu Senioren nach Hause?',
          answer:
            'Ja, Vor-Ort-Hilfe in Ludwigsburg und Umgebung ist möglich. Details werden direkt mit Andrej abgestimmt.',
        },
      ],
      related: ['benutzerkonten', 'email', 'betrugsverdacht-phishing-hilfe'],
    }),
  topicPage({
      slug: 'betrugsverdacht-phishing-hilfe',
      icon: 'bot',
      code: 'TOP/SAFE/17',
      title: 'Betrugsverdacht & Phishing',
      shortTitle: 'Betrug/Phishing',
      description:
        'Hilfe in Ludwigsburg bei verdächtigen E-Mails, Fake-SMS, Betrugsverdacht, Phishing-Links und Unsicherheit nach einem Klick.',
      tags: ['Betrug', 'Phishing', 'Sicherheit'],
      seoTitle: 'Betrugsverdacht & Phishing Hilfe Ludwigsburg',
      seoDescription:
        'Betrugsverdacht oder Phishing in Ludwigsburg? Hilfe bei verdächtigen E-Mails, SMS, Links, Konto-Warnungen und sicheren nächsten Schritten.',
      keywords:
        'Betrugsverdacht Ludwigsburg, Phishing Hilfe, Fake Mail Hilfe, Betrug SMS, gehacktes Konto Hilfe, Computer Sicherheit Senioren, IT Sicherheit Ludwigsburg',
      heroLead: 'Komische Mail? Verdächtiger Link?',
      heroAccent: 'Erst stoppen, dann sauber prüfen.',
      heroText:
        'Wenn eine Nachricht, ein Anruf oder ein Link komisch wirkt, ist schnelle Ruhe wichtiger als hektisches Klicken. Ich helfe dir, sichere nächste Schritte zu klären und typische Betrugsmaschen einzuordnen.',
      price: 'Ersteinschätzung nach Anliegen · Vor Ort ab 49 €',
      audienceHint: 'Für Privatpersonen, Senioren, Angehörige und kleine Betriebe bei digitalem Betrugsverdacht.',
      situations: [
        {
          title: 'Du hast auf einen Link geklickt',
          text: 'Eine SMS, E-Mail oder Anzeige wirkte echt, jetzt bist du unsicher.',
        },
        {
          title: 'Ein Konto meldet Warnungen',
          text: 'Unbekannte Anmeldung, Passwortwarnung oder Sicherheitsmeldung taucht auf.',
        },
        {
          title: 'Jemand verlangt Geld oder Codes',
          text: 'Anrufer, Nachricht oder angeblicher Support fordert Zahlung, Gutscheine oder Zugangsdaten.',
        },
        {
          title: 'Du willst nichts falsch machen',
          text: 'Gerade bei Banking, E-Mail oder wichtigen Konten soll kein Risiko entstehen.',
        },
      ],
      solutions: [
        {
          title: 'Situation ruhig einordnen',
          text: 'Klären, was passiert ist: nur gesehen, geklickt, Daten eingegeben oder Geld überwiesen.',
        },
        {
          title: 'Sichere Sofortschritte nennen',
          text: 'Keine weiteren Daten eingeben, keine Codes teilen, fragliche Seite schließen und Belege sichern.',
        },
        {
          title: 'Gerät und Konto trennen',
          text: 'Prüfen, ob es eher um das Gerät, ein Online-Konto oder Zahlungsdaten geht.',
        },
        {
          title: 'Passwörter sinnvoll behandeln',
          text: 'Keine Passwörter im Chat. Wenn nötig, wird direkt am Gerät sicher geändert.',
        },
        {
          title: 'Nächste Stellen benennen',
          text: 'Bei Geld, Bank oder Identitätsdaten kann Bank, Anbieter oder Polizei wichtiger sein als IT-Hilfe.',
        },
        {
          title: 'Vorbeugung erklären',
          text: 'Typische Merkmale von Fake-Mails, SMS und Support-Betrug in einfacher Sprache zeigen.',
        },
      ],
      confidenceTitle: 'Bei Betrug zählt Vorsicht mehr als Mut.',
      confidenceText:
        'Ich gebe keine riskanten Experimente vor. Wenn Geld, Ausweise, Banking oder Kontozugriff betroffen sind, wird klar gesagt, welche offizielle Stelle du kontaktieren solltest.',
      confidencePoints: [
        'Keine Passwörter teilen',
        'Keine Codes im Chat',
        'Bank/Anbieter bei Geldthemen',
        'Besonders ruhig für Senioren',
      ],
      faqs: [
        {
          question: 'Was soll ich sofort tun, wenn ich einen Phishing-Link geklickt habe?',
          answer:
            'Gib keine weiteren Daten ein, schließe die Seite, mache wenn möglich einen Screenshot und notiere, was du eingegeben hast. Wenn Bankdaten betroffen sind, sofort die Bank kontaktieren.',
        },
        {
          question: 'Kannst du prüfen, ob mein Konto gehackt wurde?',
          answer:
            'Ich kann sichere Hinweise einordnen und dir helfen, Kontosicherheit am Gerät zu prüfen. Verbindliche Konto- oder Anbieterentscheidungen trifft aber der jeweilige Anbieter.',
        },
        {
          question: 'Soll ich Passwörter schicken?',
          answer:
            'Nein. Niemals Passwörter, PINs, TANs oder Codes senden. Wenn ein Passwort geändert werden muss, machst du das selbst am Gerät.',
        },
        {
          question: 'Hilfst du Senioren bei Betrugsnachrichten?',
          answer:
            'Ja. Ich erkläre ruhig, woran man typische Fake-SMS, Fake-Mails und falschen Support erkennen kann.',
        },
      ],
      related: ['senioren-handy-hilfe', 'email', 'benutzerkonten'],
    }),
]
