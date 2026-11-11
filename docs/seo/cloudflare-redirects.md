# URL-Umzug und aktive Cloudflare-Weiterleitungen

Stand: 11.11.2026, nach Veröffentlichung von PR #7 und dem Live-Audit um 20:15–20:16 Uhr (Europe/Berlin). Die Website und der Support-Worker sind veröffentlicht; insgesamt 706 Cloudflare-Weiterleitungen sind aktiviert. Alle 1.342 HTTP-/HTTPS-Redirectfälle und 18 zusätzliche Query-Fälle wurden erfolgreich geprüft. Die versionierte `robots.txt` wird unverändert ausgeliefert. Die XML-Sitemap wurde in Search Console erneut angenommen; die Oberfläche zeigte noch den bisherigen Stand von 28 erkannten Seiten. Die Verarbeitung der nun 68 Sitemap-URLs und deren tatsächliche Indexierung bleiben unbestätigt. Frühere Auditstände sind unten als solche gekennzeichnet.

## Kanonische Ziele

Die Seiten-Registry enthält 70 kanonische Seiten, darunter 40 eigenständige Ratgeber: 68 sollen indexiert werden, Impressum und Datenschutz bleiben bewusst `noindex, follow`. Dazu kommen 48 historische Alias-Pfade. Die Fehlerseite `404.html` bleibt ebenfalls `noindex, follow` und steht nicht in den Sitemaps.

| Bisheriger Pfad | Endgültiges Ziel |
| --- | --- |
| `/standorte/`, `/standorte/ludwigsburg/`, `/ludwigsburg/`, `/standortinhaber-werden/` | `/` mit Andrejs Betrieb, Leistungen, Preisen und Kontakt |
| `/pc-system/`, `/standorte/ludwigsburg/pc-laptop/` | `/leistungen/pc-laptop/` |
| `/tools-automation/`, `/standorte/ludwigsburg/automation/` | `/leistungen/automation/` |
| Weitere flache lokale Leistungspfade und `/standorte/ludwigsburg/<leistung>/` | Die entsprechende Seite `/leistungen/<leistung>/` |
| `/standorte/ludwigsburg/fernwartung/` und ihre bisherigen Unterseiten | `/fernwartung/` und die entsprechenden nationalen Unterseiten |

Bestehende `/leistungen/pc-laptop/`, `/leistungen/netzwerk-wlan/`, `/leistungen/webseiten/` und `/leistungen/automation/` sind nun wieder kanonisch. Keine Leistungsseite wird pauschal zur Startseite umgeleitet. Jeder Alias zeigt direkt auf sein endgültiges Thema, nicht auf einen weiteren Alias.

Alle 62 Pfade aus dem [historischen Inventar vom 26.10.2026](historical-routes.json) wurden gegen die neue Registry auf Auflösbarkeit geprüft. Das Inventar bewahrt historische Metadaten und die damaligen Zuordnungen; aktuelle Zielpfade ergeben sich aus `src/site/routes.ts`, `src/content/services.ts` und der neu erzeugten [CSV](legacy-redirects.csv). Codehistorie belegt keine Google-Indexierung oder damalige Veröffentlichung.

## Indexierung bewusst steuern

- Kanonische Angebots-, Ratgeber- und Unternehmensseiten erhalten einen selbstreferenzierenden Canonical, `index, follow` und stehen in `sitemap.xml` und `sitemap.txt`.
- Impressum, Datenschutz und Fehlerseite bleiben erreichbar und crawlbar. Ihr `noindex` steht im HTML. Google muss die Seite abrufen können, um diese Regel zu lesen; deshalb gibt es dafür keine `Disallow`-Regel in `robots.txt`. Siehe [Google zu noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- Alias-Dokumente bleiben crawlbar, erhalten `index, follow`, einen Canonical auf das Endziel und einen Meta-Refresh mit null Sekunden. Sie stehen nicht in den Sitemaps und werden nicht zusätzlich mit `noindex` versehen. Google behandelt sofortige Meta-Weiterleitungen als permanentes Signal; HTTP 301/308 sind nach Möglichkeit vorzuziehen. Siehe [Google zu Weiterleitungen](https://developers.google.com/search/docs/crawling-indexing/301-redirects).
- Beide Sitemaps werden aus derselben Liste indexierbarer kanonischer Seiten erzeugt. `sitemap.txt` ist eine unterstützte Text-Sitemap mit einer absoluten URL pro Zeile. Eine zusätzliche `index.txt` mit erfundenen Indexierungsbefehlen wird nicht angelegt. Siehe [Google zum Erstellen von Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- `site-manifest.json` enthält die Gründe für beabsichtigte Indexierung, Ausschlüsse und Alias-Ziele zur Build-Prüfung. Diese eigenen Erklärfelder sind keine Google-Direktiven und garantieren keine Indexierung.

`robots.txt` verweist auf die XML-Sitemap und lässt Googlebot die Website abrufen. Bestehende Ausschlüsse anderer benannter Crawler wurden nicht erweitert. Beim Live-Audit fiel auf, dass Cloudflares Managed-Robots-Funktion die Origin-Datei ersetzte und dabei den versionierten Sitemap-Verweis nicht auslieferte. Daraufhin wurde ausschließlich „Enable Bot Preference Sync“ deaktiviert. Der folgende Live-Abruf lieferte HTTP 200 über Cloudflare und nach Normalisierung der Zeilenenden exakt den Inhalt von `public/robots.txt`, einschließlich Sitemap-Verweis und bestehender expliziter AI-Crawler-Ausschlüsse.

## GitHub Pages und echte HTTP-Redirects

Die statischen Alias-Dateien können auf GitHub Pages keinen eigenen HTTP-301/308-Status setzen. Ihre sofortige HTML-Weiterleitung funktioniert als Rückfallweg; ein kleines Skript davor erhält vorhandene Query-Parameter und Sprungmarken. Ein normaler Link zum Endziel bleibt enthalten. Die volle React-Anwendung wird auf Alias-Dokumenten nicht geladen.

Die frühere read-only Prüfung vom 26.10.2026 zeigte direkte GitHub-Pages-Antworten und Cloudflare-Nameserver. Dieser historische Zustand gilt nicht als Beschreibung des aktuellen Betriebs: Nach der Veröffentlichung am 11.11.2026 wurden die unten dokumentierten Cloudflare-Proxy- und Redirect-Einstellungen aktiviert. Die statischen Alias-Dateien bleiben als Rückfallweg erhalten. Das bloße Committen oder Importieren einer CSV allein würde keine Edge-Weiterleitung aktivieren.

## Aktivierte CSV

[legacy-redirects.csv](legacy-redirects.csv) enthält 706 eindeutige Regeln ohne Kopfzeile im [Cloudflare-CSV-Format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/). Die 240 mit PR #7 hinzugekommenen Regeln für Ratgeber stehen zusätzlich separat in [guide-redirects.csv](guide-redirects.csv):

```text
SOURCE_URL,TARGET_URL,STATUS_CODE,PRESERVE_QUERY_STRING,INCLUDE_SUBDOMAINS,SUBPATH_MATCHING,PRESERVE_PATH_SUFFIX
```

```csv
schultes-it.de/pc-system/,https://schultes-it.de/leistungen/pc-laptop/,301,TRUE,FALSE,FALSE,FALSE
schultes-it.de/standorte/ludwigsburg/,https://schultes-it.de/,301,TRUE,FALSE,FALSE,FALSE
```

Die Regeln decken ab:

- 288 Alias-Regeln: 48 Pfade, jeweils ohne Slash, mit Slash und mit `/index.html`, für Hauptdomain und `www`.
- 140 Regeln für die `index.html`-Varianten der 70 kanonischen Seiten auf beiden Hosts.
- 138 Regeln für kanonische Unterseiten ohne abschließenden Slash auf beiden Hosts.
- 70 Regeln für kanonische Pfade unter `www`.
- 70 ausschließlich auf HTTP begrenzte Regeln für die kanonischen Pfade der Hauptdomain.

Alle Ziele sind kanonische HTTPS-Adressen. Keine Zieladresse ist selbst Quelle einer passenden HTTPS-Regel. Query-Parameter bleiben erhalten. Exaktes Matching und deaktiviertes Subpath-/Subdomain-Matching verhindern pauschale Treffer auf unbekannte Unterpfade, Assets oder Downloads. Unbekannte URLs liefern weiterhin 404. Der Support-Worker läuft separat auf `schultes-it-support.schultes-andrej.workers.dev`; eine Custom-Domain `support.schultes-it.de` ist nicht eingerichtet und besitzt keine DNS-Einträge oder Worker-Routen.

Die alte Projektadresse `andrej1707.github.io/schultes-it-netzwerksupport/` gehört nicht zur Cloudflare-Zone und ist deshalb kein CSV-Eintrag. Ein entsprechender erfundener Pfad unter der Hauptdomain wird nicht ergänzt.

## Erste Veröffentlichung und Cloudflare-Aktivierung am 11.11.2026

Alle Uhrzeiten in Europe/Berlin:

- Website: [PR #4](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/4) wurde als `97ff37d` gemergt; [Pages-Run 43071677269](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43071677269) war um 18:49 Uhr erfolgreich.
- Support-Worker: Version `9a134154-b1f8-49b6-9f70-0cc1905f38e6`, Deployment `7f6b75d2-e986-4946-9609-384da9c9b56b`, seit 18:55 Uhr mit 100 % Traffic. Vorherige Version für ein mögliches Rollback: `671b061b-3eef-463d-a95a-5bb31643c6de`.
- Bulk-Redirect-Liste bei der Erstveröffentlichung: `schultes_it_canonical_20261111`, ID `bb9f350e26c343228f9cc5ef0de143f2`, mit 466 Einträgen.
- Zugehörige Regel `08ec7a8dc1dd4b5bafe4d07c8aefe32e` ist aktiviert.
- Die vier A-Records der Hauptdomain auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153` und `185.199.111.153` sowie der `www`-CNAME auf `andrej1707.github.io` sind proxied. Übrige DNS-Einträge, insbesondere Mail, wurden nicht geändert.
- Nach Prüfung des gültigen Origin-TLS-Zertifikats wurde Cloudflare auf `Full (strict)` gesetzt; vorher galt der automatisch bestimmte Modus `Full`.

Die Standort-Aliasprobe lieferte eine direkte HTTP-301-Weiterleitung mit erhaltenen Query-Parametern. Im Live-Browser wurde zusätzlich
`/standorte/ludwigsburg/?utm_source=release-check#kontakt` auf
`https://schultes-it.de/?utm_source=release-check#kontakt` aufgelöst. Diese Browserprobe ergänzt den nachfolgend dokumentierten vollständigen HTTP-Audit um den Erhalt der Sprungmarke.

Der zusätzliche Desktop-Hover-Wunsch wurde mit [PR #5](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/5), Code-Commit `38ecb33`, zusammengeführt und veröffentlicht. Die Prüfungen vor dem Zusammenführen stehen in [der QA-Dokumentation](../qa-2026-11-11.md).

## Historischer Audit der ersten Veröffentlichung

Der erste vollständige Redirect-Audit am 11.11.2026 hat die damaligen 466 CSV-Regeln in 902 HTTP-/HTTPS-Fällen erfolgreich geprüft. Die Zahl entstand aus 436 schemafreien Quellen, jeweils über HTTP und HTTPS, plus 30 ausschließlich über HTTP geltenden Quellen. Die folgenden Ergebnisse beschreiben diesen früheren Stand vor den 40 Ratgebern.

- Alle 902 Fälle liefern die erwartete 301-Weiterleitung direkt zum jeweiligen kanonischen CSV-Endziel.
- Acht zusätzliche Query-Fälle erhalten die Parameter vollständig.
- Alle 30 kanonischen Ziele liefern HTTP 200 mit den erwarteten Metadaten und selbstreferenzierenden Canonicals. Eine unbekannte URL liefert 404 und `noindex`.
- In den Live-Prüfungen traten insgesamt sieben vorübergehende Netzwerkfehler auf: drei bei kanonischen Seiten/Aliasproben und vier im CSV-Audit. Alle gezielten Wiederholungen waren erfolgreich; diese Wiederholungen sind Teil des dokumentierten Ergebnisses.
- Der anschließend korrigierte `robots.txt`-Abruf liefert die vollständige versionierte Datei mit Sitemap-Verweis; Cloudflares Managed-Content-Ersetzung ist nicht mehr in der Antwort enthalten.
- `HEAD /downloads/rustdesk.exe` liefert 200 mit `application/octet-stream`, `HEAD /favicon.svg` 200 mit `image/svg+xml`, jeweils ohne Weiterleitung. Die Live-EXE wurde dabei nicht erneut vollständig heruntergeladen oder gehasht; die Dateiprüfsumme wurde lokal und in CI geprüft.
- Der tatsächliche Worker-Endpunkt `https://schultes-it-support.schultes-andrej.workers.dev/health` liefert 200 mit JSON einschließlich `ok` und Modellangabe. Eine nicht eingerichtete Support-Custom-Domain wird nicht als getestet ausgewiesen.

## Erweiterung und Live-Audit von PR #7

[PR #7](https://github.com/Andrej1707/schultes-it-netzwerksupport/pull/7) wurde als `ecafb5c02a5885e58aeec1cacfe65ae928a89949` zusammengeführt und durch [Pages-Run 43085147477](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/runs/43085147477) veröffentlicht. Mit den 240 aktivierten zusätzlichen Ratgeberregeln sind insgesamt 706 Regeln aktiv.

Der Audit vom 11.11.2026, 20:15:46 bis 20:16:47 Uhr (Europe/Berlin), bestand mit 1.445 Fällen ohne verbleibenden Fehler:

- 1.342 Redirectfälle: 636 schemafreie Quellen jeweils über HTTP und HTTPS sowie 70 ausschließlich auf HTTP begrenzte Quellen. Alle liefern direkt die erwartete 301-Weiterleitung; geprüft mit `HEAD` und ohne automatisches Folgen.
- 18 zusätzliche Query-Fälle erhalten die Parameter.
- Alle 70 kanonischen Seiten einschließlich 40 Artikelseiten wurden geprüft; Impressum und Datenschutz bleiben die zwei gewollt nicht indexierbaren kanonischen Seiten.
- Beide Sitemaps enthalten 68 indexierbare URLs. `robots.txt` und zwölf neue Bilddateien wurden ebenfalls erfolgreich geprüft.
- Ein anfänglicher Timeout für `http://schultes-it.de/router-entstoerung` wurde gezielt wiederholt; danach lieferte die URL die erwartete 301-Antwort.

Die kombinierte CSV hat den SHA-256-Wert `f77520507accc9015316995fbbd5bbcb61990188ccc1d4ce8e2f77592b9d132b`. Die Protokolle `schultes-pr7-live-audit.json` und `schultes-pr7-live-audit-summary.json` liegen außerhalb des Repositorys im temporären Arbeitsverzeichnis der ausführenden Sitzung. Weitere Browser- und Performance-Ergebnisse stehen in [der Release-QA](../qa-home-guides-2026-11-11.md).

## Search Console und noch offene Indexierungsbeobachtung

Die XML-Sitemap wurde nach PR #7 erneut eingereicht und von Search Console angenommen. Die Oberfläche zeigte zum Prüfzeitpunkt noch 28 erkannte Seiten; der öffentliche Sitemap-Abruf enthält bereits 68 URLs. Die Annahme der Einreichung bestätigt nicht die anschließende Verarbeitung oder Indexierung aller neuen Artikel.

Repräsentative alte und neue URLs bleiben über die URL-Prüfung zu beobachten. Erwartete Ausschlüsse von Weiterleitungs-URLs sind von unerwarteten Ausschlüssen neuer kanonischer Angebots- oder Ratgeberseiten zu unterscheiden. Tatsächliche Indexierung und Rankings werden nicht aus erfolgreichen HTTP- oder Sitemap-Prüfungen abgeleitet.

Aktuelle Voraussetzungen und Auswertungsreihenfolge der Edge-Regeln stehen in der [Cloudflare-Dokumentation](https://developers.cloudflare.com/rules/url-forwarding/).

Nach einem URL-Umzug sollen Weiterleitungen mindestens ein Jahr, möglichst dauerhaft bestehen bleiben. Google benötigt Zeit zum erneuten Crawlen und Verarbeiten; eine sofortige oder garantierte Platzierung folgt aus der Umstellung nicht. Siehe [Google zu URL-Umzügen](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Historische Sprungmarken

Fragmente nach `#` werden nicht an den HTTP-Server gesendet. Daher sind sie nicht Teil der CSV. `src/site/legacyFragments.ts` behandelt die vorhandenen historischen Anker:

| Alte Sprungmarke | Verhalten |
| --- | --- |
| `/#leistungen` | Bleibt bei der Leistungssektion auf `/#leistungen`; keine Weiterleitung. |
| `/#preise`, `/#projekte`, `/#kompetenzen`, `/#andrej`, `/#ludwigsburg`, `/#arbeitsweise`, `/#alltagshilfe`, `/#kontakt` | Bleiben auf den vorhandenen Abschnitten der neuen lokalen Startseite |
| `/#main` | `/#main-content` |
| `#/impressum`, `#/datenschutz` | Die jeweilige kanonische Rechtsseite |
| Leistungsseite `#was-ich-loese` | Dieselbe kanonische Leistungsseite mit `#service-solutions` |
| Leistungsseite `#service-main` | Dieselbe kanonische Leistungsseite mit `#main-content` |
| Rechtsseite `#legal-main` | Dieselbe Rechtsseite mit `#main-content` |

Query-Parameter bleiben erhalten. Bereits gültige und unbekannte Anker werden nicht umgebogen; insbesondere erzeugt `/#kontakt` keine Selbstweiterleitung.
