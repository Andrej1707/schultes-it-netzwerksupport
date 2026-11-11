import type { GuideArticle } from './types'

export const everydayExpansionGuides: GuideArticle[] = [
  {
    slug: 'kalender-gemeinsam-nutzen',
    title: 'Kalender gemeinsam nutzen: Termine teilen, Privates schützen',
    description: 'Ein gemeinsamer Familien- oder Projektkalender ohne Passworttausch: passenden Dienst wählen, Rechte einstellen und die Synchronisierung prüfen.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-kalender-gemeinsam-nutzen',
    imageAlt: 'Tablet mit unscharfer Kalenderansicht neben Papierplaner und zwei Buntstiften',
    updated: '2026-11-11',
    intro: 'Ein gemeinsamer Kalender spart Rückfragen, wenn alle denselben Stand sehen. Dafür musst du weder dein persönliches Konto weitergeben noch sämtliche privaten Termine veröffentlichen. Am zuverlässigsten ist ein eigener Kalender für den gemeinsamen Zweck: etwa Familie, Vereinsarbeit oder ein kleines Projekt. Danach klärst du, wer nur mitlesen und wer Termine verändern darf.',
    takeaways: [
      'Einen eigenen gemeinsamen Kalender statt das gesamte persönliche Konto freigeben.',
      'Berechtigungen gezielt vergeben und Einladungen mit dem richtigen Konto annehmen.',
      'Änderungen, Zeitzone und Erinnerungen auf beiden Geräten praktisch testen.',
    ],
    sections: [
      {
        heading: 'Einen gemeinsamen Ort für Termine festlegen',
        paragraphs: [
          'Sammelt zuerst, welche Kalenderkonten und Geräte tatsächlich vorhanden sind. Ein iPhone kann unterschiedliche Kalenderkonten anzeigen; daraus folgt aber nicht, dass jeder Dienst dieselben Freigaben unterstützt. Für einen privat geteilten iCloud-Kalender benötigen die Beteiligten einen Apple Account und iCloud. Bei einem Firmenkonto kann die Organisation externe Freigaben begrenzen.',
          'Legt einen eindeutigen Namen und eine eigene Farbe fest, beispielsweise „Familie gemeinsam“. Private Arzttermine bleiben im persönlichen Kalender, während ein gemeinsamer Ausflug in den geteilten gehört. Bestimmt außerdem eine Person, die den Kalender verwaltet und bei einem späteren Kontowechsel rechtzeitig an die Übergabe denkt.',
        ],
      },
      {
        heading: 'Einladen und nur nötige Rechte vergeben',
        paragraphs: [
          'In Google Kalender öffnest du am Computer die Einstellungen und Freigabe des gewünschten Kalenders. Dort lassen sich bestimmte Personen hinzufügen und ihre Rechte auswählen. Reines Anzeigen reicht, wenn jemand nur Termine kennen muss. Bearbeitungsrechte braucht, wer selbst planen soll; die Verwaltung weiterer Freigaben ist eine zusätzliche Verantwortung.',
          'Bei iCloud kannst du ebenfalls zwischen Bearbeiten und einer schreibgeschützten Teilnahme unterscheiden. Ein öffentlicher Kalenderlink ist kein Ersatz für eine gezielte private Einladung. Teile solche Links nicht für vertrauliche Familien- oder Arbeitsinformationen. Für Outlook prüfst du die Möglichkeiten des verwendeten Kontos und der konkreten App.',
        ],
        steps: [
          'Die vollständige E-Mail-Adresse der eingeladenen Person kontrollieren.',
          'Die Einladung mit dem dafür vorgesehenen eigenen Konto annehmen.',
          'Auf jedem Gerät prüfen, ob der gemeinsame Kalender eingeblendet ist.',
        ],
      },
      {
        heading: 'Mit einem harmlosen Termin gemeinsam testen',
        paragraphs: [
          'Erstelle einen Testtermin ohne persönliche Daten und wähle beim Speichern ausdrücklich den gemeinsamen Kalender. Lass die zweite Person kontrollieren, ob Titel, Uhrzeit und Dauer stimmen. Verschiebe den Termin anschließend um einige Minuten. Wenn Bearbeitung vorgesehen ist, sollte auch die andere Person eine Änderung speichern und du diese sehen können.',
          'Prüft bei unterschiedlichen Aufenthaltsorten die Zeitzonen und bei ganztägigen Ereignissen das richtige Datum. Erinnerungen und Änderungsnachrichten können pro Person oder Gerät anders eingestellt sein. Ein sichtbarer Termin beweist daher noch nicht, dass beide rechtzeitig eine Benachrichtigung erhalten. Testet das mit einem eigenen, unkritischen Erinnerungstermin.',
        ],
      },
      {
        heading: 'Doppelte Einträge und alte Freigaben vermeiden',
        paragraphs: [
          'Ein importierter Kalenderstand ist etwas anderes als ein laufend synchronisierter Kalender. Auch ein Kalenderabonnement über einen Link kann sich verzögert aktualisieren und nur lesbar sein. Wenn Änderungen ausbleiben, prüfe deshalb zuerst, ob du eine Kopie, ein Abonnement oder die echte Freigabe geöffnet hast, bevor du sämtliche Termine erneut importierst.',
          'Vereinbart kurze Regeln für Absagen, Titel und wiederkehrende Termine. Prüft bei einer Änderung, ob nur dieses Ereignis oder die gesamte Terminserie betroffen ist. Entfernt nicht mehr benötigte Teilnehmer aus der Freigabe und kontrolliert regelmäßig, wer Zugriff hat. Ein kurzer gemeinsamer Blick verhindert später unnötige Missverständnisse.',
        ],
      },
    ],
    pitfall: 'Ein gemeinsames Passwort macht die Einrichtung scheinbar einfacher, vermischt aber persönliche Daten und erschwert die Wiederherstellung. Jede Person behält ihr eigenes Konto. Kalenderrechte sind der passende Weg, um ausschließlich die gewünschten Termine zu teilen.',
    whenToGetHelp: 'Hilfe lohnt sich, wenn unterschiedliche Anbieter beteiligt sind, Firmenrichtlinien die Freigabe verhindern oder Termine mehrfach erscheinen. Halte Geräte, Kalenderanbieter und das konkrete Fehlerbild bereit; echte Terminbeschreibungen und Zugangsdaten musst du dafür nicht versenden.',
    relatedSlugs: ['kontakte-auf-neues-handy', 'digitale-abos-ueberblick', 'zwei-faktor-anmeldung'],
    servicePath: '/leistungen/benutzerkonten/',
    sources: [
      { title: 'Google: Kalender freigeben', url: 'https://support.google.com/calendar/answer/37082?hl=de' },
      { title: 'Apple: iCloud-Kalender auf dem iPhone teilen', url: 'https://support.apple.com/de-de/guide/iphone/iph7613c4fb/ios' },
      { title: 'Microsoft: Kalenderfreigaben in Microsoft 365', url: 'https://support.microsoft.com/de-de/outlook/calendar-sharing-in-microsoft-365' },
    ],
  },
  {
    slug: 'kontakte-auf-neues-handy',
    title: 'Kontakte aufs neue Handy: vollständig umziehen statt doppelt importieren',
    description: 'Prüfe Speicherorte, sichere lokale Kontakte und kontrolliere den Umzug auf ein neues Smartphone, bevor du das alte Gerät zurücksetzt.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-kontakte-auf-neues-handy',
    imageAlt: 'Älteres und neueres Smartphone mit unscharfen Kontaktlisten neben einem USB-Kabel',
    updated: '2026-11-11',
    intro: 'Eine volle Kontaktliste auf dem alten Handy bedeutet noch nicht, dass alle Einträge im selben Konto gespeichert sind. Telefonnummern können im Gerät, auf der SIM-Karte oder in mehreren Cloud-Konten liegen. Deshalb beginnt ein sicherer Umzug mit einer Bestandsaufnahme. Erst wenn wichtige Einträge auf dem neuen Smartphone vollständig angekommen sind, wird das alte Gerät zurückgesetzt.',
    takeaways: [
      'Vor dem Umzug herausfinden, in welchen Konten die Kontakte gespeichert sind.',
      'Einen passenden Übertragungsweg nutzen und unnötige Mehrfachimporte vermeiden.',
      'Nummern, E-Mail-Adressen und neue Einträge prüfen, bevor das alte Handy wegkommt.',
    ],
    sections: [
      {
        heading: 'Die tatsächlichen Speicherorte sichtbar machen',
        paragraphs: [
          'Öffne auf dem alten Gerät die Kontakte-App und suche nach Listen, Konten oder einem Anzeigefilter. Zeige die Quellen möglichst einzeln an. Ein Eintrag unter „Telefon“ oder „Lokal“ ist nicht automatisch im Google- oder Apple-Konto gesichert. Auch Kontakte aus einem Arbeitskonto können angezeigt werden, ohne in deinem privaten Konto zu liegen.',
          'Notiere die beteiligten Konten und prüfe einige wichtige Personen: Sind mehrere Telefonnummern, E-Mail-Adressen und Notizen vorhanden? Eine Gesamtzahl hilft als Vergleich, ersetzt aber diese Stichprobe nicht. Verknüpfte Kontakte können in der App als eine Person erscheinen, obwohl mehrere zugrunde liegende Einträge existieren.',
        ],
      },
      {
        heading: 'Synchronisierung oder Übertragung bewusst wählen',
        paragraphs: [
          'Bereits im Google-Konto gespeicherte Kontakte werden nach der Anmeldung auf einem neuen Android-Gerät wieder synchronisiert. Für lokale und SIM-Kontakte gibt es je nach Gerät eine zusätzliche Sicherungs- und Synchronisierungsfunktion. Prüfe dabei das Zielkonto, bevor du sie aktivierst. Eine Firmenadressliste gehört nicht ohne Freigabe in dein privates Konto.',
          'Bei iCloud-Kontakten kontrollierst du auf beiden Apple-Geräten denselben Apple Account und die aktivierte Kontakte-Synchronisierung. Für einen Systemwechsel nutzt du die offizielle Umzugsanleitung des neuen Geräteherstellers. Ein unterstützter Kontakte-Export kann eine zusätzliche Sicherung sein; bewahre diese Datei geschützt auf, denn sie enthält personenbezogene Daten.',
        ],
        steps: [
          'Altes und neues Gerät laden und eine stabile Verbindung herstellen.',
          'Den vorgesehenen Umzugsassistenten oder die Kontosynchronisierung vollständig abschließen.',
          'Bei Rückfragen zu Zusammenführen oder Ersetzen erst die betroffenen Datenquellen prüfen.',
        ],
      },
      {
        heading: 'Den Umzug am neuen Gerät nachweisen',
        paragraphs: [
          'Prüfe nach der Übertragung denselben Kontofilter wie zuvor. Suche wichtige Familienkontakte, eine Person mit mehreren Nummern und einen zuletzt ergänzten Eintrag. Vergleiche auch die E-Mail-Adresse und gegebenenfalls die Anschrift. Wenn ein Kontakt fehlt, kontrolliere zuerst ausgeblendete Listen und den Synchronisierungsstatus, statt sofort den kompletten Import zu wiederholen.',
          'Lege anschließend einen unverfänglichen Testkontakt im gewünschten Standardkonto an. Kontrolliere, ob er auch in der zugehörigen Weboberfläche oder auf einem zweiten eigenen Gerät auftaucht, sofern du Synchronisierung nutzen möchtest. Danach entfernst du den Test wieder. So prüfst du auch, wo künftig neu angelegte Kontakte landen.',
        ],
      },
      {
        heading: 'Erst zum Schluss aufräumen und übergeben',
        paragraphs: [
          'Behalte das alte Handy zunächst verfügbar, bis die wichtigen Alltagsfunktionen auf dem neuen Gerät laufen. Kontakte, Messenger-Verläufe, Fotos und Zwei-Faktor-Anmeldungen sind unterschiedliche Aufgaben. Ein erfolgreicher Kontaktumzug bestätigt nicht automatisch die Wiederherstellung dieser anderen Inhalte. Prüfe sie getrennt, bevor du einen Werksreset startest.',
          'Bereinige doppelte Kontakte erst nach einer Sicherung und kontrolliere die vorgeschlagenen Zusammenführungen einzeln. Zwei Personen können denselben Nachnamen oder dieselbe Firmenrufnummer haben. Zur endgültigen Weitergabe meldest du das alte Gerät nach Herstelleranleitung ab und setzt es zurück; lösche nicht einfach alle synchronisierten Kontakte von Hand.',
        ],
      },
    ],
    pitfall: 'Wer Kontakte auf dem alten Handy löscht, während die Synchronisierung aktiv ist, kann sie auch aus der Cloud und vom neuen Gerät entfernen. Das alte Gerät wird über den vorgesehenen Abmelde- und Rücksetzweg vorbereitet, nicht durch manuelles Leeren des Adressbuchs.',
    whenToGetHelp: 'Unterstützung ist sinnvoll bei mehreren vermischten Konten, einem beschädigten Altgerät oder vielen Dubletten. Eine Liste der Geräte und verwendeten Kontotypen reicht für die erste Einordnung; schicke dafür weder das komplette Adressbuch noch Passwörter.',
    relatedSlugs: ['handy-fotos-sichern', 'zwei-faktor-anmeldung', 'smartphone-fuer-senioren'],
    servicePath: '/leistungen/senioren-handy-hilfe/',
    sources: [
      { title: 'Google: Kontakte auf Gerät und SIM sichern', url: 'https://support.google.com/contacts/answer/9423168?hl=de-DE' },
      { title: 'Google: Zu einem neuen Android-Gerät wechseln', url: 'https://support.google.com/android/answer/6193424?hl=de' },
      { title: 'Apple: iCloud-Kontakte einrichten und verwenden', url: 'https://support.apple.com/de-de/101336' },
    ],
  },
  {
    slug: 'browser-benachrichtigungen-stoppen',
    title: 'Browser-Benachrichtigungen stoppen: Ruhe ohne wichtige Warnungen zu verlieren',
    description: 'Unerwünschte Website-Mitteilungen gezielt blockieren, echte Sicherheitsmeldungen unterscheiden und die Ursache bei wiederkehrenden Einblendungen prüfen.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-browser-benachrichtigungen-stoppen',
    imageAlt: 'Laptop mit ruhiger unscharfer Browseransicht neben Maus und Lesebrille',
    updated: '2026-11-11',
    intro: 'Plötzliche Gewinnmeldungen oder angebliche Virenwarnungen am Bildschirmrand stammen manchmal von einer Website, der Benachrichtigungen erlaubt wurden. Die Einblendung allein beweist keinen Schadsoftwarebefall. Entscheidend ist, welcher Absender und welche Anwendung genannt werden. Statt auf die Meldung zu klicken, öffnest du die Einstellungen des betreffenden Browsers und entziehst der Website gezielt ihre Berechtigung.',
    takeaways: [
      'Browser-Mitteilungen können von Websites stammen und sind nicht automatisch Systemwarnungen.',
      'Die Berechtigung bei der betreffenden Website blockieren, statt alle Schutzmeldungen auszuschalten.',
      'Bei Downloads, Dateneingaben oder wiederkehrenden Meldungen zusätzlich die Ursache prüfen.',
    ],
    sections: [
      {
        heading: 'Absender erkennen, ohne die Meldung zu öffnen',
        paragraphs: [
          'Lies den angezeigten Namen der Anwendung und, falls vorhanden, die Internetadresse. Eine Meldung kann ein bekanntes Sicherheitslogo imitieren und trotzdem aus Chrome oder Firefox kommen. Telefonnummern, Zahlungsaufforderungen und künstlicher Zeitdruck sind Gründe, nicht weiterzuklicken. Eine echte Prüfung führst du über die bereits installierte Sicherheitsanwendung aus, die du selbst öffnest.',
          'Notiere den Absender oder fertige bei Bedarf einen Screenshot ohne persönliche Informationen an. Unterscheide außerdem eine Benachrichtigung am Bildschirmrand von einem neuen Browserfenster und einer Werbefläche innerhalb einer Webseite. Diese Erscheinungen werden an verschiedenen Stellen verwaltet; die passende Einordnung erspart unnötige Änderungen am ganzen System.',
        ],
      },
      {
        heading: 'Die Website-Berechtigung gezielt blockieren',
        paragraphs: [
          'Öffne Chrome über dein normales Programmsymbol. Suche in den Einstellungen nach „Benachrichtigungen“ und öffne die zugehörigen Website-Einstellungen. Kontrolliere die zugelassenen Internetadressen. Bei einer unerwünschten Website stellst du die Berechtigung auf Blockieren. Prüfe die vollständige Adresse; ähnlich klingende Namen können zu völlig unterschiedlichen Websites gehören.',
          'In Firefox findest du die Verwaltung in den Einstellungen bei den Berechtigungen für Benachrichtigungen. Dort kannst du einzelne Websites blockieren und neue Anfragen zum Anzeigen von Benachrichtigungen unterbinden. Die genaue Menüanordnung kann sich ändern; die Einstellungssuche und die verlinkte Herstellerhilfe führen zur passenden Ansicht deiner Version.',
        ],
        steps: [
          'Den Browser und gegebenenfalls das verwendete Profil auswählen.',
          'Die unerwünschte Website in der Berechtigungsliste blockieren.',
          'Änderungen speichern, verdächtige Tabs schließen und das Verhalten beobachten.',
        ],
      },
      {
        heading: 'Wichtige Mitteilungen bewusst behalten',
        paragraphs: [
          'Für manche Dienste sind Mitteilungen nützlich, etwa bei einem bewusst verwendeten Web-Kalender. Lass nur die Seiten zu, deren Benachrichtigungen du tatsächlich erwartest. Du musst einer Website normalerweise keine Benachrichtigungen erlauben, nur um einen Artikel zu lesen. Behauptungen wie „Zulassen drücken, um zu beweisen, dass du kein Roboter bist“ solltest du nicht folgen.',
          'Ein vorübergehender Ruhemodus des Betriebssystems kann Unterbrechungen reduzieren, entfernt jedoch keine Website-Berechtigung. Auch das Schließen eines Tabs reicht nicht zuverlässig: Push-Mitteilungen können unabhängig vom geöffneten Inhalt eintreffen. Bearbeite deshalb die Ursache im Browser und verwende die systemweite Stummschaltung nur für den gewünschten zeitlichen Zweck.',
        ],
      },
      {
        heading: 'Bei weiteren Auffälligkeiten einen Schritt tiefer prüfen',
        paragraphs: [
          'Wenn Meldungen nach dem Blockieren wiederkommen, vergleiche zunächst Absender, Browser und Profil. Vielleicht sendet eine zweite Website oder ein anderes Profil dieselbe Art Werbung. Kontrolliere danach unbekannte Erweiterungen und halte Browser sowie Betriebssystem aktuell. Bei einem verwalteten Arbeitsgerät kann die IT bestimmte Einstellungen vorgeben; entferne diese Verwaltung nicht eigenmächtig.',
          'Falls du aus einer Meldung etwas heruntergeladen, ein Programm gestartet oder Zugangsdaten eingegeben hast, genügt das Blockieren nicht als Abschluss. Notiere, was passiert ist, prüfe das Gerät mit seiner vertrauenswürdigen Sicherheitssoftware und sichere betroffene Konten über ein vertrauenswürdiges Gerät. Installiere keinen angeblichen Reparaturhelfer aus derselben Warnmeldung.',
        ],
      },
    ],
    pitfall: 'Ein Klick auf „Benachrichtigungen zulassen“ kann dauerhaft wirken. Den Browserverlauf zu löschen oder den Browser neu zu starten beseitigt die erteilte Erlaubnis nicht verlässlich. Die konkrete Berechtigung muss geprüft und bei Bedarf blockiert werden.',
    whenToGetHelp: 'Hilfe ist sinnvoll, wenn sich Einstellungen selbst wieder ändern, unbekannte Programme auftauchen oder du bereits auf eine Zahlungs- beziehungsweise Zugangsdatenforderung reagiert hast. Beschreibe den Ablauf und Absender; persönliche Kennwörter gehören nicht in die Anfrage.',
    relatedSlugs: ['browser-erweiterungen-pruefen', 'phishing-erkennen', 'konto-gehackt'],
    servicePath: '/leistungen/programme/',
    sources: [
      { title: 'Google: Benachrichtigungen in Chrome verwalten', url: 'https://support.google.com/chrome/answer/3220216?hl=de-BI' },
      { title: 'Mozilla: Benachrichtigungen in Firefox', url: 'https://support.mozilla.org/de/kb/push-benachrichtigungen-firefox' },
    ],
  },
  {
    slug: 'smart-tv-streaming-probleme',
    title: 'Streaming am Smart-TV stockt: App, Fernseher und WLAN unterscheiden',
    description: 'Mit Vergleichstests findest du heraus, warum Videos hängen oder Apps nicht starten – ohne sofort den Fernseher auf Werkseinstellungen zurückzusetzen.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-smart-tv-streaming-probleme',
    imageAlt: 'Fernbedienung auf einer Sofalehne vor Fernseher und Router im hellen Wohnzimmer',
    updated: '2026-11-11',
    intro: 'Ein ladender Kreis beim Filmabend kann mehrere Ursachen haben: eine einzelne App, ein Problem beim Streamingdienst, die Verbindung zum Router oder den Fernseher selbst. Ein schneller Internetvertrag schließt diese Fehler nicht aus. Mit einigen gezielten Vergleichen findest du die richtige Richtung und vermeidest, dass nach einem unnötigen Werksreset sämtliche Anmeldungen und Einstellungen fehlen.',
    takeaways: [
      'Zuerst verschiedene Apps und ein zweites Gerät vergleichen.',
      'WLAN am Standort des Fernsehers prüfen, nicht nur direkt neben dem Router.',
      'Neustart und Updates vor App-Datenlöschung oder vollständigem Zurücksetzen nutzen.',
    ],
    sections: [
      {
        heading: 'Ein Fehlerbild statt fünf Vermutungen sammeln',
        paragraphs: [
          'Notiere, ob die App gar nicht öffnet, die Anmeldung scheitert oder erst die Wiedergabe stockt. Halte einen vorhandenen Fehlercode und die betroffene Sendung fest. Probiere einen zweiten Titel in derselben App und anschließend einen anderen Streamingdienst. So erkennst du, ob ein einzelner Inhalt oder mehrere Angebote betroffen sind.',
          'Teste den betroffenen Dienst außerdem auf einem Smartphone oder Computer im selben Heimnetz. Läuft dort alles, konzentrierst du dich zunächst auf Fernseher, App und dessen Verbindung. Sind mehrere Geräte betroffen, prüfst du zusätzlich die offizielle Hilfe oder Statusmeldung des Anbieters. Einen gerade gestörten Dienst reparierst du nicht durch eine neue TV-Einrichtung.',
        ],
      },
      {
        heading: 'Die Verbindung am tatsächlichen Standort prüfen',
        paragraphs: [
          'Öffne die Netzwerkeinstellungen des Fernsehers und kontrolliere das verbundene WLAN. Nach einem Routerwechsel kann noch ein altes Netz gespeichert sein. Ein Geschwindigkeitstest direkt am Router sagt wenig über den Empfang hinter einem Schrank oder am anderen Ende der Wohnung aus. Auch ein Smartphone-Vergleich am TV-Standort ist nur ein Hinweis, weil Geräte unterschiedliche Funktechnik besitzen.',
          'Wenn möglich, teste vorübergehend eine geeignete LAN-Verbindung zum Router. Wird die Wiedergabe damit stabil, ist das Funknetz ein sinnvoller nächster Ansatz. Verlege ein Testkabel so, dass niemand darüber stolpert. Beende zum Vergleich große Downloads auf anderen Geräten und teste denselben Inhalt erneut; ändere nicht gleichzeitig sämtliche Routereinstellungen.',
        ],
      },
      {
        heading: 'App und Gerät kontrolliert neu starten',
        paragraphs: [
          'Ein Druck auf die Einschalttaste versetzt viele Fernseher nur in den Bereitschaftsmodus. Nutze die Neustartfunktion oder den für dein Modell beschriebenen Neustart aus der Herstellerhilfe. Unterbrich niemals ein laufendes Systemupdate durch Ziehen des Netzsteckers. Prüfe danach, ob Updates für die TV-Software und die betroffene App angeboten werden.',
          'Kontrolliere bei einer Anmeldemeldung das verwendete Profil und die für diesen Dienst vorgesehene Anmeldung. Wenn du App-Daten löschst oder die App neu installierst, können Anmeldungen und Einstellungen verschwinden. Vergewissere dich deshalb vorher, dass du selbst Zugriff auf dein Konto und den erforderlichen Bestätigungsweg hast.',
        ],
        steps: [
          'Nach einem regulären Neustart denselben Testinhalt abspielen.',
          'Verfügbare offizielle Updates vollständig abschließen.',
          'Erst bei weiter bestehendem App-Fehler die modellspezifische Anleitung zur Reparatur verwenden.',
        ],
      },
      {
        heading: 'Bild, Ton und externe Geräte getrennt betrachten',
        paragraphs: [
          'Bleibt das Bild stabil und nur der Ton fehlt, prüfe zunächst Stummschaltung und den ausgewählten Audioausgang. Bei einem externen Streaminggerät können Soundbar, AV-Receiver und HDMI-Verbindung zusätzlich beteiligt sein. Ein übersichtlicher Vergleich ist die direkte Verbindung des Streaminggeräts mit einem geeigneten Fernseheingang nach Herstelleranleitung.',
          'Ein älterer Smart-TV unterstützt nicht jede aktuelle App dauerhaft. Prüfe Modellbezeichnung und offizielle Kompatibilitätsangaben, bevor du unbekannte Installationsdateien ausprobierst oder neue Hardware kaufst. Bewahre funktionierende Sender-, Bild- und Zugangseinstellungen auf. Ein vollständiges Zurücksetzen ist ein gezielter späterer Schritt, kein notwendiger Beginn jeder Fehlersuche.',
        ],
      },
    ],
    pitfall: 'Ein Werksreset kann Konten, Apps und individuelle Einstellungen entfernen, obwohl die Ursache im WLAN oder beim Anbieter liegt. Führe ihn erst nach den Vergleichstests und mit griffbereiten eigenen Anmelde- und Einrichtungsinformationen durch.',
    whenToGetHelp: 'Unterstützung lohnt sich bei wiederkehrenden Abbrüchen, unübersichtlichen HDMI-Verbindungen oder schwachem Empfang am TV-Standort. Hilfreich sind Modell, App, Fehlercode und die Ergebnisse der Vergleichstests. Ein Passwort oder eine Zahlungsfreigabe benötigt die erste Diagnose nicht.',
    relatedSlugs: ['wlan-reichweite', 'lan-oder-wlan', 'digitale-abos-ueberblick'],
    servicePath: '/leistungen/netzwerk-wlan/',
    sources: [
      { title: 'Google: Probleme mit Google-TV-Geräten beheben', url: 'https://support.google.com/googletv/answer/10070482?hl=de' },
      { title: 'Samsung: Smart-TV-Fehlerbehebung', url: 'https://www.samsung.com/de/support/smart-tv-fehlerbehebung/' },
      { title: 'Google: Audio und verbundene TV-Geräte prüfen', url: 'https://support.google.com/googletv/answer/16995384?hl=de' },
    ],
  },
  {
    slug: 'ki-tools-datenschutz',
    title: 'KI-Tools und Datenschutz: vor dem Einfügen kurz prüfen',
    description: 'Vertrauliche Inhalte schützen, Kontotyp und Datenschutzeinstellungen unterscheiden und KI-Werkzeuge mit möglichst wenigen persönlichen Daten nutzen.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-ki-tools-datenschutz',
    imageAlt: 'Laptop mit dunklem Display neben geschlossener Dokumentenmappe und umgedrehtem Smartphone',
    updated: '2026-11-11',
    intro: 'Ein KI-Werkzeug kann Texte strukturieren, Ideen liefern oder eine unverständliche Formulierung erklären. Dafür braucht es häufig weniger persönliche Informationen, als ein vollständiges Dokument enthält. Bevor du etwas hochlädst, klärst du deshalb drei Fragen: Welches Produkt verwendest du, mit welchem Konto bist du angemeldet und welche Informationen sind für die Aufgabe wirklich erforderlich?',
    takeaways: [
      'Vertrauliche Inhalte reduzieren und keine Passwörter oder Wiederherstellungscodes eingeben.',
      'Verlauf, Personalisierung und Modelltraining als getrennte Einstellungen prüfen.',
      'Geschäftliche Nutzung mit dem freigegebenen Produkt und den Vorgaben der Organisation abstimmen.',
    ],
    sections: [
      {
        heading: 'Produkt und Konto genau identifizieren',
        paragraphs: [
          'Ein bekannter Produktname kann mehrere Angebote bezeichnen: eine private Chat-App, eine Funktion im Office-Programm oder einen Dienst mit Arbeitskonto. Dafür können unterschiedliche Datenschutzregeln gelten. Kontrolliere den tatsächlichen Anbieter, die angemeldete E-Mail-Adresse und den Tarif in der Anwendung. Eine ähnliche Oberfläche oder ein kostenpflichtiges Abo beweist allein keinen bestimmten Datenschutzstandard.',
          'Microsoft beschreibt beispielsweise für Copilot Chat mit einem Geschäfts-, Schul- oder Unikonto einen Unternehmensdatenschutz und keine Verwendung der dortigen Eingaben und Antworten zum Training von Basismodellen. Diese Aussage lässt sich nicht automatisch auf jede private Copilot-Oberfläche übertragen. Nutze bei Arbeitsunterlagen ausschließlich das von deiner Organisation freigegebene Angebot.',
        ],
      },
      {
        heading: 'Die Aufgabe mit weniger Daten lösen',
        paragraphs: [
          'Für die Überarbeitung einer E-Mail reicht oft ein kurzer Ausschnitt mit Platzhaltern. Ersetze Namen, Adressen, Kundennummern und interne Projekttitel, bevor du den Text einfügst. Prüfe auch Betreffzeilen, Dateinamen und mitkopierte Signaturen. Ein Screenshot kann mehr verraten als sein Hauptinhalt, etwa offene Tabs, Benachrichtigungen oder Namen in einer Seitenleiste.',
          'Vermeide vollständige Kundenlisten, Ausweisdokumente und vertrauliche Gesundheits- oder Personalunterlagen, solange die zulässige Nutzung nicht geklärt ist. Passwörter, Einmalcodes und private Schlüssel gehören nicht in eine normale KI-Anfrage. Wenn die Aufgabe nur mit solchen Daten lösbar scheint, formuliere zunächst das technische Problem ohne die echten Inhalte.',
        ],
        steps: [
          'Nur den für die Frage benötigten Ausschnitt in einer Arbeitskopie vorbereiten.',
          'Persönliche und vertrauliche Details durch eindeutige Platzhalter ersetzen.',
          'Vor dem Senden Text, Anhänge und gegebenenfalls sichtbare Bildschirmbereiche prüfen.',
        ],
      },
      {
        heading: 'Die verfügbaren Datenschutzoptionen getrennt prüfen',
        paragraphs: [
          'Öffne die Datenschutz- und Aktivitätseinstellungen des konkreten Produkts. Unterscheide gespeicherte Unterhaltungen, Erinnerungen beziehungsweise Personalisierung, verbundene Apps und eine mögliche Verwendung zur Modellverbesserung. Ein gelöschter Chat oder ausgeschalteter Verlauf bedeutet nicht automatisch, dass jede andere Funktion deaktiviert oder jede Datenverarbeitung sofort beendet ist.',
          'Google erläutert für Gemini unter anderem „Aktivitäten speichern“ und temporäre Chats. Temporäre Chats werden laut Hilfe nicht zum Modelltraining verwendet; dennoch gibt es eine zeitlich begrenzte Verarbeitung für Antworten und Sicherheit. Bei deaktivierter Aktivität kann ausdrücklich gesendetes Feedback zusätzliche Inhalte einbeziehen. Lies deshalb die Hinweise zur gewählten Option, statt aus ihrem Namen absolute Vertraulichkeit abzuleiten.',
        ],
      },
      {
        heading: 'Verknüpfungen und Ergebnisse bewusst kontrollieren',
        paragraphs: [
          'Eine Verbindung zum Postfach, Kalender oder Cloud-Speicher erweitert, welche Inhalte ein Werkzeug erreichen kann. Prüfe vor der Freigabe den angeforderten Zugriff und verbinde nur Dienste, die du für die Aufgabe brauchst. Entferne nicht mehr benötigte Verbindungen über die dafür vorgesehenen Einstellungen. Auch Bildschirmfreigabe und Sprachfunktionen verdienen einen Blick auf ihren tatsächlichen Erfassungsbereich.',
          'Behandle die Antwort anschließend als Entwurf. Kontrolliere Namen, Zahlen und Aussagen anhand deiner eigenen Unterlagen, bevor du etwas weiterleitest. Stelle echte persönliche Daten erst dort wieder her, wo sie gebraucht werden und die Verarbeitung vorgesehen ist. Speichere den fertigen Text an deinem gewohnten geschützten Ort, nicht zusätzlich in einer unübersichtlichen Sammlung geteilter Chatlinks.',
        ],
      },
    ],
    pitfall: '„Kein Modelltraining“ ist nicht gleichbedeutend mit „keine Speicherung“, „keine Sicherheitsprüfung“ oder „für sämtliche vertraulichen Daten freigegeben“. Diese Fragen hängen vom konkreten Produkt, Konto, Tarif und gegebenenfalls den Einstellungen der Organisation ab.',
    whenToGetHelp: 'Hilfe ist sinnvoll, wenn private und geschäftliche Konten vermischt sind, unklare App-Verknüpfungen bestehen oder vertrauliche Inhalte versehentlich geteilt wurden. Bei Arbeitsdaten beziehe die zuständige IT beziehungsweise Datenschutzverantwortlichen ein und dokumentiere den Vorgang ohne weitere Kopien der sensiblen Inhalte.',
    relatedSlugs: ['browser-erweiterungen-pruefen', 'passwortmanager', 'kalender-gemeinsam-nutzen'],
    servicePath: '/leistungen/programme/',
    sources: [
      { title: 'Microsoft: Datenschutzoptionen für privates Copilot', url: 'https://support.microsoft.com/de-de/privacy/microsoft-copilot/privacy-controls' },
      { title: 'Microsoft: Copilot Chat mit Arbeits- oder Schulkonto', url: 'https://support.microsoft.com/de-de/privacy/data-protection-when-using-microsoft-365-copilot-chat-for-work-or-school' },
      { title: 'Google: Privacy Hub für Gemini-Apps', url: 'https://support.google.com/gemini/answer/13594961?hl=de' },
    ],
  },
  {
    slug: 'digitale-abos-ueberblick',
    title: 'Digitale Abos ordnen: Anbieter, Konten und Verlängerungen im Blick',
    description: 'Eine praktische Übersicht für App-, Streaming- und Cloud-Abos: richtigen Abrechnungsweg finden, Erinnerungen setzen und Änderungen nachvollziehbar dokumentieren.',
    category: 'alltag',
    readMinutes: 5,
    image: 'guide-digitale-abos-ueberblick',
    imageAlt: 'Geordnete Belege neben leerem Papierkalender, Karteikarten und umgedrehtem Smartphone',
    updated: '2026-11-11',
    intro: 'Streaming, Cloud-Speicher und eine App aus dem Urlaub: Digitale Abos verteilen sich schnell auf mehrere Konten und Anbieter. Eine übersichtliche Liste hilft dir, zu erkennen, was aktiv ist und wo du es verwaltest. Dafür brauchst du nicht sofort eine neue Verwaltungs-App. Eine einfache Tabelle oder geschützte Notiz genügt, wenn die Informationen zuverlässig gepflegt werden.',
    takeaways: [
      'Für jedes Abo das verwendete Konto und den tatsächlichen Rechnungsaussteller notieren.',
      'Verlängerung, eigenes Prüfdatum und gespeicherte Bestätigung getrennt festhalten.',
      'Eine App zu löschen beendet ein darüber abgeschlossenes Abonnement nicht automatisch.',
    ],
    sections: [
      {
        heading: 'Die vorhandenen Abos systematisch sammeln',
        paragraphs: [
          'Prüfe die Abo-Übersicht deines Apple Accounts beziehungsweise deines Google-Play-Kontos. Wiederhole das für weitere selbst verwendete Konten, wenn du Käufe früher anders zugeordnet hast. Ergänze direkt beim Anbieter gebuchte Dienste. Ein auf dem Handy genutzter Streamingdienst muss nicht über den App-Store abgerechnet werden; ausschlaggebend ist der ursprüngliche Buchungsweg.',
          'Durchsuche deine eigenen E-Mails nach Belegen, Verlängerungsbestätigungen und dem Namen des Dienstes. Gleiche unklare wiederkehrende Buchungen mit diesen Nachweisen ab, ohne Kontodaten in fremde Such- oder Analysewerkzeuge hochzuladen. Bei einer unbekannten Nachricht öffnest du das bekannte Kundenportal selbst, statt ungeprüft einem enthaltenen Zahlungslink zu folgen.',
        ],
      },
      {
        heading: 'Eine kleine, brauchbare Übersicht anlegen',
        paragraphs: [
          'Erfasse pro Dienst den Namen, das verwendete Konto, den Rechnungsaussteller, das Abrechnungsintervall und den im Kundenkonto genannten nächsten Termin. Notiere den Preis aus dem aktuellen Beleg mit seiner Währung, ohne aus älteren Werbeangeboten zu schließen. Ergänze eine eigene Notiz, wofür du den Dienst verwendest und ob andere Personen davon abhängig sind.',
          'Speichere keine Passwörter, vollständigen Kartenangaben oder Wiederherstellungscodes in dieser Übersicht. Ein Hinweis auf den zugehörigen Eintrag im Passwortmanager reicht. Für Bestätigungen eignet sich ein klar benannter Ordner. Unterscheide aktive, bereits beendete und unklare Einträge, damit eine alte Rechnung nicht dauerhaft wie ein laufendes Abo aussieht.',
        ],
        steps: [
          'Dienst, Kontozuordnung und Verwaltungsseite in der Übersicht ergänzen.',
          'Nächsten Termin anhand des aktuellen Kundenkontos überprüfen.',
          'Eine rechtzeitige persönliche Erinnerung zur erneuten Prüfung setzen.',
        ],
      },
      {
        heading: 'Änderungen beim richtigen Anbieter durchführen',
        paragraphs: [
          'Bei Apple findest du Abonnements auf dem iPhone in den Einstellungen unter deinem Namen. Bei Google Play öffnest du die Abo-Verwaltung mit dem Konto, über das der Kauf lief. Ist ein Dienst dort nicht zu sehen, prüfe den Beleg auf ein anderes Konto, den Mobilfunkanbieter oder einen direkten Vertrag mit dem Diensteanbieter.',
          'Lies vor einer Änderung die konkrete Zusammenfassung: Wann endet der Zugriff, welche Leistung ändert sich und bleibt noch eine Bindung bestehen? Die Bedingungen können je nach Produkt und Buchungsmodell unterschiedlich sein. Das Entfernen einer App oder bloßes Nichtbenutzen ersetzt den vorgesehenen Verwaltungsweg nicht. Bewahre die abschließende Bestätigung mit Datum auf.',
        ],
      },
      {
        heading: 'Abhängigkeiten und den neuen Status prüfen',
        paragraphs: [
          'Vor dem Beenden eines Cloud- oder Software-Abos kontrollierst du, welche Dateien, Funktionen und Familienfreigaben daran hängen. Prüfe den tatsächlich belegten Speicher und sichere benötigte Inhalte unabhängig, bevor sich ein Speicherlimit oder Zugriff ändert. Bei einem geteilten Dienst stimmen die betroffenen Personen die Umstellung miteinander ab; ein gemeinsames Konto wird dafür nicht weitergegeben.',
          'Öffne nach einer Änderung die Abo-Verwaltung erneut und übertrage den dort angezeigten Status in deine Liste. Speichere eine Bestätigung, statt allein auf einen geklickten Button zu vertrauen. Plane eine kurze regelmäßige Durchsicht ein und ergänze neue Buchungen direkt. So bleibt die Übersicht praktisch nutzbar, ohne dass du jedes Mal alle Postfächer neu durchsuchen musst.',
        ],
      },
    ],
    pitfall: 'Abo kündigen, Zahlungsmittel entfernen und Konto löschen sind unterschiedliche Aktionen. Lösche kein ganzes Konto, nur um eine einzelne App nicht weiterzunutzen. Dabei könnten E-Mails, Dateien oder andere weiterhin benötigte Dienste verloren gehen.',
    whenToGetHelp: 'Unterstützung ist sinnvoll, wenn ein Abo im falschen Konto steckt, der Verwaltungsweg unklar ist oder Daten vor einer Umstellung gesichert werden müssen. Fragen zu unbekannten Abbuchungen, Erstattungen oder Vertragsbedingungen klärst du direkt mit dem zuständigen Anbieter.',
    relatedSlugs: ['kalender-gemeinsam-nutzen', 'cloud-sync-oder-backup', 'phishing-erkennen'],
    servicePath: '/leistungen/benutzerkonten/',
    sources: [
      { title: 'Apple: Ein Abonnement kündigen', url: 'https://support.apple.com/de-de/118428' },
      { title: 'Google: Abos bei Google Play verwalten', url: 'https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DDesktop&hl=de-DE' },
      { title: 'Google: Wiederkehrende Zahlungen und Abos verwalten', url: 'https://support.google.com/googlepay/answer/7644008?co=GENIE.Platform%3DDesktop&hl=de' },
    ],
  },
]
