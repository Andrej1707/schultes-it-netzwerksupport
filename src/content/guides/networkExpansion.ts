import type { GuideArticle } from './types'

export const networkExpansionGuides: GuideArticle[] = [
  {
    "slug": "internet-geschwindigkeit-messen",
    "title": "Internet-Geschwindigkeit messen: Ergebnisse richtig einordnen",
    "description": "Miss deinen Internetanschluss vergleichbar und trenne Leitung, WLAN und Gerätebremsen. Mit passenden Messbedingungen und einer verständlichen Auswertung.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-internet-geschwindigkeit-messen",
    "imageAlt": "Laptop und Router mit blauem Netzwerkkabel sowie einer Stoppuhr auf einem hellen Schreibtisch",
    "updated": "2026-11-11",
    "intro": "Ein Speedtest zeigt 85 Mbit/s, dein Vertrag nennt deutlich mehr. Daraus allein lässt sich noch keine Ursache ableiten. Vielleicht begrenzt das WLAN den Test, vielleicht läuft ein großer Upload oder der Computer erreicht selbst nicht mehr. Mit einem vorbereiteten Vergleich bekommst du Werte, die bei der Fehlersuche tatsächlich weiterhelfen.",
    "takeaways": [
      "Eine Messung per direktem LAN-Kabel hilft, den Internetanschluss vom WLAN zu unterscheiden.",
      "Vergleiche Download und Upload unter ähnlichen Bedingungen und bewahre die Ergebnisse auf.",
      "Ein einzelner Browser-Speedtest ersetzt kein offizielles Nachweisverfahren der Bundesnetzagentur."
    ],
    "sections": [
      {
        "heading": "Zuerst festlegen, was du prüfen möchtest",
        "paragraphs": [
          "Geht es um den Anschluss oder um den Empfang am Schreibtisch? Für den Anschluss verbindest du einen geeigneten Computer direkt mit dem Router. Ein Funk-Repeater oder Powerline-Adapter würde eine weitere mögliche Bremse einbauen. Für den Arbeitsplatz vergleichst du anschließend dieselbe Messung über die dort normalerweise genutzte Verbindung.",
          "Lege die vertraglichen Angaben daneben und beachte die jeweilige Einheit. Mbit/s beschreibt Megabit pro Sekunde; eine Downloadanzeige in MB/s verwendet Megabyte. Acht Bit ergeben ein Byte. Zusätzlich beansprucht die Übertragung selbst einen Teil der Kapazität. Deshalb darfst du die beiden Zahlen nicht unmittelbar gleichsetzen."
        ]
      },
      {
        "heading": "Eine nachvollziehbare Ausgangsmessung vorbereiten",
        "paragraphs": [
          "Beende auf deinen eigenen Geräten laufende Downloads und pausiere große Cloud-Uploads. Stimme den Zeitpunkt mit anderen Personen im Haushalt ab. Nutze das Netzteil des Laptops und prüfe, ob dessen Netzwerkanschluss zur gebuchten Geschwindigkeit passt. Ein langsamer USB-Netzwerkadapter kann sonst den Anschluss scheinbar ausbremsen.",
          "Notiere Datum, Uhrzeit, Gerät und Verbindungsart. Verwende ein seriöses Messangebot wie die Breitbandmessung und bewahre das vollständige Ergebnis auf. Für einen kontrollierten privaten Vergleich sollte kein eigener VPN-Tunnel dazwischenliegen. Einen vorgeschriebenen Firmen-VPN oder verwaltete Sicherheitseinstellungen änderst du dafür allerdings nicht ohne Rücksprache mit der zuständigen IT."
        ]
      },
      {
        "heading": "Mehr als den höchsten Downloadwert betrachten",
        "paragraphs": [
          "Schau auch auf den Upload: Er wird beim Versenden großer Dateien und bei Videogesprächen gebraucht. Falls das Messangebot Laufzeiten anzeigt, notiere sie ebenfalls. Eine hohe Downloadrate allein beantwortet nicht, ob Gespräche stabil laufen. Schreibe deshalb zusätzlich auf, welches konkrete Alltagsproblem während der Messreihe auftrat.",
          "Wiederhole den Vergleich zu mehreren üblichen Nutzungszeiten, ohne nur das beste Ergebnis herauszupicken. Ist LAN wiederholt gut und WLAN deutlich schlechter, beginne beim lokalen Funknetz. Sind beide schwach, prüfe einen zweiten geeigneten Computer. So lässt sich eher erkennen, ob ein einzelnes Gerät oder der gemeinsame Internetzugang beteiligt ist."
        ]
      },
      {
        "heading": "Mit den Ergebnissen den nächsten Schritt wählen",
        "paragraphs": [
          "Fasse die Beobachtungen auf einer Seite zusammen: vereinbarter Tarif, verwendeter Anschluss, typische Messwerte und auffällige Uhrzeiten. Ergänze, ob der Router Verbindungsabbrüche meldet. Diese Übersicht macht ein Gespräch mit dem Anbieter konkreter als die Aussage, das Internet sei manchmal langsam. Ein höherer Tarif ist noch keine begründete Lösung.",
          "Wenn du eine Abweichung der vertraglichen Leistung dokumentieren möchtest, nutze das offizielle Festnetz-Nachweisverfahren. Die Bundesnetzagentur gibt dafür eigene Messbedingungen und einen Ablauf in der Desktop-App vor. Folge den jeweils aktuellen Anweisungen vollständig. Ein selbst zusammengestellter Screenshot aus wenigen Browsermessungen erfüllt diese Anforderungen nicht automatisch."
        ]
      }
    ],
    "pitfall": "Die am Router angezeigte Anschlussrate und der Datendurchsatz eines Speedtests messen unterschiedliche Dinge. Ebenso kann ein Test über schwaches WLAN eine gute Internetleitung nicht zuverlässig beurteilen.",
    "whenToGetHelp": "Wenn mehrere geeignete Geräte direkt am Router wiederholt schlechte Werte liefern, helfen Messprotokoll und Routerereignisse bei der Eingrenzung. Bei ausschließlich schwachen WLAN-Werten ist eine Prüfung des Heimnetzes sinnvoll.",
    "relatedSlugs": [
      "lan-oder-wlan",
      "internet-ausgefallen",
      "wlan-reichweite"
    ],
    "servicePath": "/leistungen/netzwerk-wlan/",
    "sources": [
      {
        "title": "Bundesnetzagentur: Fragen und Antworten zur Festnetzmessung",
        "url": "https://support.breitbandmessung.de/festnetz/fragen-und-antworten"
      },
      {
        "title": "Breitbandmessung: Festnetz-Nachweisverfahren",
        "url": "https://gis.breitbandmessung.de/festnetz/nachweisverfahren"
      },
      {
        "title": "Bundesnetzagentur: Angebote der Breitbandmessung",
        "url": "https://www.breitbandmessung.de/"
      }
    ]
  },
  {
    "slug": "videokonferenz-ruckelt",
    "title": "Videokonferenz ruckelt: Ton und Verbindung gezielt stabilisieren",
    "description": "Wenn Teams und andere Videogespräche stocken: So unterscheidest du Upload, schwankende Verbindung und PC-Auslastung und findest einen brauchbaren Vergleich.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-videokonferenz-ruckelt",
    "imageAlt": "Heller Arbeitsplatz mit Laptop, externer Webcam und kabelgebundenem Headset",
    "updated": "2026-11-11",
    "intro": "Das Bild friert ein und einzelne Wörter fehlen, obwohl Webseiten schnell laden. Videogespräche brauchen nicht nur einen hohen Downloadwert, sondern eine gleichmäßige Verbindung in beide Richtungen. Mit wenigen Schritten kannst du das laufende Gespräch entlasten und danach prüfen, ob Netzwerk, Computer oder die Gegenseite die Ursache ist.",
    "takeaways": [
      "Für ein laufendes Gespräch zuerst Ton sichern und unnötige gleichzeitige Übertragungen pausieren.",
      "Upload, Paketverluste und schwankende Laufzeiten können wichtiger sein als die Downloadrate.",
      "Ein Vergleich per LAN und ohne aufwendige Videoeffekte trennt mehrere mögliche Ursachen."
    ],
    "sections": [
      {
        "heading": "Das laufende Gespräch wieder verständlich machen",
        "paragraphs": [
          "Schalte vorübergehend deine Kamera aus, wenn die Verständigung wichtiger ist als das Bild. Pausiere einen eigenen großen Upload oder eine laufende Dateisynchronisierung, sofern das im Arbeitsablauf möglich ist. Starte während des Gesprächs keinen zusätzlichen Speedtest: Er belastet genau die Verbindung, deren Kapazität du gerade benötigst.",
          "Prüfe, ob das richtige Mikrofon und der passende Lautsprecher ausgewählt sind. Ein vertrautes Headset hilft beim Vergleich und verhindert, dass eine ungünstige Audiogerätewahl mit einem Netzproblem verwechselt wird. Sage kurz, was ausfällt: Hören dich alle schlecht oder hörst nur du eine bestimmte Person abgehackt? Diese Unterscheidung lenkt die weitere Suche."
        ]
      },
      {
        "heading": "Den Netzwerkweg mit einem kurzen Vergleich prüfen",
        "paragraphs": [
          "Führe später einen Testanruf über ein direktes Netzwerkkabel zum Router durch. Nutze möglichst denselben Computer, dieselbe Anwendung und dieselbe Gegenstelle. Bleibt der Anruf über Kabel stabil, während WLAN am Arbeitsplatz stockt, lohnt sich die Untersuchung dieser Funkstrecke. Ein vollständiger Routertausch lässt sich daraus noch nicht ableiten.",
          "Vergleiche auch einen ruhigen Zeitpunkt mit dem normalen Arbeitsbetrieb. Wenn gleichzeitig große Dateien hochgeladen werden, kann der verfügbare Upload knapp werden. Frage andere Haushaltsmitglieder nach ihren Übertragungen, statt wahllos Geräte zu trennen. Dokumentiere, ob Bild, Ton oder beides betroffen sind und wie lange die Unterbrechungen dauern."
        ]
      },
      {
        "heading": "Anrufstatistik und Computer zusammen betrachten",
        "paragraphs": [
          "Microsoft Teams bietet während einer Besprechung je nach Oberfläche und Freigabe Angaben zur Anrufqualität. Paketverluste bedeuten, dass Daten fehlen; Jitter beschreibt ungleichmäßige Ankunftszeiten. Auffällige Werte liefern einen Hinweis auf den Übertragungsweg. Sie beweisen allein aber weder einen Anbieterfehler noch einen Defekt deines Routers.",
          "Bleibt das Bild auch bei guter Verbindung unruhig, teste ohne Hintergrundeffekte und schließe nicht benötigte rechenintensive Programme. Beobachte, ob der Computer ungewöhnlich stark beschäftigt ist oder heiß wird. Eine ausgelastete Kameraanwendung, ein Videoeffekt oder ein langsames Gerät kann ähnlich wirken wie zu wenig Bandbreite."
        ]
      },
      {
        "heading": "Änderungen einzeln testen und sauber weitergeben",
        "paragraphs": [
          "Ändere für den nächsten Test nur einen Punkt: erst Kabel statt WLAN, dann gegebenenfalls Videoeffekte. Notiere jeweils das Ergebnis. Prüfe nach dem Gespräch normale Updates der Besprechungssoftware und des Betriebssystems. Installationen oder Neustarts mitten in einer wichtigen Sitzung erzeugen dagegen zusätzliche Unterbrechungen und liefern keinen brauchbaren Vergleich.",
          "Bei einem Firmenrechner gibst du Zeitpunkt, Anwendung, Anschlussart und die beobachteten Qualitätswerte an die IT weiter. Teile keine vertraulichen Gesprächsinhalte oder ungeschwärzten Besprechungsbilder. Ein vorgeschriebener VPN-Tunnel bleibt aktiv, bis die zuständige Stelle einen anderen Test erlaubt. Netzwerkregeln auf Verdacht abzuschalten ist keine verlässliche Reparatur."
        ]
      }
    ],
    "pitfall": "Ein hoher Downloadwert garantiert keine gute Videokonferenz. Ebenso kann ein Problem auf der Gegenseite durch Veränderungen an deinem eigenen WLAN nicht behoben werden.",
    "whenToGetHelp": "Wenn Anrufe auf mehreren Geräten auch per LAN abbrechen oder nur über den beruflichen Zugang stocken, helfen ein dokumentierter Test und die Anrufstatistik bei einer gezielten Netzwerk- oder IT-Prüfung.",
    "relatedSlugs": [
      "lan-oder-wlan",
      "pc-langsam",
      "wlan-reichweite"
    ],
    "servicePath": "/leistungen/netzwerk-wlan/",
    "sources": [
      {
        "title": "Microsoft: Internetverbindung für bessere Teams-Anrufe verbessern",
        "url": "https://support.microsoft.com/en-gb/teams/troubleshooting/how-to-improve-your-internet-connection-for-better-call-quality-in-microsoft-teams"
      },
      {
        "title": "Microsoft: Anruf- und Besprechungsqualität in Teams überwachen",
        "url": "https://support.microsoft.com/en-gb/teams/meetings/monitor-call-and-meeting-quality-in-microsoft-teams"
      }
    ]
  },
  {
    "slug": "powerline-sinnvoll-nutzen",
    "title": "Powerline sinnvoll nutzen: erst am Einsatzort testen",
    "description": "Netzwerk über die Steckdose kann helfen, hängt aber stark vom Stromnetz ab. So testest du Powerline nachvollziehbar und erkennst seine Grenzen.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-powerline-sinnvoll-nutzen",
    "imageAlt": "Geschlossener weißer Powerline-Adapter in einer Wandsteckdose mit angeschlossenem Netzwerkkabel",
    "updated": "2026-11-11",
    "intro": "Ein Netzwerkkabel bis ins Arbeitszimmer fehlt und WLAN kommt dort nur schwach an. Powerline kann Daten über vorhandene Stromleitungen übertragen. Ob das in deiner Wohnung zuverlässig funktioniert, entscheidet allerdings die konkrete Installation. Ein hoher Wert auf der Verpackung ersetzt deshalb keinen Test an den tatsächlich benötigten Steckdosen.",
    "takeaways": [
      "Die Qualität hängt von Leitungswegen, elektrischen Störquellen und den eingesetzten Adaptern ab.",
      "Teste die Powerline-Strecke zunächst per LAN, bevor du zusätzliches WLAN beurteilst.",
      "Wenn die Installation ungeeignet ist, löst ein schneller beworbenes Set das Problem nicht zuverlässig."
    ],
    "sections": [
      {
        "heading": "Den Einsatzbereich und die Grenzen festlegen",
        "paragraphs": [
          "Überlege zuerst, was am Zielort laufen soll: gelegentliches Surfen, tägliche Videogespräche oder große Dateiübertragungen. Notiere den heutigen Zustand und die gewünschte Verbesserung. Powerline ist ein zusätzlicher Übertragungsweg im Heimnetz. Ein gestörter Internetanschluss wird dadurch ebenso wenig repariert wie ein langsamer Computer.",
          "Prüfe vor dem Kauf die Kompatibilität der konkreten Modelle. Gleiche Steckdosenform und ähnliche Produktnamen garantieren keine gemeinsame Powerline-Verbindung. Unterschiedliche technische Familien sind nicht beliebig mischbar. Plane einen Test innerhalb der vereinbarten Rückgabemöglichkeiten und bewerte das Ergebnis an deinem Arbeitsplatz statt nur neben dem Router."
        ]
      },
      {
        "heading": "Die Adapter nach Anleitung verbinden",
        "paragraphs": [
          "Richte das Set zunächst gemäß Herstelleranleitung ein und aktiviere die vorgesehene verschlüsselte Verbindung zwischen deinen Adaptern. Verbinde den ersten Adapter per LAN mit dem Router. Nutze für den regulären Betrieb geeignete Wandsteckdosen direkt; Mehrfachleisten, Verlängerungen oder vorgeschaltete Filter können die Übertragung beeinträchtigen.",
          "Halte die Geräte frei belüftet und verwende nur unbeschädigte, vollständig geschlossene Adapter. Verändere keine Steckdose oder Hausverkabelung. Notiere die verwendeten Plätze und aktualisiere die Adapter über die offiziellen Funktionen. Die Anzeige einer erfolgreichen Kopplung ist zunächst nur der Startpunkt; sie sagt noch nichts über die Alltagstauglichkeit am entfernten Standort."
        ]
      },
      {
        "heading": "Powerline und zusätzliches WLAN getrennt messen",
        "paragraphs": [
          "Schließe am entfernten Adapter zuerst einen Computer per LAN an. Vergleiche einen Download und einen längeren Testanruf mit der direkten Routerverbindung. Falls der Adapter auch WLAN erzeugt, folgt dieser Test danach. So erkennst du, ob bereits die Strecke über das Stromnetz schwach ist oder erst die Funkverbindung am Zielort.",
          "Wiederhole den Versuch zu üblichen Nutzungszeiten und an einer weiteren geeigneten Wandsteckdose. Manche elektrische Geräte beeinflussen die Übertragung. Beobachte Zusammenhänge beim normalen Ein- und Ausschalten eigener, unkritischer Geräte. Kühlschrank, medizinische Technik und andere notwendige Verbraucher bleiben für solche Versuche unangetastet. Ein einzelner Spitzenwert ist weniger aussagekräftig als ein stabiler Arbeitsabend."
        ]
      },
      {
        "heading": "Störungen erkennen und eine Grenze ziehen",
        "paragraphs": [
          "Bei VDSL können sich Powerline und DSL unter ungünstigen Bedingungen gegenseitig stören. Beginnen Routerabbrüche erst mit dem Powerline-Einsatz, notiere die Zeitpunkte und prüfe die Routerereignisse. Vergleiche anschließend einen Zeitraum ohne die eigenen Powerline-Adapter. Das ist ein Hinweis für die weitere Diagnose, kein pauschaler Beweis gegen die Technik.",
          "Wenn mehrere geprüfte Steckdosen keine verlässliche Verbindung liefern, plane eine andere Lösung. Ein fachgerecht geführtes LAN-Kabel mit Access Point kann geeigneter sein. Eingriffe in die Elektroinstallation gehören ausschließlich in fachkundige Hände. Bewahre deine Vergleichswerte auf, damit die nächste Entscheidung auf dem tatsächlichen Bedarf und den räumlichen Möglichkeiten beruht."
        ]
      }
    ],
    "pitfall": "Die beworbene Powerline-Datenrate ist kein Versprechen für den nutzbaren Internetdurchsatz in deiner Wohnung. Auch ein starkes WLAN-Signal am Adapter kann eine schwache Stromnetzstrecke verdecken.",
    "whenToGetHelp": "Bei wiederkehrenden DSL-Abbrüchen, stark schwankenden Ergebnissen oder mehreren Etagen lohnt sich eine Prüfung der Netzwerkwege. Auffällige Erwärmung oder beschädigte Gehäuse erfordern einen Nutzungsstopp und eine fachliche Prüfung.",
    "relatedSlugs": [
      "lan-oder-wlan",
      "mesh-wlan-planen",
      "internet-ausgefallen"
    ],
    "servicePath": "/leistungen/netzwerk-wlan/",
    "sources": [
      {
        "title": "FRITZ!: So funktioniert Powerline",
        "url": "https://fritz.com/blogs/fritz-entdecken/technologie-wie-funktioniert-powerline"
      },
      {
        "title": "FRITZ!: Langsame Powerline-Verbindung untersuchen",
        "url": "https://fritz.com/apps/knowledge-base/fritz-powerline-1220/795_powerline-verbindung-langsam"
      },
      {
        "title": "FRITZ!: Mögliche Störungen zwischen Powerline und VDSL",
        "url": "https://fritz.com/apps/knowledge-base/FRITZ-Box-7580/3441_FRITZ-Box-meldet-Die-Storung-wurde-moglicherweise-durch-Powerline-verursacht/"
      }
    ]
  },
  {
    "slug": "smart-home-netzwerk",
    "title": "Smart-Home-Netzwerk planen: Geräte sicher und erreichbar halten",
    "description": "Plane Sensoren, Lampen und Hubs mit passenden Verbindungen, sinnvollen Netzgrenzen und Updates. Damit Komfort und lokale Bedienung zusammen funktionieren.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-smart-home-netzwerk",
    "imageAlt": "Kleiner Kontaktsensor, runder Smart-Home-Hub und warme Tischleuchte auf einem hellen Sideboard",
    "updated": "2026-11-11",
    "intro": "Die Lampe lässt sich per App schalten, der Sensor meldet sich über einen Hub und die Kamera verlangt ein eigenes Konto. Mit jedem Gerät wächst ein Smart Home anders. Eine kleine Bestandsaufnahme hilft, Abhängigkeiten zu verstehen und sichere Netzgrenzen zu wählen, ohne dabei die gewünschte Bedienung versehentlich zu unterbrechen.",
    "takeaways": [
      "Notiere für jedes Gerät Verbindung, zuständigen Hub, Konto und Updateversorgung.",
      "Ein getrenntes Netz kann sinnvoll sein, muss aber zur lokalen Steuerung passen.",
      "Prüfe vor Erweiterungen, was bei einem Internet- oder Herstellerdienstausfall noch funktioniert."
    ],
    "sections": [
      {
        "heading": "Geräte und Verbindungen in einer Liste erfassen",
        "paragraphs": [
          "Schreibe Modell, Standort und Aufgabe jedes Geräts auf. Ergänze, ob es direkt WLAN nutzt oder über einen passenden Hub verbunden ist. Zigbee und Thread sind beispielsweise keine anderen Namen für dein normales WLAN. Entscheidend ist die vom Hersteller bestätigte Kombination aus Gerät, Zentrale und Steuerungsplattform.",
          "Prüfe bei WLAN-Geräten die unterstützten Funkbänder und Verschlüsselungsverfahren. Manche Modelle benötigen für die Einrichtung bestimmte Bedingungen. Folge dafür der konkreten Anleitung, statt dauerhaft die Sicherheit des ganzen Heimnetzes zu reduzieren. Halte außerdem fest, welches Haushaltsmitglied das Herstellerkonto verwaltet und wie ein berechtigter Zugriff bei einem Handywechsel wiederhergestellt wird."
        ]
      },
      {
        "heading": "Netztrennung mit der Bedienung zusammen planen",
        "paragraphs": [
          "Ein separates Netz kann smarte Geräte von Arbeitsrechnern und persönlichen Dateien abgrenzen. Ein Router-Gastnetz trennt dafür häufig konsequent vom Heimnetz. Genau diese erwünschte Trennung kann aber verhindern, dass ein Handy seinen lokalen Hub findet. Deshalb ist die pauschale Regel, jedes Smart-Home-Gerät einfach ins Gastnetz zu verschieben, zu grob.",
          "Teste zunächst eine unkritische Lampe mit ihrer vorgesehenen Steuerung. Prüfe Einrichtung, alltägliches Schalten und Zugriff nach einem Neustart. Braucht das System lokale Kommunikation zwischen Handy und Hub, muss die Netzplanung das ausdrücklich berücksichtigen. Öffne nicht auf Verdacht Freigaben ins Internet, nur damit eine App ihr Gerät wiederfindet."
        ]
      },
      {
        "heading": "Konten und Updates wartbar halten",
        "paragraphs": [
          "Verwende für Herstellerkonten eigene starke Passwörter und aktiviere eine zusätzliche Anmeldebestätigung, wo sie angeboten wird. Entferne unnötige Freigaben an frühere Nutzer. Prüfe App-Berechtigungen: Ein Gerät soll nur auf Daten zugreifen, die seine gewünschte Funktion tatsächlich benötigt. Richte Wiederherstellungswege ein, bevor der bisherige Kontoinhaber oder sein Telefon ausfällt.",
          "Aktualisiere Router, Hub und Geräte über offizielle Funktionen. Automatische Sicherheitsupdates sind hilfreich, wenn das Produkt sie unterstützt. Prüfe vor einem Neukauf auch, wie der Hersteller die Updateversorgung beschreibt. Ein günstiger Sensor wird langfristig unpraktisch, wenn seine einzige App verschwindet oder bekannte Schwachstellen dauerhaft ungepflegt bleiben."
        ]
      },
      {
        "heading": "Den Alltag und den Ausfallfall testen",
        "paragraphs": [
          "Kontrolliere nach der Einrichtung mehrere Tage lang die tatsächlich benötigten Abläufe. Lässt sich die Lampe weiterhin am Schalter bedienen? Kommen Sensormeldungen am richtigen Konto an? Teste mit unkritischen Geräten, welche lokalen Funktionen ohne Internet verfügbar bleiben. Sicherheitstechnik, medizinische Geräte und notwendige Steuerungen werden dabei nicht zu Versuchsobjekten.",
          "Dokumentiere zum Schluss Geräteliste, Zuständigkeit und den vorgesehenen Weg für Updates. Bewahre Zugangsdaten geschützt auf und entferne ausgemusterte Geräte auch aus Konten und Apps. Bei einem späteren Routerwechsel weißt du dann, welche Systeme erneut gekoppelt werden müssen. So bleibt die Einrichtung verständlich, auch wenn Monate später ein einzelner Baustein ersetzt wird."
        ]
      }
    ],
    "pitfall": "Ein erreichbarer Cloud-Dienst bedeutet nicht, dass lokale Steuerung netzübergreifend funktioniert. Umgekehrt ist eine fehlende lokale Erkennung kein Anlass, Firewallregeln wahllos zu öffnen.",
    "whenToGetHelp": "Wenn mehrere Plattformen, getrennte Netze oder berufliche Geräte im selben Haushalt zusammenkommen, lohnt sich eine dokumentierte Planung. Bei wichtigen Steuerungen sollten Zuverlässigkeit und passende Ersatzbedienung vor der Erweiterung geklärt sein.",
    "relatedSlugs": [
      "gast-wlan",
      "fritzbox-absichern",
      "sicherheitsupdates"
    ],
    "servicePath": "/leistungen/netzwerk-wlan/",
    "sources": [
      {
        "title": "Cybersicherheit NRW: Sicherheit für das Smart Home",
        "url": "https://www.cybersicherheit.nrw/themenportal/sicherheit-fuer-mein-smart-home"
      },
      {
        "title": "FRITZ!: Gastzugang und Trennung vom Heimnetz",
        "url": "https://fritz.com/apps/knowledge-base/fritz-box-7590/294_wlan-gastzugang-in-fritz-box-einrichten/"
      }
    ]
  },
  {
    "slug": "netzwerkdrucker-feste-adresse",
    "title": "Netzwerkdrucker: eine feste Adresse sinnvoll einrichten",
    "description": "Eine DHCP-Reservierung kann die Erreichbarkeit eines Druckers vereinfachen. So identifizierst du das richtige Gerät und vermeidest doppelte IP-Adressen.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-netzwerkdrucker-feste-adresse",
    "imageAlt": "Weißer Netzwerkdrucker und kompakter Router, verbunden mit einem blauen Netzwerkkabel",
    "updated": "2026-11-11",
    "intro": "Gestern hat der Netzwerkdrucker funktioniert, heute zeigt Windows ihn als offline an. Eine veränderte Adresse kann die Ursache sein, muss es aber nicht. Bevor du im Drucker irgendeine feste IP einträgst, prüfe den Verbindungsweg. Oft ist eine dokumentierte DHCP-Reservierung im Router die übersichtlichere Lösung.",
    "takeaways": [
      "Prüfe zuerst Netzwerkverbindung und aktuelle Druckeradresse; offline hat mehrere mögliche Ursachen.",
      "Eine DHCP-Reservierung hält die Adressvergabe beim Router und erfordert DHCP am Drucker.",
      "Teste nach der Änderung auch Standby, Neustart und die tatsächlich verwendeten Druckerwarteschlangen."
    ],
    "sections": [
      {
        "heading": "Den richtigen Drucker im Netzwerk finden",
        "paragraphs": [
          "Drucke am Gerät eine Netzwerkstatusseite oder öffne seine Netzwerkinformationen nach Herstelleranleitung. Notiere IPv4-Adresse, Verbindungsart und die zugehörige MAC-Adresse. Die MAC-Adresse kennzeichnet hier die verwendete Netzwerkschnittstelle. WLAN und LAN desselben Druckers können unterschiedliche Kennungen besitzen. Verwechsle deshalb nicht einen alten Eintrag mit der aktuell genutzten Verbindung.",
          "Vergleiche die Angaben mit der Geräteliste im Router. Prüfe außerdem, ob Computer und Drucker im passenden Netz sind. Ein Drucker im isolierten Gastnetz ist vom Heimrechner häufig nicht erreichbar. Wenn schon die Verbindung fehlt, behebst du zuerst diesen Punkt. Eine reservierte Adresse macht aus einem getrennten Netz keine gemeinsame Druckerumgebung."
        ]
      },
      {
        "heading": "DHCP-Reservierung statt einer geratenen Adresse",
        "paragraphs": [
          "DHCP bedeutet, dass der Router die Netzwerkeinstellungen automatisch verteilt. Mit einer Reservierung ordnet er einer bestimmten Schnittstelle dauerhaft dieselbe Adresse zu. Dafür bleibt der Drucker auf automatischem Adressbezug eingestellt. Eine manuell am Drucker gesetzte Adresse ist ein anderer Ansatz und benötigt eine abgestimmte Planung des Adressbereichs.",
          "Bei einer FRITZ!Box findest du die entsprechende Option in den Einstellungen des Netzwerkgeräts; die genaue Oberfläche hängt vom Modell und Softwarestand ab. Wähle den eindeutig identifizierten Drucker und reserviere möglichst seine bereits korrekt zugewiesene Adresse. Kopiere keine IP aus einer fremden Anleitung. Im eigenen Netz darf die Adresse nicht gleichzeitig einem anderen Gerät gehören."
        ]
      },
      {
        "heading": "Die Druckereinrichtung auf dem Computer kontrollieren",
        "paragraphs": [
          "Notiere vor Änderungen den Namen der funktionierenden Druckerwarteschlange und ihren Anschluss. Manche Installationen suchen das Gerät automatisch, andere verweisen auf eine konkrete IP-Adresse. Wenn sich diese geändert hat, kann die alte Verbindung ins Leere zeigen. Entferne deshalb nicht vorschnell alle Drucker und Treiber, bevor der bestehende Aufbau nachvollziehbar ist.",
          "Unter Windows öffnest du die Einstellungen für Drucker und Scanner. Falls nötig, füge den erreichbaren Netzwerkdrucker dort nach Microsofts Anleitung erneut hinzu. Nutze bevorzugt die regulären Windows-Funktionen beziehungsweise die passende Herstelleranleitung. Eine erfolgreiche Installation prüfst du zuerst mit einer Windows-Testseite und danach mit dem Programm, aus dem du normalerweise druckst."
        ]
      },
      {
        "heading": "Das Ergebnis prüfen und festhalten",
        "paragraphs": [
          "Starte den Drucker kontrolliert neu, warte auf seine Netzwerkbereitschaft und vergleiche die Adresse erneut. Teste danach das Aufwachen aus dem Energiesparmodus sowie einen Druckauftrag von einem zweiten eigenen Gerät. Funktioniert nur ein Computer nicht, liegt die weitere Suche eher bei dessen Warteschlange oder Einrichtung als bei der gemeinsamen Adressvergabe.",
          "Dokumentiere Routereintrag, Druckermodell und Anschlussart, ohne Kennwörter ungeschützt dazuzulegen. Bei einem späteren Wechsel von WLAN auf LAN prüfst du die Reservierung erneut, weil eine andere Schnittstelle verwendet werden kann. Für normales Drucken zu Hause brauchst du keine öffentliche Freigabe des Druckers ins Internet. Ein Fernzugriff wäre eine eigenständige, separat zu planende Aufgabe."
        ]
      }
    ],
    "pitfall": "Eine feste Adresse behebt weder Papierstau noch eine angehaltene Warteschlange oder schwaches WLAN. Eine doppelt vergebene IP kann zusätzlich andere Geräte stören und die Fehlersuche erschweren.",
    "whenToGetHelp": "Wenn der Drucker trotz korrekter Verbindung regelmäßig verschwindet oder mehrere Router und Netze beteiligt sind, helfen Netzwerkstatusseite, Modell und bisherige Druckereinrichtung bei einer gezielten Prüfung.",
    "relatedSlugs": [
      "drucker-offline",
      "dokumente-scannen",
      "gast-wlan"
    ],
    "servicePath": "/leistungen/drucker/",
    "sources": [
      {
        "title": "FRITZ!: Einem Netzwerkgerät dieselbe IP-Adresse zuweisen",
        "url": "https://fritz.com/apps/knowledge-base/FRITZ-Box-6660-Cable/201_Netzwerkgerat-immer-die-gleiche-IP-Adresse-von-FRITZ-Box-zuweisen-lassen/"
      },
      {
        "title": "Microsoft: Netzwerkdrucker in Windows hinzufügen",
        "url": "https://support.microsoft.com/de-de/windows/hardware/printer/add-or-install-a-printer-in-windows"
      }
    ]
  },
  {
    "slug": "ipv4-ipv6-verstehen",
    "title": "IPv4 und IPv6 verstehen: ohne unnötige Netzwerkexperimente",
    "description": "Was die beiden Internetprotokolle im Heimnetz bedeuten, warum DS-Lite beim Fernzugriff relevant ist und weshalb IPv6 nicht pauschal abgeschaltet werden sollte.",
    "category": "wlan",
    "readMinutes": 5,
    "image": "guide-ipv4-ipv6-verstehen",
    "imageAlt": "Kompakter Netzwerkswitch mit blauen, türkisen und grauen Netzwerkkabeln auf einem hellen Tisch",
    "updated": "2026-11-11",
    "intro": "Im Router stehen IPv4, IPv6 und vielleicht DS-Lite. Das klingt nach Einstellungen, die man für schnelleres Internet optimieren müsste. Meist sind es jedoch normale Bestandteile des Anschlusses. Wenn du ihre Aufgabe grob kennst, kannst du Probleme besser beschreiben und vermeidest Änderungen, die funktionierende Anwendungen unbeabsichtigt beeinträchtigen.",
    "takeaways": [
      "IPv4 und IPv6 sind Versionen des Internetprotokolls, keine WLAN-Funkbänder oder Kabeltypen.",
      "Beide Versionen können gleichzeitig verwendet werden; die Anbindung hängt auch vom Anbieter ab.",
      "IPv6 unter Windows nicht pauschal abschalten, sondern die konkrete Verbindungsstörung untersuchen."
    ],
    "sections": [
      {
        "heading": "Adressen und Übertragungsweg auseinanderhalten",
        "paragraphs": [
          "Das Internetprotokoll hilft, Daten zwischen Netzwerken an ihr Ziel zu bringen. IPv4-Adressen erscheinen typischerweise als vier Zahlen mit Punkten; IPv6 verwendet eine längere Schreibweise mit Doppelpunkten. IPv6 stellt einen erheblich größeren Adressraum bereit. Welche Version eine Verbindung nutzt, ist eine andere Frage als die Verbindung per LAN oder WLAN.",
          "Für IPv6 brauchst du daher kein besonderes Netzwerkkabel. Ein Computer kann mehrere Adressen gleichzeitig besitzen, etwa für unterschiedliche Schnittstellen und Zwecke. Die Adresse im eigenen Heimnetz ist außerdem nicht automatisch die von außen erreichbare Anschlussadresse. Kopiere deshalb nicht wahllos einen Wert aus den Windows-Einstellungen in eine Anleitung für externen Zugriff."
        ]
      },
      {
        "heading": "Dual Stack und DS-Lite praktisch einordnen",
        "paragraphs": [
          "Bei Dual Stack stehen grundsätzlich beide Protokollversionen zur Verfügung. Wie dein Anbieter sie bereitstellt, hängt vom Anschluss und Tarif ab. Bei DS-Lite erfolgt der IPv4-Zugang über einen zusätzlichen Vermittlungsweg des Anbieters, während IPv6 verfügbar ist. Normales Surfen kann damit funktionieren, obwohl bestimmte eingehende IPv4-Verbindungen nicht wie erwartet möglich sind.",
          "Das wird beispielsweise beim Zugriff auf das eigene Heimnetz von unterwegs relevant. FRITZ! beschreibt für MyFRITZ! an einem IPv6- beziehungsweise DS-Lite-Anschluss, dass der zugreifende Internetzugang ebenfalls IPv6 unterstützen muss. Eine unpassende Anschlussart lässt sich nicht dadurch beheben, dass du am Heim-PC IPv6 ausschaltest. Kläre den konkreten Zugriff mit Anbieter oder Betreuung."
        ]
      },
      {
        "heading": "Eine Störung mit kleinen Vergleichen eingrenzen",
        "paragraphs": [
          "Prüfe zuerst, was tatsächlich ausfällt: eine einzelne Webseite, ein Firmen-VPN oder der gesamte Internetzugang. Vergleiche denselben Dienst auf einem zweiten eigenen Gerät im gleichen Netz. Notiere Uhrzeit und Fehlermeldung. Wenn nur eine Anwendung betroffen ist, können auch deren Einstellungen, Namensauflösung oder der entfernte Dienst beteiligt sein.",
          "Sieh im Router nach, welche Verbindungen aufgebaut sind, und bewahre relevante Ereignisse für die Fehlersuche auf. Ein Test über einen anderen Zugang kann zusätzliche Hinweise liefern, ist aber kein endgültiger Beweis für eine bestimmte Protokollursache. Veröffentliche keine vollständigen Routeransichten mit Zugangsdaten. Für Unterstützung reichen zunächst Modell, Anschlussart und eine geschwärzte Fehlerbeschreibung."
        ]
      },
      {
        "heading": "Funktionierende Grundeinstellungen erhalten",
        "paragraphs": [
          "Microsoft behandelt IPv6 als wichtigen Windows-Bestandteil und rät vom pauschalen Abschalten oder Entfernen der Bindung ab. Manche Komponenten können sonst beeinträchtigt werden. Lass automatische Einstellungen deshalb zunächst bestehen. Registry-Anleitungen oder fremde Tuning-Skripte sind kein sinnvoller erster Schritt bei einer unklaren Störung, selbst wenn sie schnelle Abhilfe versprechen.",
          "IPv6 macht eine Verbindung weder grundsätzlich schneller noch automatisch sicher. Schutzfunktionen und bewusst eingerichtete Zugriffsregeln bleiben notwendig. Plane einen Zugriff auf NAS, Heimautomation oder andere Geräte als eigene Aufgabe und öffne dafür keine Dienste auf Verdacht. Nach jeder begründeten Änderung sollte geprüft werden, ob die ursprünglich betroffene Anwendung und die übrige normale Nutzung weiterhin funktionieren."
        ]
      }
    ],
    "pitfall": "Wenn ein Dienst nach dem Abschalten einer Protokollversion wieder erreichbar ist, ist damit die eigentliche Ursache noch nicht geklärt. Der Eingriff kann zugleich andere Funktionen verschlechtern.",
    "whenToGetHelp": "Bei Problemen mit Firmen-VPN, eigenem Serverzugriff oder DS-Lite lohnt sich eine Prüfung von Anschlussart und gewünschtem Verbindungsweg. Bring konkrete Fehlermeldungen und Vergleichsergebnisse statt einer Liste zufälliger Routeränderungen mit.",
    "relatedSlugs": [
      "internet-ausgefallen",
      "fritzbox-absichern",
      "lan-oder-wlan"
    ],
    "servicePath": "/leistungen/router-entstoerung/",
    "sources": [
      {
        "title": "IETF: Spezifikation des Internetprotokolls IPv6",
        "url": "https://www.rfc-editor.org/rfc/rfc8200.html"
      },
      {
        "title": "Microsoft: Hinweise zu IPv6 unter Windows",
        "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-ipv6-in-windows"
      },
      {
        "title": "FRITZ!: MyFRITZ! an IPv6- und DS-Lite-Anschlüssen",
        "url": "https://fritz.com/apps/knowledge-base/fritz-box-7590/1497_kann-myfritz-an-einem-internetzugang-mit-ipv6-ds-lite-genutzt-werden"
      }
    ]
  }
]

