import type { ServicePageData } from '../types'
import { topicPage } from './topicFactory'

export const setupTopicPages: ServicePageData[] = [
  topicPage({
      slug: 'installation',
      icon: 'laptop',
      code: 'TOP/INS/01',
      title: 'Installation',
      shortTitle: 'Installation',
      description:
        'Installation von Geräten, Programmen, Treibern und Zubehör in Ludwigsburg, verständlich eingerichtet und sauber getestet.',
      tags: ['Geräte', 'Software', 'Treiber'],
      seoTitle: 'Installation Ludwigsburg | Geräte & Software einrichten',
      seoDescription:
        'Hilfe bei Installation in Ludwigsburg: neue Geräte, Programme, Treiber und Zubehör einrichten. Verständlich, sauber getestet und bei dir vor Ort oder per Fernhilfe.',
      keywords:
        'Installation Ludwigsburg, Software installieren, Gerät einrichten, Treiber installieren, PC Einrichtung, technische Hilfe Installation',
      heroLead: 'Installation ohne Rätselraten.',
      heroAccent: 'Damit neue Technik wirklich nutzbar ist.',
      heroText:
        'Neue Technik ist erst dann fertig, wenn sie im Alltag funktioniert. Ich installiere Geräte, Programme, Treiber und Zubehör so, dass du danach nicht allein vor Meldungen, Konten oder Einstellungen sitzt.',
      price: 'Fernhilfe ab 25 € · Bei dir vor Ort ab 49 €',
      audienceHint: 'Für alle, die neue Technik nicht nur ausgepackt, sondern wirklich einsatzbereit haben möchten.',
      situations: [
        {
          title: 'Ein neues Gerät soll eingerichtet werden',
          text: 'Laptop, PC, Drucker oder Zubehör sind vorhanden, aber Konten, Updates oder Verbindungen fehlen noch.',
        },
        {
          title: 'Ein Programm lässt sich nicht installieren',
          text: 'Die Installation bricht ab, fragt nach unklaren Berechtigungen oder landet in Fehlermeldungen.',
        },
        {
          title: 'Treiber oder Updates fehlen',
          text: 'Ein Gerät wird nicht erkannt oder funktioniert nur teilweise, weil Software oder Treiber nicht passen.',
        },
        {
          title: 'Nach der Installation ist alles unübersichtlich',
          text: 'Symbole, Konten, Standardprogramme und Einstellungen sollen sinnvoll sortiert werden.',
        },
      ],
      solutions: [
        {
          title: 'Geräte startklar machen',
          text: 'Grundinstallation, Updates, Benutzerkonto und wichtige Einstellungen nachvollziehbar vorbereiten.',
        },
        {
          title: 'Software installieren',
          text: 'Benötigte Programme sauber einrichten und unnötige Zusatzprogramme vermeiden.',
        },
        {
          title: 'Treiber prüfen',
          text: 'Passende Treiber und Updates auswählen, statt blind irgendwo etwas herunterzuladen.',
        },
        {
          title: 'Zubehör verbinden',
          text: 'Drucker, Maus, Tastatur, Kamera oder andere Geräte praktisch testen.',
        },
        {
          title: 'Sicherheit beachten',
          text: 'Konten, Passwörter und Berechtigungen bewusst behandeln, ohne sensible Daten offenzulegen.',
        },
        {
          title: 'Kurze Einweisung geben',
          text: 'Du bekommst erklärt, wo du die wichtigsten Dinge findest und was du lieber nicht anklicken solltest.',
        },
      ],
      confidenceTitle: 'Nicht nur installieren. Fertig machen.',
      confidenceText:
        'Eine Installation ist keine Klick-Show. Entscheidend ist, ob danach alles verständlich und zuverlässig nutzbar ist.',
      confidencePoints: [
        'Keine unnötigen Zusatzprogramme',
        'Updates und Treiber mit Sinn',
        'Funktionstest nach Einrichtung',
        'Erklärung in normalen Worten',
      ],
      faqs: [
        {
          question: 'Installierst du auch Programme, die ich selbst gekauft habe?',
          answer:
            'Ja, wenn Lizenz, Zugangsdaten und Installationsquelle vorhanden sind. Ich achte darauf, dass keine unnötige Zusatzsoftware mitinstalliert wird.',
        },
        {
          question: 'Kannst du neue Geräte komplett vorbereiten?',
          answer:
            'Ja. Dazu gehören je nach Bedarf Updates, Benutzerkonto, Programme, Drucker, WLAN und eine kurze Erklärung.',
        },
        {
          question: 'Geht Installation auch per Fernwartung?',
          answer:
            'Viele Software-Installationen gehen per Fernhilfe. Bei Hardware, Druckern oder Netzwerkgeräten ist ein Vor-Ort-Termin oft sinnvoller.',
        },
      ],
      related: ['windows-einrichten', 'programme', 'drucker'],
    }),
  topicPage({
      slug: 'it-consulting',
      icon: 'bot',
      code: 'TOP/CON/02',
      title: 'IT Consulting',
      shortTitle: 'IT Consulting',
      description:
        'Verständliche IT-Beratung für Privatpersonen und kleine Betriebe, wenn Entscheidungen, Anschaffungen oder Abläufe klarer werden sollen.',
      tags: ['Beratung', 'Planung', 'Entscheidung'],
      seoTitle: 'IT Consulting Ludwigsburg | IT-Beratung verständlich',
      seoDescription:
        'IT Consulting in Ludwigsburg für Privatpersonen und kleine Betriebe: Kaufberatung, Technikplanung, Netzwerk, Arbeitsplatz und digitale Abläufe verständlich einordnen.',
      keywords:
        'IT Consulting Ludwigsburg, IT Beratung Ludwigsburg, Technikberatung, PC Kaufberatung, IT Hilfe kleine Unternehmen, Digitalberatung',
      heroLead: 'Erst verstehen. Dann entscheiden.',
      heroAccent: 'IT-Beratung ohne Verkaufsdruck.',
      heroText:
        'Wenn nicht klar ist, welches Gerät, welcher Anbieter oder welcher nächste Schritt sinnvoll ist, helfe ich beim Sortieren. Ziel ist eine Entscheidung, die zu deinem Alltag oder Betrieb passt.',
      price: 'Beratung nach Aufwand · klare Abstimmung vorab',
      audienceHint: 'Für Menschen und kleine Betriebe, die vor einer Technikentscheidung stehen.',
      situations: [
        {
          title: 'Ein neues Gerät soll gekauft werden',
          text: 'PC, Laptop, Drucker oder Router sollen passend sein, ohne unnötig teuer zu werden.',
        },
        {
          title: 'Ein kleiner Betrieb braucht Struktur',
          text: 'Arbeitsplätze, E-Mail, Dateien oder Netzwerk sind gewachsen und fühlen sich unübersichtlich an.',
        },
        {
          title: 'Anbieter und Tarife sind verwirrend',
          text: 'Internet, Geräte, Software-Abos oder Cloud-Dienste sollen nüchtern eingeordnet werden.',
        },
        {
          title: 'Eine Idee soll technisch geprüft werden',
          text: 'Vor einer Investition soll klar werden, ob eine Website, ein Tool oder eine Automation sinnvoll ist.',
        },
      ],
      solutions: [
        {
          title: 'Bedarf klären',
          text: 'Nicht das teuerste Gerät gewinnt, sondern die Lösung, die wirklich zum Einsatz passt.',
        },
        {
          title: 'Optionen vergleichen',
          text: 'Vor- und Nachteile verständlich gegenüberstellen, ohne Hersteller-Gerede.',
        },
        {
          title: 'Arbeitsplätze einordnen',
          text: 'Geräte, Netzwerk, E-Mail und Programme als Gesamtsystem betrachten.',
        },
        {
          title: 'Risiken benennen',
          text: 'Unklare Kosten, Abhängigkeiten und technische Sackgassen früh sichtbar machen.',
        },
        {
          title: 'Umsetzung planen',
          text: 'Die nächsten Schritte so strukturieren, dass sie machbar bleiben.',
        },
        {
          title: 'Prioritäten setzen',
          text: 'Erst die Dinge lösen, die im Alltag wirklich stören oder Geld und Zeit kosten.',
        },
      ],
      confidenceTitle: 'Beratung heißt nicht: dir etwas aufschwatzen.',
      confidenceText:
        'Gute IT-Beratung macht Entscheidungen leichter. Wenn etwas nicht nötig ist, sage ich das genauso klar wie eine Empfehlung.',
      confidencePoints: [
        'Neutral und verständlich',
        'Privat und kleine Betriebe im Blick',
        'Keine falschen Google-Versprechen',
        'Umsetzung nur nach Absprache',
      ],
      faqs: [
        {
          question: 'Hilfst du bei Kaufentscheidungen?',
          answer:
            'Ja. Ich schaue auf deinen Bedarf und erkläre, welche Geräte oder Lösungen sinnvoll sind und welche eher übertrieben wären.',
        },
        {
          question: 'Ist das auch für kleine Firmen gedacht?',
          answer:
            'Ja. Besonders kleine Büros und lokale Betriebe profitieren oft von klarer, pragmatischer IT-Beratung.',
        },
        {
          question: 'Muss ich danach etwas bei dir kaufen?',
          answer:
            'Nein. Beratung und Umsetzung können getrennt bleiben. Du entscheidest, was davon du machen möchtest.',
        },
      ],
      related: ['webseiten', 'tools-automation', 'netzwerk-wlan'],
    }),
  topicPage({
      slug: 'windows-einrichten',
      icon: 'laptop',
      code: 'TOP/WIN/03',
      title: 'Windows einrichten',
      shortTitle: 'Windows',
      description:
        'Windows einrichten, aktualisieren und verständlich vorbereiten: Benutzer, Datenschutz, Updates, Programme und Alltagseinstellungen.',
      tags: ['Windows', 'Updates', 'Einstellungen'],
      seoTitle: 'Windows einrichten Ludwigsburg | PC startklar machen',
      seoDescription:
        'Windows einrichten in Ludwigsburg: neuer PC oder Laptop mit Updates, Benutzerkonto, Datenschutz, Programmen und Drucker verständlich startklar machen.',
      keywords:
        'Windows einrichten Ludwigsburg, Windows Hilfe, neuen PC einrichten, Laptop einrichten, Windows 11 einrichten, PC startklar machen',
      heroLead: 'Windows sauber starten.',
      heroAccent: 'Ohne Konto- und Update-Chaos.',
      heroText:
        'Ein neuer Windows-PC wirkt oft fertig, ist es aber selten. Ich richte Benutzer, Updates, Datenschutz, Standardprogramme und wichtige Alltagspunkte so ein, dass du das Gerät direkt nutzen kannst.',
      price: 'Fernhilfe ab 25 € · Einrichtung vor Ort ab 49 €',
      audienceHint: 'Für alle, die einen Windows-PC oder Laptop verständlich und ordentlich vorbereitet haben möchten.',
      situations: [
        {
          title: 'Neuer PC oder Laptop ist da',
          text: 'Windows startet, aber Konto, Updates, Programme und Drucker sind noch nicht sinnvoll eingerichtet.',
        },
        {
          title: 'Windows fragt ständig nach Dingen',
          text: 'Meldungen zu Konto, OneDrive, Updates oder Sicherheit wirken verwirrend.',
        },
        {
          title: 'Daten sollen übernommen werden',
          text: 'Dokumente, Bilder oder wichtige Dateien sollen nach Absprache sinnvoll auf das neue Gerät.',
        },
        {
          title: 'Das Startmenü ist unübersichtlich',
          text: 'Vorinstallierte Programme, Werbung und Standard-Apps sollen aufgeräumt werden.',
        },
      ],
      solutions: [
        {
          title: 'Benutzerkonto einrichten',
          text: 'Passendes Konto anlegen oder vorhandenes Konto sauber einbinden.',
        },
        {
          title: 'Updates durchführen',
          text: 'Windows- und Treiberupdates kontrolliert installieren und Neustarts einplanen.',
        },
        {
          title: 'Datenschutz prüfen',
          text: 'Wichtige Einstellungen verständlich erklären und bewusst setzen.',
        },
        {
          title: 'Programme vorbereiten',
          text: 'Browser, Office, PDF, E-Mail oder weitere benötigte Software einrichten.',
        },
        {
          title: 'Drucker und WLAN verbinden',
          text: 'Alltagsgeräte direkt testen, damit später nicht der erste Druck scheitert.',
        },
        {
          title: 'Aufräumen',
          text: 'Unnötige Autostarts und störende Vorinstallationen prüfen.',
        },
      ],
      confidenceTitle: 'Windows soll dir gehören, nicht umgekehrt.',
      confidenceText:
        'Ich erkläre die wichtigen Entscheidungen so, dass du weißt, wofür du dich entscheidest und wo du später etwas findest.',
      confidencePoints: [
        'Konto und Datenschutz verständlich',
        'Updates kontrolliert erledigen',
        'Programme passend zum Alltag',
        'Einweisung nach der Einrichtung',
      ],
      faqs: [
        {
          question: 'Richtest du Windows 11 ein?',
          answer:
            'Ja. Ich helfe bei neuer Einrichtung, Updates, Benutzerkonto, Programmen und den wichtigsten Alltagseinstellungen.',
        },
        {
          question: 'Kannst du Daten vom alten PC übernehmen?',
          answer:
            'Ja, wenn die Daten zugänglich sind. Umfang und Vorgehen werden vorher besprochen.',
        },
        {
          question: 'Muss ich ein Microsoft-Konto verwenden?',
          answer:
            'Das hängt vom Gerät und der gewünschten Nutzung ab. Ich erkläre dir die Unterschiede und richte es passend ein.',
        },
      ],
      related: ['benutzerkonten', 'office-installation', 'pc-system'],
    }),
  topicPage({
      slug: 'benutzerkonten',
      icon: 'laptop',
      code: 'TOP/ACC/04',
      title: 'Benutzerkonten',
      shortTitle: 'Konten',
      description:
        'Hilfe bei Windows-, Microsoft-, E-Mail- und Geräte-Konten: sortieren, einrichten, Zugänge verstehen und sicher nutzen.',
      tags: ['Konten', 'Login', 'Sicherheit'],
      seoTitle: 'Benutzerkonten Hilfe Ludwigsburg | Microsoft & Windows',
      seoDescription:
        'Hilfe bei Benutzerkonten in Ludwigsburg: Windows-, Microsoft-, E-Mail- und Geräte-Konten verständlich einrichten, sortieren und sicher nutzen.',
      keywords:
        'Benutzerkonto Hilfe Ludwigsburg, Microsoft Konto Hilfe, Windows Konto einrichten, Login Probleme, Passwort Hilfe, Konto einrichten',
      heroLead: 'Konten ohne Panik.',
      heroAccent: 'Damit Anmeldung wieder verständlich wird.',
      heroText:
        'Viele Technikprobleme sind eigentlich Konto-Probleme: Anmeldung, Passwort, E-Mail, Microsoft-Konto oder Gerätefreigabe. Ich helfe beim Sortieren, ohne sensible Daten unnötig offenzulegen.',
      price: 'Fernhilfe ab 25 € · vor Ort ab 49 €',
      audienceHint: 'Für alle, die bei Logins, Konten oder Zugängen nicht mehr sicher sind, was zusammengehört.',
      situations: [
        {
          title: 'Windows fragt nach einem Microsoft-Konto',
          text: 'Du weißt nicht, ob du schon ein Konto hast oder welches Passwort gemeint ist.',
        },
        {
          title: 'Mehrere Konten sind durcheinander',
          text: 'E-Mail, Windows, Office und Handy nutzen unterschiedliche Zugänge.',
        },
        {
          title: 'Ein Passwort funktioniert nicht',
          text: 'Anmeldung schlägt fehl oder Wiederherstellungswege sind unklar.',
        },
        {
          title: 'Ein Familiengerät braucht eigene Nutzer',
          text: 'Mehrere Personen sollen denselben PC nutzen, ohne alles zu vermischen.',
        },
      ],
      solutions: [
        {
          title: 'Konten zuordnen',
          text: 'Erkennen, welches Konto wofür genutzt wird und wo es sinnvoll eingebunden ist.',
        },
        {
          title: 'Windows-Nutzer einrichten',
          text: 'Benutzer für Alltag, Familie oder Betrieb sauber trennen.',
        },
        {
          title: 'Microsoft-Konto erklären',
          text: 'Klären, wann es gebraucht wird und welche Vor- oder Nachteile es hat.',
        },
        {
          title: 'Sicherheitsoptionen prüfen',
          text: 'Wiederherstellungs-E-Mail, Telefonnummer und einfache Schutzmaßnahmen einordnen.',
        },
        {
          title: 'Anmeldeprobleme eingrenzen',
          text: 'Prüfen, ob Passwort, Internet, Kontoart oder Gerät die Ursache ist.',
        },
        {
          title: 'Dokumentation für dich',
          text: 'Du bekommst verständlich erklärt, welche Konten wichtig sind und was du behalten solltest.',
        },
      ],
      confidenceTitle: 'Passwörter bleiben privat.',
      confidenceText:
        'Ich brauche keine geheimen Daten zum Mitnehmen. Wenn du etwas eingibst, machst du das selbst und ich erkläre nur den sicheren Weg.',
      confidencePoints: [
        'Keine Passwörter per Nachricht',
        'Konten verständlich sortieren',
        'Familien- und Einzelgeräte trennen',
        'Sicherheitswege prüfen',
      ],
      faqs: [
        {
          question: 'Muss ich dir mein Passwort geben?',
          answer:
            'Nein. Passwörter solltest du selbst eingeben. Ich leite dich durch den Vorgang und erkläre, worauf du achten musst.',
        },
        {
          question: 'Hilfst du beim Microsoft-Konto?',
          answer:
            'Ja, ich helfe beim Einrichten, Einordnen und bei typischen Anmeldeproblemen.',
        },
        {
          question: 'Kannst du mehrere Benutzer auf einem PC einrichten?',
          answer:
            'Ja. Das ist besonders sinnvoll bei Familiengeräten oder gemeinsam genutzten Arbeitsplätzen.',
        },
      ],
      related: ['windows-einrichten', 'email', 'office-installation'],
    }),
  topicPage({
      slug: 'email',
      icon: 'laptop',
      code: 'TOP/MAIL/05',
      title: 'E-Mail',
      shortTitle: 'E-Mail',
      description:
        'E-Mail-Hilfe in Ludwigsburg: Konto einrichten, Mailprogramm verbinden, Smartphone/PC synchronisieren und Versandprobleme prüfen.',
      tags: ['E-Mail', 'Outlook', 'Smartphone'],
      seoTitle: 'E-Mail Hilfe Ludwigsburg | Konto & Outlook einrichten',
      seoDescription:
        'E-Mail-Hilfe in Ludwigsburg: Mailkonto einrichten, Outlook oder Mail-App verbinden, Probleme mit Senden, Empfangen und Anmeldung verständlich lösen.',
      keywords:
        'E-Mail Hilfe Ludwigsburg, Outlook einrichten, Mail Konto einrichten, E-Mail geht nicht, Mail App Hilfe, IMAP SMTP Hilfe',
      heroLead: 'E-Mail soll einfach ankommen.',
      heroAccent: 'Auf PC, Laptop und Smartphone.',
      heroText:
        'Wenn E-Mails nicht senden, nicht ankommen oder auf jedem Gerät anders aussehen, wird es schnell nervig. Ich richte E-Mail-Konten und Programme nachvollziehbar ein und prüfe typische Fehlerquellen.',
      price: 'Fernhilfe ab 25 € · vor Ort ab 49 €',
      audienceHint: 'Für Menschen, die E-Mail auf PC, Laptop oder Smartphone zuverlässig nutzen möchten.',
      situations: [
        {
          title: 'E-Mails kommen nicht an',
          text: 'Posteingang bleibt leer, obwohl Internet funktioniert und andere Apps laden.',
        },
        {
          title: 'E-Mails lassen sich nicht senden',
          text: 'Nachrichten bleiben im Postausgang oder es erscheinen Servermeldungen.',
        },
        {
          title: 'Outlook oder Mail-App soll eingerichtet werden',
          text: 'Das Konto soll auf PC, Laptop oder Smartphone nutzbar sein.',
        },
        {
          title: 'Passwort oder Anbieter ist unklar',
          text: 'Nicht klar ist, ob das E-Mail-Passwort, ein App-Passwort oder ein anderes Konto gemeint ist.',
        },
      ],
      solutions: [
        {
          title: 'Konto einrichten',
          text: 'E-Mail-Adresse in Outlook, Windows Mail, Smartphone oder Browser sauber verbinden.',
        },
        {
          title: 'Senden und Empfangen prüfen',
          text: 'Servereinstellungen, Passwort und Verbindung nachvollziehbar testen.',
        },
        {
          title: 'Ordner erklären',
          text: 'Posteingang, Gesendet, Spam und Archiv verständlich sortieren.',
        },
        {
          title: 'Geräte synchronisieren',
          text: 'Prüfen, ob Mails auf mehreren Geräten sinnvoll abgeglichen werden.',
        },
        {
          title: 'Sicherheit beachten',
          text: 'Verdächtige Mails, Zwei-Faktor-Anmeldung und Passwortwege erklären.',
        },
        {
          title: 'Alltag vereinfachen',
          text: 'Signatur, Standard-App oder Favoriten so setzen, dass E-Mail leichter wird.',
        },
      ],
      confidenceTitle: 'Keine Angst vor Serverwörtern.',
      confidenceText:
        'IMAP, SMTP oder App-Passwort müssen dich nicht interessieren. Ich übersetze das in normale Schritte und prüfe, was wirklich gebraucht wird.',
      confidencePoints: [
        'Einrichtung auf mehreren Geräten',
        'Outlook und Mail-Apps',
        'Senden und Empfangen testen',
        'Phishing-Hinweise erklären',
      ],
      faqs: [
        {
          question: 'Richtest du Outlook ein?',
          answer:
            'Ja. Ich helfe bei Outlook, Windows Mail und gängigen Mail-Apps auf Smartphone oder PC.',
        },
        {
          question: 'Warum kommt meine E-Mail nicht an?',
          answer:
            'Das kann an Passwort, Servereinstellungen, Speicherplatz, Spamordner oder Anbieterproblemen liegen. Ich grenze es Schritt für Schritt ein.',
        },
        {
          question: 'Hilfst du auch bei verdächtigen E-Mails?',
          answer:
            'Ja, ich kann mit dir prüfen, ob eine Mail verdächtig wirkt und welche Schritte sinnvoll sind. Keine Links blind anklicken.',
        },
      ],
      related: ['benutzerkonten', 'office-installation', 'programme'],
    }),
  topicPage({
      slug: 'drucker',
      icon: 'laptop',
      code: 'TOP/PRN/06',
      title: 'Drucker',
      shortTitle: 'Drucker',
      description:
        'Drucker einrichten und Druckerprobleme lösen: WLAN-Drucker, Treiber, Scanner, Warteschlange und Verbindung prüfen.',
      tags: ['Drucker', 'Scanner', 'WLAN'],
      seoTitle: 'Drucker Hilfe Ludwigsburg | Drucker einrichten',
      seoDescription:
        'Drucker-Hilfe in Ludwigsburg: WLAN-Drucker einrichten, Treiber installieren, Scanner verbinden und Druckprobleme verständlich lösen.',
      keywords:
        'Drucker Hilfe Ludwigsburg, Drucker einrichten, WLAN Drucker geht nicht, Drucker verbindet nicht, Scanner einrichten, Drucker Treiber',
      heroLead: 'Drucken ohne Kampf.',
      heroAccent: 'Wenn Drucker wieder Drucker sein sollen.',
      heroText:
        'Drucker sind oft klein, aber maximal nervig. Ich prüfe Verbindung, Treiber, Warteschlange und Scannerfunktion, damit Drucken und Scannen wieder nachvollziehbar funktionieren.',
      price: 'Vor Ort ab 49 € · Fernhilfe möglich',
      audienceHint: 'Für Haushalte und kleine Büros, in denen Drucker oder Scanner zuverlässig laufen sollen.',
      situations: [
        {
          title: 'Drucker wird nicht gefunden',
          text: 'PC oder Smartphone sehen den Drucker nicht, obwohl er eingeschaltet ist.',
        },
        {
          title: 'WLAN-Drucker verbindet nicht',
          text: 'Der Drucker ist im Netzwerk, verschwindet aber immer wieder oder druckt nicht.',
        },
        {
          title: 'Druckauftrag bleibt hängen',
          text: 'Die Warteschlange blockiert und neue Drucke kommen nicht raus.',
        },
        {
          title: 'Scanner funktioniert nicht',
          text: 'Drucken geht vielleicht, aber Scannen oder Speichern klappt nicht.',
        },
      ],
      solutions: [
        {
          title: 'Verbindung prüfen',
          text: 'USB, WLAN, Netzwerk und Gerät genau unterscheiden, statt nur neu zu starten.',
        },
        {
          title: 'Treiber installieren',
          text: 'Passende Software einrichten und unnötige Zusatzpakete vermeiden.',
        },
        {
          title: 'Warteschlange bereinigen',
          text: 'Blockierte Aufträge entfernen und den Druckdienst sauber testen.',
        },
        {
          title: 'Scanner einrichten',
          text: 'Scan-App, Speicherort und Bedienung verständlich vorbereiten.',
        },
        {
          title: 'Mehrere Geräte verbinden',
          text: 'PC, Laptop oder Smartphone mit demselben Drucker nutzbar machen.',
        },
        {
          title: 'Kurze Bedienhilfe',
          text: 'Erklären, wie du künftig druckst, scannst und typische Meldungen einordnest.',
        },
      ],
      confidenceTitle: 'Druckerprobleme sind selten deine Schuld.',
      confidenceText:
        'Treiber, WLAN und Hersteller-Apps sind oft unnötig verwirrend. Ich bringe Ordnung rein und teste am Ende mit einem echten Druck.',
      confidencePoints: [
        'WLAN und USB prüfen',
        'Druck und Scan testen',
        'Keine unnötige Hersteller-App-Flut',
        'Auch für kleine Büros',
      ],
      faqs: [
        {
          question: 'Richtest du WLAN-Drucker ein?',
          answer:
            'Ja. Ich verbinde Drucker mit Router und Geräten und teste danach einen echten Druck.',
        },
        {
          question: 'Kannst du auch Scanner einrichten?',
          answer:
            'Ja. Scannen, Speicherort und passende App können mit eingerichtet werden.',
        },
        {
          question: 'Geht Druckerhilfe per Fernwartung?',
          answer:
            'Manches geht per Fernhilfe. Wenn der Drucker selbst oder WLAN beteiligt ist, ist vor Ort oft besser.',
        },
      ],
      related: ['router-entstoerung', 'installation', 'pc-system'],
    }),
  topicPage({
      slug: 'programme',
      icon: 'laptop',
      code: 'TOP/APP/07',
      title: 'Programme',
      shortTitle: 'Programme',
      description:
        'Programme installieren, aktualisieren, aufräumen und verständlich erklären: Browser, PDF, Sicherheit, Tools und Alltagssoftware.',
      tags: ['Software', 'Updates', 'Alltag'],
      seoTitle: 'Programme installieren Ludwigsburg | Software-Hilfe',
      seoDescription:
        'Software-Hilfe in Ludwigsburg: Programme installieren, aktualisieren, einrichten, Autostarts prüfen und Alltagssoftware verständlich nutzbar machen.',
      keywords:
        'Programme installieren Ludwigsburg, Software Hilfe, Programm geht nicht, Software einrichten, PC Programme aktualisieren, PDF Browser Hilfe',
      heroLead: 'Programme sollen helfen.',
      heroAccent: 'Nicht den PC vollmüllen.',
      heroText:
        'Ob Browser, PDF, Sicherheitsprogramm oder Spezialsoftware: Ich installiere und prüfe Programme so, dass sie deinen Alltag unterstützen und nicht alles langsamer oder unübersichtlicher machen.',
      price: 'Fernhilfe ab 25 € · vor Ort ab 49 €',
      audienceHint: 'Für alle, die Programme installieren, aktualisieren oder besser verstehen möchten.',
      situations: [
        {
          title: 'Ein Programm startet nicht',
          text: 'Es öffnet sich nicht, stürzt ab oder zeigt eine unklare Meldung.',
        },
        {
          title: 'Software soll installiert werden',
          text: 'Download, Lizenz, Setup oder Sicherheitshinweise sind unklar.',
        },
        {
          title: 'Zu viele Programme nerven',
          text: 'Autostarts, Testversionen oder Werbeprogramme machen den PC unübersichtlich.',
        },
        {
          title: 'Standardprogramme stimmen nicht',
          text: 'PDFs, Links, Bilder oder E-Mails öffnen sich im falschen Programm.',
        },
      ],
      solutions: [
        {
          title: 'Programme installieren',
          text: 'Benötigte Software aus seriösen Quellen einrichten.',
        },
        {
          title: 'Updates prüfen',
          text: 'Aktualisierungen kontrolliert durchführen und Fehlermeldungen einordnen.',
        },
        {
          title: 'Autostarts aufräumen',
          text: 'Prüfen, was wirklich beim Start laufen muss.',
        },
        {
          title: 'Standard-Apps setzen',
          text: 'Browser, PDF, Mail und weitere Standards passend einstellen.',
        },
        {
          title: 'Fehler eingrenzen',
          text: 'Programmproblem, Windows-Problem oder Konto-Thema sauber unterscheiden.',
        },
        {
          title: 'Bedienung erklären',
          text: 'Kurze Einweisung für die Funktionen, die du wirklich brauchst.',
        },
      ],
      confidenceTitle: 'Nicht jedes Tool verdient Platz auf deinem PC.',
      confidenceText:
        'Ich achte darauf, dass Programme sinnvoll, seriös und nachvollziehbar installiert werden.',
      confidencePoints: [
        'Seriöse Quellen',
        'Keine unnötigen Toolbars',
        'Standards richtig setzen',
        'Programme verständlich erklären',
      ],
      faqs: [
        {
          question: 'Installierst du gekaufte Software?',
          answer:
            'Ja, wenn Lizenz und Zugang vorhanden sind. Ich helfe auch beim Einordnen, was genau gebraucht wird.',
        },
        {
          question: 'Kannst du unnötige Programme entfernen?',
          answer:
            'Ja, nach Prüfung. Ich lösche nicht blind, sondern erkläre, was vermutlich gebraucht wird und was nicht.',
        },
        {
          question: 'Hilfst du, wenn ein Programm nicht startet?',
          answer:
            'Ja. Ich prüfe Fehlermeldung, Updates, Berechtigungen und Windows-Zusammenhang.',
        },
      ],
      related: ['office-installation', 'installation', 'windows-einrichten'],
    }),
  topicPage({
      slug: 'office-installation',
      icon: 'laptop',
      code: 'TOP/OFF/08',
      title: 'Office Installation',
      shortTitle: 'Office',
      description:
        'Microsoft Office oder Alternativen installieren, aktivieren, einrichten und für Dokumente, Tabellen und E-Mail nutzbar machen.',
      tags: ['Office', 'Word', 'Excel'],
      seoTitle: 'Office Installation Ludwigsburg | Word, Excel & Outlook',
      seoDescription:
        'Office Installation in Ludwigsburg: Microsoft 365, Word, Excel, Outlook oder Alternativen installieren, aktivieren und verständlich einrichten.',
      keywords:
        'Office Installation Ludwigsburg, Microsoft Office einrichten, Word Excel installieren, Outlook Hilfe, Microsoft 365 Hilfe, Office aktivieren',
      heroLead: 'Office ohne Aktivierungsstress.',
      heroAccent: 'Word, Excel und Outlook startklar.',
      heroText:
        'Office scheitert oft nicht am Schreiben, sondern an Konto, Lizenz oder Aktivierung. Ich helfe beim Installieren, Einrichten und Erklären der wichtigsten Funktionen.',
      price: 'Fernhilfe ab 25 € · vor Ort ab 49 €',
      audienceHint: 'Für alle, die Word, Excel, Outlook oder Microsoft 365 zuverlässig nutzen möchten.',
      situations: [
        {
          title: 'Office soll installiert werden',
          text: 'Microsoft 365, Office-Lizenz oder eine Alternative soll auf dem Gerät laufen.',
        },
        {
          title: 'Aktivierung klappt nicht',
          text: 'Lizenz, Microsoft-Konto oder Fehlermeldung passen nicht zusammen.',
        },
        {
          title: 'Outlook soll E-Mail abrufen',
          text: 'E-Mail-Konto, Kalender oder Kontakte sollen in Outlook nutzbar sein.',
        },
        {
          title: 'Dateien öffnen falsch',
          text: 'Word-, Excel- oder PDF-Dateien landen im falschen Programm.',
        },
      ],
      solutions: [
        {
          title: 'Office installieren',
          text: 'Microsoft Office, Microsoft 365 oder passende Alternativen sauber einrichten.',
        },
        {
          title: 'Lizenz prüfen',
          text: 'Einordnen, welches Konto oder welche Lizenz zum Gerät gehört.',
        },
        {
          title: 'Outlook verbinden',
          text: 'E-Mail, Kalender und Grundfunktionen nachvollziehbar vorbereiten.',
        },
        {
          title: 'Standarddateien setzen',
          text: 'Word, Excel und PDF sinnvoll mit passenden Programmen verknüpfen.',
        },
        {
          title: 'Grundbedienung erklären',
          text: 'Speichern, Drucken, Anhänge und einfache Dokumente verständlich zeigen.',
        },
        {
          title: 'Cloud-Fragen klären',
          text: 'OneDrive und lokale Dateien so einordnen, dass nichts versehentlich verschwindet.',
        },
      ],
      confidenceTitle: 'Office ist mehr Konto als Programm.',
      confidenceText:
        'Gerade Microsoft 365 hängt stark an Konten und Lizenzen. Ich sortiere das verständlich, bevor wild installiert wird.',
      confidencePoints: [
        'Lizenz und Konto prüfen',
        'Outlook und Mail einrichten',
        'OneDrive verständlich erklären',
        'Dokumente praktisch testen',
      ],
      faqs: [
        {
          question: 'Kannst du Microsoft 365 einrichten?',
          answer:
            'Ja, inklusive Installation, Anmeldung, Aktivierung und Grundkonfiguration.',
        },
        {
          question: 'Hilfst du bei Outlook?',
          answer:
            'Ja. Outlook und E-Mail-Konten können gemeinsam eingerichtet und getestet werden.',
        },
        {
          question: 'Muss ich Office kaufen?',
          answer:
            'Nicht immer. Es gibt je nach Bedarf Alternativen. Ich erkläre dir die Optionen neutral.',
        },
      ],
      related: ['email', 'benutzerkonten', 'programme'],
    }),
  topicPage({
      slug: 'router-entstoerung',
      icon: 'router',
      code: 'TOP/RTR/09',
      title: 'Router Entstörung',
      shortTitle: 'Router',
      description:
        'Router- und Internetprobleme eingrenzen: Ausfälle, WLAN-Abbrüche, Neustarts, Anbietergerät, Fritzbox und Heimnetz prüfen.',
      tags: ['Router', 'Internet', 'Fritzbox'],
      seoTitle: 'Router Entstörung Ludwigsburg | Internet & Fritzbox Hilfe',
      seoDescription:
        'Router Entstörung in Ludwigsburg: Internet fällt aus, Fritzbox oder Router macht Probleme, WLAN bricht ab. Ursache prüfen und verständlich lösen.',
      keywords:
        'Router Entstörung Ludwigsburg, Router Hilfe, Fritzbox Hilfe, Internet geht nicht, WLAN bricht ab, Router einrichten, Netzwerk Störung',
      heroLead: 'Wenn der Router wieder Theater macht.',
      heroAccent: 'Störung finden statt blind neu starten.',
      heroText:
        'Internetprobleme können vom Anbieter, Router, WLAN, Kabel oder einzelnen Geräten kommen. Ich grenze ein, wo die Störung sitzt und was wirklich sinnvoll ist.',
      price: 'Vor Ort ab 49 € · Analyse nach Aufwand',
      audienceHint: 'Für Haushalte, Homeoffice und kleine Betriebe mit instabilem Internet oder Routerproblemen.',
      situations: [
        {
          title: 'Internet ist plötzlich weg',
          text: 'WLAN ist da oder weg, aber Webseiten und Apps laden nicht zuverlässig.',
        },
        {
          title: 'Router startet neu oder blinkt',
          text: 'Statuslampen, Fehlermeldungen oder Neustarts wirken unklar.',
        },
        {
          title: 'WLAN bricht immer wieder ab',
          text: 'Besonders in bestimmten Räumen oder bei bestimmten Geräten treten Ausfälle auf.',
        },
        {
          title: 'Nach Anbieterwechsel geht nichts',
          text: 'Neuer Anschluss, neue Zugangsdaten oder neuer Router sind noch nicht sauber eingerichtet.',
        },
      ],
      solutions: [
        {
          title: 'Störungsbild eingrenzen',
          text: 'Anbieter, Router, WLAN und Endgerät getrennt prüfen.',
        },
        {
          title: 'Routerstatus prüfen',
          text: 'Meldungen, Verbindung und Grundkonfiguration nachvollziehbar ansehen.',
        },
        {
          title: 'WLAN-Konfiguration ordnen',
          text: 'Name, Passwort, Frequenzen und Mesh sinnvoll einordnen.',
        },
        {
          title: 'Geräte testen',
          text: 'PC, Handy, Drucker oder Fernseher praktisch prüfen, nicht nur theoretisch.',
        },
        {
          title: 'Anbietergrenze erkennen',
          text: 'Wenn es am Anschluss liegt, bekommst du klare Hinweise für den Anbieter-Kontakt.',
        },
        {
          title: 'Stabile Lösung umsetzen',
          text: 'Konfiguration, Standort oder Erweiterungen passend zur Wohnung oder zum Büro wählen.',
        },
      ],
      confidenceTitle: 'Nicht jeder Ausfall ist WLAN.',
      confidenceText:
        'Ich trenne sauber: Anschluss, Router, Funk, Kabel oder Gerät. Dadurch wird schneller klar, was wirklich getan werden muss.',
      confidencePoints: [
        'Router und Anschluss unterscheiden',
        'Fritzbox und gängige Router',
        'WLAN-Abbrüche prüfen',
        'Anbieter-Themen klar benennen',
      ],
      faqs: [
        {
          question: 'Hilfst du bei Fritzbox-Problemen?',
          answer:
            'Ja, bei Einrichtung, WLAN, Mesh, Internetproblemen und typischen Routermeldungen.',
        },
        {
          question: 'Kannst du eine Anbieterstörung beheben?',
          answer:
            'Eine echte Anbieterstörung kann nur der Anbieter beheben. Ich kann aber klar eingrenzen, ob es danach aussieht.',
        },
        {
          question: 'Muss der Router ersetzt werden?',
          answer:
            'Nicht automatisch. Erst wird geprüft, ob Einstellungen, Standort oder vorhandene Geräte das Problem verursachen.',
        },
      ],
      related: ['netzwerk-wlan', 'drucker', 'it-notdienst'],
    }),
]
