import type { GuideArticle } from './types'

export const dataExpansionGuides: GuideArticle[] = [
  {
    "slug": "onedrive-synchronisiert-nicht",
    "title": "OneDrive synchronisiert nicht: den Stillstand gezielt eingrenzen",
    "description": "Konten, Statussymbole, Speicherplatz und einzelne Dateien prüfen: So findest du einen OneDrive-Syncfehler, ohne lokale Änderungen zu verlieren.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-onedrive-synchronisiert-nicht",
    "imageAlt": "Silberner Laptop an einem hellen Fenster mit Blick auf einen bewölkten Himmel",
    "updated": "2026-11-11",
    "intro": "Eine Datei ist am Laptop aktuell, auf dem zweiten Gerät aber noch alt: Das beweist zunächst nur, dass die Stände auseinanderliegen. Bevor du OneDrive neu einrichtest oder Ordner löschst, kläre, welche Kopie vollständig ist und wo die Synchronisierung hängen bleibt. Eine kleine, nachvollziehbare Prüfung ist sicherer als mehrere Reparaturversuche gleichzeitig.",
    "takeaways": [
      "Vergleiche zuerst das angemeldete Konto und den Dateistand im Browser.",
      "Sichere ausschließlich lokal vorhandene Änderungen außerhalb des synchronisierten Ordners.",
      "Behebe die konkrete Statusmeldung und teste anschließend mit einer unwichtigen Datei."
    ],
    "sections": [
      {
        "heading": "1. Konto und tatsächlichen Speicherort vergleichen",
        "paragraphs": [
          "Öffne OneDrive über das Symbol im Infobereich und notiere die angezeigte Meldung. Kontrolliere, ob du ein privates Konto oder ein Arbeitskonto verwendest. Zwei ähnlich benannte Ordner können zu verschiedenen Konten gehören. Prüfe im Explorer den vollständigen Pfad der betroffenen Datei, nicht nur ihren Namen in der Liste zuletzt verwendeter Dokumente.",
          "Melde dich anschließend über die selbst aufgerufene Microsoft-Seite im passenden Konto an. Vergleiche dort Änderungsdatum und Inhalt. Fehlt nur die neueste lokale Bearbeitung, speichere eine zusätzliche Kopie in einem eindeutig getrennten lokalen Ordner. Nutze dafür keinen ebenfalls synchronisierten Desktop. Verändere die vorhandene Cloud-Version während dieser Bestandsaufnahme möglichst nicht."
        ]
      },
      {
        "heading": "2. Statuszeichen lesen und Voraussetzungen prüfen",
        "paragraphs": [
          "Das OneDrive-Symbol unterscheidet beispielsweise eine angehaltene Übertragung, eine fehlende Anmeldung und einen Fehler. Klicke auf die Meldung, um die betroffene Datei oder erforderliche Aktion zu sehen. Eine Wolke neben einer Datei bedeutet dagegen zunächst, dass ihr Inhalt nur online vorliegt; sie ist allein kein Nachweis eines Syncfehlers.",
          "Prüfe Internetverbindung, freien Platz auf dem Computer und das Speicherkontingent des richtigen Microsoft-Kontos. Ein voller Cloud-Speicher kann neue Uploads verhindern, obwohl das lokale Laufwerk noch Platz hat. Ist die Synchronisierung bewusst pausiert, setze sie fort. Schließe offene Bearbeitungen, speichere sie vorher und lasse einen größeren Upload bei stabiler Verbindung fertiglaufen."
        ]
      },
      {
        "heading": "3. Eine problematische Datei isoliert untersuchen",
        "paragraphs": [
          "Sind andere Dateien aktuell, konzentriere dich auf den genannten Kandidaten. Microsoft beschreibt Einschränkungen für Namen, Pfadlängen und bestimmte Dateitypen. Ein sehr tief verschachtelter Ordner oder ein unzulässiges Zeichen lässt sich oft gezielt korrigieren. Ändere keine großen Ordnerstrukturen auf Verdacht; dadurch entstehen zusätzliche Übertragungen und mögliche Auswirkungen auf Freigaben.",
          "Bei Konfliktkopien behältst du beide Fassungen, bis du sie inhaltlich verglichen hast. Das neuere Änderungsdatum allein beweist nicht, dass alle Änderungen enthalten sind. Lege danach eine harmlose neue Testdatei im vorgesehenen Ordner an. Prüfe, ob sie im Browser erscheint, und teste eine Änderung zurück zum Computer."
        ]
      },
      {
        "heading": "4. Erst nach der Sicherung größere Schritte erwägen",
        "paragraphs": [
          "Wenn der Fehler trotz passender Anmeldung und erfüllter Voraussetzungen bleibt, nutze Microsofts offizielle Problembehandlung für dein Konto und Betriebssystem. Ein Neustart der App oder des Rechners kann folgen, sobald offene Arbeit gespeichert ist. Halte Fehlermeldung, betroffene Pfade und bereits geprüfte Punkte fest.",
          "Kontoverknüpfung lösen, App zurücksetzen oder Ordner neu verbinden sind spätere Maßnahmen. Vorher müssen nicht hochgeladene Dateien separat gesichert und ihre Lesbarkeit geprüft sein. Auf einem verwalteten Firmenrechner gehört die zuständige IT dazu: Eine Richtlinie, fehlende Berechtigung oder geänderte Bibliothek lässt sich nicht sinnvoll durch wiederholte lokale Neueinrichtung umgehen."
        ]
      }
    ],
    "pitfall": "Ein synchronisierter Ordner ist kein ungefährlicher Reparaturplatz: Löschungen können auf andere Geräte übertragen werden. Entferne weder die vermeintlich alte Cloud-Kopie noch den lokalen Ordner, solange unklar ist, wo vollständige Daten liegen.",
    "whenToGetHelp": "Hol Hilfe, wenn nur noch eine wichtige Kopie existiert, Konflikte viele Dateien betreffen oder sich der Kontozustand nicht eindeutig zuordnen lässt. Halte die genaue Meldung bereit und gib keine Passwörter oder Anmeldecodes weiter.",
    "relatedSlugs": [
      "cloud-sync-oder-backup",
      "dateien-sicher-teilen",
      "dateien-ordnen-wiederfinden"
    ],
    "servicePath": "/leistungen/office-installation/",
    "sources": [
      {
        "title": "Microsoft: OneDrive-Synchronisierungsprobleme beheben",
        "url": "https://support.microsoft.com/en-us/onedrive/fix-onedrive-sync-problems"
      },
      {
        "title": "Microsoft: Bedeutung der OneDrive-Symbole",
        "url": "https://support.microsoft.com/en-us/onedrive/what-do-the-onedrive-icons-mean"
      },
      {
        "title": "Microsoft: Einschränkungen in OneDrive und SharePoint",
        "url": "https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint"
      }
    ]
  },
  {
    "slug": "dateien-sicher-teilen",
    "title": "Dateien sicher teilen: Empfänger und Rechte bewusst festlegen",
    "description": "Dateilinks kontrolliert weitergeben: passende Empfänger, Leserechte, begrenzte Ordnerfreigaben und eine saubere Prüfung nach dem Teilen.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-dateien-sicher-teilen",
    "imageAlt": "Zwei getrennte Laptop-Arbeitsplätze mit einer geschlossenen Dokumentenmappe auf einem gemeinsamen Tisch",
    "updated": "2026-11-11",
    "intro": "Ein Freigabelink ist bequem, aber seine Reichweite hängt von den gewählten Einstellungen ab. Entscheidend sind drei Fragen: Wer soll die Datei erhalten, was darf diese Person damit tun und wie lange wird der Zugang gebraucht? Mit einer bewussten Auswahl bleibt eine kleine Zusammenarbeit übersichtlich, auch wenn du keine eigene IT-Abteilung hast.",
    "takeaways": [
      "Teile nur die benötigten Dateien mit ausdrücklich ausgewählten Empfängern.",
      "Vergib zunächst Leserechte und erlaube Bearbeitung nur für echte Zusammenarbeit.",
      "Prüfe vorhandene Zugänge und entferne Freigaben, wenn der Zweck erledigt ist."
    ],
    "sections": [
      {
        "heading": "1. Inhalt und Empfänger vor dem Link prüfen",
        "paragraphs": [
          "Öffne die Datei vor dem Teilen und kontrolliere, ob sie wirklich die richtige Fassung ist. Denk auch an zusätzliche Tabellenblätter, Kommentare, Änderungsverläufe oder beigefügte Dokumente. Für eine einzelne Rechnung muss niemand den gesamten Jahresordner sehen. Stelle die benötigten Dateien gegebenenfalls in einem eigenen, klar abgegrenzten Freigabeordner zusammen.",
          "Prüfe die Empfängeradresse vollständig. Ein ähnlich geschriebener Kontakt oder eine automatisch vorgeschlagene alte Adresse reicht für eine Fehlfreigabe. Für vertrauliche Unterlagen eignet sich ein vom Empfänger akzeptierter, nachvollziehbarer Übertragungsweg. Bei Arbeitsdaten gelten die vereinbarten betrieblichen Vorgaben; ein privater Cloud-Zugang ist dafür keine automatische Ausweichlösung."
        ]
      },
      {
        "heading": "2. Den Linktyp und die kleinsten nötigen Rechte wählen",
        "paragraphs": [
          "Wähle bei Diensten wie OneDrive nach Möglichkeit bestimmte Personen. Ein Link für alle Personen mit dem Link kann weitergeleitet werden und dadurch einen größeren Empfängerkreis erreichen. Ein personenbezogener Zugang verlangt je nach Dienst und Kontotyp eine Anmeldung oder einen Bestätigungsschritt. Besprich vorab, welches Konto die andere Person dafür verwendet.",
          "Für eine Abgabe oder Ansicht genügen meistens Leserechte. Bearbeitungsrechte können bei freigegebenen Ordnern auch Umbenennen, Verschieben und Löschen ermöglichen. Ein neuer Leselink nimmt bereits vorhandene Bearbeitungsrechte nicht zuverlässig weg. Prüfe deshalb die gesamte Zugriffsliste und vorhandene Links. Optionen wie Ablaufdatum, Kennwort oder Downloadsperre hängen von Konto, Tarif und Organisationsregeln ab."
        ]
      },
      {
        "heading": "3. Die Freigabe mit einer kleinen Probe überprüfen",
        "paragraphs": [
          "Bei einem neuen Übertragungsweg beginne mit einer unverfänglichen Testdatei. Lass den vorgesehenen Empfänger bestätigen, dass er sie mit seinem eigenen Konto öffnen kann und die erwarteten Rechte hat. Erst danach folgen sensible Inhalte. Ein erfolgreicher Aufruf in deinem bereits angemeldeten Browser beweist nur deinen eigenen Zugriff.",
          "Prüfe bei Ordnerfreigaben auch Unterordner und später hinzugefügte Dateien. Sie können die Zugriffsrechte des übergeordneten Ordners übernehmen. Informiere Mitwirkende, wo bearbeitet werden soll, damit nicht gleichzeitig lokale E-Mail-Anhänge und die geteilte Fassung auseinanderlaufen. Kopiere einen bestehenden Link nur, wenn dessen Einstellungen noch zum aktuellen Zweck passen."
        ]
      },
      {
        "heading": "4. Zugänge wieder schließen und Kopien einplanen",
        "paragraphs": [
          "Nach Abschluss kontrollierst du die Freigabeübersicht beziehungsweise die Funktion zum Verwalten des Zugriffs. Entferne nicht mehr benötigte Personen oder Links und prüfe, ob weitere direkte oder übergeordnete Berechtigungen bestehen. Eine regelmäßige kurze Durchsicht hilft besonders bei wiederkehrenden Projekten oder wechselnden Helfern.",
          "Das Entziehen eines Zugangs holt bereits heruntergeladene Dateien nicht zurück. Auch eine Downloadsperre ist keine Garantie gegen Bildschirmfotos oder eine inhaltliche Weitergabe. Teile deshalb nur das, was die andere Person wirklich braucht. Wenn versehentlich die falschen Inhalte freigegeben wurden, beende den Zugang zügig und kläre anhand der tatsächlichen Daten und Empfänger die nächsten Schritte."
        ]
      }
    ],
    "pitfall": "Ein Kennwort oder ein privates Browserfenster ersetzt keine Prüfung der Berechtigungen. Besonders leicht übersehen werden ältere Links und Rechte des übergeordneten Ordners, die neben der neuen Freigabe weiterbestehen.",
    "whenToGetHelp": "Lass die Freigabe prüfen, wenn mehrere Personen unterschiedliche Rechte brauchen, Arbeits- und Privatkonten vermischt sind oder der falsche Empfänger Zugriff erhalten hat. Bei Geschäftsdaten gehört die verantwortliche Stelle frühzeitig dazu.",
    "relatedSlugs": [
      "onedrive-synchronisiert-nicht",
      "pdf-dateien-verkleinern",
      "zwei-faktor-anmeldung"
    ],
    "servicePath": "/leistungen/office-installation/",
    "sources": [
      {
        "title": "Microsoft: Dateien und Ordner in OneDrive freigeben",
        "url": "https://support.microsoft.com/en-us/onedrive/share-files-and-folders-in-microsoft-onedrive"
      },
      {
        "title": "Microsoft: Externe Freigaben und Gastzugriff",
        "url": "https://support.microsoft.com/en-us/sharepoint/lists/sharepoint-sharing-and-permissions/external-or-guest-sharing-in-onedrive-sharepoint-and-lists"
      },
      {
        "title": "Microsoft: Freigegebene Dateien und Zugriffe anzeigen",
        "url": "https://support.microsoft.com/en-us/onedrive/see-files-you-shared-in-onedrive"
      }
    ]
  },
  {
    "slug": "nas-zu-hause",
    "title": "NAS zu Hause: gemeinsame Dateien mit klaren Zugängen",
    "description": "Ein Netzwerkspeicher für Fotos und Dokumente: Bedarf, Benutzerrechte, Updates und eine unabhängige Sicherung vor der Einrichtung sinnvoll planen.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-nas-zu-hause",
    "imageAlt": "Kompakter Netzwerkspeicher mit zwei Laufwerksschächten neben einer Festplatte auf einer Schutzunterlage",
    "updated": "2026-11-11",
    "intro": "Ein NAS ist ein kleiner Computer, der Dateien im Netzwerk bereitstellt. Das kann praktisch sein, wenn mehrere Geräte auf dieselbe Fotosammlung oder gemeinsame Unterlagen zugreifen sollen. Mit dem Aufstellen ist es allerdings nicht erledigt: Speicherplanung, Benutzerrechte, Updates und eine zusätzliche Sicherung gehören zum Betrieb dazu. Prüfe zuerst, welche Aufgabe der Netzwerkspeicher bei dir übernehmen soll.",
    "takeaways": [
      "Plane gemeinsame Ablage, persönliche Bereiche und Sicherungen als unterschiedliche Aufgaben.",
      "Mehrere Festplatten oder RAID ersetzen kein unabhängiges Backup.",
      "Richte getrennte Benutzerkonten ein und lasse Internetzugriff zunächst ausgeschaltet."
    ],
    "sections": [
      {
        "heading": "1. Den konkreten Bedarf vor der Einrichtung festhalten",
        "paragraphs": [
          "Schreibe auf, welche Geräte zugreifen, welche Daten gemeinsam genutzt werden und wie stark der Bestand wächst. Ein Fotoarchiv, eine Familienablage und laufende Arbeitsprojekte stellen unterschiedliche Anforderungen. Entscheide auch, wer sich regelmäßig um das Gerät kümmert. Wenn niemand Updates oder Warnmeldungen prüft, wird aus der bequemen Ablage schnell eine zusätzliche Problemstelle.",
          "Plane einen geeigneten Platz mit Luft um die Lüftungsöffnungen, Strom und möglichst einer Kabelverbindung zum Router oder Switch. Prüfe vor dem Kauf beziehungsweise Einbau die Herstellerfreigaben für Laufwerke und gewünschte Funktionen. Nutzbarer Speicher hängt unter anderem von Laufwerksanzahl und gewählter Redundanz ab; die Summe der aufgedruckten Kapazitäten ist nicht automatisch der verfügbare Platz."
        ]
      },
      {
        "heading": "2. Persönliche Konten und überschaubare Ordner anlegen",
        "paragraphs": [
          "Lege für jede Person ein eigenes Benutzerkonto an. Die tägliche Dateiarbeit benötigt keine Administrationsrechte. Ein separates Verwaltungskonto macht später nachvollziehbarer, welche Anmeldung für Wartung gedacht ist. Verwende eindeutige Kennwörter und, soweit unterstützt, einen zusätzlichen Anmeldeschutz für die Verwaltung. Bewahre Wiederherstellungswege getrennt vom NAS auf.",
          "Beginne mit wenigen Freigaben, beispielsweise einem gemeinsamen Familienordner und persönlichen Bereichen. Gib Schreibrechte nur dort, wo sie gebraucht werden. Prüfe mit einem gewöhnlichen Benutzerkonto, ob fremde persönliche Ordner tatsächlich unzugänglich sind. Ein ausgeblendeter Ordnername allein ist keine Zugriffssperre. Gruppenrechte und geerbte Berechtigungen müssen zur gewünschten Trennung passen."
        ]
      },
      {
        "heading": "3. Den NAS-Ausfall in die Sicherung einplanen",
        "paragraphs": [
          "RAID kann je nach Ausführung den Ausfall einzelner Laufwerke abfangen. Es hilft aber nicht automatisch gegen versehentliches Löschen, Schadsoftware, Diebstahl oder den Ausfall des ganzen Geräts. Liegen die einzigen Familienfotos auf dem NAS, bleibt dieses eine wichtige gemeinsame Fehlerquelle. Auch ein Snapshot auf denselben Laufwerken ist keine räumlich getrennte Sicherung.",
          "Richte deshalb eine zusätzliche Sicherung auf einem unabhängigen Ziel ein und berücksichtige einen getrennten Aufbewahrungsort. Prüfe, welche Ordner, Anwendungseinstellungen und gegebenenfalls Datenbanken dein Verfahren tatsächlich umfasst. Manche Sicherungen benötigen spezielle Wiederherstellungssoftware oder einen Schlüssel. Teste eine kleine Rücksicherung, bevor du die bisherige Ablage als erledigt betrachtest oder Originaldateien entfernst."
        ]
      },
      {
        "heading": "4. Wartung und Zugriff von unterwegs bewusst begrenzen",
        "paragraphs": [
          "Installiere unterstützte System- und Paketupdates, kontrolliere Laufwerkszustand sowie Sicherungsprotokolle und aktiviere verständliche Benachrichtigungen. Weise diese Meldungen einer Person zu. Ein NAS, das monatelang unbemerkt mit fehlgeschlagenem Backup läuft, erfüllt den geplanten Schutz nicht. Änderungen an Speicherpools oder der Laufwerksanordnung benötigen eine vorher geprüfte Sicherung.",
          "Starte mit Zugriff nur im eigenen Heimnetz. Öffne keine Routerports auf Verdacht, nur weil eine App von unterwegs nicht verbindet. Für Fernzugriff braucht es ein bewusst gewähltes, gepflegtes Verfahren samt Zugriffsschutz. Teste zunächst den lokalen Betrieb mit zwei Geräten und getrennten Konten; erweitere erst danach die Funktionen, für die tatsächlich ein Bedarf besteht."
        ]
      }
    ],
    "pitfall": "Zwei gespiegelte Laufwerke sind keine zwei unabhängigen Backups. Ebenso wenig ist eine erfolgreiche Anmeldung als Administrator ein sinnvoller Test dafür, was ein gewöhnlicher Benutzer sehen oder verändern darf.",
    "whenToGetHelp": "Hol Unterstützung, wenn Berechtigungen unübersichtlich werden, Laufwerkswarnungen auftreten oder du Fernzugriff und Sicherung nicht sicher einordnen kannst. Bei einem beschädigten Speicherpool keine Laufwerke initialisieren, neu formatieren oder auf Verdacht austauschen.",
    "relatedSlugs": [
      "backup-3-2-1",
      "backup-wiederherstellung-testen",
      "lan-oder-wlan"
    ],
    "servicePath": "/leistungen/netzwerk-wlan/",
    "sources": [
      {
        "title": "Synology: Sicherheit eines NAS verbessern",
        "url": "https://kb.synology.com/en-us/DSM/tutorial/How_to_add_extra_security_to_your_Synology_NAS"
      },
      {
        "title": "Synology: NAS-Daten unabhängig sichern",
        "url": "https://kb.synology.com/en-ca/DSM/tutorial/How_to_back_up_your_Synology_NAS"
      },
      {
        "title": "Synology: Ordnerberechtigungen verwalten und prüfen",
        "url": "https://kb.synology.com/en-eu/DSM/tutorial/How_to_manage_ACL_settings_on_your_Synology_NAS"
      }
    ]
  },
  {
    "slug": "backup-wiederherstellung-testen",
    "title": "Backup testen: eine Wiederherstellung wirklich durchspielen",
    "description": "Mit einer kleinen Rücksicherungsprobe prüfst du Dateien, ältere Versionen, Schlüssel und Dauer – ohne aktuelle Daten zu überschreiben.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-backup-wiederherstellung-testen",
    "imageAlt": "Hände an einem Laptop mit angeschlossenem USB-Laufwerk und drei Landschaftsfotos auf dem Tisch",
    "updated": "2026-11-11",
    "intro": "Eine grüne Erfolgsmeldung sagt zunächst, dass ein Sicherungslauf ohne gemeldeten Fehler beendet wurde. Ob du eine wichtige Datei im passenden Zustand zurückbekommst, zeigt erst die Wiederherstellung. Eine kleine geplante Probe prüft den gesamten Weg: vom Auffinden des Backups über Zugang und Entschlüsselung bis zum Öffnen der zurückgeholten Datei.",
    "takeaways": [
      "Wähle typische Dateien und mindestens einen älteren Sicherungsstand für die Probe.",
      "Stelle in einen getrennten Testordner wieder her und erhalte die aktuellen Originale.",
      "Prüfe den Inhalt, benötigte Schlüssel und den Zeitaufwand; dokumentiere offene Lücken."
    ],
    "sections": [
      {
        "heading": "1. Einen kleinen, aussagekräftigen Testfall auswählen",
        "paragraphs": [
          "Nimm eine gut bekannte Auswahl: ein Dokument mit mehreren Seiten, ein Foto, eine Tabelle und gegebenenfalls eine Datei aus einem wichtigen Programm. Verwende keine riesige Datenmenge, wenn du das Verfahren erstmals prüfst. Entscheidend ist zunächst, ob unterschiedliche Dateitypen und Speicherorte überhaupt in der Sicherung vorkommen.",
          "Notiere, von wann die erwartete Fassung stammt. Wenn dein Backup Versionen aufbewahrt, suche bewusst auch einen älteren Stand. So prüfst du mehr als die letzte Kopie. Lege für künftige Tests eine harmlose Beispieldatei mit klar erkennbaren Änderungen an. Du musst keine echten Arbeitsdateien löschen, um die Wiederherstellung zu üben."
        ]
      },
      {
        "heading": "2. Ein getrenntes Ziel festlegen und Zugänge bereithalten",
        "paragraphs": [
          "Erstelle einen neuen Testordner außerhalb der produktiven Ablage und achte auf genügend freien Speicher. Wähle im Sicherungsprogramm ausdrücklich diesen Zielort. Beim Windows-Dateiversionsverlauf lässt sich beispielsweise an einen anderen Ort wiederherstellen. Eine Rücksicherung an den ursprünglichen Pfad kann aktuelle Dateien überschreiben; lies die Zusammenfassung, bevor du den Vorgang bestätigst.",
          "Bei verschlüsselten Sicherungen benötigst du das richtige Kennwort oder den Wiederherstellungsschlüssel. Prüfe, ob du auch nach einem Rechnerausfall darauf zugreifen könntest. Manches Backup liegt als spezielles Archiv vor, das mit der vorgesehenen Software geöffnet werden muss. Bearbeite dessen interne Dateien nicht direkt und formatiere einen vermeintlich unlesbaren Sicherungsdatenträger keinesfalls als Erstversuch."
        ]
      },
      {
        "heading": "3. Die zurückgeholten Inhalte tatsächlich öffnen",
        "paragraphs": [
          "Öffne die wiederhergestellten Dateien im passenden Programm. Prüfe bei Dokumenten mehrere Seiten, bei Tabellen auch weitere Blätter und bei Fotos die volle Ansicht statt nur des Vorschaubilds. Vergleiche erkennbare Inhalte mit dem erwarteten Stand. Eine passende Dateigröße oder ein vorhandener Dateiname allein beweist noch keine brauchbare Rücksicherung.",
          "Bei Anwendungen mit eigener Datenbank reicht eine einzelne kopierte Datei möglicherweise nicht. Nutze deren vorgesehene Wiederherstellung in einer getrennten Testumgebung oder mit fachlicher Unterstützung. Eine integrierte Integritätsprüfung ergänzt die Probe, ersetzt aber nicht die Frage, ob du mit den Daten arbeiten kannst. Bei Hyper Backup kann eine zeitlich begrenzte Datenprüfung zudem nur einen Teil des Bestands im jeweiligen Lauf erfassen."
        ]
      },
      {
        "heading": "4. Ergebnis und Wiederholung konkret festhalten",
        "paragraphs": [
          "Notiere Datum, Sicherungsstand, getestete Dateien, Zielort, benötigte Software und tatsächliche Dauer. Halte auch fest, welche Inhalte nicht geprüft wurden. Ein erfolgreich geöffnetes Foto beweist nicht, dass ein kompletter Rechnerstart oder jede Anwendung wiederherstellbar wäre. So bleibt der Umfang des Ergebnisses ehrlich und nachvollziehbar.",
          "Wiederhole die Probe nach Änderungen am Sicherungsziel, am Programm oder an wichtigen Datenordnern und zusätzlich in einem passenden regelmäßigen Rhythmus. Bei Fehlern erhältst du vorhandene Sicherungen und suchst zuerst die Ursache. Ein neuer erfolgreicher Lauf löst fehlende ältere Versionen nicht automatisch. Entferne den Testordner erst, wenn du eindeutig zwischen Testkopien, Originalen und Backup unterscheiden kannst."
        ]
      }
    ],
    "pitfall": "Zum Testen direkt über aktuelle Arbeitsdateien zurückzusichern kann neuere Änderungen vernichten. Auch das Löschen echter Originale als künstlicher Notfall ist unnötig: Ein separater Zielordner liefert den Nachweis ohne dieses Risiko.",
    "whenToGetHelp": "Lass die Wiederherstellung begleiten, wenn Archive Fehler melden, Schlüssel fehlen oder wichtige Anwendungen nur gemeinsam mit Datenbanken funktionieren. Bei Anzeichen eines defekten Datenträgers weitere Schreibzugriffe vermeiden und die einzige vorhandene Sicherung erhalten.",
    "relatedSlugs": [
      "backup-3-2-1",
      "externe-festplatte-sichern",
      "nas-zu-hause"
    ],
    "servicePath": "/leistungen/pc-laptop/",
    "sources": [
      {
        "title": "Microsoft: Dateien mit dem Dateiversionsverlauf wiederherstellen",
        "url": "https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history"
      },
      {
        "title": "Synology: Integritätsprüfung von Hyper-Backup-Aufgaben",
        "url": "https://kb.synology.com/en-in/DSM/tutorial/What_is_backup_integrity_check_for_Hyper_Backup_tasks"
      },
      {
        "title": "Synology: Vorhandene Sicherungsdaten wiederherstellen",
        "url": "https://kb.synology.com/en-us/DSM/tutorial/How_to_restore_settings_apps_files_permissions_by_Hyper_Backup"
      }
    ]
  },
  {
    "slug": "dateien-ordnen-wiederfinden",
    "title": "Dateien ordnen und wiederfinden: eine Ablage, die im Alltag hilft",
    "description": "Wenige klare Ordner, verständliche Dateinamen und gezielte Windows-Suche: So bringst du Ordnung hinein, ohne riskante Massenlöschungen.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-dateien-ordnen-wiederfinden",
    "imageAlt": "Vier geordnete Dokumentenmappen mit einer Lupe und einer Laptop-Ecke auf einem hellen Tisch",
    "updated": "2026-11-11",
    "intro": "Eine gute Ablage beantwortet zwei Fragen schnell: Wo speichere ich etwas ab, und wie finde ich es später wieder? Dafür brauchst du weder dutzende Unterordner noch ein Spezialprogramm. Eine überschaubare Struktur, verständliche Namen und eine richtig eingegrenzte Suche helfen oft mehr als ein großer Aufräumtag, bei dem am Ende wichtige Dateien fehlen.",
    "takeaways": [
      "Beginne mit wenigen Hauptordnern und einem festen Eingang für neue Dateien.",
      "Nutze aussagekräftige Namen und lass Dateiendungen unverändert.",
      "Prüfe Suchort und Inhalt, bevor du fehlende Treffer als Datenverlust einordnest."
    ],
    "sections": [
      {
        "heading": "1. Mit einer kleinen, verständlichen Struktur anfangen",
        "paragraphs": [
          "Sammle zuerst die Orte, an denen deine Dateien tatsächlich liegen: Dokumente, Downloads, Desktop, Cloud-Ordner und externe Laufwerke. Entscheide, welcher Ort die verbindliche Ablage sein soll. Verschiebe nicht sofort alles. Erstelle bei wichtigen Beständen zunächst eine geprüfte Sicherung und beginne mit einem kleinen, gut bekannten Teilbereich.",
          "Wähle wenige Hauptordner nach deinem Alltag, etwa Wohnen, Verträge, Projekte und Fotos. Unterteile nur dort weiter, wo die Menge es erfordert. Ein Eingang für neue Scans und Downloads kann helfen, wenn du ihn regelmäßig durcharbeitest. Ein Ordner mit dem Namen Sonstiges wird dagegen schnell zur zweiten unsortierten Ablage, wenn keine klare Regel dahintersteht."
        ]
      },
      {
        "heading": "2. Dateinamen so wählen, dass sie etwas verraten",
        "paragraphs": [
          "Kombiniere Datum, Thema und bei Bedarf einen klaren Status. Beispielsweise lässt sich 2026-11-11_Stromvertrag.pdf besser einordnen als scan0042.pdf. Ein einheitliches Datumsmuster sortiert chronologisch. Verwende nur die Bestandteile, die dir später helfen; sehr lange Namen und tiefe Ordnerketten machen die Arbeit nicht automatisch übersichtlicher.",
          "Blende in Windows Dateinamenerweiterungen ein, damit du PDF, Word-Dokument und ausführbares Programm unterscheiden kannst. Ändere beim Umbenennen den verständlichen Namen vor der Endung. Aus einer DOCX-Datei wird durch die Endung PDF kein PDF. Bei mehreren Bearbeitungsständen sind eindeutige Versionen oder die Versionsverwaltung des verwendeten Dienstes hilfreicher als zahlreiche Dateien mit immer mehr final im Namen."
        ]
      },
      {
        "heading": "3. Erst am richtigen Ort suchen, dann breiter werden",
        "paragraphs": [
          "Öffne den wahrscheinlichen Ordner im Explorer und suche nach einem markanten Teil des Namens. Prüfe anschließend bei Bedarf das übergeordnete Verzeichnis oder das passende Laufwerk. Sortiere Treffer nach Änderungsdatum oder Dateityp und kontrolliere ihren tatsächlichen Pfad. Eine gleichnamige Datei im Downloadordner kann älter sein als die Fassung in deiner Projektablage.",
          "Die Windows-Suche kann Namen, Eigenschaften und je nach Dateityp auch Inhalte berücksichtigen. Ihr Index umfasst aber nicht automatisch jeden gewünschten Speicherort. Reine Bildscans enthalten ohne Texterkennung keinen durchsuchbaren Text. Prüfe die Indexierungseinstellungen, wenn bekannte lokale Dateien dauerhaft fehlen, und lass Änderungen vollständig verarbeiten. Ein Cloud- oder Netzwerkspeicher kann zusätzlich seine eigene Suche benötigen."
        ]
      },
      {
        "heading": "4. Ordnung schrittweise pflegen statt blind bereinigen",
        "paragraphs": [
          "Reserviere einen kurzen festen Termin, um den Eingang zu leeren und abgeschlossene Projekte einzuordnen. Öffne fragliche Dateien, bevor du vermeintliche Dubletten entfernst. Gleiche Namen, Dateigrößen oder Vorschaubilder beweisen noch keine vollständige Gleichheit. Bei Unsicherheit ist ein klar benannter Prüfbereich besser als sofortiges Löschen.",
          "Verschiebe keine Programm-, System- oder unbekannten Anwendungsordner, um die Oberfläche schöner zu machen. Auch eine Cloud-Ablage kann durch Umbenennen oder Verschieben Freigaben und Zusammenarbeit beeinflussen. Nach einer größeren Änderung prüfst du, ob wichtige Dateien noch auffindbar sind und der neue Speicherort von deinem Backup erfasst wird. Ordnung ist nur hilfreich, wenn Zugriff und Sicherung erhalten bleiben."
        ]
      }
    ],
    "pitfall": "Ein automatisches Dublettenprogramm kann ähnliche oder unterschiedliche Bearbeitungsstände zur Löschung vorschlagen. Lass solche Werkzeuge nicht ungeprüft über die einzige Kopie laufen und räume Systemordner nicht nach ihrem Namen auf.",
    "whenToGetHelp": "Hol Unterstützung, wenn Dokumente zwischen Privatkonto, Arbeitskonto und mehreren Laufwerken verstreut sind oder die Suche bekannte Dateien dauerhaft übersieht. Bei tatsächlichem Datenverlust zunächst weitere Schreibzugriffe vermeiden, statt großflächig aufzuräumen.",
    "relatedSlugs": [
      "onedrive-synchronisiert-nicht",
      "dokumente-scannen",
      "backup-wiederherstellung-testen"
    ],
    "servicePath": "/leistungen/windows-einrichten/",
    "sources": [
      {
        "title": "Microsoft: Dateien und Apps in Windows finden",
        "url": "https://support.microsoft.com/en-gb/windows/experience/storage-filemanagement/find-your-files-and-apps-in-windows"
      },
      {
        "title": "Microsoft: Suchindexierung in Windows",
        "url": "https://support.microsoft.com/en-us/windows/experience/performance-optimization/search-indexing-in-windows"
      },
      {
        "title": "Microsoft: Dateinamenerweiterungen verstehen und anzeigen",
        "url": "https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows"
      }
    ]
  },
  {
    "slug": "pdf-dateien-verkleinern",
    "title": "PDF-Dateien verkleinern, ohne wichtige Details zu verlieren",
    "description": "Zu große PDFs für E-Mail oder Upload sinnvoll verkleinern: Original behalten, geeigneten Export wählen und Lesbarkeit sowie Funktionen prüfen.",
    "category": "daten",
    "readMinutes": 5,
    "image": "guide-pdf-dateien-verkleinern",
    "imageAlt": "Dicker Papierstapel und ein schmales geheftetes Papierbündel neben einem geschlossenen Laptop",
    "updated": "2026-11-11",
    "intro": "Ein Portal lehnt die Datei ab oder ein E-Mail-Anhang ist zu groß: Jetzt zählt ein brauchbares Ergebnis unter der tatsächlichen Größenbegrenzung. Möglichst starke Kompression ist dafür nicht immer die richtige Wahl. Die kleinere PDF muss vollständig lesbar bleiben, zum vorgesehenen Zweck passen und sensible Inhalte dürfen nicht unbedacht bei einem fremden Onlinedienst landen.",
    "takeaways": [
      "Behalte die Originaldatei und speichere die verkleinerte Fassung unter einem neuen Namen.",
      "Wähle Kompression nach Zielgröße und Lesbarkeit, nicht nach der größten Prozentzahl.",
      "Prüfe alle Seiten sowie Formulare, Links und gegebenenfalls vorhandene Signaturen."
    ],
    "sections": [
      {
        "heading": "1. Zielgröße und Art der PDF bestimmen",
        "paragraphs": [
          "Prüfe die konkrete Grenze des Empfängers: Gilt sie pro Datei, für die gesamte Nachricht oder für einen Upload? Notiere die aktuelle Größe und öffne die PDF. Viele große Fotos oder gescannte Seiten brauchen andere Einstellungen als ein hauptsächlich aus Text bestehendes Dokument. Eine bereits optimierte Datei lässt sich eventuell nur noch wenig verkleinern.",
          "Bewahre das Original unverändert auf. Bei einer aus Word oder einem anderen Programm erzeugten PDF ist ein erneuter Export aus der Quelldatei oft ein sinnvoller Ausgangspunkt. Bei einem Scan hilft zunächst die Frage, ob unnötige Leerseiten oder ein versehentlich viel zu großer Aufnahmebereich enthalten sind. Entferne jedoch keine fachlich benötigten Seiten, nur um eine Grenze zu erreichen."
        ]
      },
      {
        "heading": "2. Eine geeignete Funktion mit moderater Einstellung nutzen",
        "paragraphs": [
          "Verwende eine vertrauenswürdige PDF-Anwendung und deren vorgesehene Funktion zum Reduzieren der Dateigröße. Adobe beschreibt dafür in Acrobat einen Export als PDF mit reduzierter Größe. Welche Werkzeuge verfügbar sind, hängt von Anwendung, Ausgabe und Lizenz ab. Eine gleich aussehende Schaltfläche in einem Browser kann stattdessen einen Upload zu einem Onlinedienst starten.",
          "Beginne mit einer moderaten Einstellung und speichere eine neue Datei, etwa mit dem Zusatz kompakt. Vergleiche erst danach die Größe. Falls nötig, passe die Einstellung schrittweise an. Fotos und Bildscans reagieren auf stärkere Bildkompression häufig deutlicher als reiner Text. Wähle Kompatibilitätseinstellungen so, dass die vom Empfänger verwendete Software das Ergebnis öffnen kann."
        ]
      },
      {
        "heading": "3. Vertrauliche Dokumente und Signaturen gesondert behandeln",
        "paragraphs": [
          "Bei Ausweisen, Verträgen, Gesundheitsunterlagen oder Geschäftsdaten prüfst du vor einem Onlinewerkzeug, wohin die Datei übertragen und wie sie dort gespeichert wird. Adobe weist beispielsweise darauf hin, dass die webbasierte Kompression die neue Datei im Adobe-Cloudspeicher ablegt. Wenn eine externe Übertragung nicht vorgesehen ist, nutze eine geeignete lokale Verarbeitung.",
          "Digitale Signaturen sind ebenfalls ein Grund, das Original besonders sorgfältig zu erhalten. Signierte PDFs können Änderungen einschränken; versuche nicht, diese Beschränkung durch Umwege zu entfernen. Frage bei einer zu großen signierten Datei nach einem geeigneten Übertragungsweg oder einer passenden Ausgangsfassung. Eine sichtbare Unterschrift auf einer neu erzeugten Kopie ist nicht automatisch eine weiterhin gültige digitale Signatur."
        ]
      },
      {
        "heading": "4. Das Ergebnis Seite für Seite kontrollieren",
        "paragraphs": [
          "Öffne die gespeicherte kleinere Datei erneut und vergleiche Seitenzahl sowie Reihenfolge. Kontrolliere kleine Schrift, Zahlen, Tabellen, feine Linien und gegebenenfalls Barcodes in ausreichender Vergrößerung. Wenn das Dokument gedruckt werden soll, prüfe eine typische Seite als Ausdruck. Eine gute Bildschirmvorschau allein kann schwache Details im Druck übersehen.",
          "Teste vorhandene Links, durchsuchbaren Text und ausfüllbare Felder, sofern du diese Funktionen brauchst. Speichere keine Bilder jeder Seite als Ersatz, wenn damit erforderliche Funktionen verloren gehen. Bleibt die Datei trotz sinnvoller Einstellungen zu groß, kläre mit dem Empfänger eine erlaubte Alternative wie mehrere Teildateien oder einen geschützten Freigabelink. Bewahre die gute Ausgangsqualität für spätere Zwecke auf."
        ]
      }
    ],
    "pitfall": "Wiederholtes Verkleinern derselben bereits stark komprimierten Kopie kann die Qualität weiter verschlechtern. Starte neue Versuche vom Original und lade vertrauliche Dokumente nicht allein deshalb hoch, weil ein Werkzeug kostenlos erscheint.",
    "whenToGetHelp": "Lass dir helfen, wenn kleine Zahlen unlesbar werden, Formularfunktionen verschwinden, digitale Signaturen betroffen sind oder das Portal trotz passender Größe ablehnt. Halte die genaue Uploadmeldung bereit, ohne vertrauliche Inhalte ungeschützt weiterzugeben.",
    "relatedSlugs": [
      "dokumente-scannen",
      "dateien-sicher-teilen",
      "dateien-ordnen-wiederfinden"
    ],
    "servicePath": "/leistungen/programme/",
    "sources": [
      {
        "title": "Adobe: PDF-Dateigröße in Acrobat reduzieren",
        "url": "https://helpx.adobe.com/acrobat/desktop/create-documents/optimize-pdfs/reduce-file-size.html"
      },
      {
        "title": "Adobe: PDFs online komprimieren und speichern",
        "url": "https://helpx.adobe.com/acrobat/web/share-review-and-export/export-and-print/compress-pdfs.html"
      },
      {
        "title": "Adobe: Berechtigungen und Einschränkungen signierter PDFs",
        "url": "https://helpx.adobe.com/acrobat/desktop/e-sign-documents/learn-about-signatures/signed-pdf-limitations.html"
      }
    ]
  }
]

