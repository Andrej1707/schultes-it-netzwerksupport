import type { ServicePageData } from '../types'
import { topicPage } from './topicFactory'

export const networkTopicPages: ServicePageData[] = [
  topicPage({
      slug: 'fritzbox-hilfe',
      icon: 'router',
      code: 'TOP/FB/14',
      title: 'Fritzbox Hilfe',
      shortTitle: 'Fritzbox',
      description:
        'Fritzbox-Hilfe in Ludwigsburg bei WLAN, Mesh, Internet, Telefonie, Updates und unklaren Router-Meldungen.',
      tags: ['Fritzbox', 'Router', 'WLAN'],
      seoTitle: 'Fritzbox Hilfe Ludwigsburg | WLAN, Internet & Mesh',
      seoDescription:
        'Fritzbox Hilfe in Ludwigsburg: WLAN geht nicht, Internet fällt aus, Mesh oder Repeater einrichten, Router-Meldungen verstehen und stabilisieren.',
      keywords:
        'Fritzbox Hilfe Ludwigsburg, Fritzbox einrichten, Fritzbox WLAN geht nicht, Fritzbox Mesh, Router Hilfe Ludwigsburg, Internet Hilfe',
      heroLead: 'Fritzbox verstehen.',
      heroAccent: 'WLAN und Internet sauber ordnen.',
      heroText:
        'Die Fritzbox kann viel, aber genau deshalb wirken Menüs und Meldungen schnell unübersichtlich. Ich helfe bei WLAN, Internet, Mesh, Geräten und sinnvollen Einstellungen direkt bei dir in Ludwigsburg und Umgebung.',
      price: 'Bei dir vor Ort ab 49 € · Analyse nach Aufwand',
      audienceHint: 'Für Haushalte, Senioren, Homeoffice und kleine Betriebe mit Fritzbox- oder Routerproblemen.',
      situations: [
        {
          title: 'Fritzbox-WLAN ist instabil',
          text: 'Geräte verlieren die Verbindung oder verbinden sich nur in bestimmten Räumen.',
        },
        {
          title: 'Internet geht trotz Fritzbox nicht',
          text: 'Die Fritzbox leuchtet, aber Webseiten, Apps oder Streaming funktionieren nicht richtig.',
        },
        {
          title: 'Mesh oder Repeater verwirren',
          text: 'Mehrere Geräte sind vorhanden, aber die Verbindung wird nicht besser.',
        },
        {
          title: 'Nach Update oder Anbieterwechsel ist alles anders',
          text: 'Neue Oberfläche, Zugangsdaten oder Einstellungen sollen wieder verständlich werden.',
        },
      ],
      solutions: [
        {
          title: 'Fritzbox-Status einordnen',
          text: 'Internet, WLAN, Mesh und Geräte getrennt betrachten.',
        },
        {
          title: 'WLAN sinnvoll einstellen',
          text: 'Name, Passwort, Funkband und Sicherheit nachvollziehbar konfigurieren.',
        },
        {
          title: 'Mesh verbinden',
          text: 'Repeater oder Mesh-Geräte korrekt koppeln und passend platzieren.',
        },
        {
          title: 'Geräte prüfen',
          text: 'PC, Handy, Drucker oder Fernseher praktisch im Netzwerk testen.',
        },
        {
          title: 'Updates kontrollieren',
          text: 'Firmware und Einstellungen vorsichtig prüfen, ohne den Anschluss zu riskieren.',
        },
        {
          title: 'Anbietergrenze erkennen',
          text: 'Wenn die Leitung oder Zugangsdaten betroffen sind, bekommst du klare Hinweise für den Anbieter.',
        },
      ],
      confidenceTitle: 'Routerhilfe ohne Einstellungs-Chaos.',
      confidenceText:
        'Ich fasse Router, WLAN und Endgeräte als ein System auf. So wird klarer, ob die Fritzbox selbst, das WLAN oder ein einzelnes Gerät das Problem macht.',
      confidencePoints: [
        'Fritzbox und WLAN trennen',
        'Mesh sauber verbinden',
        'Zugangsdaten bleiben bei dir',
        'Anbieter-Themen klar benennen',
      ],
      faqs: [
        {
          question: 'Richtest du Fritzbox Mesh ein?',
          answer:
            'Ja. Ich prüfe, wie die Mesh-Geräte verbunden sind, wo sie stehen sollten und ob sie wirklich die Reichweite verbessern.',
        },
        {
          question: 'Kannst du bei Fritzbox-Internetproblemen helfen?',
          answer:
            'Ja. Ich grenze ein, ob Fritzbox, Anschluss, WLAN oder Endgerät betroffen ist. Eine echte Anbieterstörung kann nur der Anbieter beheben.',
        },
        {
          question: 'Muss ich mein Fritzbox-Passwort schicken?',
          answer:
            'Nein. Zugangsdaten solltest du nicht per Chat senden. Wenn sie gebraucht werden, gibst du sie selbst vor Ort ein.',
        },
        {
          question: 'Hilfst du auch bei Telefonie über Fritzbox?',
          answer:
            'Ich kann einfache Einstellungen und offensichtliche Fehler einordnen. Bei Anbieterfreischaltung oder Vertragsdaten muss oft der Anbieter helfen.',
        },
      ],
      related: ['router-entstoerung', 'mesh-wlan-einrichten', 'netzwerk-wlan'],
    }),
  topicPage({
      slug: 'mesh-wlan-einrichten',
      icon: 'router',
      code: 'TOP/MESH/15',
      title: 'Mesh WLAN einrichten',
      shortTitle: 'Mesh WLAN',
      description:
        'Mesh WLAN und Repeater in Ludwigsburg einrichten, wenn WLAN nicht alle Räume erreicht oder ständig abbricht.',
      tags: ['Mesh', 'Repeater', 'WLAN'],
      seoTitle: 'Mesh WLAN einrichten Ludwigsburg | Repeater & Fritzbox',
      seoDescription:
        'Mesh WLAN einrichten in Ludwigsburg: Fritzbox Mesh, Repeater, WLAN-Reichweite, Funklöcher und stabile Verbindung für Wohnung, Haus oder kleines Büro.',
      keywords:
        'Mesh WLAN einrichten Ludwigsburg, WLAN Repeater einrichten, Fritzbox Mesh Hilfe, WLAN Reichweite verbessern, Funkloch Wohnung, WLAN Hilfe Ludwigsburg',
      heroLead: 'WLAN soll im ganzen Zuhause ankommen.',
      heroAccent: 'Mesh richtig platzieren statt blind kaufen.',
      heroText:
        'Repeater und Mesh helfen nur, wenn sie richtig eingesetzt werden. Ich prüfe Räume, Routerstandort, vorhandene Geräte und richte das WLAN so ein, dass es dort stabiler wird, wo du es wirklich nutzt.',
      price: 'Bei dir vor Ort ab 49 € · Hardware nur nach Absprache',
      audienceHint: 'Für Wohnungen, Häuser, Homeoffice und kleine Räume mit schlechter WLAN-Abdeckung.',
      situations: [
        {
          title: 'WLAN reicht nicht bis ins Arbeitszimmer',
          text: 'Im Flur geht es noch, im Arbeitszimmer oder Obergeschoss wird es langsam.',
        },
        {
          title: 'Repeater bringt kaum Verbesserung',
          text: 'Ein Repeater ist vorhanden, aber die Verbindung bleibt schwach oder instabil.',
        },
        {
          title: 'Handy springt zwischen Netzwerken',
          text: 'Mehrere WLAN-Namen verwirren Geräte oder sorgen für Abbrüche.',
        },
        {
          title: 'Streaming oder Videocalls ruckeln',
          text: 'Internet ist da, aber gerade dort schwach, wo es gebraucht wird.',
        },
      ],
      solutions: [
        {
          title: 'WLAN-Bereiche prüfen',
          text: 'Räume, Nutzung und typische Störstellen gemeinsam ansehen.',
        },
        {
          title: 'Routerstandort bewerten',
          text: 'Oft entscheidet die Position mehr als die teuerste Zusatzhardware.',
        },
        {
          title: 'Mesh oder Repeater koppeln',
          text: 'Geräte korrekt verbinden, benennen und praktisch testen.',
        },
        {
          title: 'Netzwerknamen ordnen',
          text: 'Ein verständliches WLAN für den Alltag statt verwirrender Doppelnetze.',
        },
        {
          title: 'Geräte priorisieren',
          text: 'Homeoffice, Fernseher, Smartphone oder Drucker dort testen, wo sie genutzt werden.',
        },
        {
          title: 'Grenzen offen sagen',
          text: 'Wenn Verkabelung oder andere Hardware sinnvoller ist, bekommst du das ehrlich gesagt.',
        },
      ],
      confidenceTitle: 'Mesh ist kein Zauberwort.',
      confidenceText:
        'Ein Mesh-System kann viel verbessern, aber nur bei passender Platzierung und sauberer Einrichtung. Ich schaue auf den echten Alltag in deiner Wohnung oder deinem Betrieb.',
      confidencePoints: [
        'Vorhandene Geräte zuerst prüfen',
        'Funklöcher praktisch testen',
        'Keine Hardware auf Verdacht',
        'WLAN dort prüfen, wo du es nutzt',
      ],
      faqs: [
        {
          question: 'Brauche ich Mesh oder reicht ein Repeater?',
          answer:
            'Das hängt von Wohnung, Routerstandort, Wänden und Nutzung ab. Ich prüfe zuerst die Situation und empfehle dann eine passende Lösung.',
        },
        {
          question: 'Kannst du vorhandene Repeater einrichten?',
          answer:
            'Ja, wenn sie kompatibel und technisch sinnvoll einsetzbar sind.',
        },
        {
          question: 'Warum ist WLAN trotz Repeater langsam?',
          answer:
            'Oft steht der Repeater zu weit vom Router weg oder wiederholt bereits ein schwaches Signal. Dann sieht die Anzeige gut aus, aber die Leistung bleibt schlecht.',
        },
        {
          question: 'Hilfst du auch in kleinen Firmen?',
          answer:
            'Ja, bei pragmatischen WLAN-Lösungen für kleine Büros, Praxen oder Arbeitsbereiche in Ludwigsburg und Umgebung.',
        },
      ],
      related: ['netzwerk-wlan', 'fritzbox-hilfe', 'router-entstoerung'],
    }),
]
