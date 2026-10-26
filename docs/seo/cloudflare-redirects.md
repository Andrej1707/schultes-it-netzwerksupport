# Legacy-URLs und vorbereitete Cloudflare-Weiterleitungen

Stand: 26.10.2026. Referenz: `239d80e` auf `main`. **Nur geprüft und vorbereitet; keine Cloudflare-, DNS-, Hosting- oder Search-Console-Einstellung geändert.**

## Ergebnis und Grenzen

Die früheren URLs sind vollständig erreichbar. Die Auswertung umfasst 51 erreichbare Git-Stände bis 31.07.2026: 50 Vorfahren von `main` und den separaten Redesign-Stand `09cd410`. Aus den jeweils vorhandenen `public/sitemap.xml`, `src/serviceCatalog.ts` und `src/site/routes.ts` wurden die tatsächlichen Seiten-Registry-Exporte einschließlich dynamischer Standortpfade ausgewertet. Alle **61 jemals kanonischen Pfade** finden sich heute als kanonische Seite oder Alias wieder. Das belegt die Codehistorie, nicht, welche Zwischenstände tatsächlich veröffentlicht oder von Google indexiert wurden.

Aktuell bestehen **33 kanonische Seiten und 29 Alias-Pfade**; 28 Aliasse waren früher kanonische Seiten, `/ludwigsburg/` wurde als zusätzlicher Kompatibilitätsalias eingeführt. Die Ziele behalten jeweils das ursprüngliche Thema. Lokale Leistungen gehen auf die entsprechende Ludwigsburg-Leistung; frühere regionale Fernwartungsseiten gehen auf das entsprechende nationale Fernwartungsangebot. Es gibt keine pauschale Weiterleitung alter Leistungsseiten auf die Startseite.

Das maschinenlesbare [historische Routeninventar](historical-routes.json) enthält alle 62 belegten Pfade mit heutigem Ziel sowie sieben vollständige Seitenstände mit den damaligen Titeln und Beschreibungen (190 Seiteneinträge insgesamt).

Am 26.10.2026 wurden 126 HTTP-GETs geprüft:

| Prüfmenge | Beobachtung |
| --- | --- |
| 33 kanonische Seiten | Alle HTTP 200 mit passender kanonischer URL |
| 29 alte Pfade mit abschließendem `/` | Alle HTTP 200, passender Canonical und sofortiger Meta-Refresh direkt zum endgültigen Ziel |
| 29 alte Pfade mit `/index.html` | Alle HTTP 200, gleicher korrekter Canonical und Meta-Refresh |
| 29 alte Pfade ohne `/` | Alle HTTP 301 auf die jeweilige Variante mit `/`; danach HTML-Weiterleitung |
| HTTP Hauptdomain, HTTP www, HTTPS www | Jeweils HTTP 301 direkt nach `https://schultes-it.de/` |
| Alte GitHub-Projektadresse | HTTP 301 direkt nach `https://schultes-it.de/` |
| `/pc-system?utm_source=google` | HTTP 301 nach `/pc-system/?utm_source=google`; Parameter bleibt erhalten |
| Bewusst unbekannter Pfad | HTTP 404; keine Weiterleitung zur Startseite |

Der HTTP-Test führt kein Browser-JavaScript aus und bestätigt weder den Google-Index noch eine Search-Console-Fehlermeldung. Die vorhandenen 0-Sekunden-Meta-Weiterleitungen sind nach [Googles Redirect-Dokumentation](https://developers.google.com/search/docs/crawling-indexing/301-redirects) ein permanentes Signal. Ein HTTP-301/308 vom Server ist bevorzugt. GitHub Pages kann projektspezifische HTTP-Regeln nicht allein aus den erzeugten HTML-Dateien ausführen. Das hier vorbereitete Regelwerk würde die zusätzlichen HTML-/Slash-Umwege für bekannte URLs am Cloudflare-Edge ersetzen.

## Historische Zuordnung

Wichtige Änderungen: `871de00` (19.06., erste Leistungsseiten), `5644968` (28.06., weitere Hilfethemen), `5eb3336` (01.07., weitere lokale Probleme), `762df12` (28.07., nationale/regionale Struktur), `55b65e8` (28.07., lokale Leistungsinhaberschaft), `ae8609d` (28.07., Fernwartung wieder zentral). Die Tabelle nennt den ersten belegten Quellpfad auf `main`, nicht den Umzugszeitpunkt.

| Historischer Quellpfad | Endgültiges Ziel | Erster Nachweis |
| --- | --- | --- |
| `/benutzerkonten/` | `/standorte/ludwigsburg/benutzerkonten/` | `5644968` (2026-06-28) |
| `/betrugsverdacht-phishing-hilfe/` | `/standorte/ludwigsburg/betrugsverdacht-phishing-hilfe/` | `5eb3336` (2026-07-01) |
| `/drucker/` | `/standorte/ludwigsburg/drucker/` | `5644968` (2026-06-28) |
| `/email/` | `/standorte/ludwigsburg/email/` | `5644968` (2026-06-28) |
| `/fritzbox-hilfe/` | `/standorte/ludwigsburg/fritzbox-hilfe/` | `5eb3336` (2026-07-01) |
| `/installation/` | `/standorte/ludwigsburg/installation/` | `5644968` (2026-06-28) |
| `/it-consulting/` | `/standorte/ludwigsburg/it-consulting/` | `5644968` (2026-06-28) |
| `/it-notdienst/` | `/standorte/ludwigsburg/it-notdienst/` | `5644968` (2026-06-28) |
| `/leistungen/automation/` | `/standorte/ludwigsburg/automation/` | `762df12` (2026-07-28) |
| `/leistungen/netzwerk-wlan/` | `/standorte/ludwigsburg/netzwerk-wlan/` | `762df12` (2026-07-28) |
| `/leistungen/pc-laptop/` | `/standorte/ludwigsburg/pc-laptop/` | `762df12` (2026-07-28) |
| `/leistungen/webseiten/` | `/standorte/ludwigsburg/webseiten/` | `762df12` (2026-07-28) |
| `/ludwigsburg/` | `/standorte/ludwigsburg/` | `762df12` (2026-07-28) |
| `/mesh-wlan-einrichten/` | `/standorte/ludwigsburg/mesh-wlan-einrichten/` | `5eb3336` (2026-07-01) |
| `/netzwerk-wlan/` | `/standorte/ludwigsburg/netzwerk-wlan/` | `871de00` (2026-06-19) |
| `/office-installation/` | `/standorte/ludwigsburg/office-installation/` | `5644968` (2026-06-28) |
| `/pc-langsam/` | `/standorte/ludwigsburg/pc-langsam/` | `5eb3336` (2026-07-01) |
| `/pc-startet-nicht/` | `/standorte/ludwigsburg/pc-startet-nicht/` | `5eb3336` (2026-07-01) |
| `/pc-system/` | `/standorte/ludwigsburg/pc-laptop/` | `871de00` (2026-06-19) |
| `/programme/` | `/standorte/ludwigsburg/programme/` | `5644968` (2026-06-28) |
| `/router-entstoerung/` | `/standorte/ludwigsburg/router-entstoerung/` | `5644968` (2026-06-28) |
| `/senioren-handy-hilfe/` | `/standorte/ludwigsburg/senioren-handy-hilfe/` | `5eb3336` (2026-07-01) |
| `/standorte/ludwigsburg/fernwartung/` | `/fernwartung/` | `55b65e8` (2026-07-28) |
| `/standorte/ludwigsburg/fernwartung/drucker-hilfe/` | `/fernwartung/drucker-hilfe/` | `55b65e8` (2026-07-28) |
| `/standorte/ludwigsburg/fernwartung/email-outlook/` | `/fernwartung/email-outlook/` | `55b65e8` (2026-07-28) |
| `/standorte/ludwigsburg/fernwartung/windows-hilfe/` | `/fernwartung/windows-hilfe/` | `55b65e8` (2026-07-28) |
| `/tools-automation/` | `/standorte/ludwigsburg/automation/` | `871de00` (2026-06-19) |
| `/webseiten/` | `/standorte/ludwigsburg/webseiten/` | `871de00` (2026-06-19) |
| `/windows-einrichten/` | `/standorte/ludwigsburg/windows-einrichten/` | `5644968` (2026-06-28) |

Die ursprüngliche Adresse `https://andrej1707.github.io/schultes-it-netzwerksupport/` stammt aus der Sitemap ab `2488be3` (14.06.). `9d0eb1e` (16.06.) stellt die Sitemap auf die Hauptdomain um. GitHub selbst leitet diese alte Projektadresse bereits weiter. Der Host `andrej1707.github.io` gehört nicht zur Cloudflare-Zone und ist deshalb **kein CSV-Eintrag**. Ein zusätzliches `/schultes-it-netzwerksupport/` unter der heutigen Hauptdomain ist historisch nicht als eigene kanonische Seite belegt und wird nicht erfunden.

## Beobachteter Cloudflare-/Hosting-Zustand

Read-only DNS-Abfragen und HTTP-Header am 26.10.2026:

- Nameserver: `margaret.ns.cloudflare.com`, `wells.ns.cloudflare.com`.
- Apex A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; kein Apex-AAAA- oder CNAME-Antwortdatensatz.
- `www` CNAME: `andrej1707.github.io`, mit GitHub-Pages-A/AAAA-Adressen.
- HTTPS-Antworten enthalten `x-github-request-id`, `x-fastly-request-id` und `via: 1.1 varnish`; keine `cf-ray`-/`cf-cache-status`-Header.

Diese Beobachtungen sprechen für **Cloudflare DNS mit direktem GitHub-Pages-Verkehr (DNS-only)**. Sie sind keine authentifizierte Einsicht in den Cloudflare-Account. Der in dieser Prüfungsumgebung sichtbare Header `server: envoy` stammt aus einem zwischengeschalteten Proxy und wird nicht als Website-Hostingnachweis verwendet. Reproduzierbare öffentliche Abfragen: [Apex A](https://dns.google/resolve?name=schultes-it.de&type=A), [www CNAME](https://dns.google/resolve?name=www.schultes-it.de&type=CNAME).

Cloudflare Redirect Rules wirken nur für durch Cloudflare **proxied** laufende Hostnamen. Ein CSV-Import allein würde bei DNS-only keine Weiterleitungen ausführen. Das Aktivieren des Proxys wäre eine eigene Hosting-/DNS-Änderung und wurde im Rahmen dieser Prüfung ausdrücklich nicht vorgenommen. Vor einer solchen Entscheidung müssen bestehende GitHub-Pages-Domainprüfung, HTTPS-Zertifikat/Erneuerung, Origin-TLS und vorhandene Cloudflare-Regeln berücksichtigt werden.

## Fertige CSV

[legacy-redirects.csv](legacy-redirects.csv) enthält **370 eindeutige Regeln ohne Kopfzeile**, entsprechend dem [Cloudflare-CSV-Format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/). Die Spaltenreihenfolge lautet:

```text
SOURCE_URL,TARGET_URL,STATUS_CODE,PRESERVE_QUERY_STRING,INCLUDE_SUBDOMAINS,SUBPATH_MATCHING,PRESERVE_PATH_SUFFIX
```

Beispiel:

```csv
schultes-it.de/pc-system/,https://schultes-it.de/standorte/ludwigsburg/pc-laptop/,301,TRUE,FALSE,FALSE,FALSE
```

Die 370 Zeilen setzen sich zusammen aus:

- 174 Regeln für 29 alte Pfade × drei exakte Varianten (`/alt`, `/alt/`, `/alt/index.html`) × Hauptdomain und `www`.
- 66 Regeln für `/index.html`-Varianten der 33 kanonischen Seiten × beide Hosts.
- 64 Regeln für die 32 kanonischen Unterseiten ohne abschließenden Slash × beide Hosts.
- 33 Regeln für bereits kanonische Pfade unter `www`.
- 33 ausschließlich auf HTTP begrenzte Regeln für kanonische Pfade der Hauptdomain.

Schemafreie Quell-URLs gelten für HTTP und HTTPS. Die letzten 33 Regeln haben deshalb ausdrücklich `http://`, damit keine HTTPS-Seite auf sich selbst weiterleitet. Alle Ziele sind vollständig qualifizierte kanonische HTTPS-Adressen; kein Ziel ist wiederum ein Alias.

Alle Regeln verwenden 301 und `PRESERVE_QUERY_STRING=TRUE`. `INCLUDE_SUBDOMAINS`, `SUBPATH_MATCHING` und `PRESERVE_PATH_SUFFIX` bleiben `FALSE`: `support.schultes-it.de`, Downloads, Bilder, Skripte und unbekannte Unterpfade werden nicht erfasst. Ein nicht bekannter Pfad soll weiterhin 404 bleiben. Groß-/Kleinschreibungsvarianten und neue Fantasie-URLs werden nicht pauschal korrigiert.

## Spätere Einrichtung im Cloudflare-Account

Diese Schritte sind eine umsetzbare Anleitung, kein Bericht über bereits aktivierte Regeln:

1. Im richtigen Cloudflare-Account die Zone `schultes-it.de`, den tatsächlichen Proxyzustand und bestehende Single/Bulk Redirects, Page Rules sowie HTTPS-Regeln prüfen. DNS-/Proxy-Änderungen getrennt beurteilen; solange der Host DNS-only ist, nichts als wirksam abnehmen.
2. Unter **Bulk Redirects** eine Redirect-Liste, zum Beispiel `schultes_legacy_20261026`, erstellen und die CSV ohne Kopfzeile importieren. Importvorschau kontrollieren: 370 eindeutige Einträge, ausschließlich die zwei Website-Hosts, 301 und die oben genannten Optionen. Bestehende Listen nicht ersetzen.
3. Eine Bulk-Redirect-Regel für diese Liste vorbereiten. Den vom Dashboard erzeugten Listenfilter und Lookup-Ausdruck verwenden (`http.request.full_uri in $schultes_legacy_20261026`, Lookup `http.request.full_uri`). Die Liste enthält bereits exakte Host-/Pfadgrenzen. Nicht zusätzlich ein pauschales Subpath-Matching einschalten.
4. Die Reihenfolge prüfen: **Single Redirects laufen vor Bulk Redirects**; die erste passende Redirect-Aktion beendet die Auswertung. Eine breite www-/HTTPS-Single-Regel kann einen zusätzlichen Hop vor der Legacy-Regel erzeugen. Solche Regeln müssen für die Listenquellen ausgenommen oder passend konsolidiert werden, bevor ein direkter Einzel-Hop behauptet wird. Bulk Redirects laufen vor Page Rules. Die konkrete Wirkung des globalen „Always Use HTTPS“-Schalters mit Cloudflare Trace und HTTP-Proben prüfen; keine unbelegte Reihenfolge voraussetzen und keine bestehende Einstellung blind deaktivieren.
5. Erst nach freigegebener Einrichtung aktivieren und die untenstehenden Akzeptanzchecks ausführen. Die HTML-Aliasse im Repository behalten: sie bilden weiter einen Rückfallweg, wenn der Proxy oder die Regel später entfernt wird.

Nach der aktuell dokumentierten [Cloudflare-Verfügbarkeit](https://developers.cloudflare.com/rules/url-forwarding/) umfasst Free bis zu 10.000 Redirect-Einträge, fünf Listen und 15 Bulk-Regeln. Die Limits gelten accountweit und können sich ändern; die vorhandene Accountbelegung wurde nicht eingesehen.

## Akzeptanz nach einer späteren Aktivierung

Für jede CSV-Quelle ohne Schema HTTP **und** HTTPS testen. Die 33 expliziten HTTP-Quellen nur als HTTP testen. Die erste Antwort soll 301 und direkt das eingetragene Endziel im `Location`-Header enthalten. Mit `?utm_source=redirect-audit&ref=a%2Fb` wiederholen; beide Parameter müssen unverändert erhalten bleiben. Beispiel:

```bash
curl -sS -o /dev/null -D - 'http://www.schultes-it.de/pc-system?utm_source=redirect-audit&ref=a%2Fb'
curl -sS -o /dev/null -D - 'https://schultes-it.de/standorte/ludwigsburg/pc-laptop/'
curl -sS -o /dev/null -D - 'https://schultes-it.de/__redirect_audit_missing__/'
```

Das Endziel muss 200 liefern, auf sich selbst kanonisieren und darf keinen Meta-Refresh enthalten. Die unbekannte URL muss 404 bleiben. `https://schultes-it.de/`, normale Downloads und die Support-Subdomain dürfen nicht durch die Liste umgeleitet werden. Falls eine Kette entsteht, `Location` schrittweise verfolgen und die vorgeschaltete Regel identifizieren. Danach Sitemap und einzelne Alt-/Ziel-URL-Paare in der Search Console prüfen; der Bericht „Seite mit Weiterleitung“ ist bei einer alten Alias-URL an sich erwartbar und kein Beleg für eine Schleife.

Beim Zurückrollen nur die neu hinzugefügte Bulk-Regel deaktivieren; keine fremden Listen löschen. Eine gesonderte Proxy-/DNS-Änderung benötigt einen eigenen Rückweg. Alte Redirects mindestens ein Jahr nach dem Umzug, möglichst dauerhaft, erhalten; siehe [Google zu URL-Umzügen](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Historische Sprungmarken

Fragmente nach `#` werden nicht an HTTP-Server gesendet und sind daher absichtlich nicht in der CSV enthalten. Die Anwendung bildet belegte alte Links zentral in `src/site/legacyFragments.ts` ab; vorhandene Query-Parameter bleiben erhalten:

| Alte Sprungmarke | Ziel |
| --- | --- |
| `/#leistungen` | `/leistungen/` |
| `/#preise`, `/#projekte`, `/#kompetenzen`, `/#andrej`, `/#ludwigsburg`, `/#arbeitsweise`, `/#alltagshilfe`, `/#kontakt` | Derselbe Abschnitt auf `/standorte/ludwigsburg/`, dem konfigurierten Inhaber der alten lokalen URLs |
| `/#main` | `/#main-content` |
| `#/impressum`, `#/datenschutz` | Die jeweilige heutige Rechtseite |
| Leistungsseite `#was-ich-loese` | Dieselbe kanonische Leistungsseite mit `#service-solutions` |
| Leistungsseite `#service-main` | Dieselbe kanonische Leistungsseite mit `#main-content` |
| Rechtseite `#legal-main` | Dieselbe Rechtseite mit `#main-content` |

`#service-contact`, `#rustdesk-download` und `#top` existieren weiterhin und werden nicht umgebogen. Unbekannte Fragmente bleiben unverändert. Die Tests prüfen die historischen Links gegen tatsächlich gerenderte Ziel-IDs und kanonische Routen. Diese Reparatur braucht JavaScript; das unveränderte HTTP-Dokument der betreffenden Seite bleibt auch ohne JavaScript lesbar.

## Quellen für Cloudflare-Verhalten

- [Bulk Redirect CSV-Format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/)
- [Parameter und schemafreie Quell-URLs](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/parameters/)
- [Matchingregeln](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/how-it-works/)
- [Unterstützte URL-Komponenten](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/url-components/)
- [Proxyvoraussetzung, Limits und Reihenfolge](https://developers.cloudflare.com/rules/url-forwarding/)
