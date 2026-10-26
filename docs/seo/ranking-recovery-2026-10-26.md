# Schultes IT: SEO-Regression und Wiederherstellung lokaler Relevanz

Stand: 26.10.2026. Ausgangsstand `239d80e` auf `main`; Arbeitszweig `fix/local-seo-recovery`. Dies ist eine Untersuchung von Quellcode, erreichbarer Git-Historie und öffentlicher Live-Ausgabe, kein Zugriff auf Googles Index. Die vom Betreiber genannten früheren Top-10-Platzierungen sind nicht unabhängig belegt.

## Ergebnis und Aussagegrenzen

**Eine technische Deindexierung oder ein allgemeiner Crawlblock ist aktuell nicht nachweisbar.** Belegt sind eine starke Änderung der Suchausrichtung im Juli, schwächere lokale Metadaten und verlorene historische Sprungmarken. Die genaue Ursache eines tatsächlichen lokalen Rankingverlusts lässt sich ohne vergleichbare Search-Console-Daten nicht bestimmen.

Der Betreiber hat ausdrücklich klargestellt: **58,4 ist der Positionsdurchschnitt der gesamten Property, kein Messwert für die lokalen Suchbegriffe.** Mehr Impressionen bei neuen bundesweiten Suchanfragen mit niedrigen Positionen können den Durchschnitt senken, auch wenn lokale Anfragen unverändert bleiben. Umgekehrt kann zugleich ein echter lokaler Verlust bestehen. Daher ist „Top 10 auf 58,4 gefallen“ für dieselben Suchanfragen bisher nicht belegt. Auch sieben ähnlich schwache Tage lösen dieses Vergleichsproblem nicht.

## Historischer Vergleich

Die referenzierten Inhalte sind mit `git show <commit>:<datei>` reproduzierbar. Ergänzend enthält [history-evidence.json](history-evidence.json) extrahierte Metadaten und Quelltextausschnitte; [historical-routes.json](historical-routes.json) ergänzt das vollständige historische Pfad-/Metadateninventar. Marker für Rendering sind Suchheuristiken, keine historische Browsermessung.

| Stand | Nachweisbare Änderung | Einordnung |
| --- | --- | --- |
| Juni/Juli: `0c688a2`, `5eb3336`, `aac65af` | Homepage-Title „IT-Hilfe & PC-Hilfe Ludwigsburg \| Schultes IT“, lokale Beschreibung mit PC/WLAN/Router, `ProfessionalService` mit Ludwigsburger Adresse und lokalen Leistungslinks. Sichtbares Hero-H1 war bereits damals generisch: „Technik, die funktioniert.“ | Lokale Relevanz beruhte besonders auf Title, Beschreibung, Entity, Text und Links. Ein generisches H1 allein erklärt den Verlust daher nicht. |
| 28.07.: `762df12`, danach `55b65e8`, `ae8609d` | Homepage-Title auf „Schultes IT \| Fernwartung deutschlandweit & Hilfe vor Ort“, Organisation mit Deutschland-Bezug, lokaler Anbieter auf Standortpfad. Frühere flache Leistungen werden Standortseiten; Fernwartung wird zentral. Präzise Servicetitel werden aus kurzen Labels neu erzeugt. | Gleichzeitiger Wechsel von Zielgruppe, Suchraum, URLs und Entity-Fokus. Plausibler Relevanz-/Migrationsfaktor, kein bewiesener Rankingfehler. |
| 08.08.: `5935db4` | Alias-Meta-Refresh/Canonicals für alte Pfade verbessert. | HTML-Weiterleitungen funktionieren; echte HTTP-301 fehlen für diese Alias-Dateien weiterhin. |
| 05.09.: `70a226b`, `f44b094`, `d5cd455` | Premium-Redesign und generisches Homepage-H1 „Einfach gute Technik.“; schon seit Juli nationaler Title bleibt. Vollständiger gemeinsamer React-Seitenbaum für initiales HTML und Hydration; Fotos/Layouts neu. `schema.ts` durch das große Redesign nicht verändert. | Keine Evidenz, dass das aktuelle Design oder fehlendes SSR den Verlust verursacht. Verlorene alte Anker sind dagegen ein belegtes Navigationsproblem. |
| Oktober: `0a12959`, `239d80e` | Download-Verifizierung; am 23.10. Korrektur von index.html-Hydration, Query-/Fragmenterhalt für Aliasse und Motion. | Der frühere index.html-Fehler ist bereits behoben. Keine neue URL-Migration im Oktober. Nicht auf main enthaltene Backup-Commits sind kein Beweis einer Live-Veröffentlichung. |

Beispiele für den Metadatenverlust: „PC startet nicht Ludwigsburg \| Laptop geht nicht an“ wurde zu „Startproblem Ludwigsburg \| Schultes IT Standort“, „Benutzerkonten-Hilfe …“ zu „Konten …“. Technisch gültig, aber für Nutzer und Suchintention weniger klar. Lokale SEO-Descriptions wurden aus allgemeinen Kurzbeschreibungen zusammengesetzt und teils abgeschnitten, statt die vorhandenen präzisen Texte zu verwenden.

## Technische Befunde

- Live-Ausgangsstand: alle 33 kanonischen Seiten HTTP 200, 31 indexierbar, nur zwei rechtliche Seiten bewusst noindex. Fehlerpfade liefern echte 404 mit noindex. Je kanonischer Seite ein H1, passender Self-Canonical und gültiges JSON-LD; keine doppelten Titles/Descriptions/Haupttexte festgestellt.
- Sitemap enthält exakt die 31 indexierbaren URLs. robots.txt erlaubt Googlebot. Interne Links und Anker aktueller Seiten sind gültig, keine verwaisten kanonischen Seiten festgestellt.
- Vollständige Inhalte stehen im initialen HTML; JavaScript-Abschaltung bestätigt H1, Inhalt, Canonical und Kontaktwege für Home, Standort, PC und WLAN. Keine reproduzierten App-/Hydrationfehler.
- Alle 29 Legacy-Pfade haben passende Ziele; historische Pfadprüfung ergab keine fehlenden kanonischen Pfade. Aliasse geben HTTP 200 mit sofortigem Meta-Refresh, JS-Redirect und Ziel-Canonical zurück. Das sind **keine serverseitigen 301**. Domain-/www-/Slash-Normalisierung funktioniert separat. Details und vollständige Regeln: [cloudflare-redirects.md](cloudflare-redirects.md), [legacy-redirects.csv](legacy-redirects.csv).
- Historische Homepage-Links wie `/#preise`, `/#kontakt` und `/#projekte` erreichten nach dem Umbau keinen passenden Abschnitt. Alte Service-Fragmente `#was-ich-loese` und `#service-main` wurden umbenannt. Diese konkreten Navigationsfehler werden clientseitig auf vorhandene Abschnitte umgelegt; Fragmente erreichen den HTTP-Server nicht.
- `ProfessionalService` ist bereits ein Untertyp von `LocalBusiness`; das zusätzliche parallele Erfinden eines zweiten Unternehmens wäre falsch. Vorhandene Standortdaten sind erhalten. Service-WebPage verknüpfte sich seit Juli nur noch pauschal mit Organization; die genauere Service-Entity-Verknüpfung ist wiederhergestellt. Fehlende Rich Results sind daraus nicht bewiesen.
- Vier repräsentative Seiten, je drei mobile Laborläufe: LCP-Mediane 868–972 ms und CLS 0. Methodik und Rohwerte: [performance-2026-10-26.json](performance-2026-10-26.json). Dies sind Proxy-/Laborwerte mit simulierter Drosselung, keine CrUX-Felddaten und kein INP-Nachweis. Sie belegen keine allgemeine CWV-Bewertung. Kein begründeter Anlass für einen Performance-Komplettumbau.

## Implementierte Korrekturen und Seitenrollen

**Homepage:** Marken- und Angebotsüberblick mit wieder expliziter lokaler IT-Hilfe im Title, verständlichem H1 und früher Ludwigsburg-Nennung. Zwei direkte Einstiege für regionale Hilfe und bundesweite Fernwartung. Bestehende Standortkarte nennt den echten Betreiber und die Adresse und verlinkt mit beschreibendem Anker auf den Standort. `featuredLocationId` ist eine explizite Konfiguration; weitere aktive Standorte können ergänzt werden, ohne dass ein zufällig erster Listeneintrag die Homepage übernimmt.

**Standortseite:** eigenständige transaktionale Zielseite „IT-Service Ludwigsburg“/„Computerhilfe in Ludwigsburg“ mit Leistungen, Ansprechpartner, Preisen, Einsatzgebiet, Ablauf und Kontakt. PC-, Laptop- und WLAN-Leistungen werden verständlich im vorhandenen Abschnittstitel genannt. Detailanfragen gehen auf ihre spezifischen Servicepfade; bundesweite Fernwartung bleibt zentral. Keine gegenseitigen Canonicals und kein Zusammenlegen/Entfernen von Standortseiten. Ähnliche Themen sind sachlich unvermeidlich; tatsächliche Keyword-Kannibalisierung kann nur anhand wechselnder rankender URLs je Suchanfrage belegt werden.

**Lokale Leistungsseiten:** ursprüngliche präzise Titel/Beschreibungen wiederverwenden und dynamisch auf den jeweiligen Standort beziehen; nationale Fernwartung unverändert. PC-Reparatur wird nur mit den realen Diagnose-/Spezialreparaturgrenzen erklärt, ohne unbelegte Werkstatt- oder Hardwareversprechen.

**Strukturierte Daten:** Homepage führt neben der getrennten nationalen Organisation den tatsächlich dargestellten Standort mit derselben stabilen Entity-ID wie die Standortseite. Standortverzeichnis definiert die bereits referenzierten aktiven Einträge vollständig. Service-WebPages referenzieren wieder ihre jeweilige Service-Entity über `about` und `mainEntity`. Keine neuen Bewertungen, Standorte, Öffnungszeiten oder Referenzen.

**Dateien:** `src/site/{config,routes,schema}.ts`, `src/pages/PremiumHomePage.tsx`, `src/pages/PremiumNetworkPages.tsx`, `src/content/services.ts`, `src/site/legacyFragments.ts`, `src/App.tsx`. Die SEO-Prüfung und gezielte Tests sichern initiales lokales HTML, getrennte Seitenrollen, nationale Provider, dynamische Ortsdaten, präzise Metadaten und historische Sprungmarken. Eager-Standortbilder bekommen einen expliziten hohen Fetch-Priority-Hinweis. CSS, Bildmotive und Funktionsumfang werden nicht umgebaut.

## Externe Maßnahmen und benötigte Search-Console-Daten

1. **Vergleichbare Leistungsexporte:** Suchtyp Web; vollständige tägliche Zeitreihe von Juni bis heute. Jeweils Suchanfrage, Zielseite, Datum, Klicks, Impressionen, CTR, Position. Separat gleiche Anfragen vor/nach 28.07., vor/nach 05.09. und letzte 28 Tage vergleichen. Land Deutschland und Geräte getrennt; Markenanfragen, lokale Nichtmarkenanfragen und neue nationale Anfragen getrennt auswerten. Property-Mittelwerte dürfen nicht als Position eines festen Keyword-Sets gelesen werden. GSC kann anonymisierte/seltene Suchanfragen aus Tabellen auslassen; Summen können daher abweichen.
2. **Lokales Set:** IT-Hilfe, PC-Hilfe, Computerhilfe, PC-Reparatur, WLAN-Hilfe, IT-Service, Laptop-Hilfe jeweils mit Ludwigsburg einschließlich Schreibvarianten. Prüfen, welche URL die Impressionen erhält, ob zwischen Homepage/Standort/Service gewechselt wird und ob lokale Impressionen oder nur die CTR fallen. Ergänzend Markenanfragen betrachten.
3. **Indexierung/URL-Prüfung:** `/`, Standort, PC-/WLAN-Detail sowie die alten `/pc-system/` und `/netzwerk-wlan/`. Letzter Crawl, Indexierungsstatus, von Google ausgewählter Canonical gegen deklarierte URL, gerendertes HTML und Abruffehler. Seitenindexierungsbericht mit Ausschlussgründen und Verlauf, Sitemap-Verarbeitung, Crawlstatistiken, manuelle Maßnahmen und Sicherheitsprobleme prüfen. Keine dieser Informationen wurde hier aus dem Konto gelesen.
4. **CWV:** Search-Console-Berichte mobil/desktop und gegebenenfalls PageSpeed-Insights/CrUX-URL-/Origin-Felddaten. Schlechte INP-/LCP-/CLS-Gruppen konkret zu URLs zuordnen; keine Laborwerte als Feldmessung ausgeben.
5. **Unternehmensprofil:** kanonische Website-Verknüpfung, aktuelle Adresse, Telefon, Dienstleistungsgebiet und Termine mit den tatsächlichen Daten abgleichen. Historisch wurden Telefonnummer und Kontaktadresse geändert; uneinheitliche externe Profile sind ein plausibler, aber hier nicht belegter Faktor. Bewertungen/Reviewzahlen nicht erfinden oder künstlich erhöhen.
6. **HTTP-Redirects:** vorgeschlagene Cloudflare-Konfiguration erst nach ausdrücklicher Freigabe und Prüfung der Zone aktivieren. Es wurden keine DNS-, Hosting- oder produktiven Cloudflare-Einstellungen geändert. Sitemap nach Veröffentlichung einmal in GSC prüfen; ausgewählte zentrale Seiten bei Bedarf zur erneuten Indexierung anfragen, nicht fortlaufend massenhaft wiederholen.

## Wirkung, Zeitfenster und Abnahme

Technische Korrekturen sind nach Build und Auslieferung prüfbar. Bis Google neue Titel, Entity-Bezüge und Inhalte verarbeitet, können Tage bis Wochen vergehen. Eine erste feste Auswertung nach 2–4 Wochen und eine weitere nach 6–8 Wochen sind sinnvolle Beobachtungstermine, keine Wirkungs- oder Rankingzusage. Bei wenig Impressionen längere, vergleichbare Zeiträume verwenden. URL-Migrationssignale können länger brauchen; alte Weiterleitungen langfristig erhalten.

Erfolgskriterien: lokale Klicks/Impressionen und Positionen für dasselbe Query-Set verbessern sich; richtige lokale Zielseiten werden ausgewählt; keine neuen Crawl-/Canonical-Fehler. Eine weiterhin niedrige Property-Durchschnittsposition bei wachsenden lokalen Klicks wäre kein Beweis des Misserfolgs. Designwechsel, weitere URL-Umzüge oder blindes Keyword-Stuffing sind dafür nicht vorgesehen.

Validierung: `npm run check` vollständig bestanden: 166 Tests in 15 Dateien, Frontend-/Worker-Typechecks, Produktions-Build, SEO-/Asset-/Link-/Schema-Gate und Download-Verifizierung. Das Gate prüft weiterhin alle 33 kanonischen Seiten und 29 Aliasse. Die Browser-Abnahme steht im Feld `afterChange` des Performance-Berichts; der Veröffentlichungsstand wird im PR/Abschluss festgehalten.

## Primärquellen

- [Google: Suchtraffic-Rückgänge untersuchen](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops)
- [Google: Website-Umzug mit URL-Änderungen](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google: Weiterleitungen und Suche](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google: LocalBusiness-Daten](https://developers.google.com/search/docs/appearance/structured-data/local-business)

Die Quellen erläutern die Methodik und begründen keine konkrete Rankingdiagnose für Schultes IT.
