import type { GuideArticle } from './types'

export const securityGuides: GuideArticle[] = [
  {
    slug: 'phishing-erkennen',
    title: 'Phishing erkennen: erst prüfen, dann klicken',
    description: 'Verdächtige E-Mails, SMS und QR-Codes ruhig prüfen: Welche Warnzeichen zählen und was du nach einem Klick oder einer Eingabe tun solltest.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'privacy-phone',
    imageAlt: 'Illustrative Fotoaufnahme einer Hand mit Smartphone an einem hellen Arbeitsplatz',
    updated: '2026-11-11',
    intro: 'Eine Nachricht behauptet, dein Konto werde gesperrt, ein Paket brauche eine Nachzahlung oder eine Rechnung sei überfällig. Das kann echt sein, ist aber ein typischer Anlass für Phishing. Du musst die Nachricht nicht allein an ihrer Gestaltung entlarven. Entscheidend ist, die Behauptung über einen unabhängigen Weg zu überprüfen.',
    takeaways: [
      'Öffne den Anbieter selbst über seine bekannte App oder ein gespeichertes Lesezeichen.',
      'Gute Sprache, ein Logo und eine verschlüsselte Verbindung beweisen keine Echtheit.',
      'Nach einer Dateneingabe zählt schnelles Handeln auf einem vertrauenswürdigen Gerät.',
    ],
    sections: [
      {
        heading: 'Die Nachricht unterbrechen, nicht den Alltag',
        paragraphs: [
          'Lass dich weder von einer kurzen Frist noch von einer überraschenden Erstattung antreiben. Frage zuerst: Habe ich dieses Paket bestellt, diese Anmeldung gestartet oder diese Rechnung erwartet? Betrüger kennen manchmal Namen, Bestellungen oder alte Passwörter. Solche Details reichen deshalb ebenfalls nicht als Beweis.',
          'Ein Beispiel: Eine angebliche Versand-SMS verlangt zwei Euro. Öffne die Händler- oder Paketdienst-App selbst und prüfe dort deine Sendung. Fehlt die Forderung dort, rufe bei Bedarf den bekannten Kontakt an. Verwende dafür keine Telefonnummer aus der verdächtigen Nachricht.',
        ],
      },
      {
        heading: 'Adresse und Handlung gemeinsam beurteilen',
        paragraphs: [
          'Prüfe die vollständige Absenderadresse und das tatsächliche Linkziel. Auf dem Computer lässt sich das Ziel häufig durch Darüberfahren anzeigen, am Smartphone durch vorsichtiges längeres Drücken. Wenn die Vorschau unklar bleibt, öffne den Link nicht. Auch ein QR-Code ist zunächst nur ein unbekannter Link.',
          'Besonders kritisch sind Aufforderungen, Passwörter, Einmalcodes oder Zahlungsdaten einzugeben, eine App zu installieren oder eine Anmeldung zu bestätigen. Ein Schloss in der Browserzeile bedeutet eine verschlüsselte Verbindung zu dieser Adresse. Es bestätigt nicht, dass der Betreiber der richtige ist.',
        ],
      },
      {
        heading: 'Wenn du schon reagiert hast',
        paragraphs: ['Unterscheide genau, was passiert ist. Ein bloßer Klick ist eine andere Situation als ein heruntergeladenes Programm oder ein eingegebenes Passwort. Notiere Zeitpunkt, betroffenen Dienst und deine Handlung; diese Angaben helfen bei der weiteren Prüfung.'],
        steps: [
          'Nur geöffnet: Schließe die Seite. Erteile keine Berechtigungen und öffne keine heruntergeladene Datei.',
          'Zugangsdaten eingegeben: Öffne den echten Dienst auf einem vertrauenswürdigen Gerät, ändere das betroffene Passwort und prüfe angemeldete Geräte sowie Wiederherstellungsdaten.',
          'Zahlungsdaten oder eine Zahlung freigegeben: Kontaktiere den Zahlungsanbieter oder die Bank über den offiziellen Kontakt.',
          'Software ausgeführt oder Fernzugriff erlaubt: Trenne die Verbindung und lass das betroffene Gerät prüfen, bevor du dort weitere sensible Anmeldungen machst.',
        ],
      },
      {
        heading: 'Melden und die anderen schützen',
        paragraphs: [
          'Nutze die Phishing-Meldefunktion deines E-Mail-Anbieters. Im Betrieb informierst du zusätzlich die zuständige Person, besonders wenn eine Rechnung, ein Kundenkonto oder ein gemeinsames Postfach betroffen ist. Leite die Nachricht nicht unkommentiert an alle weiter: Das verteilt den gefährlichen Link nur weiter.',
          'Bei Nachrichten aus dem Konto eines Bekannten erreichst du ihn über einen anderen Kanal. Sein Konto könnte übernommen worden sein. Bewahre bei einem entstandenen Schaden die ursprüngliche Nachricht und Zahlungsinformationen auf, ohne den Link erneut zu öffnen.',
        ],
      },
    ],
    pitfall: 'Ein vertrauter Anzeigename und fehlerfreies Deutsch sind keine Entwarnung. Auch echte E-Mail-Konten können missbraucht werden; prüfe deshalb die konkrete Forderung unabhängig vom Absender.',
    whenToGetHelp: 'Hole Unterstützung, wenn du Zugangsdaten eingegeben, Fernzugriff freigegeben oder unbekannte Software gestartet hast. Bei einer Zahlung ist der offizielle Bankkontakt besonders dringend.',
    relatedSlugs: ['konto-gehackt', 'falscher-support-anruf', 'zwei-faktor-anmeldung'],
    servicePath: '/leistungen/betrugsverdacht-phishing-hilfe/',
    sources: [
      { title: 'Google: Phishing-E-Mails vermeiden und melden', url: 'https://support.google.com/mail/answer/8253?hl=de' },
      { title: 'Microsoft: Schutz vor Online-Betrug und Angriffen', url: 'https://support.microsoft.com/de-de/support/protect-yourself-from-online-scams-and-attacks' },
      { title: 'Apple: Social Engineering erkennen', url: 'https://support.apple.com/de-de/102568' },
    ],
  },
  {
    slug: 'passwoerter-passkeys',
    title: 'Passwort oder Passkey: Was schützt deinen Zugang?',
    description: 'Passkeys verständlich erklärt: Unterschiede zum Passwort, sichere Einrichtung auf eigenen Geräten und ein Wiederherstellungsplan für den Geräteverlust.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'security-desk',
    imageAlt: 'Illustrative Fotoaufnahme eines Laptops mit einem Sicherheitsschlüssel auf dem Schreibtisch',
    updated: '2026-11-11',
    intro: 'Beim Anmelden bieten immer mehr Dienste einen Passkey an. Dabei bestätigst du den Zugang etwa mit der Geräte-PIN, dem Fingerabdruck oder der Gesichtserkennung. Das ist nicht einfach ein neues Wort für ein gespeichertes Passwort. Vor dem Umstieg lohnt sich vor allem eine Frage: Wie kommst du bei Verlust deines Geräts wieder an dein Konto?',
    takeaways: [
      'Ein Passkey ist an den vorgesehenen Dienst gebunden und widersteht klassischen Phishing-Seiten.',
      'Erstelle Passkeys nur auf eigenen, ausreichend geschützten Geräten.',
      'Prüfe Speicherort und Wiederherstellung, bevor du bisherige Zugangswege entfernst.',
    ],
    sections: [
      {
        heading: 'Was bei der Anmeldung anders läuft',
        paragraphs: [
          'Bei einem Passwort gibst du ein Geheimnis ein, das eine gefälschte Anmeldeseite abfangen kann. Ein Passkey verwendet stattdessen ein Schlüsselpaar. Der Dienst erhält den öffentlichen Teil; dein Gerät oder Passwortmanager verwaltet den privaten Teil und bestätigt die Anmeldung für den passenden Dienst.',
          'Die Geräte-PIN entsperrt diese Bestätigung lokal. Sie wird dadurch nicht zu einem neuen Internetpasswort. Bei unterstützten Geräten bleiben auch die für die Freigabe verwendeten biometrischen Daten auf dem Gerät. Ein Passkey schützt allerdings kein bereits entsperrtes Gerät davor, dass jemand es unerlaubt benutzt.',
        ],
      },
      {
        heading: 'Den Speicherort bewusst auswählen',
        paragraphs: [
          'Passkeys können je nach Angebot mit einem Konto synchronisiert oder an ein bestimmtes Gerät beziehungsweise einen Sicherheitsschlüssel gebunden sein. Prüfe beim Anlegen die angezeigte Auswahl. Ein Passkey auf deinem privaten Smartphone ist etwas anderes als einer auf einem gemeinsam genutzten Bürocomputer.',
          'Nutze eine sichere Displaysperre und halte das System aktuell. Wenn dein Passwortmanager Passkeys zwischen Geräten bereitstellt, gehört dessen Wiederherstellung zum Sicherheitskonzept. Schreibe dir den Anbieter und die eingerichteten Ersatzwege auf, ohne geheime Schlüssel oder Codes offen abzulegen.',
        ],
      },
      {
        heading: 'Mit einem wichtigen Konto beginnen',
        paragraphs: ['Du musst nicht alle Konten an einem Nachmittag umstellen. Ein kontrollierter Test verhindert, dass mehrere ungeklärte Anmeldewege gleichzeitig entstehen. Bei einem verwalteten Firmenkonto gelten zusätzlich die Vorgaben des Betriebs.'],
        steps: [
          'Öffne die echte Kontoverwaltung selbst und suche den Bereich für Sicherheit oder Anmeldeoptionen.',
          'Prüfe zuerst Wiederherstellungsadresse, Telefonnummer und verfügbare Ersatzmethoden.',
          'Lege den Passkey auf deinem eigenen Gerät an und beachte die Auswahl des Speicherorts.',
          'Teste eine neue Anmeldung, während eine bestehende Sitzung und ein alternativer Zugang noch verfügbar sind.',
          'Notiere, welche Geräte oder Sicherheitsschlüssel zum Konto gehören. Entferne veraltete Einträge erst nach erfolgreichem Test.',
        ],
      },
      {
        heading: 'Wo weiterhin Passwörter gebraucht werden',
        paragraphs: [
          'Nicht jeder Dienst unterstützt Passkeys. Verwende dort pro Konto ein eigenes, langes Passwort, am besten mit einem Passwortmanager erzeugt und gespeichert. Ein Passwort, das du bei mehreren Diensten verwendest, verbindet deren Risiken miteinander. Eine zusätzliche Ziffer am Ende löst dieses Problem nicht.',
          'Bei verlorenem Smartphone entfernst du den zugehörigen Zugang über einen verbleibenden sicheren Anmeldeweg. Falls keiner mehr vorhanden ist, nutze die offizielle Kontowiederherstellung. Ein externer Helfer kann diesen Eigentumsnachweis nicht seriös umgehen. Bewahre dein altes Gerät beim Gerätewechsel auf, bis der neue Zugang geprüft ist.',
        ],
      },
    ],
    pitfall: 'Lösche nicht sofort das Passwort, alle Ersatzcodes oder den letzten Sicherheitsschlüssel. Welche Verfahren einander ersetzen, hängt vom Anbieter ab; erst testen, dann aufräumen.',
    whenToGetHelp: 'Unterstützung ist sinnvoll, wenn mehrere Geräte, gemeinsam genutzte Konten oder ein Gerätewechsel beteiligt sind und unklar ist, wo die Passkeys gespeichert werden.',
    relatedSlugs: ['passwortmanager', 'zwei-faktor-anmeldung', 'konto-gehackt'],
    servicePath: '/leistungen/benutzerkonten/',
    sources: [
      { title: 'Google: Mit Passkeys anmelden', url: 'https://support.google.com/accounts/answer/13548313?hl=de' },
      { title: 'Apple: Sicherheit von Passkeys', url: 'https://support.apple.com/de-de/102195' },
      { title: 'Google: Starke Passwörter erstellen', url: 'https://support.google.com/accounts/answer/32040?hl=de' },
    ],
  },
  {
    slug: 'passwortmanager',
    title: 'Passwortmanager einrichten, ohne den Überblick zu verlieren',
    description: 'Ein sicherer Einstieg in den Passwortmanager: Tresor schützen, wichtige Konten umstellen, Zugangsdaten kontrollieren und Exporte sorgfältig behandeln.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'guide-passwortmanager',
    imageAlt: 'Laptop und Smartphone neben einem Schlüssel und einem geschlossenen blauen Notizbuch',
    updated: '2026-11-11',
    intro: 'Ein Passwortmanager nimmt dir die Aufgabe ab, viele unterschiedliche Kennwörter auswendig zu kennen. Er speichert die Zugänge geschützt und kann neue, zufällige Passwörter erzeugen. Damit das im Alltag wirklich hilft, müssen die Anmeldung am Manager, der Zugriff auf anderen Geräten und die Wiederherstellung zusammenpassen.',
    takeaways: [
      'Wähle einen Manager, der auf deinen tatsächlich genutzten Geräten funktioniert.',
      'Sichere den zentralen Zugang und plane den Fall eines verlorenen Geräts.',
      'Gespeicherte Passwörter sind erst dann besser, wenn wiederverwendete Kennwörter ersetzt werden.',
    ],
    sections: [
      {
        heading: 'Zuerst den passenden Alltag prüfen',
        paragraphs: [
          'Die erste Entscheidung ist organisatorisch: Nutzt du nur einen Browser oder wechselst du zwischen Windows, Smartphone und Tablet? Brauchst du eigene Einträge oder eine geregelte Freigabe in der Familie beziehungsweise im Betrieb? Ein integrierter Manager kann genügen; ein eigenständiger Dienst kann mehr Geräte und Freigaben abdecken.',
          'Prüfe in der offiziellen Dokumentation, wo die Daten gespeichert werden und wie sie auf ein neues Gerät gelangen. Lokal gespeicherte Passwörter sind nicht automatisch auf dem Handy vorhanden. Eine Synchronisierung funktioniert wiederum nur, solange du das zugehörige Konto kontrollierst. Wähle bewusst einen Hauptablageort, damit nicht mehrere unvollständige Sammlungen entstehen.',
        ],
      },
      {
        heading: 'Den zentralen Zugang absichern',
        paragraphs: [
          'Richte den Manager über die offizielle App oder Browserfunktion ein. Falls ein Masterpasswort erforderlich ist, muss es eigenständig und lang sein. Es darf nicht das bereits bei einem Shop verwendete Kennwort sein. Aktiviere eine angebotene zusätzliche Anmeldebestätigung und die automatische Sperre nach einer sinnvollen Zeit.',
          'Lies den Wiederherstellungsablauf, solange alles funktioniert. Manche Anbieter können einen verlorenen Hauptschlüssel nicht ersetzen. Bewahre einen vorgesehenen Wiederherstellungscode geschützt und getrennt vom einzigen angemeldeten Gerät auf. Ein Foto davon in einer ungeschützten Galerie oder ein offenes Dokument auf dem Desktop ist kein guter Notfallplan.',
        ],
      },
      {
        heading: 'Konten Schritt für Schritt umstellen',
        paragraphs: ['Beginne mit dem Hauptpostfach, danach folgen weitere wichtige Konten. Arbeite einzeln, damit klar bleibt, welches Kennwort tatsächlich beim Anbieter geändert wurde und welches nur im Tresor steht.'],
        steps: [
          'Öffne den Dienst über seine bekannte Adresse und melde dich mit dem bisherigen Zugang an.',
          'Erzeuge in der Passwortänderung ein neues, einmaliges Kennwort und speichere es im richtigen Eintrag.',
          'Schließe die Änderung beim Anbieter ab. Prüfe dabei Nutzername, E-Mail-Adresse und Website im Tresoreintrag.',
          'Teste die nächste Anmeldung. Erst danach entfernst du veraltete oder doppelte Einträge.',
          'Nutze vorhandene Warnungen zu mehrfach verwendeten oder veröffentlichten Passwörtern als nächste Arbeitsliste.',
        ],
      },
      {
        heading: 'Importe und Freigaben sorgfältig behandeln',
        paragraphs: [
          'Ein Import spart Zeit, kann aber auch alte Einträge und falsche Benutzernamen übernehmen. Kontrolliere die wichtigsten Konten anschließend einzeln. Passwortdateien für einen Export können unverschlüsselt sein. Lege sie nicht in einen gemeinsam genutzten Ordner, verschicke sie nicht per E-Mail und entferne die temporäre Datei nach einem überprüften Import.',
          'Wenn ein Zugang mit anderen geteilt werden muss, nutze dafür eine vorgesehene Freigabefunktion mit begrenztem Empfängerkreis. Persönliche Konten bleiben persönlich. Im Betrieb sind getrennte Nutzerkonten meist übersichtlicher als ein herumgereichtes Kennwort, weil Berechtigungen und spätere Entzüge einzeln nachvollziehbar bleiben.',
        ],
      },
    ],
    pitfall: 'Ein gespeicherter Eintrag ändert das Passwort beim Dienst nicht automatisch. Verifiziere immer eine echte Anmeldung, bevor du die bisherige Ablage löschst.',
    whenToGetHelp: 'Lass dich begleiten, wenn viele doppelte Einträge, gemeinsame Konten oder ein unklarer Wiederherstellungsweg bestehen. Deine geheimen Passwörter musst du dafür nicht offen weitergeben.',
    relatedSlugs: ['passwoerter-passkeys', 'zwei-faktor-anmeldung', 'konto-gehackt'],
    servicePath: '/leistungen/benutzerkonten/',
    sources: [
      { title: 'Google: Einstieg in den Passwortmanager', url: 'https://support.google.com/accounts/answer/6208650?hl=de' },
      { title: 'Google: Passwörter in Chrome verwalten', url: 'https://support.google.com/chrome/answer/95606?hl=de' },
      { title: 'Apple: Passwörter und Datenschutz', url: 'https://www.apple.com/de/legal/privacy/data/de/passwords/' },
    ],
  },
  {
    slug: 'zwei-faktor-anmeldung',
    title: 'Zwei-Faktor-Anmeldung sicher einrichten',
    description: 'So ergänzt du die Anmeldung um einen zweiten Schutz: passende Methode wählen, Ersatzwege sichern und einen Handywechsel ohne Aussperren vorbereiten.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'guide-zwei-faktor-anmeldung',
    imageAlt: 'Finger vor einem Smartphone auf einem Ständer, daneben ein Laptop',
    updated: '2026-11-11',
    intro: 'Ein gestohlenes Passwort soll nicht sofort den Zugang zu deinem Konto öffnen. Eine Zwei-Faktor-Anmeldung ergänzt es deshalb um eine weitere Bestätigung, etwa eine App oder einen Sicherheitsschlüssel. Die beste Einrichtung schützt dich nicht nur vor Fremdzugriff, sondern funktioniert auch dann noch, wenn dein Handy kaputtgeht.',
    takeaways: [
      'Beginne beim Hauptpostfach und anderen besonders wichtigen Konten.',
      'Bestätige nur Anmeldungen, die du selbst gerade gestartet hast.',
      'Lege Ersatzwege an, bevor du dein altes Smartphone zurücksetzt oder abgibst.',
    ],
    sections: [
      {
        heading: 'Die angebotenen Methoden unterscheiden',
        paragraphs: [
          'Viele Dienste bieten SMS-Codes, eine Authenticator-App, eine Freigabe auf einem angemeldeten Gerät oder einen Sicherheitsschlüssel an. Welche Auswahl erscheint, hängt vom Anbieter und manchmal von den Vorgaben eines Unternehmens ab. Eine zusätzliche Bestätigung ist grundsätzlich ein wichtiger Schutz bei einem verlorenen Passwort.',
          'Codes können jedoch auf gefälschten Seiten ebenfalls abgefragt werden. FIDO2-Sicherheitsschlüssel und geeignete Passkeys bieten einen stärkeren Schutz gegen solche Phishing-Anmeldungen. Nutze die unterstützte Methode, die du zuverlässig bedienen kannst, und plane einen Ersatz. Sicherheit verliert im Alltag, wenn du sie bei der ersten Schwierigkeit wieder abschaltest.',
        ],
      },
      {
        heading: 'Ruhig einrichten und direkt testen',
        paragraphs: ['Nimm dir dafür ein paar ungestörte Minuten. Öffne die Sicherheitsverwaltung über die echte Website oder App. Ein spontan zugeschickter Einrichtungslink ist kein geeigneter Ausgangspunkt. Bei verwalteten Konten beziehst du die zuständige Administration ein.'],
        steps: [
          'Kontrolliere, ob Wiederherstellungsadresse und Telefonnummer noch dir gehören und erreichbar sind.',
          'Aktiviere den zusätzlichen Anmeldeschritt und folge der Anleitung des Anbieters.',
          'Füge, wenn möglich, eine zweite unabhängige Methode hinzu, beispielsweise einen zusätzlichen Schlüssel.',
          'Speichere angebotene Ersatzcodes an einem geschützten Ort außerhalb des einzigen verwendeten Handys.',
          'Teste eine neue Anmeldung, ohne die noch funktionierende bestehende Sitzung vorschnell zu beenden.',
        ],
      },
      {
        heading: 'Ersatzcodes sind echte Schlüssel',
        paragraphs: [
          'Ein Ersatzcode kann den üblichen zweiten Schritt ersetzen. Behandle ihn deshalb wie ein Passwort. Bei Google ist ein verwendeter Backup-Code anschließend ungültig; ein neu erzeugter Satz ersetzt die bisherigen Codes. Andere Anbieter haben eigene Regeln, die du beim Speichern nachlesen solltest.',
          'Notiere, zu welchem Konto die Codes gehören, ohne sie offen neben dem Gerät liegen zu lassen. Prüfe auch, ob du im Notfall wirklich an die Ablage gelangst. Liegen alle Ersatzcodes im selben Konto, dessen Anmeldung gerade scheitert, hilft dir diese Sicherung wenig. Teile Codes nicht mit Anrufern oder vermeintlichen Supportmitarbeitern.',
        ],
      },
      {
        heading: 'Beim Handywechsel nichts überstürzen',
        paragraphs: [
          'Übertrage zunächst die vorgesehenen Anmeldemethoden oder registriere das neue Gerät. Teste wichtige Konten nacheinander. Eine Authenticator-App ist nicht automatisch vollständig übertragen, nur weil ihre App-Schaltfläche auf dem neuen Handy erscheint. Auch eine übernommene Telefonnummer ersetzt nicht zwangsläufig eine fehlende App-Registrierung.',
          'Bei unerwarteten Freigabeanfragen lehne ab und prüfe die Kontoaktivität über den offiziellen Weg. Bestätige nicht mehrfach genervt eine Anfrage, um die Meldungen loszuwerden. Hast du das Handy bereits verloren, verwende einen eingerichteten Ersatzweg oder die offizielle Kontowiederherstellung. Verfügbarkeit und Wartezeiten kann ein Helfer nicht garantieren.',
        ],
      },
    ],
    pitfall: 'Zwei Passwörter sind noch keine zwei unabhängigen Faktoren. Ebenso wenig schützt ein zweiter Code, wenn du ihn auf Anweisung einer unbekannten Person an diese weitergibst.',
    whenToGetHelp: 'Unterstützung lohnt sich vor einem Gerätewechsel oder wenn du nicht weißt, welche Konten an einer bestimmten Authenticator-App hängen. Bei Firmenkonten zuerst die zuständige Administration ansprechen.',
    relatedSlugs: ['passwoerter-passkeys', 'passwortmanager', 'konto-gehackt'],
    servicePath: '/leistungen/benutzerkonten/',
    sources: [
      { title: 'Google: Zwei-Faktor-Authentifizierung aktivieren', url: 'https://support.google.com/accounts/answer/185839?hl=de' },
      { title: 'Google: Backup-Codes verwenden', url: 'https://support.google.com/accounts/answer/1187538?hl=de' },
      { title: 'Google: Probleme mit der Zwei-Faktor-Anmeldung', url: 'https://support.google.com/accounts/answer/185834?hl=de' },
    ],
  },
  {
    slug: 'falscher-support-anruf',
    title: 'Falscher Support am Telefon: So beendest du den Zugriff',
    description: 'Ein angeblicher Techniker warnt vor Viren oder verlangt Fernzugriff? Erkenne die Masche und sichere Gerät und Konten, falls du bereits reagiert hast.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'support',
    imageAlt: 'Symbolbild eines Arbeitsplatzes für technischen Support',
    updated: '2026-11-11',
    intro: 'Der Anrufer klingt hilfsbereit, kennt deinen Namen und behauptet, dein Computer sende Fehlermeldungen. Oder eine Webseite spielt einen Alarm ab und zeigt eine Supportnummer. Das Ziel solcher Maschen ist häufig Fernzugriff, eine Zahlung oder der Zugriff auf deine Konten. Du darfst das Gespräch jederzeit beenden, auch wenn du schon mitgemacht hast.',
    takeaways: [
      'Eine ungefragte technische Warnung rechtfertigt keinen Fernzugriff.',
      'Rufe keine Telefonnummer aus einem alarmierenden Browserfenster an.',
      'Bei bereits erteiltem Zugriff zuerst die Verbindung beenden und wichtige Konten separat sichern.',
    ],
    sections: [
      {
        heading: 'Woran die Masche zu erkennen ist',
        paragraphs: [
          'Typische Merkmale sind Zeitdruck, eine angeblich sofort drohende Sperre und die Aufforderung, ein Fernwartungsprogramm zu installieren. Manche Täter zeigen harmlose Systemmeldungen und behaupten, diese bewiesen einen Einbruch. Ein Firmenlogo, eine professionell klingende Stimme oder eine angezeigte Rufnummer belegen ihre Identität nicht.',
          'Microsoft weist ausdrücklich darauf hin, keinen ungefragten technischen Support per Anruf anzubieten. Echte Microsoft-Fehlermeldungen enthalten auch keine Telefonnummer, die du zur Reparatur anrufen sollst. Wenn du selbst einen Termin vereinbart hast, vergleiche den Kontakt mit deiner eigenen Terminbestätigung und kläre Unstimmigkeiten über die dir bekannte Nummer.',
        ],
      },
      {
        heading: 'Wenn du noch nichts installiert hast',
        paragraphs: [
          'Lege auf. Du musst den Anrufer nicht überzeugen oder seine Fragen beantworten. Schließe bei einer Browserwarnung den betroffenen Tab beziehungsweise den Browser, statt auf die angebliche Reparaturschaltfläche zu klicken. Öffne die zuvor problematische Sitzung anschließend nicht automatisch wieder, wenn du sie vermeiden kannst.',
          'Eine laute Webseite ist für sich genommen noch kein Beweis, dass der gesamte Computer infiziert ist. Installiere nicht vorschnell ein zusätzlich angebotenes Schutzprogramm. Wenn du eine echte Warnung in der Sicherheits-App prüfen willst, öffne diese selbst über das Betriebssystem. Halte gegebenenfalls fest, welche Webseite oder Nachricht den Alarm ausgelöst hat.',
        ],
      },
      {
        heading: 'Wenn bereits jemand auf dem Gerät war',
        paragraphs: ['Beende den laufenden Zugriff. Falls das nicht zuverlässig gelingt, trenne das betroffene Gerät vom Internet. Verwende für weitere sensible Schritte ein anderes vertrauenswürdiges Gerät. Ein geschlossenes Fernwartungsfenster allein beweist noch nicht, dass keine dauerhafte Zugriffsmöglichkeit eingerichtet wurde.'],
        steps: [
          'Notiere Zeitpunkt, verwendete Fernwartungssoftware und bekannte Handlungen des Anrufers. Bewahre Nachrichten und Zahlungsbelege auf.',
          'Lass das Gerät auf zusätzliche Konten, Programme und dauerhafte Fernzugriffe prüfen. Vermeide bis dahin sensible Anmeldungen darauf.',
          'Sichere betroffene Konten über ihre offiziellen Anmelde- und Wiederherstellungswege. Prüfe aktive Sitzungen und unbekannte Anmeldemethoden.',
          'Kontaktiere bei einer Zahlung oder offengelegten Zahlungsdaten deine Bank beziehungsweise den Zahlungsanbieter direkt.',
        ],
      },
      {
        heading: 'Nach dem Gespräch nicht allein bleiben',
        paragraphs: [
          'Erzähle einer vertrauten Person, was passiert ist. Diese Maschen arbeiten gezielt mit Stress und überzeugender Gesprächsführung. Im Betrieb solltest du einen möglichen Zugriff früh melden, auch wenn du unsicher bist. So können andere Geräte und gemeinsame Zugänge rechtzeitig berücksichtigt werden.',
          'Rechne mit Folgeanrufen: Ein angeblicher Rückerstattungsdienst oder neuer Techniker kann zur gleichen Masche gehören. Seriöse Hilfe verspricht keine garantierte Rückholung von Geld und benötigt keine geheimen Einmalcodes am Telefon. Eine Anzeige oder Meldung dokumentiert den Vorfall, ersetzt aber nicht die technische Absicherung.',
        ],
      },
    ],
    pitfall: 'Ein bekanntes Fernwartungsprogramm macht einen unbekannten Anrufer nicht vertrauenswürdig. Dasselbe Werkzeug kann bei einem vereinbarten Termin legitim und bei einem unerwarteten Anruf gefährlich sein.',
    whenToGetHelp: 'Wenn bereits Fernzugriff bestand, ist eine fachliche Geräteprüfung sinnvoll. Bei Geldbewegungen oder geschäftlichen Zugängen solltest du die zuständigen Stellen sofort über bekannte Kontakte informieren.',
    relatedSlugs: ['konto-gehackt', 'phishing-erkennen', 'ransomware-vorbeugen'],
    servicePath: '/leistungen/betrugsverdacht-phishing-hilfe/',
    sources: [
      { title: 'Microsoft: Technischen Support-Betrug erkennen und melden', url: 'https://support.microsoft.com/de-de/security/avoid-and-report-microsoft-technical-support-scams' },
      { title: 'Apple: Gefälschte Supportanrufe und andere Betrugsversuche', url: 'https://support.apple.com/de-de/102568' },
      { title: 'Microsoft: Schutz vor Online-Betrug und Angriffen', url: 'https://support.microsoft.com/de-de/support/protect-yourself-from-online-scams-and-attacks' },
    ],
  },
  {
    slug: 'sicherheitsupdates',
    title: 'Sicherheitsupdates: Welche Geräte du im Blick haben solltest',
    description: 'Updates sicher organisieren: Betriebssystem, Browser, Apps und Router prüfen, Neustarts abschließen und Geräte ohne Unterstützung rechtzeitig erkennen.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'update-laptop',
    imageAlt: 'Illustrative Fotoaufnahme eines Laptops mit einer Updateanzeige auf dem Bildschirm',
    updated: '2026-11-11',
    intro: 'Ein Computer kann normal funktionieren und trotzdem bekannte Sicherheitslücken haben. Updates schließen solche Lücken, betreffen aber mehr als Windows allein. Auch Browser, Programme, Smartphone und Router brauchen Pflege. Ein kleiner fester Ablauf ist alltagstauglicher, als Warnungen über Wochen wegzuklicken oder jedes angebotene Reparaturtool auszuprobieren.',
    takeaways: [
      'Nutze die Updatefunktion des Systems oder die offizielle Herstellerquelle.',
      'Ein heruntergeladenes Update ist nach einem ausstehenden Neustart möglicherweise noch nicht vollständig aktiv.',
      'Prüfe auch, ob Hersteller dein Gerät und seine Systemversion noch unterstützen.',
    ],
    sections: [
      {
        heading: 'Eine kurze Geräteliste hilft',
        paragraphs: [
          'Notiere die Geräte, auf denen du wichtige Dinge erledigst: Arbeits-PC, privater Laptop, Smartphone und Router. Ergänze häufig genutzte Programme wie Browser, Office und PDF-Anzeige. Bei einem kleinen Betrieb sollte außerdem klar sein, wer die Pflege übernimmt. Ohne Zuständigkeit bleiben oft gerade selten genutzte Geräte lange liegen.',
          'Achte auf die Systemversion und den Unterstützungszeitraum. Der reguläre Support für Windows 10 endete am 14. Oktober 2025. Ob ein Gerät noch über ein gesondertes Programm Sicherheitsupdates erhält, muss konkret geprüft werden. Ein installiertes Virenschutzprogramm ersetzt keine fehlenden Sicherheitskorrekturen des Betriebssystems.',
        ],
      },
      {
        heading: 'Updates planbar installieren',
        paragraphs: ['Wähle einen Zeitpunkt, an dem ein Neustart möglich ist. Schließe wichtige Arbeiten ab und prüfe bei größeren Systemänderungen deine Datensicherung. Ein Laptop sollte ausreichend geladen oder am Netzteil sein. Auf verwalteten Arbeitsgeräten gelten die Regeln des Betriebs.'],
        steps: [
          'Öffne unter Windows die Einstellungen und Windows Update. Suche dort nach verfügbaren Aktualisierungen.',
          'Installiere angebotene reguläre Updates und führe einen angeforderten Neustart aus.',
          'Kontrolliere anschließend erneut den Status. Notiere wiederkehrende Fehlercodes, statt die Warnung dauerhaft auszublenden.',
          'Prüfe den Browser über dessen eingebauten Hilfe- oder Über-Bereich und starte ihn nach einem Update neu.',
          'Öffne die vorgesehenen Updatebereiche für Apps, Smartphone und Router. Verwende dafür keine Links aus ungefragten Nachrichten.',
        ],
      },
      {
        heading: 'Automatik nutzen und Ergebnisse kontrollieren',
        paragraphs: [
          'Automatische Updates nehmen dir viele Routineaufgaben ab. Trotzdem lohnt sich eine regelmäßige kurze Kontrolle: Ist ein Neustart offen? Scheitert dasselbe Update wiederholt? Gibt es zu wenig Speicherplatz? Ein dauerhaft gelbes Warnsymbol sollte nicht zum normalen Desktop gehören.',
          'Bei Browsern kann ein lange geöffnetes Fenster die vollständige Aktualisierung verzögern. Speichere offene Entwürfe, bevor du neu startest. Verlasse dich nicht darauf, dass jedes Formular nach dem Neustart wiederhergestellt wird. Ein ruhiger Wartungstermin ist besonders dann hilfreich, wenn du viele Tabs oder mehrere Arbeitsprogramme gleichzeitig nutzt.',
        ],
      },
      {
        heading: 'Fehler eingrenzen statt Schutz abschalten',
        paragraphs: [
          'Wenn ein Update scheitert, sammle zuerst Informationen: genaue Fehlermeldung, betroffene Version, freier Speicher und letzter erfolgreicher Neustart. Lade keine angeblichen Updatepakete aus einem Werbefenster und installiere keine pauschalen Treiber- oder Registry-Reparaturprogramme. Sie können zusätzliche Probleme verursachen und erklären die eigentliche Ursache nicht.',
          'Bei einem älteren Gerät geht es anschließend um eine tragfähige Entscheidung: unterstützt aktualisieren, ein geeignetes anderes System verwenden oder das Gerät ersetzen. Ein Umstieg braucht einen Plan für Programme, Daten und Zugänge. Vor einem wichtigen Termin oder mitten in einem Auftrag ist eine ungeprüfte große Systemumstellung selten sinnvoll.',
        ],
      },
    ],
    pitfall: 'Eine Meldung auf einer Webseite, die sofort eine Datei als Browser- oder Windows-Update anbietet, ist kein verlässlicher Updatekanal. Starte die Prüfung selbst im jeweiligen Programm.',
    whenToGetHelp: 'Lass wiederkehrende Updatefehler, ungeklärte Support-Enden oder eine geplante größere Systemumstellung prüfen. Halte Version und Fehlercode bereit; sensible Kontodaten gehören nicht in die Anfrage.',
    relatedSlugs: ['ransomware-vorbeugen', 'phishing-erkennen', 'passwoerter-passkeys'],
    servicePath: '/leistungen/windows-einrichten/',
    sources: [
      { title: 'Microsoft: Windows-Updates installieren', url: 'https://support.microsoft.com/de-de/windows/deployment/updates-lifecycle/install-windows-updates' },
      { title: 'Google: Chrome aktualisieren', url: 'https://support.google.com/chrome/answer/95414?hl=de' },
      { title: 'Microsoft: Probleme beim Aktualisieren von Windows', url: 'https://support.microsoft.com/de-de/windows/deployment/updates-lifecycle/troubleshoot-problems-updating-windows' },
    ],
  },
  {
    slug: 'ransomware-vorbeugen',
    title: 'Ransomware vorbeugen: Daten und Arbeitsfähigkeit schützen',
    description: 'Wie du Erpressung durch verschlüsselte Dateien vorbeugst: getrennte Backups, aktuelle Systeme, begrenzte Zugänge und ein klarer Plan für den Verdachtsfall.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'guide-ransomware-vorbeugen',
    imageAlt: 'Nicht angeschlossene externe SSD in einer Schutzhülle neben einem geschlossenen Laptop',
    updated: '2026-11-11',
    intro: 'Ransomware kann Dateien unbrauchbar machen und den Zugriff auf Computer oder gemeinsam genutzte Speicher blockieren. Bei manchen Angriffen werden zusätzlich Daten gestohlen. Eine einzelne Schutz-App löst dieses Risiko nicht vollständig. Entscheidend sind mehrere Maßnahmen, die zusammenpassen: Angriffe erschweren, Sicherungen trennen und eine Wiederherstellung vorbereiten.',
    takeaways: [
      'Mindestens eine Sicherung muss gegen den Zugriff des normalen Arbeitsgeräts geschützt sein.',
      'Aktuelle Systeme und sparsam vergebene Berechtigungen begrenzen vermeidbare Risiken.',
      'Bei akutem Verdacht keine Sicherungsplatte anschließen und keine hastige Wiederherstellung starten.',
    ],
    sections: [
      {
        heading: 'Wichtige Daten und Abläufe zuerst benennen',
        paragraphs: [
          'Überlege, was du bei einem Ausfall sofort brauchst: Familienfotos, Buchhaltungsdaten, Kundendokumente oder Projektdateien. Prüfe, wo diese Daten tatsächlich liegen. Der Desktop, ein Netzlaufwerk und eine Cloud-Synchronisierung sind unterschiedliche Ablageorte, die nicht automatisch von derselben Sicherung erfasst werden.',
          'Im kleinen Betrieb gehören auch benötigte Programme, Konfigurationen und der Zugriff auf zentrale Konten in die Planung. Eine Kopie der Dokumente allein stellt noch keinen arbeitsfähigen Arbeitsplatz wieder her. Halte fest, wer bei einem Ausfall entscheidet und wie diese Person auch ohne das Firmenpostfach erreichbar ist.',
        ],
      },
      {
        heading: 'Sicherungen trennen und ausprobieren',
        paragraphs: [
          'Eine dauerhaft angeschlossene Festplatte kann genauso erreichbar sein wie deine Originaldateien. Trenne eine dafür vorgesehene externe Sicherung nach Abschluss vom Arbeitsgerät. Bei Netzwerk- oder Cloud-Sicherungen sind getrennte Berechtigungen, Versionen und geeignete Schutzfunktionen entscheidend. Bloßes Synchronisieren kann auch beschädigte oder gelöschte Dateien weiterreichen.',
          'Teste regelmäßig die Wiederherstellung einiger unkritischer Dateien an einem anderen Ort. Kannst du sie öffnen, und ist der Stand aktuell genug? Plane außerdem eine räumlich getrennte Kopie gegen Diebstahl oder einen Schaden am Standort. Ein Backup schützt die Verfügbarkeit deiner Daten; einen möglichen vorherigen Datendiebstahl kann es nicht rückgängig machen.',
        ],
      },
      {
        heading: 'Den täglichen Zugang begrenzen',
        paragraphs: ['Halte Betriebssystem, Browser und wichtige Programme aktuell und lass den vorgesehenen Schutz aktiv. Unbekannte Anhänge, unerwartete Downloadaufforderungen und fragwürdige Installationspakete verdienen eine unabhängige Prüfung. Auch bekannte Absender können kompromittiert sein.'],
        bullets: [
          'Arbeite im Alltag mit den Rechten, die du tatsächlich brauchst. Verwende erhöhte Rechte nur für eine konkrete notwendige Änderung.',
          'Vergib für wichtige Konten eigene Passwörter und zusätzliche Anmeldebestätigungen.',
          'Entferne nicht mehr benötigte Freigaben und Zugänge. Gemeinsame Ordner sollten nicht für alle uneingeschränkt beschreibbar sein.',
          'Prüfe angebotene Schutzfunktionen wie kontrollierten Ordnerzugriff zunächst mit deinen Arbeitsprogrammen. Blockierte legitime Anwendungen brauchen eine gezielte Klärung.',
        ],
      },
      {
        heading: 'Bei einem Verdacht den Schaden eingrenzen',
        paragraphs: [
          'Wenn Dateien plötzlich ungewöhnliche Endungen haben, viele Dokumente nicht mehr öffnen oder eine Erpressungsnachricht erscheint, trenne das betroffene Gerät vom Netzwerk. Verbinde keine zusätzlichen Datenträger. Informiere im Betrieb sofort die verantwortliche Person und nutze für Absprachen einen nicht betroffenen Kommunikationsweg.',
          'Bewahre Meldungen und den zeitlichen Ablauf auf. Führe keine zufällig gefundenen Entschlüsselungs- oder Bereinigungsprogramme aus. Vor einer Wiederherstellung müssen Ursache, betroffene Systeme und geeignete Sicherungsstände geklärt sein. Eine Zahlung garantiert weder funktionierende Dateien noch die Löschung gestohlener Daten. Eine vorschnelle Neuinstallation kann außerdem wichtige Hinweise und Wiederherstellungsoptionen zerstören.',
        ],
      },
    ],
    pitfall: 'Die Aussage „Alles liegt in der Cloud“ ersetzt keine Prüfung von Versionen, Aufbewahrung und Berechtigungen. Lege eine unwichtige Testdatei an und prüfe nur mit dieser, ob Löschen und anschließendes Wiederherstellen funktionieren.',
    whenToGetHelp: 'Bei einem konkreten Verdacht sofort fachliche Unterstützung organisieren. Im Betrieb können neben Technik auch Kundenkommunikation und weitere Pflichten betroffen sein; das muss im Einzelfall geklärt werden.',
    relatedSlugs: ['sicherheitsupdates', 'phishing-erkennen', 'falscher-support-anruf'],
    servicePath: '/leistungen/betrugsverdacht-phishing-hilfe/',
    sources: [
      { title: 'Microsoft: Den PC vor Ransomware schützen', url: 'https://support.microsoft.com/de-de/windows/security/protect-your-pc-from-ransomware' },
      { title: 'BSI: Maßnahmenkatalog Ransomware', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Themen/Ransomware_Massnahmenkatalog.pdf?__blob=publicationFile&v=2' },
      { title: 'BSI: Ransomware – Bedrohungslage und Maßnahmen', url: 'https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Themen/Ransomware.pdf?__blob=publicationFile&v=5' },
    ],
  },
  {
    slug: 'konto-gehackt',
    title: 'Konto gehackt? Die Kontrolle Schritt für Schritt zurückholen',
    description: 'Unbekannte Anmeldungen oder veränderte Kontodaten: sichere Sofortmaßnahmen, Wiederherstellungswege und Kontrollen nach einem möglichen Kontodiebstahl.',
    category: 'sicherheit',
    readMinutes: 5,
    image: 'guide-konto-gehackt',
    imageAlt: 'Hand am Laptop neben einem Smartphone und einem verschlossenen weißen Umschlag',
    updated: '2026-11-11',
    intro: 'Eine fremde Anmeldung, Nachrichten aus deinem Postfach oder plötzlich geänderte Wiederherstellungsdaten sind ernst zu nehmen. Eine unerwartete Sicherheitsmail allein kann aber ebenfalls gefälscht sein. Prüfe deshalb über die echte Kontoverwaltung, was tatsächlich passiert ist. Sichere zuerst den Zugang, über den sich weitere Konten zurücksetzen lassen: meistens dein Hauptpostfach.',
    takeaways: [
      'Öffne die Kontoverwaltung selbst auf einem vertrauenswürdigen Gerät.',
      'Ein neues Passwort allein entfernt nicht zwingend alle fremden Zugriffswege.',
      'Wenn du ausgesperrt bist, nutze den offiziellen Wiederherstellungsprozess des Anbieters.',
    ],
    sections: [
      {
        heading: 'Den Verdacht unabhängig bestätigen',
        paragraphs: [
          'Melde dich über die bekannte App oder selbst eingegebene Website an. Prüfe aktuelle Sicherheitsereignisse, Geräte und Änderungen. Eine Ortsangabe kann wegen eines Mobilfunknetzes oder VPN abweichen; entscheidend ist, ob du Gerät, Zeitpunkt und Handlung zuordnen kannst. Beurteile mehrere Hinweise zusammen.',
          'Wenn du zusätzlich einen Schadsoftwareverdacht auf deinem Computer hast, verwende ihn nicht für neue Passwörter. Ein bekanntes, aktuelles Zweitgerät ist dafür besser geeignet. Dokumentiere auffällige Aktivitäten, bevor sie aus einer kurzen Verlaufsliste verschwinden. Screenshots gehören in deine sichere Ablage und nicht in ein öffentliches Hilfeforum.',
        ],
      },
      {
        heading: 'Wenn du noch Zugang hast',
        paragraphs: ['Arbeite die Sicherheitsverwaltung vollständig durch. Ein Angreifer kann neben dem Passwort weitere Anmeldemethoden oder Weiterleitungen eingerichtet haben. Die Bezeichnungen unterscheiden sich zwischen den Anbietern; nutze deren offizielle Anleitung für dein Konto.'],
        steps: [
          'Ändere das betroffene Passwort in ein neues, nur dort verwendetes Kennwort.',
          'Prüfe Wiederherstellungsadressen, Telefonnummern, Passkeys und sonstige Anmeldemethoden auf unbekannte Einträge.',
          'Melde unbekannte Geräte beziehungsweise Sitzungen ab und widerrufe fremde App-Zugriffe.',
          'Kontrolliere bei E-Mail-Konten Weiterleitungen, Filter, delegierte Zugriffe und gesendete Nachrichten.',
          'Richte eine geeignete zusätzliche Anmeldebestätigung sowie einen erreichbaren Ersatzweg ein.',
        ],
      },
      {
        heading: 'Wenn die Anmeldung nicht mehr funktioniert',
        paragraphs: [
          'Verwende die Kontowiederherstellung auf der offiziellen Website. Halte deine bisherige Kontoadresse, bekannte frühere Angaben und erreichbare Ersatzkontakte bereit. Beantworte die Fragen sorgfältig und bleibe nach Möglichkeit bei einem dir bekannten Gerät und Standort. Die Anbieter entscheiden selbst über Nachweise und mögliche Wartezeiten.',
          'Bezahle keine Person, die dir eine garantierte Freischaltung verspricht oder einen geheimen Umgehungsweg anbietet. Auch ein IT-Dienstleister kann keine Anbieterprüfung ersetzen. Bei einem geschäftlich verwalteten Konto ist die zuständige Administration der richtige erste Ansprechpartner. Setze ein noch angemeldetes Gerät nicht vorschnell zurück, solange es für den legitimen Wiederherstellungsweg benötigt werden könnte.',
        ],
      },
      {
        heading: 'Verbundene Konten und Folgen prüfen',
        paragraphs: [
          'Wenn dasselbe Kennwort anderswo verwendet wurde, ändere es auch dort. Prüfe anschließend Konten, deren Zurücksetzen über das betroffene Postfach möglich war. Achte auf unbekannte Bestellungen, Nachrichten und geänderte Kontaktinformationen. Bei Zahlungsauffälligkeiten nimmst du direkt über die bekannten offiziellen Wege Kontakt zum Zahlungsanbieter auf.',
          'Informiere Kontakte über einen separaten Kanal, falls aus deinem Konto betrügerische Nachrichten verschickt wurden. Beobachte die Kontoaktivität auch nach der ersten Absicherung. Neue unbekannte Zugriffe sind ein Grund, weitere Geräte, Apps und Wiederherstellungswege zu untersuchen. Schreibe die erfolgten Schritte auf; so lässt sich bei späterer Hilfe nachvollziehen, was bereits geprüft wurde.',
        ],
      },
    ],
    pitfall: 'Ein Passwortwechsel kann nötig sein, ist aber nicht automatisch das Ende des Vorfalls. Fremde App-Freigaben, Weiterleitungen und zusätzlich registrierte Anmeldemethoden verdienen eine eigene Kontrolle.',
    whenToGetHelp: 'Hole Hilfe, wenn sich fremde Zugriffe wiederholen, wichtige Geschäftskonten betroffen sind oder du nicht sicher zwischen Geräteproblem und Kontodiebstahl unterscheiden kannst. Teile dabei keine Passwörter oder Ersatzcodes.',
    relatedSlugs: ['phishing-erkennen', 'zwei-faktor-anmeldung', 'passwortmanager'],
    servicePath: '/leistungen/betrugsverdacht-phishing-hilfe/',
    sources: [
      { title: 'Google: Ein gehacktes Konto schützen', url: 'https://support.google.com/accounts/answer/6294825?hl=de' },
      { title: 'Apple: Einen kompromittierten Account absichern', url: 'https://support.apple.com/de-de/102560' },
      { title: 'Google: Probleme bei der Kontobestätigung beheben', url: 'https://support.google.com/accounts/answer/185834?hl=de' },
    ],
  },
]
