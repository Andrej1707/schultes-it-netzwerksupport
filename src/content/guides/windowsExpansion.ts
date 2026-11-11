import type { GuideArticle } from './types'

export const windowsExpansionGuides: GuideArticle[] = [
  {
    slug: 'zweiten-monitor-einrichten',
    title: 'Zweiten Monitor einrichten: mehr Platz, passend angeordnet',
    description: 'Zwei Bildschirme unter Windows sinnvoll verbinden, erweitern und skalieren – mit einfachen Vergleichstests, wenn ein Monitor dunkel bleibt.',
    category: 'windows', readMinutes: 5, image: 'guide-zweiten-monitor-einrichten',
    imageAlt: 'Zwei nebeneinander aufgestellte Monitore mit Tastatur und Maus auf einem hellen Schreibtisch', updated: '2026-11-11',
    intro: 'Eine Anleitung links und das Arbeitsfenster rechts: Ein zweiter Bildschirm kann viel Hin- und Herwechseln sparen. Damit das angenehm funktioniert, müssen Verbindung, Anordnung und Schriftgröße zusammenpassen. Beginne mit einer einfachen Verbindung und teste anschließend deinen echten Arbeitsablauf. Die folgenden Menüwege beziehen sich auf Windows 11; bei anderen Versionen können die Bezeichnungen abweichen.',
    takeaways: ['Zum Arbeiten auf zwei Flächen „Erweitern“ statt „Duplizieren“ wählen.', 'Die Bildschirm-Anordnung in Windows an den echten Schreibtisch anpassen.', 'Für größere Schrift zuerst die Skalierung statt einer niedrigeren Auflösung prüfen.'],
    sections: [
      {
        heading: 'Kläre die Verbindung vor dem Einstecken',
        paragraphs: [
          'Sieh dir die Anschlüsse an Computer und Monitor sowie die zugehörigen Handbücher an. HDMI, DisplayPort und USB-C sind nicht beliebig austauschbar. Bei USB-C muss der Anschluss die benötigte Bildausgabe unterstützen. Ein Adapter behebt keine fehlende Gerätefunktion. Notiere die beiden Modellbezeichnungen, falls die Ausstattung unklar bleibt.',
          'Verbinde zunächst nur einen zusätzlichen Monitor möglichst direkt mit dem Rechner. Schalte ihn ein und wähle an seinen Tasten den tatsächlich verwendeten Eingang. Ein Bildschirm kann korrekt angeschlossen sein und trotzdem den falschen Eingang anzeigen. Prüfe außerdem, ob das Kabel an beiden Enden vollständig sitzt, ohne Stecker mit Gewalt zu bewegen.',
        ],
      },
      {
        heading: 'Erweitere den Desktop und sortiere die Flächen',
        paragraphs: ['Drücke Windows + P und wähle „Erweitern“, wenn du unterschiedliche Fenster auf beiden Bildschirmen nutzen möchtest. „Duplizieren“ zeigt denselben Inhalt und ist beispielsweise für eine Präsentation passend. Öffne danach Einstellungen → System → Anzeige.'],
        steps: [
          'Wähle „Identifizieren“, damit du die Nummern den tatsächlichen Bildschirmen zuordnen kannst.',
          'Ziehe die Bildschirmflächen in der Übersicht passend nach links, rechts oder oben und übernimm die Anordnung.',
          'Bewege den Mauszeiger über den gemeinsamen Rand und verschiebe ein Fenster auf den zweiten Bildschirm. Korrigiere die Anordnung, falls der Übergang unlogisch wirkt.',
          'Wähle bewusst den Bildschirm, der als Hauptanzeige dienen soll. Prüfe danach, wo neue Arbeitsfenster erscheinen.',
        ],
      },
      {
        heading: 'Passe Schrift und Arbeitsplatz getrennt an',
        paragraphs: [
          'Wähle jeden Bildschirm einzeln aus. Die als empfohlen markierte Auflösung ist ein guter Ausgangspunkt für eine scharfe Darstellung. Sind Texte zu klein, erhöhe zunächst die Skalierung. Eine niedrigere Auflösung kann Schrift unscharf machen. Zwei unterschiedlich große Monitore müssen nicht denselben Skalierungswert verwenden, um sich angenehm lesen zu lassen.',
          'Öffne ein Dokument und eine Webseite, die du häufig nutzt. Prüfe Lesbarkeit, Fensterbreite und den Wechsel zwischen den Anzeigen. Stelle die Geräte so auf, dass du für deine Hauptarbeit entspannt geradeaus schauen kannst. Ein zweiter Monitor lohnt sich wenig, wenn du ständig an seinem Rand suchen oder den Kopf ungünstig verdrehen musst.',
        ],
      },
      {
        heading: 'Grenze ein fehlendes Bild mit einem Vergleich ein',
        paragraphs: [
          'Bleibt die Anzeige dunkel, prüfe Eingang und Verbindung erneut und suche unter „Mehrere Bildschirme“ nach der Erkennung. Teste danach ein bekannt funktionierendes Kabel oder den Monitor an einem anderen Computer. Verändere jeweils nur eine Sache. So lässt sich besser unterscheiden, ob Bildschirm, Kabel, Dock oder Rechner beteiligt ist.',
          'Funktioniert ein Monitor allein, aber nicht zusammen mit einem weiteren, prüfe die unterstützte Anzahl und Auflösung im Gerätehandbuch. Ein einfacher HDMI-Splitter erzeugt keine zweite unabhängige Arbeitsfläche. Halte fest, welche Kombination funktioniert und welche nicht; das ist für die weitere Klärung wesentlich hilfreicher als mehrere ungezielte Adapterkäufe.',
        ],
      },
    ],
    pitfall: 'Kaufe keinen Verteiler allein nach der Zahl seiner Buchsen. Zwei Ausgänge bedeuten nicht automatisch zwei getrennte Bildschirme mit der gewünschten Auflösung. Die gesamte Verbindung vom Rechner bis zum Monitor muss die Funktion unterstützen.',
    whenToGetHelp: 'Hole Unterstützung, wenn der passende Anschluss unklar ist, die Anzeige regelmäßig ausfällt oder mehrere Monitore an einer Dockingstation zusammenarbeiten sollen. Modellnamen und die Ergebnisse deiner Vergleichstests erleichtern die Auswahl einer passenden Lösung.',
    relatedSlugs: ['usb-c-dockingstation', 'barrierefreiheit-windows', 'neuen-pc-einrichten'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Mehrere Monitore unter Windows verwenden', url: 'https://support.microsoft.com/en-us/windows/hardware/display-graphics/how-to-use-multiple-monitors-in-windows' },
      { title: 'Microsoft: Auflösung, Skalierung und Ausrichtung ändern', url: 'https://support.microsoft.com/en-us/windows/hardware/display-graphics/change-your-screen-resolution-and-layout-in-windows' },
      { title: 'Microsoft: Verbindungen zu externen Monitoren prüfen', url: 'https://support.microsoft.com/en-us/windows/hardware/display-graphics/troubleshoot-external-monitor-connections-in-windows' },
    ],
  },
  {
    slug: 'bluetooth-verbindet-nicht',
    title: 'Bluetooth verbindet nicht: Kopplung und Ton getrennt prüfen',
    description: 'So grenzt du Bluetooth-Probleme mit Kopfhörern, Maus oder Tastatur ein und erkennst, wann nur das falsche Audiogerät ausgewählt ist.',
    category: 'windows', readMinutes: 5, image: 'guide-bluetooth-verbindet-nicht',
    imageAlt: 'Kabellose hellgraue Kopfhörer neben einem geschlossenen Laptop auf einer hellen Schreibtischmatte', updated: '2026-11-11',
    intro: 'Die Kopfhörer blinken, Windows findet sie aber nicht. Oder sie sind verbunden, während der Ton weiter aus dem Laptop kommt. Das sind unterschiedliche Fehler mit unterschiedlichen nächsten Schritten. Unterscheide deshalb zuerst zwischen „nicht sichtbar“, „nicht verbunden“ und „verbunden, aber ohne Funktion“. Für die folgenden Einstellungen dient Windows 11 als Beispiel; ältere Versionen ordnen sie teilweise anders ein.',
    takeaways: ['Einschalten und Kopplungsmodus sind nicht dasselbe.', 'Ein verbundenes Headset muss zusätzlich als Audiogerät ausgewählt sein.', 'Vor Änderungen an Bluetooth-Maus oder Tastatur eine alternative Bedienung bereithalten.'],
    sections: [
      {
        heading: 'Prüfe Gerät, Strom und Kopplungsmodus',
        paragraphs: [
          'Lade das Zubehör auf beziehungsweise prüfe seine Batterien. Lege es für den ersten Test direkt neben den Computer. Öffne Einstellungen → Bluetooth und Geräte und kontrolliere, ob Bluetooth eingeschaltet ist. Fehlt die Funktion vollständig, prüfe zunächst anhand des Computermodells, ob überhaupt ein Bluetooth-Adapter vorhanden sein sollte.',
          'Versetze das Zubehör nach seiner Herstelleranleitung ausdrücklich in den Kopplungsmodus. Eine leuchtende Betriebsanzeige reicht dafür nicht immer. Manche Geräte verbinden sich beim Einschalten sofort mit einem früher verwendeten Telefon. Trenne dort die Verbindung vorübergehend, wenn die Anleitung keine gleichzeitige Nutzung vorsieht. Rate nicht verschiedene lange Tastenkombinationen durch: Sie können bei manchen Geräten einen Werksreset auslösen.',
        ],
      },
      {
        heading: 'Kopple das richtige Gerät kontrolliert',
        paragraphs: ['Wähle in den Windows-Einstellungen „Gerät hinzufügen“ und anschließend Bluetooth. Vergleiche den angezeigten Namen mit der Anleitung deines Zubehörs. Bestätige nur eine Kopplung, die du selbst gerade begonnen hast. Mehrere gleichnamige Geräte im Raum erschweren die Zuordnung.'],
        steps: [
          'Ist dein Gerät bereits gespeichert, verbindet sich aber nicht, entferne gezielt nur diesen Eintrag.',
          'Aktiviere am Zubehör erneut den Kopplungsmodus und füge es wieder hinzu.',
          'Bei einer Tastatur gib einen angezeigten Kopplungscode genau so ein, wie Windows es verlangt. Verwende nicht auf Verdacht einen allgemeinen Standardcode.',
          'Teste eine konkrete Funktion, etwa einige Tasten oder eine kurze Tonwiedergabe, bevor du weitere Einstellungen änderst.',
        ],
      },
      {
        heading: 'Behandle fehlenden Ton als eigenes Problem',
        paragraphs: [
          'Wenn Windows die Kopfhörer als verbunden zeigt, öffne Einstellungen → System → Sound. Wähle sie unter „Ausgabe“ aus und prüfe die Lautstärke sowohl am Computer als auch am Zubehör. Spiele eine bekannte lokale Audiodatei ab. Funktioniert sie, während eine einzelne Anwendung stumm bleibt, konzentriere dich auf deren eigene Audioauswahl.',
          'Bei Videokonferenzen werden Lautsprecher und Mikrofon getrennt ausgewählt. Kontrolliere deshalb beide Felder im Besprechungsprogramm. Prüfe außerdem dessen Stummschaltung. Ein erfolgreich abgespieltes Musikstück bestätigt noch nicht, dass das richtige Mikrofon verwendet wird. Dokumentiere, ob nur die Wiedergabe, nur die Aufnahme oder beides betroffen ist.',
        ],
      },
      {
        heading: 'Nutze Neustart und Gegenprobe statt Rundumschlag',
        paragraphs: [
          'Schalte Bluetooth einmal aus, warte kurz und aktiviere es erneut. Speichere deine Arbeit vor einem regulären Windows-Neustart. Bei Windows 11 kann die Bluetooth-Problembehandlung in „Hilfe anfordern“ unterstützen. Installiere benötigte Aktualisierungen über Windows Update oder die offizielle Supportseite des konkreten Herstellers, nicht über unbekannte Treiberprogramme.',
          'Teste das Zubehör nach Möglichkeit an einem zweiten geeigneten Gerät. Funktioniert es dort zuverlässig, liegt der Schwerpunkt der weiteren Suche am ersten Computer. Scheitert es überall, sind Zubehör, Ladezustand oder dessen Bedienung wahrscheinlicher beteiligt. Notiere auch, ob die Verbindung erst nach dem Ruhezustand oder nur an einem bestimmten Arbeitsplatz abbricht.',
        ],
      },
    ],
    pitfall: 'Entferne nicht gleichzeitig alle Bluetooth-Geräte und Treiber. Wenn auch Maus und Tastatur darüber verbunden sind, verlierst du möglicherweise deine Bedienmöglichkeit. Halte vorher Touchpad, eingebaute Tastatur oder ein geeignetes kabelgebundenes Eingabegerät bereit.',
    whenToGetHelp: 'Lass die Verbindung prüfen, wenn Bluetooth dauerhaft verschwindet, mehrere bekannte Geräte scheitern oder Aussetzer trotz erfolgreicher Gegenprobe bleiben. Nenne Computermodell, Zubehörmodell und den genauen Punkt, an dem der Ablauf scheitert.',
    relatedSlugs: ['mikrofon-kamera-videokonferenz', 'usb-c-dockingstation', 'windows-update-probleme'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Bluetooth-Geräte in Windows koppeln', url: 'https://support.microsoft.com/en-gb/windows/hardware/bluetooth/pair-a-bluetooth-device-in-windows' },
      { title: 'Microsoft: Bluetooth-Verbindungsprobleme untersuchen', url: 'https://support.microsoft.com/en-us/windows/hardware/bluetooth/troubleshoot-bluetooth-not-connecting-in-windows' },
      { title: 'Microsoft: Bluetooth verbunden, aber kein Ton', url: 'https://support.microsoft.com/en-au/windows/hardware/bluetooth/fix-bluetooth-connected-but-no-sound-issue-on-windows' },
    ],
  },
  {
    slug: 'mikrofon-kamera-videokonferenz',
    title: 'Mikrofon und Kamera prüfen, bevor die Videokonferenz beginnt',
    description: 'Geräteauswahl, Freigaben und kurze Tests helfen bei schwarzem Kamerabild, fehlendem Ton und dem falschen Mikrofon im Onlinegespräch.',
    category: 'windows', readMinutes: 5, image: 'guide-mikrofon-kamera-videokonferenz',
    imageAlt: 'Externe Webcam auf einem Monitor und ein kompaktes Tischmikrofon an einem hellen Arbeitsplatz', updated: '2026-11-11',
    intro: 'Kurz vor einem wichtigen Gespräch bleibt das Bild schwarz oder niemand hört dich. Mit einem Test vor dem Termin kannst du viele dieser Situationen eingrenzen. Prüfe nacheinander Gerät, Windows-Freigabe und Besprechungsprogramm. Ein funktionierendes Mikrofon in Windows bedeutet noch nicht, dass die Konferenz dieselbe Quelle verwendet. Die genannten Windows-Menüs beziehen sich auf Windows 11.',
    takeaways: ['Mikrofon, Lautsprecher und Kamera jeweils bewusst auswählen.', 'Windows-Freigaben und Berechtigungen der besuchten Website getrennt prüfen.', 'Vor dem Termin einen kurzen Aufnahme- und Vorschautest durchführen.'],
    sections: [
      {
        heading: 'Beginne mit den sichtbaren Schaltern',
        paragraphs: [
          'Kontrolliere bei der Kamera eine mögliche Abdeckung, einen seitlichen Schalter oder eine Funktionstaste am Laptop. Am Headset kann zusätzlich ein eigener Stummschalter sitzen. Diese Bedienelemente wirken unabhängig vom sichtbaren Mikrofonknopf der Konferenz. Stecke externe Geräte vollständig ein und verbinde sie für die erste Gegenprobe möglichst direkt mit dem Computer.',
          'Öffne die Windows-Kamera-App und prüfe die Vorschau. Bei mehreren Kameras wähle das gewünschte Gerät. Funktioniert das Bild hier, ist die Kamera grundsätzlich erreichbar; die Ursache kann dann bei der später verwendeten Anwendung liegen. Schließe die Test-App anschließend wieder, bevor du das Besprechungsprogramm öffnest.',
        ],
      },
      {
        heading: 'Erteile nur die benötigten Freigaben',
        paragraphs: [
          'Unter Einstellungen → Datenschutz und Sicherheit findest du „Kamera“ und „Mikrofon“. Prüfe den Gerätezugriff und die Freigabe für die benötigte Anwendung. Klassische Desktopprogramme werden anders behandelt als einzelne Store-Apps: Der Schalter für Desktop-Apps lässt sich nicht für jedes Programm separat einstellen. Lies daher genau, welche Freigabe du änderst.',
          'Bei einer Konferenz im Browser kommt die Berechtigung der konkreten Website hinzu. Eine erlaubte Windows-Freigabe ersetzt sie nicht. Kontrolliere die Adresse des vertrauten Konferenzdienstes und dessen Kamera- beziehungsweise Mikrofonberechtigung im Browser. Aktiviere nicht pauschal Zugriff für alle Websites. Auf verwalteten Firmenrechnern kann eine Vorgabe der zuständigen IT maßgeblich sein.',
        ],
      },
      {
        heading: 'Teste die Aufnahme mit normaler Sprechlautstärke',
        paragraphs: ['Öffne Einstellungen → System → Sound und wähle unter „Eingabe“ das tatsächlich verwendete Mikrofon. Die eingebauten Laptop-Mikrofone, eine Webcam und ein Headset können als unterschiedliche Quellen auftauchen. Verlasse dich deshalb nicht allein auf die Bezeichnung „Standard“.'],
        steps: [
          'Öffne die Eigenschaften des ausgewählten Mikrofons und starte den angebotenen Mikrofontest. Darstellung und Testmöglichkeiten können je nach Windows-Version abweichen.',
          'Sprich einen kurzen Satz mit deiner normalen Gesprächslautstärke und dem üblichen Abstand zum Mikrofon.',
          'Beende den Test und höre die Probe an, sofern die Funktion angeboten wird. Passe die Eingabelautstärke nur bei Bedarf an.',
          'Notiere den funktionierenden Gerätenamen. Wähle anschließend dieselbe Quelle in der Konferenzanwendung.',
        ],
      },
      {
        heading: 'Prüfe die Besprechung als letzten Schritt',
        paragraphs: [
          'Wähle vor dem Beitritt Kamera, Mikrofon und Lautsprecher einzeln in der Vorschau oder den Geräteeinstellungen. Ein nachträglich angeschlossenes Dock kann zusätzliche Audiogeräte bereitstellen. Nutze einen angebotenen Testanruf oder vereinbare eine kurze Probe mit einer vertrauten Person. Sprich dabei auch darüber, ob du deutlich oder nur sehr leise zu hören bist.',
          'Stelle die Kamera ruhig auf und vermeide ein helles Fenster direkt hinter dir. Wenn mehrere Computer im gleichen Raum derselben Besprechung beitreten, nutze Audio möglichst nur an einem davon oder arbeite mit passenden Headsets. So lässt sich eine Rückkopplung eher vermeiden. Werden Bild und Ton erst im laufenden Gespräch instabil, prüfe zusätzlich die Internetverbindung.',
        ],
      },
    ],
    pitfall: 'Installiere wegen eines stummen Gesprächs nicht sofort neue Audiotreiber und deaktiviere keine Schutzsoftware pauschal. Häufig unterscheiden sich einfach die ausgewählten Geräte oder eine benötigte Berechtigung fehlt. Eine Änderung nach der anderen lässt sich nachvollziehen.',
    whenToGetHelp: 'Hole Hilfe, wenn Kamera oder Mikrofon in keiner Anwendung erkannt werden, Berechtigungen gesperrt sind oder wichtige Gespräche regelmäßig ausfallen. Mit App-Name, Windows-Version und den Ergebnissen der lokalen Tests kann die Ursache gezielter geprüft werden.',
    relatedSlugs: ['bluetooth-verbindet-nicht', 'usb-c-dockingstation', 'lan-oder-wlan'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Kamera, Mikrofon und Datenschutz in Windows', url: 'https://support.microsoft.com/en-us/windows/privacy/windows-camera-microphone-and-privacy' },
      { title: 'Microsoft: Mikrofone einrichten und testen', url: 'https://support.microsoft.com/en-us/windows/hardware/drivers/how-to-set-up-and-test-microphones-in-windows' },
      { title: 'Microsoft: Probleme mit der Kamera untersuchen', url: 'https://support.microsoft.com/en-us/windows/hardware/camera/camera-doesn-t-work-in-windows' },
    ],
  },
  {
    slug: 'laptop-akku-pflegen',
    title: 'Laptop-Akku pflegen: sinnvoll laden und Veränderungen erkennen',
    description: 'Wärme vermeiden, vorhandene Ladebegrenzungen verstehen und Laufzeitprobleme einordnen – ohne den Akku unnötig vollständig zu entladen.',
    category: 'windows', readMinutes: 5, image: 'guide-laptop-akku-pflegen',
    imageAlt: 'Geschlossener Laptop mit angeschlossenem Ladekabel und frei liegendem Netzteil auf einem Holztisch', updated: '2026-11-11',
    intro: 'Ein Laptop-Akku verändert sich mit Alter und Nutzung. Kürzere Laufzeit bedeutet aber nicht automatisch, dass er sofort ersetzt werden muss: Auch eine andere Arbeitslast oder geänderte Einstellungen beeinflussen den Verbrauch. Gute Pflege besteht aus passenden Ladebedingungen und einem aufmerksamen Vergleich im Alltag. Du brauchst dafür weder tägliche Prozentkontrolle noch ein zusätzliches Optimierungsprogramm.',
    takeaways: ['Hitze und häufiges vollständiges Entladen möglichst vermeiden.', 'Ladebegrenzungen hängen vom konkreten Laptop und Hersteller ab.', 'Bei aufgeblähtem Gehäuse oder Akku das Gerät nicht weiter benutzen.'],
    sections: [
      {
        heading: 'Schaffe einen passenden Ladeplatz',
        paragraphs: [
          'Stelle Laptop und Netzteil auf eine feste, freie Fläche. Lade nicht unter einer Decke oder in einer geschlossenen Tasche. Vermeide starke Sonne und ein aufgeheiztes Auto. Übermäßige Wärme kann die Alterung eines Lithium-Ionen-Akkus beschleunigen. Eine einfache, gut belüftete Arbeitsumgebung ist deshalb sinnvoller als aufwendige Lade-Rituale.',
          'Nutze ein für das genaue Modell geeignetes Netzteil und Kabel. Wenn Laden nur mit Druck auf den Stecker funktioniert oder ein Kabel beschädigt ist, beende diesen Versuch. Ein wackelnder Anschluss wird durch häufiges Nachdrücken nicht zuverlässig. Notiere stattdessen, welches Ladegerät verwendet wurde und ob das Verhalten an einer anderen geeigneten Stromversorgung ebenfalls auftritt.',
        ],
      },
      {
        heading: 'Verstehe eine vorhandene Ladebegrenzung',
        paragraphs: [
          'Einige Geräte bieten intelligentes Laden oder ein einstellbares Ladelimit. Dadurch kann der Akkustand unter 100 Prozent bleiben, obwohl das Netzteil angeschlossen ist. Das kann beabsichtigt sein und muss kein Defekt sein. Die Funktion wird vom jeweiligen Hersteller umgesetzt; es gibt dafür keinen universellen Windows-Schalter, der auf jedem Laptop gleich funktioniert.',
          'Prüfe die offizielle Anleitung oder die vorinstallierte Hersteller-App für dein Modell. Wenn du überwiegend am Schreibtisch arbeitest, kann die vorgesehene Schonfunktion passend sein. Vor einer längeren Reise lässt sich bei manchen Geräten vorübergehend vollständig laden. Kontrolliere anschließend, ob du zum normalen Ladeverhalten zurückkehren möchtest, und halte dich an die dokumentierten Möglichkeiten.',
        ],
      },
      {
        heading: 'Vergleiche Laufzeit unter ähnlichen Bedingungen',
        paragraphs: ['Die verbleibende Zeit ist eine Schätzung und verändert sich mit den geöffneten Programmen. Vergleiche deshalb nicht einen ruhigen Schreibvormittag mit einer Videokonferenz oder einem Spiel. Suche nach einer nachvollziehbaren Veränderung bei einer ähnlichen Aufgabe.'],
        steps: [
          'Notiere Start-Ladestand, Uhrzeit, Bildschirmhelligkeit und die hauptsächlich verwendeten Programme.',
          'Arbeite eine überschaubare Zeit wie gewohnt und notiere anschließend Akkustand und auffälliges Verhalten.',
          'Prüfe bei Windows 11 unter „System → Strom und Akku“ die verfügbaren Verbrauchsinformationen. Die genaue Darstellung hängt von der Version ab.',
          'Wiederhole den Vergleich an einem anderen Tag unter ähnlichen Bedingungen. Eine einzelne Messung ist keine zuverlässige Aussage über den Akkuzustand.',
        ],
      },
      {
        heading: 'Unterscheide Pflege, Alterung und Warnzeichen',
        paragraphs: [
          'Lade nach, bevor der Computer regelmäßig vollständig leerläuft. Für längere Lagerung empfiehlt Microsoft einen mittleren Ladestand und einen kühlen, trockenen Ort; prüfe zusätzlich die Hinweise deines Herstellers. Auch ein selten genutztes Gerät sollte gelegentlich kontrolliert werden. Ein Akku wird durch wiederholtes Entladen bis zum Abschalten nicht wieder neu.',
          'Eine langsam nachlassende Kapazität ist anders zu behandeln als ein angehobenes Touchpad, ein gewölbter Gehäuseboden oder auffälliger Geruch. Bei solchen Anzeichen schalte das Gerät aus, trenne die Stromversorgung, soweit das gefahrlos möglich ist, und benutze es nicht weiter. Drücke das Gehäuse nicht zusammen und öffne einen möglicherweise geschwollenen Akku nicht selbst.',
        ],
      },
    ],
    pitfall: 'Eine feste Regel wie „immer erst ganz leer, dann ganz voll“ passt nicht zur allgemeinen Pflege moderner Laptop-Akkus. Auch ein angezeigtes Ladelimit ist kein Grund, Schutzfunktionen zu umgehen oder unbekannte Akku-Reparaturprogramme zu installieren.',
    whenToGetHelp: 'Lass abrupte Abschaltungen, ungewöhnliche Wärme, Ladeabbrüche oder sichtbare Verformungen prüfen. Für die Entscheidung über einen Austausch sind Modell, Alter, beobachtete Laufzeit und die vom Hersteller vorgesehenen Diagnosewerte hilfreicher als ein einzelner Prozentwert.',
    relatedSlugs: ['laptop-wird-heiss', 'usb-c-dockingstation', 'neuen-pc-einrichten'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: Akkupflege unter Windows', url: 'https://support.microsoft.com/en-us/windows/experience/power-battery/caring-for-your-battery-in-windows' },
      { title: 'Microsoft: Intelligentes Laden verwenden', url: 'https://support.microsoft.com/en-us/windows/experience/power-battery/use-smart-charging-in-windows' },
      { title: 'Dell: Umgang mit aufgeblähten Lithium-Ionen-Akkus', url: 'https://www.dell.com/support/manuals/en-us/dell/swollenbattery' },
    ],
  },
  {
    slug: 'usb-c-dockingstation',
    title: 'USB-C-Dockingstation: Anschlüsse und Leistung passend abstimmen',
    description: 'Warum nicht jedes USB-C-Dock an jedem Laptop alles kann und wie du Bildausgabe, Laden und Zubehör systematisch prüfst.',
    category: 'windows', readMinutes: 5, image: 'guide-usb-c-dockingstation',
    imageAlt: 'USB-C-Dockingstation am Laptop mit angeschlossenem Bildschirmkabel und Netzwerkkabel', updated: '2026-11-11',
    intro: 'Ein Kabel zum Laptop, daran Bildschirm, Netzwerk und Zubehör: Eine Dockingstation kann den Arbeitsplatz deutlich einfacher machen. Die gleiche Steckerform garantiert allerdings nicht die gleichen Funktionen. Ein Gerät kann USB-Zubehör erkennen und trotzdem weder ein Bild übertragen noch ausreichend laden. Entscheidend sind Laptop, Dock, Stromversorgung und Verbindungskabel als gemeinsame Kombination.',
    takeaways: ['USB-C beschreibt zunächst die Steckverbindung, nicht automatisch alle Funktionen.', 'Monitorunterstützung und Ladeleistung für die konkreten Modelle prüfen.', 'Das Dock mit wenigen Geräten beginnen und Zubehör einzeln ergänzen.'],
    sections: [
      {
        heading: 'Schreibe auf, was am Arbeitsplatz gebraucht wird',
        paragraphs: [
          'Liste zuerst deine Geräte auf: Wie viele Monitore möchtest du nutzen, welche Auflösung brauchen sie und welche Anschlüsse besitzen sie? Ergänze Tastatur, Maus, Netzwerk, Kamera und externe Laufwerke. Notiere außerdem das genaue Laptopmodell. So kannst du eine technische Tabelle mit deinem Bedarf vergleichen, statt nur die Zahl der Buchsen zu zählen.',
          'Prüfe im Laptop-Handbuch die Eigenschaften des vorgesehenen Anschlusses. Für viele USB-C-Docks ist eine unterstützte Bildausgabe wie DisplayPort Alt Mode erforderlich. Andere Lösungen arbeiten über Thunderbolt oder zusätzliche DisplayLink-Software. Diese Varianten sind nicht identisch. Ein Symbol am Gehäuse kann helfen; die belastbare Grundlage bleibt die Dokumentation des konkreten Geräts.',
        ],
      },
      {
        heading: 'Kläre Bild und Strom unabhängig voneinander',
        paragraphs: [
          'Lies die Monitortabelle des Docks für deinen Anschluss und dein Betriebssystem. Unterstützte Auflösungen können sich ändern, sobald mehrere Displays gleichzeitig angeschlossen werden. Ein beworbenes Maximum für einen einzelnen Monitor ist keine Zusage für alle Ausgänge zusammen. Wenn der Hersteller Bedingungen nennt, gehören sie zur Auswahlentscheidung dazu.',
          'Prüfe daneben die tatsächlich an den Laptop abgegebene Ladeleistung. Ein Dock oder Hub benötigt selbst Energie und versorgt gegebenenfalls weiteres Zubehör. Deshalb steht nicht zwangsläufig die gesamte Leistung des angeschlossenen Netzteils am Computer zur Verfügung. Manche Kombinationen benötigen zusätzlich das Laptop-Netzteil. Eine Lade-Warnmeldung solltest du anhand der Herstellerangaben klären, nicht einfach dauerhaft wegklicken.',
        ],
      },
      {
        heading: 'Baue die Verbindung in kleinen Schritten auf',
        paragraphs: ['Nutze zunächst das mitgelieferte oder ausdrücklich geeignete Verbindungskabel. Ein beliebiges USB-C-Ladekabel kann andere Fähigkeiten haben. Beachte die vom Hersteller angegebene Anschlussreihenfolge und Stromversorgung des Docks. Speichere offene Arbeiten, bevor du einen laufenden Arbeitsplatz umsteckst.'],
        steps: [
          'Verbinde das Dock mit seiner vorgesehenen Stromversorgung und dem richtigen Anschluss des Laptops.',
          'Teste zuerst einen Monitor mit bekannt funktionierendem Kabel und kontrolliere den gewählten Eingang.',
          'Ergänze Maus, Tastatur, Netzwerk und weitere Geräte nacheinander. Prüfe nach jedem Schritt, was tatsächlich funktioniert.',
          'Teste auch das erneute Anschließen nach einer normalen Arbeitspause. Notiere Probleme beim Aufwachen oder Wiederverbinden getrennt von der Ersteinrichtung.',
        ],
      },
      {
        heading: 'Suche bei Ausfällen die kleinste fehlerhafte Verbindung',
        paragraphs: [
          'Wenn ein Gerät am Dock ausfällt, teste es möglichst direkt am Laptop. Funktioniert es dort, konzentriere dich auf Dock, Kabel und gemeinsame Versorgung. Tritt das Problem erst mit einem zweiten Monitor oder einer externen Festplatte auf, halte genau diese Kombination fest. Mehrere neue Adapter auf einmal machen den Fehler schwerer nachvollziehbar.',
          'Prüfe anschließend die offizielle Supportseite für das genaue Dockmodell auf passende Hinweise, Treiber und Firmware. Installiere Aktualisierungen nur nach deren Anleitung und unterbrich sie nicht. Bei einem Firmenrechner gehört diese Entscheidung gegebenenfalls zur zuständigen IT. Ein Windows-Update allein garantiert nicht, dass jede Dock-Firmware bereits aktuell ist.',
        ],
      },
    ],
    pitfall: 'Eine lange Anschlussliste und der Begriff „universell“ ersetzen keine Kompatibilitätsprüfung. Auch ein teureres Kabel kann eine am Laptop fehlende Video- oder Ladefunktion nicht nachrüsten. Prüfe die Kombination vor dem Kauf anhand der Modellunterlagen.',
    whenToGetHelp: 'Hole Unterstützung, wenn mehrere Bildschirme, hohe Auflösungen und gleichzeitiges Laden zuverlässig zusammenspielen sollen oder wiederkehrende Verbindungsabbrüche bleiben. Eine Liste aller Modelle, Netzteile und Kabel macht die Prüfung deutlich gezielter.',
    relatedSlugs: ['zweiten-monitor-einrichten', 'laptop-akku-pflegen', 'mikrofon-kamera-videokonferenz'],
    servicePath: '/leistungen/pc-laptop/',
    sources: [
      { title: 'Microsoft: USB-C-Probleme unter Windows', url: 'https://support.microsoft.com/en-gb/windows/hardware/usb/fix-usb-c-problems-in-windows' },
      { title: 'Dell: Dockingstationen auswählen und einrichten', url: 'https://www.dell.com/support/kbdoc/en-ap/000124295/guide-to-dell-docking-stations' },
      { title: 'Dell: Ladeverhalten von Dockingstationen und Hubs', url: 'https://www.dell.com/support/kbdoc/en-gb/000205967/dell-da305-and-da310-adapters-do-not-charge-or-are-slow-to-charge-your-computer?lang=en' },
    ],
  },
  {
    slug: 'barrierefreiheit-windows',
    title: 'Windows leichter bedienen: Schrift, Maus und Tastatur passend einstellen',
    description: 'Praktische Windows-Bedienhilfen für besser lesbare Texte, einen sichtbaren Mauszeiger und angenehmere Eingaben – schrittweise statt pauschal.',
    category: 'windows', readMinutes: 5, image: 'guide-barrierefreiheit-windows',
    imageAlt: 'Tastatur mit großen Tasten neben einer Hand auf einem Trackball an einem hellen Arbeitsplatz', updated: '2026-11-11',
    intro: 'Kleine Schrift, ein schwer auffindbarer Mauszeiger oder Tastenkombinationen mit mehreren Fingern können unnötig anstrengend sein. Windows bietet dafür eingebaute Anpassungen. Entscheidend ist, was dir bei deinen eigenen Aufgaben hilft. Verändere zuerst eine Einstellung und probiere sie im Alltag aus. Wenn du jemand anderen unterstützt, entscheidet die Person selbst, welche Veränderung angenehm ist.',
    takeaways: ['Schriftgröße, Skalierung und Zeigergröße lösen unterschiedliche Aufgaben.', 'Neue Bedienhilfen einzeln ausprobieren und den Rückweg notieren.', 'Verfügbarkeit und Menübezeichnungen hängen von der Windows-Version ab.'],
    sections: [
      {
        heading: 'Starte mit einer konkreten Alltagssituation',
        paragraphs: [
          'Überlege, wo du regelmäßig hängenbleibst: Ist der Text einer E-Mail zu klein, verschwindet der Zeiger auf hellen Seiten oder wird ein Buchstabe mehrfach eingegeben? Eine konkrete Beobachtung führt eher zur passenden Einstellung als die pauschale Auswahl eines vermeintlich einfacheren Modus. Halte vorab fest, wie die bisherige Einstellung aussieht.',
          'Mit Windows + U erreichst du die Bedienhilfen. Unter Windows 11 heißt der Bereich „Barrierefreiheit“; Windows 10 verwendet „Erleichterte Bedienung“. Diese Anleitung orientiert sich an Windows 11. Änderungen gelten nicht in jeder Anwendung identisch. Teste daher anschließend genau das Programm, in dem du die Schwierigkeit bemerkst, statt nur die Vorschau in den Einstellungen anzusehen.',
        ],
      },
      {
        heading: 'Verbessere Lesbarkeit, ohne unnötig Schärfe zu verlieren',
        paragraphs: ['Wenn hauptsächlich Schrift zu klein ist, beginne unter Barrierefreiheit mit „Textgröße“. Soll die ganze Oberfläche größer werden, ist die Skalierung unter System → Anzeige der passendere Ansatz. Die empfohlene Bildschirmauflösung kannst du dabei zunächst beibehalten.'],
        steps: [
          'Erhöhe die gewünschte Größe in einem überschaubaren Schritt und übernimm die Änderung.',
          'Öffne eine häufig verwendete Webseite, ein Dokument und einen Dialog. Prüfe, ob auch Schaltflächen und längere Zeilen erreichbar bleiben.',
          'Probiere bei Bedarf ein Kontrastdesign aus und kontrolliere dabei Bilder, Eingabefelder und farbige Hinweise.',
          'Wenn die Änderung nicht hilft, stelle den vorher notierten Wert wieder her, bevor du etwas anderes ausprobierst.',
        ],
      },
      {
        heading: 'Mache Zeiger und Tastenkombinationen einfacher',
        paragraphs: [
          'Unter „Mauszeiger und Toucheingabe“ kannst du Größe und Farbe des Zeigers verändern. Für die Schreibmarke gibt es einen eigenen Bereich „Textcursor“. Ein gut sichtbarer Zeiger hilft beim Finden; eine veränderte Mausgeschwindigkeit betrifft dagegen die Bewegung. Passe diese Dinge getrennt an und teste sie mit kleinen Zielen, etwa einer Schaltfläche oder einer Tabellenzelle.',
          'Unter „Tastatur“ kann die Einrastfunktion helfen, Tastenkombinationen nacheinander statt gleichzeitig einzugeben. Die Anschlagverzögerung kann kurze oder wiederholte Tastendrücke filtern. Prüfe nach jeder Änderung einen kurzen selbst geschriebenen Satz. Zu starke Filter können sich sonst wie eine kaputte Tastatur anfühlen. Eine Bildschirmtastatur oder ein anderes Eingabegerät kann je nach persönlichem Bedarf zusätzlich sinnvoll sein.',
        ],
      },
      {
        heading: 'Probiere Untertitel und halte gute Einstellungen fest',
        paragraphs: [
          'Liveuntertitel können gesprochene Audioinhalte als Text anzeigen. Microsoft stellt sie unter Windows 11 ab Version 22H2 bereit; Sprachunterstützung und zusätzliche Übersetzungsfunktionen hängen von Version und Geräteausstattung ab. Starte sie beispielsweise mit Windows + Strg + L und folge der Einrichtung der benötigten Sprachdateien. Automatisch erzeugte Untertitel können Fehler enthalten.',
          'Teste solche Funktionen zunächst mit einem bekannten Video und prüfe Größe, Position und Verständlichkeit. Notiere danach nur die Einstellungen, die sich bewährt haben, sowie den Weg zurück. An gemeinsam genutzten Rechnern helfen eigene Benutzerkonten dabei, persönliche Arbeitsumgebungen zu organisieren. Eine gute Einrichtung darf später angepasst werden, wenn sich Aufgaben oder Bedürfnisse verändern.',
        ],
      },
    ],
    pitfall: 'Schalte nicht viele Hilfen gleichzeitig ein und entferne keine vertrauten Bedienelemente ohne Absprache. Eine Einstellung ist nicht allein deshalb besser, weil sie größer oder einfacher wirkt. Entscheidend ist, ob die betreffende Person ihre Aufgabe damit selbstständig erledigen kann.',
    whenToGetHelp: 'Lass dir bei der Einrichtung helfen, wenn wichtige Programme trotz Anpassung schwer bedienbar bleiben oder alternative Eingabegeräte abgestimmt werden sollen. Bringe konkrete Beispiele mit und plane Zeit zum gemeinsamen Ausprobieren statt nur zum Umstellen ein.',
    relatedSlugs: ['zweiten-monitor-einrichten', 'bluetooth-verbindet-nicht', 'smartphone-fuer-senioren'],
    servicePath: '/leistungen/windows-einrichten/',
    sources: [
      { title: 'Microsoft: Windows leichter sehen', url: 'https://support.microsoft.com/en-au/accessibility/windows/make-windows-easier-to-see' },
      { title: 'Microsoft: Maus, Tastatur und andere Eingabegeräte anpassen', url: 'https://support.microsoft.com/en-us/accessibility/windows/make-your-mouse-keyboard-and-other-input-devices-easier-to-use' },
      { title: 'Microsoft: Liveuntertitel verwenden', url: 'https://support.microsoft.com/en-gb/accessibility/windows/use-live-captions-to-better-understand-audio' },
    ],
  },
]
