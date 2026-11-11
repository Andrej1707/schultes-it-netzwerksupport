import type { GuideArticle } from './types'

export const windowsGuides: GuideArticle[] = [
  {
    slug: 'pc-langsam',
    title: 'PC langsam? Erst die Ursache finden, dann aufräumen',
    description: 'Grenze einen langsamen Windows-PC Schritt für Schritt ein: Programme, Arbeitsspeicher, Datenträger und Internet getrennt prüfen.',
    category: 'windows', readMinutes: 5, image: 'slow-pc-service',
    imageAlt: 'Symbolbild eines Arbeitsplatzes mit Laptop', updated: '2026-11-11',
    intro: 'Ein langsamer Computer braucht nicht automatisch neue Hardware. Entscheidend ist, wann er bremst: direkt nach dem Einschalten, nur im Browser oder erst bei mehreren geöffneten Programmen. Mit einem kurzen Vergleich findest du eher die Ursache als mit einem Tuningprogramm, das viele Einstellungen gleichzeitig verändert. Sichere wichtige Dateien, bevor du größere Reparaturen oder Umbauten angehst.',
    takeaways: ['Internetprobleme und einen langsamen Rechner getrennt untersuchen.', 'Die Auslastung während des tatsächlichen Problems beobachten.', 'Immer nur eine Änderung vornehmen und den gleichen Ablauf erneut testen.'],
    sections: [
      {
        heading: 'Beschreibe einen konkreten langsamen Vorgang',
        paragraphs: [
          '„Alles ist langsam“ lässt sich schwer überprüfen. Besser ist: Ein bestimmtes Dokument benötigt lange zum Öffnen oder nach der Anmeldung reagiert die Maus erst verspätet. Notiere, seit wann das auffällt und ob kurz zuvor ein Programm, ein Update oder ein neues Gerät hinzukam. Unterscheide auch eine dauerhaft schlechte Leistung von einem einmaligen Aussetzer.',
          'Öffne zum Vergleich eine lokal gespeicherte Datei. Reagiert sie sofort, während Webseiten warten, liegt die Ursache möglicherweise bei Verbindung, Browser oder Onlinedienst. Dann bringt es wenig, wahllos Windows-Einstellungen zu ändern. Teste dieselbe Webseite auf einem zweiten Gerät im gleichen WLAN.',
        ],
      },
      {
        heading: 'Sieh nach, was den Rechner beschäftigt',
        paragraphs: [
          'Öffne mit Strg + Umschalt + Esc den Task-Manager. Beobachte unter „Prozesse“ CPU, Arbeitsspeicher und Datenträger, während du den langsamen Vorgang wiederholst. Ein kurzer Ausschlag beim Programmstart ist normal. Aussagekräftiger ist eine anhaltend hohe Auslastung zusammen mit den spürbaren Verzögerungen.',
          'Ein bekannter Virenscan, eine Datensicherung oder eine laufende Synchronisierung darf zeitweise Ressourcen beanspruchen. Lass solche Aufgaben möglichst fertig werden. Beende keine unbekannten Windows-Prozesse auf Verdacht. Speichere offene Dokumente, bevor du ein eigenes, nicht mehr benötigtes Programm regulär schließt.',
        ],
      },
      {
        heading: 'Teste die einfachen Änderungen zuerst',
        paragraphs: ['Starte den Computer einmal über „Neu starten“ neu. Öffne danach zunächst nur das benötigte Programm. Damit entsteht ein brauchbarer Vergleich ohne die vielen Anwendungen der vorherigen Sitzung.'],
        steps: [
          'Prüfe unter Einstellungen → System → Speicher, ob das Systemlaufwerk knapp wird. Räume gezielt auf und überprüfe jede Löschkategorie.',
          'Schließe ungenutzte Browser-Tabs und entferne nur Erweiterungen, deren Zweck du kennst und nicht mehr brauchst.',
          'Prüfe anschließend unnötige Autostart-Apps. Sicherheitsprogramme und benötigte Sicherungssoftware bleiben aktiv.',
          'Installiere anstehende reguläre Windows-Updates und starte zum angeforderten Zeitpunkt neu. Teste danach denselben Arbeitsablauf.',
        ],
      },
      {
        heading: 'Erkenne die Grenze zwischen Pflege und Hardware',
        paragraphs: [
          'Wird der Arbeitsspeicher schon bei deinen üblichen Programmen knapp, kann eine Aufrüstung sinnvoll sein. Ob sie möglich ist, hängt vom konkreten Modell ab. Ein Datenträgerproblem oder ein überhitzter Laptop kann ähnlich wirken. Kaufe deshalb nicht allein nach einer einzelnen Prozentanzeige neue Teile.',
          'Halte für eine Diagnose Modell, Windows-Version, freien Speicher und die beobachtete Auslastung fest. Wenn wichtige Dateien nur auf diesem Rechner liegen, kommt ihre Sicherung zuerst. Bei ungewöhnlichen Laufwerksgeräuschen oder wiederholten Lesefehlern solltest du keine langen Optimierungsdurchläufe starten.',
        ],
      },
    ],
    pitfall: 'Registry-Reiniger, automatische „Treiber-Booster“ und pauschales Abschalten von Schutzfunktionen machen die Ursache oft schwerer erkennbar. Eine hohe Zahl angeblicher Fehler in einem Werbeprogramm ist noch keine Diagnose.',
    whenToGetHelp: 'Lass den Rechner prüfen, wenn er trotz dieser Eingrenzung regelmäßig einfriert, wichtige Programme nicht mehr nutzbar sind oder Hinweise auf Datenträger- beziehungsweise Hardwarefehler auftauchen. Die notierten Beobachtungen helfen bei einer gezielten Prüfung.',
    relatedSlugs: ['autostart-aufraeumen', 'speicherplatz-freigeben', 'laptop-wird-heiss'],
    servicePath: '/leistungen/pc-langsam/',
    sources: [
      { title: 'Microsoft: Leistung eines Windows-PCs verbessern', url: 'https://support.microsoft.com/en-us/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows' },
      { title: 'Microsoft: PC-Integritätsprüfung verwenden', url: 'https://support.microsoft.com/en-gb/windows/experience/compatibility/how-to-use-the-pc-health-check-app?nochrome=true' },
    ],
  },
  {
    slug: 'autostart-aufraeumen',
    title: 'Windows-Autostart aufräumen, ohne wichtige Helfer abzuschalten',
    description: 'Welche Programme müssen mit Windows starten? So prüfst du Autostart-Apps und nimmst Änderungen kontrolliert wieder zurück.',
    category: 'windows', readMinutes: 5, image: 'windows-service',
    imageAlt: 'Symbolbild eines Computers am aufgeräumten Arbeitsplatz', updated: '2026-11-11',
    intro: 'Nach der Anmeldung öffnen sich Messenger, Spieleprogramme und mehrere kleine Helfer gleichzeitig. Das kostet Zeit und kann die ersten Minuten am Rechner zäh machen. Du musst diese Programme nicht gleich deinstallieren: Häufig reicht es, ihren automatischen Start auszuschalten. Wichtig ist, dabei zwischen Komfort, notwendiger Arbeit und Schutzfunktionen zu unterscheiden.',
    takeaways: ['Autostart ausschalten entfernt das Programm nicht.', 'Backup, Schutzsoftware und benötigte Gerätefunktionen bewusst erhalten.', 'Mit einer kleinen Änderung beginnen und nach dem Neustart vergleichen.'],
    sections: [
      {
        heading: 'Lege fest, was sofort bereit sein soll',
        paragraphs: [
          'Überlege zuerst, was du nach jeder Anmeldung tatsächlich brauchst. Ein beruflich genutzter Messenger kann dazugehören; ein gelegentlich verwendeter Spiele-Launcher eher nicht. Auf einem gemeinsam verwendeten Computer solltest du die anderen Personen fragen, bevor du vertraute Abläufe veränderst. Bei verwalteten Firmenrechnern entscheidet gegebenenfalls die zuständige IT.',
          'Mache vor dem Ändern einen Screenshot der vorhandenen Liste. So lässt sich später nachvollziehen, welcher Schalter zuvor aktiv war. Das ist besonders hilfreich, wenn ein Programm nur einen wenig verständlichen Herstellernamen trägt. Unbekannt bedeutet nicht automatisch überflüssig oder schädlich.',
        ],
      },
      {
        heading: 'Ändere zunächst nur bekannte Komfortprogramme',
        paragraphs: ['Unter Windows 11 findest du die Übersicht in Einstellungen → Apps → Autostart. Alternativ zeigt der Task-Manager den Bereich „Autostart-Apps“. Die genaue Beschriftung kann sich mit der Windows-Version unterscheiden.'],
        steps: [
          'Suche eine bekannte App, die du nur gelegentlich verwendest, etwa einen Musikplayer oder Spiele-Launcher.',
          'Schalte ihren Autostart aus beziehungsweise wähle „Deaktivieren“. Deinstalliere die App dabei nicht.',
          'Starte Windows neu und öffne das Programm anschließend über das Startmenü. Es sollte weiterhin normal funktionieren.',
          'Prüfe, ob Anmeldung und erste Arbeitsschritte besser reagieren. Wiederhole den Vorgang bei Bedarf mit einer weiteren bekannten App.',
        ],
      },
      {
        heading: 'Nutze die Startauswirkung als Hinweis',
        paragraphs: [
          'Der Task-Manager bewertet bei manchen Apps ihre Auswirkung auf den Start. Das hilft beim Sortieren, ersetzt aber keine Entscheidung über ihren Nutzen. Eine App mit hoher Auswirkung kann für deine Arbeit erforderlich sein. Umgekehrt kann ein kleiner Eintrag entbehrlich sein, ohne dass seine Abschaltung einen merklichen Unterschied macht.',
          'Vergleiche möglichst ähnliche Bedingungen: Netzbetrieb oder Akkubetrieb, dieselbe Internetverbindung und keine gerade laufende große Aktualisierung. Wenn du mehrere Schalter gleichzeitig änderst, weißt du hinterher kaum, was geholfen hat. Auch deshalb ist ein schrittweises Vorgehen zuverlässiger als eine pauschale Bereinigung.',
        ],
      },
      {
        heading: 'Prüfe die Folgen im Alltag',
        paragraphs: [
          'Sicherungssoftware, Passwortmanager, benötigte Cloud-Synchronisierung und Gerätehelfer können einen wichtigen Zweck erfüllen. Bleibt etwa die Datensicherung aus oder fehlen Funktionen der Sondertasten, aktiviere den betreffenden Eintrag wieder. Behalte außerdem im Blick, ob erwartete Nachrichten oder Telefonieprogramme weiterhin rechtzeitig bereitstehen.',
          'Einige Anwendungen besitzen zusätzlich eine eigene Einstellung wie „Mit Windows starten“. Wenn ein Eintrag nach einem Update wieder auftaucht, prüfe diese Einstellung in der App. Ein weiterhin langsamer Start kann auch an Updates, Datenträgern oder anderen Ursachen liegen. Die Autostart-Liste allein erklärt nicht jeden Fall.',
        ],
      },
    ],
    pitfall: 'Deaktiviere nicht sämtliche Einträge, nur weil eine Anleitung dazu rät. Vor allem Sicherheits- und Sicherungsprogramme sollen ihren Zweck weiterhin erfüllen. Lass unbekannte Systemdienste und geplante Aufgaben unverändert, solange ihre Funktion nicht geklärt ist.',
    whenToGetHelp: 'Wenn unerklärliche Programme wiederkehren, der Rechner ungewöhnliche Werbung anzeigt oder Sicherheitsfunktionen fehlen, reicht Autostart-Aufräumen nicht aus. Dann sollte geklärt werden, ob eine unerwünschte Installation oder ein anderes Problem dahintersteckt.',
    relatedSlugs: ['pc-langsam', 'neuen-pc-einrichten', 'speicherplatz-freigeben'],
    servicePath: '/leistungen/pc-langsam/',
    sources: [
      { title: 'Microsoft: Autostart-Anwendungen in Windows konfigurieren', url: 'https://support.microsoft.com/en-gb/windows/experience/startup-boot/configure-startup-applications-in-windows?ocmsassetid=ha010354233' },
      { title: 'Microsoft: Den Windows-Start bewusst organisieren', url: 'https://www.microsoft.com/en-us/windows/learning-center/take-control-of-windows-startup' },
    ],
  },
  {
    slug: 'speicherplatz-freigeben',
    title: 'Speicherplatz freigeben: sicher aufräumen statt blind löschen',
    description: 'So findest du große Dateien, prüfst Windows-Bereinigungsvorschläge und vermeidest Datenverlust beim Aufräumen von C:.',
    category: 'windows', readMinutes: 5, image: 'pc-service',
    imageAlt: 'Symbolbild eines Laptops für die Arbeit mit Dateien', updated: '2026-11-11',
    intro: 'Ein volles Laufwerk kann Updates verhindern und die Arbeit am Computer ausbremsen. Trotzdem ist die größte Datei nicht automatisch die unwichtigste. Ein gutes Aufräumen beginnt mit einer Übersicht und einer geprüften Sicherung. Danach entfernst du gezielt Dinge, deren Bedeutung du kennst, statt mit einem Klick alle vorgeschlagenen Kategorien zu löschen.',
    takeaways: ['Vor dem Löschen prüfen, was die Dateien enthalten und wo eine Sicherung liegt.', 'Windows-Bereinigungsvorschläge einzeln durchsehen.', 'Cloud-Dateien und lokale Dateien bewusst unterscheiden.'],
    sections: [
      {
        heading: 'Finde zuerst den tatsächlichen Platzverbrauch',
        paragraphs: [
          'Öffne Einstellungen → System → Speicher. Die Übersicht zeigt, welche Kategorien auf dem Systemlaufwerk besonders viel Platz belegen. Große Programme, Videos und persönliche Dateien verlangen jeweils ein anderes Vorgehen. Ein Screenshot der Übersicht hilft, den Stand vor und nach dem Aufräumen zu vergleichen.',
          'Sieh anschließend in deinen eigenen Ordnern nach, beispielsweise Downloads, Videos und Desktop. Sortiere nach Größe, öffne verdächtige Kandidaten aber nicht wahllos. Ein heruntergeladener Installer kann nach erfolgreicher Installation entbehrlich sein; eine Buchhaltungsdatei, ein Fotoarchiv oder ein gespeichertes Projekt dagegen nicht.',
        ],
      },
      {
        heading: 'Bereinigungsvorschläge einzeln entscheiden',
        paragraphs: ['Windows bietet unter „Speicher“ unter anderem temporäre Dateien und Bereinigungsempfehlungen an. Lies jede Kategorie vor dem Bestätigen. Dass Windows etwas vorschlägt, bedeutet nicht, dass du es persönlich nicht mehr brauchst.'],
        steps: [
          'Schließe deine Arbeitsprogramme und sichere noch offene Dokumente.',
          'Prüfe den Papierkorb und den Downloads-Ordner besonders sorgfältig. Dort können weiterhin benötigte Dateien liegen.',
          'Wähle nur klar verstandene Kategorien aus. Eine frühere Windows-Installation solltest du behalten, wenn du noch zur vorherigen Version zurückkehren möchtest.',
          'Starte die ausgewählte Bereinigung und kontrolliere danach den tatsächlich freien Speicherplatz.',
        ],
      },
      {
        heading: 'Große Dateien verschieben, ohne die einzige Kopie zu riskieren',
        paragraphs: [
          'Für ein selten benötigtes Videoarchiv kann eine externe Festplatte sinnvoll sein. Kopiere die Dateien zuerst, öffne einige davon am Ziel und prüfe, ob die erwarteten Ordner vollständig vorhanden sind. Lösche das Original erst nach dieser Kontrolle. Die ausgelagerte Festplatte ist anschließend deine Arbeitskopie; für wichtige Daten brauchst du zusätzlich eine Sicherung.',
          'Bei synchronisierten Cloud-Ordnern ist Löschen besonders aufmerksam zu behandeln: Eine Löschung kann auf weitere Geräte übertragen werden. „Nur online verfügbar“ ist etwas anderes als „löschen“. Prüfe vor einer Umstellung, ob die Dateien tatsächlich hochgeladen wurden und wie du sie ohne Internet erreichen möchtest.',
        ],
      },
      {
        heading: 'Automatisches Aufräumen passend einstellen',
        paragraphs: [
          'Die Windows-Speicheroptimierung kann wiederkehrende Aufgaben übernehmen. Prüfe dabei insbesondere die Regeln für Papierkorb, Downloads und lokal verfügbare Cloud-Dateien. Wähle keine automatische Löschfrist, wenn du einen solchen Ordner als dauerhafte Ablage verwendest. Besser ist, benötigte Unterlagen zunächst in eine nachvollziehbare Ordnerstruktur zu verschieben.',
          'Wenn der Platz wenige Tage später wieder fehlt, beobachte, welche Kategorie wächst. Große Sicherungen, Videos oder ein Programmfehler verlangen eine gezielte Lösung. Ein zu kleines Laufwerk lässt sich durch ständiges Aufräumen nicht dauerhaft passend machen. Plane eine Erweiterung anhand des tatsächlichen Bedarfs und der Möglichkeiten deines Geräts.',
        ],
      },
    ],
    pitfall: 'Lösche keine unbekannten Ordner unter Windows oder Programme direkt im Explorer. Anwendungen werden über ihre Deinstallation entfernt. Auch ein Papierkorb ist keine Datensicherung: Nach dem Leeren lassen sich Dateien nicht zuverlässig wiederherstellen.',
    whenToGetHelp: 'Hole Unterstützung, wenn unklar ist, welche Daten nur einmal vorhanden sind, das Laufwerk ständig ohne erkennbaren Grund vollläuft oder Windows trotz genügend Platz nicht mehr aktualisiert werden kann.',
    relatedSlugs: ['pc-langsam', 'windows-update-probleme', 'neuen-pc-einrichten'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Speicherplatz unter Windows freigeben', url: 'https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/free-up-drive-space-in-windows' },
      { title: 'Microsoft: Speicheroptimierung konfigurieren', url: 'https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/manage-drive-space-with-storage-sense' },
    ],
  },
  {
    slug: 'windows-update-probleme',
    title: 'Windows-Update hängt oder scheitert: sinnvoll eingrenzen',
    description: 'Fehlercode sichern, Voraussetzungen prüfen und die Windows-Problembehandlung nutzen, bevor du größere Reparaturen angehst.',
    category: 'windows', readMinutes: 5, image: 'installation-service',
    imageAlt: 'Symbolbild einer Einrichtung am Computer', updated: '2026-11-11',
    intro: 'Ein fehlgeschlagenes Update ist ärgerlich, aber noch kein Grund, Windows neu zu installieren. Zuerst ist wichtig, ob gerade noch gearbeitet wird oder tatsächlich ein Fehler vorliegt. Ein angezeigter Fehlercode, die Update-Bezeichnung und der genaue Zeitpunkt helfen deutlich mehr als die pauschale Aussage „Updates gehen nicht“. Sichere diese Angaben, bevor du etwas veränderst.',
    takeaways: ['Fehlercode und Update-Bezeichnung festhalten.', 'Stromversorgung, Internet, Speicherplatz und ausstehenden Neustart prüfen.', 'Neuinstallation und Zurücksetzen erst nach Sicherung und geklärtem Reparaturziel erwägen.'],
    sections: [
      {
        heading: 'Unterscheide Warten von einem Fehler',
        paragraphs: [
          'Ein Download, eine Installation im laufenden Windows und die Verarbeitung während eines Neustarts sind verschiedene Phasen. Eine Prozentanzeige kann zeitweise stehen bleiben, obwohl im Hintergrund weitergearbeitet wird. Trenne den Laptop nicht vom Strom und erzwinge keinen Neustart, solange Windows ausdrücklich an der Aktualisierung arbeitet.',
          'Ist Windows noch bedienbar, öffne Einstellungen → Windows Update und notiere die angezeigte Meldung. Unter dem Updateverlauf findest du häufig die betroffene Bezeichnung. Ein Foto einer Fehlermeldung ist ebenfalls hilfreich. Wiederhole denselben Installationsversuch nicht unzählige Male, ohne neue Informationen zu sammeln.',
        ],
      },
      {
        heading: 'Prüfe die Voraussetzungen',
        paragraphs: ['Eine Reparatur sollte mit den einfachen Rahmenbedingungen beginnen. Auf einem von Firma oder Schule verwalteten Rechner können Vorgaben den Zeitpunkt oder die Quelle der Updates steuern; dort ist die zuständige IT der richtige Ansprechpartner.'],
        steps: [
          'Verbinde einen Laptop mit einem geeigneten Netzteil und prüfe, ob die Internetverbindung stabil funktioniert.',
          'Kontrolliere den freien Platz auf C:. Sichere und bereinige bei Bedarf gezielt persönliche Dateien.',
          'Speichere deine Arbeit. Falls Windows einen Neustart zum Abschluss verlangt, führe ihn regulär aus.',
          'Prüfe Datum und Uhrzeit. Falsche Angaben können Verbindungen zu Diensten beeinträchtigen.',
          'Versuche das angebotene Update erneut und vergleiche, ob derselbe Fehlercode erscheint.',
        ],
      },
      {
        heading: 'Verwende die eingebaute Hilfe',
        paragraphs: [
          'Windows stellt eine Update-Problembehandlung bereit, je nach Version über die Einstellungen oder die App „Hilfe anfordern“. Starte sie für das konkrete Updateproblem und notiere ihr Ergebnis. Ein Hinweis, dass etwas repariert wurde, ist noch kein Abschluss: Prüfe danach erneut, ob die Aktualisierung tatsächlich installiert werden kann.',
          'Lade keine angeblichen Reparaturprogramme aus Werbeanzeigen herunter. Auch eine fremde Befehlsliste zum Löschen von Updateordnern ist kein guter erster Schritt. Solche Eingriffe können laufende Vorgänge oder die Diagnose beeinflussen. Mit einem konkreten Fehlercode lässt sich die passende offizielle Anleitung wesentlich genauer auswählen.',
        ],
      },
      {
        heading: 'Größere Reparaturen bewusst auswählen',
        paragraphs: [
          'Bei geeigneten Windows-11-Versionen gibt es eine Reparatur durch erneutes Installieren der aktuellen Version über Windows Update. Sie soll Apps, Dateien und Einstellungen erhalten. Trotzdem gehört eine aktuelle Sicherung davor. Verfügbarkeit und Bezeichnung unterscheiden sich je nach Version und Geräteverwaltung; die Option muss nicht auf jedem Rechner erscheinen.',
          'Das reguläre Windows-10-Supportende war am 14. Oktober 2025. Prüfe bei einem solchen Rechner den tatsächlichen Update- und Supportstatus einschließlich einer eventuell vorhandenen erweiterten Absicherung. Ein nicht unterstütztes System wird durch einen einmaligen Reparaturerfolg nicht wieder zu einer langfristig abgesicherten Lösung.',
        ],
      },
    ],
    pitfall: 'Schalte Schutzsoftware und Updatefunktionen nicht dauerhaft ab, nur damit eine Fehlermeldung verschwindet. „Keine Meldung mehr“ und „vollständig aktualisiert“ sind unterschiedliche Ergebnisse.',
    whenToGetHelp: 'Unterstützung ist sinnvoll, wenn derselbe Fehler nach den Basisprüfungen wiederkehrt, Windows in einer Neustartschleife endet oder geschäftlich wichtige Software betroffen ist. Halte Fehlercode, Update-Bezeichnung, Gerätemodell und Sicherungsstand bereit.',
    relatedSlugs: ['speicherplatz-freigeben', 'pc-startet-nicht', 'bluescreen-einordnen'],
    servicePath: '/leistungen/windows-einrichten/',
    sources: [
      { title: 'Microsoft: Probleme beim Aktualisieren von Windows beheben', url: 'https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/troubleshoot-problems-updating-windows' },
      { title: 'Microsoft: Aktuelle Windows-Version zur Reparatur neu installieren', url: 'https://support.microsoft.com/en-gb/windows/deployment/install-upgrade/fix-issues-by-reinstalling-the-current-version-of-windows' },
      { title: 'Microsoft: Supportende von Windows 10', url: 'https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025' },
    ],
  },
  {
    slug: 'pc-startet-nicht',
    title: 'PC startet nicht: Strom, Bildschirm und Windows auseinanderhalten',
    description: 'Ein schwarzer Bildschirm kann viele Ursachen haben. So grenzt du einen Startfehler ein, ohne vorschnell Daten zu löschen.',
    category: 'windows', readMinutes: 5, image: 'pc-service',
    imageAlt: 'Symbolbild eines Computers für die Fehlersuche', updated: '2026-11-11',
    intro: '„Der PC startet nicht“ kann bedeuten, dass überhaupt kein Strom ankommt, nur der Bildschirm dunkel bleibt oder Windows nach dem Herstellerlogo abbricht. Diese Fälle benötigen unterschiedliche Lösungen. Bevor du eine Wiederherstellung oder Neuinstallation auswählst, kläre deshalb, was genau noch funktioniert. Wichtige ungesicherte Daten bestimmen, wie vorsichtig die nächsten Schritte ausfallen sollten.',
    takeaways: ['Kein Strom, kein Bild und kein Windows-Start sind unterschiedliche Fehlerbilder.', 'Fehlermeldungen und das letzte sichtbare Bild dokumentieren.', 'Bei ungesicherten Daten keine Formatierung oder Neuinstallation auf Verdacht starten.'],
    sections: [
      {
        heading: 'Beobachte den Start statt sofort zu reparieren',
        paragraphs: [
          'Leuchten Kontrolllampen? Läuft ein Lüfter? Erscheint ein Herstellerlogo, ein Anmeldebildschirm oder eine konkrete Meldung? Notiere außerdem, ob der Fehler nach einem Update, Transport, Stromausfall oder dem Anschluss eines neuen Geräts begann. Ein Handyfoto einer Meldung bewahrt Informationen, die beim nächsten Versuch möglicherweise nicht mehr sichtbar sind.',
          'Ein blinkendes Licht oder ein Piepmuster kann ein Diagnosehinweis des Herstellers sein. Die Bedeutung ist modellabhängig. Übertrage deshalb keine Tastenkombination oder Erklärung von irgendeinem ähnlichen Notebook. Das genaue Modell findest du häufig am Gehäuse oder auf der Kaufunterlage.',
        ],
      },
      {
        heading: 'Kontrolliere die einfachen äußeren Verbindungen',
        paragraphs: ['Beginne mit Dingen, die du ohne Öffnen des Geräts sicher prüfen kannst. Bei sichtbaren Schäden, Flüssigkeit, ungewöhnlichem Geruch oder einem aufgeblähten Akku unterbrich die Versuche und lass das Gerät fachgerecht beurteilen.'],
        steps: [
          'Prüfe Steckdose, Steckdosenleiste und den festen Sitz der vorhandenen Stromkabel. Verwende nur ein zum Gerät passendes Netzteil.',
          'Prüfe bei einem separaten Monitor dessen Stromversorgung, gewählten Eingang und Bildkabel.',
          'Trenne nicht benötigte USB-Geräte und externe Datenträger vor einem erneuten Start. Tastatur und benötigte Anzeige bleiben angeschlossen.',
          'Falls verfügbar, teste einen bekannten passenden Bildschirm oder ein bekannt funktionierendes Bildkabel. Ändere dabei immer nur einen Bestandteil.',
        ],
      },
      {
        heading: 'Wenn Windows beginnt, aber nicht fertig startet',
        paragraphs: [
          'Zeigt Windows seine Wiederherstellungsumgebung an, stehen dort mehrere Werkzeuge mit sehr unterschiedlichen Folgen bereit. Die Starthilfe ist dafür gedacht, bestimmte Startprobleme zu erkennen und zu reparieren. Sie ist nicht dasselbe wie „Diesen PC zurücksetzen“. Lies die gewählte Option vollständig, bevor du sie bestätigst.',
          'Bei verschlüsselten Geräten kann ein BitLocker-Wiederherstellungsschlüssel benötigt werden. Suche ihn über den vorgesehenen Kontozugang oder die zuständige IT. Gib ihn nicht in einen unbekannten Supportchat ein. Wenn du den Schlüssel nicht findest und die Daten wichtig sind, sollte das weitere Vorgehen zuerst geklärt werden.',
        ],
      },
      {
        heading: 'Behalte die Daten als eigenes Ziel im Blick',
        paragraphs: [
          'Ein wieder startender Computer und gerettete Dateien sind zwei verschiedene Ziele. Eine Neuinstallation kann das erste erreichen und das zweite vereiteln. Halte fest, welche Dokumente, Fotos oder Arbeitsdaten nur auf diesem Gerät liegen. Prüfe vorhandene Sicherungen möglichst an einem anderen funktionierenden Gerät.',
          'Nach einem erfolgreichen Start sichere zuerst wichtige Dateien. Teste erst danach, ob weitere Neustarts zuverlässig funktionieren. Falls der Fehler wiederkehrt, helfen die ursprünglichen Beobachtungen mehr als eine lange Reihe unterschiedlicher Reparaturversuche. Öffne Netzteile, Akkus und andere gefährliche Bauteile nicht selbst.',
        ],
      },
    ],
    pitfall: 'Ein Installationsstick ist kein harmloser Diagnoseknopf. Optionen zum Löschen von Partitionen, Formatieren oder Zurücksetzen können Daten entfernen. Wenn die einzige Kopie wichtiger Dateien betroffen ist, stoppe vor diesen Schritten.',
    whenToGetHelp: 'Lass den Rechner prüfen, wenn äußere Kontrollen nicht helfen, das Laufwerk auffällig klingt, eine Verschlüsselungsabfrage ungeklärt bleibt oder die Wiederherstellungsoptionen nicht eindeutig sind. Bei wichtigen ungesicherten Daten hat deren Erhalt Vorrang.',
    relatedSlugs: ['bluescreen-einordnen', 'windows-update-probleme', 'laptop-wird-heiss'],
    servicePath: '/leistungen/pc-startet-nicht/',
    sources: [
      { title: 'Microsoft: Leere Bildschirme unter Windows untersuchen', url: 'https://support.microsoft.com/en-us/windows/hardware/display-graphics/troubleshooting-blank-screens-in-windows' },
      { title: 'Microsoft: Windows-Starthilfe', url: 'https://support.microsoft.com/en-us/windows/experience/startup-boot/startup-repair?nochrome=true' },
      { title: 'Microsoft: BitLocker-Wiederherstellungsschlüssel finden', url: 'https://support.microsoft.com/en-gb/windows/security/encryption/find-your-bitlocker-recovery-key?nochrome=true' },
    ],
  },
  {
    slug: 'bluescreen-einordnen',
    title: 'Bluescreen oder Stoppfehler: die richtigen Hinweise sammeln',
    description: 'Was ein Windows-Stoppfehler aussagt, welche Informationen wichtig sind und wann weitere Startversuche besser warten sollten.',
    category: 'windows', readMinutes: 5, image: 'windows-service',
    imageAlt: 'Symbolbild eines Windows-Arbeitsplatzes mit Computer', updated: '2026-11-11',
    intro: 'Ein plötzlicher Neustart mit Stoppcode wirkt dramatisch. Er sagt zunächst, dass Windows einen schwerwiegenden Fehler erkannt hat, aber noch nicht, welches Bauteil ausgetauscht werden muss. Je nach Windows-Version und Situation kann der Fehlerbildschirm unterschiedlich aussehen. Für die Eingrenzung zählen der genaue Code, der Ablauf davor und die Frage, ob der Fehler wiederholt auftritt.',
    takeaways: ['Stoppcode und Zeitpunkt dokumentieren statt eine allgemeine Fehlermeldung zu suchen.', 'Zeitliche Zusammenhänge sind Hinweise, keine fertige Diagnose.', 'Nach wiederholten Abstürzen zuerst wichtige Daten sichern.'],
    sections: [
      {
        heading: 'Halte die Situation fest',
        paragraphs: [
          'Fotografiere den Stoppcode und einen eventuell genannten Dateinamen. Notiere, welches Programm lief und ob gerade ein Gerät angeschlossen, ein Spiel gestartet oder ein Update verarbeitet wurde. Wiederholt sich der Fehler nur bei einem bestimmten Vorgang, ist das eine deutlich bessere Spur als ein einzelner allgemeiner Fehlertext.',
          'Ein einmaliger Absturz kann nach dem Neustart verschwunden sein. Beobachte dann den Rechner und kontrolliere deine Sicherung. Wiederkehrende Abstürze sollten dagegen untersucht werden, auch wenn Windows zwischendurch normal startet. Häufiges abruptes Abschalten kann gerade geöffnete Dateien beschädigen; wichtige Arbeit gehört deshalb nicht ungesichert auf das betroffene Gerät.',
        ],
      },
      {
        heading: 'Prüfe, was unmittelbar vorher geändert wurde',
        paragraphs: ['Eine neue Dockingstation, ein Druckertreiber oder eine Softwareinstallation kann den zeitlichen Rahmen erklären. Das beweist noch keine Ursache. Entferne deshalb nicht wahllos Programme und installiere nicht gleichzeitig viele neue Treiber.'],
        steps: [
          'Sichere erreichbare wichtige Dateien und notiere den aktuellen Fehlerzustand.',
          'Trenne nicht benötigte, kürzlich angeschlossene externe Geräte nach dem regulären Herunterfahren.',
          'Starte erneut und prüfe einen normalen, ungefährlichen Arbeitsablauf. Erzeuge Abstürze nicht absichtlich in einer Endlosschleife.',
          'Prüfe verfügbare Windows-Updates und Informationen des Geräteherstellers zu genau deinem Modell.',
          'Beurteile nach jeder einzelnen Änderung, ob der Fehler wiederkehrt. Halte auch erfolglose Versuche fest.',
        ],
      },
      {
        heading: 'Ein Fehlername ist kein Einkaufszettel',
        paragraphs: [
          'Eine im Fehlerbildschirm genannte Systemdatei muss nicht die eigentliche Ursache sein. Ebenso beweist ein Hinweis auf Speicherverwaltung nicht automatisch einen defekten Arbeitsspeicher. Treiber, Hardware, Datenträger und andere Komponenten können sich gegenseitig beeinflussen. Eine gezielte Prüfung ist zuverlässiger als ein Teiletausch nach dem ersten Suchtreffer.',
          'Wenn ein Treiberwechsel begründet ist, verwende die offizielle Quelle des Geräte- oder Komponentenherstellers. Achte auf Modell und Windows-Version. Sammelprogramme, die viele angeblich veraltete Treiber austauschen, schaffen zusätzliche Veränderungen und erschweren den Vergleich mit dem ursprünglichen Fehler.',
        ],
      },
      {
        heading: 'Nutze Wiederherstellung mit einem klaren Plan',
        paragraphs: [
          'Startet Windows nicht mehr zuverlässig, kann seine Wiederherstellungsumgebung helfen. Manche Optionen ändern lediglich bestimmte Systembestandteile, andere entfernen Anwendungen oder persönliche Dateien. Wähle deshalb nicht einfach die umfassendste Reparatur. Prüfe vorher Sicherung und gegebenenfalls den Wiederherstellungsschlüssel der Laufwerksverschlüsselung.',
          'Für fachliche Hilfe genügen zunächst die Fehlerfotos, das Gerätemodell, der Auslöser und der zeitliche Verlauf. Diagnose- und Speicherabbilddateien können sensible Inhalte enthalten. Veröffentliche solche Dateien nicht ungeprüft in offenen Foren. Kläre, welche Informationen tatsächlich benötigt werden und wie sie sicher übertragen werden sollen.',
        ],
      },
    ],
    pitfall: 'Ein zufällig gefundenes „Fix“-Skript kann Schutzfunktionen, Treiber oder Systemeinstellungen verändern, ohne die Ursache zu treffen. Ein Stoppcode allein rechtfertigt weder eine Neuinstallation noch einen pauschalen Hardwarekauf.',
    whenToGetHelp: 'Wiederholte Stoppfehler, Neustartschleifen, Fehler beim Kopieren wichtiger Dateien oder Abstürze ohne erkennbaren Auslöser sollten gezielt untersucht werden. Das gilt besonders, wenn auf dem Gerät geschäftliche Abläufe oder die einzige Datenkopie liegen.',
    relatedSlugs: ['pc-startet-nicht', 'windows-update-probleme', 'pc-langsam'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Unerwartete Neustarts und Stoppcodes untersuchen', url: 'https://support.microsoft.com/en-us/windows/experience/performance-optimization/troubleshooting-windows-unexpected-restarts-and-stop-code-errors' },
      { title: 'Microsoft: Wiederherstellungsoptionen in Windows', url: 'https://support.microsoft.com/en-gb/windows/experience/backup-recovery/recovery-options-in-windows' },
    ],
  },
  {
    slug: 'laptop-wird-heiss',
    title: 'Laptop wird heiß und laut: Belastung und Kühlung prüfen',
    description: 'So erkennst du normale Wärmeentwicklung, verbesserst die Belüftung und weißt, wann der Laptop ausgeschaltet bleiben sollte.',
    category: 'windows', readMinutes: 5, image: 'workspace',
    imageAlt: 'Symbolbild eines Laptops auf einer festen Arbeitsfläche', updated: '2026-11-11',
    intro: 'Ein Laptop darf bei anspruchsvollen Aufgaben warm werden und seinen Lüfter hörbar aufdrehen. Problematisch wird es, wenn er bei einfachen Aufgaben ständig sehr laut ist, seine Leistung stark einbricht oder sich wiederholt abschaltet. Eine einzelne Temperaturzahl ohne Modell und Auslastung reicht zur Beurteilung nicht aus. Beginne mit Aufstellort, Arbeitslast und dem zeitlichen Verlauf.',
    takeaways: ['Den Laptop auf eine feste Fläche stellen und Luftwege freihalten.', 'Wärme immer zusammen mit Arbeitslast und Verhalten beurteilen.', 'Bei Schäden, Akkuverformung oder ungewöhnlichem Geruch die Nutzung beenden.'],
    sections: [
      {
        heading: 'Sorge zuerst für freie Luftwege',
        paragraphs: [
          'Eine Decke, ein Sofakissen oder das Bett kann Lüftungsöffnungen verdecken. Stelle das Gerät auf einen festen Tisch und halte die sichtbaren Ein- und Auslässe frei. Auch ein Stapel Unterlagen direkt neben dem Luftauslass kann stören. Beachte zusätzlich die Aufstellhinweise des konkreten Herstellers.',
          'Wärmeentwicklung hängt außerdem von Raumtemperatur, Sonneneinstrahlung und der verwendeten Aufgabe ab. Ein Laptop im heißen Auto oder auf einer sonnigen Fensterbank ist kein sinnvoller Vergleich zu einem Gerät am normalen Arbeitsplatz. Lass ein abgeschaltetes, übermäßig warmes Gerät an einem geeigneten Ort abkühlen; Kühlschrank, Eis und feuchte Tücher sind ungeeignet.',
        ],
      },
      {
        heading: 'Prüfe, welche Arbeit gerade läuft',
        paragraphs: [
          'Öffne den Task-Manager und beobachte, ob eine bekannte Anwendung längere Zeit viel Rechenleistung benötigt. Ein Videoexport, Spiel, Update oder eine Sicherung erklärt andere Lüftergeräusche als ein einzelnes Textdokument. Speichere deine Arbeit und schließe nicht mehr benötigte eigene Programme regulär.',
          'Vergleiche anschließend eine ruhige Sitzung mit deiner üblichen Belastung. Wähle für alltägliche Aufgaben zunächst ein ausgewogenes Energieprofil, sofern der Hersteller nichts anderes vorgibt. Ein dauerhaft maximales Leistungsprofil kann zusätzliche Wärme erzeugen. Unbekannte Prozesse solltest du nicht allein wegen ihrer Auslastung gewaltsam beenden.',
        ],
      },
      {
        heading: 'Reinige nur so, wie es dein Modell erlaubt',
        paragraphs: ['Staub kann die Kühlung beeinträchtigen. Ob und wie die Öffnungen von außen gereinigt werden dürfen, steht in den Pflegehinweisen des Herstellers. Eine Anleitung für ein anderes Modell ist dafür kein verlässlicher Ersatz.'],
        steps: [
          'Fahre das Gerät herunter und trenne das Netzteil, bevor du äußerlich kontrollierst oder reinigst.',
          'Prüfe sichtbare Öffnungen ohne Gegenstände hineinzuschieben. Verwende keine Flüssigkeit im Geräteinneren.',
          'Befolge für Hilfsmittel und Vorgehen die konkrete Herstelleranleitung. Öffne das Gerät nicht allein aufgrund eines allgemeinen Ratgebers.',
          'Stelle es anschließend wieder frei auf und prüfe einen normalen Arbeitsablauf. Schleifende Geräusche oder erneutes Abschalten gehören in eine Diagnose.',
        ],
      },
      {
        heading: 'Erkenne klare Abbruchsignale',
        paragraphs: [
          'Ein aufgeblähtes Gehäuse, ein angehobenes Touchpad oder eine sichtbare Akkuverformung verlangt mehr Vorsicht als ein lauter Lüfter. Nutze und lade das Gerät dann nicht weiter und lasse den Akku fachgerecht beurteilen. Drücke nichts zurück und versuche nicht, einen beschädigten Akku selbst zu öffnen.',
          'Auch wiederholtes Abschalten unter leichter Last oder ein nicht mehr drehender, zuvor hörbarer Lüfter sollte geprüft werden. Sichere wichtige Daten nur, wenn das Gerät noch sicher betrieben werden kann. Eine dokumentierte Beschreibung des Verhaltens hilft mehr als lange Belastungstests, die das Problem erneut provozieren.',
        ],
      },
    ],
    pitfall: 'Lüfter dauerhaft leiser zu erzwingen kann die Kühlung verschlechtern. Ebenso sind Übertaktung, veränderte Spannungen oder ein Firmware-Update ohne konkreten Anlass keine geeigneten ersten Maßnahmen gegen Wärme.',
    whenToGetHelp: 'Unterstützung ist sinnvoll, wenn Luftwege frei sind und das Gerät trotzdem bei leichter Nutzung abschaltet, ungewöhnlich riecht oder mechanische Schäden zeigt. Bei Akkuverformung bleibt es bis zur fachlichen Beurteilung außer Betrieb.',
    relatedSlugs: ['pc-langsam', 'autostart-aufraeumen', 'pc-startet-nicht'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'HP: Wärmeentwicklung und Belüftung eines Notebooks', url: 'https://support.hp.com/de-de/document/ish_3936181-3919482-16' },
      { title: 'HP: Notebooks schützen und pflegen', url: 'https://support.hp.com/de-de/document/ish_2462728-2113492-16' },
      { title: 'Microsoft: Vorgehen bei einem zu warmen Surface', url: 'https://support.microsoft.com/en-au/surface/performance/what-to-try-if-your-surface-feels-too-warm' },
    ],
  },
  {
    slug: 'neuen-pc-einrichten',
    title: 'Neuen PC einrichten: ein guter Start ohne Datenchaos',
    description: 'Von Updates und Anmeldung bis zum Datenumzug: eine praktische Reihenfolge für einen neuen Windows-PC und eine kontrollierte Übergabe.',
    category: 'windows', readMinutes: 5, image: 'installation-service',
    imageAlt: 'Symbolbild eines frisch eingerichteten Computer-Arbeitsplatzes', updated: '2026-11-11',
    intro: 'Ein neuer Rechner ist erst dann fertig eingerichtet, wenn deine üblichen Aufgaben funktionieren und wichtige Daten sicher erreichbar sind. Plane die Einrichtung deshalb als kleinen Umzug. Der alte PC bleibt zunächst erhalten. So kannst du fehlende Unterlagen, Einstellungen und Zugänge noch prüfen, statt nach dem Zurücksetzen festzustellen, dass etwas Wesentliches fehlt.',
    takeaways: ['Vor dem Umzug Daten, Programme, Konten und Lizenzen zusammentragen.', 'Den neuen PC aktualisieren und mit wenigen wichtigen Anwendungen beginnen.', 'Altes Gerät erst löschen, wenn Daten und Sicherung überprüft sind.'],
    sections: [
      {
        heading: 'Bereite eine kurze Umzugsliste vor',
        paragraphs: [
          'Notiere, welche Aufgaben der neue PC übernehmen soll: E-Mail, Drucker, Office, Fotos, Bankzugang oder spezielle Geschäftssoftware. Ergänze, wo die zugehörigen Daten liegen. Außer Dokumenten und Bildern können auch lokale Mailarchive, Vorlagen, Schriftarten oder Programme mit eigener Datenablage wichtig sein.',
          'Prüfe die vorhandene Datensicherung durch das Öffnen einiger Dateien. Lege Zugangsdaten sicher bereit und kontrolliere, ob du auf die vorgesehenen Wiederherstellungswege deiner Konten zugreifen kannst. Bei Softwarelizenzen klärst du vorab, ob eine Übertragung erlaubt ist oder eine Aktivierung auf dem alten Gerät aufgehoben werden muss.',
        ],
      },
      {
        heading: 'Richte die Grundlage vor den Arbeitsprogrammen ein',
        paragraphs: ['Wähle bei der ersten Einrichtung Sprache, Tastatur und Kontozuordnung aufmerksam. Ein privates Microsoft-Konto und ein geschäftliches Organisationskonto erfüllen unterschiedliche Zwecke. Auf einem Firmenrechner sollte die vorgesehene Geräteverwaltung nicht durch eine improvisierte Privat-Einrichtung umgangen werden.'],
        steps: [
          'Verbinde den Rechner mit einem vertrauenswürdigen Netzwerk und bei einem Laptop mit dem Netzteil.',
          'Prüfe Windows Update und führe die erforderlichen Neustarts aus.',
          'Kontrolliere Windows-Sicherheit und richte eine passende Anmeldung ein. Prüfe auch, wo ein eventuell vorhandener Verschlüsselungs-Wiederherstellungsschlüssel hinterlegt ist.',
          'Lies die Datenschutz- und Synchronisierungseinstellungen, bevor du sie bestätigst. Übernimm nur die gewünschten Optionen.',
          'Installiere die benötigten Programme aus dem Microsoft Store oder direkt vom jeweiligen Hersteller.',
        ],
      },
      {
        heading: 'Übernimm Daten gezielt und kontrolliere das Ergebnis',
        paragraphs: [
          'Windows-Sicherung und andere Umzugswege können Einstellungen, ausgewählte Dateien und Hinweise auf Apps übernehmen. Das ist nicht automatisch eine vollständige Kopie jeder Anwendung samt sämtlichen Daten. Prüfe daher, was dein gewählter Weg tatsächlich sichert und welche Programme du neu installieren oder gesondert übertragen musst.',
          'Kopiere persönliche Dateien in nachvollziehbare Zielordner. Öffne stichprobenartig wichtige Dokumente, Fotos und Archive auf dem neuen Rechner. Vergleiche bei größeren Sammlungen Ordnerstruktur und Dateizahl. Bei Cloud-Dateien kontrollierst du zusätzlich, welche Daten nur online und welche auch ohne Internet verfügbar sind.',
        ],
      },
      {
        heading: 'Teste einen echten Arbeitstag',
        paragraphs: [
          'Sende und empfange eine Test-E-Mail, drucke eine Testseite und öffne ein übliches Arbeitsdokument. Prüfe Kamera, Mikrofon und Lautsprecher, wenn du Videotelefonie nutzt. Auch gespeicherte Browserzugänge und eine benötigte Zwei-Faktor-Anmeldung sollten jetzt funktionieren, solange das alte Gerät noch verfügbar ist.',
          'Richte danach eine regelmäßige Datensicherung ein und teste, ob sich eine Datei daraus wiederherstellen lässt. Behalte den alten PC noch für eine angemessene Übergangszeit, ohne ihn als einzige Sicherung einzuplanen. Erst wenn die Umzugsliste vollständig geprüft ist, folgt seine sichere Löschung oder Weitergabe.',
        ],
      },
    ],
    pitfall: 'Kopiere nicht einfach den Ordner „Programme“ vom alten Computer. Installierte Anwendungen benötigen häufig weitere Bestandteile, Einstellungen und eine gültige Aktivierung. Auch ein erfolgreich angezeigter Cloud-Login beweist noch keinen vollständigen Datenumzug.',
    whenToGetHelp: 'Lass den Umzug begleiten, wenn lokale Mailarchive, Geschäftsdatenbanken, besondere Lizenzen oder mehrere Benutzerkonten beteiligt sind. Vor allem bei unklarer Sicherung oder fehlenden Kontozugängen sollte das alte Gerät unangetastet bleiben.',
    relatedSlugs: ['autostart-aufraeumen', 'speicherplatz-freigeben', 'windows-update-probleme'],
    servicePath: '/leistungen/installation/',
    sources: [
      { title: 'Microsoft: Mit Windows-Sicherung sichern und wiederherstellen', url: 'https://support.microsoft.com/en-gb/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup?nochrome=true' },
      { title: 'Microsoft: Dateien und Einstellungen auf einen neuen PC übertragen', url: 'https://support.microsoft.com/en-gb/windows/experience/backup-recovery/transfer-your-files-and-settings-to-a-new-windows-pc?nochrome=true' },
    ],
  },
]
