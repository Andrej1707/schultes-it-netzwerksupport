import type { GuideArticle } from './types'

export const dataGuides: GuideArticle[] = [
  {
    slug: 'backup-3-2-1',
    title: 'Die 3-2-1-Regel: ein Backup, auf das du dich verlassen kannst',
    description: 'So planst du mehrere unabhängige Sicherungen, schützt eine Kopie außer Haus und prüfst, ob sich deine Dateien wirklich wiederherstellen lassen.',
    category: 'daten',
    readMinutes: 5,
    image: 'backup-desk',
    imageAlt: 'Laptop und externes SSD-Laufwerk auf einem aufgeräumten Arbeitsplatz',
    updated: '2026-11-11',
    intro: 'Fotos, Unterlagen und laufende Projekte verdienen mehr als einen einzigen Speicherort. Ein Backup muss nicht kompliziert sein. Es muss aber auch dann noch helfen, wenn der Computer ausfällt, ein Ordner versehentlich gelöscht wird oder das ganze Gerät verschwindet. Die 3-2-1-Regel ist dafür ein verständlicher Ausgangspunkt.',
    takeaways: [
      'Plane drei Kopien: deine Arbeitsdaten und zwei zusätzliche Sicherungen.',
      'Nutze unterschiedliche Speicher und bewahre eine Kopie getrennt vom Arbeitsort auf.',
      'Eine erfolgreiche Wiederherstellung ist der wichtigste Backup-Test.',
    ],
    sections: [
      {
        heading: 'Zuerst festlegen, was du nicht verlieren möchtest',
        paragraphs: [
          'Beginne mit einer kurzen Liste: Dokumente, Fotos, Videos, lokale E-Mails, Projektdateien und die Daten deiner wichtigsten Programme. Manche Anwendungen speichern außerhalb der üblichen Benutzerordner. Prüfe deshalb auch deren eigene Export- oder Sicherungsfunktion. Ein Foto vom Desktop verrät nicht, wo die eigentlichen Dateien liegen.',
          'Lege anschließend fest, wie viel neue Arbeit im schlimmsten Fall fehlen dürfte. Bei täglich bearbeiteten Aufträgen reicht eine Sicherung pro Monat kaum. Ein unverändertes Familienarchiv braucht einen anderen Rhythmus als die aktuelle Buchhaltung. Ein fester Termin ist hilfreich; ein automatisch geplanter Lauf ist im Alltag meist zuverlässiger.',
        ],
      },
      {
        heading: 'Drei Kopien mit unterschiedlichen Ausfallrisiken',
        paragraphs: [
          'Ein einfaches Beispiel: Die Arbeitsdateien liegen auf dem Laptop, eine versionierte Sicherung auf einer externen Festplatte und eine weitere Kopie in einem geeigneten Cloud-Backup oder auf einem zweiten, außer Haus gelagerten Datenträger. Zwei Ordner auf derselben Festplatte sind keine unabhängigen Kopien.',
          'Die getrennte Aufbewahrung hilft bei Diebstahl, Feuer oder einem Wasserschaden. Eine Sicherungsplatte, die dauerhaft neben dem Laptop angeschlossen bleibt, teilt dagegen einige seiner Risiken. Trenne ein dafür vorgesehenes Offline-Backup nach dem abgeschlossenen Sicherungslauf. Bei vertraulichen Daten gehört ein geeigneter Verschlüsselungsschutz dazu; der Schlüssel muss an einem anderen sicheren Ort erreichbar bleiben.',
        ],
      },
      {
        heading: 'Auch ältere Dateistände behalten',
        paragraphs: [
          'Ein Backup mit mehreren Versionen hilft, wenn du einen Fehler erst Tage später bemerkst. Ein reines Spiegeln kann die versehentliche Löschung sofort übernehmen. Entscheidend ist deshalb nicht nur, ob Dateien kopiert werden, sondern wie lange frühere Stände erhalten bleiben und ob ein Angreifer die Sicherung ebenfalls verändern könnte.',
          'Plane Platz für diese Versionen ein. Beobachte nach den ersten Läufen, wie schnell das Sicherungsmedium wächst. Wenn ein Lauf wegen Platzmangels ausfällt, sollte das sichtbar werden. Eine alte grüne Erfolgsmeldung ist kein Beleg dafür, dass auch die Änderungen dieser Woche gesichert sind.',
        ],
      },
      {
        heading: 'Den Ernstfall in klein ausprobieren',
        paragraphs: [
          'Stelle probeweise einige Dokumente und ein größeres Foto in einen neuen Testordner wieder her. Öffne die Dateien anschließend mit dem passenden Programm. Überschreibe bei dieser Probe keine aktuellen Arbeitsdateien. Notiere, welches Laufwerk, welches Konto und gegebenenfalls welcher Schlüssel nötig waren.',
          'Wiederhole den Test nach einem Gerätewechsel oder einer Änderung deiner Backup-Lösung. Eine kurze schriftliche Anleitung hilft auch dann, wenn der gewohnte Computer nicht mehr startet. Erst wenn du die Daten tatsächlich zurückbekommst, ist aus einem Kopierplan eine brauchbare Absicherung geworden.',
        ],
      },
    ],
    pitfall: 'Ein zweites Laufwerk schützt nicht automatisch vor allen Schäden. RAID, Synchronisierung und ein dauerhaft angeschlossenes Spiegel-Laufwerk ersetzen kein unabhängig aufbewahrtes, getestetes Backup.',
    whenToGetHelp: 'Wenn Fachprogramme, mehrere Benutzer oder geschäftskritische Daten beteiligt sind, sollte die Sicherung zusammen mit einem passenden Wiederherstellungsablauf geplant werden.',
    relatedSlugs: ['externe-festplatte-sichern', 'cloud-sync-oder-backup', 'laufwerk-verschluesseln'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'BACS: Datensicherung und 3-2-1-Methode', url: 'https://www.bacs.admin.ch/de/datensicherung' },
      { title: 'BSI: Datensicherungskonzept', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/03_CON_Konzepte_und_Vorgehensweisen/CON_3_Datensicherungskonzept_Edition_2023.pdf?__blob=publicationFile&v=3' },
      { title: 'Microsoft: Sicherung und Wiederherstellung in Windows', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/backup-restore-and-recovery-in-windows' },
    ],
  },
  {
    slug: 'externe-festplatte-sichern',
    title: 'Dateien auf einer externen Festplatte richtig sichern',
    description: 'Eine externe Festplatte wird erst mit passender Auswahl, mehreren Dateiständen und einem Wiederherstellungstest zu einer verlässlichen Sicherung.',
    category: 'daten',
    readMinutes: 5,
    image: 'backup-desk',
    imageAlt: 'Externes Speicherlaufwerk neben einem Notebook',
    updated: '2026-11-11',
    intro: 'Eine externe Festplatte ist ein praktischer Einstieg in die Datensicherung. Einfach gelegentlich einen Ordner hinüberzuziehen reicht aber nicht immer. Wichtig sind eine vollständige Auswahl, ein nachvollziehbarer Zeitplan und die Gewissheit, dass die gesicherten Dateien sich später wieder öffnen lassen.',
    takeaways: [
      'Kopiere Arbeitsdaten, statt die einzige vorhandene Kopie zu verschieben.',
      'Bewahre frühere Versionen auf und kontrolliere fehlgeschlagene Sicherungsläufe.',
      'Trenne eine Offline-Sicherungsplatte nach dem sicheren Auswerfen vom Computer.',
    ],
    sections: [
      {
        heading: 'Das Laufwerk eindeutig vorbereiten',
        paragraphs: [
          'Prüfe zuerst, welches Laufwerk du vor dir hast. Ein eindeutiger Name wie „Backup Privat“ und eine äußere Beschriftung verhindern Verwechslungen. Sieh nach, ob bereits wichtige Dateien darauf liegen. Eine Aufforderung zum Initialisieren oder Formatieren darfst du nicht bestätigen, solange unklar ist, ob sich noch benötigte Daten auf dem Datenträger befinden.',
          'Die Kapazität sollte nicht nur für den heutigen Datenbestand reichen, sondern auch für neue Dateien und ältere Versionen. Ein kleines Transportlaufwerk ist schnell voll. Bewahre die Platte trocken und geschützt auf; eine tragbare Festplatte mit beweglichen Teilen solltest du während des Betriebs nicht bewegen oder fallen lassen.',
        ],
      },
      {
        heading: 'Einmalige Kopie oder laufende Sicherung?',
        paragraphs: [
          'Für ein kleines, abgeschlossenes Archiv kann ein datierter Kopierordner übersichtlich sein. Für laufende Arbeit ist eine Sicherungsfunktion mit Versionen sinnvoller. Unter Windows kann beispielsweise der Dateiversionsverlauf persönliche Dateien sichern. Entscheidend bleibt, welche Ordner deine gewählte Lösung tatsächlich erfasst. Ein lokal gespeichertes E-Mail-Archiv oder ein Programmprojekt kann außerhalb der Standardauswahl liegen.',
          'Lass größere Programme vor dem Sicherungslauf ihre Arbeit speichern und beende sie gegebenenfalls. Manche Datenbanken brauchen eine eigene Exportfunktion, damit die Sicherung konsistent ist. Der bloße Umstand, dass sich eine Datei kopieren lässt, garantiert nicht, dass eine Anwendung sie später vollständig einlesen kann.',
        ],
        steps: [
          'Die zu sichernden Ordner und besonderen Programmdaten erfassen.',
          'Das richtige Ziellaufwerk auswählen und den Sicherungslauf vollständig abschließen lassen.',
          'Datum, Ergebnis und eventuelle Fehlermeldungen kontrollieren.',
          'Stichproben in einen separaten Testordner zurückholen und öffnen.',
        ],
      },
      {
        heading: 'Eine brauchbare Routine schaffen',
        paragraphs: [
          'Wähle einen Rhythmus, der zu deinen Änderungen passt. Wer die Platte nur einmal im Jahr anschließt, hat unter Umständen auch nur einen ein Jahr alten Stand. Trage einen wiederkehrenden Termin ein oder nutze eine automatische Sicherung, die beim Anschließen zuverlässig startet. Achte darauf, dass sie bei längerer Abwesenheit nicht unbemerkt ausfällt.',
          'Wirf das Laufwerk nach dem Abschluss über das Betriebssystem aus. Ziehe das Kabel nicht während einer laufenden Übertragung. Für eine bewusst offline gehaltene Sicherung wird die Platte danach getrennt aufbewahrt. So kann ein Fehler auf dem Arbeitsgerät diese Kopie nicht einfach über eine bestehende Verbindung verändern.',
        ],
      },
      {
        heading: 'Den Schutz sinnvoll ergänzen',
        paragraphs: [
          'Die externe Festplatte kann ebenfalls kaputtgehen oder verloren gehen. Für unwiederbringliche Fotos und wichtige Unterlagen ist deshalb eine weitere, getrennt gelagerte Sicherung sinnvoll. Enthält die Platte vertrauliche Daten, plane Verschlüsselung samt sicher aufbewahrtem Wiederherstellungsschlüssel ein.',
          'Überprüfe regelmäßig, ob neue Ordner hinzugekommen sind. Ein Gerätewechsel, ein anderes Fotoprogramm oder ein neues Benutzerkonto kann die bisherigen Annahmen verändern. Eine kurze Liste mit Sicherungsumfang und Testdatum macht deutlich, was geschützt ist und was noch fehlt.',
        ],
      },
    ],
    pitfall: 'Wenn du Dateien auf die Backup-Platte verschiebst und anschließend am PC löschst, besitzt du häufig wieder nur eine einzige Kopie. Das ist Auslagern, keine zusätzliche Sicherung.',
    whenToGetHelp: 'Wenn die Platte klickt, Verbindungsabbrüche zeigt oder zum Formatieren auffordert, obwohl Daten darauf liegen, keine weiteren Schreib- oder Reparaturversuche starten.',
    relatedSlugs: ['backup-3-2-1', 'dateien-geloescht', 'laufwerk-verschluesseln'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Sichern und Wiederherstellen mit Dateiversionsverlauf', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/backup-and-restore-with-file-history' },
      { title: 'BSI: Das Internet sicher nutzen', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Wegweiser_Checklisten_Flyer/Brosch_A6_Surfen_aber_sicher.pdf?__blob=publicationFile' },
    ],
  },
  {
    slug: 'cloud-sync-oder-backup',
    title: 'Cloud-Synchronisierung oder Backup: der wichtige Unterschied',
    description: 'OneDrive und andere Cloud-Dienste halten Dateien zwischen Geräten aktuell. Erfahre, welche Wiederherstellungsmöglichkeiten du zusätzlich prüfen solltest.',
    category: 'daten',
    readMinutes: 5,
    image: 'workspace',
    imageAlt: 'Heller Arbeitsplatz mit Computer für die Verwaltung digitaler Dateien',
    updated: '2026-11-11',
    intro: 'Die Datei ist in der Cloud, also ist sie sicher? Ein Cloud-Dienst kann sehr hilfreich sein, aber nicht jede Funktion schützt gegen dieselben Probleme. Besonders wichtig ist der Unterschied zwischen dem Abgleichen aktueller Dateien und einer unabhängigen Sicherung früherer Zustände.',
    takeaways: [
      'Synchronisierung überträgt häufig auch Löschungen und unerwünschte Änderungen.',
      'Prüfe Papierkorb, Versionsverlauf, Aufbewahrungsdauer und Wiederherstellungsrechte.',
      'Für wichtige Daten ergänzt eine unabhängige Sicherung den Cloud-Dienst.',
    ],
    sections: [
      {
        heading: 'Was Synchronisierung für dich erledigt',
        paragraphs: [
          'Synchronisierung hält einen Dateibestand auf mehreren Geräten und im Cloud-Konto möglichst auf demselben Stand. Bearbeitest du ein Dokument am Laptop, soll die neue Fassung auch am anderen Computer auftauchen. Das ist praktisch für Zusammenarbeit und Gerätewechsel. Es bedeutet aber häufig auch: Eine Löschung wird auf andere verbundene Geräte übertragen.',
          'Die zweite sichtbare Datei auf deinem anderen Rechner ist deshalb nicht unbedingt unabhängig. Beide können zum selben synchronisierten Ordner gehören. Prüfe bei wichtigen Dokumenten den tatsächlichen Speicherort und das verwendete Konto. Ein privates Konto und ein Geschäftskonto können auf demselben Computer völlig unterschiedliche Bestände enthalten.',
        ],
      },
      {
        heading: 'Welche Schutzfunktionen dein Dienst wirklich bietet',
        paragraphs: [
          'Viele Cloud-Dienste besitzen Papierkörbe und Versionsverläufe. Ihre Möglichkeiten unterscheiden sich nach Tarif, Dateityp und Kontoeinstellungen. Bei OneDrive sind etwa die Aufbewahrungsregeln für private und geschäftliche Konten nicht identisch. Verlasse dich daher nicht auf eine Zahl aus einer alten Anleitung, sondern prüfe die aktuellen Bedingungen deines Kontos.',
          'Suche einmal bewusst nach dem Web-Papierkorb und einer früheren Version einer ungefährlichen Testdatei. Kläre außerdem, wer im Betrieb eine Wiederherstellung anstoßen darf. Ein gesperrtes Konto kann den Zugriff auf deine Dateien genauso verhindern wie ein defekter Laptop. Kontoabsicherung und Wiederherstellungsdaten gehören deshalb mit zum Plan.',
        ],
      },
      {
        heading: 'Online verfügbar ist nicht lokal gesichert',
        paragraphs: [
          'Ein Dateiname im Explorer kann lediglich ein Platzhalter für eine Datei in der Cloud sein. Eine lokale Sicherung erfasst dann je nach Programm nicht automatisch den vollständigen Inhalt. Wenn du solche Daten zusätzlich auf eine externe Platte sichern möchtest, müssen sie tatsächlich verfügbar sein und von der Sicherungslösung unterstützt werden.',
          'Kontrolliere eine kleine Auswahl ohne aktive Internetverbindung, bevor du dich auf den lokalen Bestand verlässt. Kannst du das Dokument öffnen und bearbeiten? Enthält ein Foto die volle Auflösung? Dabei geht es nicht darum, die Synchronisierung wild abzuschalten, sondern zuerst den vorhandenen Zustand zu verstehen.',
        ],
      },
      {
        heading: 'Eine einfache Aufteilung für den Alltag',
        paragraphs: [
          'Nutze die Cloud für bequemes Arbeiten zwischen Geräten und ergänze wichtige Daten durch eine unabhängige, versionierte Sicherung. Definiere, welche Ordner dazugehören und wie oft sie gesichert werden. Die zusätzliche Kopie sollte nicht dieselbe Löschung sofort übernehmen und bei Bedarf auch ohne den ursprünglichen Computer nutzbar sein.',
          'Wenn Dateien plötzlich verschwinden, halte erst an und kläre, ob sie lokal, im Web oder in einem anderen Konto fehlen. Auf mehreren Geräten gleichzeitig zu löschen, neu zu synchronisieren und Ordner zu verschieben erschwert die Einordnung. Sichere einen noch vollständigen Bestand separat, bevor du größere Umstellungen vornimmst.',
        ],
      },
    ],
    pitfall: 'Das Löschen eines synchronisierten Ordners schafft nicht zwangsläufig nur lokalen Speicher frei. Es kann den Ordner auch in der Cloud und auf anderen Geräten entfernen.',
    whenToGetHelp: 'Wenn unterschiedliche Konten, gemeinsame Ordner oder fehlende Dateien im Spiel sind, erst die Synchronisierungsstruktur klären lassen, bevor du Ordner neu verknüpfst oder zusammenführst.',
    relatedSlugs: ['backup-3-2-1', 'dateien-geloescht', 'daten-auf-neuen-pc'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Mit synchronisierten Dateien im Explorer arbeiten', url: 'https://support.microsoft.com/de-de/sharepoint/sync/work-with-synced-files-in-file-explorer' },
      { title: 'Microsoft: Gelöschte OneDrive-Dateien wiederherstellen', url: 'https://support.microsoft.com/de-de/onedrive/restore-deleted-files-or-folders-in-onedrive' },
      { title: 'Microsoft: Wiederherstellungsoptionen für OneDrive', url: 'https://support.microsoft.com/de-de/onedrive/restore-your-onedrive-files' },
    ],
  },
  {
    slug: 'daten-auf-neuen-pc',
    title: 'Daten auf den neuen PC umziehen, ohne Wichtiges zu vergessen',
    description: 'Eine klare Checkliste für Dokumente, Fotos, Programme und Konten: So prüfst du einen PC-Umzug, bevor du das alte Gerät löschst oder weitergibst.',
    category: 'daten',
    readMinutes: 5,
    image: 'installation-service',
    imageAlt: 'Computer und Zubehör für die Einrichtung eines Arbeitsplatzes',
    updated: '2026-11-11',
    intro: 'Ein neuer Computer soll den Alltag erleichtern. Beim Umzug zeigt sich allerdings oft, wie viele Dateien, Konten und Programme auf dem bisherigen Gerät zusammengekommen sind. Mit einer Bestandsliste und einer bewussten Abschlussprüfung vermeidest du, dass wichtige Daten erst nach dem Löschen des alten PCs auffallen.',
    takeaways: [
      'Vor dem Umzug eine unabhängige Sicherung anlegen und den Umfang aufschreiben.',
      'Persönliche Dateien, Programme und Anmeldedaten getrennt behandeln.',
      'Das alte Gerät erst löschen, wenn der neue Arbeitsplatz vollständig geprüft ist.',
    ],
    sections: [
      {
        heading: 'Die versteckten Daten mit auf die Liste nehmen',
        paragraphs: [
          'Dokumente und Bilder sind meist schnell gefunden. Denke zusätzlich an Desktop, Downloads, Videos, lokale E-Mail-Archive, Vorlagen, Browser-Lesezeichen und Dateien von Fachprogrammen. Manche Anwendungen besitzen einen eigenen Export oder eine Sicherungsfunktion. Prüfe auch weitere Benutzerkonten, falls der Computer von mehreren Menschen genutzt wird.',
          'Erstelle eine kleine Tabelle mit Datenbereich, bisherigem Speicherort, Übertragungsweg und Ergebnisprüfung. Dabei fallen offene Fragen früh auf: Liegen die Fotos wirklich lokal? Ist die Buchhaltungsdatei nur eine Verknüpfung? Sind alte E-Mails auf dem Server vorhanden oder ausschließlich in einem lokalen Archiv? Diese Klärung spart spätere Sucharbeit.',
        ],
      },
      {
        heading: 'Einen passenden Übertragungsweg wählen',
        paragraphs: [
          'Ein bekanntes externes Laufwerk eignet sich für einen überschaubaren Dateibestand. Kopiere die Dateien zunächst darauf und anschließend auf den neuen PC. Vermeide Ausschneiden oder Verschieben als ersten Schritt: Die ursprüngliche Kopie soll bis zum erfolgreichen Abschluss erhalten bleiben. Prüfe ausreichend freien Speicher auf beiden Zielen.',
          'Cloud-Synchronisierung kann eine Alternative sein, sofern alle gewünschten Dateien vollständig hochgeladen sind und du Zugriff auf das richtige Konto hast. Windows bietet zudem eigene Übertragungs- und Sicherungsfunktionen, deren Voraussetzungen und Umfang sich unterscheiden. Wähle den Weg anhand deiner Daten, nicht nur anhand eines besonders einfachen Werbeversprechens.',
        ],
      },
      {
        heading: 'Programme und Konten gesondert einrichten',
        paragraphs: [
          'Installierte Programme lassen sich normalerweise nicht durch Kopieren ihres Ordners übernehmen. Besorge die Installation aus der offiziellen Quelle, prüfe die Lizenz und importiere anschließend die zugehörigen Daten. Behalte alte Installationsdateien oder Lizenznachweise geordnet, aber führe unbekannte Dateien nicht allein deshalb aus, weil sie auf dem bisherigen PC lagen.',
          'Teste wichtige Anmeldungen früh. Passwortmanager, zweiter Faktor und Wiederherstellungscodes müssen auch ohne den alten Rechner erreichbar sein. Teile solche Geheimnisse nicht in einer normalen E-Mail oder mit fremden Supportkontakten. Bei betrieblich verwalteten Geräten legt die zuständige IT fest, welche Konten und Übertragungswege verwendet werden dürfen.',
        ],
      },
      {
        heading: 'Nicht nur zählen, sondern benutzen',
        paragraphs: [
          'Vergleiche die erwarteten Ordner und öffne stichprobenartig Dokumente, ältere Fotos und größere Dateien. Arbeite einen typischen Vorgang durch: ein Dokument bearbeiten, eine E-Mail suchen, ein benötigtes Programm starten und gegebenenfalls etwas drucken. Ein erfolgreich kopierter Ordner ist noch kein vollständig eingerichteter Arbeitsplatz.',
          'Lass das alte Gerät bis zum Abschluss unverändert und geschützt aufbewahrt. Richte auf dem neuen PC sofort eine eigene Sicherung ein. Erst wenn die Daten überprüft und unabhängig gesichert sind, folgt die getrennte Vorbereitung des alten Geräts für Verkauf oder Weitergabe. Halte fest, wann du den Umzug als abgeschlossen betrachtet hast.',
        ],
      },
    ],
    pitfall: 'Eine Verknüpfung oder ein Cloud-Platzhalter kann wie eine Datei aussehen, enthält aber nicht unbedingt den eigentlichen Inhalt. Ein erfolgreicher Kopierdialog allein genügt als Kontrolle nicht.',
    whenToGetHelp: 'Bei Fachsoftware, lokalen E-Mail-Archiven, mehreren Benutzerkonten oder einem bereits instabilen Altgerät lohnt sich ein geplanter Umzug, bevor etwas gelöscht wird.',
    relatedSlugs: ['backup-3-2-1', 'cloud-sync-oder-backup', 'alte-geraete-verkaufen'],
    servicePath: '/leistungen/installation/',
    sources: [
      { title: 'Microsoft: Dateien mit einem externen Speichergerät auf einen neuen PC übertragen', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/move-your-files-to-a-new-windows-pc-using-an-external-storage-device' },
      { title: 'Microsoft: Dateien und Einstellungen auf einen neuen Windows-PC übertragen', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/transfer-your-files-and-settings-to-a-new-windows-pc' },
    ],
  },
  {
    slug: 'dateien-geloescht',
    title: 'Dateien versehentlich gelöscht: was du jetzt tun solltest',
    description: 'Erst weitere Schreibzugriffe vermeiden, dann Papierkorb, Cloud und Sicherungen prüfen. So triffst du die nächsten Entscheidungen bei fehlenden Dateien.',
    category: 'daten',
    readMinutes: 5,
    image: 'pc-service',
    imageAlt: 'Notebook auf einem übersichtlichen Tisch zur Prüfung fehlender Dateien',
    updated: '2026-11-11',
    intro: 'Ein wichtiger Ordner ist weg und der erste Impuls lautet: schnell irgendein Rettungsprogramm installieren. Genau das kann die Lage verschlechtern. Bei gelöschten Daten kommt es zuerst darauf an, weitere Änderungen zu vermeiden und den ursprünglichen Speicherort richtig einzuordnen.',
    takeaways: [
      'Nicht weiter auf den betroffenen Datenträger schreiben oder dort Software installieren.',
      'Papierkorb, Cloud-Papierkorb und vorhandene Sicherungen zuerst prüfen.',
      'Bei unersetzlichen Daten oder auffälliger Hardware früh professionelle Hilfe einholen.',
    ],
    sections: [
      {
        heading: 'Die Situation kurz festhalten',
        paragraphs: [
          'Notiere, was fehlt, wann du es zuletzt gesehen hast und welche Aktion unmittelbar davor stattgefunden hat. War es ein lokaler Ordner, ein USB-Laufwerk, eine Speicherkarte oder eine synchronisierte Cloud-Datei? Wurde nur eine Datei gelöscht, der Papierkorb geleert oder der gesamte Datenträger formatiert? Diese Unterschiede bestimmen den sinnvollen nächsten Schritt.',
          'Beende unnötige Arbeiten am betroffenen Gerät. Installiere dort keine Wiederherstellungssoftware, lade nichts herunter und speichere keine neuen Dateien auf demselben Laufwerk. Wird die Systemplatte verwendet, entstehen auch im Hintergrund Schreibzugriffe. Bei besonders wertvollen Daten ist es deshalb sinnvoll, das Gerät nicht weiter zu benutzen und zunächst Hilfe einzuholen.',
        ],
      },
      {
        heading: 'Die einfachen Wiederherstellungswege prüfen',
        paragraphs: [
          'Wenn keine Anzeichen eines Hardwaredefekts bestehen und die Daten nicht besonders kritisch sind, prüfe zuerst den normalen Papierkorb. Suche nach Dateiname und ursprünglichem Ordner. Bei Cloud-Dateien ist zusätzlich der Papierkorb auf der Website des richtigen Kontos wichtig. Eine nur online gespeicherte Datei muss nicht im lokalen Papierkorb auftauchen.',
          'Bei einem überschriebenen Dokument kann ein Versionsverlauf helfen. Suche außerdem in einer vorhandenen Sicherung nach einem Stand vor dem Verlust. Stelle eine gefundene Version zunächst an einem anderen Ort wieder her und kontrolliere den Inhalt. So ersetzt du nicht versehentlich eine brauchbare aktuelle Fassung durch einen älteren Stand.',
        ],
      },
      {
        heading: 'Die Grenzen von Rettungsprogrammen kennen',
        paragraphs: [
          'Nach dem Löschen können Daten unter bestimmten Bedingungen noch auf einem Datenträger vorhanden sein. Weitere Schreibzugriffe können diese Bereiche jedoch überschreiben. Bei SSDs und manchen Speichermedien kann die Wiederherstellung zusätzlich durch interne Lösch- und Bereinigungsmechanismen begrenzt sein. Ein leerer Papierkorb bedeutet daher weder sicher „alles verloren“ noch sicher „alles rettbar“.',
          'Werkzeuge wie Windows File Recovery sind für bestimmte lokale Datenträger vorgesehen und erfordern passende Voraussetzungen. Ein Rettungsziel muss unabhängig vom betroffenen Quelllaufwerk sein. Wer die Begriffe Quelle, Ziel und Partition nicht sicher zuordnen kann, sollte keine Befehle aus einem Forum ausprobieren. Bei unersetzlichen Familienfotos ist ein vorsichtiger erster Schritt wichtiger als ein schneller Versuch.',
        ],
      },
      {
        heading: 'Bei auffälliger Hardware nicht experimentieren',
        paragraphs: [
          'Klickende Geräusche, häufige Verbindungsabbrüche, Brandgeruch oder eine nicht mehr erkannte Platte sind ein anderer Fall als eine versehentliche Löschung. Wiederholtes Einschalten, Öffnen des Gehäuses oder Reparaturprogramme können zusätzliche Risiken schaffen. Eine Aufforderung zum Formatieren ist keine Aufforderung, mit dem Löschen fortzufahren.',
          'Halte das Gerät geschützt bereit und notiere Modell, Fehlermeldung und letzte Aktionen. Nach einer erfolgreichen Wiederherstellung folgt eine unabhängige Sicherung mit einem getesteten Wiederherstellungsweg. So bleibt die Rettung eine Ausnahme und wird nicht zur regelmäßigen Strategie für wichtige Daten.',
        ],
      },
    ],
    pitfall: 'Kein Formatieren, Initialisieren, Bereinigen oder Reparieren auf Verdacht. Auch ein als hilfreich angebotenes Werkzeug kann auf dem betroffenen Laufwerk Änderungen auslösen.',
    whenToGetHelp: 'Sofort bei unersetzlichen Daten, Hardwareauffälligkeiten, einem versehentlich formatierten Datenträger oder Unsicherheit über Quelle und Ziel. Eine Wiederherstellung lässt sich nicht garantieren.',
    relatedSlugs: ['backup-3-2-1', 'cloud-sync-oder-backup', 'externe-festplatte-sichern'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Windows File Recovery und Verhalten nach Datenverlust', url: 'https://support.microsoft.com/en-us/windows/experience/backup-recovery/windows-file-recovery' },
      { title: 'Microsoft: Wiederherstellen von Dateien in OneDrive', url: 'https://support.microsoft.com/de-de/onedrive/restore-your-onedrive-files' },
      { title: 'Microsoft: Dateiversionsverlauf und Wiederherstellung', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/backup-and-restore-with-file-history' },
    ],
  },
  {
    slug: 'laufwerk-verschluesseln',
    title: 'Laufwerke verschlüsseln und den Wiederherstellungsschlüssel sichern',
    description: 'Verschlüsselung schützt Daten bei Geräteverlust. Erfahre, was BitLocker und Geräteverschlüsselung leisten und wie du den Zugriff im Notfall erhältst.',
    category: 'daten',
    readMinutes: 5,
    image: 'security-desk',
    imageAlt: 'Laptop mit Sicherheitsschlüssel auf einem hellen Schreibtisch',
    updated: '2026-11-11',
    intro: 'Ein Anmeldepasswort ist wichtig, ersetzt aber keine Laufwerkverschlüsselung. Wird ein Laptop oder ein externer Datenträger gestohlen, soll der Inhalt auch außerhalb des gewohnten Systems geschützt bleiben. Gleichzeitig musst du selbst nach einem Defekt oder einer Wiederherstellungsabfrage noch an deine Daten kommen können.',
    takeaways: [
      'Prüfe den tatsächlichen Verschlüsselungsstatus, statt ihn vom Anmeldebildschirm abzuleiten.',
      'Bewahre den Wiederherstellungsschlüssel getrennt und nachvollziehbar auf.',
      'Verschlüsselung schützt Vertraulichkeit; eine zusätzliche Datensicherung bleibt nötig.',
    ],
    sections: [
      {
        heading: 'Was Verschlüsselung schützt und was nicht',
        paragraphs: [
          'Laufwerkverschlüsselung macht gespeicherte Daten ohne den passenden Schlüssel unlesbar. Sie ist besonders wichtig für mobile Computer und Datenträger, die verloren gehen können. Wenn du angemeldet bist und das Laufwerk entsperrt ist, können berechtigte Programme allerdings darauf zugreifen. Verschlüsselung ersetzt deshalb weder aktuelle Software noch einen sorgsamen Umgang mit verdächtigen Dateien.',
          'Sie ist außerdem kein Backup. Ein verschlüsseltes Laufwerk kann genauso ausfallen wie ein unverschlüsseltes. Auch versehentlich gelöschte Dateien werden durch Verschlüsselung nicht zurückgebracht. Plane Vertraulichkeit und Wiederherstellung deshalb als zwei unterschiedliche Aufgaben mit jeweils einer passenden Lösung.',
        ],
      },
      {
        heading: 'Den Status unter Windows richtig einordnen',
        paragraphs: [
          'Windows bietet je nach Edition und Hardware Geräteverschlüsselung oder die ausführlichere BitLocker-Verwaltung. Auf geeigneten Geräten kann die Verschlüsselung bereits eingerichtet sein. Suche in den Windows-Einstellungen nach Geräteverschlüsselung beziehungsweise nach „BitLocker verwalten“, statt anzunehmen, dass ein fehlender Schalter automatisch ein ungeschütztes Laufwerk bedeutet.',
          'Die manuelle BitLocker-Laufwerkverwaltung ist für bestimmte Windows-Editionen vorgesehen. Auf einem Firmen- oder Schulgerät können Richtlinien den Zustand bestimmen. Ändere dort nichts eigenständig. Bei einem privaten Gerät gehört vor einer Änderung eine aktuelle Sicherung dazu, besonders wenn du den bisherigen Aufbau nicht genau kennst.',
        ],
      },
      {
        heading: 'Den Schlüssel finden, bevor du ihn brauchst',
        paragraphs: [
          'Der BitLocker-Wiederherstellungsschlüssel ist nicht einfach dein Windows-Passwort. Er kann je nach Einrichtung beispielsweise im verwendeten Microsoft-Konto, bei der Organisation oder an einem selbst gewählten sicheren Ort liegen. Prüfe das jetzt mit einem zweiten Gerät oder über einen anderen erreichbaren Zugang. Eine Notiz ausschließlich auf dem verschlüsselten Laptop hilft im Ernstfall nicht.',
          'Ordne den Schlüssel eindeutig dem richtigen Gerät zu und verwahre ihn gegen fremden Zugriff geschützt. Bei einer Wiederherstellungsabfrage hilft die angezeigte Schlüsselkennung, die passende gespeicherte Information auszuwählen. Schicke den Schlüssel nicht an Personen, die dich unaufgefordert kontaktieren. Microsoft kann einen verlorenen Schlüssel nicht für dich neu erzeugen.',
        ],
      },
      {
        heading: 'Änderungen am Gerät vorbereitet angehen',
        paragraphs: [
          'Vor Firmware-Updates, Reparaturen oder größeren Änderungen solltest du sowohl die Datensicherung als auch den Schlüsselzugriff prüfen. Wenn plötzlich eine Wiederherstellungsabfrage erscheint, lies sie vollständig und ändere nicht wahllos Firmware- oder Sicherheitsoptionen. Ein Reset kann Daten löschen und löst ein fehlendes Backup nicht nachträglich.',
          'Auch externe Sicherungsplatten können vertrauliche Unterlagen enthalten. Wähle eine Verschlüsselung, die auf den benötigten Geräten unterstützt wird, und teste das Entsperren bewusst. Eine kurze Dokumentation mit Gerätename, Zuständigkeit und sicherem Aufbewahrungsort genügt oft, um spätere Unsicherheit zu vermeiden. Der eigentliche Schlüssel gehört nicht in diese frei zugängliche Übersicht.',
        ],
      },
    ],
    pitfall: 'Den einzigen Wiederherstellungsschlüssel auf demselben verschlüsselten Laufwerk abzulegen, schafft einen Kreislauf: Du brauchst den Schlüssel, um an den Schlüssel zu gelangen.',
    whenToGetHelp: 'Wenn eine Schlüsselabfrage erscheint, kein passender Schlüssel auffindbar ist oder das Gerät von einer Organisation verwaltet wird, erst den zuständigen Ansprechpartner einbeziehen und nicht zurücksetzen.',
    relatedSlugs: ['backup-3-2-1', 'alte-geraete-verkaufen', 'usb-sticks-sicher-nutzen'],
    servicePath: '/leistungen/windows-einrichten/',
    sources: [
      { title: 'Microsoft: BitLocker-Laufwerkverschlüsselung', url: 'https://support.microsoft.com/de-de/windows/security/encryption/bitlocker-drive-encryption' },
      { title: 'Microsoft: BitLocker-Wiederherstellungsschlüssel finden', url: 'https://support.microsoft.com/de-de/windows/security/encryption/find-your-bitlocker-recovery-key' },
      { title: 'Microsoft Learn: BitLocker und Geräteverschlüsselung', url: 'https://learn.microsoft.com/de-de/windows/security/operating-system-security/data-protection/bitlocker/' },
    ],
  },
  {
    slug: 'alte-geraete-verkaufen',
    title: 'Alten Computer verkaufen: Daten und Konten vorher sauber trennen',
    description: 'Vor Verkauf oder Weitergabe: Sicherungen prüfen, Konten übertragen, offizielle Rücksetzverfahren nutzen und den Übergabezustand kontrollieren.',
    category: 'daten',
    readMinutes: 5,
    image: 'installation-service',
    imageAlt: 'Aufgeräumter Computerarbeitsplatz mit vorbereitetem Gerät und Zubehör',
    updated: '2026-11-11',
    intro: 'Ein funktionierender alter Computer kann noch gute Dienste leisten. Deine Unterlagen, gespeicherten Konten und persönlichen Einstellungen sollen dabei aber nicht mit umziehen. Die sichere Vorbereitung beginnt deshalb mit einer überprüften Sicherung und endet erst, wenn das Gerät ohne deinen persönlichen Zugang übergeben werden kann.',
    takeaways: [
      'Vor jeder Löschung die benötigten Daten auf einem anderen Gerät prüfen und sichern.',
      'Konten, Aktivierungssperren und geschäftliche Verwaltung vor der Übergabe klären.',
      'Das offizielle Verfahren für dein konkretes Gerät und Betriebssystem verwenden.',
    ],
    sections: [
      {
        heading: 'Erst vollständig umziehen, dann aufräumen',
        paragraphs: [
          'Gehe die wichtigen Datenbereiche durch: Dokumente, Fotos, lokale E-Mails, Browser-Lesezeichen, Projekte und Dateien besonderer Programme. Öffne eine Auswahl auf dem neuen Gerät. Prüfe außerdem, ob Passwortmanager, zweiter Faktor und Wiederherstellungscodes unabhängig vom alten Computer erreichbar sind. Das alte Gerät darf nicht der einzige verbliebene Zugang zu einem Konto sein.',
          'Lege zusätzlich eine Sicherung an, die du nicht zusammen mit dem Gerät verkaufst. Ein leerer Desktop beweist nicht, dass alle Daten übernommen wurden. Plane für die Kontrolle genügend Zeit ein, damit du keine endgültige Löschung nur deshalb startest, weil der Käufer bereits vor der Tür steht.',
        ],
      },
      {
        heading: 'Konten und Zuständigkeiten klären',
        paragraphs: [
          'Bei einem privaten Gerät solltest du wissen, welche Konten, Lizenzen und Schutzfunktionen damit verbunden sind. Für manche Programme muss eine Geräteaktivierung freigegeben werden. Apples Anleitung beschreibt außerdem die nötigen Schritte rund um den Apple Account und die verwendete Mac-Generation. Orientiere dich an dieser konkreten Anleitung, statt eine beliebige alte Checkliste zu übernehmen.',
          'Ein Gerät des Arbeitgebers oder ein verwalteter Schulcomputer darf nicht wie ein privates Altgerät behandelt werden. Freigabe, Datenaufbewahrung und Entfernung aus der Verwaltung gehören in die Hände der zuständigen Organisation. Auch wenn du das Gerät gekauft hast, können noch offene organisatorische Bindungen bestehen, die vor einer Weitergabe geklärt werden müssen.',
        ],
      },
      {
        heading: 'Das passende offizielle Rücksetzverfahren nutzen',
        paragraphs: [
          'Windows bietet beim Zurücksetzen unterschiedliche Optionen. Für eine Weitergabe ist „Eigene Dateien beibehalten“ offensichtlich nicht passend. Microsoft beschreibt dafür das Entfernen persönlicher Inhalte und die zusätzliche Datenbereinigung. Lies die Hinweise vollständig und kontrolliere, welche internen Laufwerke von der gewählten Option erfasst werden.',
          'Bei Macs hängt das empfohlene Verfahren von Modell und macOS-Version ab. Nutze die aktuelle Apple-Anleitung. Ziehe nicht benötigte externe Laufwerke vor einer Löschaktion ab, damit keine Sicherungsplatte versehentlich ausgewählt wird. Starte erst, wenn die betroffenen Datenträger eindeutig feststehen und die Sicherung geprüft ist.',
        ],
      },
      {
        heading: 'Den Übergabezustand kontrollieren',
        paragraphs: [
          'Nach dem vorgesehenen Rücksetzen sollte das Gerät den Einrichtungszustand zeigen, den der Hersteller für eine Weitergabe beschreibt. Melde dich nicht erneut mit deinem privaten Konto an, nur um diesen Zustand zu fotografieren. Überprüfe Gehäuse und Zubehör außerdem auf eingelegte Speicherkarten, USB-Empfänger mit Speicherfunktion oder angeschlossene Sicherungsmedien.',
          'Für besonders vertrauliche geschäftliche Daten, defekte Laufwerke oder unklare Verschlüsselungszustände reicht eine allgemeine Anleitung nicht als belastbarer Löschungsnachweis. Dann sollte ein geeignetes Verfahren anhand des Datenträgers festgelegt werden. Die Kontrolle schützt beide Seiten: Der neue Besitzer erhält ein einrichtbares Gerät, und deine Daten bleiben nicht unbeabsichtigt zurück.',
        ],
      },
    ],
    pitfall: 'Dateien in den Papierkorb zu legen oder den Benutzerordner manuell zu löschen ist keine verlässliche Vorbereitung für einen Geräteverkauf. Auch zusätzliche interne Laufwerke werden leicht übersehen.',
    whenToGetHelp: 'Bei Firmenrechnern, sensiblen Unterlagen, defekten Datenträgern oder unbekannten Aktivierungssperren sollte die Übergabe vorbereitet werden, bevor Daten unwiderruflich gelöscht werden.',
    relatedSlugs: ['daten-auf-neuen-pc', 'backup-3-2-1', 'laufwerk-verschluesseln'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Vor Verkauf oder Weitergabe eines Windows-PCs', url: 'https://support.microsoft.com/en-us/accounts-billing/security/before-you-recycle-sell-or-gift-your-xbox-or-windows-pc' },
      { title: 'Microsoft: Optionen beim Zurücksetzen des PCs', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/reset-your-pc' },
      { title: 'Apple: Einen Mac auf Verkauf oder Weitergabe vorbereiten', url: 'https://support.apple.com/de-de/102773' },
    ],
  },
  {
    slug: 'usb-sticks-sicher-nutzen',
    title: 'USB-Sticks sicher nutzen: kleine Datenträger, klare Regeln',
    description: 'Wie du bekannte USB-Sticks für den Datentransport verwendest, vertrauliche Inhalte schützt und bei unbekannten oder auffälligen Geräten richtig reagierst.',
    category: 'daten',
    readMinutes: 5,
    image: 'pc-service',
    imageAlt: 'Notebook auf einem aufgeräumten Arbeitsplatz für die Datenübertragung',
    updated: '2026-11-11',
    intro: 'Ein USB-Stick ist schnell eingesteckt und genauso schnell verloren. Er kann nützlich sein, um Dateien gezielt zu übertragen. Als unbekanntes Fundstück oder einzige Aufbewahrung wichtiger Daten ist er dagegen keine gute Grundlage. Ein paar klare Regeln helfen, Datenverlust und unerwünschten Zugriff zu vermeiden.',
    takeaways: [
      'Unbekannte oder gefundene USB-Geräte nicht an deinen Computer anschließen.',
      'Vertrauliche Daten nur mit geeignetem Schutz und möglichst sparsam transportieren.',
      'Wichtige Dateien zusätzlich unabhängig sichern und Übertragungen kontrollieren.',
    ],
    sections: [
      {
        heading: 'Herkunft vor Neugier',
        paragraphs: [
          'Ein gefundener Stick gehört nicht zur Suche nach seinem Besitzer an deinen privaten oder geschäftlichen Computer. USB-Geräte können mehr Funktionen besitzen, als ihr Gehäuse erkennen lässt. Ein Virenscan prüft Dateien, ist aber keine allgemeine Garantie für die Sicherheit eines unbekannten Geräts. Gib Fundstücke an eine zuständige Stelle weiter, ohne sie anzuschließen.',
          'Nutze für eigene Übertragungen einen bekannten Datenträger und halte ihn unter deiner Kontrolle. In Betrieben können nur ausdrücklich freigegebene Geräte erlaubt sein. Eine private Ausweichlösung ist dann auch bei Zeitdruck keine gute Idee. Frage nach dem vorgesehenen Übertragungsweg, bevor du Kundendaten auf einen eigenen Stick kopierst.',
        ],
      },
      {
        heading: 'Nur die benötigten Daten mitnehmen',
        paragraphs: [
          'Übertrage möglichst nur die Dateien, die für den konkreten Zweck nötig sind. Wer ein einzelnes Dokument drucken möchte, muss nicht sein gesamtes Archiv auf den Stick legen. Für personenbezogene oder vertrauliche Inhalte ist ein geeigneter Verschlüsselungsschutz sinnvoll. Prüfe vorher, ob der Empfänger diesen Schutz mit seinem Gerät überhaupt nutzen kann.',
          'Bewahre den Zugang getrennt vom Datenträger auf. Ein aufgeklebtes Passwort hilft einem Finder genauso wie dir. Teste das Entsperren und Öffnen mit einer ungefährlichen Beispieldatei, bevor du dich auf den Ablauf verlässt. Auch ein verschlüsselter Stick braucht einen nachvollziehbaren Aufbewahrungsort und sollte nicht dauerhaft offen herumliegen.',
        ],
      },
      {
        heading: 'Kopieren, prüfen, sicher entfernen',
        paragraphs: [
          'Kopiere Dateien zunächst und behalte das Original, bis der Transfer kontrolliert ist. Öffne auf dem Zielgerät eine passende Auswahl und überprüfe bei größeren Vorgängen auch Ordnerstruktur und erwartete Datenmenge. Ein gleichnamiger Ordner kann eine ältere Version enthalten; Datum und Inhalt sind deshalb aussagekräftiger als der Name allein.',
          'Lass alle Übertragungen vollständig abschließen und verwende die Auswerfen-Funktion des Betriebssystems. Ziehe den Stick nicht während eines Schreibvorgangs ab. Wenn Windows das Entfernen verweigert, schließe Programme, die noch darauf zugreifen. Ein erzwungenes Abziehen kann den gerade bearbeiteten Bestand beschädigen.',
        ],
      },
      {
        heading: 'Aus Transport darf nicht die einzige Sicherung werden',
        paragraphs: [
          'Ein kleiner Stick ist leicht zu verlieren und kann ohne Vorwarnung ausfallen. Nutze ihn deshalb nicht als einzigen Ort für Familienfotos, Abschlussarbeiten oder wichtige Geschäftsunterlagen. Wenn du eine Datei nur noch dort hast, lege zuerst eine weitere Kopie auf einem verlässlichen Speicher an. Plane für wichtige Daten zusätzlich eine regelmäßige Sicherung.',
          'Meldet sich ein bisher genutzter Stick plötzlich als leer oder verlangt das System eine Formatierung, halte an. Formatiere ihn nicht, solange noch benötigte Dateien darauf liegen. Notiere die Meldung und vermeide weitere Schreibzugriffe. Bei Verlust vertraulicher Geschäftsdaten informierst du den zuständigen Ansprechpartner zeitnah, statt auf ein zufälliges Wiederfinden zu hoffen.',
        ],
      },
    ],
    pitfall: 'Ein unbekanntes USB-Gerät wird nicht dadurch sicher, dass du nur kurz nachsiehst oder vorher ein Antivirenprogramm öffnest. Auch die reine Herkunft einer Datei sagt nichts über alle Funktionen der Hardware aus.',
    whenToGetHelp: 'Wenn ein Stick mit wichtigen Daten nicht mehr lesbar ist, sensible Inhalte verloren gingen oder ein unbekanntes Gerät bereits angeschlossen wurde, die nächsten Schritte gezielt abstimmen.',
    relatedSlugs: ['laufwerk-verschluesseln', 'dateien-geloescht', 'backup-3-2-1'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'BSI: Umgang mit Wechseldatenträgern', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Umsetzungshinweise/Umsetzungshinweise_2022/Umsetzungshinweis_zum_Baustein_SYS_4_5_Wechseldatentraeger.pdf?__blob=publicationFile&v=2' },
      { title: 'BACS: Präparierte USB-Sticks als Einfallstor', url: 'https://www.bacs.admin.ch/de/23ct-1-de' },
      { title: 'Microsoft: Datenübertragung und sicheres Entfernen externer Speicher', url: 'https://support.microsoft.com/de-de/windows/experience/backup-recovery/move-your-files-to-a-new-windows-pc-using-an-external-storage-device' },
    ],
  },
]
