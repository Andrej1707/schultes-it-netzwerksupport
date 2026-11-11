import type { GuideArticle } from './types'

export const networkGuides: GuideArticle[] = [
  {
    slug: 'wlan-reichweite',
    title: 'WLAN-Reichweite verbessern: erst messen, dann erweitern',
    description: 'Schwaches WLAN in einzelnen Räumen gezielt eingrenzen: Routerplatz, Vergleichsmessung und die richtige Entscheidung zwischen Repeater und Kabel.',
    category: 'wlan', readMinutes: 5, image: 'wifi',
    imageAlt: 'WLAN-Router auf einem hellen Regal in einer Wohnumgebung',
    updated: '2026-11-11',
    intro: 'Im Wohnzimmer läuft das Video, am Schreibtisch bricht das Gespräch ab. Das muss kein schlechter Internetvertrag sein. Oft ist nur der Weg zwischen Router und Gerät ungünstig. Mit drei Vergleichspunkten findest du heraus, ob du die Funkabdeckung verbessern solltest oder an einer anderen Stelle suchen musst.',
    takeaways: [
      'Vergleiche denselben Laptop oder dasselbe Handy nahe am Router und am Problemplatz.',
      'Ein freier Routerstandort hilft oft mehr als eine stärkere Tarifstufe.',
      'Ein Repeater braucht selbst guten Empfang; im Funkloch kommt er zu spät.',
    ],
    sections: [
      {
        heading: 'Internetleitung und WLAN auseinanderhalten',
        paragraphs: [
          'Teste zunächst eine bekannte Webseite und einen Videoanruf unmittelbar neben dem Router. Wiederhole den Versuch am problematischen Arbeitsplatz. Bleibt das Ergebnis direkt am Router schlecht, ist Reichweite wahrscheinlich nicht die einzige Ursache. Wenn möglich, folgt ein Vergleich mit einem Computer am Netzwerkkabel. Eine schnelle Kabelverbindung bei schwachem WLAN lenkt die Suche auf das Funknetz.',
          'Nutze für den Vergleich dasselbe Gerät und ungefähr dieselbe Tageszeit. Pausiere während einer Geschwindigkeitsmessung große Downloads auf deinen eigenen Geräten. Notiere Raum, Verbindungsart und Ergebnis. Ein einzelner Höchstwert sagt weniger aus als drei ähnliche Messungen. Beurteile außerdem, ob die Verbindung im Alltag stabil bleibt.',
        ],
      },
      {
        heading: 'Den Router aus der ungünstigen Ecke holen',
        paragraphs: [
          'Ein Router hinter dem Fernseher, im Metallverteiler oder tief unter dem Schreibtisch startet mit schlechten Bedingungen. Probiere einen freien, erhöhten Platz mit möglichst wenig Hindernissen in Richtung der genutzten Räume. Abstand zu großen Metallflächen und wasserhaltigen Gegenständen ist sinnvoll. Ein Ortswechsel um einen Meter kann bereits einen Unterschied machen.',
          'Der Anschluss begrenzt die Auswahl: Verlege keine Leitungen improvisiert durch Türen und verlängere Anschlusskabel nicht beliebig. Prüfe zuerst sichere Standorte innerhalb der vorhandenen Kabellänge. Lüftungsöffnungen müssen frei bleiben. Ein schöner geschlossener Schrank ist kein geeigneter Platz, wenn das Gerät dort schlecht funkt oder Wärme staut.',
        ],
      },
      {
        heading: 'Die passende Erweiterung auswählen',
        paragraphs: [
          'Ist das WLAN nach der Standortkorrektur nur in einem angrenzenden Raum schwach, kann ein passend platzierter Repeater reichen. Zwischen Router und Repeater muss eine stabile Verbindung möglich sein. Für eine andere Etage mit massiver Decke ist ein per LAN angeschlossener Access Point häufig die verlässlichere Lösung. Dabei wird das Funknetz am Zielort neu bereitgestellt.',
          'Kaufe nicht allein nach der größten Zahl auf der Verpackung. Entscheidend sind Wände, Standorte, vorhandene Kabel und die Fähigkeiten deiner Geräte. Ein neues Smartphone kann am selben Platz schneller sein als ein älterer Laptop. Das macht den Laptop nicht automatisch defekt und rechtfertigt noch keinen kompletten Routertausch.',
        ],
      },
      {
        heading: 'Den Erfolg dort prüfen, wo du arbeitest',
        paragraphs: [
          'Wiederhole nach jeder einzelnen Änderung die ursprünglichen Tests. Führe einen längeren Anruf am Schreibtisch und bewege dich mit dem Handy durch die häufig genutzten Räume. Wenn der beste Messwert steigt, aber das Gespräch weiterhin abbricht, ist das Problem noch nicht gelöst. Bewahre die Vergleichswerte auf; sie helfen bei einer gezielten weiteren Planung.',
        ],
      },
    ],
    pitfall: 'Ein Repeater direkt im schlecht versorgten Zimmer zeigt möglicherweise ein starkes eigenes WLAN an, obwohl seine Verbindung zum Router schwach bleibt.',
    whenToGetHelp: 'Wenn mehrere Etagen, massive Wände oder wechselnde Abbrüche zusammenkommen, lohnt sich eine Messung vor Ort. Bring Routermodell, Grundriss und deine Vergleichswerte mit.',
    relatedSlugs: ['mesh-wlan-planen', 'wlan-frequenzbaender', 'lan-oder-wlan'],
    servicePath: '/leistungen/netzwerk-wlan/',
    sources: [
      { title: 'FRITZ!: Router sinnvoll positionieren', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7590/3248_fritz-box-optimal-positionieren' },
      { title: 'Microsoft: Ursachen langsamer Internetverbindungen', url: 'https://support.microsoft.com/de-de/windows/experience/connectivity-networking/why-is-my-internet-connection-so-slow' },
    ],
  },
  {
    slug: 'mesh-wlan-planen',
    title: 'Mesh-WLAN planen: stabile Verbindungen statt mehr Funkgeräte',
    description: 'So planst du ein Mesh-Netz mit passenden Standorten, sinnvoller Verbindung zum Router und einem realistischen Test für alle wichtigen Räume.',
    category: 'wlan', readMinutes: 5, image: 'mesh-service',
    imageAlt: 'Mehrere kompakte WLAN-Geräte in einer hellen Wohnumgebung',
    updated: '2026-11-11',
    intro: 'Mesh kann mehrere WLAN-Stationen gemeinsam verwalten und den Wechsel zwischen ihnen erleichtern. Es ersetzt aber keine gute Verbindung zwischen den Stationen. Vor dem Kauf lohnt sich deshalb eine kleine Planung: Welche Räume müssen versorgt werden, wo liegen Kabel und was funktioniert heute schon zuverlässig?',
    takeaways: [
      'Plane von den genutzten Arbeitsplätzen aus, nicht nach der Zahl der Steckdosen.',
      'Die Verbindung zwischen den Mesh-Stationen ist genauso wichtig wie der Empfang am Handy.',
      'Kabel zu einem Mesh-Punkt können den Funkweg deutlich entlasten.',
    ],
    sections: [
      {
        heading: 'Den Bedarf auf einem einfachen Grundriss markieren',
        paragraphs: [
          'Zeichne Router, Etagen und die Räume ein, in denen du wirklich eine zuverlässige Verbindung brauchst. Ein Arbeitszimmer mit täglichen Videogesprächen hat andere Anforderungen als ein selten genutzter Kellerraum. Markiere dicke Wände, vorhandene LAN-Dosen und geeignete freie Stellplätze. So wird sichtbar, welche Bereiche sich mit einer Station gemeinsam erreichen lassen.',
          'Prüfe auch, ob das vermeintliche WLAN-Problem schon über Kabel auftritt. Wenn der Internetanschluss selbst ausfällt, wird ein neues Mesh-System daran nichts ändern. Schreibe vorab auf, welche Geräte betroffen sind und ob das Problem dauerhaft oder nur zu bestimmten Zeiten entsteht. Diese Unterscheidung spart unnötige Anschaffungen.',
        ],
      },
      {
        heading: 'Den Weg zurück zum Router mitplanen',
        paragraphs: [
          'Ein Funk-Repeater muss gleichzeitig den Router und deine Endgeräte gut erreichen. Ein Platz zwischen den beiden Bereichen ist deshalb oft geeigneter als die hinterste Steckdose im Zielzimmer. Nutze die Verbindungsanzeige des Systems oder die Hersteller-App, um den Standort zu beurteilen. Bei FRITZ! zeigt die App WLAN eine Bewertung der Repeater-Position an.',
          'Liegt bereits ein Netzwerkkabel zum Zielraum, prüfe einen dafür vorgesehenen Betrieb als LAN-Brücke oder Access Point. Dann muss die Verbindung zur Zentrale keine zusätzliche Funkstrecke überwinden. Die Unterstützung und Einrichtung hängen vom Modell ab. Ein Netzwerkkabel vom PC zu einem per Funk angebundenen Repeater macht hingegen nur den letzten Abschnitt kabelgebunden.',
        ],
      },
      {
        heading: 'Klein beginnen und Kompatibilität prüfen',
        paragraphs: [
          'Starte mit dem vorhandenen Router und einem sinnvoll platzierten zusätzlichen Punkt. Mehr Stationen verbessern die Verbindung nicht automatisch. Sie benötigen Platz im Funknetz und können bei ungünstiger Verteilung zusätzliche Konkurrenz erzeugen. Eine längere Kette von Repeatern sollte aus einem konkreten Bedarf entstehen, nicht aus dem Wunsch nach möglichst vielen Empfangsbalken.',
          'Prüfe vor einem Kauf die Mesh-Kompatibilität der konkreten Modelle und Softwarestände. Die Bezeichnung Mesh allein garantiert keine gemeinsame Verwaltung zwischen beliebigen Herstellern. Aktualisiere vorhandene Geräte über ihre offiziellen Updatefunktionen. Richte anschließend das System nach der Anleitung des Herstellers ein und kontrolliere, ob der neue Punkt wirklich als Mesh-Mitglied erscheint.',
        ],
      },
      {
        heading: 'Abnahme mit deinen tatsächlichen Geräten',
        paragraphs: [
          'Teste Videotelefonie, Streaming und einen größeren Download nacheinander an den vorgesehenen Plätzen. Gehe während eines normalen Anrufs einmal zwischen den Räumen hin und her. Der Wechsel zum nächsten Funkpunkt hängt auch vom Endgerät ab und ist nicht unter allen Bedingungen unterbrechungsfrei. Notiere problematische Übergänge, statt sie mit noch einer Station zu überdecken.',
          'Bewahre die Namen der Stationen und ihre Standorte als kurze Übersicht auf. Wenn später ein Raum anders genutzt oder ein Gerät versetzt wird, kannst du nachvollziehen, warum die ursprüngliche Verteilung gewählt wurde. Das erleichtert die Wartung ebenso wie die spätere Fehlersuche.',
        ],
      },
    ],
    pitfall: 'Eine schnelle Verbindung vom Handy zum Repeater sagt noch nichts über die Qualität des restlichen Wegs bis zum Router aus.',
    whenToGetHelp: 'Bei mehreren Etagen, gemischten Herstellern oder einem kleinen Büro mit vielen gleichzeitigen Nutzern hilft eine Planung mit Messung und dokumentierter Verkabelung.',
    relatedSlugs: ['wlan-reichweite', 'lan-oder-wlan', 'gast-wlan'],
    servicePath: '/leistungen/mesh-wlan-einrichten/',
    sources: [
      { title: 'FRITZ!: Mesh-Repeater richtig platzieren', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Mesh-Set-4200/3420_Mesh-Repeater-im-FRITZ-Heimnetz-optimal-positionieren' },
      { title: 'FRITZ!: Verbindungsprobleme bei Mesh-Repeatern', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-6690-Pro/438_mesh-repeater-stellt-keine-wlan-verbindung-her' },
    ],
  },
  {
    slug: 'fritzbox-absichern',
    title: 'FRITZ!Box absichern: die Einstellungen, die wirklich zählen',
    description: 'Updates, getrennte Kennwörter, WLAN-Verschlüsselung und bewusste Freigaben: eine verständliche Sicherheitsprüfung für deine FRITZ!Box.',
    category: 'wlan', readMinutes: 5, image: 'fritzbox-service',
    imageAlt: 'Router auf einer aufgeräumten Ablage neben einem Notebook',
    updated: '2026-11-11',
    intro: 'Dein Router verbindet nicht nur Geräte miteinander. Er verwaltet auch den Zugang zu deinem Heimnetz. Eine gute Grundeinstellung ist deshalb wichtiger als ein besonders versteckter WLAN-Name. Die folgenden Prüfungen kannst du nacheinander durchführen, ohne funktionierende Verbindungen wahllos umzubauen.',
    takeaways: [
      'Router-Verwaltung und WLAN-Zugang benötigen unterschiedliche, gut geschützte Kennwörter.',
      'Aktuelle Gerätesoftware und passende WLAN-Verschlüsselung gehören zur Grundausstattung.',
      'Freigaben und Fernzugriffe nur für einen bekannten Zweck behalten.',
    ],
    sections: [
      {
        heading: 'Zugang zur Verwaltung bewusst absichern',
        paragraphs: [
          'Öffne die Routeroberfläche nur über den dir bekannten lokalen Zugang, während du mit deinem eigenen Netz verbunden bist. Verwende dafür keine Links aus unerwarteten E-Mails. Das Kennwort für die Verwaltung ist etwas anderes als der WLAN-Netzwerkschlüssel. Wer nur ins WLAN darf, sollte deshalb nicht automatisch auch deine Routereinstellungen ändern können.',
          'Ersetze ein allgemeines Standardkennwort durch ein eigenes langes Kennwort. Ein individuelles, zufälliges Gerätekennwort ist bereits etwas anderes als ein überall identisches Standardpasswort. Speichere den Verwaltungszugang in deinem Passwortmanager und halte einen sicheren Wiederherstellungsweg bereit. Teile keine Fotos des Geräteaufklebers öffentlich; darauf können mehrere Zugangsdaten stehen.',
        ],
      },
      {
        heading: 'Updates und Wiederherstellung vorbereiten',
        paragraphs: [
          'Kontrolliere die Update-Einstellungen der FRITZ!Box und verwende die vom Hersteller angebotenen automatischen Sicherheitsupdates. Bei manchen vom Anbieter verwalteten Geräten ist der Anbieter für die Aktualisierung zuständig. Ein fehlender Updateknopf ist dann kein Anlass, eine beliebige Firmware-Datei aus dem Internet zu installieren.',
          'Lege vor größeren Änderungen eine kennwortgeschützte Sicherung der Einstellungen an und bewahre sie außerhalb des Routers auf. Plane Updates so, dass ein kurzer Ausfall von Internet und Telefonie nicht stört. Trenne die Stromversorgung während eines laufenden Updates nicht. Prüfe danach, ob die benötigten Verbindungen wieder funktionieren und die erwartete Version angezeigt wird.',
        ],
      },
      {
        heading: 'WLAN und Zugriffe getrennt betrachten',
        paragraphs: [
          'Verwende WPA3, soweit Router und Endgeräte es unterstützen. Für gemischte Gerätebestände kann ein passender WPA2/WPA3-Modus erforderlich sein. Ein offenes WLAN oder veraltete Verschlüsselung ist keine gute Reparatur für ein einzelnes Gerät, das sich nicht verbinden will. Prüfe stattdessen dessen Unterstützung und aktuelle Software.',
          'Gehe die eingerichteten Portfreigaben, Benutzer und Fernzugänge durch. Zu jedem Eintrag sollte klar sein, welches Gerät oder welcher Dienst ihn benötigt. Eine unbekannte Freigabe ist ein Anlass zur Klärung. Schalte nicht vorsorglich alle Schutzfunktionen ab, nur weil eine Anwendung Probleme meldet. Unnötige Zugänge kannst du nach einer Sicherung gezielt entfernen.',
        ],
      },
      {
        heading: 'Eine kleine Routine statt ständiger Umbauten',
        paragraphs: [
          'Notiere Datum, Softwarestand und die absichtlich eingerichteten Freigaben. Wiederhole die Prüfung nach einem Gerätewechsel oder wenn du einen Dienst nicht mehr nutzt. Für Besuch ist ein getrenntes Gastnetz sinnvoller als das Weiterreichen deines Hauptzugangs. Bei unbekannten Geräten in der Liste klärst du zunächst, ob es eigene Geräte mit wechselnden privaten WLAN-Adressen sind.',
          'Wenn du einen unberechtigten Zugriff vermutest, dokumentiere auffällige Einstellungen und ändere Zugangsdaten von einem vertrauenswürdigen Gerät aus. Ein Neustart allein beseitigt keine absichtlich veränderte Konfiguration. Sichere wichtige Belege, bevor du das Zurücksetzen mit qualifizierter Hilfe planst.',
        ],
      },
    ],
    pitfall: 'Ein versteckter WLAN-Name oder ein MAC-Filter ersetzt weder aktuelle Verschlüsselung noch ein gutes Kennwort und regelmäßige Updates.',
    whenToGetHelp: 'Unbekannte Portfreigaben, unerklärlich geänderte DNS-Einstellungen oder nicht mehr kontrollierbare Benutzerkonten sollten gezielt geprüft werden. Zugangsdaten bitte nicht ungeschützt per Nachricht senden.',
    relatedSlugs: ['gast-wlan', 'router-wechseln', 'wlan-frequenzbaender'],
    servicePath: '/leistungen/fritzbox-hilfe/',
    sources: [
      { title: 'FRITZ!: Offizielle Updatefunktion der FRITZ!Box', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7490/2_FRITZ-OS-Update-der-FRITZ-Box-durchfuehren' },
      { title: 'BSI: Basistipps zum Schutz des Routers', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Magazin/BSI-Magazin_2022_02.pdf?__blob=publicationFile&v=3' },
      { title: 'BSI: Vernetzte Alltagsgeräte sicher nutzen', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Wegweiser_Checklisten_Flyer/Brosch_A6_Internet_der_Dinge.pdf?__blob=publicationFile&v=5' },
    ],
  },
  {
    slug: 'internet-ausgefallen',
    title: 'Internet ausgefallen: Gerät, WLAN und Anschluss unterscheiden',
    description: 'Mit wenigen Vergleichstests erkennst du, ob ein einzelnes Gerät, dein Heimnetz oder der Internetanschluss gestört ist – ohne vorschnellen Werksreset.',
    category: 'wlan', readMinutes: 5, image: 'router-service',
    imageAlt: 'Router und angeschlossene Netzwerkkabel auf einer hellen Arbeitsfläche',
    updated: '2026-11-11',
    intro: 'Die Meldung „Kein Internet“ sagt noch nicht, wo der Fehler sitzt. Es kann ein einzelner Browser sein, die Verbindung zum Router oder der Anschluss des Anbieters. Mit einer festen Reihenfolge vermeidest du, dass aus einer kurzen Störung zusätzlich verlorene Zugangsdaten und eine neue Routereinrichtung werden.',
    takeaways: [
      'Teste eine zweite Webseite und ein zweites Gerät, bevor du Einstellungen veränderst.',
      'Eine WLAN-Verbindung bedeutet noch nicht, dass der Router Internetzugang hat.',
      'Notiere Fehlermeldung und Uhrzeit; ein Werksreset ist kein erster Diagnoseschritt.',
    ],
    sections: [
      {
        heading: 'Den Umfang der Störung bestimmen',
        paragraphs: [
          'Öffne zunächst zwei voneinander unabhängige Webseiten. Funktioniert nur ein Dienst nicht, kann dessen Server gestört sein. Prüfe anschließend ein zweites Gerät im selben WLAN. Achte beim Smartphone darauf, dass es den Versuch nicht unbemerkt über Mobilfunk erledigt. Für diesen kurzen Vergleich kannst du mobile Daten ausschalten und danach wieder aktivieren.',
          'Ist nur der Computer betroffen, kontrolliere Flugmodus, WLAN-Schalter und den Namen des verbundenen Netzes. Starte das betroffene Gerät einmal normal neu. Bei einem Firmenrechner solltest du verwaltete VPN-, Proxy- oder Sicherheitsregeln nicht eigenmächtig ändern. Notiere, ob der Fehler unmittelbar nach einer Installation oder Aktualisierung aufgetreten ist.',
        ],
      },
      {
        heading: 'Die Verbindung zum Router prüfen',
        paragraphs: [
          'Wenn du deine lokale Routeroberfläche aufrufen kannst, funktioniert zumindest dieser Weg im Heimnetz. Bei einer FRITZ!Box findest du dort Informationen zur Internetverbindung und ein Ereignisprotokoll. Lies die aktuelle Meldung, statt aus einer blinkenden LED allein auf die Ursache zu schließen: Bedeutung und Farbe unterscheiden sich nach Modell.',
          'Kontrolliere erreichbare Stecker und Kabel auf festen Sitz. Verwechsle LAN- und Anschlussbuchsen nicht. Bei Glasfaser darfst du keine offenen Faserenden ansehen, anfassen oder reinigen; lasse empfindliche Anschlüsse bei Unsicherheit unberührt. Prüfe getrennt, ob auch ein vorgeschaltetes Modem oder Glasfasergerät mit Strom versorgt ist.',
        ],
      },
      {
        heading: 'Ein geordneter Neustart und eine klare Entscheidung',
        paragraphs: [
          'Falls kein Update läuft, kann ein geordneter Neustart des Routers sinnvoll sein. Beachte dabei die Anleitung deines Modells und gib ihm danach ausreichend Zeit, den Anschluss wieder aufzubauen. Drücke nicht die Reset-Taste. Ständiges Aus- und Einschalten erschwert die Beobachtung und kann die Wiederherstellung der Verbindung immer wieder unterbrechen.',
          'Funktioniert das Internet auf keinem Gerät und meldet der Router weiterhin ein Anschluss- oder Anmeldeproblem, prüfe über Mobilfunk die offizielle Störungsseite deines Anbieters. Wenn möglich, teste einen Computer direkt per LAN am Router. Bleibt auch das erfolglos, ist ein zusätzlicher WLAN-Repeater keine passende Lösung.',
        ],
      },
      {
        heading: 'Für den Support die richtigen Angaben sammeln',
        paragraphs: [
          'Hilfreich sind Beginn und Häufigkeit des Ausfalls, Anschlussart, Routermodell sowie der genaue Text aus der Statusanzeige. Notiere außerdem, ob Telefonie mitbetroffen ist und welche Vergleichstests du durchgeführt hast. Gib diese Informationen über den offiziellen Kontaktweg an deinen Anbieter weiter. Kennwörter und vollständige Konfigurationssicherungen gehören nicht in öffentliche Foren.',
          'Für einen dringenden Termin kann ein eigener Mobilfunk-Hotspot eine Übergangslösung sein, sofern Datenvolumen und Empfang reichen. Behalte dessen Kosten und Kennwort im Blick. Das ist eine Überbrückung, kein Beleg dafür, dass der ursprüngliche Anschluss wieder funktioniert.',
        ],
      },
    ],
    pitfall: 'Ein Werksreset kann Internet- und Telefoniezugangsdaten löschen. Ohne dokumentierte Einrichtung wird die Fehlersuche dadurch oft länger statt kürzer.',
    whenToGetHelp: 'Bei Anschlussmeldungen und Ausfall aller Geräte ist meist der Anbieter der erste Kontakt. Wenn die Leitung funktioniert, aber dein Heimnetz oder einzelne Geräte ausfallen, hilft eine gezielte lokale Prüfung.',
    relatedSlugs: ['wlan-reichweite', 'lan-oder-wlan', 'router-wechseln'],
    servicePath: '/leistungen/router-entstoerung/',
    sources: [
      { title: 'Microsoft: WLAN-Verbindungen systematisch prüfen', url: 'https://support.microsoft.com/de-de/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows' },
      { title: 'FRITZ!: Kein Internetzugang über die FRITZ!Box', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7510/636_Internetzugang-uber-FRITZ-Box-nicht-moglich' },
      { title: 'FRITZ!: DSL-Verbindungsaufbau und Ereignisse', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7530-AX/55_Power-LED-der-FRITZ-Box-blinkt/' },
    ],
  },
  {
    slug: 'gast-wlan',
    title: 'Gast-WLAN einrichten: Besuch ins Internet, Heimnetz getrennt',
    description: 'Ein separates Gastnetz schützt die Trennung zu deinen eigenen Geräten. So richtest du es sinnvoll ein und prüfst, ob Drucker und Freigaben verborgen bleiben.',
    category: 'wlan', readMinutes: 5, image: 'overview-network',
    imageAlt: 'Aufgeräumter Wohnbereich mit einem WLAN-Gerät und einem Smartphone',
    updated: '2026-11-11',
    intro: 'Besuch braucht meistens nur Internet, keinen Zugriff auf deinen Drucker, Speicher oder die Routerverwaltung. Dafür ist ein privates Gast-WLAN gedacht. Es bekommt einen eigenen Zugang und lässt sich unabhängig vom Heimnetz verwalten. Entscheidend ist dabei die tatsächliche Trennung, nicht nur ein anderer Netzwerkname.',
    takeaways: [
      'Nutze ein getrenntes privates Gastnetz mit eigenem Kennwort.',
      'Prüfe die Trennung einmal mit einem eigenen Gerät, bevor du den Zugang verteilst.',
      'Das Gastnetz teilt sich weiterhin deinen Internetanschluss und dessen Bandbreite.',
    ],
    sections: [
      {
        heading: 'Vorher klären, was Gäste brauchen',
        paragraphs: [
          'Für E-Mail, Nachrichten und Webseiten genügt normalerweise ein Internetzugang. Wenn Gäste gemeinsam auf einen Fernseher übertragen oder einen Drucker verwenden sollen, wird die Situation anders: Diese Geräte stehen meist im Heimnetz und sind aus einem getrennten Gastnetz absichtlich nicht erreichbar. Hebe die Trennung nicht einfach auf, nur um eine einzelne Komfortfunktion zu ermöglichen.',
          'Auch ein Smart-Home-Gerät lässt sich nicht automatisch sinnvoll ins Gastnetz auslagern. Manche Geräte benötigen lokale Kommunikation mit deinem Handy oder einer Steuerzentrale. Prüfe dafür die Herstelleranforderungen. In einem kleinen Büro ersetzt ein gewöhnliches Gast-WLAN keine durchdachte Trennung von Arbeitsplätzen, Servern und geschäftlichen Geräten.',
        ],
      },
      {
        heading: 'Das private Gastnetz bewusst konfigurieren',
        paragraphs: [
          'Öffne die Verwaltung deines eigenen Routers und suche die Funktion für den WLAN-Gastzugang. Bei FRITZ! liegt sie üblicherweise im WLAN-Bereich. Wähle für privaten Besuch die kennwortgeschützte Variante. Ein öffentlicher Hotspot ist eine andere Betriebsart und sollte nicht aus Bequemlichkeit statt einer geschützten Verbindung aktiviert werden.',
          'Vergib einen klar erkennbaren Namen und einen eigenen langen Netzwerkschlüssel. Verwende nicht das Kennwort der Routerverwaltung. Prüfe die Einstellungen dazu, ob Geräte im Gastnetz untereinander kommunizieren dürfen. Für normalen Internetzugang ist diese Kommunikation meist nicht nötig. Namen und verfügbare Optionen können je nach Routermodell und Softwarestand abweichen.',
        ],
      },
      {
        heading: 'Die Trennung und Reichweite testen',
        paragraphs: [
          'Verbinde ein eigenes Smartphone mit dem Gastnetz und prüfe zuerst normale Webseiten. Versuche anschließend, einen bekannten lokalen Drucker oder eine private Dateifreigabe zu erreichen. Die Verbindung dorthin sollte bei einem getrennten Gastnetz nicht möglich sein. Achte darauf, dass das Testgerät wirklich mit dem Gastnetz verbunden bleibt.',
          'Falls du Repeater oder Mesh-Punkte nutzt, kontrolliere den Zugang auch in den Räumen, in denen Gäste sitzen. Nicht jede beliebige Erweiterung übernimmt das Gastnetz automatisch. Bei einem kompatiblen FRITZ!-Mesh kann der zentrale Router die Einstellungen weitergeben. Das sollte in deiner konkreten Konfiguration geprüft werden, statt es allein aus dem sichtbaren Netzwerknamen abzuleiten.',
        ],
      },
      {
        heading: 'Zugang unkompliziert teilen und später aufräumen',
        paragraphs: [
          'Ein vom Router erzeugter QR-Code kann das Abtippen erleichtern. Behandle ihn wie das enthaltene WLAN-Kennwort und veröffentliche ihn nicht versehentlich mit einem Foto deiner Wohnung oder deines Schreibtischs. Wenn du den Zugang nur gelegentlich brauchst, kannst du ihn nach dem Besuch wieder deaktivieren oder eine passende Zeitbegrenzung verwenden.',
          'Große Downloads im Gastnetz beanspruchen denselben Anschluss wie dein eigener Videoanruf. Falls dein Router entsprechende Funktionen bietet, kannst du den Zugang zeitlich oder hinsichtlich der verfügbaren Bandbreite begrenzen. Teste danach die normale Nutzung. Eine sehr strenge Beschränkung kann ausreichen, um Webseiten zu öffnen, aber Gespräche unbrauchbar machen.',
        ],
      },
    ],
    pitfall: 'Ein zusätzliches WLAN mit anderem Namen ist ohne Isolation noch kein getrenntes Gastnetz. Das muss die Routerfunktion ausdrücklich leisten.',
    whenToGetHelp: 'Wenn Gäste drucken oder präsentieren sollen, ohne auf geschäftliche Daten zugreifen zu können, ist eine passende Netzplanung sinnvoll. Die richtige Lösung hängt von den beteiligten Geräten ab.',
    relatedSlugs: ['fritzbox-absichern', 'mesh-wlan-planen', 'wlan-frequenzbaender'],
    servicePath: '/leistungen/netzwerk-wlan/',
    sources: [
      { title: 'FRITZ!: Privaten WLAN-Gastzugang einrichten', url: 'https://fritz.com/apps/knowledge-base/fritz-box-7590/294_wlan-gastzugang-in-fritz-box-einrichten/' },
      { title: 'FRITZ!: Gastzugang per QR-Code teilen', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-6860-5G/1906_WLAN-Gastzugang-der-FRITZ-Box-per-QR-Code-teilen/' },
    ],
  },
  {
    slug: 'wlan-frequenzbaender',
    title: '2,4, 5 oder 6 GHz: welches WLAN-Band passt zu deinem Gerät?',
    description: 'Reichweite, Tempo und Geräteunterstützung verständlich unterscheiden. So findest du ein passendes WLAN-Band, ohne funktionierende Verbindungen unnötig umzubauen.',
    category: 'wlan', readMinutes: 5, image: 'network-service',
    imageAlt: 'Notebook und WLAN-Router auf einer hellen Tischfläche',
    updated: '2026-11-11',
    intro: 'Eine höhere Zahl ist beim WLAN nicht automatisch überall besser. Die verfügbaren Frequenzbänder haben unterschiedliche Stärken, und deine Geräte müssen sie unterstützen. Für die Entscheidung zählt deshalb, was am tatsächlichen Nutzungsort funktioniert — nicht, welche maximale Datenrate auf dem Routerkarton steht.',
    takeaways: [
      '2,4 GHz ist oft hilfreich bei größerer Entfernung und älteren Alltagsgeräten.',
      '5 und 6 GHz können nahe an einer geeigneten Station hohe Datenraten ermöglichen.',
      'Router, Endgerät und Software bestimmen gemeinsam, welche Verbindung möglich ist.',
    ],
    sections: [
      {
        heading: 'Frequenzband und WLAN-Generation nicht verwechseln',
        paragraphs: [
          'Die Angaben 2,4, 5 und 6 GHz beschreiben Funkbereiche. Wi-Fi 5, 6 oder 7 bezeichnen dagegen WLAN-Generationen. Daraus ergibt sich keine einfache Gleichung „Wi-Fi 6 gleich 6 GHz“. Für das 6-GHz-Band brauchst du passende Technik, etwa Geräte mit Wi-Fi 6E oder entsprechender Wi-Fi-7-Unterstützung. Prüfe immer die Spezifikation des konkreten Modells.',
          'Ein neuer Router erweitert nicht nachträglich die Funkhardware eines alten Druckers. Wenn der Drucker nur 2,4 GHz unterstützt, bleibt dieser Bereich für ihn relevant. Das ist für gelegentliche Druckaufträge kein grundsätzlicher Nachteil. Ein schnellerer WLAN-Standard lohnt sich vor allem dann, wenn Anwendung, Entfernung und die übrigen Geräte davon profitieren können.',
        ],
      },
      {
        heading: 'Die Stärken am richtigen Ort nutzen',
        paragraphs: [
          '2,4 GHz erreicht unter vergleichbaren Bedingungen häufig weiter und kommt besser durch Hindernisse. Gleichzeitig teilen sich viele Geräte diesen Bereich. 5 GHz bietet oft mehr nutzbare Kapazität, verliert über ungünstige Funkwege aber eher an Stärke. 6 GHz kann in der Nähe einer passenden Station sehr leistungsfähig sein, ist jedoch kein Ersatz für zusätzliche Versorgung hinter massiven Wänden.',
          'Wände, Möbel, Nachbarnetze und die Antennen der beteiligten Geräte wirken zusammen. Eine pauschale Reichweitenangabe in Metern hilft in einer Wohnung deshalb wenig. Für einen Arbeitsplatz mit Videogesprächen ist eine etwas langsamere, stabile Verbindung meist nützlicher als ein sehr hoher Spitzenwert, der bei jeder Bewegung einbricht.',
        ],
      },
      {
        heading: 'Automatische Auswahl zunächst arbeiten lassen',
        paragraphs: [
          'Viele moderne Router und Mesh-Systeme stellen mehrere Bänder unter einem gemeinsamen Netzwerknamen bereit. Das kann die Auswahl und den Wechsel vereinfachen. Wenn alles funktioniert, gibt es keinen Grund, die Netze vorsorglich aufzuteilen. Welches Band tatsächlich verwendet wird, lässt sich häufig in der Routerübersicht oder den Verbindungsdetails des Geräts nachsehen.',
          'Für eine gezielte Diagnose können getrennte Namen oder ein kurzzeitig fest gewähltes Band helfen, sofern das System dies unterstützt. Dokumentiere die ursprüngliche Einstellung und ändere nur eine Sache. Schalte nicht dauerhaft ganze Bänder ab, weil ein einzelnes Gerät bei der Einrichtung Schwierigkeiten hat. Prüfe zunächst dessen Anleitung und Anforderungen.',
        ],
      },
      {
        heading: 'Mit einer echten Aufgabe vergleichen',
        paragraphs: [
          'Vergleiche die erreichbaren Bänder mit demselben Gerät am selben Ort. Wiederhole einen Download und einen normalen Anruf, während andere größere Übertragungen pausieren. Notiere neben dem Tempo auch Verbindungsabbrüche. Für Cloud-Anwendungen kann der Internetanschluss früher begrenzen als das WLAN; ein schnellerer Funklink allein macht dann keinen Unterschied.',
          'Wenn nur ein Raum unzuverlässig bleibt, ist die Position einer Station häufig der bessere Ansatz als die Jagd nach einem anderen Kanal. Hebe neue Messwerte zusammen mit dem Datum auf. So erkennst du später, ob ein Update, ein versetztes Gerät oder eine veränderte Raumnutzung den Unterschied gemacht hat.',
        ],
      },
    ],
    pitfall: 'Die angezeigte WLAN-Verbindungsrate ist keine Zusage für deine Downloadgeschwindigkeit. Sie beschreibt einen Funklink, nicht den gesamten Weg zum Internetdienst.',
    whenToGetHelp: 'Wenn ältere Geräte nach einer WLAN-Änderung ausfallen oder ein neues Gerät trotz guter Versorgung instabil bleibt, sollten Kompatibilität, Treiber und konkrete Routereinstellungen zusammen geprüft werden.',
    relatedSlugs: ['wlan-reichweite', 'mesh-wlan-planen', 'lan-oder-wlan'],
    servicePath: '/leistungen/netzwerk-wlan/',
    sources: [
      { title: 'Microsoft: WLAN-Bänder und Raumaufteilung', url: 'https://support.microsoft.com/de-de/windows/experience/connectivity-networking/wi-fi-and-your-home-layout' },
      { title: 'FRITZ!: Unterschiede und Möglichkeiten von Wi-Fi 7', url: 'https://provider.fritz.com/technik/wi-fi-7-das-multi-gigabit-wlan' },
      { title: 'FRITZ!: WLAN-Geschwindigkeiten hängen von der Ausstattung ab', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7520/3539_Welche-WLAN-Geschwindigkeiten-konnen-mit-FRITZ-Box-erreicht-werden/' },
    ],
  },
  {
    slug: 'lan-oder-wlan',
    title: 'LAN oder WLAN: die passende Verbindung für deinen Arbeitsplatz',
    description: 'Wann sich ein Netzwerkkabel lohnt, wo WLAN die bessere Wahl bleibt und wie du einen fairen Vergleich ohne neue Hardware durchführst.',
    category: 'wlan', readMinutes: 5, image: 'network-service',
    imageAlt: 'Notebook und Netzwerkgeräte auf einer aufgeräumten Arbeitsfläche',
    updated: '2026-11-11',
    intro: 'WLAN ist bequem, ein Netzwerkkabel oft berechenbarer. Für einen festen Arbeitsplatz kann eine Kabelverbindung deshalb viel Ruhe bringen. Trotzdem muss nicht jedes Handy, jeder Fernseher und jeder Drucker verkabelt werden. Die richtige Entscheidung ergibt sich aus deinem Nutzungsort, den Anwendungen und einem Vergleich mit vorhandener Technik.',
    takeaways: [
      'Für feste Arbeitsplätze mit wichtigen Gesprächen ist LAN eine gute Vergleichsbasis.',
      'WLAN ist praktisch für mobile Geräte und kann bei guter Versorgung zuverlässig sein.',
      'Ein Kabel zwischen Computer und Funk-Repeater macht nicht den gesamten Weg zu LAN.',
    ],
    sections: [
      {
        heading: 'Zuerst die tatsächliche Anforderung benennen',
        paragraphs: [
          'Geht es um stabile Videogespräche, große Kopiervorgänge auf einen lokalen Speicher oder gelegentliches Surfen? Für Gespräche zählen gleichmäßige Übertragung und wenige Aussetzer. Bei großen Dateien kann die Verbindungsgeschwindigkeit wichtiger werden. Ein schneller Internetvertrag allein beantwortet diese Frage nicht, weil lokale Übertragungen deinen Internetanschluss gar nicht benutzen müssen.',
          'An einem Schreibtisch, der dauerhaft am selben Platz bleibt, lässt sich ein Kabel oft unauffällig führen. Bei einem Tablet auf dem Sofa ist Bewegungsfreiheit entscheidender. Plane deshalb nicht nach einer pauschalen Regel für alle Geräte. Eine Mischung aus kabelgebundenen Arbeitsplätzen und gut versorgtem WLAN ist häufig sinnvoll.',
        ],
      },
      {
        heading: 'Einen fairen Vergleich durchführen',
        paragraphs: [
          'Verbinde den Computer für einen Test direkt mit einem LAN-Anschluss des Routers. Manche Notebooks benötigen einen passenden Ethernet-Adapter. Verwende vorhandenes, unbeschädigtes Kabel und einen seriösen Adapter; für diesen ersten Vergleich ist kein Umbau der Wohnung erforderlich. Kontrolliere in den Netzwerkeinstellungen, dass die Verbindung tatsächlich über Ethernet läuft.',
          'Teste dieselbe Anwendung anschließend über WLAN am normalen Arbeitsplatz. Pausiere dabei große eigene Downloads und vergleiche mehr als einen kurzen Geschwindigkeitswert. Läuft das Gespräch über LAN ruhig und über WLAN nicht, lohnt sich die Funkdiagnose. Sind beide Verbindungen gleichermaßen schlecht, kann der Engpass am Anschluss, Gegenserver oder Endgerät liegen.',
        ],
      },
      {
        heading: 'Den vollständigen Verbindungsweg betrachten',
        paragraphs: [
          'Zwischen Computer und Router können Dockingstation, Switch, Wanddose und mehrere Kabelabschnitte liegen. Jede Verbindung muss funktionieren. Wenn ein Port nur mit einer unerwartet niedrigen Geschwindigkeit verbunden ist, prüfe zuerst ein anderes bekannt funktionierendes Kabel und einen anderen vorgesehenen Anschluss. Kaufe nicht sofort einen neuen Router, nur weil die Anzeige unter dem Tariftempo liegt.',
          'Auch ein Kabel am Repeater kann nützlich sein, bleibt aber abhängig von dessen Verbindung zum Router. Ist dieser Rückweg drahtlos, gelten dort weiterhin die Bedingungen des Funknetzes. Ähnlich hängt Powerline stark von der elektrischen Installation ab. Es ist keine pauschal gleichwertige Ersatzleitung für ein sauber verlegtes Netzwerkkabel.',
        ],
      },
      {
        heading: 'Eine dauerhafte Lösung ordentlich umsetzen',
        paragraphs: [
          'Verlege Kabel so, dass niemand darüber stolpert und Türen sie nicht quetschen. Für feste Leitungen durch Wände oder zwischen Etagen sollte eine fachgerechte Lösung geplant werden. Beschrifte wichtige Anschlüsse. Ein kleiner Plan mit Router, Switch und Arbeitsplatz spart bei der nächsten Störung viel Sucharbeit.',
          'Prüfe nach dem Umbau Drucker, gemeinsame Speicher, VPN und einen längeren Anruf. Ein als öffentlich eingestuftes Windows-Netz kann Freigaben absichtlich einschränken. Ändere das Profil nur im eigenen vertrauenswürdigen Netz und nicht als pauschale Reparatur auf Reisen oder in fremden WLANs. Die Firewall bleibt aktiv.',
        ],
      },
    ],
    pitfall: 'Ein teures Kabel behebt weder einen überlasteten Internetanschluss noch einen schlecht angebundenen Repeater. Prüfe den ganzen Weg und den konkreten Engpass.',
    whenToGetHelp: 'Bei wiederkehrenden Abbrüchen, mehreren Switches oder geplanter fester Verkabelung hilft eine Prüfung der Anschlüsse und des Netzaufbaus. Gerade im Büro sollte die Lösung dokumentiert bleiben.',
    relatedSlugs: ['wlan-reichweite', 'mesh-wlan-planen', 'internet-ausgefallen'],
    servicePath: '/leistungen/netzwerk-wlan/',
    sources: [
      { title: 'Microsoft: Ethernet-Verbindungen prüfen', url: 'https://support.microsoft.com/de-de/windows/experience/connectivity-networking/fix-ethernet-connection-problems-in-windows' },
      { title: 'Microsoft: Netzwerkeinstellungen und Netzwerkprofile', url: 'https://support.microsoft.com/de-de/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows' },
      { title: 'Microsoft: Verbindungsqualität für Videoanrufe verbessern', url: 'https://support.microsoft.com/de-de/teams/troubleshooting/how-to-improve-your-internet-connection-for-better-call-quality-in-microsoft-teams' },
    ],
  },
  {
    slug: 'router-wechseln',
    title: 'Router wechseln: mit Sicherung, Zugangsdaten und Funktionscheck',
    description: 'So bereitest du einen Routerwechsel vor, übernimmst nur passende Einstellungen und prüfst Internet, Telefonie, WLAN und verbundene Geräte.',
    category: 'wlan', readMinutes: 6, image: 'router-service',
    imageAlt: 'Router und Netzwerkkabel auf einer hellen Arbeitsfläche',
    updated: '2026-11-11',
    intro: 'Ein neuer Router soll die Verbindung verbessern und nicht einen ganzen Abend lang Internet, Telefon und Drucker verschwinden lassen. Gute Vorbereitung macht den Wechsel überschaubar. Behalte das alte Gerät zunächst als Rückfallmöglichkeit und prüfe vor dem Abstecken, welche Informationen du für deinen Anschluss wirklich brauchst.',
    takeaways: [
      'Kompatibilität mit Anschluss und Anbieter vor dem Kauf bestätigen.',
      'Einstellungen sichern und Internet- sowie Telefoniedaten getrennt bereithalten.',
      'Nach dem Wechsel alle wichtigen Funktionen testen, nicht nur eine Webseite.',
    ],
    sections: [
      {
        heading: 'Anschluss, Anbieter und Gerätebestand erfassen',
        paragraphs: [
          'DSL, Kabel und Glasfaser benötigen passende Anschlusstechnik. Auch ein Router hinter einem separaten Modem braucht die richtige Verbindung und Konfiguration. Prüfe die Anforderungen deines Anbieters und des konkreten Routers. Bei bestimmten Anschlussarten muss ein neues Gerät zusätzlich beim Anbieter registriert oder freigeschaltet werden. Ein vorhandener Stecker allein beweist keine Kompatibilität.',
          'Schreibe auf, was heute am Router hängt: Computer, Repeater, Telefone, Drucker, Smart-Home-Geräte und gegebenenfalls ein lokaler Speicher. Fotografiere die Verkabelung für deine eigene Dokumentation, ohne Zugangsdaten öffentlich zu teilen. Halte außerdem fest, welche besonderen Einstellungen du bewusst nutzt, etwa ein Gastnetz oder eine Verbindung ins Firmennetz.',
        ],
      },
      {
        heading: 'Sicherung und Rückweg vorbereiten',
        paragraphs: [
          'Exportiere die Einstellungen mit der Sicherungsfunktion des alten Routers und verwahre die Datei geschützt. Das Sicherungskennwort gehört in deinen Passwortmanager. Eine Konfigurationsdatei ersetzt nicht automatisch fehlende Anbieterdaten. Kläre deshalb vorher, wie Internet und Telefonie beim neuen Gerät aktiviert werden und ob Zugangsinformationen separat benötigt werden.',
          'Wähle einen Zeitpunkt ohne wichtige Gespräche oder laufende Übertragungen. Lade die passende Herstelleranleitung vorab herunter, damit du sie auch während der Unterbrechung lesen kannst. Lass das alte Gerät zunächst unverändert. Herstellerassistenten können allerdings am Ende des Umzugs den alten Router zurücksetzen; lies diese Hinweise vor dem Start aufmerksam.',
        ],
      },
      {
        heading: 'Einstellungen passend statt blind übernehmen',
        paragraphs: [
          'Innerhalb derselben Produktfamilie kann ein offizieller Umzugsassistent viele Einstellungen übertragen. Ob dies möglich ist, hängt von Modellen, Softwareständen und Anschlussart ab. Eine Sicherung eines anderen Herstellers lässt sich normalerweise nicht einfach importieren. Übertrage nur Einstellungen, deren Zweck du kennst; alte Portfreigaben sollten nicht aus Gewohnheit weiterbestehen.',
          'Ein bisheriger WLAN-Name und Netzwerkschlüssel können vorhandenen Geräten die Wiederverbindung erleichtern, wenn die übrigen Sicherheitseinstellungen kompatibel sind. Prüfe anschließend trotzdem jedes wichtige Gerät. Ein neuer Verschlüsselungsmodus oder ein anderes Heimnetz kann ältere Technik beeinflussen. Reduziere die Sicherheit nicht pauschal, nur damit ein einzelnes Gerät sofort wieder erscheint.',
        ],
      },
      {
        heading: 'Den Wechsel mit einer Checkliste abschließen',
        paragraphs: [
          'Teste Internet zuerst an einem Gerät direkt am Router und danach über WLAN in den genutzten Räumen. Prüfe Telefonie mit einem normalen ein- und ausgehenden Anruf; Notrufnummern sind keine Testziele. Öffne Drucker, lokale Speicher und benötigte VPN-Verbindungen. Kontrolliere außerdem, ob das Gastnetz weiterhin getrennt ist und die Repeater richtig eingebunden sind.',
          'Erstelle nach erfolgreicher Einrichtung eine neue Sicherung und beschrifte sie mit Datum und Modell. Erst wenn alles geprüft ist, bereitest du das alte eigene Gerät für Lagerung oder Weitergabe vor. Ein Mietgerät geht nach den Vorgaben des Anbieters zurück. Entferne gespeicherte Daten vor einer Weitergabe mit dem vorgesehenen Herstellerverfahren.',
        ],
      },
    ],
    pitfall: 'Den alten Router gleich zu Beginn zurückzusetzen nimmt dir einen wichtigen Rückweg. Prüfe auch, ob ein gewählter Umzugsassistent diesen Schritt automatisch ausführt.',
    whenToGetHelp: 'Wenn Telefonie, Anbieterfreischaltung, mehrere Mesh-Geräte oder geschäftliche Zugänge beteiligt sind, lohnt sich ein geplanter Umzug mit vorheriger Datensicherung und festem Funktionstest.',
    relatedSlugs: ['fritzbox-absichern', 'mesh-wlan-planen', 'internet-ausgefallen'],
    servicePath: '/leistungen/router-entstoerung/',
    sources: [
      { title: 'FRITZ!: Assistent für den Wechsel auf eine neue FRITZ!Box', url: 'https://fritz.com/de-at/apps/knowledge-base/FRITZ-Box-7590/3743_Einstellungen-auf-eine-neue-FRITZ-Box-ubertragen/' },
      { title: 'FRITZ!: Einstellungen gezielt auf ein anderes Modell übertragen', url: 'https://fritz.com/apps/knowledge-base/fritz-box-5490/170_Einstellungen-einer-FRITZ-Box-auf-eine-andere-ubertragen' },
      { title: 'FRITZ!: Sicherung der Routereinstellungen', url: 'https://fritz.com/apps/knowledge-base/FRITZ-Box-7560/4_Einstellungen-sichern-und-in-derselben-FRITZ-Box-wiederherstellen/' },
    ],
  },
]
