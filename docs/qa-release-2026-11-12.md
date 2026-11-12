# Veröffentlichung und Live-Prüfung am 12.11.2026

## Bestätigter Release

Der aktuelle Frontend-Release ist `0e8b4f0402d0d12c89794e832889ea3b36afbc6c` aus [PR #11](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/11). Nach dem erfolgreichen [PR-Check 43149210773](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43149210773) hat der [Main-Workflow 43149328326](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43149328326) den vollständigen Release-Check und das Deployment erfolgreich abgeschlossen. Die AVIF-Varianten und frühen Bild-Preloads sind damit veröffentlicht; ihr separater Live-Audit ist unten dokumentiert. Die vollständige abschließende PageSpeed-Messreihe mit 194 Ergebnissen ist unten dokumentiert; das Ziel universeller mobiler 100 Performance wurde nicht vollständig erreicht.

Die inhaltliche Erweiterung mit 70 Ratgebern wurde zuvor durch [PR #10](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/10) als `101922229c42e09b02458f3982ea2a8947ca0451` veröffentlicht; [Main-Workflow 43146465310](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43146465310) war erfolgreich. Dieser Bericht ergänzt die [lokale Vorbereitung vom 11.11.2026](qa-subpages-70-guides-2026-11-11.md); die dortigen Zahlen und offenen Schritte bleiben als damaliger Stand erhalten.

Unmittelbar vor dem Merge von PR #10 bestand `npm run check` auf dessen vollständigem Head `c898f220a340734a2fbe5f858a6ceb3f9926bde8`: 190 Tests sowie Katalog-, Bild-, TypeScript-, RustDesk-, Build-, SEO- und Redirect-Prüfungen. Der veröffentlichte Stand enthält 100 kanonische Seiten, darunter 98 indexierbare URLs und 70 Ratgeber mit jeweils eigenem Bild.

Die damaligen Workflows von PR #10 blieben ohne gestartete Jobs in der Warteschlange. Der [manuelle Lauf 43096546607](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43096546607) endete sowohl ursprünglich als auch nach genau einem Wiederholungsversuch mit `startup_failure` und null Jobs. GitHub zeigte einen internen, möglicherweise vorübergehenden Fehler; Anwendungstests waren dort nicht ausgeführt worden. Die Workflow-Datei war gegenüber dem letzten erfolgreichen Referenzstand unverändert. Nach dem vollständigen lokalen Check erfolgte ein normaler Merge mit Prüfung des erwarteten PR-Heads, ohne Admin-Override. Erst der anschließend erfolgreiche Main-Workflow bestätigt die Veröffentlichung von PR #10. PR #11 hatte dagegen bereits vor dem Merge einen erfolgreichen PR-Check.

## Öffentlicher HTTP- und Asset-Audit von PR #10

Prüfzeit: 12.11.2026, 04:12–04:15 Uhr Europe/Berlin. Vor Beginn wurden der erfolgreiche Workflow, sein Release-Commit und die Übereinstimmung des lokalen Release-Baums geprüft.

| Prüfbereich | Bestätigtes Ergebnis |
| --- | --- |
| Seiten | 96 von 96: Ratgeberübersicht und 70 Artikel sowie Leistungsübersicht und 24 Leistungsseiten einschließlich Fernwartung |
| Status und SEO | HTTP 200, richtige selbstreferenzierende Canonical-URL und indexierbare Robots-Angabe auf allen 96 Seiten |
| CSS | Gemeinsames CSS und passende Seitenfamilie im HTML; exakte Übereinstimmung mit dem gebauten Release, keine blockierenden Stylesheet-Links |
| Artikelbilder | Bild, responsive Varianten, `Article`-Schema und individuelle Open-Graph-/Twitter-Daten stimmen mit dem Release überein; 70 verschiedene SHA-256-Werte der tatsächlichen 1280er-Artikelbilder |
| Neue responsive Assets | 251 von 251 öffentlich erreichbar, Bytezahl und SHA-256 stimmen mit dem Release überein |
| Alle abgerufenen Bild-Assets | 396 einschließlich gemeinsamem SVG; Anwendung und SupportBot-Assets ebenfalls gegen den Release geprüft |
| Gesamtergebnis | 5.088 von 5.088 Prüfungen bestanden, keine offenen Fehler; 495 unterschiedliche HTTP-Ressourcen, 496 GET-Anfragen |

Der unmittelbare Chat-Mount ist im Einstiegscode erhalten. Dieser Audit prüft HTTP und ausgelieferte Quellen; Browserinteraktion und PageSpeed werden getrennt bewertet. Unveränderte historische Weiterleitungen wurden dabei nicht erneut abgerufen.

Eine zunächst zu enge Annahme des Audit-Skripts erlaubte Bilder ausschließlich unter `/images/` und markierte das vorgesehene gemeinsame `/favicon.svg` fälschlich. Die Prüfmethodik wurde korrigiert und nur dieses Asset gezielt nachgeprüft. Das öffentliche SVG stimmt bytegenau mit dem Release-Git-Blob überein; die Windows-Arbeitskopie unterscheidet sich lediglich durch CRLF-Zeilenenden. Dafür war keine Änderung an der Website nötig. Die beiden gezielten Zusatzabrufe sind in den 496 Anfragen enthalten; der ursprüngliche Bericht bleibt archiviert.

## Öffentlicher AVIF- und Preload-Audit von PR #11

Prüfzeit: 12.11.2026, 04:37:28–04:38:04 Uhr Europe/Berlin. Der Audit startete erst nach dem erfolgreichen Main-Deployment von `0e8b4f0` und bestätigter Übereinstimmung des lokalen Release-Baums. Er bestand **12.440 von 12.440 Prüfungen**, ohne Fehler oder wiederholte Anfragen.

| Prüfbereich | Bestätigtes Ergebnis |
| --- | --- |
| Seiten | Alle 96 Ratgeber- und Leistungsseiten: HTTP 200, richtige Canonical-URL, indexierbare Robots-Angabe und korrektes Inline-CSS ohne blockierende Stylesheet-Links |
| Neue AVIF-Dateien | Alle 518 Varianten für 74 Motive: HTTP 200, richtiger MIME-Typ, Bytezahl und SHA-256 passend zu Release und Generierungsmanifest, erfolgreich in den vorgesehenen Abmessungen dekodiert |
| Bilder und Sharing | Je 70 unterschiedliche tatsächliche WebP- und AVIF-Artikelbilder; die vorhandenen WebP-Dateien sowie die individuellen `Article`-, Open-Graph- und Twitter-Bilder bleiben korrekt |
| Responsive Auslieferung | 368 `picture`-Blöcke mit passenden AVIF-Quellen und WebP-Fallbacks; Attribute und Bildzuordnung stimmen mit dem Release überein |
| Kritische Bilder | 90 Bild-Preloads stimmen jeweils genau mit der zugehörigen eager Bildquelle überein und stehen im Head nach der CSP, vor dem CSS; die unveränderte Leistungsübersicht verwendet weiterhin ihren vorgesehenen WebP-Preload |
| Öffentliche Ressourcen | 914 Bild-Assets sowie Anwendungs- und SupportBot-Assets geprüft; insgesamt 1.013 Ressourcen in 1.013 GET-Anfragen |

Der Audit ruft nur öffentliche kanonische Seiten und Release-Assets ab. Er prüft keine privaten Endpunkte und wiederholt keine unveränderten Cloudflare-Fälle. Die [kompakten Release-Belege](qa/release-2026-11-12.json) enthalten die Zusammenfassungen und Hashes der vollständigen lokalen Berichte.

## Cloudflare-Weiterleitungen

Im Cloudflare-Dashboard wurden nach dem Import der 180 Ergänzungen **886 aktive Regeln** und die weiterhin aktivierte zugehörige Regel bestätigt. Die Generierung erhält die bestehenden 706 CSV-Regelzeilen unverändert.

Der anschließende öffentliche Audit lief am 12.11.2026 von 04:16:28 bis 04:16:36 Uhr Europe/Berlin: **330 neue HTTP-/HTTPS-Fälle plus 18 Query-Proben, insgesamt 348 von 348 bestanden**. Die HEAD-Anfragen folgten Weiterleitungen nicht automatisch. Alle geprüften Antworten liefern direkt HTTP 301 zum erwarteten kanonischen Ziel; die Query-Proben behalten ihre Parameter. Es gab keine Wiederholungen oder offenen Fehler.

Dieser Lauf betrifft ausschließlich die 180 neuen Regeln für 30 neue Artikel. Er wiederholt nicht den früheren Audit der unveränderten 706 Regeln. Die [Ergänzungs-CSV](seo/guide-expansion-redirects.csv) hat SHA-256 `1892ba5adf37da854d92bedf4f1c2b6b727c2a87be9b3b52c85d5158e6d151de`.

## Chat-Worker

Worker-Version `89ac0435-569c-4c21-9ea5-6ed67c1fd097` ist mit 100 % Traffic aktiv. Die öffentliche Health-Prüfung war erfolgreich. Drei tatsächliche Antworten über die Website wurden im Browser bestätigt: eine geschäftliche Frage, eine allgemeine Frage und ein strukturierter Supportfall.

Der Worker verwendet `gpt-5.6-terra`; beide Responses-Aufrufe setzen ausdrücklich `reasoning: { effort: 'none' }`. Der Browser lädt und bindet den Chat weiterhin beim Seitenaufruf ein. Die tatsächlichen Antworten bestätigen die Funktion des veröffentlichten Workers, keine garantierte Antwortqualität für jede mögliche Anfrage.

Die öffentliche [OpenAI-Programmbeschreibung](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai) führt `gpt-5.6-terra` und das bisherige `gpt-5.4-mini-2026-03-17` in derselben Gruppe für kostenlose Tokens bei qualifizierter Datenfreigabe. Die Teilnahme wurde im Account-Dashboard bestätigt. Daraus werden hier keine individuelle Restquote, bestimmte Abrechnung oder dauerhaft kostenlose Nutzung abgeleitet; private Account- und Projektkennungen werden nicht veröffentlicht.

## Vollständige PageSpeed-Messung nach PR #11

Am 12.11.2026 von 04:37:42 bis 04:50:45 Uhr Europe/Berlin wurden alle **97 URLs jeweils mit Mobile und Desktop gemessen: 194 Ergebnisse**. Die Menge entspricht exakt den 96 Ratgeber-/Leistungsseiten plus Startseite aus dem gebauten Manifest. Es gibt keine fehlenden oder doppelten URL-/Gerätekombinationen; alle Datensätze gehören zu Release `0e8b4f0`. Genau ein Google-PageSpeed-Lauf je URL wurde erhalten, ohne günstigere Wiederholungen auszuwählen.

| Kategorie | Mobile, 97 Messungen | Desktop, 97 Messungen |
| --- | --- | --- |
| Performance | 66 × 100, 27 × 99, 4 × 98 | 97 × 100 |
| SEO | 97 × 100 | 97 × 100 |
| Barrierefreiheit | 97 × 100 | 97 × 100 |
| Best Practices | 97 × 100 | 97 × 100 |

**Das Ziel von 100 Performance auf jeder mobilen Seite ist nicht vollständig erreicht.** Die vier mobilen 98-Werte sind:

| URL | Mobile LCP | Öffentlicher Bericht |
| --- | ---: | --- |
| `/ratgeber/smart-home-netzwerk/` | 2419 ms | [Google PageSpeed](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-smart-home-netzwerk/n270ipwgy8?form_factor=mobile) |
| `/ratgeber/ipv4-ipv6-verstehen/` | 2423 ms | [Google PageSpeed](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-ipv4-ipv6-verstehen/defh3f53db?form_factor=mobile) |
| `/ratgeber/smart-tv-streaming-probleme/` | 2275 ms | [Google PageSpeed](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-smart-tv-streaming-probleme/krd85oyfgm?form_factor=mobile) |
| `/` | 2357 ms | [Google PageSpeed](https://pagespeed.web.dev/analysis/https-schultes-it-de/6ofjfy447v?form_factor=mobile) |

Die [vollständige Tabelle mit allen 97 URLs und beiden öffentlichen Berichten](qa/pagespeed-2026-11-12.md) und die [unveränderten 194 Messdatensätze](qa/pagespeed-2026-11-12.json) sind versioniert. Mobile LCP liegt in diesen Messungen zwischen 919 und 2423 ms, Desktop LCP zwischen 260 und 659 ms. Mobile TBT liegt bei 0–5 ms und CLS bei 0; Desktop TBT liegt bei 0 und CLS bei 0–0,03.

Dies sind Lighthouse-Labormessungen zum genannten Zeitpunkt. Die 100er-Kategorien belegen die dort ausgeführten Prüfungen; sie garantieren weder reale Ladezeiten bei jedem Nutzer noch vollständige Barrierefreiheit, Google-Indexierung oder Rankings.

### Vergleich mit den acht Ausgangsseiten

Die [ursprünglichen 16 Datensätze von PR #10](qa/pagespeed-baseline-1019222.json) bleiben unverändert erhalten. Der folgende Vergleich stellt die erste mobile Messung von `1019222` der ersten mobilen Messung von `0e8b4f0` gegenüber. Desktop Performance lag für diese acht URLs vorher und nachher bei 100.

| URL | Mobile Performance vorher → nachher | Mobile LCP vorher → nachher | Google-Berichte |
| --- | ---: | ---: | --- |
| `/ratgeber/handy-fotos-sichern/` | 100 → 100 | 1351 → 1203 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-handy-fotos-sichern/bhw8b3ttr4?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-handy-fotos-sichern/h8848neaxb?form_factor=mobile) |
| `/fernwartung/` | 99 → 99 | 2126 → 2133 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung/sm0w2yleuu?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung/s07xg6ywc3?form_factor=mobile) |
| `/leistungen/` | 100 → 100 | 924 → 925 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-leistungen/52dk6s628c?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-leistungen/cepci7gx9a?form_factor=mobile) |
| `/ratgeber/internet-geschwindigkeit-messen/` | 98 → 99 | 2402 → 2252 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-internet-geschwindigkeit-messen/le736zlk19?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-internet-geschwindigkeit-messen/505z9f9tvu?form_factor=mobile) |
| `/ratgeber/` | 99 → 99 | 2274 → 2252 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber/5hn5ws9146?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber/ox47e8fccp?form_factor=mobile) |
| `/fernwartung/windows-hilfe/` | 97 → 100 | 2497 → 937 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-windows-hilfe/4pnddga5cj?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-windows-hilfe/e8ek7bmm9q?form_factor=mobile) |
| `/fernwartung/drucker-hilfe/` | 100 → 99 | 1051 → 2145 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-drucker-hilfe/f09jz60vg9?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-drucker-hilfe/2xnkqeivkb?form_factor=mobile) |
| `/fernwartung/email-outlook/` | 100 → 99 | 1051 → 1995 ms | [Vorher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-email-outlook/10jnawz0dl?form_factor=mobile) · [Nachher](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-email-outlook/v6u0d4goyx?form_factor=mobile) |

Zwei Mobile-Performance-Scores steigen, vier bleiben gleich und zwei sinken von 100 auf 99. Eine pauschale Verbesserung aller acht gemessenen Seiten wird deshalb nicht behauptet. Der Vergleich dokumentiert die tatsächlich beobachteten Laborwerte; er isoliert keine einzelne Ursache für Unterschiede zwischen den Läufen.

### Verbleibende Performance-Befunde

Im [99er-Bericht für Internet-Geschwindigkeit](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-internet-geschwindigkeit-messen/505z9f9tvu?form_factor=mobile) erreicht die Seite FCP 929 ms, LCP 2252 ms, TBT 0, CLS 0 und Speed Index 929 ms. Als einzige renderblockierende Ressource wurde dort Cloudflares E-Mail-Dekodierskript aufgeführt: 1,2 KiB, 150 ms Dauer und geschätzte 130 ms Einsparung. Diese Lighthouse-Schätzung beweist nicht, dass das Skript sämtliche verbleibenden 98/99-Werte verursacht.

Eine direkte öffentliche HTML-Prüfung, auch mit Query-Variante, zeigte das Skript mit `data-cfasync="false"` ohne `defer`. Cloudflare beschreibt seit dem 14.04.2026 eine automatische [Auslieferung dieses Skripts mit `defer`](https://developers.cloudflare.com/changelog/post/2026-04-14-email-obfuscation-defer/); die tatsächlich geprüfte Antwort entspricht diesem angekündigten Verhalten noch nicht. Die E-Mail-Verschleierung bleibt aktiv. Für einen Score-Punkt wurden keine Cloudflare-Schutzfunktionen abgeschaltet und keine zusätzliche Worker-Umschreibung eingeführt.

Die untersuchten 98er-Artikelbilder verwenden die korrekte responsive 720er-Variante; zwei geprüfte Dateien lagen bei 28,6 beziehungsweise 31,2 KB. Die LCP-Aufschlüsselung zeigte beim IPv4/IPv6-Artikel nur 20 ms Element-Renderverzögerung. Sie liefert dort keinen Hinweis auf die Fade-Animation als wesentlichen Engpass. Die vorhandenen Motive und Animationen bleiben erhalten.

## Veröffentlichte Bildoptimierung und Browser-Abnahme

PR #11 veröffentlicht 518 AVIF-Varianten mit Qualität 65 aus den ursprünglichen PNGs für 74 Motive sowie frühe Preloads für die kritischen Bilder. Vergleichbare Bilddateien sind insgesamt 28,3 % kleiner; alle bisherigen WebP-Dateien bleiben unverändert. Der vollständige Check mit 190 Tests ist bestanden. Eine im Browser gefundene Grid-Verschiebung durch das `source`-Element wurde durch dessen explizites Ausblenden korrigiert; Build und SEO-Prüfung sind danach erneut bestanden.

Sechs abschließende Layoutvergleiche zwischen der vorher veröffentlichten Seite und der lokalen Vorschau bei 390, 600 und 1280 Pixeln bestätigten vor dem Release identische Bildpositionen, Abmessungen und Ausschnitte. Der Browser lud beim Artikel nur die passende AVIF-Datei, ohne zusätzlichen WebP-Abruf. Nach Hydration verblieb genau ein Bild-Preload im Head, der Chat war ohne vorheriges Öffnen eingebunden, und das Desktopmenü öffnete weiterhin per Hover. Es wurden keine Browserfehler beobachtet. Dies sind Browserprüfungen in simulierten Ansichten; die öffentliche Dateiparität nach Veröffentlichung belegt der separate AVIF-Audit.

## Sitemap-Einreichung und Verarbeitungsstand

Die veröffentlichten XML- und Text-Sitemaps enthalten 98 indexierbare URLs. `https://schultes-it.de/sitemap.xml` wurde am 12.11.2026 erneut in der Google Search Console eingereicht; die Oberfläche bestätigte „Sitemap wurde eingereicht“.

Die Übersicht zeigte danach weiterhin 68 erkannte URLs und den letzten Lesezeitpunkt 11.11.2026. Das ist der noch angezeigte frühere Verarbeitungsstand, kein Beleg dafür, dass Google bereits alle 98 aktuellen URLs verarbeitet oder indexiert hat. Die erfolgreiche Einreichung ist bestätigt; die neue Verarbeitung und tatsächliche Indexierung bleiben getrennt zu beobachten. Der [kompakte Beleg](qa/release-2026-11-12.json) hält Einreichung, aktuellen Sitemap-Umfang und angezeigten Altstand ausdrücklich getrennt fest.

## Lokale Prüfbelege

Die vollständigen HTTP-Einzelantworten bleiben außerhalb des Repositorys. Für die Zuordnung dienen diese kompakten Zusammenfassungen und ihre SHA-256-Werte:

| Beleg | SHA-256 |
| --- | --- |
| `%TEMP%\schultes-subpages-live-audit-summary.json` | `36e9a2d7b9ebd2789ab90fcd3b5b0fdbc2a3559f7bf5a4a9e78e8bf8363b95fd` |
| `%TEMP%\schultes-guide-expansion-redirect-audit-summary.json` | `56b1123d60848b6e388051729ce3faa395fae1f11258556d735777ef045c3c7f` |
| `%TEMP%\schultes-avif-live-audit-summary.json` | `cf0c30f9f532b4d03cbb4d76c5319842edee626fcbc39c478e17714d46c93589` |
| [Historische 16 Ausgangsmessungen](qa/pagespeed-baseline-1019222.json) | `6d4bb2d7b432e2e8518cec8b9929b29e91e046178656363a7409f5a5977eaed5` |
| [Finale 194 Messungen](qa/pagespeed-2026-11-12.json) | `9b0df7e557b67cfbc4e2fcac0ae9d662b3b1134f3bb87957e8152f7511430cec` |

Die beiden versionierten PageSpeed-JSON-Dateien sind bytegenaue Kopien der jeweiligen Originalbelege. Die [kompakte Release-Zusammenfassung](qa/release-2026-11-12.json) enthält zusätzlich Prüfumfang, Ergebnisverteilungen, Berichts-Hashes und die Sitemap-Bestätigung. Vollständige HTTP-Einzelantworten bleiben lokal und werden nicht in das Repository aufgenommen.
