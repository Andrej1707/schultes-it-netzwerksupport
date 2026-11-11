# Startseite und 40 Ratgeber: Prüfung am 11.11.2026

## Umfang und dokumentierter Stand

Diese Abnahme dokumentiert die Vorbereitung und bestätigte Veröffentlichung von PR #7 sowie die mit PR #8 veröffentlichte Bild- und Performance-Ergänzung. Die frühere Live-Abnahme der Ludwigsburg-Umstellung steht in [qa-2026-11-11.md](qa-2026-11-11.md). Deren Ergebnisse sind von den folgenden Prüfungen getrennt.

- Die bestätigte frühere Startseitengestaltung ist wiederhergestellt: „Einfach gute Technik. Für deinen Alltag. Für dein Unternehmen.“, großes Arbeitsplatzmotiv und direkte Kontaktmöglichkeiten.
- Schultes IT bleibt ein inhabergeführter Betrieb in Ludwigsburg mit deutschlandweiter Fernwartung. Die Gestaltung führt keine zusätzlichen Standorte oder Betreiber ein.
- 40 eigenständige Ratgeber liegen unter `/ratgeber/<thema>/`, jeweils acht in Sicherheit, Windows, WLAN, Daten und Alltag. Die Übersicht bietet Kategorien und Suche.
- Vier neue illustrative Fotomotive ergänzen in PR #7 die vorhandenen Bilder. Herkunft, Exportgrößen und der fiktive Charakter der Motive sind in [guide-image-prompts.md](design/guide-image-prompts.md) dokumentiert. PR #8 ergänzt weitere 17 Motive; alle 40 Artikel verwenden damit unterschiedliche Bildinhalte.
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

## Aktivierte Cloudflare-Erweiterung für PR #7

Die kombinierte [Redirect-CSV](seo/legacy-redirects.csv) umfasst 706 Regeln. Die zusätzlichen Ratgeberregeln stehen separat in [guide-redirects.csv](seo/guide-redirects.csv). Die vorhandenen historischen Weiterleitungen werden dadurch ergänzt.

Der vollständige HTTP-Audit umfasst 1.342 Fälle: 636 schemafreie Quellen jeweils über HTTP und HTTPS sowie 70 ausschließlich auf HTTP begrenzte Quellen. Die Regeln zeigen auf direkte kanonische HTTPS-Ziele und erhalten Query-Parameter.

Die 240 zusätzlichen Ratgeberregeln sind aktiviert; insgesamt sind damit 706 Regeln aktiv. Alle 1.342 Redirectfälle und 18 zusätzliche Query-Fälle bestanden die nachfolgende Live-Prüfung.

## Veröffentlichung und Live-Audit von PR #7

Alle Uhrzeiten in Europe/Berlin:

- [PR #7](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/7) wurde als `ecafb5c02a5885e58aeec1cacfe65ae928a89949` zusammengeführt und durch [Pages-Run 43085147477](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43085147477) veröffentlicht.
- Der öffentliche Audit vom 11.11.2026, 20:15:46 bis 20:16:47 Uhr, bestand mit 1.445 Fällen ohne verbleibenden Fehler: 70 kanonische Seiten, zwölf neue Bilddateien, beide Sitemaps, `robots.txt` sowie 1.342 Redirectfälle und 18 zusätzliche Query-Fälle.
- Alle 40 Artikelseiten wurden mitgeprüft. Beide Sitemaps enthalten 68 indexierbare URLs. Impressum und Datenschutz sind die beiden absichtlich mit `noindex` versehenen kanonischen Seiten.
- Die Weiterleitungen wurden mit `HEAD` und ohne automatisches Folgen geprüft. Ein anfänglicher Timeout für `http://schultes-it.de/router-entstoerung` wurde gezielt wiederholt; die Wiederholung lieferte die erwartete 301-Antwort.
- Geprüfte CSV-Prüfsumme: `f77520507accc9015316995fbbd5bbcb61990188ccc1d4ce8e2f77592b9d132b` (SHA-256).
- Auditprotokolle außerhalb des Repositorys: `schultes-pr7-live-audit.json` und `schultes-pr7-live-audit-summary.json` im temporären Arbeitsverzeichnis der ausführenden Sitzung.

## Erste PageSpeed-Insights-Messung auf der Live-Seite

[Mobiler Bericht für die Startseite](https://pagespeed.web.dev/analysis/https-schultes-it-de/wh3lgl10m2?form_factor=mobile), 11.11.2026 um 20:14:25 Uhr:

| Kategorie oder Messwert | Ergebnis |
| --- | --- |
| Leistung | 96 |
| Barrierefreiheit | 96 |
| Best Practices | 100 |
| SEO | 100 |
| First Contentful Paint | 0,927 s |
| Largest Contentful Paint | 2,021 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 5,004 s |

Diese Werte beschreiben genau diesen mobilen Laborlauf auf PR #7. Der Leistungswert ist 96, nicht 100. Die Messung bestätigt weder reale Core Web Vitals noch Rankings und ist kein Test auf einem physischen Smartphone.

## Search Console nach der Veröffentlichung

Die XML-Sitemap wurde erneut eingereicht; Search Console bestätigte die Annahme. Zunächst zeigte die Oberfläche noch 28 erkannte Seiten aus dem bisherigen Stand. Nach erneutem Laden am 11.11.2026 gegen 20:30 Uhr zeigte `sitemap.xml` den Status „Erfolgreich“ und 68 erkannte Seiten, passend zu den 68 URLs der öffentlichen Sitemap. Erkannte Sitemap-URLs sind kein Nachweis, dass alle Seiten bereits indexiert sind.

## Veröffentlichung der Bild- und Performance-Ergänzung mit PR #8

[PR #8](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/8) wurde am 11.11.2026 um 20:25:28 Uhr als `770601eccd5d6d0c229aeea7244476a7f38e8509` zusammengeführt. [Pages-Run 43087071077](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43087071077) ist erfolgreich abgeschlossen.

Die Ergänzung enthält 17 weitere, eigenständige Motive. Die 40 Ratgeber verwenden jetzt 40 unterschiedliche Bildbasen und 40 unterschiedliche SHA-256-Bildinhalte. Der Katalog-Prüfschritt verhindert sowohl Wiederverwendung als auch umbenannte Kopien. Ein Artikel darf sein eigenes Motiv in Übersicht und verwandten Empfehlungen erneut zeigen.

Die vollständigen Prompts und Herkunftsnachweise stehen in den Bilddokumentationen für [Sicherheit](design/guide-images-security.md), [Daten](design/guide-images-data.md), [Netzwerk](design/guide-images-network.md) und [Windows/Alltag](design/guide-images-windows-alltag.md).

Die Startseite erhält ihre unverändert gestaltete gemeinsame CSS-Datei direkt im HTML-Head; andere Seiten behalten die externe, cachebare CSS-Datei. Die Browserprüfung bestätigt 24.440 Inline-CSS-Bytes, unveränderte Darstellung und keine Hydrationsfehler. Die drei Startseitenmotive bieten zusätzlich 800-Pixel-WebPs; das Hero-Bild nutzt eine zur tatsächlichen Bildfläche passende Größenangabe. Der Kontakt-E-Mail-Link ist dauerhaft dezent unterstrichen.

Der vollständige Prüfpfad mit 187 Tests, Katalog-/Bild-Eindeutigkeit, beiden Typechecks, Build, SEO und RustDesk-Integrität ist erneut bestanden. Die lokale Browserprüfung bestätigt 40 Karten mit 40 verschiedenen Bildern, funktionierende Kategorieauswahl und das korrekt ausgewählte 800er-Hero.

## Fokussierter Live-Audit nach PR #8

Der HTTP-Audit am 11.11.2026 von 20:30:03 bis 20:31:12 Uhr bestand mit 441 Prüfungen ohne verbleibenden Fehler. Der lokale Git-Tree wurde mit dem Git-Tree des veröffentlichten Merge-Commits abgeglichen und ist identisch.

- Alle 40 Artikelseiten liefern HTTP 200. Hauptbild, Alt-Text, responsive Bildvarianten und das Bild im `Article`-Schema stimmen mit dem veröffentlichten Ratgeberkatalog überein.
- Die 40 tatsächlich abgerufenen 1280-Pixel-Artikelbilder haben 40 verschiedene SHA-256-Prüfsummen.
- Alle 54 neuen Bilddateien liefern HTTP 200 mit WebP-Inhalt und stimmen in Dateigröße sowie SHA-256 mit den lokalen Release-Dateien überein: 17 Motive in je drei Größen sowie drei zusätzliche 800-Pixel-Startseitenbilder. Insgesamt wurden 77 unterschiedliche Bilddateien abgerufen und abgeglichen.
- Die Ratgeberübersicht enthält bereits im Server-HTML 40 Karten mit 40 verschiedenen, korrekt zugeordneten Bildern.
- Die Startseite enthält 24.440 Bytes gemeinsames CSS direkt im HTML-Head. Alle drei Startseitenmotive besitzen die neue 800er-`srcset`-Variante; die Hero-Größenangabe und der dauerhaft unterstrichene E-Mail-Link sind vorhanden.
- 120 GET-Anfragen decken 119 verschiedene Ressourcen ab. Es gab keine HTTP-Fehler und keine Transport-Wiederholungen. Eine zusätzliche gezielte Homepage-Prüfung korrigierte die Prüfannahme zum E-Mail-Link: Cloudflare codiert dessen Adresse absichtlich; die öffentlich decodierbare Zieladresse und die Unterstreichung sind korrekt.
- Die unveränderten 1.342 Redirectfälle wurden für diese reine Bild- und Darstellungsänderung nicht erneut geprüft; deren dokumentierter Live-Nachweis bleibt der Audit von PR #7.

Die Protokolle `schultes-pr8-focused-live-audit.json` und `schultes-pr8-focused-live-audit-summary.json` liegen außerhalb des Repositorys im temporären Arbeitsverzeichnis der ausführenden Sitzung.

Die ergänzende Live-Browserprüfung bestätigt 40 Karten mit 40 verschiedenen Bildern, acht vollständig geladene Bilder im Daten-Filter, das 800er-Hero und die Inline-CSS-Ausgabe. Das Leistungsmenü öffnet per Hover ohne Klick; der Chat ist weiterhin direkt eingebunden. In den geprüften Abläufen traten keine Konsolenfehler auf.

## Abschließende PageSpeed-Insights-Messung nach PR #8

[Mobiler Bericht](https://pagespeed.web.dev/analysis/https-schultes-it-de/6lv47c30vo?form_factor=mobile) und [Desktop-Bericht](https://pagespeed.web.dev/analysis/https-schultes-it-de/6lv47c30vo?form_factor=desktop), 11.11.2026 um 20:26:53 Uhr (Europe/Berlin):

| Kategorie oder Messwert | Mobil | Desktop |
| --- | --- | --- |
| Leistung | 100 | 100 |
| Barrierefreiheit | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 0,780 s | 0,255 s |
| Largest Contentful Paint | 0,906 s | 0,452 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 0,937 s | 0,421 s |

Diese Werte sind die bestätigte Momentaufnahme dieses Laborlaufs auf dem veröffentlichten PR #8. Sie ersetzen nicht reale Core Web Vitals, einen Test auf physischen Geräten oder eine vollständige Prüfung aller SEO- und Barrierefreiheitskriterien. Ein Score von 100 garantiert weder Indexierung noch Rankings.

Tatsächliche Google-Indexierung, Rankings und reale Nutzerdaten bleiben von diesen Build-, Inhalts- und Laborprüfungen getrennt.
