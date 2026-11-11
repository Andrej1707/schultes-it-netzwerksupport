# URL-Umzug und vorbereitete Cloudflare-Weiterleitungen

Stand: 11.11.2026. Diese Datei beschreibt die lokale Umstellung auf den inhabergeführten Betrieb von Andrej Schultes in Ludwigsburg. Cloudflare-, DNS-, Hosting- und Search-Console-Einstellungen wurden dabei nicht geändert. Die CSV ist vorbereitet, nicht aktiviert.

## Kanonische Ziele

Die Seiten-Registry enthält 30 kanonische Seiten: 28 sollen indexiert werden, Impressum und Datenschutz bleiben bewusst `noindex, follow`. Dazu kommen 48 historische Alias-Pfade. Die Fehlerseite `404.html` bleibt ebenfalls `noindex, follow` und steht nicht in den Sitemaps.

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

`robots.txt` verweist auf die XML-Sitemap und lässt Googlebot die Website abrufen. Bestehende Ausschlüsse anderer benannter Crawler wurden nicht erweitert.

## GitHub Pages und echte HTTP-Redirects

Die statischen Alias-Dateien können auf GitHub Pages keinen eigenen HTTP-301/308-Status setzen. Ihre sofortige HTML-Weiterleitung funktioniert als Rückfallweg; ein kleines Skript davor erhält vorhandene Query-Parameter und Sprungmarken. Ein normaler Link zum Endziel bleibt enthalten. Die volle React-Anwendung wird auf Alias-Dokumenten nicht geladen.

Die frühere read-only Prüfung vom 26.10.2026 zeigte direkte GitHub-Pages-Antworten und Cloudflare-Nameserver. Das wurde bei diesem lokalen Umbau nicht erneut als aktueller DNS-/Proxyzustand abgenommen. Vor Aktivierung von Edge-Regeln müssen der tatsächliche Proxyzustand, Origin-TLS und bestehende Regeln im Account geprüft werden. Das bloße Committen oder Importieren einer CSV aktiviert keine Edge-Weiterleitung.

## Vorbereitete CSV

[legacy-redirects.csv](legacy-redirects.csv) enthält 466 eindeutige Regeln ohne Kopfzeile im [Cloudflare-CSV-Format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/):

```text
SOURCE_URL,TARGET_URL,STATUS_CODE,PRESERVE_QUERY_STRING,INCLUDE_SUBDOMAINS,SUBPATH_MATCHING,PRESERVE_PATH_SUFFIX
```

```csv
schultes-it.de/pc-system/,https://schultes-it.de/leistungen/pc-laptop/,301,TRUE,FALSE,FALSE,FALSE
schultes-it.de/standorte/ludwigsburg/,https://schultes-it.de/,301,TRUE,FALSE,FALSE,FALSE
```

Die Regeln decken ab:

- 288 Alias-Regeln: 48 Pfade, jeweils ohne Slash, mit Slash und mit `/index.html`, für Hauptdomain und `www`.
- 60 Regeln für die `index.html`-Varianten der 30 kanonischen Seiten auf beiden Hosts.
- 58 Regeln für kanonische Unterseiten ohne abschließenden Slash auf beiden Hosts.
- 30 Regeln für kanonische Pfade unter `www`.
- 30 ausschließlich auf HTTP begrenzte Regeln für die kanonischen Pfade der Hauptdomain.

Alle Ziele sind kanonische HTTPS-Adressen. Keine Zieladresse ist selbst Quelle einer passenden HTTPS-Regel. Query-Parameter bleiben erhalten. Exaktes Matching und deaktiviertes Subpath-/Subdomain-Matching schützen unbekannte Unterpfade, Assets, Downloads und `support.schultes-it.de` vor diesen Regeln. Unbekannte URLs sollen weiterhin 404 liefern.

Die alte Projektadresse `andrej1707.github.io/schultes-it-netzwerksupport/` gehört nicht zur Cloudflare-Zone und ist deshalb kein CSV-Eintrag. Ein entsprechender erfundener Pfad unter der Hauptdomain wird nicht ergänzt.

## Einrichtung und Abnahme nach Veröffentlichung

1. Erst die neue Website mit den neuen kanonischen Zielen veröffentlichen und deren Abrufbarkeit prüfen. Danach können vorbereitete Edge-Regeln aktiviert werden; keine Redirects auf noch nicht veröffentlichte Ziele schalten.
2. Im Cloudflare-Account Zone, Proxyzustand und bestehende Redirect-Regeln prüfen. Falls Edge-Weiterleitungen genutzt werden, die 466 Einträge als eigene Liste importieren und die passende Regel einrichten. Bestehende fremde Listen nicht ersetzen. Aktuelle Voraussetzungen und Auswertungsreihenfolge stehen in der [Cloudflare-Dokumentation](https://developers.cloudflare.com/rules/url-forwarding/).
3. Jede schemafreie Quelle über HTTP und HTTPS testen; ausdrücklich mit `http://` beginnende Quellen nur über HTTP testen. Der erste `Location`-Header soll direkt dem CSV-Endziel entsprechen. Mit `?utm_source=redirect-audit&ref=a%2Fb` wiederholen und den Parametererhalt prüfen.
4. Ziele müssen 200, einen selbstreferenzierenden Canonical und keinen Meta-Refresh liefern. Ein unbekannter Pfad muss 404 bleiben. Normale Downloads und die Support-Subdomain dürfen nicht von diesen Regeln getroffen werden.
5. Die XML-Sitemap in Search Console einreichen bzw. erneut prüfen und repräsentative alte/neue URLs per URL-Prüfung kontrollieren. Der erwartete Ausschluss alter Weiterleitungs-URLs ist vom unerwarteten Ausschluss neuer kanonischer Angebotsseiten zu unterscheiden. Search-Console-Status und Ranking sind hier nicht als geprüft ausgewiesen.

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
