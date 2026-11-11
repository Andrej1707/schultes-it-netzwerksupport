# Startseite und 40 Ratgeber: Prüfung am 11.11.2026

## Umfang und dokumentierter Stand

Diese Abnahme beschreibt die Vorbereitung der neuen Veröffentlichung. Die frühere Live-Abnahme der Ludwigsburg-Umstellung steht in [qa-2026-11-11.md](qa-2026-11-11.md). Deren Live-Ergebnisse sind kein Nachweis für die nachfolgenden Änderungen.

- Die bestätigte frühere Startseitengestaltung ist wiederhergestellt: „Einfach gute Technik. Für deinen Alltag. Für dein Unternehmen.“, großes Arbeitsplatzmotiv und direkte Kontaktmöglichkeiten.
- Schultes IT bleibt ein inhabergeführter Betrieb in Ludwigsburg mit deutschlandweiter Fernwartung. Die Gestaltung führt keine zusätzlichen Standorte oder Betreiber ein.
- 40 eigenständige Ratgeber liegen unter `/ratgeber/<thema>/`, jeweils acht in Sicherheit, Windows, WLAN, Daten und Alltag. Die Übersicht bietet Kategorien und Suche.
- Vier neue illustrative Fotomotive ergänzen die vorhandenen Bilder. Herkunft, Exportgrößen und der fiktive Charakter der Motive sind in [guide-image-prompts.md](design/guide-image-prompts.md) dokumentiert.
- Preise und das sofortige Einbinden des Chat-Assistenten bleiben unverändert. Der Chat wird weiterhin beim Seitenaufruf eingebunden, nicht erst nach dem Öffnen nachgeladen.

## Unabhängige Inhalts- und Quellenprüfung

Alle 40 Artikel wurden vollständig durch unabhängige Prüfer gelesen: 24 aus Sicherheit, Daten und Alltag sowie 16 aus Windows und WLAN. Es wurden keine inhaltlichen Veröffentlichungsblocker gefunden.

- Keine gefährlichen Reparaturbefehle, pauschalen Schutzabschaltungen, vorschnellen Formatierungen oder unbelegten Erfahrungs- und Qualifikationsbehauptungen.
- Datenverlust, Sicherungen, BitLocker-Schlüssel, Kontowiederherstellung, Akkuverformung, Firmware-Updates und Router-Reset sind mit passenden Voraussetzungen und Grenzen beschrieben.
- Slugs, Titel, Beschreibungen und Einleitungen sind für alle 40 Artikel unterschiedlich. Verwandte Themen behandeln unterschiedliche Entscheidungen; es wurden keine austauschbaren Artikelduplikate oder redaktionellen Platzhalter festgestellt.
- Alle verknüpften Ratgeber und verwendeten Bilddateien existieren. Stichproben der Bildmotive und Alt-Texte passen zur jeweiligen Verwendung.
- Die 104 eindeutigen Primärquellen wurden auf Erreichbarkeit beziehungsweise offiziellen Nachweis sowie passende Titel und Themen geprüft. Quellen sind unter anderem Microsoft, Apple, Google, Mozilla, FRITZ!, BSI und BACS.
- Anfängliche Python-Zertifikatsfehler bei FRITZ! und BACS ließen sich mit dem systemeigenen HTTP-Client bei unveränderter TLS-Prüfung nicht reproduzieren: Die betroffenen Quellen lieferten HTTP 200 mit passenden Titeln. Mozilla-Inhalte wurden über die Webquelle bestätigt.
- Zwei HP-Seiten verweigern den direkten automatisierten Abruf mit HTTP 403. Beide exakten URLs sind über die offizielle Suche mit den passenden HP-Inhalten zu Notebookpflege und Wärmeverringerung bestätigt. Das ist eine Abrufgrenze, kein belegter fehlender Artikel.

Die maschinellen Quellenprotokolle `schultes-guide-source-audit.json` und `schultes-guide-source-retries.json` liegen außerhalb des Repositorys im temporären Arbeitsverzeichnis der ausführenden Sitzung. Die Prüfung ist eine redaktionelle und technische Plausibilitätsprüfung; sie behauptet keine praktische Durchführung jedes beschriebenen Schritts auf allen Gerätevarianten.

## Vollständiger lokaler Prüfpfad

`npm run check` ist bestanden: Ratgeberkatalog-Abgleich, Frontend- und Worker-Typechecks, 187 Tests, RustDesk-Dateiprüfung, Produktions-Build und datengetriebene SEO-Prüfung.

- Der Build enthält 70 kanonische Seiten, davon 68 indexierbare Seiten, sowie 48 historische Alias-Dokumente.
- Die XML- und Text-Sitemap enthalten dieselben 68 indexierbaren kanonischen URLs. Impressum, Datenschutz und Fehlerseite bleiben bewusst ausgeschlossen und crawlbar.
- Alle 40 Ratgeber werden als vollständiges statisches HTML erzeugt und über normale Links erschlossen. Titel, Beschreibung, H1, Canonical und strukturierte Daten werden im Release-Prüfpfad kontrolliert.
- Vollständige Artikeltexte bleiben aus dem allgemeinen Browser-Bundle heraus. Eine Artikelseite erhält ihren eigenen Inhalt und die Zusammenfassungen ihrer verwandten Ratgeber; die Übersicht erhält den kompakten Katalog.

## Lokale Browserprüfung am Produktions-Build

Die folgenden Ergebnisse stammen aus der lokalen Browserprüfung vor Veröffentlichung. Die responsive Mobilansicht ist keine Prüfung auf einem physischen Smartphone.

- Desktop mit 1.440 Pixeln Breite und Mobilansicht mit 390 Pixeln Breite: kein horizontaler Überlauf in den geprüften Ansichten.
- Ratgeberübersicht: alle 40 Karten vorhanden; die Kategorie-Filterprobe liefert acht Artikel. Die Suche nach „passwort“ liefert zwei Treffer. Ein Suchbegriff ohne Ergebnis zeigt den Leerzustand; Zurücksetzen stellt alle 40 Karten wieder her.
- Mobile Suche nach „backup“: neun passende Artikel. Artikelbild, Inhaltsnavigation und Quellen sind sichtbar.
- Desktopnavigation: Das Leistungsmenü öffnet ausschließlich durch Mausbewegung ohne Klick. Nach dem Übergang ist das Menüpanel vollständig sichtbar, mit berechneter Deckkraft 1.
- Mobile Navigation: Antippen öffnet das Menü. Escape schließt es und setzt den Fokus auf den Menüauslöser zurück.
- JavaScript deaktiviert: Der geprüfte Backup-Artikel enthält weiterhin den vollständigen Inhalt mit neun H2-Überschriften und dem passenden Ratgeber-Stylesheet.
- In den geprüften Browserabläufen wurden keine React-Konsolenfehler festgestellt.

## Verringerte CSS-Last

Die gemeinsame CSS-Datei des geprüften Builds ist 24.407 Bytes groß, entsprechend rund 24,4 kB statt zuvor rund 92 kB. Diese Werte beschreiben die unkomprimierte gemeinsame CSS-Datei, nicht die gesamte Übertragungsmenge einer Seite.

Zusätzliche Styles für Leistungen, andere Seitentypen und Ratgeber werden nur für die passende Seitenfamilie im HTML-Kopf verlinkt. Die wiederhergestellte Startseite benötigt keine dieser zusätzlichen Seitenfamilien. Der separat eingebundene Chat besitzt weiterhin eigene Styles und wird unverändert früh geladen.

Die kleinere gemeinsame Datei ist ein überprüfbarer Build-Befund. Daraus wird weder ein PageSpeed-Score von 100 noch eine Aussage über reale Core Web Vitals abgeleitet.

## Vorbereitete Cloudflare-Erweiterung

Die kombinierte [Redirect-CSV](seo/legacy-redirects.csv) umfasst 706 Regeln. Die zusätzlichen Ratgeberregeln stehen separat in [guide-redirects.csv](seo/guide-redirects.csv). Die vorhandenen historischen Weiterleitungen werden dadurch ergänzt.

Der geplante vollständige HTTP-Audit umfasst 1.342 Fälle: 636 schemafreie Quellen jeweils über HTTP und HTTPS sowie 70 ausschließlich auf HTTP begrenzte Quellen. Die Regeln zeigen auf direkte kanonische HTTPS-Ziele und erhalten Query-Parameter.

Zum hier dokumentierten Vorabstand steht die Aktivierung der zusätzlichen Cloudflare-Regeln noch aus. Die vorbereitete CSV und die Zahl der geplanten Abrufe werden ausdrücklich nicht als bereits bestandene Live-Prüfung ausgewiesen.

## Noch zu ergänzende Abnahme

- Ergänzende lokale Prüfung der Über-uns- und Rechtseiten nach der Stylesheet-Aufteilung.
- Veröffentlichung des geprüften Stands und anschließende Live-Prüfung der neuen Seiten, Metadaten, Bilder, internen Links und Sitemaps.
- Cloudflare-Aktivierung und tatsächliche Ergebnisse des vollständigen Redirect-Audits.
- PageSpeed-Insights-Messungen mit URL, Gerätetyp und Messzeitpunkt. Ein Laborwert ist von echten Nutzerdaten und Tests auf physischen Smartphones zu unterscheiden.

Tatsächliche Google-Indexierung, Rankings und reale Nutzerdaten werden durch die bisherigen Build- und Inhaltsprüfungen nicht als bestätigt ausgewiesen.
