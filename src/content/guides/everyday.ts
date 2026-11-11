import type { GuideArticle } from './types'

export const everydayGuides: GuideArticle[] = [
  {
    slug: 'drucker-offline',
    title: 'Drucker offline: Verbindung und Warteschlange richtig prüfen',
    description: 'Der Drucker ist eingeschaltet, Windows meldet trotzdem offline? So grenzt du Netzwerk, Warteschlange und Treiber verständlich ein.',
    category: 'alltag',
    readMinutes: 4,
    image: 'printer-service',
    imageAlt: 'Multifunktionsdrucker mit geöffnetem Scannerdeckel',
    updated: '2026-11-11',
    intro: '„Offline“ bedeutet zunächst, dass dein Computer den Drucker gerade nicht wie erwartet erreicht. Es beweist weder einen Defekt noch einen fehlenden Treiber. Bevor du das Gerät neu installierst, lohnt sich ein kurzer Vergleich: Kann der Drucker selbst eine Testseite ausgeben, und funktioniert ein Druck von einem anderen Gerät? Damit findest du schneller die richtige Richtung.',
    takeaways: [
      'Zuerst am Gerät nach Papier, Fehlermeldungen und Verbindung schauen.',
      'Ein einzelner hängender Auftrag kann die Warteschlange blockieren.',
      'Treiber erst nach dem Verbindungstest gezielt beim Hersteller beziehen.',
    ],
    sections: [
      {
        heading: 'Gerät, Netzwerk oder nur ein Programm?',
        paragraphs: [
          'Schau auf das Display beziehungsweise die Statusleuchten des Druckers. Ein Papierstau, eine geöffnete Abdeckung oder eine Verbrauchsmaterial-Meldung lässt sich nicht durch Windows-Einstellungen lösen. Gibt das Gerät seine eigene Testseite aus, funktioniert zumindest der grundlegende Druckvorgang. Wie diese Testseite gestartet wird, steht im Handbuch deines Modells.',
          'Teste anschließend ein kleines Dokument aus einem zweiten Programm. Druckt beispielsweise eine einfache Textdatei, aber ein bestimmtes PDF nicht, liegt das Problem eher bei diesem Dokument oder der Anwendung. Notiere solche Unterschiede. Sie sind hilfreicher als fünf Neuinstallationen, nach denen niemand mehr weiß, was sich verändert hat.',
        ],
      },
      {
        heading: 'Die Verbindung in Ruhe kontrollieren',
        paragraphs: [
          'Bei USB prüfst du, ob das Kabel an beiden Enden sitzt. Wenn möglich, verbindest du den Drucker testweise direkt mit dem Computer statt über eine Dockingstation. Bei WLAN müssen Computer und Drucker im passenden Heimnetz erreichbar sein. Ein Gastnetz kann den Zugriff auf andere Geräte bewusst verhindern; schalte diese Schutzfunktion nicht einfach ab.',
          'Besonders nach einem Routerwechsel ist oft noch der alte WLAN-Name im Drucker gespeichert. Vergleiche die Netzwerkinformationen des Geräts mit deinem aktuellen Netz. Ein normaler Neustart kann helfen; ein Zurücksetzen auf Werkseinstellungen ist dafür nicht nötig und würde gespeicherte Einstellungen entfernen.',
        ],
      },
      {
        heading: 'Mit einer sauberen Warteschlange testen',
        paragraphs: [
          'Öffne in den Windows-Einstellungen den Bereich „Drucker & Scanner“ und die Warteschlange des betroffenen Geräts. Prüfe auch, ob du wirklich den richtigen Drucker ausgewählt hast: Ähnliche Namen oder alte Gerätekopien führen schnell in die falsche Warteschlange. Die genaue Oberfläche unterscheidet sich zwischen Windows-Versionen und Druckertreibern.',
        ],
        steps: [
          'Speichere das zu druckende Dokument in der ursprünglichen Anwendung.',
          'Brich eigene festhängende oder doppelte Druckaufträge ab. Bei gemeinsam genutzten Druckern zuerst die anderen Nutzer einbeziehen.',
          'Starte Drucker und Computer normal neu und sende anschließend genau eine kleine Testseite.',
          'Bleibt der Fehler, nutze die Windows-Druckerproblembehandlung und halte deren Ergebnis fest.',
        ],
      },
      {
        heading: 'Treiber gezielt statt auf Verdacht ändern',
        paragraphs: [
          'Wenn die Verbindung steht, aber Windows weiterhin nicht druckt, suche anhand der vollständigen Modellbezeichnung auf der Herstellerseite nach Unterstützung für dein Betriebssystem. Lade keine angeblichen Treiberpakete aus Werbeanzeigen oder fremden Downloadportalen. Für bestimmte Gerätearchitekturen gelten besondere Installationswege; deshalb ist die passende Hersteller- oder Microsoft-Anleitung wichtig.',
          'Zum Abschluss teste auch den üblichen Alltag: ein PDF, ein mehrseitiges Dokument und gegebenenfalls beidseitigen Druck. Eine funktionierende Testseite allein bestätigt noch nicht, dass Papierformat und gewünschte Funktionen richtig eingestellt sind.',
        ],
      },
    ],
    pitfall: 'Ein Drucker sollte nicht nach jedem Fehler entfernt und neu hinzugefügt werden. Dabei entstehen leicht mehrere Einträge, und die eigentliche Netzwerkursache bleibt bestehen. Auch das pauschale Abschalten der Firewall ist keine sinnvolle Standardlösung.',
    whenToGetHelp: 'Hilfe ist sinnvoll, wenn der Fehler nach jedem Neustart wiederkehrt, mehrere Geräte betroffen sind oder ein Firmendrucker gemeinsam genutzt wird. Halte Modell, Verbindungsart und die genaue Fehlermeldung bereit; Zugangsdaten gehören nicht in eine erste Anfrage.',
    relatedSlugs: ['dokumente-scannen', 'office-installieren'],
    servicePath: '/leistungen/drucker/',
    sources: [
      { title: 'Microsoft: Probleme mit Offlinedruckern', url: 'https://support.microsoft.com/de-de/windows/hardware/printer/troubleshooting-offline-printer-problems-in-windows' },
      { title: 'Microsoft: Druckerverbindungen und Druckprobleme', url: 'https://support.microsoft.com/de-de/windows/hardware/printer/fix-printer-connection-and-printing-problems-in-windows' },
      { title: 'Microsoft: Druckprobleme einzelner Anwendungen', url: 'https://support.microsoft.com/de-de/windows/hardware/printer/fix-printing-problems-in-word-excel-or-other-apps' },
    ],
  },
  {
    slug: 'dokumente-scannen',
    title: 'Dokumente sauber scannen und als PDF ablegen',
    description: 'Vom Brief zum gut lesbaren PDF: Scanner oder Handy wählen, Seiten kontrollieren und sensible Dokumente sinnvoll speichern.',
    category: 'alltag',
    readMinutes: 4,
    image: 'remote-printer',
    imageAlt: 'Weißer Multifunktionsdrucker neben einem Laptop',
    updated: '2026-11-11',
    intro: 'Ein guter Scan ist vollständig, lesbar und später wiederzufinden. Dafür brauchst du nicht immer ein neues Gerät: Für einzelne Briefe reicht häufig die Dokumentfunktion des Smartphones, für größere Stapel ist ein Scanner mit Einzug angenehmer. Entscheidend sind eine kurze Qualitätskontrolle und ein klarer Speicherort, bevor du das Original weglegst.',
    takeaways: [
      'Dokumentmodus statt gewöhnlichem Foto für gerade Seiten und saubere Ränder nutzen.',
      'Vor dem Versand jede Seite, Reihenfolge und Lesbarkeit kontrollieren.',
      'Vertrauliche Unterlagen nicht unbemerkt in fremde Cloud-Dienste laden.',
    ],
    sections: [
      {
        heading: 'Den passenden Scanweg wählen',
        paragraphs: [
          'Ein Flachbettscanner eignet sich für einzelne Blätter, empfindliche Vorlagen oder Buchseiten. Ein Dokumenteneinzug spart bei vielen losen Seiten Zeit, verträgt aber je nach Modell keine Klammern, klebrigen Zettel oder beschädigten Blätter. Prüfe vor dem Einlegen die Vorgaben des Herstellers. Einen vorhandenen Drucker kann Windows als Drucker erkennen, ohne dass seine Scanfunktion bereits eingerichtet ist.',
          'Für einen einzelnen Brief kannst du die integrierte Scan-Funktion deines Handys verwenden. Beim iPhone gibt es sie etwa in Notizen und Dateien. Bei anderen Geräten hängt das Angebot von System und installierten Apps ab. Prüfe bei jeder App, ob sie lokal speichert oder deine Unterlagen in ein Konto hochlädt.',
        ],
      },
      {
        heading: 'Eine lesbare Vorlage erzeugen',
        paragraphs: [
          'Lege das Papier flach auf einen ruhigen, kontrastreichen Untergrund. Vermeide Schatten deiner Hand und Spiegelungen einer Lampe. Halte das Handy möglichst parallel zum Blatt. Die automatische Randerkennung ist hilfreich, kann aber eine Fußzeile oder einen Randvermerk abschneiden. Vergrößere deshalb die Vorschau und korrigiere den Ausschnitt, bevor du fortfährst.',
          'Bei einem Scanner sind etwa 300 dpi häufig ein vernünftiger Ausgangspunkt für normale Textdokumente. Das ist keine feste Vorgabe: Kleine Schrift, Zeichnungen oder die Anforderungen des Empfängers können eine andere Einstellung nötig machen. Farbe ist sinnvoll, wenn farbige Markierungen Informationen tragen; für reine Texte kann Graustufe kleinere Dateien erzeugen.',
        ],
        steps: [
          'Scanne zuerst eine Testseite und öffne die gespeicherte Datei.',
          'Prüfe kleine Schrift, Unterschriften, Seitenränder und gegebenenfalls die Rückseite.',
          'Erfasse danach die restlichen Seiten und kontrolliere Reihenfolge sowie Ausrichtung.',
        ],
      },
      {
        heading: 'PDF, Texterkennung und Dateiname',
        paragraphs: [
          'Für mehrseitige Unterlagen ist eine gemeinsame PDF-Datei meist übersichtlicher als viele einzelne Bilder. Nicht jede einfache Scan-App bietet dieselben Dateiformate. Wenn deine Software nur Bilddateien erzeugt, suche in der offiziellen Geräte-Software nach einer PDF-Funktion, statt die Dokumente ohne Prüfung bei einem beliebigen Online-Konverter hochzuladen.',
          'Eine Texterkennung, oft OCR genannt, macht gescannte Wörter durchsuchbar. Sie kann sich bei Namen, Beträgen und Zeichenfolgen irren. Verlasse dich bei wichtigen Angaben auf das sichtbare Original und kontrolliere übernommene Daten. Benenne Dateien nachvollziehbar, etwa mit Datum, Absender und Thema. In gemeinsam sichtbaren Dateinamen sollten keine unnötigen vertraulichen Angaben stehen.',
        ],
      },
      {
        heading: 'Speichern und erst dann versenden',
        paragraphs: [
          'Lege den fertigen Scan in einem bewusst gewählten Ordner ab und öffne ihn von dort erneut. Damit erkennst du, ob du wirklich eine Datei gespeichert hast oder nur die Vorschau der Scan-App ansiehst. Für wichtige Unterlagen gehört dieser Ordner in deine regelmäßige Datensicherung.',
          'Prüfe vor dem Versand die richtige Empfängeradresse, die Dateigröße und alle angehängten Seiten. Nutze bei sensiblen Unterlagen den mit dem Empfänger vereinbarten Übertragungsweg. Ein Scan bedeutet nicht automatisch, dass ein Papieroriginal entbehrlich ist; behalte Originale, wenn du die Anforderungen des jeweiligen Vorgangs nicht sicher kennst.',
        ],
      },
    ],
    pitfall: 'Ein verkleinertes Vorschaubild kann perfekt aussehen, obwohl das gespeicherte PDF unscharf oder unvollständig ist. Kontrolliere immer die tatsächliche Datei. Dokument-Scans sollten außerdem nicht versehentlich in einer geteilten Fotomediathek landen.',
    whenToGetHelp: 'Wenn Drucken funktioniert, Scannen aber nicht, oder wenn ein wiederkehrender Stapel von Unterlagen zu viele Handgriffe verlangt, lässt sich der Ablauf gezielt prüfen. Ein anonymisiertes Beispieldokument und die Modellbezeichnung reichen für die erste Abstimmung.',
    relatedSlugs: ['drucker-offline', 'postfach-voll', 'handy-fotos-sichern'],
    servicePath: '/leistungen/drucker/',
    sources: [
      { title: 'Microsoft: Scanner in Windows einrichten und verwenden', url: 'https://support.microsoft.com/de-de/windows/hardware/printer/install-and-use-a-scanner-in-windows' },
      { title: 'Apple: Dokumente mit iPhone oder iPad scannen', url: 'https://support.apple.com/de-de/108963' },
      { title: 'Apple: Dokumente in Notizen scannen', url: 'https://support.apple.com/de-de/guide/iphone/iph653f28965/26/ios/26' },
    ],
  },
  {
    slug: 'outlook-sendet-nicht',
    title: 'Outlook sendet nicht: Den Fehler Schritt für Schritt eingrenzen',
    description: 'E-Mails bleiben im Postausgang? Prüfe Verbindung, Webmail, Anhänge und Fehlermeldungen, bevor du dein Outlook-Konto neu einrichtest.',
    category: 'alltag',
    readMinutes: 4,
    image: 'email-service',
    imageAlt: 'Laptop und Smartphone mit E-Mail-Ansichten auf einem Holztisch',
    updated: '2026-11-11',
    intro: 'Eine Nachricht bleibt im Postausgang, eine andere kommt als unzustellbar zurück: Das sind unterschiedliche Fehler. Outlook ist außerdem die Anwendung, während dein Postfach bei Microsoft oder einem anderen Anbieter liegen kann. Mit einem kleinen Test ohne Anhang und einem Vergleich im Webmail findest du heraus, wo die Störung wahrscheinlich sitzt.',
    takeaways: [
      'Eine kurze Testnachricht ohne Anhang trennt Größenprobleme von allgemeinen Sendefehlern.',
      'Webmail zeigt, ob das Postfach unabhängig von Outlook funktioniert.',
      'Fehlertext und Outlook-Version notieren, bevor Konten oder Profile verändert werden.',
    ],
    sections: [
      {
        heading: 'Was passiert genau mit der Nachricht?',
        paragraphs: [
          'Liegt die Nachricht noch im Postausgang, wurde sie möglicherweise noch nicht an den Mailserver übergeben. Steht sie unter „Gesendet“, hat die Anwendung den Versand verarbeitet; eine Zustellbestätigung für den Empfänger ist das trotzdem nicht. Eine Rückläufer-Mail kann beispielsweise auf eine falsche Adresse oder ein volles Empfängerpostfach hinweisen.',
          'Notiere den genauen Fehlertext und den Zeitpunkt. Teile bei einer Supportanfrage nur die nötigen Ausschnitte, denn Rückläufer können private Adressen oder Teile der ursprünglichen Nachricht enthalten. Prüfe außerdem, ob du das neue Outlook, klassisches Outlook oder Outlook im Browser verwendest. Die Menüs und Diagnosewege sind nicht austauschbar.',
        ],
      },
      {
        heading: 'Einen kleinen, eindeutigen Test machen',
        paragraphs: [
          'Öffne eine bekannte Website, um die grundlegende Internetverbindung zu prüfen. Melde dich anschließend über die selbst aufgerufene offizielle Website deines Mailanbieters im Webmail an. Funktioniert der Versand dort, sind Konto und Dienst grundsätzlich erreichbar; die lokale Outlook-Einrichtung bleibt als mögliche Ursache übrig. Scheitert auch Webmail, hilft eine Neuinstallation von Outlook meistens nicht weiter.',
        ],
        steps: [
          'Schreibe eine neue kurze Nachricht mit eindeutigem Betreff und ohne Anhang.',
          'Verwende eine dir bekannte, korrekt geschriebene Empfängeradresse und kontrolliere das ausgewählte Absenderkonto.',
          'Teste denselben einfachen Versand im Webmail und vergleiche die Fehlermeldungen.',
          'Prüfe im Kontoportal auf eine Speicherwarnung oder eine notwendige erneute Anmeldung.',
        ],
      },
      {
        heading: 'Häufige Ursachen gezielt angehen',
        paragraphs: [
          'Große Anhänge können am Limit deines Anbieters oder des Empfängers scheitern. Wenn die Testnachricht ankommt, die ursprüngliche Mail aber nicht, reduziere die Anhänge oder vereinbare eine passende Dateifreigabe. Prüfe bei einer Freigabe bewusst, wer Zugriff erhält; ein öffentlicher Link ist nicht automatisch für vertrauliche Unterlagen geeignet.',
          'Im klassischen Outlook kann „Offline arbeiten“ aktiviert sein. Auch Statusanzeigen wie „Getrennt“ oder „Verbindungsversuch“ sind ein Hinweis auf die Verbindung zum Server. Nach einer Passwortänderung kann eine neue Anmeldung nötig sein. Servernamen, Ports und Verschlüsselung übernimmst du ausschließlich aus der aktuellen Anleitung deines Mailanbieters, nicht aus beliebigen Forenbeiträgen.',
        ],
      },
      {
        heading: 'Konten und lokale Daten schützen',
        paragraphs: [
          'Entferne ein Konto nicht als ersten Versuch. Abhängig von Kontotyp und Konfiguration können lokale Ordner, Entwürfe, Kontakte oder Kalender vorhanden sein, die nicht vollständig auf dem Server liegen. Vergleiche zunächst, was im Webmail sichtbar ist, und kläre, welche Daten vor einer Neueinrichtung gesichert werden müssen.',
          'Bei einem Firmenkonto können außerdem organisatorische Regeln oder eine Störung des Dienstes eine Rolle spielen. Lass die zuständige Administration prüfen, bevor du Sicherheitsprogramme abschaltest oder eigene Servereinstellungen erzwingst. Ein sauber dokumentierter Test spart hier Zeit und vermeidet unnötige Änderungen an einem grundsätzlich funktionierenden Konto.',
        ],
      },
    ],
    pitfall: 'Eine gesendete Nachricht immer wieder anzustoßen kann zu Mehrfachsendungen führen, sobald die Verbindung zurückkommt. Prüfe Postausgang und Gesendet-Ordner, bevor du denselben Inhalt erneut verschickst.',
    whenToGetHelp: 'Wenn Webmail funktioniert, Outlook aber dauerhaft scheitert, oder wenn lokale Archive und mehrere Konten betroffen sind, lohnt sich eine gezielte Prüfung. Nützlich sind Anbieter, Outlook-Version und Fehlertext. Passwort, Bestätigungscodes und vollständige private Nachrichten werden dafür nicht benötigt.',
    relatedSlugs: ['postfach-voll', 'office-installieren', 'browser-erweiterungen-pruefen'],
    servicePath: '/leistungen/email/',
    sources: [
      { title: 'Microsoft: In Outlook nicht senden oder empfangen', url: 'https://support.microsoft.com/de-de/outlook/i-can-t-send-or-receive-messages-in-outlook' },
      { title: 'Microsoft: Unzustellbare Nachrichten in Outlook.com', url: 'https://support.microsoft.com/de-de/outlook/sent-email-in-outlook-com-comes-back-delivery-failed' },
      { title: 'Microsoft: Probleme beim Senden und Empfangen', url: 'https://support.microsoft.com/de-de/outlook/issues-sending-and-receiving-email' },
    ],
  },
  {
    slug: 'postfach-voll',
    title: 'Postfach voll: Platz schaffen, ohne wichtige E-Mails zu verlieren',
    description: 'Mailbox, Cloud oder Computer voll? So findest du den richtigen Speicher und räumst große Nachrichten mit einer sicheren Reihenfolge auf.',
    category: 'alltag',
    readMinutes: 4,
    image: 'remote-email',
    imageAlt: 'Laptop und Tablet mit geöffneten E-Mail-Ansichten',
    updated: '2026-11-11',
    intro: 'Wenn dein Mailanbieter „Postfach voll“ meldet, bringt das Leeren des Windows-Papierkorbs meist nichts. Entscheidend ist der Speicher beim Anbieter. Manchmal kommt ein separates Cloud-Kontingent hinzu. Bevor du alte Nachrichten in großen Mengen löschst, prüfst du deshalb die Speicheranzeige und sicherst gezielt das, was du behalten musst.',
    takeaways: [
      'Serverpostfach, Cloud-Konto und lokale Festplatte getrennt betrachten.',
      'Große Anhänge gezielt prüfen statt wahllos viele kleine Nachrichten löschen.',
      'Archivordner im selben Postfach schaffen normalerweise keinen zusätzlichen Serverplatz.',
    ],
    sections: [
      {
        heading: 'Welcher Speicher ist tatsächlich voll?',
        paragraphs: [
          'Öffne die offizielle Website deines Mailanbieters direkt und suche in den Kontoeinstellungen nach der Speicherübersicht. Dort erkennst du, ob das Postfach selbst oder ein damit verbundenes Cloud-Kontingent betroffen ist. Bei Outlook.com werden E-Mail-Speicher und Microsoft-Cloudspeicher getrennt ausgewiesen; Anhänge können auch für den Cloudspeicher eine Rolle spielen. Geschäfts- und Schulkonten haben wiederum eigene Vorgaben.',
          'Die Größe einer lokalen Outlook-Datei ist nicht dasselbe wie die Belegung auf dem Server. Wenn du Nachrichten nur in einen anderen Ordner desselben Kontos verschiebst, bleiben sie weiterhin auf diesem Server gespeichert. Für eine Entscheidung brauchst du deshalb die Anzeige des Anbieters und nicht allein die Ordnergröße auf deinem Computer.',
        ],
      },
      {
        heading: 'Mit den größten entbehrlichen Nachrichten anfangen',
        paragraphs: [
          'Suche zunächst nach Nachrichten mit großen Anhängen. Alte Präsentationen, mehrfach verschickte Fotos oder bereits anderweitig gesicherte Dateien können viel Platz belegen. Überlege bei jedem Treffer, ob du nur die Datei, die gesamte Nachricht mit ihrem Zusammenhang oder beides aufbewahren musst. Bei geschäftlichen Unterlagen klärst du betriebliche Aufbewahrungsvorgaben, bevor du sie entfernst.',
        ],
        steps: [
          'Notiere den aktuell belegten Speicher und identifiziere die größten Ordner.',
          'Speichere benötigte Anhänge oder Nachrichten in einem geeigneten, gesicherten Ablageort.',
          'Öffne einige der gespeicherten Dateien zur Kontrolle und prüfe die Vollständigkeit.',
          'Lösche danach nur die bewusst ausgewählten Nachrichten und kontrolliere den Papierkorb.',
          'Leere gelöschte Elemente erst nach dieser Prüfung; eine endgültige Löschung kann nicht zuverlässig rückgängig gemacht werden.',
        ],
      },
      {
        heading: 'Archivierung richtig verstehen',
        paragraphs: [
          'Ein Ordner namens „Archiv“ ist zunächst nur ein Ordner. Liegt er im gleichen Postfach, reduziert das Verschieben dorthin die Gesamtauslastung nicht. Ein separates Onlinearchiv oder ein lokales Archiv kann anders funktionieren; die Möglichkeiten hängen von Produkt, Lizenz und Konfiguration ab. Prüfe die passende Anleitung für dein tatsächliches Konto.',
          'Ein lokales Archiv sollte nicht zur einzigen Kopie wichtiger Nachrichten werden. Nimm es in deine Datensicherung auf und teste, ob du die enthaltenen Nachrichten wieder öffnen kannst. Verlasse dich nicht darauf, dass jede Outlook-Version dieselben Archivfunktionen unterstützt. Ein Wechsel zwischen klassischem und neuem Outlook ist deshalb kein sinnvoller Versuch, Speicherwarnungen einfach verschwinden zu lassen.',
        ],
      },
      {
        heading: 'Nach der Bereinigung den Empfang prüfen',
        paragraphs: [
          'Aktualisiere die Speicherübersicht und warte gegebenenfalls, bis der Anbieter die Änderung verarbeitet hat. Sende anschließend eine kurze Testmail von einem anderen Konto und beantworte sie. Nachrichten, die während eines vollen Postfachs zurückgewiesen wurden, kommen nicht zwingend später automatisch an. Bitte wichtige Absender bei Bedarf um erneuten Versand.',
          'Für die Zukunft hilft eine einfache Routine: große Anhänge regelmäßig ablegen, unnötige Newsletter abbestellen und Speicherwarnungen ernst nehmen. Eine Speichererweiterung kann sinnvoll sein, löst aber keine unklare Ablage. Prüfe erst deinen tatsächlichen Bedarf und die Bedingungen, statt in einer Warnmeldung vorschnell ein zusätzliches Abonnement abzuschließen.',
        ],
      },
    ],
    pitfall: '„Alle Nachrichten älter als ein Jahr löschen“ klingt bequem, kann aber benötigte Rechnungen, Vertragsunterlagen oder private Erinnerungen treffen. Alter allein ist kein zuverlässiges Kriterium für Entbehrlichkeit.',
    whenToGetHelp: 'Wenn du nicht erkennst, welches Kontingent betroffen ist, oder große lokale Archive und ein Firmenkonto beteiligt sind, lass die Speicher- und Sicherungsstruktur zuerst prüfen. So wird Platz frei, ohne dass wichtige Unterlagen unbemerkt verschwinden.',
    relatedSlugs: ['outlook-sendet-nicht', 'dokumente-scannen', 'handy-fotos-sichern'],
    servicePath: '/leistungen/email/',
    sources: [
      { title: 'Microsoft: Speicherlimits in Outlook.com', url: 'https://support.microsoft.com/de-de/outlook/storage-limits-in-outlook-com' },
      { title: 'Microsoft: Postfachspeicher bei Geschäfts- und Schulkonten', url: 'https://support.microsoft.com/de-de/outlook/mailbox-storage-limits-in-outlook' },
      { title: 'Microsoft: Postfachgröße in Outlook verwalten', url: 'https://support.microsoft.com/de-de/outlook/manage-my-mailbox-size-in-outlook' },
    ],
  },
  {
    slug: 'office-installieren',
    title: 'Office installieren: Konto, Lizenz und Daten vorher klären',
    description: 'Microsoft 365 oder Office neu einrichten: das richtige Konto finden, vorhandene Daten schützen und Installation sowie Aktivierung prüfen.',
    category: 'alltag',
    readMinutes: 4,
    image: 'office-service',
    imageAlt: 'Laptop, Taschenrechner und Unterlagen mit Tabellen und Diagrammen',
    updated: '2026-11-11',
    intro: 'Office lässt sich oft in wenigen Schritten installieren. Die meisten Umwege entstehen vorher: Ein anderes Microsoft-Konto besitzt die Lizenz, eine Testversion ist bereits eingerichtet oder wichtige Outlook-Daten liegen nur lokal. Kläre diese Punkte zuerst. Dann kannst du nach der Installation zuverlässig prüfen, ob die Programme wirklich aktiviert sind und deine Dateien weiterhin passen.',
    takeaways: [
      'Installation und Nutzungsrecht sind zwei unterschiedliche Dinge.',
      'Vorhandene Dokumente, Vorlagen und lokale Outlook-Daten zuerst sichern.',
      'Downloads und Aktivierung nur über die offiziellen Microsoft-Wege durchführen.',
    ],
    sections: [
      {
        heading: 'Welche Office-Version gehört zu welchem Konto?',
        paragraphs: [
          'Prüfe, ob du ein Microsoft-365-Abonnement, einen einmaligen Office-Kauf oder eine zugewiesene Lizenz von Arbeit beziehungsweise Schule verwendest. Nicht jeder Tarif enthält die gleichen Desktopprogramme. Melde dich im offiziellen Kontoportal an und kontrolliere, ob das erwartete Produkt dort erscheint. Ein privates Microsoft-Konto und ein Geschäftskonto können ähnlich heißen und trotzdem unterschiedliche Berechtigungen haben.',
          'Wenn ein Product Key bereits eingelöst wurde, ist für eine erneute Installation häufig das damals zugeordnete Konto entscheidend. Suche deshalb vorhandene Kaufunterlagen und notiere die zugehörige Adresse. Ein auf dem neuen Computer vorinstalliertes Office-Symbol beweist noch keine dauerhaft vorhandene Lizenz. Kläre erst die Berechtigung, bevor du unnötig ein weiteres Produkt kaufst.',
        ],
      },
      {
        heading: 'Den bisherigen Arbeitsplatz vorbereiten',
        paragraphs: [
          'Speichere offene Dokumente und sichere wichtige Dateien. Denke zusätzlich an selbst erstellte Vorlagen, Makros, Signaturen und lokal gespeicherte Outlook-Archive. Solche Daten liegen nicht immer im normalen Dokumente-Ordner. Vergewissere dich bei Outlook im Webmail, welche Nachrichten tatsächlich auf dem Server vorhanden sind; lokale Ordner brauchen gegebenenfalls eine eigene Sicherung.',
          'Prüfe außerdem die Systemanforderungen der gewünschten Version. Bei einem Arbeitsgerät besprichst du die Installation mit der zuständigen Administration. Manche Fachprogramme und Erweiterungen hängen von einer bestimmten Office-Architektur ab. Ein Wechsel zwischen 32 und 64 Bit sollte daher bewusst erfolgen und nicht als allgemeiner Beschleunigungstrick.',
        ],
      },
      {
        heading: 'Installieren und anschließend aktivieren',
        paragraphs: [
          'Nutze die offizielle Microsoft-Installationsanleitung für dein Produkt und Betriebssystem. Dort führt die Anmeldung zum passenden Download. Vermeide Angebote, die für die Aktivierung fremde Skripte, eine abgeschaltete Sicherheitssoftware oder ein geteiltes Benutzerkonto verlangen. Eine korrekt bezogene Installationsdatei ersetzt keine gültige Lizenz.',
        ],
        steps: [
          'Melde dich mit dem Konto an, dem das benötigte Produkt zugeordnet ist.',
          'Lade die passende Installation über Microsoft und schließe die Office-Programme vor dem Start.',
          'Warte auf den Abschluss und öffne anschließend beispielsweise Word.',
          'Prüfe in den Konto- beziehungsweise Produktinformationen den Aktivierungsstatus und installiere verfügbare Updates.',
        ],
      },
      {
        heading: 'Ein kleiner Alltagstest gehört dazu',
        paragraphs: [
          'Öffne eine Kopie eines typischen Dokuments, bearbeite sie und speichere sie wieder. Prüfe bei wichtigen Vorlagen Seitenumbrüche, Schriftarten und PDF-Export. Wenn du Outlook nutzt, teste eine einfache Nachricht ohne Anhang. Dieser kurze Durchlauf zeigt mehr als die bloße Meldung, dass das Setup abgeschlossen wurde.',
          'Bei „Nicht lizenziertes Produkt“ kontrollierst du zunächst Konto und Produktstatus. Mehrere parallele Office-Installationen können ebenfalls Konflikte verursachen. Deinstalliere jedoch nicht wahllos alles: Kläre zuerst, welche Version benötigt wird und welche Daten gesichert sind. Die offizielle Problembehandlung richtet sich nach dem konkreten Fehler; Zugangsdaten und Einmalcodes bleiben bei dir.',
        ],
      },
    ],
    pitfall: 'Eine unbekannte Anleitung, die „Aktivierung in einer Minute“ durch Befehle oder fremde Lizenzserver verspricht, ist keine verlässliche Lösung. Sie kann Sicherheitsprobleme schaffen und sagt nichts über ein gültiges Nutzungsrecht aus.',
    whenToGetHelp: 'Eine gemeinsame Einrichtung lohnt sich bei mehreren Konten, einem PC-Wechsel, älteren Erweiterungen oder lokalen Outlook-Archiven. Halte Produktname, Betriebssystem und vorhandene Kaufunterlagen bereit; vollständige Lizenzschlüssel und Passwörter nicht ungeschützt verschicken.',
    relatedSlugs: ['outlook-sendet-nicht', 'postfach-voll', 'drucker-offline'],
    servicePath: '/leistungen/office-installation/',
    sources: [
      { title: 'Microsoft: Microsoft 365 oder Office installieren', url: 'https://support.microsoft.com/de-de/office/lifecycle/officeinstall/download-install-or-reinstall-microsoft-365-or-office-2024-on-a-pc-or-mac' },
      { title: 'Microsoft: Office-Product Key einlösen', url: 'https://support.microsoft.com/de-de/microsoft-365-activation-licensing/office-install/where-to-enter-your-office-product-key' },
      { title: 'Microsoft: Aktivierungsfehler in Office beheben', url: 'https://support.microsoft.com/de-de/microsoft-365-activation-licensing/office-install/unlicensed-product-and-activation-errors-in-office' },
    ],
  },
  {
    slug: 'smartphone-fuer-senioren',
    title: 'Smartphone für Senioren einrichten: Einfach und selbstbestimmt',
    description: 'Größere Schrift, wenige wichtige Apps und verständliche Abläufe: So wird ein Smartphone passend eingerichtet, ohne die Kontrolle abzugeben.',
    category: 'alltag',
    readMinutes: 4,
    image: 'seniors-service',
    imageAlt: 'Hände bedienen gemeinsam ein Smartphone mit großen Bedienelementen',
    updated: '2026-11-11',
    intro: 'Ein hilfreiches Smartphone muss zu der Person passen, die es benutzt. Alter allein sagt wenig darüber aus, welche Unterstützung sinnvoll ist. Manche möchten nur bequem telefonieren und Fotos ansehen, andere erledigen ihren gesamten Alltag mobil. Beginnt deshalb mit den gewünschten Aufgaben und richtet das Gerät gemeinsam ein, statt ungefragt Funktionen zu sperren.',
    takeaways: [
      'Schrift, Anzeigegröße und Lautstärke gemeinsam im echten Alltag testen.',
      'Wenige gut platzierte Apps sind oft hilfreicher als ein komplett neues Bedienkonzept.',
      'Konten, Gerätesperre und Wiederherstellung bleiben unter Kontrolle der nutzenden Person.',
    ],
    sections: [
      {
        heading: 'Mit drei alltäglichen Aufgaben beginnen',
        paragraphs: [
          'Fragt zuerst: Was soll mit dem Handy sicher klappen? Ein Anruf, eine Nachricht und ein Foto sind gute Startpunkte. Lasst die Person diese Aufgaben selbst ausführen und beobachtet, wo sie stockt. Ist die Schrift schwer lesbar, ein Symbol unklar oder eine Geste ungewohnt? So entstehen passende Änderungen, ohne das gesamte Gerät auf einmal umzubauen.',
          'Ordnet häufig genutzte Apps auf der ersten Startseite an und entfernt unnötige Verknüpfungen nach Absprache. Eine kleine schriftliche Anleitung mit den eigenen Bildschirmansichten hilft häufig mehr als viele mündliche Tipps. Erklärt dabei auch den Weg zurück zum Startbildschirm und wie ein versehentlich geöffnetes Fenster geschlossen wird.',
        ],
      },
      {
        heading: 'Anzeige und Bedienung passend einstellen',
        paragraphs: [
          'In den Bedienungshilfen lassen sich unter anderem Schrift- und Anzeigegröße anpassen. Bei Android können diese Einstellungen je nach Hersteller anders heißen; die Suche in den Einstellungen hilft. Größere Schrift wirkt nicht in jeder App gleich. Prüft daher Nachrichten, Kontakte und die Tastatur, statt euch nur auf die Vorschau zu verlassen.',
          'Testet außerdem Kontrast, Klingelton, Gesprächslautstärke und die Dauer, bis das Display ausgeht. Für besondere Bedürfnisse können Vorlesefunktionen oder eine vereinfachte Oberfläche sinnvoll sein. Apples „Unterstützender Zugriff“ wurde für Menschen mit kognitiven Einschränkungen entwickelt und verändert die Bedienung deutlich. Er ist kein pauschaler Seniorenmodus und sollte nur nach gemeinsamem Ausprobieren eingesetzt werden.',
        ],
      },
      {
        heading: 'Sicherheit verständlich statt umständlich machen',
        paragraphs: [
          'Eine Gerätesperre schützt Fotos, Nachrichten und Konten bei Verlust. Erklärt den Unterschied zwischen Gerätecode, SIM-PIN und Kontopasswort. Richtet Wiederherstellungsinformationen mit Zustimmung ein und bewahrt sie an einem sicheren, bekannten Ort auf. Ein Familienmitglied sollte nicht ohne Absprache zum alleinigen Besitzer des Apple- oder Google-Kontos werden.',
        ],
        steps: [
          'Wichtige Kontakte als Favoriten anlegen und einen normalen Testanruf durchführen.',
          'Gemeinsam besprechen, wie unerwartete Anrufe und Nachrichten behandelt werden.',
          'Die Erreichbarkeit von Notruffunktionen anhand der offiziellen Geräteanleitung erklären, ohne einen Probe-Notruf auszulösen.',
          'Updates und Datensicherung einrichten und zeigen, woran ihr ihren Status erkennt.',
        ],
      },
      {
        heading: 'In kleinen Etappen üben',
        paragraphs: [
          'Übt eine neue Funktion mehrmals in Ruhe und lasst anschließend Zeit, sie allein auszuprobieren. Eine Frage wie „Zeig mir, wie du das Foto wiederfindest“ prüft den Ablauf freundlicher als ein schneller Vortrag über sämtliche Menüs. Wenn etwas nicht klappt, verändert ihr möglichst nur eine Einstellung und schaut, ob genau dieses Hindernis kleiner wird.',
          'Vereinbart außerdem einen klaren Hilfeweg. Wer darf angerufen werden, wenn eine Warnung erscheint? Was soll auf keinen Fall spontan bestätigt werden? Ein guter Merksatz ist: Bei Druck und Zeitnot erst auflegen oder die Nachricht schließen und über einen bekannten Kontakt nachfragen. Bankfreigaben, Passwörter und Einmalcodes werden nicht an unerwartete Anrufer weitergegeben.',
        ],
      },
    ],
    pitfall: 'Alles „einfacher“ zu machen, indem man ungefragt Apps löscht, Konten übernimmt oder Funktionen einschränkt, kann die Selbstständigkeit verringern. Änderungen sollten nachvollziehbar, gewünscht und möglichst leicht rückgängig zu machen sein.',
    whenToGetHelp: 'Persönliche Unterstützung ist sinnvoll, wenn mehrere Konten durcheinandergeraten sind, ein Gerätewechsel ansteht oder die normalen Anzeigeoptionen nicht ausreichen. Am besten ist die Person dabei, die das Smartphone später selbst nutzt.',
    relatedSlugs: ['handy-fotos-sichern', 'dokumente-scannen', 'browser-erweiterungen-pruefen'],
    servicePath: '/leistungen/senioren-handy-hilfe/',
    sources: [
      { title: 'Google: Text- und Anzeigeeinstellungen unter Android', url: 'https://support.google.com/accessibility/android/answer/11183305?hl=de-BE' },
      { title: 'Google: Android-Bedienungshilfen', url: 'https://support.google.com/accessibility/android/answer/6006564?hl=de' },
      { title: 'Apple: Informationen zu Unterstützendem Zugriff', url: 'https://support.apple.com/de-at/guide/assistive-access-iphone/iphb86e84e2baa/ios' },
    ],
  },
  {
    slug: 'handy-fotos-sichern',
    title: 'Handy-Fotos sichern: Erst die Kopie prüfen, dann aufräumen',
    description: 'So kontrollierst du Google Fotos oder iCloud-Fotos, erstellst eine zusätzliche Kopie und vermeidest versehentliches Löschen auf allen Geräten.',
    category: 'alltag',
    readMinutes: 4,
    image: 'software-service',
    imageAlt: 'Laptop mit angeschlossenem externem Datenträger für eine lokale Sicherung',
    updated: '2026-11-11',
    intro: 'Fotos auf dem Display zu sehen bedeutet noch nicht, dass sie außerhalb des Handys gesichert sind. Manche Bilder liegen nur lokal, andere werden aus einer Cloud angezeigt. Bevor du Speicher freigibst oder das Gerät wechselst, solltest du wissen, welches Konto verwendet wird, ob der Upload vollständig ist und wo eine zusätzliche unabhängige Kopie liegt.',
    takeaways: [
      'Das angezeigte Konto und den abgeschlossenen Sicherungsstatus kontrollieren.',
      'Synchronisation kann Löschungen auf andere Geräte übertragen.',
      'Unersetzliche Bilder zusätzlich exportieren und die Kopie stichprobenartig öffnen.',
    ],
    sections: [
      {
        heading: 'Konto und Sicherungsumfang verstehen',
        paragraphs: [
          'Prüfe in der verwendeten Foto-App das angemeldete Konto. Besonders bei mehreren privaten oder beruflichen Konten kann die Galerie Bilder anzeigen, die nicht im erwarteten Cloud-Konto liegen. Google Fotos zeigt auch lokale Aufnahmen an; ihre bloße Sichtbarkeit ist kein Nachweis einer Sicherung. Bei Android können außerdem zusätzliche Geräteordner, etwa Bilder aus anderen Apps, separat ausgewählt werden müssen.',
          'Beim iPhone synchronisiert iCloud-Fotos die Mediathek zwischen verbundenen Geräten. Diese Fotos werden nicht zusätzlich im normalen iCloud-Gerätebackup verdoppelt. Das schützt vor einem Geräteverlust, ersetzt aber keine unabhängige Archivkopie gegen jede versehentliche Änderung. Überlege deshalb zuerst, welche Bilder unersetzlich sind und wo du sie langfristig aufbewahren möchtest.',
        ],
      },
      {
        heading: 'Den Upload wirklich zu Ende bringen',
        paragraphs: [
          'Verbinde das Handy mit einem stabilen WLAN und sorge für ausreichenden Akkustand. Viele Videos, eine langsame Verbindung oder ein volles Cloud-Konto können den Upload verzögern. Öffne die Statusanzeige der Foto-App und prüfe, ob noch Elemente warten oder eine Fehlermeldung erscheint. Ein aktivierter Schalter allein sagt nicht, dass die Sicherung vollständig ist.',
        ],
        steps: [
          'Prüfe das Zielkonto, den freien Cloud-Speicher und die ausgewählten Fotoordner.',
          'Warte auf den bestätigten Abschluss beziehungsweise kläre angezeigte Fehler.',
          'Öffne die offizielle Cloud-Website auf einem zweiten Gerät und kontrolliere einige neue sowie ältere Aufnahmen.',
          'Teste auch ein längeres Video und wichtige Bilder aus zusätzlichen Apps, nicht nur das letzte Kamerafoto.',
        ],
      },
      {
        heading: 'Eine unabhängige Kopie erstellen',
        paragraphs: [
          'Exportiere wichtige Fotos und Videos zusätzlich auf einen Computer oder ein geeignetes externes Speichermedium. Verwende dafür den offiziellen Download- oder Exportweg deines Dienstes. Wenn du Originaldateien behalten möchtest, achte auf die entsprechende Exportoption und darauf, dass nicht nur kleine Vorschauen gespeichert werden. Große Sammlungen lassen sich übersichtlicher in nachvollziehbaren Zeitabschnitten übernehmen.',
          'Öffne nach dem Kopieren eine Stichprobe aus verschiedenen Monaten und prüfe Dateigröße, Bildqualität sowie die Abspielbarkeit von Videos. Trenne eine externe Sicherung anschließend sicher vom Gerät und bewahre sie geschützt auf. Ein Ordner auf demselben Handy hilft dir nicht, wenn genau dieses Handy verloren geht oder beschädigt wird.',
        ],
      },
      {
        heading: 'Aufräumen ohne böse Überraschung',
        paragraphs: [
          'Lies vor dem Löschen genau, ob eine Funktion nur die lokale Kopie entfernt oder das Bild aus der Mediathek löscht. Bei iCloud-Fotos wird eine Löschung auf andere verbundene Geräte übertragen. Auch bei anderen Fotodiensten hängt die Wirkung davon ab, wo und mit welcher Funktion du löschst. Ein Smartphone-Wechsel ist deshalb kein guter Moment für eine ungeprüfte Massenbereinigung.',
          'Wenn du nur Gerätespeicher sparen möchtest, suche nach der dafür vorgesehenen Optimierungs- oder Speicherfreigabefunktion und lies ihre Beschreibung. Prüfe vorher deine unabhängige Kopie. Behalte das alte Gerät nach einem Umzug zunächst unverändert, bis Fotos, Videos und weitere wichtige Daten auf dem neuen Gerät tatsächlich kontrolliert wurden.',
        ],
      },
    ],
    pitfall: '„Die Fotos sind in der Cloud, also kann ich sie in der Foto-App löschen“ ist eine riskante Annahme. Viele Apps synchronisieren genau diese Löschung. Ein Papierkorb mit begrenzter Frist ist kein dauerhafter Ersatz für ein Backup.',
    whenToGetHelp: 'Wenn Bilder über mehrere Konten, alte Handys und Computer verteilt sind oder nach einer Löschung fehlen, vermeide weitere Bereinigungsversuche. Gemeinsam lässt sich zuerst klären, welche vollständigen Kopien noch vorhanden sind und wie sie erhalten bleiben.',
    relatedSlugs: ['smartphone-fuer-senioren', 'postfach-voll', 'dokumente-scannen'],
    servicePath: '/leistungen/senioren-handy-hilfe/',
    sources: [
      { title: 'Google: Fotos und Videos sichern', url: 'https://support.google.com/photos/answer/6193313?co=GENIE.Platform%3DAndroid&hl=de' },
      { title: 'Apple: iCloud-Fotos einrichten und verwenden', url: 'https://support.apple.com/de-de/108782' },
      { title: 'Apple: iCloud-Daten archivieren oder kopieren', url: 'https://support.apple.com/de-de/108306' },
    ],
  },
  {
    slug: 'browser-erweiterungen-pruefen',
    title: 'Browser-Erweiterungen prüfen: Weniger Zugriff, mehr Überblick',
    description: 'Welche Erweiterungen brauchst du wirklich? Prüfe Herkunft, Websitezugriff und auffällige Änderungen in Chrome oder Firefox.',
    category: 'alltag',
    readMinutes: 4,
    image: 'software-service',
    imageAlt: 'Laptop mit geöffneten Programmfenstern und angeschlossenem Datenträger',
    updated: '2026-11-11',
    intro: 'Eine Browser-Erweiterung kann Passwörter verwalten, Texte übersetzen oder störende Inhalte ausblenden. Dafür erhält sie manchmal weitreichenden Zugriff auf besuchte Websites. Es lohnt sich deshalb, die installierte Liste gelegentlich durchzugehen: Was verwendest du wirklich, wer entwickelt es und auf welchen Seiten darf es arbeiten?',
    takeaways: [
      'Berechtigungen nach dem tatsächlichen Zweck beurteilen, nicht nur nach Sternen.',
      'Unbekannte oder nicht mehr benötigte Erweiterungen gezielt deaktivieren oder entfernen.',
      'Bei Problemen jeweils eine Änderung testen, damit die Ursache erkennbar bleibt.',
    ],
    sections: [
      {
        heading: 'Die vollständige Liste ansehen',
        paragraphs: [
          'Öffne die Erweiterungsverwaltung deines Browsers. In Chrome findest du sie über das Menü „Erweiterungen“, in Firefox über „Add-ons und Themes“. Ein fehlendes Symbol in der Symbolleiste bedeutet nicht, dass keine Erweiterung installiert ist. Manche Einträge wurden zusammen mit einem anderen Programm eingerichtet oder aus einem synchronisierten Browserprofil übernommen.',
          'Gehe die Liste einzeln durch und ordne jedem Eintrag einen konkreten Zweck zu. Wenn du nicht mehr weißt, wofür etwas benötigt wird, prüfe zunächst Name, Anbieter und Einstellungen. Auf einem verwalteten Arbeitsgerät können Erweiterungen absichtlich vorgeschrieben sein. Kläre dort unbekannte Einträge mit der Administration, statt sie mit Umwegen zu entfernen.',
        ],
      },
      {
        heading: 'Berechtigungen passend zum Zweck bewerten',
        paragraphs: [
          'Eine Erweiterung, die Inhalte einer Website verändert, braucht dafür einen gewissen Zugriff. Ein Übersetzer und ein Passwortmanager haben andere Aufgaben als eine einfache Farbpalette. Frage deshalb konkret: Ist die angeforderte Berechtigung für diese Funktion nachvollziehbar? Ein sehr allgemeiner Zugriff auf alle Websites verdient mehr Aufmerksamkeit als ein Zugriff auf eine einzelne benötigte Seite.',
          'Chrome bietet für geeignete Erweiterungen abgestufte Websiteberechtigungen, beispielsweise Zugriff erst bei einem Klick oder nur auf bestimmten Websites. Nicht jede Erweiterung unterstützt dieselben Einschränkungen. Änderungen können Funktionen beeinträchtigen; teste daher die Websites, für die du die Erweiterung wirklich brauchst. Ein bekanntes Symbol oder viele Downloads sind keine Garantie für dauerhaft vertrauenswürdiges Verhalten.',
        ],
      },
      {
        heading: 'Auffälligkeiten nachvollziehbar eingrenzen',
        paragraphs: [
          'Wenn plötzlich eine andere Suchmaschine startet, zusätzliche Werbung erscheint oder eine Website nur in einem Browser falsch funktioniert, kann eine Erweiterung beteiligt sein. Das ist zunächst eine Arbeitshypothese, kein Beweis. Notiere, seit wann das Problem besteht und ob kurz zuvor etwas installiert oder aktualisiert wurde.',
        ],
        steps: [
          'Speichere offene Arbeit und notiere die aktuell aktivierten Erweiterungen.',
          'Deaktiviere einen verdächtigen oder unnötigen Eintrag und lade die betroffene Seite neu.',
          'Prüfe, ob sich genau das beobachtete Problem verändert hat.',
          'Entferne nicht mehr benötigte Einträge bewusst; sichere vorher gegebenenfalls darin gespeicherte Daten oder Einstellungen.',
        ],
      },
      {
        heading: 'Eine kleine, gepflegte Auswahl behalten',
        paragraphs: [
          'Installiere neue Erweiterungen über den offiziellen Store deines Browsers und überprüfe dort Anbieter, Zweck und Berechtigungen. Auch ein offizieller Store ersetzt nicht deine Entscheidung, ob du den Zugriff wirklich benötigst. Verzichte auf Erweiterungen, die dir eine Videowiedergabe, einen Download oder eine angebliche Sicherheitsreparatur auf einer fremden Website aufzwingen wollen.',
          'Wenn ein entfernter Eintrag wiederkehrt oder sich Browsereinstellungen immer erneut ändern, suche nach der Ursache, statt ihn täglich zu löschen. Ein anderes Programm, eine Synchronisation oder eine Organisationsrichtlinie kann beteiligt sein. Bei konkretem Verdacht auf einen unerwünschten Zugriff solltest du sensible Konten von einem vertrauenswürdigen Gerät aus prüfen und die betroffenen Berechtigungen kontrollieren.',
        ],
      },
    ],
    pitfall: 'Das bloße Ausblenden eines Erweiterungssymbols entfernt weder die Erweiterung noch ihre Berechtigungen. Auch ein privates Browserfenster ist kein verlässlicher Test, solange unklar ist, welche Erweiterungen dort ausdrücklich zugelassen sind.',
    whenToGetHelp: 'Unterstützung ist sinnvoll, wenn Änderungen immer wieder zurückkommen, du eine Erweiterung nicht zuordnen kannst oder ein Passwortmanager betroffen ist. Halte Browsername, Erweiterungsname und beobachtetes Verhalten fest; exportierte Passwörter oder komplette Browserprofile nicht ungeschützt weitergeben.',
    relatedSlugs: ['outlook-sendet-nicht', 'office-installieren', 'smartphone-fuer-senioren'],
    servicePath: '/leistungen/programme/',
    sources: [
      { title: 'Google: Chrome-Erweiterungen und Websitezugriff verwalten', url: 'https://support.google.com/chrome/answer/2664769?hl=De' },
      { title: 'Mozilla: Add-ons deaktivieren oder deinstallieren', url: 'https://support.mozilla.org/de/kb/addons-deaktivieren-oder-deinstallieren' },
      { title: 'Mozilla: Erweiterungen und Berechtigungen verwalten', url: 'https://support.mozilla.org/de/kb/erweiterungen-verwalten-erweiterungen-schaltflache' },
    ],
  },
]
