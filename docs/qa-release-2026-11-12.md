# Veröffentlichung und Live-Prüfung am 12.11.2026

## Bestätigter Release

[PR #10](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/10) ist regulär zusammengeführt und als Commit `101922229c42e09b02458f3982ea2a8947ca0451` veröffentlicht. Der [Main-Workflow 43146465310](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43146465310) hat Build und Deployment erfolgreich abgeschlossen. Dieser Bericht ergänzt die [lokale Vorbereitung vom 11.11.2026](qa-subpages-70-guides-2026-11-11.md); die dortigen Zahlen und offenen Schritte bleiben als damaliger Stand erhalten.

Unmittelbar vor dem Merge bestand `npm run check` auf dem vollständigen PR-Head `c898f220a340734a2fbe5f858a6ceb3f9926bde8`: 190 Tests sowie Katalog-, Bild-, TypeScript-, RustDesk-, Build-, SEO- und Redirect-Prüfungen. Der veröffentlichte Stand enthält 100 kanonische Seiten, darunter 98 indexierbare URLs und 70 Ratgeber mit jeweils eigenem Bild.

Die vorangegangenen PR-Workflows blieben ohne gestartete Jobs in der Warteschlange. Der [manuelle Lauf 43096546607](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43096546607) endete sowohl ursprünglich als auch nach genau einem Wiederholungsversuch mit `startup_failure` und null Jobs. GitHub zeigte einen internen, möglicherweise vorübergehenden Fehler; Anwendungstests waren dort nicht ausgeführt worden. Die Workflow-Datei war gegenüber dem letzten erfolgreichen Referenzstand unverändert. Nach dem vollständigen lokalen Check erfolgte ein normaler Merge mit Prüfung des erwarteten PR-Heads, ohne Admin-Override. Erst der anschließend erfolgreiche Main-Workflow bestätigt die Veröffentlichung.

## Öffentlicher HTTP- und Asset-Audit

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

## Cloudflare-Weiterleitungen

Im Cloudflare-Dashboard wurden nach dem Import der 180 Ergänzungen **886 aktive Regeln** und die weiterhin aktivierte zugehörige Regel bestätigt. Die Generierung erhält die bestehenden 706 CSV-Regelzeilen unverändert.

Der anschließende öffentliche Audit lief am 12.11.2026 von 04:16:28 bis 04:16:36 Uhr Europe/Berlin: **330 neue HTTP-/HTTPS-Fälle plus 18 Query-Proben, insgesamt 348 von 348 bestanden**. Die HEAD-Anfragen folgten Weiterleitungen nicht automatisch. Alle geprüften Antworten liefern direkt HTTP 301 zum erwarteten kanonischen Ziel; die Query-Proben behalten ihre Parameter. Es gab keine Wiederholungen oder offenen Fehler.

Dieser Lauf betrifft ausschließlich die 180 neuen Regeln für 30 neue Artikel. Er wiederholt nicht den früheren Audit der unveränderten 706 Regeln. Die [Ergänzungs-CSV](seo/guide-expansion-redirects.csv) hat SHA-256 `1892ba5adf37da854d92bedf4f1c2b6b727c2a87be9b3b52c85d5158e6d151de`.

## Chat-Worker

Worker-Version `89ac0435-569c-4c21-9ea5-6ed67c1fd097` ist mit 100 % Traffic aktiv. Die öffentliche Health-Prüfung war erfolgreich. Drei tatsächliche Antworten über die Website wurden im Browser bestätigt: eine geschäftliche Frage, eine allgemeine Frage und ein strukturierter Supportfall.

Der Worker verwendet `gpt-5.6-terra`; beide Responses-Aufrufe setzen ausdrücklich `reasoning: { effort: 'none' }`. Der Browser lädt und bindet den Chat weiterhin beim Seitenaufruf ein. Die tatsächlichen Antworten bestätigen die Funktion des veröffentlichten Workers, keine garantierte Antwortqualität für jede mögliche Anfrage.

Die öffentliche [OpenAI-Programmbeschreibung](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai) führt `gpt-5.6-terra` und das bisherige `gpt-5.4-mini-2026-03-17` in derselben Gruppe für kostenlose Tokens bei qualifizierter Datenfreigabe. Die Teilnahme wurde im Account-Dashboard bestätigt. Daraus werden hier keine individuelle Restquote, bestimmte Abrechnung oder dauerhaft kostenlose Nutzung abgeleitet; private Account- und Projektkennungen werden nicht veröffentlicht.

## Erste PageSpeed-Messung des veröffentlichten Stands

Dies sind **acht erste URL-Messungen mit jeweils Mobile und Desktop**, aufgenommen am 12.11.2026 zwischen 04:13 und 04:14 Uhr Europe/Berlin für Release `1019222`. Die vollständige Prüfung aller 96 Unterseiten plus Startseite ist damit noch nicht abgeschlossen. Vier Mobile-Performance-Werte liegen unter 100 und werden weiter verbessert.

| URL | Performance Mobile | Performance Desktop | LCP Mobile | Google-Berichte |
| --- | ---: | ---: | ---: | --- |
| `/ratgeber/handy-fotos-sichern/` | 100 | 100 | 1.351 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-handy-fotos-sichern/bhw8b3ttr4?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-handy-fotos-sichern/bhw8b3ttr4?form_factor=desktop) |
| `/fernwartung/` | 99 | 100 | 2.126 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung/sm0w2yleuu?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung/sm0w2yleuu?form_factor=desktop) |
| `/leistungen/` | 100 | 100 | 924 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-leistungen/52dk6s628c?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-leistungen/52dk6s628c?form_factor=desktop) |
| `/ratgeber/internet-geschwindigkeit-messen/` | 98 | 100 | 2.402 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-internet-geschwindigkeit-messen/le736zlk19?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber-internet-geschwindigkeit-messen/le736zlk19?form_factor=desktop) |
| `/ratgeber/` | 99 | 100 | 2.274 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber/5hn5ws9146?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-ratgeber/5hn5ws9146?form_factor=desktop) |
| `/fernwartung/windows-hilfe/` | 97 | 100 | 2.497 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-windows-hilfe/4pnddga5cj?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-windows-hilfe/4pnddga5cj?form_factor=desktop) |
| `/fernwartung/drucker-hilfe/` | 100 | 100 | 1.051 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-drucker-hilfe/f09jz60vg9?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-drucker-hilfe/f09jz60vg9?form_factor=desktop) |
| `/fernwartung/email-outlook/` | 100 | 100 | 1.051 ms | [Mobile](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-email-outlook/10jnawz0dl?form_factor=mobile) · [Desktop](https://pagespeed.web.dev/analysis/https-schultes-it-de-fernwartung-email-outlook/10jnawz0dl?form_factor=desktop) |

Alle 16 Messungen erreichen jeweils 100 für Barrierefreiheit, Best Practices und SEO. TBT und CLS betragen jeweils 0. Dies sind Lighthouse-Labormessungen zum genannten Zeitpunkt, keine allgemeine Garantie für reale Ladezeiten, vollständige Barrierefreiheit, Google-Indexierung oder Rankings.

## Laufende Nachbesserung und offene Bestätigung

Auf `codex/final-mobile-lcp` ist eine weitere Performance-Nachbesserung lokal abgenommen: 518 AVIF-Varianten mit Qualität 65 aus den ursprünglichen PNGs für 74 Motive sowie frühe Preloads für die kritischen Bilder. Vergleichbare Bilddateien sind insgesamt 28,3 % kleiner; alle bisherigen WebP-Dateien bleiben unverändert. Der vollständige Check mit 190 Tests ist bestanden. Eine im Browser gefundene Grid-Verschiebung durch das `source`-Element wurde durch dessen explizites Ausblenden korrigiert; Build und SEO-Prüfung sind danach erneut bestanden.

Sechs abschließende Layoutvergleiche zwischen veröffentlichter Seite und lokaler Vorschau bei 390, 600 und 1280 Pixeln bestätigen identische Bildpositionen, Abmessungen und Ausschnitte. Der Browser lädt beim Artikel nur die passende AVIF-Datei, ohne zusätzlichen WebP-Abruf. Nach Hydration verbleibt genau ein Bild-Preload im Head, der Chat ist ohne vorheriges Öffnen eingebunden, und das Desktopmenü öffnet weiterhin per Hover. Es wurden keine Browserfehler beobachtet. Diese Folgeänderung ist im oben bestätigten Release noch nicht enthalten; Veröffentlichung, gezielter Live-Abgleich und neue PageSpeed-Ergebnisse sind separat zu ergänzen.

Die XML- und Text-Sitemap enthalten im geprüften Build 98 indexierbare URLs. Die erneute Einreichung und Verarbeitung in der Google Search Console nach dieser Veröffentlichung steht in diesem Bericht noch aus. Eine spätere erfolgreiche Einreichung oder Zahl erkannter URLs belegt keine vollständige Indexierung.

## Lokale Prüfbelege

Die vollständigen HTTP-Einzelantworten bleiben außerhalb des Repositorys. Für die Zuordnung dienen diese kompakten Zusammenfassungen und ihre SHA-256-Werte:

| Beleg | SHA-256 |
| --- | --- |
| `%TEMP%\schultes-subpages-live-audit-summary.json` | `36e9a2d7b9ebd2789ab90fcd3b5b0fdbc2a3559f7bf5a4a9e78e8bf8363b95fd` |
| `%TEMP%\schultes-guide-expansion-redirect-audit-summary.json` | `56b1123d60848b6e388051729ce3faa395fae1f11258556d735777ef045c3c7f` |
| `final-psi-results.json`, hier verwendeter Stand mit 16 Datensätzen | `6d4bb2d7b432e2e8518cec8b9929b29e91e046178656363a7409f5a5977eaed5` |

Die PageSpeed-Belegdatei liegt unter `C:\Users\PC\.codex\visualizations\2026\11\11\01a1cb79-e0e5-7ec0-a9c9-63ecc8c45874\final-psi-results.json`. Trotz ihres Dateinamens ist der hier ausgewertete Inhalt die erste Stichprobe; spätere Ergänzungen ändern ihren Hash und sind mit neuem Prüfstand zu dokumentieren.
