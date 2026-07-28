import type { ServicePageData } from '../types'
import { topicPage } from './topicFactory'

export const responseTopicPages: ServicePageData[] = [
  topicPage({
      slug: 'fernwartung',
      icon: 'bot',
      code: 'TOP/REM/10',
      title: 'Fernwartung',
      shortTitle: 'Fernwartung',
      description:
        'Sichere Fernhilfe mit RustDesk bei PC-, Windows-, E-Mail- und Programmproblemen, wenn kein Vor-Ort-Termin nötig ist.',
      tags: ['Remote', 'RustDesk', 'Schnellhilfe'],
      seoTitle: 'Fernwartung Ludwigsburg | Remote IT-Hilfe',
      seoDescription:
        'Fernwartung und Remote IT-Hilfe in Ludwigsburg: PC-, Windows-, E-Mail- und Programmprobleme schnell prüfen, wenn Hilfe aus der Ferne ausreicht.',
      keywords:
        'Fernwartung Ludwigsburg, Remote IT Hilfe, PC Fernhilfe, Windows Fernwartung, Computerhilfe online, IT Support remote',
      heroLead: 'Hilfe aus der Ferne.',
      heroAccent: 'Wenn Vor-Ort nicht nötig ist.',
      heroText:
        'Viele Software-, Windows- oder E-Mail-Probleme lassen sich per Fernwartung schneller klären. Dafür brauchst du RustDesk auf deinem Windows-PC. Du bleibst am Gerät und siehst, was passiert.',
      price: 'Fernhilfe ab 25 €',
      audienceHint: 'Für schnelle Hilfe bei Problemen, die ohne Hardware-Anfassen lösbar sind.',
      situations: [
        {
          title: 'Ein Programm macht Probleme',
          text: 'Fehlermeldungen, Einstellungen oder Updates können oft per Fernhilfe geprüft werden.',
        },
        {
          title: 'E-Mail oder Outlook spinnt',
          text: 'Konten, Servermeldungen oder Standardprogramme lassen sich häufig remote einrichten.',
        },
        {
          title: 'Windows braucht Unterstützung',
          text: 'Einstellungen, Updates oder kleinere Fehler können gemeinsam geprüft werden.',
        },
        {
          title: 'Du möchtest nicht auf einen Termin warten',
          text: 'Wenn es remote sinnvoll ist, kann schneller mit der Prüfung gestartet werden.',
        },
      ],
      solutions: [
        {
          title: 'Sichere Verbindung erklären',
          text: 'Du bekommst erklärt, wie RustDesk gestartet wird und wie du die Fernwartung jederzeit beenden kannst.',
        },
        {
          title: 'RustDesk herunterladen',
          text: 'Die Windows-Datei liegt direkt auf der Website bereit. Starte sie erst, wenn du mit Andrej sprichst.',
        },
        {
          title: 'Problem gemeinsam prüfen',
          text: 'Ich sehe den Bildschirm nur mit deiner Zustimmung und arbeite nachvollziehbar.',
        },
        {
          title: 'Programme und Einstellungen richten',
          text: 'Viele Softwarethemen lassen sich direkt im laufenden System bearbeiten.',
        },
        {
          title: 'Grenzen erkennen',
          text: 'Wenn Hardware, WLAN oder Anschluss betroffen sind, empfehle ich Vor-Ort-Hilfe.',
        },
        {
          title: 'Erklärung währenddessen',
          text: 'Du kannst jederzeit fragen, was gerade passiert.',
        },
        {
          title: 'Direkt beenden können',
          text: 'Du behältst die Kontrolle über die Verbindung.',
        },
      ],
      confidenceTitle: 'Fernwartung nur mit deiner Kontrolle.',
      confidenceText:
        'Remote-Hilfe soll sich sicher anfühlen. Du musst nichts blind freigeben und kannst die Verbindung jederzeit beenden.',
      confidencePoints: [
        'Nur mit deiner Zustimmung',
        'Ideal für Software und E-Mail',
        'Keine Passwörter per Nachricht',
        'Vor-Ort, wenn remote nicht passt',
      ],
      faqs: [
        {
          question: 'Ist Fernwartung sicher?',
          answer:
            'Ja, wenn sie bewusst gestartet wird und du die Kontrolle behältst. Lade RustDesk nur von dieser Website oder der offiziellen Quelle und nenne ID oder Code nur, wenn du aktiv mit Andrej sprichst.',
        },
        {
          question: 'Muss ich RustDesk installieren?',
          answer:
            'Für normale Fernhilfe reicht die bereitgestellte RustDesk-Datei in der Regel zum Starten. Für bestimmte Admin- oder Sicherheitsfenster kann zusätzliche Freigabe oder Installation nötig sein.',
        },
        {
          question: 'Welche Probleme gehen per Fernwartung?',
          answer:
            'Typisch sind Windows-Einstellungen, Programme, E-Mail, Office und kleinere Softwareprobleme.',
        },
        {
          question: 'Wann reicht Fernwartung nicht?',
          answer:
            'Bei Hardwaredefekten, WLAN-Reichweite, Verkabelung oder Routerstandort ist vor Ort meist sinnvoller.',
        },
      ],
      related: ['programme', 'email', 'windows-einrichten'],
    }),
  topicPage({
      slug: 'it-notdienst',
      icon: 'router',
      code: 'TOP/SOS/11',
      title: 'IT-Notdienst',
      shortTitle: 'IT-Notdienst',
      description:
        'Schnelle IT-Hilfe, wenn PC, Internet, E-Mail oder ein wichtiger Arbeitsplatz plötzlich ausfällt.',
      tags: ['Schnellhilfe', 'Ausfall', 'Priorität'],
      seoTitle: 'IT-Notdienst Ludwigsburg | Schnelle PC- & WLAN-Hilfe',
      seoDescription:
        'IT-Notdienst in Ludwigsburg: schnelle Hilfe bei PC-Ausfall, Internetproblem, E-Mail-Störung oder dringendem Technikproblem. Vor Ort oder per Fernhilfe.',
      keywords:
        'IT Notdienst Ludwigsburg, PC Notdienst, Computer Notdienst Ludwigsburg, WLAN Notdienst, schnelle IT Hilfe, Internet Ausfall Hilfe',
      heroLead: 'Wenn Technik jetzt ausfällt.',
      heroAccent: 'Schnell klären, was möglich ist.',
      heroText:
        'Nicht jedes Problem ist ein echter Notfall, aber manche Technik muss schnell wieder laufen. Ich priorisiere Ausfälle ehrlich und sage direkt, ob Fernhilfe oder Vor-Ort-Hilfe sinnvoll ist.',
      price: 'Schnellhilfe nach Verfügbarkeit · Kosten vorher klären',
      audienceHint: 'Für dringende Fälle, bei denen PC, Internet, E-Mail oder Arbeitsplatz gerade blockieren.',
      situations: [
        {
          title: 'PC oder Laptop fällt plötzlich aus',
          text: 'Ein wichtiges Gerät startet nicht oder ist für Arbeit, Schule oder Alltag sofort nötig.',
        },
        {
          title: 'Internet oder Router ist weg',
          text: 'Homeoffice, Telefonie oder wichtige Geräte hängen am Anschluss.',
        },
        {
          title: 'E-Mail funktioniert nicht',
          text: 'Wichtige Nachrichten können nicht gesendet oder empfangen werden.',
        },
        {
          title: 'Ein kleiner Betrieb steht',
          text: 'Ein Arbeitsplatz, Drucker oder Netzwerkproblem blockiert den Ablauf.',
        },
      ],
      solutions: [
        {
          title: 'Dringlichkeit einschätzen',
          text: 'Kurz klären, was betroffen ist und ob sofortige Hilfe realistisch ist.',
        },
        {
          title: 'Erste sichere Schritte',
          text: 'Nur sinnvolle Basics prüfen, ohne Daten oder Geräte zu gefährden.',
        },
        {
          title: 'Fernhilfe prüfen',
          text: 'Wenn möglich, schnell remote starten und die Ursache eingrenzen.',
        },
        {
          title: 'Vor-Ort-Termin klären',
          text: 'Wenn Hardware, Router oder Verkabelung betroffen sind, wird ein Termin vor Ort sinnvoll.',
        },
        {
          title: 'Arbeitsfähigkeit priorisieren',
          text: 'Erst wieder nutzbar machen, danach Ursachen und dauerhafte Lösung besprechen.',
        },
        {
          title: 'Grenzen offen sagen',
          text: 'Wenn Spezialreparatur oder Anbieter nötig ist, bekommst du das klar gesagt.',
        },
      ],
      confidenceTitle: 'Dringend heißt: ehrlich priorisieren.',
      confidenceText:
        'Ich verspreche keine Wunder rund um die Uhr. Aber wenn es dringend ist, klären wir schnell, was machbar und sinnvoll ist.',
      confidencePoints: [
        'Schnelle Ersteinschätzung',
        'Vor Ort oder Fernhilfe',
        'Kosten vorher ansprechen',
        'Keine riskanten Experimente',
      ],
      faqs: [
        {
          question: 'Bietest du einen echten 24/7-Notdienst?',
          answer:
            'Nein, nicht als garantierten 24/7-Dienst. Ich biete schnelle Hilfe nach Verfügbarkeit und sage ehrlich, was zeitlich möglich ist.',
        },
        {
          question: 'Was soll ich bei einem IT-Notfall zuerst tun?',
          answer:
            'Keine hektischen Experimente. Notiere, was ausgefallen ist, ob andere Geräte betroffen sind, und ruf kurz an.',
        },
        {
          question: 'Hilfst du kleinen Betrieben bei Ausfällen?',
          answer:
            'Ja, besonders bei einzelnen Arbeitsplätzen, Druckern, E-Mail, Netzwerk oder Routerproblemen.',
        },
      ],
      related: ['fernwartung', 'router-entstoerung', 'pc-system'],
    }),
  topicPage({
      slug: 'pc-langsam',
      icon: 'laptop',
      code: 'TOP/SLOW/12',
      title: 'PC langsam',
      shortTitle: 'PC langsam',
      description:
        'Hilfe in Ludwigsburg, wenn PC oder Laptop langsam geworden sind, Programme ewig laden oder Windows nur noch träge reagiert.',
      tags: ['Langsam', 'Windows', 'Analyse'],
      seoTitle: 'PC langsam Ludwigsburg | Laptop schneller machen',
      seoDescription:
        'PC langsam in Ludwigsburg? Hilfe, wenn Laptop oder Computer träge reagieren, Programme lange laden oder Windows hängt. Ursache prüfen, sauber erklären, sinnvoll lösen.',
      keywords:
        'PC langsam Ludwigsburg, Laptop langsam, Computer langsam, Windows langsam, PC schneller machen, Laptop hängt, PC Hilfe Ludwigsburg',
      heroLead: 'Wenn der PC nur noch kriecht.',
      heroAccent: 'Erst Ursache finden, dann aufräumen.',
      heroText:
        'Ein langsamer PC muss nicht sofort ersetzt werden. Ich prüfe, ob Windows, Programme, Autostarts, Speicher, Updates oder Hardware die Ursache sind und erkläre dir verständlich, was wirklich sinnvoll ist.',
      price: 'Fernhilfe ab 25 € · Bei dir vor Ort ab 49 €',
      audienceHint: 'Für alle, deren PC oder Laptop im Alltag zu langsam geworden ist.',
      situations: [
        {
          title: 'Programme starten sehr langsam',
          text: 'Browser, Office oder E-Mail brauchen ewig, obwohl früher alles schneller war.',
        },
        {
          title: 'Windows hängt nach dem Start',
          text: 'Nach dem Einschalten dauert es lange, bis man wirklich arbeiten kann.',
        },
        {
          title: 'Der Laptop wird laut oder heiß',
          text: 'Der Lüfter dreht hoch, das Gerät reagiert träge oder friert zwischendurch ein.',
        },
        {
          title: 'Du willst nichts Falsches löschen',
          text: 'Unklare Programme, volle Laufwerke oder Warnungen sollen sauber eingeordnet werden.',
        },
      ],
      solutions: [
        {
          title: 'Systemauslastung prüfen',
          text: 'Schauen, ob Programme, Updates, Speicher oder Hintergrundprozesse das System bremsen.',
        },
        {
          title: 'Autostarts einordnen',
          text: 'Unnötige Startprogramme erkennen, ohne wichtige Funktionen blind abzuschalten.',
        },
        {
          title: 'Speicherplatz bewerten',
          text: 'Volle Laufwerke und alte Daten strukturiert ansehen, bevor etwas gelöscht wird.',
        },
        {
          title: 'Updates und Treiber prüfen',
          text: 'Windows, Programme und Geräte auf offensichtliche Konflikte kontrollieren.',
        },
        {
          title: 'Hardware realistisch einschätzen',
          text: 'Wenn RAM, SSD oder Alter des Geräts eine Rolle spielen, bekommst du eine ehrliche Empfehlung.',
        },
        {
          title: 'Alltagstest machen',
          text: 'Am Ende zählt, ob Browser, E-Mail und deine wichtigen Programme wieder nutzbar laufen.',
        },
      ],
      confidenceTitle: 'Nicht jeder langsame PC ist kaputt.',
      confidenceText:
        'Viele Geräte werden durch Software, Autostarts, volle Laufwerke oder Updates ausgebremst. Ich prüfe erst, bevor teure Ersatzteile oder ein neuer PC empfohlen werden.',
      confidencePoints: [
        'Keine blind gelöschten Daten',
        'Erst Analyse, dann Empfehlung',
        'Verständlich für Senioren',
        'Vor Ort oder per Fernhilfe',
      ],
      faqs: [
        {
          question: 'Kann man einen alten PC wieder schneller machen?',
          answer:
            'Oft ja, zumindest spürbar. Ob es sich lohnt, hängt von Alter, Speicher, Laufwerk und Zustand ab. Ich sage ehrlich, wenn ein Upgrade oder Ersatz sinnvoller ist.',
        },
        {
          question: 'Löschst du einfach Programme?',
          answer:
            'Nein. Ich prüfe zuerst, was gebraucht wird und erkläre dir, was entfernt oder deaktiviert werden kann.',
        },
        {
          question: 'Geht die Prüfung per Fernwartung?',
          answer:
            'Bei vielen Software-Ursachen ja. Wenn Hardware, Überhitzung oder Geräusche wichtig sind, ist ein Termin bei dir vor Ort besser.',
        },
        {
          question: 'Was kann ich vorher selbst sicher versuchen?',
          answer:
            'Starte den PC einmal normal neu und notiere, wann er besonders langsam ist: direkt nach dem Start, im Browser, bei E-Mail oder bei bestimmten Programmen.',
        },
      ],
      related: ['pc-system', 'programme', 'windows-einrichten'],
    }),
  topicPage({
      slug: 'pc-startet-nicht',
      icon: 'laptop',
      code: 'TOP/BOOT/13',
      title: 'PC startet nicht',
      shortTitle: 'Startproblem',
      description:
        'Hilfe in Ludwigsburg, wenn PC oder Laptop nicht mehr starten, der Bildschirm schwarz bleibt oder Windows nicht hochfährt.',
      tags: ['Startet nicht', 'Windows', 'Laptop'],
      seoTitle: 'PC startet nicht Ludwigsburg | Laptop geht nicht an',
      seoDescription:
        'PC startet nicht in Ludwigsburg? Hilfe bei schwarzem Bildschirm, Laptop geht nicht an, Windows bootet nicht oder Rechner startet nur kurz.',
      keywords:
        'PC startet nicht Ludwigsburg, Laptop geht nicht an, Computer geht nicht an, Bildschirm bleibt schwarz, Windows startet nicht, PC Hilfe Ludwigsburg',
      heroLead: 'Schwarzer Bildschirm. Kein Plan.',
      heroAccent: 'Ruhig bleiben, sauber eingrenzen.',
      heroText:
        'Wenn ein PC nicht startet, ist Panik selten hilfreich. Ich prüfe mit dir, ob Strom, Bildschirm, Windows, Datenträger oder Hardware betroffen sind und welche Schritte sicher sind.',
      price: 'Bei dir vor Ort ab 49 € · Fernhilfe nur wenn erreichbar',
      audienceHint: 'Für alle, deren Computer, Laptop oder Windows gerade gar nicht mehr nutzbar startet.',
      situations: [
        {
          title: 'Der Bildschirm bleibt schwarz',
          text: 'Das Gerät scheint an zu sein, aber es erscheint kein Bild oder nur kurz ein Logo.',
        },
        {
          title: 'Windows startet nicht',
          text: 'Es kommt ein Ladebildschirm, eine Reparaturmeldung oder der PC startet immer wieder neu.',
        },
        {
          title: 'Laptop reagiert gar nicht',
          text: 'Keine Lampe, kein Lüfter oder nur ein kurzes Blinken beim Einschalten.',
        },
        {
          title: 'Wichtige Daten sind auf dem Gerät',
          text: 'Dann sollte nicht wild experimentiert werden, damit die Lage nicht schlimmer wird.',
        },
      ],
      solutions: [
        {
          title: 'Strom und Anzeige trennen',
          text: 'Prüfen, ob das Problem am Gerät, Netzteil, Kabel, Bildschirm oder Windows liegt.',
        },
        {
          title: 'Startverhalten beobachten',
          text: 'Lampen, Lüfter, Töne, Logos und Fehlermeldungen richtig einordnen.',
        },
        {
          title: 'Windows-Start prüfen',
          text: 'Sichere Reparatur- und Diagnosewege bewerten, ohne Daten unnötig zu gefährden.',
        },
        {
          title: 'Datenrisiko einschätzen',
          text: 'Wenn Daten wichtig sind, werden riskante Experimente vermieden.',
        },
        {
          title: 'Hardwaregrenze erkennen',
          text: 'Wenn Netzteil, Akku, Laufwerk oder Mainboard verdächtig sind, bekommst du eine klare Einschätzung.',
        },
        {
          title: 'Nächsten Schritt klären',
          text: 'Vor Ort, Spezialreparatur oder Neuinstallation wird erst nach realistischer Prüfung empfohlen.',
        },
      ],
      confidenceTitle: 'Keine Rettungsversuche auf Verdacht.',
      confidenceText:
        'Bei Startproblemen kann falsches Herumprobieren Daten gefährden. Ich arbeite deshalb vorsichtig und bespreche jeden riskanteren Schritt vorher.',
      confidencePoints: [
        'Datenrisiko beachten',
        'Strom, Anzeige und Windows trennen',
        'Keine BIOS-Bastelei per Chat',
        'Vor-Ort-Prüfung bei Hardwareverdacht',
      ],
      faqs: [
        {
          question: 'Kannst du helfen, wenn gar nichts mehr angeht?',
          answer:
            'Ja, die Ursache kann aber Hardware sein. Dann ist ein Termin bei dir vor Ort meistens sinnvoller als Fernhilfe.',
        },
        {
          question: 'Soll ich selbst Reparaturprogramme ausprobieren?',
          answer:
            'Nicht, wenn wichtige Daten auf dem Gerät sind. Ruf lieber kurz an, bevor du riskante Schritte startest.',
        },
        {
          question: 'Kannst du Daten retten?',
          answer:
            'Ich kann die Lage vorsichtig einschätzen und einfache sichere Optionen prüfen. Bei schweren Defekten oder hohem Datenwert ist ein spezialisierter Datenretter sinnvoll.',
        },
        {
          question: 'Was soll ich vor dem Anruf notieren?',
          answer:
            'Ob Lampen leuchten, Lüfter laufen, ein Logo erscheint, Pieptöne kommen oder eine Fehlermeldung angezeigt wird.',
        },
      ],
      related: ['pc-system', 'it-notdienst', 'fernwartung'],
    }),
]
