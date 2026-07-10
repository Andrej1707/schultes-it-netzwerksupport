export type ServiceIconName = 'laptop' | 'router' | 'globe' | 'bot'

export type ServicePageData = {
  slug: string
  icon: ServiceIconName
  code: string
  title: string
  shortTitle: string
  description: string
  tags: string[]
  seoTitle: string
  seoDescription: string
  keywords: string
  heroLead: string
  heroAccent: string
  heroText: string
  price: string
  audiences: Array<{ label: string; text: string }>
  situations: Array<{ title: string; text: string }>
  solutions: Array<{ title: string; text: string }>
  process: Array<{ title: string; text: string }>
  confidenceTitle: string
  confidenceText: string
  confidencePoints: string[]
  faqs: Array<{ question: string; answer: string }>
  related: string[]
}

export const primaryServicePages: ServicePageData[] = [
  {
    slug: 'pc-system',
    icon: 'laptop',
    code: 'SYS/PC/01',
    title: 'PC & System',
    shortTitle: 'PC-Hilfe',
    description:
      'Wenn Windows streikt, Software nervt oder ein Gerät sauber eingerichtet werden soll: Problem eingrenzen, verständlich erklären, lösen.',
    tags: ['Windows', 'Software', 'Einrichtung'],
    seoTitle: 'PC-Hilfe Ludwigsburg | Computer- & Laptop-Hilfe',
    seoDescription:
      'PC-Hilfe in Ludwigsburg, wenn Computer oder Laptop langsam sind, nicht starten oder Windows Probleme macht. Bei dir vor Ort oder per Fernhilfe.',
    keywords:
      'PC Hilfe Ludwigsburg, Computerhilfe Ludwigsburg, Laptop Hilfe Ludwigsburg, PC geht nicht an, PC langsam, Windows Hilfe, PC Hilfe Senioren',
    heroLead: 'PC-Hilfe ohne Fachchinesisch.',
    heroAccent: 'Damit Technik wieder Alltag wird.',
    heroText:
      'Vom neuen Laptop bis zum hartnäckigen Windows-Problem: Ich schaue strukturiert hin, erkläre jeden sinnvollen Schritt und richte das System so ein, dass du danach wirklich damit arbeiten kannst.',
    price: 'Fernhilfe ab 25 € · Bei dir vor Ort ab 49 €',
    audiences: [
      {
        label: 'Privatpersonen',
        text: 'Praktische Hilfe bei PC, Laptop, Programmen und Geräten im Alltag.',
      },
      {
        label: 'Seniorinnen & Senioren',
        text: 'Ruhige Erklärungen, nachvollziehbare Schritte und kein unnötiger Zeitdruck.',
      },
      {
        label: 'Familien & Angehörige',
        text: 'Sauber eingerichtete Geräte und Unterstützung, die dauerhaft entlastet.',
      },
      {
        label: 'Kleine Betriebe',
        text: 'Schnelle Hilfe, wenn ein Arbeitsplatz oder wichtiges Programm ausfällt.',
      },
    ],
    situations: [
      {
        title: 'Mein PC oder Laptop ist sehr langsam',
        text: 'Programme starten ewig, der Lüfter dreht hoch oder Windows reagiert nur noch zäh. Ich prüfe, was das Gerät wirklich ausbremst.',
      },
      {
        title: 'Mein PC geht nicht mehr an',
        text: 'Der Bildschirm bleibt schwarz, der Rechner startet nur kurz oder Windows fährt nicht mehr vollständig hoch.',
      },
      {
        title: 'Windows zeigt Fehler oder hängt fest',
        text: 'Fehlermeldungen, Updates oder Einstellungen blockieren die tägliche Nutzung.',
      },
      {
        title: 'Drucker oder Zubehör funktionieren nicht',
        text: 'Das Gerät wird nicht gefunden, der Treiber fehlt oder die Verbindung bricht immer wieder ab.',
      },
    ],
    solutions: [
      {
        title: 'Windows-Fehler eingrenzen',
        text: 'Systematisch prüfen, was wirklich stört, statt wahllos Einstellungen zu verändern.',
      },
      {
        title: 'Software einrichten',
        text: 'Programme installieren, aktualisieren und passend für deinen Alltag konfigurieren.',
      },
      {
        title: 'Neue Geräte vorbereiten',
        text: 'Laptop oder PC inklusive Benutzerkonto, Updates und notwendiger Grundausstattung startklar machen.',
      },
      {
        title: 'Drucker & Zubehör verbinden',
        text: 'Typische Verbindungs- und Treiberprobleme mit Druckern und Peripherie nachvollziehbar lösen.',
      },
      {
        title: 'Daten sinnvoll übernehmen',
        text: 'Vorhandene Dokumente und persönliche Dateien nach Absprache strukturiert auf ein neues Gerät übertragen.',
      },
      {
        title: 'System verständlich übergeben',
        text: 'Am Ende weißt du, was gemacht wurde und worauf du künftig achten solltest.',
      },
    ],
    process: [
      {
        title: 'Problem schildern',
        text: 'Ein kurzer Anruf reicht. Du musst keine technische Diagnose vorbereiten.',
      },
      {
        title: 'Passenden Weg wählen',
        text: 'Ich sage ehrlich, ob Fernhilfe genügt oder ein Termin bei dir sinnvoller ist.',
      },
      {
        title: 'Ursache prüfen und lösen',
        text: 'Ich arbeite nachvollziehbar und bespreche zusätzliche Kosten immer vorher.',
      },
      {
        title: 'Sauber übergeben',
        text: 'Du bekommst ein nutzbares System und eine verständliche Erklärung statt offener Fragen.',
      },
    ],
    confidenceTitle: 'Geduldig erklärt. Nicht von oben herab.',
    confidenceText:
      'Technische Hilfe ist nur dann gut, wenn du dich dabei sicher fühlst. Besonders bei wenig Computererfahrung nehme ich mir Zeit für Fragen und erkläre ohne unnötige Abkürzungen.',
    confidencePoints: [
      'Du bestimmst das Tempo',
      'Keine Änderung ohne Erklärung',
      'Kosten vor Zusatzarbeiten abstimmen',
      'Bei dir vor Ort oder per Fernhilfe',
    ],
    faqs: [
      {
        question: 'Hilfst du auch Menschen mit wenig Computererfahrung?',
        answer:
          'Ja. Die Unterstützung richtet sich ausdrücklich auch an Seniorinnen, Senioren und alle, die Technik einfach verständlich erklärt bekommen möchten.',
      },
      {
        question: 'Muss ich den PC zu dir bringen?',
        answer:
          'Nein. Vieles lässt sich per Fernhilfe lösen. Wenn das nicht sinnvoll ist, komme ich für den Termin zu dir nach Hause oder in deinen Betrieb.',
      },
      {
        question: 'Was kostet die PC-Hilfe?',
        answer:
          'Fernhilfe startet ab 25 Euro, der Service bei dir vor Ort ab 49 Euro. Weitere Leistungen werden transparent nach Aufwand berechnet und vorher abgestimmt.',
      },
      {
        question: 'Richtest du auch neue Laptops oder PCs ein?',
        answer:
          'Ja. Dazu können Updates, Benutzerkonten, benötigte Programme, Drucker und die Übernahme vorhandener Dateien gehören.',
      },
      {
        question: 'Kannst du bei jedem Defekt helfen?',
        answer:
          'Ich prüfe zuerst realistisch, ob es sich um ein Software-, Einrichtungs- oder Hardwareproblem handelt. Wenn eine Spezialreparatur nötig ist, sage ich das offen.',
      },
      {
        question: 'Was kann ich tun, wenn mein PC nicht mehr angeht?',
        answer:
          'Trenne nicht wahllos Kabel und öffne das Gerät nicht auf Verdacht. Ruf kurz an und beschreibe, ob noch Lichter, Lüfter oder Töne zu hören sind. Danach klären wir, ob ein Termin bei dir sinnvoll ist.',
      },
      {
        question: 'Warum ist mein PC plötzlich so langsam?',
        answer:
          'Mögliche Ursachen reichen von Updates und überlasteten Programmen bis zu wenig Speicher oder einem technischen Defekt. Ich prüfe erst die Ursache, bevor Programme gelöscht oder Teile empfohlen werden.',
      },
    ],
    related: ['netzwerk-wlan', 'webseiten', 'tools-automation'],
  },
  {
    slug: 'netzwerk-wlan',
    icon: 'router',
    code: 'NET/WLAN/02',
    title: 'Netzwerk & WLAN',
    shortTitle: 'WLAN-Hilfe',
    description:
      'Stabiles WLAN, Router-Konfiguration und ein Heim- oder Firmennetz, das nicht genau dann aussteigt, wenn es gebraucht wird.',
    tags: ['WLAN', 'Router', 'Heimnetz'],
    seoTitle: 'WLAN-Hilfe Ludwigsburg | Router & Internet-Probleme',
    seoDescription:
      'WLAN-Hilfe in Ludwigsburg, wenn Internet ausfällt, WLAN trotz Verbindung nicht geht oder der Router Probleme macht. Hilfe bei dir vor Ort.',
    keywords:
      'WLAN Hilfe Ludwigsburg, WLAN geht nicht, WLAN verbunden kein Internet, Router Hilfe, Fritzbox einrichten, Netzwerk Hilfe, schlechtes WLAN',
    heroLead: 'Stabiles WLAN. Saubere Verbindungen.',
    heroAccent: 'Genau dort, wo du sie brauchst.',
    heroText:
      'Abbrüche, Funklöcher oder ein Router voller rätselhafter Einstellungen kosten Nerven. Ich prüfe Reichweite, Geräte und Konfiguration als Gesamtsystem und setze eine verständliche Lösung um.',
    price: 'Bei dir vor Ort ab 49 € · Analyse nach Aufwand',
    audiences: [
      {
        label: 'Haushalte',
        text: 'Stabiles Internet für Smartphone, Fernseher, Laptop und smarte Geräte.',
      },
      {
        label: 'Homeoffice',
        text: 'Verlässliche Verbindungen für Videotelefonie, VPN und konzentriertes Arbeiten.',
      },
      {
        label: 'Seniorinnen & Senioren',
        text: 'Router und Geräte verständlich eingerichtet, ohne undurchsichtige Menüs.',
      },
      {
        label: 'Kleine Firmen',
        text: 'Pragmatische Netzwerkhilfe für Büros, Praxen und lokale Betriebe.',
      },
    ],
    situations: [
      {
        title: 'Mein WLAN geht nicht mehr',
        text: 'Die Verbindung ist plötzlich weg, bricht ständig ab oder einzelne Geräte kommen nicht mehr ins Netz.',
      },
      {
        title: 'WLAN verbunden, aber kein Internet',
        text: 'Handy oder Laptop zeigen eine WLAN-Verbindung an, trotzdem laden Webseiten und Apps nicht.',
      },
      {
        title: 'WLAN reicht nicht in alle Räume',
        text: 'In Küche, Arbeitszimmer oder Obergeschoss wird das Signal langsam oder bricht regelmäßig weg.',
      },
      {
        title: 'PC, Drucker oder Fernseher verlieren WLAN',
        text: 'Einzelne Geräte tauchen im Netz auf, verschwinden aber immer wieder oder verbinden sich gar nicht.',
      },
    ],
    solutions: [
      {
        title: 'Router konfigurieren',
        text: 'Grundkonfiguration, Updates, WLAN-Namen und sinnvolle Sicherheitseinstellungen sauber setzen.',
      },
      {
        title: 'Reichweite analysieren',
        text: 'Funklöcher und Störquellen prüfen, bevor unnötig neue Hardware gekauft wird.',
      },
      {
        title: 'Mesh & Repeater einrichten',
        text: 'Vorhandene oder passende Erweiterungen richtig platzieren und stabil verbinden.',
      },
      {
        title: 'Geräte ins Netz bringen',
        text: 'Computer, Drucker, Fernseher und weitere Alltagsgeräte zuverlässig verbinden.',
      },
      {
        title: 'Gastnetz strukturieren',
        text: 'Besucher oder private Geräte sinnvoll vom wichtigen Arbeitsbereich trennen.',
      },
      {
        title: 'Kleine Firmennetze ordnen',
        text: 'Bestehende Strukturen dokumentieren, Schwachstellen verstehen und pragmatisch verbessern.',
      },
    ],
    process: [
      {
        title: 'Nutzung verstehen',
        text: 'Welche Räume, Geräte und Anwendungen müssen zuverlässig funktionieren?',
      },
      {
        title: 'Ist-Zustand prüfen',
        text: 'Router, Platzierung, Signal, Verkabelung und Gerätekonfiguration gemeinsam betrachten.',
      },
      {
        title: 'Lösung umsetzen',
        text: 'Erst konfigurieren und optimieren, neue Hardware nur wenn sie wirklich hilft.',
      },
      {
        title: 'Verbindung testen',
        text: 'Die wichtigen Geräte und Bereiche werden abschließend praktisch geprüft.',
      },
    ],
    confidenceTitle: 'Kein Technikverkauf auf Verdacht.',
    confidenceText:
      'Nicht jedes WLAN-Problem braucht sofort einen neuen Router. Entscheidend ist, die tatsächliche Ursache zu finden und die vorhandene Technik sinnvoll einzusetzen.',
    confidencePoints: [
      'Bestehende Geräte zuerst prüfen',
      'Lösung passend zu Wohnung oder Betrieb',
      'Zugangsdaten bleiben bei dir',
      'Zusatzhardware nur nach Absprache',
    ],
    faqs: [
      {
        question: 'Kannst du WLAN-Funklöcher beheben?',
        answer:
          'Ja. Ich prüfe zuerst Platzierung, Störquellen und vorhandene Geräte. Danach lässt sich entscheiden, ob Konfiguration, Mesh, Repeater oder Verkabelung sinnvoll ist.',
      },
      {
        question: 'Richtest du Router verschiedener Anbieter ein?',
        answer:
          'Ich unterstütze bei gängigen Routern und Anschlüssen. Für den Termin sollten vorhandene Zugangsdaten und Geräteinformationen bereitliegen.',
      },
      {
        question: 'Hilfst du auch kleinen Firmen?',
        answer:
          'Ja. Der Fokus liegt auf nachvollziehbaren Heim- und Kleinfirmennetzen in Ludwigsburg, beispielsweise für Büros, Praxen und lokale Betriebe.',
      },
      {
        question: 'Was kostet die WLAN-Hilfe bei mir vor Ort?',
        answer:
          'Der Service bei dir vor Ort beginnt ab 49 Euro. Umfang, mögliche Hardware und weitere Kosten werden vor zusätzlichen Arbeiten transparent besprochen.',
      },
      {
        question: 'Muss ich einen neuen Router kaufen?',
        answer:
          'Oft nicht. Zuerst wird geprüft, ob Standort, Einstellungen oder vorhandene Erweiterungen verbessert werden können.',
      },
      {
        question: 'Was tun, wenn WLAN verbunden ist, aber kein Internet geht?',
        answer:
          'Das kann am Anschluss, Router, DNS, einer Störung oder nur an einem einzelnen Gerät liegen. Ich grenze systematisch ein, ob das Problem das ganze Netzwerk oder nur Handy, Laptop oder PC betrifft.',
      },
      {
        question: 'Warum geht das WLAN am Handy, aber nicht am PC?',
        answer:
          'Dann liegt die Ursache häufig am Computer, WLAN-Adapter, Treiber oder an gespeicherten Netzwerkeinstellungen. Das lässt sich meist prüfen, ohne den gesamten Router neu einzurichten.',
      },
    ],
    related: ['pc-system', 'tools-automation', 'webseiten'],
  },
  {
    slug: 'webseiten',
    icon: 'globe',
    code: 'WEB/LOCAL/03',
    title: 'Webseiten',
    shortTitle: 'Webdesign',
    description:
      'Schnelle, moderne Webseiten für lokale Unternehmen. Klar positioniert, mobil stark und ohne austauschbaren Baukasten-Look.',
    tags: ['Konzept', 'Frontend', 'Launch'],
    seoTitle: 'Webdesign Ludwigsburg | Webseiten für Betriebe',
    seoDescription:
      'Moderne Webseiten aus Ludwigsburg für Selbstständige, lokale Firmen und Vereine. Individuell, mobil, schnell und suchmaschinenfreundlich umgesetzt.',
    keywords:
      'Webdesign Ludwigsburg, Webseite erstellen lassen, Firmenwebseite, Website lokale Unternehmen, responsive Webdesign, SEO Ludwigsburg',
    heroLead: 'Eine Website, die nach dir aussieht.',
    heroAccent: 'Und für Kunden sofort verständlich ist.',
    heroText:
      'Eine gute Website muss nicht laut sein. Sie muss Vertrauen schaffen, dein Angebot klar erklären und auf jedem Gerät funktionieren. Von der Struktur bis zum Launch entsteht eine individuelle, schnelle Präsenz.',
    price: 'Individuelles Angebot · Umfang vorher klar definiert',
    audiences: [
      {
        label: 'Selbstständige',
        text: 'Eine klare digitale Visitenkarte, die Kompetenz und Persönlichkeit verbindet.',
      },
      {
        label: 'Lokale Betriebe',
        text: 'Leistungen, Standort und Kontakt so darstellen, dass Kundinnen und Kunden schnell handeln können.',
      },
      {
        label: 'Vereine & Initiativen',
        text: 'Informationen übersichtlich bündeln und auch auf dem Smartphone gut zugänglich machen.',
      },
      {
        label: 'Neugründungen',
        text: 'Von Anfang an mit einer glaubwürdigen, technisch sauberen Online-Präsenz starten.',
      },
    ],
    situations: [
      {
        title: 'Die alte Seite wirkt nicht mehr zeitgemäß',
        text: 'Inhalte sind schwer zu finden, mobil zu klein oder optisch nicht mehr passend zum Betrieb.',
      },
      {
        title: 'Es gibt noch gar keine Website',
        text: 'Google-Profil und Empfehlungen funktionieren, aber eine verlässliche eigene Anlaufstelle fehlt.',
      },
      {
        title: 'Das Angebot ist online nicht verständlich',
        text: 'Besucher sehen viele Informationen, wissen aber nicht, was der nächste Schritt ist.',
      },
      {
        title: 'Der Baukasten sieht aus wie jeder andere',
        text: 'Die Seite erfüllt ihren Zweck, transportiert aber weder Qualität noch Persönlichkeit.',
      },
    ],
    solutions: [
      {
        title: 'Struktur & Positionierung',
        text: 'Zielgruppen, Leistungen und Seitenaufbau zuerst klären, bevor Gestaltung entsteht.',
      },
      {
        title: 'Individuelles Interface',
        text: 'Ein Erscheinungsbild entwickeln, das zum Betrieb passt und nicht nach Vorlage aussieht.',
      },
      {
        title: 'Mobile Umsetzung',
        text: 'Navigation, Inhalte und Kontaktwege für kleine Displays konsequent mitdenken.',
      },
      {
        title: 'Lokale SEO-Basis',
        text: 'Saubere Titel, Beschreibungen, strukturierte Daten und technische Crawlbarkeit vorbereiten.',
      },
      {
        title: 'Performance & Datenschutz',
        text: 'Schnelle Assets, lokale Schriften und möglichst wenige externe Abhängigkeiten einsetzen.',
      },
      {
        title: 'Deployment & Übergabe',
        text: 'Domain, Hosting und Veröffentlichung nachvollziehbar einrichten und dokumentieren.',
      },
    ],
    process: [
      {
        title: 'Ziele klären',
        text: 'Wer soll die Seite besuchen und welche Handlung soll möglichst einfach werden?',
      },
      {
        title: 'Inhalte ordnen',
        text: 'Leistungen, Vertrauen, Kontakt und lokale Relevanz in eine klare Dramaturgie bringen.',
      },
      {
        title: 'Design & Build',
        text: 'Die Oberfläche im Browser umsetzen und früh auf Desktop und Mobil prüfen.',
      },
      {
        title: 'Launch kontrollieren',
        text: 'Domain, Metadaten, Formate, Links und Darstellung vor Veröffentlichung testen.',
      },
    ],
    confidenceTitle: 'Kein Baukasten-Zirkus. Kein SEO-Nebel.',
    confidenceText:
      'Du bekommst eine Seite, deren Struktur und Technik nachvollziehbar bleiben. Sichtbarkeit wird sauber vorbereitet, aber niemals mit unrealistischen Google-Versprechen verkauft.',
    confidencePoints: [
      'Individuelles Design statt Vorlage',
      'Responsive und barrierearm gedacht',
      'Technische SEO-Grundlage inklusive',
      'Klare Abstimmung vor Zusatzaufwand',
    ],
    faqs: [
      {
        question: 'Für wen erstellst du Webseiten?',
        answer:
          'Der Schwerpunkt liegt auf Selbstständigen, kleinen Firmen, lokalen Betrieben, Vereinen und Projekten aus Ludwigsburg und Umgebung.',
      },
      {
        question: 'Ist die Website auch für Smartphones optimiert?',
        answer:
          'Ja. Mobile Darstellung, lesbare Inhalte, erreichbare Bedienelemente und klare Kontaktwege gehören von Anfang an zur Umsetzung.',
      },
      {
        question: 'Kümmerst du dich um Domain und Veröffentlichung?',
        answer:
          'Ja, Domain-Anbindung, Hosting und Deployment können Teil des Projekts sein. Zugangsdaten und Eigentum bleiben transparent bei dir.',
      },
      {
        question: 'Ist Suchmaschinenoptimierung enthalten?',
        answer:
          'Die technische SEO-Basis ist enthalten: klare Seitenstruktur, individuelle Metadaten, Canonicals, strukturierte Daten, Sitemap und Crawlbarkeit. Rankings selbst kann niemand seriös garantieren.',
      },
      {
        question: 'Was kostet eine neue Website?',
        answer:
          'Das hängt von Umfang, Inhalten und Funktionen ab. Nach einem kurzen Gespräch erhältst du ein nachvollziehbares Angebot statt eines künstlichen Pauschalpakets.',
      },
    ],
    related: ['tools-automation', 'pc-system', 'netzwerk-wlan'],
  },
  {
    slug: 'tools-automation',
    icon: 'bot',
    code: 'AUT/TOOLS/04',
    title: 'Tools & Automation',
    shortTitle: 'Automation',
    description:
      'Kleine digitale Werkzeuge, Automationen und moderne KI-/Agenten-Projekte, die wiederkehrende Arbeit wirklich abnehmen.',
    tags: ['Workflows', 'KI', 'Prototypen'],
    seoTitle: 'Automatisierung Ludwigsburg | Tools für Betriebe',
    seoDescription:
      'Tools und Automatisierung in Ludwigsburg für Selbstständige und kleine Firmen: Abläufe vereinfachen, Daten ordnen und Prototypen praxisnah entwickeln.',
    keywords:
      'Automatisierung Ludwigsburg, individuelle Software kleine Unternehmen, Workflow Automation, KI Tools, Prozessautomatisierung, Prototyp Entwicklung',
    heroLead: 'Wiederholungen raus. Klarheit rein.',
    heroAccent: 'Tools, die zu deinem Ablauf passen.',
    heroText:
      'Wenn Informationen ständig kopiert, sortiert oder aus Dokumenten übertragen werden, lohnt sich ein genauer Blick. Ich entwickle kleine Werkzeuge und Prototypen, die konkrete Arbeit vereinfachen – nicht bloß Technik demonstrieren.',
    price: 'Erstgespräch & Machbarkeit · Angebot nach Umfang',
    audiences: [
      {
        label: 'Selbstständige',
        text: 'Wiederkehrende Büroarbeit reduzieren und Informationen besser im Griff behalten.',
      },
      {
        label: 'Kleine Unternehmen',
        text: 'Pragmatische Werkzeuge, ohne direkt ein schweres Softwaresystem einzuführen.',
      },
      {
        label: 'Büro & Verwaltung',
        text: 'Dokumente, Listen und wiederkehrende Übertragungen nachvollziehbarer bearbeiten.',
      },
      {
        label: 'Ideengeber',
        text: 'Eine digitale Produktidee als fokussierten Prototyp testen, bevor groß investiert wird.',
      },
    ],
    situations: [
      {
        title: 'Daten werden immer wieder übertragen',
        text: 'Informationen wandern manuell zwischen E-Mails, PDFs, Tabellen und anderen Programmen.',
      },
      {
        title: 'Ein Ablauf hängt an Einzelwissen',
        text: 'Nur eine Person kennt alle Schritte und muss ständig dieselben Entscheidungen treffen.',
      },
      {
        title: 'Standardsoftware ist zu groß',
        text: 'Das eigentliche Problem ist klein, vorhandene Lösungen sind aber teuer oder unnötig komplex.',
      },
      {
        title: 'Eine Idee soll schnell getestet werden',
        text: 'Bevor Budget in ein Produkt fließt, braucht es einen funktionierenden, ehrlichen Prototyp.',
      },
    ],
    solutions: [
      {
        title: 'Workflow analysieren',
        text: 'Den echten Ablauf beobachten und den sinnvollsten Automationspunkt identifizieren.',
      },
      {
        title: 'Kleine interne Tools',
        text: 'Fokussierte Anwendungen für einen klaren Zweck statt überladener Gesamtsysteme bauen.',
      },
      {
        title: 'Dokumente auswerten',
        text: 'Strukturierte Informationen aus geeigneten Dateien erfassen und für den nächsten Schritt vorbereiten.',
      },
      {
        title: 'Daten ordnen',
        text: 'Verstreute Informationen zusammenführen, prüfen und nachvollziehbar bereitstellen.',
      },
      {
        title: 'KI sinnvoll prüfen',
        text: 'Nur dort einsetzen, wo sie einen messbaren Nutzen bringt und Fehler kontrollierbar bleiben.',
      },
      {
        title: 'Prototypen entwickeln',
        text: 'Die wichtigste Funktion früh nutzbar machen und mit echten Fällen testen.',
      },
    ],
    process: [
      {
        title: 'Ablauf zeigen',
        text: 'Du erklärst den heutigen Weg mit echten Beispielen, nicht mit technischen Lastenheften.',
      },
      {
        title: 'Nutzen bewerten',
        text: 'Wir prüfen Aufwand, Risiken und ob Automation hier überhaupt die beste Antwort ist.',
      },
      {
        title: 'Klein bauen',
        text: 'Zuerst entsteht der kleinstmögliche funktionierende Kern für den wichtigsten Anwendungsfall.',
      },
      {
        title: 'Real testen',
        text: 'Der Prototyp wird mit echten Daten und Ausnahmefällen geprüft, bevor er wachsen darf.',
      },
    ],
    confidenceTitle: 'Automation mit Handbremse an den richtigen Stellen.',
    confidenceText:
      'Nicht jeder Klick muss verschwinden. Kritische Entscheidungen bleiben nachvollziehbar, sensible Daten werden bewusst behandelt und KI-Ausgaben nicht blind als Wahrheit übernommen.',
    confidencePoints: [
      'Nutzen vor Techniktrend',
      'Menschliche Kontrolle einplanen',
      'Datenwege transparent halten',
      'Klein starten und real testen',
    ],
    faqs: [
      {
        question: 'Welche Abläufe lassen sich automatisieren?',
        answer:
          'Besonders interessant sind wiederkehrende, regelbasierte Schritte wie Sortieren, Übertragen, Vorbereiten oder Zusammenführen von Informationen.',
      },
      {
        question: 'Brauche ich dafür künstliche Intelligenz?',
        answer:
          'Nein. Viele gute Automationen funktionieren zuverlässiger mit klaren Regeln. KI wird nur eingesetzt, wenn sie für den konkreten Fall einen echten Vorteil bietet.',
      },
      {
        question: 'Entwickelst du auch kleine Prototypen?',
        answer:
          'Ja. Ein fokussierter Prototyp ist oft der beste Weg, Nutzen, Bedienung und technische Machbarkeit vor einer größeren Investition zu prüfen.',
      },
      {
        question: 'Eignet sich das auch für kleine Unternehmen?',
        answer:
          'Gerade dort können kleine, passende Werkzeuge sinnvoller sein als große Standardplattformen. Entscheidend ist ein klarer, häufig wiederkehrender Anwendungsfall.',
      },
      {
        question: 'Wie wird der Preis festgelegt?',
        answer:
          'Nach einem Gespräch werden Umfang, Datenquellen, Risiken und gewünschtes Ergebnis eingegrenzt. Darauf basiert ein transparentes individuelles Angebot.',
      },
    ],
    related: ['webseiten', 'pc-system', 'netzwerk-wlan'],
  },
]

type TopicPageInput = {
  slug: string
  icon: ServiceIconName
  code: string
  title: string
  shortTitle: string
  description: string
  tags: string[]
  seoTitle: string
  seoDescription: string
  keywords: string
  heroLead: string
  heroAccent: string
  heroText: string
  price: string
  audienceHint: string
  situations: ServicePageData['situations']
  solutions: ServicePageData['solutions']
  confidenceTitle: string
  confidenceText: string
  confidencePoints: string[]
  faqs: ServicePageData['faqs']
  related: string[]
}

function topicPage(input: TopicPageInput): ServicePageData {
  return {
    ...input,
    audiences: [
      {
        label: 'Privatpersonen',
        text: `${input.audienceHint} Verständlich erklärt, ohne dass du vorher Fachbegriffe kennen musst.`,
      },
      {
        label: 'Seniorinnen & Senioren',
        text: 'Ruhige Unterstützung, klare Schritte und genug Zeit für Rückfragen.',
      },
      {
        label: 'Familien & Angehörige',
        text: 'Hilfe, wenn Technik für Eltern, Großeltern oder Kinder zuverlässig laufen soll.',
      },
      {
        label: 'Kleine Betriebe',
        text: 'Pragmatische Hilfe für einzelne Arbeitsplätze, kleine Büros und lokale Abläufe.',
      },
    ],
    process: [
      {
        title: 'Kurz schildern',
        text: 'Du beschreibst in normalen Worten, was nicht klappt. Eine fertige Diagnose ist nicht nötig.',
      },
      {
        title: 'Sinnvollen Weg wählen',
        text: 'Ich kläre, ob Fernwartung reicht oder ob ein Termin bei dir vor Ort besser ist.',
      },
      {
        title: 'Sauber prüfen',
        text: 'Ich ändere nicht wahllos Einstellungen, sondern prüfe Schritt für Schritt die wahrscheinliche Ursache.',
      },
      {
        title: 'Verständlich übergeben',
        text: 'Am Ende weißt du, was gemacht wurde, worauf du achten solltest und wann du dich wieder melden kannst.',
      },
    ],
  }
}

export const topicPages: ServicePageData[] = [
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
      'Installation in Ludwigsburg: Geräte, Programme, Treiber und Zubehör verständlich einrichten, testen und bei dir vor Ort oder per Fernhilfe erklären.',
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
      'IT Consulting in Ludwigsburg für Privatpersonen und kleine Betriebe: Kaufberatung, Technikplanung, Netzwerk und digitale Abläufe verständlich einordnen.',
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
  topicPage({
    slug: 'fernwartung',
    icon: 'bot',
    code: 'TOP/REM/10',
    title: 'Fernwartung',
    shortTitle: 'Fernwartung',
    description:
      'Sichere Fernhilfe mit RustDesk bei PC-, Windows-, E-Mail- und Programmproblemen, wenn kein Vor-Ort-Termin nötig ist.',
    tags: ['Remote', 'RustDesk', 'Schnellhilfe'],
    seoTitle: 'Fernwartung Ludwigsburg | Remote IT-Hilfe',
    seoDescription:
      'Fernwartung und Remote IT-Hilfe in Ludwigsburg: PC-, Windows-, E-Mail- und Programmprobleme schnell prüfen, wenn Hilfe aus der Ferne ausreicht.',
    keywords:
      'Fernwartung Ludwigsburg, Remote IT Hilfe, PC Fernhilfe, Windows Fernwartung, Computerhilfe online, IT Support remote',
    heroLead: 'Hilfe aus der Ferne.',
    heroAccent: 'Wenn Vor-Ort nicht nötig ist.',
    heroText:
      'Viele Software-, Windows- oder E-Mail-Probleme lassen sich per Fernwartung schneller klären. Dafür brauchst du RustDesk auf deinem Windows-PC. Du bleibst am Gerät und siehst, was passiert.',
    price: 'Fernhilfe ab 25 €',
    audienceHint: 'Für schnelle Hilfe bei Problemen, die ohne Hardware-Anfassen lösbar sind.',
    situations: [
      {
        title: 'Ein Programm macht Probleme',
        text: 'Fehlermeldungen, Einstellungen oder Updates können oft per Fernhilfe geprüft werden.',
      },
      {
        title: 'E-Mail oder Outlook spinnt',
        text: 'Konten, Servermeldungen oder Standardprogramme lassen sich häufig remote einrichten.',
      },
      {
        title: 'Windows braucht Unterstützung',
        text: 'Einstellungen, Updates oder kleinere Fehler können gemeinsam geprüft werden.',
      },
      {
        title: 'Du möchtest nicht auf einen Termin warten',
        text: 'Wenn es remote sinnvoll ist, kann schneller mit der Prüfung gestartet werden.',
      },
    ],
    solutions: [
      {
        title: 'Sichere Verbindung erklären',
        text: 'Du bekommst erklärt, wie RustDesk gestartet wird und wie du die Fernwartung jederzeit beenden kannst.',
      },
      {
        title: 'RustDesk herunterladen',
        text: 'Die Windows-Datei liegt direkt auf der Website bereit. Starte sie erst, wenn du mit Andrej sprichst.',
      },
      {
        title: 'Problem gemeinsam prüfen',
        text: 'Ich sehe den Bildschirm nur mit deiner Zustimmung und arbeite nachvollziehbar.',
      },
      {
        title: 'Programme und Einstellungen richten',
        text: 'Viele Softwarethemen lassen sich direkt im laufenden System bearbeiten.',
      },
      {
        title: 'Grenzen erkennen',
        text: 'Wenn Hardware, WLAN oder Anschluss betroffen sind, empfehle ich Vor-Ort-Hilfe.',
      },
      {
        title: 'Erklärung währenddessen',
        text: 'Du kannst jederzeit fragen, was gerade passiert.',
      },
      {
        title: 'Direkt beenden können',
        text: 'Du behältst die Kontrolle über die Verbindung.',
      },
    ],
    confidenceTitle: 'Fernwartung nur mit deiner Kontrolle.',
    confidenceText:
      'Remote-Hilfe soll sich sicher anfühlen. Du musst nichts blind freigeben und kannst die Verbindung jederzeit beenden.',
    confidencePoints: [
      'Nur mit deiner Zustimmung',
      'Ideal für Software und E-Mail',
      'Keine Passwörter per Nachricht',
      'Vor-Ort, wenn remote nicht passt',
    ],
    faqs: [
      {
        question: 'Ist Fernwartung sicher?',
        answer:
          'Ja, wenn sie bewusst gestartet wird und du die Kontrolle behältst. Lade RustDesk nur von dieser Website oder der offiziellen Quelle und nenne ID oder Code nur, wenn du aktiv mit Andrej sprichst.',
      },
      {
        question: 'Muss ich RustDesk installieren?',
        answer:
          'Für normale Fernhilfe reicht die bereitgestellte RustDesk-Datei in der Regel zum Starten. Für bestimmte Admin- oder Sicherheitsfenster kann zusätzliche Freigabe oder Installation nötig sein.',
      },
      {
        question: 'Welche Probleme gehen per Fernwartung?',
        answer:
          'Typisch sind Windows-Einstellungen, Programme, E-Mail, Office und kleinere Softwareprobleme.',
      },
      {
        question: 'Wann reicht Fernwartung nicht?',
        answer:
          'Bei Hardwaredefekten, WLAN-Reichweite, Verkabelung oder Routerstandort ist vor Ort meist sinnvoller.',
      },
    ],
    related: ['programme', 'email', 'windows-einrichten'],
  }),
  topicPage({
    slug: 'it-notdienst',
    icon: 'router',
    code: 'TOP/SOS/11',
    title: 'IT-Notdienst',
    shortTitle: 'IT-Notdienst',
    description:
      'Schnelle IT-Hilfe, wenn PC, Internet, E-Mail oder ein wichtiger Arbeitsplatz plötzlich ausfällt.',
    tags: ['Schnellhilfe', 'Ausfall', 'Priorität'],
    seoTitle: 'IT-Notdienst Ludwigsburg | Schnelle PC- & WLAN-Hilfe',
    seoDescription:
      'IT-Notdienst in Ludwigsburg: schnelle Hilfe bei PC-Ausfall, Internetproblem, E-Mail-Störung oder dringendem Technikproblem. Vor Ort oder per Fernhilfe.',
    keywords:
      'IT Notdienst Ludwigsburg, PC Notdienst, Computer Notdienst Ludwigsburg, WLAN Notdienst, schnelle IT Hilfe, Internet Ausfall Hilfe',
    heroLead: 'Wenn Technik jetzt ausfällt.',
    heroAccent: 'Schnell klären, was möglich ist.',
    heroText:
      'Nicht jedes Problem ist ein echter Notfall, aber manche Technik muss schnell wieder laufen. Ich priorisiere Ausfälle ehrlich und sage direkt, ob Fernhilfe oder Vor-Ort-Hilfe sinnvoll ist.',
    price: 'Schnellhilfe nach Verfügbarkeit · Kosten vorher klären',
    audienceHint: 'Für dringende Fälle, bei denen PC, Internet, E-Mail oder Arbeitsplatz gerade blockieren.',
    situations: [
      {
        title: 'PC oder Laptop fällt plötzlich aus',
        text: 'Ein wichtiges Gerät startet nicht oder ist für Arbeit, Schule oder Alltag sofort nötig.',
      },
      {
        title: 'Internet oder Router ist weg',
        text: 'Homeoffice, Telefonie oder wichtige Geräte hängen am Anschluss.',
      },
      {
        title: 'E-Mail funktioniert nicht',
        text: 'Wichtige Nachrichten können nicht gesendet oder empfangen werden.',
      },
      {
        title: 'Ein kleiner Betrieb steht',
        text: 'Ein Arbeitsplatz, Drucker oder Netzwerkproblem blockiert den Ablauf.',
      },
    ],
    solutions: [
      {
        title: 'Dringlichkeit einschätzen',
        text: 'Kurz klären, was betroffen ist und ob sofortige Hilfe realistisch ist.',
      },
      {
        title: 'Erste sichere Schritte',
        text: 'Nur sinnvolle Basics prüfen, ohne Daten oder Geräte zu gefährden.',
      },
      {
        title: 'Fernhilfe prüfen',
        text: 'Wenn möglich, schnell remote starten und die Ursache eingrenzen.',
      },
      {
        title: 'Vor-Ort-Termin klären',
        text: 'Wenn Hardware, Router oder Verkabelung betroffen sind, wird ein Termin vor Ort sinnvoll.',
      },
      {
        title: 'Arbeitsfähigkeit priorisieren',
        text: 'Erst wieder nutzbar machen, danach Ursachen und dauerhafte Lösung besprechen.',
      },
      {
        title: 'Grenzen offen sagen',
        text: 'Wenn Spezialreparatur oder Anbieter nötig ist, bekommst du das klar gesagt.',
      },
    ],
    confidenceTitle: 'Dringend heißt: ehrlich priorisieren.',
    confidenceText:
      'Ich verspreche keine Wunder rund um die Uhr. Aber wenn es dringend ist, klären wir schnell, was machbar und sinnvoll ist.',
    confidencePoints: [
      'Schnelle Ersteinschätzung',
      'Vor Ort oder Fernhilfe',
      'Kosten vorher ansprechen',
      'Keine riskanten Experimente',
    ],
    faqs: [
      {
        question: 'Bietest du einen echten 24/7-Notdienst?',
        answer:
          'Nein, nicht als garantierten 24/7-Dienst. Ich biete schnelle Hilfe nach Verfügbarkeit und sage ehrlich, was zeitlich möglich ist.',
      },
      {
        question: 'Was soll ich bei einem IT-Notfall zuerst tun?',
        answer:
          'Keine hektischen Experimente. Notiere, was ausgefallen ist, ob andere Geräte betroffen sind, und ruf kurz an.',
      },
      {
        question: 'Hilfst du kleinen Betrieben bei Ausfällen?',
        answer:
          'Ja, besonders bei einzelnen Arbeitsplätzen, Druckern, E-Mail, Netzwerk oder Routerproblemen.',
      },
    ],
    related: ['fernwartung', 'router-entstoerung', 'pc-system'],
  }),
  topicPage({
    slug: 'pc-langsam',
    icon: 'laptop',
    code: 'TOP/SLOW/12',
    title: 'PC langsam',
    shortTitle: 'PC langsam',
    description:
      'Hilfe in Ludwigsburg, wenn PC oder Laptop langsam geworden sind, Programme ewig laden oder Windows nur noch träge reagiert.',
    tags: ['Langsam', 'Windows', 'Analyse'],
    seoTitle: 'PC langsam Ludwigsburg | Laptop schneller machen',
    seoDescription:
      'PC langsam in Ludwigsburg? Hilfe bei trägem Laptop, langen Ladezeiten oder hängendem Windows. Ursache prüfen, verständlich erklären und sinnvoll lösen.',
    keywords:
      'PC langsam Ludwigsburg, Laptop langsam, Computer langsam, Windows langsam, PC schneller machen, Laptop hängt, PC Hilfe Ludwigsburg',
    heroLead: 'Wenn der PC nur noch kriecht.',
    heroAccent: 'Erst Ursache finden, dann aufräumen.',
    heroText:
      'Ein langsamer PC muss nicht sofort ersetzt werden. Ich prüfe, ob Windows, Programme, Autostarts, Speicher, Updates oder Hardware die Ursache sind und erkläre dir verständlich, was wirklich sinnvoll ist.',
    price: 'Fernhilfe ab 25 € · Bei dir vor Ort ab 49 €',
    audienceHint: 'Für alle, deren PC oder Laptop im Alltag zu langsam geworden ist.',
    situations: [
      {
        title: 'Programme starten sehr langsam',
        text: 'Browser, Office oder E-Mail brauchen ewig, obwohl früher alles schneller war.',
      },
      {
        title: 'Windows hängt nach dem Start',
        text: 'Nach dem Einschalten dauert es lange, bis man wirklich arbeiten kann.',
      },
      {
        title: 'Der Laptop wird laut oder heiß',
        text: 'Der Lüfter dreht hoch, das Gerät reagiert träge oder friert zwischendurch ein.',
      },
      {
        title: 'Du willst nichts Falsches löschen',
        text: 'Unklare Programme, volle Laufwerke oder Warnungen sollen sauber eingeordnet werden.',
      },
    ],
    solutions: [
      {
        title: 'Systemauslastung prüfen',
        text: 'Schauen, ob Programme, Updates, Speicher oder Hintergrundprozesse das System bremsen.',
      },
      {
        title: 'Autostarts einordnen',
        text: 'Unnötige Startprogramme erkennen, ohne wichtige Funktionen blind abzuschalten.',
      },
      {
        title: 'Speicherplatz bewerten',
        text: 'Volle Laufwerke und alte Daten strukturiert ansehen, bevor etwas gelöscht wird.',
      },
      {
        title: 'Updates und Treiber prüfen',
        text: 'Windows, Programme und Geräte auf offensichtliche Konflikte kontrollieren.',
      },
      {
        title: 'Hardware realistisch einschätzen',
        text: 'Wenn RAM, SSD oder Alter des Geräts eine Rolle spielen, bekommst du eine ehrliche Empfehlung.',
      },
      {
        title: 'Alltagstest machen',
        text: 'Am Ende zählt, ob Browser, E-Mail und deine wichtigen Programme wieder nutzbar laufen.',
      },
    ],
    confidenceTitle: 'Nicht jeder langsame PC ist kaputt.',
    confidenceText:
      'Viele Geräte werden durch Software, Autostarts, volle Laufwerke oder Updates ausgebremst. Ich prüfe erst, bevor teure Ersatzteile oder ein neuer PC empfohlen werden.',
    confidencePoints: [
      'Keine blind gelöschten Daten',
      'Erst Analyse, dann Empfehlung',
      'Verständlich für Senioren',
      'Vor Ort oder per Fernhilfe',
    ],
    faqs: [
      {
        question: 'Kann man einen alten PC wieder schneller machen?',
        answer:
          'Oft ja, zumindest spürbar. Ob es sich lohnt, hängt von Alter, Speicher, Laufwerk und Zustand ab. Ich sage ehrlich, wenn ein Upgrade oder Ersatz sinnvoller ist.',
      },
      {
        question: 'Löschst du einfach Programme?',
        answer:
          'Nein. Ich prüfe zuerst, was gebraucht wird und erkläre dir, was entfernt oder deaktiviert werden kann.',
      },
      {
        question: 'Geht die Prüfung per Fernwartung?',
        answer:
          'Bei vielen Software-Ursachen ja. Wenn Hardware, Überhitzung oder Geräusche wichtig sind, ist ein Termin bei dir vor Ort besser.',
      },
      {
        question: 'Was kann ich vorher selbst sicher versuchen?',
        answer:
          'Starte den PC einmal normal neu und notiere, wann er besonders langsam ist: direkt nach dem Start, im Browser, bei E-Mail oder bei bestimmten Programmen.',
      },
    ],
    related: ['pc-system', 'programme', 'windows-einrichten'],
  }),
  topicPage({
    slug: 'pc-startet-nicht',
    icon: 'laptop',
    code: 'TOP/BOOT/13',
    title: 'PC startet nicht',
    shortTitle: 'Startproblem',
    description:
      'Hilfe in Ludwigsburg, wenn PC oder Laptop nicht mehr starten, der Bildschirm schwarz bleibt oder Windows nicht hochfährt.',
    tags: ['Startet nicht', 'Windows', 'Laptop'],
    seoTitle: 'PC startet nicht Ludwigsburg | Laptop geht nicht an',
    seoDescription:
      'PC startet nicht in Ludwigsburg? Hilfe bei schwarzem Bildschirm, Laptop geht nicht an, Windows bootet nicht oder Rechner startet nur kurz.',
    keywords:
      'PC startet nicht Ludwigsburg, Laptop geht nicht an, Computer geht nicht an, Bildschirm bleibt schwarz, Windows startet nicht, PC Hilfe Ludwigsburg',
    heroLead: 'Schwarzer Bildschirm. Kein Plan.',
    heroAccent: 'Ruhig bleiben, sauber eingrenzen.',
    heroText:
      'Wenn ein PC nicht startet, ist Panik selten hilfreich. Ich prüfe mit dir, ob Strom, Bildschirm, Windows, Datenträger oder Hardware betroffen sind und welche Schritte sicher sind.',
    price: 'Bei dir vor Ort ab 49 € · Fernhilfe nur wenn erreichbar',
    audienceHint: 'Für alle, deren Computer, Laptop oder Windows gerade gar nicht mehr nutzbar startet.',
    situations: [
      {
        title: 'Der Bildschirm bleibt schwarz',
        text: 'Das Gerät scheint an zu sein, aber es erscheint kein Bild oder nur kurz ein Logo.',
      },
      {
        title: 'Windows startet nicht',
        text: 'Es kommt ein Ladebildschirm, eine Reparaturmeldung oder der PC startet immer wieder neu.',
      },
      {
        title: 'Laptop reagiert gar nicht',
        text: 'Keine Lampe, kein Lüfter oder nur ein kurzes Blinken beim Einschalten.',
      },
      {
        title: 'Wichtige Daten sind auf dem Gerät',
        text: 'Dann sollte nicht wild experimentiert werden, damit die Lage nicht schlimmer wird.',
      },
    ],
    solutions: [
      {
        title: 'Strom und Anzeige trennen',
        text: 'Prüfen, ob das Problem am Gerät, Netzteil, Kabel, Bildschirm oder Windows liegt.',
      },
      {
        title: 'Startverhalten beobachten',
        text: 'Lampen, Lüfter, Töne, Logos und Fehlermeldungen richtig einordnen.',
      },
      {
        title: 'Windows-Start prüfen',
        text: 'Sichere Reparatur- und Diagnosewege bewerten, ohne Daten unnötig zu gefährden.',
      },
      {
        title: 'Datenrisiko einschätzen',
        text: 'Wenn Daten wichtig sind, werden riskante Experimente vermieden.',
      },
      {
        title: 'Hardwaregrenze erkennen',
        text: 'Wenn Netzteil, Akku, Laufwerk oder Mainboard verdächtig sind, bekommst du eine klare Einschätzung.',
      },
      {
        title: 'Nächsten Schritt klären',
        text: 'Vor Ort, Spezialreparatur oder Neuinstallation wird erst nach realistischer Prüfung empfohlen.',
      },
    ],
    confidenceTitle: 'Keine Rettungsversuche auf Verdacht.',
    confidenceText:
      'Bei Startproblemen kann falsches Herumprobieren Daten gefährden. Ich arbeite deshalb vorsichtig und bespreche jeden riskanteren Schritt vorher.',
    confidencePoints: [
      'Datenrisiko beachten',
      'Strom, Anzeige und Windows trennen',
      'Keine BIOS-Bastelei per Chat',
      'Vor-Ort-Prüfung bei Hardwareverdacht',
    ],
    faqs: [
      {
        question: 'Kannst du helfen, wenn gar nichts mehr angeht?',
        answer:
          'Ja, die Ursache kann aber Hardware sein. Dann ist ein Termin bei dir vor Ort meistens sinnvoller als Fernhilfe.',
      },
      {
        question: 'Soll ich selbst Reparaturprogramme ausprobieren?',
        answer:
          'Nicht, wenn wichtige Daten auf dem Gerät sind. Ruf lieber kurz an, bevor du riskante Schritte startest.',
      },
      {
        question: 'Kannst du Daten retten?',
        answer:
          'Ich kann die Lage vorsichtig einschätzen und einfache sichere Optionen prüfen. Bei schweren Defekten oder hohem Datenwert ist ein spezialisierter Datenretter sinnvoll.',
      },
      {
        question: 'Was soll ich vor dem Anruf notieren?',
        answer:
          'Ob Lampen leuchten, Lüfter laufen, ein Logo erscheint, Pieptöne kommen oder eine Fehlermeldung angezeigt wird.',
      },
    ],
    related: ['pc-system', 'it-notdienst', 'fernwartung'],
  }),
  topicPage({
    slug: 'fritzbox-hilfe',
    icon: 'router',
    code: 'TOP/FB/14',
    title: 'Fritzbox Hilfe',
    shortTitle: 'Fritzbox',
    description:
      'Fritzbox-Hilfe in Ludwigsburg bei WLAN, Mesh, Internet, Telefonie, Updates und unklaren Router-Meldungen.',
    tags: ['Fritzbox', 'Router', 'WLAN'],
    seoTitle: 'Fritzbox Hilfe Ludwigsburg | WLAN, Internet & Mesh',
    seoDescription:
      'Fritzbox Hilfe in Ludwigsburg: WLAN geht nicht, Internet fällt aus, Mesh oder Repeater einrichten, Router-Meldungen verstehen und stabilisieren.',
    keywords:
      'Fritzbox Hilfe Ludwigsburg, Fritzbox einrichten, Fritzbox WLAN geht nicht, Fritzbox Mesh, Router Hilfe Ludwigsburg, Internet Hilfe',
    heroLead: 'Fritzbox verstehen.',
    heroAccent: 'WLAN und Internet sauber ordnen.',
    heroText:
      'Die Fritzbox kann viel, aber genau deshalb wirken Menüs und Meldungen schnell unübersichtlich. Ich helfe bei WLAN, Internet, Mesh, Geräten und sinnvollen Einstellungen direkt bei dir in Ludwigsburg und Umgebung.',
    price: 'Bei dir vor Ort ab 49 € · Analyse nach Aufwand',
    audienceHint: 'Für Haushalte, Senioren, Homeoffice und kleine Betriebe mit Fritzbox- oder Routerproblemen.',
    situations: [
      {
        title: 'Fritzbox-WLAN ist instabil',
        text: 'Geräte verlieren die Verbindung oder verbinden sich nur in bestimmten Räumen.',
      },
      {
        title: 'Internet geht trotz Fritzbox nicht',
        text: 'Die Fritzbox leuchtet, aber Webseiten, Apps oder Streaming funktionieren nicht richtig.',
      },
      {
        title: 'Mesh oder Repeater verwirren',
        text: 'Mehrere Geräte sind vorhanden, aber die Verbindung wird nicht besser.',
      },
      {
        title: 'Nach Update oder Anbieterwechsel ist alles anders',
        text: 'Neue Oberfläche, Zugangsdaten oder Einstellungen sollen wieder verständlich werden.',
      },
    ],
    solutions: [
      {
        title: 'Fritzbox-Status einordnen',
        text: 'Internet, WLAN, Mesh und Geräte getrennt betrachten.',
      },
      {
        title: 'WLAN sinnvoll einstellen',
        text: 'Name, Passwort, Funkband und Sicherheit nachvollziehbar konfigurieren.',
      },
      {
        title: 'Mesh verbinden',
        text: 'Repeater oder Mesh-Geräte korrekt koppeln und passend platzieren.',
      },
      {
        title: 'Geräte prüfen',
        text: 'PC, Handy, Drucker oder Fernseher praktisch im Netzwerk testen.',
      },
      {
        title: 'Updates kontrollieren',
        text: 'Firmware und Einstellungen vorsichtig prüfen, ohne den Anschluss zu riskieren.',
      },
      {
        title: 'Anbietergrenze erkennen',
        text: 'Wenn die Leitung oder Zugangsdaten betroffen sind, bekommst du klare Hinweise für den Anbieter.',
      },
    ],
    confidenceTitle: 'Routerhilfe ohne Einstellungs-Chaos.',
    confidenceText:
      'Ich fasse Router, WLAN und Endgeräte als ein System auf. So wird klarer, ob die Fritzbox selbst, das WLAN oder ein einzelnes Gerät das Problem macht.',
    confidencePoints: [
      'Fritzbox und WLAN trennen',
      'Mesh sauber verbinden',
      'Zugangsdaten bleiben bei dir',
      'Anbieter-Themen klar benennen',
    ],
    faqs: [
      {
        question: 'Richtest du Fritzbox Mesh ein?',
        answer:
          'Ja. Ich prüfe, wie die Mesh-Geräte verbunden sind, wo sie stehen sollten und ob sie wirklich die Reichweite verbessern.',
      },
      {
        question: 'Kannst du bei Fritzbox-Internetproblemen helfen?',
        answer:
          'Ja. Ich grenze ein, ob Fritzbox, Anschluss, WLAN oder Endgerät betroffen ist. Eine echte Anbieterstörung kann nur der Anbieter beheben.',
      },
      {
        question: 'Muss ich mein Fritzbox-Passwort schicken?',
        answer:
          'Nein. Zugangsdaten solltest du nicht per Chat senden. Wenn sie gebraucht werden, gibst du sie selbst vor Ort ein.',
      },
      {
        question: 'Hilfst du auch bei Telefonie über Fritzbox?',
        answer:
          'Ich kann einfache Einstellungen und offensichtliche Fehler einordnen. Bei Anbieterfreischaltung oder Vertragsdaten muss oft der Anbieter helfen.',
      },
    ],
    related: ['router-entstoerung', 'mesh-wlan-einrichten', 'netzwerk-wlan'],
  }),
  topicPage({
    slug: 'mesh-wlan-einrichten',
    icon: 'router',
    code: 'TOP/MESH/15',
    title: 'Mesh WLAN einrichten',
    shortTitle: 'Mesh WLAN',
    description:
      'Mesh WLAN und Repeater in Ludwigsburg einrichten, wenn WLAN nicht alle Räume erreicht oder ständig abbricht.',
    tags: ['Mesh', 'Repeater', 'WLAN'],
    seoTitle: 'Mesh WLAN einrichten Ludwigsburg | Repeater & Fritzbox',
    seoDescription:
      'Mesh WLAN einrichten in Ludwigsburg: Fritzbox Mesh, Repeater, WLAN-Reichweite, Funklöcher und stabile Verbindung für Wohnung, Haus oder kleines Büro.',
    keywords:
      'Mesh WLAN einrichten Ludwigsburg, WLAN Repeater einrichten, Fritzbox Mesh Hilfe, WLAN Reichweite verbessern, Funkloch Wohnung, WLAN Hilfe Ludwigsburg',
    heroLead: 'WLAN soll im ganzen Zuhause ankommen.',
    heroAccent: 'Mesh richtig platzieren statt blind kaufen.',
    heroText:
      'Repeater und Mesh helfen nur, wenn sie richtig eingesetzt werden. Ich prüfe Räume, Routerstandort, vorhandene Geräte und richte das WLAN so ein, dass es dort stabiler wird, wo du es wirklich nutzt.',
    price: 'Bei dir vor Ort ab 49 € · Hardware nur nach Absprache',
    audienceHint: 'Für Wohnungen, Häuser, Homeoffice und kleine Räume mit schlechter WLAN-Abdeckung.',
    situations: [
      {
        title: 'WLAN reicht nicht bis ins Arbeitszimmer',
        text: 'Im Flur geht es noch, im Arbeitszimmer oder Obergeschoss wird es langsam.',
      },
      {
        title: 'Repeater bringt kaum Verbesserung',
        text: 'Ein Repeater ist vorhanden, aber die Verbindung bleibt schwach oder instabil.',
      },
      {
        title: 'Handy springt zwischen Netzwerken',
        text: 'Mehrere WLAN-Namen verwirren Geräte oder sorgen für Abbrüche.',
      },
      {
        title: 'Streaming oder Videocalls ruckeln',
        text: 'Internet ist da, aber gerade dort schwach, wo es gebraucht wird.',
      },
    ],
    solutions: [
      {
        title: 'WLAN-Bereiche prüfen',
        text: 'Räume, Nutzung und typische Störstellen gemeinsam ansehen.',
      },
      {
        title: 'Routerstandort bewerten',
        text: 'Oft entscheidet die Position mehr als die teuerste Zusatzhardware.',
      },
      {
        title: 'Mesh oder Repeater koppeln',
        text: 'Geräte korrekt verbinden, benennen und praktisch testen.',
      },
      {
        title: 'Netzwerknamen ordnen',
        text: 'Ein verständliches WLAN für den Alltag statt verwirrender Doppelnetze.',
      },
      {
        title: 'Geräte priorisieren',
        text: 'Homeoffice, Fernseher, Smartphone oder Drucker dort testen, wo sie genutzt werden.',
      },
      {
        title: 'Grenzen offen sagen',
        text: 'Wenn Verkabelung oder andere Hardware sinnvoller ist, bekommst du das ehrlich gesagt.',
      },
    ],
    confidenceTitle: 'Mesh ist kein Zauberwort.',
    confidenceText:
      'Ein Mesh-System kann viel verbessern, aber nur bei passender Platzierung und sauberer Einrichtung. Ich schaue auf den echten Alltag in deiner Wohnung oder deinem Betrieb.',
    confidencePoints: [
      'Vorhandene Geräte zuerst prüfen',
      'Funklöcher praktisch testen',
      'Keine Hardware auf Verdacht',
      'WLAN dort prüfen, wo du es nutzt',
    ],
    faqs: [
      {
        question: 'Brauche ich Mesh oder reicht ein Repeater?',
        answer:
          'Das hängt von Wohnung, Routerstandort, Wänden und Nutzung ab. Ich prüfe zuerst die Situation und empfehle dann eine passende Lösung.',
      },
      {
        question: 'Kannst du vorhandene Repeater einrichten?',
        answer:
          'Ja, wenn sie kompatibel und technisch sinnvoll einsetzbar sind.',
      },
      {
        question: 'Warum ist WLAN trotz Repeater langsam?',
        answer:
          'Oft steht der Repeater zu weit vom Router weg oder wiederholt bereits ein schwaches Signal. Dann sieht die Anzeige gut aus, aber die Leistung bleibt schlecht.',
      },
      {
        question: 'Hilfst du auch in kleinen Firmen?',
        answer:
          'Ja, bei pragmatischen WLAN-Lösungen für kleine Büros, Praxen oder Arbeitsbereiche in Ludwigsburg und Umgebung.',
      },
    ],
    related: ['netzwerk-wlan', 'fritzbox-hilfe', 'router-entstoerung'],
  }),
  topicPage({
    slug: 'senioren-handy-hilfe',
    icon: 'laptop',
    code: 'TOP/SEN/16',
    title: 'Senioren Handy Hilfe',
    shortTitle: 'Senioren Handy',
    description:
      'Geduldige Handy- und Smartphone-Hilfe für Seniorinnen und Senioren in Ludwigsburg: WLAN, Apps, Fotos, WhatsApp, E-Mail und Einstellungen.',
    tags: ['Senioren', 'Handy', 'Smartphone'],
    seoTitle: 'Senioren Handy Hilfe Ludwigsburg | Smartphone einfach erklärt',
    seoDescription:
      'Senioren Handy Hilfe in Ludwigsburg: Smartphone, WhatsApp, Fotos, WLAN, E-Mail und Einstellungen ruhig erklärt. Hilfe bei dir vor Ort.',
    keywords:
      'Senioren Handy Hilfe Ludwigsburg, Smartphone Hilfe Senioren, Handy einrichten Senioren, WhatsApp Hilfe, Handy Hilfe Ludwigsburg, Smartphone einrichten',
    heroLead: 'Handyhilfe ohne Stress.',
    heroAccent: 'Ruhig, geduldig und verständlich.',
    heroText:
      'Smartphones können praktisch sein, aber auch schnell überfordern. Ich erkläre WLAN, Apps, Fotos, WhatsApp, E-Mail und wichtige Einstellungen in normaler Sprache und in deinem Tempo.',
    price: 'Bei dir vor Ort ab 49 € · Fernhilfe nur wenn sinnvoll',
    audienceHint: 'Für Seniorinnen, Senioren und Angehörige, die Smartphone-Hilfe ruhig und verständlich brauchen.',
    situations: [
      {
        title: 'WhatsApp, Fotos oder E-Mail sind unklar',
        text: 'Nachrichten, Bilder, Anhänge oder Kontakte sollen sicherer bedient werden.',
      },
      {
        title: 'Das Handy ist neu',
        text: 'WLAN, Konto, Apps, Sicherheit und Grundbedienung sollen eingerichtet werden.',
      },
      {
        title: 'Ständig kommen Meldungen',
        text: 'Updates, Berechtigungen, Speicher oder Werbung sorgen für Unsicherheit.',
      },
      {
        title: 'Angehörige wollen entlasten',
        text: 'Eltern oder Großeltern brauchen Hilfe, die geduldig erklärt und nicht nur schnell klickt.',
      },
    ],
    solutions: [
      {
        title: 'Grundfunktionen erklären',
        text: 'Telefonieren, Nachrichten, Fotos, WLAN und wichtige Einstellungen in Ruhe zeigen.',
      },
      {
        title: 'Apps einrichten',
        text: 'Benötigte Apps installieren, sortieren und unklare Berechtigungen erklären.',
      },
      {
        title: 'Sicherheit besprechen',
        text: 'PIN, Sperrbildschirm, Betrugsnachrichten und vorsichtiger Umgang mit Links verständlich machen.',
      },
      {
        title: 'E-Mail und Kontakte prüfen',
        text: 'Konten, Kontakte und einfache Nutzung gemeinsam testen.',
      },
      {
        title: 'Fotos und Speicher ordnen',
        text: 'Zeigen, wo Bilder liegen und was beim Löschen oder Sichern wichtig ist.',
      },
      {
        title: 'Merkhilfe geben',
        text: 'Auf Wunsch die wichtigsten Schritte einfach zusammenfassen, damit du sie wiederfindest.',
      },
    ],
    confidenceTitle: 'Tempo runter. Verstehen hoch.',
    confidenceText:
      'Gerade bei Handyhilfe ist Geduld wichtiger als Tempo. Ich nehme mir Zeit, damit du nicht nur zuschaust, sondern danach selbst sicherer wirst.',
    confidencePoints: [
      'Geduldige Erklärung',
      'Keine Bloßstellung',
      'Sicherheit und Betrug mitdenken',
      'Hilfe bei dir vor Ort',
    ],
    faqs: [
      {
        question: 'Hilfst du auch, wenn ich mich mit dem Handy kaum auskenne?',
        answer:
          'Ja. Genau dafür ist diese Hilfe gedacht. Du musst keine Fachbegriffe kennen.',
      },
      {
        question: 'Kannst du WhatsApp erklären?',
        answer:
          'Ja, zum Beispiel Nachrichten, Bilder, Kontakte, Gruppen und worauf man bei unbekannten Links achten sollte.',
      },
      {
        question: 'Soll ich dir meine PIN schicken?',
        answer:
          'Nein. PINs und Passwörter niemals per Chat oder E-Mail senden. Wenn etwas entsperrt werden muss, gibst du es selbst ein.',
      },
      {
        question: 'Kommst du zu Senioren nach Hause?',
        answer:
          'Ja, Vor-Ort-Hilfe in Ludwigsburg und Umgebung ist möglich. Details werden direkt mit Andrej abgestimmt.',
      },
    ],
    related: ['benutzerkonten', 'email', 'betrugsverdacht-phishing-hilfe'],
  }),
  topicPage({
    slug: 'betrugsverdacht-phishing-hilfe',
    icon: 'bot',
    code: 'TOP/SAFE/17',
    title: 'Betrugsverdacht & Phishing',
    shortTitle: 'Betrug/Phishing',
    description:
      'Hilfe in Ludwigsburg bei verdächtigen E-Mails, Fake-SMS, Betrugsverdacht, Phishing-Links und Unsicherheit nach einem Klick.',
    tags: ['Betrug', 'Phishing', 'Sicherheit'],
    seoTitle: 'Betrugsverdacht & Phishing Hilfe Ludwigsburg',
    seoDescription:
      'Betrugsverdacht oder Phishing in Ludwigsburg? Hilfe bei verdächtigen E-Mails, SMS, Links, Konto-Warnungen und sicheren nächsten Schritten.',
    keywords:
      'Betrugsverdacht Ludwigsburg, Phishing Hilfe, Fake Mail Hilfe, Betrug SMS, gehacktes Konto Hilfe, Computer Sicherheit Senioren, IT Sicherheit Ludwigsburg',
    heroLead: 'Komische Mail? Verdächtiger Link?',
    heroAccent: 'Erst stoppen, dann sauber prüfen.',
    heroText:
      'Wenn eine Nachricht, ein Anruf oder ein Link komisch wirkt, ist schnelle Ruhe wichtiger als hektisches Klicken. Ich helfe dir, sichere nächste Schritte zu klären und typische Betrugsmaschen einzuordnen.',
    price: 'Ersteinschätzung nach Anliegen · Vor Ort ab 49 €',
    audienceHint: 'Für Privatpersonen, Senioren, Angehörige und kleine Betriebe bei digitalem Betrugsverdacht.',
    situations: [
      {
        title: 'Du hast auf einen Link geklickt',
        text: 'Eine SMS, E-Mail oder Anzeige wirkte echt, jetzt bist du unsicher.',
      },
      {
        title: 'Ein Konto meldet Warnungen',
        text: 'Unbekannte Anmeldung, Passwortwarnung oder Sicherheitsmeldung taucht auf.',
      },
      {
        title: 'Jemand verlangt Geld oder Codes',
        text: 'Anrufer, Nachricht oder angeblicher Support fordert Zahlung, Gutscheine oder Zugangsdaten.',
      },
      {
        title: 'Du willst nichts falsch machen',
        text: 'Gerade bei Banking, E-Mail oder wichtigen Konten soll kein Risiko entstehen.',
      },
    ],
    solutions: [
      {
        title: 'Situation ruhig einordnen',
        text: 'Klären, was passiert ist: nur gesehen, geklickt, Daten eingegeben oder Geld überwiesen.',
      },
      {
        title: 'Sichere Sofortschritte nennen',
        text: 'Keine weiteren Daten eingeben, keine Codes teilen, fragliche Seite schließen und Belege sichern.',
      },
      {
        title: 'Gerät und Konto trennen',
        text: 'Prüfen, ob es eher um das Gerät, ein Online-Konto oder Zahlungsdaten geht.',
      },
      {
        title: 'Passwörter sinnvoll behandeln',
        text: 'Keine Passwörter im Chat. Wenn nötig, wird direkt am Gerät sicher geändert.',
      },
      {
        title: 'Nächste Stellen benennen',
        text: 'Bei Geld, Bank oder Identitätsdaten kann Bank, Anbieter oder Polizei wichtiger sein als IT-Hilfe.',
      },
      {
        title: 'Vorbeugung erklären',
        text: 'Typische Merkmale von Fake-Mails, SMS und Support-Betrug in einfacher Sprache zeigen.',
      },
    ],
    confidenceTitle: 'Bei Betrug zählt Vorsicht mehr als Mut.',
    confidenceText:
      'Ich gebe keine riskanten Experimente vor. Wenn Geld, Ausweise, Banking oder Kontozugriff betroffen sind, wird klar gesagt, welche offizielle Stelle du kontaktieren solltest.',
    confidencePoints: [
      'Keine Passwörter teilen',
      'Keine Codes im Chat',
      'Bank/Anbieter bei Geldthemen',
      'Besonders ruhig für Senioren',
    ],
    faqs: [
      {
        question: 'Was soll ich sofort tun, wenn ich einen Phishing-Link geklickt habe?',
        answer:
          'Gib keine weiteren Daten ein, schließe die Seite, mache wenn möglich einen Screenshot und notiere, was du eingegeben hast. Wenn Bankdaten betroffen sind, sofort die Bank kontaktieren.',
      },
      {
        question: 'Kannst du prüfen, ob mein Konto gehackt wurde?',
        answer:
          'Ich kann sichere Hinweise einordnen und dir helfen, Kontosicherheit am Gerät zu prüfen. Verbindliche Konto- oder Anbieterentscheidungen trifft aber der jeweilige Anbieter.',
      },
      {
        question: 'Soll ich Passwörter schicken?',
        answer:
          'Nein. Niemals Passwörter, PINs, TANs oder Codes senden. Wenn ein Passwort geändert werden muss, machst du das selbst am Gerät.',
      },
      {
        question: 'Hilfst du Senioren bei Betrugsnachrichten?',
        answer:
          'Ja. Ich erkläre ruhig, woran man typische Fake-SMS, Fake-Mails und falschen Support erkennen kann.',
      },
    ],
    related: ['senioren-handy-hilfe', 'email', 'benutzerkonten'],
  }),
]

export const servicePages: ServicePageData[] = [...primaryServicePages, ...topicPages]

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>
