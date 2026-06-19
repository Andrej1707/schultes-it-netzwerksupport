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

export const servicePages: ServicePageData[] = [
  {
    slug: 'pc-system',
    icon: 'laptop',
    code: 'SYS/PC/01',
    title: 'PC & System',
    shortTitle: 'PC-Hilfe',
    description:
      'Wenn Windows streikt, Software nervt oder ein Gerät sauber eingerichtet werden soll: Problem eingrenzen, verständlich erklären, lösen.',
    tags: ['Windows', 'Software', 'Einrichtung'],
    seoTitle: 'PC-Hilfe Ludwigsburg | Schultes IT-Support',
    seoDescription:
      'Verständliche PC-Hilfe in Ludwigsburg für Privatpersonen, Senioren und kleine Firmen. Ich komme zu dir oder helfe per Fernwartung.',
    keywords:
      'PC Hilfe Ludwigsburg, Computerhilfe Ludwigsburg, Windows Hilfe, PC Hilfe Senioren, Computer einrichten, IT Support Privatkunden',
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
        title: 'Der PC ist plötzlich langsam',
        text: 'Programme starten ewig, der Lüfter dreht hoch oder Windows reagiert nur noch zäh.',
      },
      {
        title: 'Programme machen Probleme',
        text: 'Fehlermeldungen, Updates oder Einstellungen blockieren die tägliche Nutzung.',
      },
      {
        title: 'Ein neues Gerät soll startklar sein',
        text: 'Konten, Updates, Programme und Drucker sollen von Anfang an sinnvoll eingerichtet werden.',
      },
      {
        title: 'Die Ursache ist völlig unklar',
        text: 'Du weißt nur: Gestern ging es noch. Genau dort beginnt eine strukturierte Diagnose.',
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
    seoTitle: 'WLAN-Hilfe Ludwigsburg | Netzwerk & Router',
    seoDescription:
      'WLAN- und Netzwerkhilfe in Ludwigsburg: Router einrichten, Verbindungsprobleme lösen und Heim- oder Firmennetze verständlich optimieren.',
    keywords:
      'WLAN Hilfe Ludwigsburg, Router einrichten, Netzwerk Hilfe, schlechtes WLAN, Heimnetz einrichten, Firmennetz Ludwigsburg',
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
        title: 'WLAN reicht nicht in alle Räume',
        text: 'In Küche, Arbeitszimmer oder Obergeschoss bricht die Verbindung regelmäßig weg.',
      },
      {
        title: 'Der Router ist eingerichtet – irgendwie',
        text: 'Zugangsdaten, Gastnetz, Updates und Sicherheitseinstellungen sind unübersichtlich.',
      },
      {
        title: 'Einzelne Geräte verlieren die Verbindung',
        text: 'Drucker, Fernseher oder Laptop tauchen auf, verschwinden aber immer wieder aus dem Netz.',
      },
      {
        title: 'Homeoffice ist nicht zuverlässig',
        text: 'Videokonferenzen stocken oder die Verbindung fällt genau während wichtiger Termine aus.',
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
      'Individuelle Tools und Automatisierungen für Selbstständige und kleine Firmen: Abläufe vereinfachen, Daten ordnen und Prototypen praxisnah entwickeln.',
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

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>
