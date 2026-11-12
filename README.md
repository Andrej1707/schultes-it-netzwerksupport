# Schultes IT & Netzwerksupport

Website des inhabergeführten Betriebs Schultes IT & Netzwerksupport von Andrej Schultes.
Der Betrieb hilft persönlich in Ludwigsburg und Umgebung sowie deutschlandweit per Fernwartung.
Die Website führt direkt zu Leistungen und Kontakt; eine Standort-, Partner- oder
Franchiseauswahl ist nicht Teil des Angebots.

## Website

[schultes-it.de](https://schultes-it.de/)

Diese README beschreibt den jeweiligen Quellstand. Sie ist kein Nachweis, dass Änderungen
bereits veröffentlicht oder im Browser abgenommen wurden.

## Tech Stack

- React
- TypeScript
- Vite
- Lucide Icons
- Custom CSS mit responsiven Layouts und Reduced-Motion-Unterstützung
- Lokal ausgelieferte WebP-Bilder mit `srcset`
- Google Maps Embed nach aktivem Klick
- Cloudflare Worker und Durable Objects für den Support-Assistenten

## Highlights

- Startseite für Schultes IT in Ludwigsburg mit Ansprechpartner, Preisen, Einsatzgebiet und Kontakt
- Klare Ansprache für Privatpersonen und kleine Unternehmen, auch bei digitalen Projekten
- Helles Premium-Design mit großen Produktmotiven, klarer Typografie und eigenen
  Gestaltungsvarianten für die einzelnen Themen
- Dezente einmalige Einblendungen und kleine Hover-Effekte; Inhalte bleiben ohne JavaScript,
  bei reduzierter Bewegung und beim Drucken vollständig sichtbar
- Verschachtelte, statisch erzeugte Routen mit vollständiger Pfadauflösung
- Vollständiges React-HTML beim Build; dieselben Komponenten werden im Browser hydriert
- Seitentypabhängige Metadaten und Schema.org-Daten
- Automatisch aus der Seiten-Registry erzeugte XML- und Text-Sitemap
- Zentrale Daten für einen Betrieb, seinen Ansprechpartner und sein Einsatzgebiet
- Google-Karte nach ausdrücklicher Freigabe; keine Standortbestimmung des Besuchers
- Projektübersicht mit ausdrücklich benanntem Konzept- oder Prototypenstatus
- 70 eigenständige Ratgeber mit 70 unterschiedlichen Bildmotiven sowie Suche und Kategorien
  für Sicherheit, Windows, WLAN, Daten und Alltag
- Vollständige Leistungen und Hilfethemen im Menü, auch auf Mobilgeräten
- Native aufklappbare Navigation und normale Links, die ohne JavaScript bedienbar bleiben
- Direkte Kontaktwege und Copy-Phone-Funktion
- Täglich geprüfter RustDesk-Download mit automatischer Aktualisierung, Versionsanzeige
  und abgeglichener SHA-256-Prüfsumme
- Spamgeschützter KI-Assistent mit Cloudflare Turnstile, festen Limits und OpenAI-Moderation

## Seitenstruktur

```text
/
  #leistungen
  #preise
  #ludwigsburg
  #kontakt
/fernwartung/
  windows-hilfe/
  drucker-hilfe/
  email-outlook/
/leistungen/
  pc-laptop/
  netzwerk-wlan/
  webseiten/
  automation/
  <weitere Hilfethemen>/
/ratgeber/
  <ratgeber-thema>/
/ueber-schultes-it/
/impressum/
/datenschutz/
```

`/` ist die lokale Betriebsseite für Ludwigsburg und Umgebung. `/leistungen/` bündelt das
Angebot; die lokalen Leistungsdetails liegen direkt unter `/leistungen/<thema>/`.
Deutschlandweite Fernwartung bleibt unter `/fernwartung/`.
Unter `/ratgeber/<thema>/` liegen 70 vollständige Artikel mit Quellen und verwandten Themen,
jeweils 14 pro Kategorie. Die Seiten-Registry enthält 100 kanonische Seiten, davon 98 indexierbare, sowie
48 historische Alias-Dokumente.

`/standorte/`, `/standorte/ludwigsburg/`, `/ludwigsburg/` und
`/standortinhaber-werden/` sind nur noch Aliasse auf `/`. Frühere regionale Leistungspfade
unter `/standorte/ludwigsburg/` führen auf den jeweiligen neuen Leistungspfad; frühere
regionale Fernwartungspfade führen auf die nationale Fernwartungsseite.

Bestehende flache URLs und ältere Leistungspfade bleiben als Kompatibilitätsrouten erreichbar.
Sie verwenden `index, follow`, einen Canonical auf die Zielroute und eine Weiterleitung per
Meta-Refresh mit null Sekunden. Ein normaler Link zur Zielseite bleibt als Rückfallebene sichtbar.
Ein kleines Skript vor dem Meta-Refresh erhält vorhandene Suchparameter und Sprungmarken;
Alias-Dokumente laden dafür nicht die vollständige React-Anwendung. Direkte `index.html`-URLs
werden zur jeweiligen Verzeichnis-URL aufgelöst, bevor React die Seite übernimmt.
Aliasse erscheinen nicht in der Sitemap; die rechtlichen Seiten und die Fehlerseite bleiben
`noindex, follow`.

GitHub Pages liefert die Alias-Dateien am Origin mit HTTP 200 aus. Sie bleiben als Rückfallweg
erhalten; die vorgeschalteten Cloudflare-Regeln liefern die eigentlichen HTTP-301-Weiterleitungen.
Mit der Ratgeber-Veröffentlichung aus PR #7 am 11.11.2026 wurden die bisherigen 466 Regeln
um 240 zusätzliche Regeln ergänzt. Alle 706 Regeln sind aktiviert; der anschließende Live-Audit
bestand mit 1.342 HTTP-/HTTPS-Redirectfällen und 18 zusätzlichen Query-Fällen. Das Committen
der CSV allein aktiviert keine Regeln. Veröffentlichungs- und Prüfstatus stehen in
[der Release-QA](docs/qa-home-guides-2026-11-11.md); Domain-, HTTPS- und Pfadvarianten werden dort
im Live-Audit getrennt erfasst.

Die Erweiterung auf 70 Ratgeber benötigt 180 zusätzliche Regeln und damit 886 insgesamt.
Der Generator bereitet die kombinierte CSV und den separaten Ergänzungsimport vor; deren
Veröffentlichung und Live-Prüfung sind vom oben bestätigten Stand mit 706 Regeln getrennt.
Der neue lokale Prüfstand mit 70 Artikeln steht in
[der aktuellen Release-QA](docs/qa-subpages-70-guides-2026-11-11.md).

## Lokal starten

```bash
npm ci
npm run dev
```

Die GitHub-Actions-Pipeline verwendet Node.js 22.

## Prüfen und bauen

```bash
npm run typecheck
npm run build
npm run preview
```

Der vollständige Prüfpfad ist:

```bash
npm run check
```

Er umfasst Ratgeberkatalog-Abgleich, Frontend- und Worker-TypeScript, Tests, RustDesk-Dateiprüfungen, Produktions-Build
und die datengetriebene SEO-Validierung aller kanonischen Routen und Aliasse einschließlich
Inline-CSS, individueller Artikel-Vorschaubilder und des Redirect-CSV-Abgleichs. Desktop-, Mobil-,
Tastatur- und Ohne-JavaScript-Prüfungen im Browser sind zusätzliche Abnahmeschritte.

Nach dem Hinzufügen kanonischer URLs werden die CSV-Dateien aus dem neuen Build aktualisiert:

```bash
npm run build
node scripts/generate-cloudflare-redirects.mjs --write
node scripts/generate-cloudflare-redirects.mjs --check
```

Mit `--baseline-ref` kann ein bestimmter veröffentlichter Commit als Vergleich dienen.
Der Generator verweigert Änderungen oder das Entfernen vorhandener Regeln; neue Ratgeberregeln
stehen zusätzlich in `docs/seo/guide-expansion-redirects.csv`. Er schreibt nicht zu Cloudflare.

## Architektur

- `src/SiteView.tsx`: gemeinsamer, synchroner Seitenbaum für Build und Browser
- `src/components/PremiumShell.tsx`: Navigation, Logo und Footer aller Seiten
- `src/site/navigation.ts`: gemeinsame Gruppierung aller veröffentlichten Leistungen für Menü und Footer
- `src/pages/PremiumHomePage.tsx`: wiederhergestellte Premium-Startseite mit Ludwigsburger Betrieb und Direktkontakt
- `src/pages/PremiumServicePage.tsx`: Leistungsdetails mit themenspezifischen Varianten
- `src/pages/PremiumNetworkPages.tsx`: Leistungsübersicht, Über-uns-Seite und 404;
  ältere lokale und Ratgeber-Komponenten bleiben dort historisch enthalten, werden aber nicht
  für die aktuelle Startseite oder Ratgeberbibliothek verwendet
- `src/pages/GuidePages.tsx`: durchsuchbare Ratgeberbibliothek und vollständige Artikelseiten
- `src/pages/LegalContent.tsx`: vollständige Impressums- und Datenschutzinhalte
- `src/premium.css`: gemeinsames Design; `src/premium-service.css`, `src/premium-network.css`
  und `src/guides.css` ergänzen nur die jeweilige Seitenfamilie
- `src/site/pageStyles.ts`: Zuordnung der zusätzlichen Stylesheets zum HTML-Kopf der jeweiligen Seite
- `src/site/motion.ts`, `src/motion.css`: progressive Bewegungen ohne zusätzliche Bibliothek
- `src/site/`: Betriebsdaten, Kontakte, Routing,
  Schema.org-Erzeugung und statisches Rendern
- `src/content/`: normalisierte Leistungsdaten; `src/content/legacy/` enthält weiterhin
  die bestehenden redaktionellen Leistungs- und Hilfetexte als Datenbasis
- `src/content/guides/`: 70 Artikel in fünf Kategorien mit je 14 Themen; `articles.ts` verbindet
  die ursprünglichen Inhalte und die fünf Erweiterungsmodule. Der generierte `catalog.ts` enthält
  nur Zusammenfassungen. Vollständige Artikeltexte werden beim Build verarbeitet und nur
  für die jeweilige Artikelseite mitgegeben
- `scripts/generate-guide-catalog.mjs`: erzeugt den Katalog mit `npm run guides:catalog`
  und prüft ihn mit `npm run guides:check`; Bildbasen und Bild-Prüfsummen müssen für alle
  70 Ratgeber unterschiedlich sein
- `public/images/`: generierte illustrative Motive in lokalen WebP-Größen;
  Herkunft und Maße der bisherigen Motive stehen in `assets.json`, ihre Prompts in
  [docs/design/image-prompts.json](docs/design/image-prompts.json). Die vier zusätzlichen
  Ratgebermotive sind mit Herkunft, Maßen und Prompts separat in
  [guide-image-prompts.md](docs/design/guide-image-prompts.md) dokumentiert. Die 17 weiteren
  Motive aus PR #8 stehen in den Nachweisen für [Sicherheit](docs/design/guide-images-security.md),
  [Daten](docs/design/guide-images-data.md), [Netzwerk](docs/design/guide-images-network.md)
  und [Windows/Alltag](docs/design/guide-images-windows-alltag.md). Die ersten 40 Artikelmotive
  wurden nach Veröffentlichung als unterschiedliche Bildinhalte geprüft; Ergebnisse
  einschließlich der drei neuen 800-Pixel-Startseitenvarianten stehen in
  [der damaligen Release-QA](docs/qa-home-guides-2026-11-11.md). Die 30 zusätzlichen Motive
  sind getrennt für [Sicherheit](docs/design/guide-expansion-security.md),
  [Windows](docs/design/guide-expansion-windows.md), [WLAN](docs/design/guide-expansion-network.md),
  [Daten](docs/design/guide-expansion-data.md) und [Alltag](docs/design/guide-expansion-everyday.md)
  dokumentiert. Alle 70 aktuellen 1280er-Bilder wurden lokal auf 1280 × 853 Pixel und
  unterschiedliche Bild-Prüfsummen geprüft
- `vite.config.ts`: statische HTML-Ausgabe, Alias-Kompatibilität, Sitemap und Seitenmanifest
- `scripts/validate-seo.mjs`: automatisierte Prüfung gegen das erzeugte Seitenmanifest
- `scripts/generate-cloudflare-redirects.mjs`: deterministische CSV-Erzeugung und Prüfung
  aus dem gebauten Seitenmanifest; schützt vorhandene Regeln und erzeugt den Ergänzungsimport

Die Bildmotive zeigen allgemeine Technik-Szenen. Sie dokumentieren keine Kundenprojekte,
keine Geschäftsräume und keine identifizierten Personen.

Weitere Details stehen in [docs/architecture.md](docs/architecture.md). Der messbare technische
SEO-Gate und der Offpage-Aufbau sind in
[docs/seo-authority-roadmap.md](docs/seo-authority-roadmap.md) dokumentiert.
Die Abnahme der Bewegungen und Zielgruppen-Texte steht in
[docs/design/motion-and-content-polish.md](docs/design/motion-and-content-polish.md).
Die Download-Automatik und ihre Prüfungen stehen in
[docs/rustdesk-updates.md](docs/rustdesk-updates.md).
Ältere Abnahme- und SEO-Berichte dokumentieren ihren jeweiligen historischen Stand.

Die Umstellung auf einen Betrieb ändert keine Preise: Fernhilfe beginnt weiterhin bei 25 €,
Vor-Ort-Service bei 49 €; individuelle Projekte werden nach Absprache angeboten. Neue
Zeitpakete oder Anfahrtskonditionen werden dadurch nicht eingeführt.

## Business-Assistent

Die Website bleibt statisch auf GitHub Pages. Der Assistent läuft getrennt als Cloudflare Worker
mit einer Durable-Object-Instanz für atomare Sitzungs-, Rate- und Tageslimits.
Er bleibt beim Seitenaufruf eingebunden und wird nicht auf einen erstmaligen Klick zum Laden
umgestellt. Sein separat geladener Code blockiert den statischen Seiteninhalt nicht.

- Textmodell `gpt-5.6-terra` mit explizitem `reasoning.effort: none`, keine Tools und keine Websuche
- Ein- und Ausgabeprüfung mit `omni-moderation-latest`
- 24-Stunden-Sitzung erst nach Cloudflare Turnstile
- serverseitiger Gesprächskontext, maximal acht Nachrichten
- globales Budget von maximal 1.000.000 reservierten/verbrauchten Tokens pro UTC-Tag
- API-Schlüssel bleiben ausschließlich in verschlüsselten Worker-Secrets

Beide Responses-Aufrufe erhalten `reasoning.effort: none`, damit der bei Terra sonst aktive
Reasoning-Standard nicht das kurze Ausgabebudget von 450 Tokens beziehungsweise 250 Tokens
für die strukturierte Basishilfe verbraucht. Der Modellaufruf bleibt auf 30 Sekunden begrenzt.
Die [offizielle Modellbeschreibung](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
bestätigt Responses, Structured Outputs und den unterstützten Wert `none`.

Die öffentliche [Programmliste für freiwilliges Datasharing](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai)
führt `gpt-5.6-terra` und den bisherigen Snapshot `gpt-5.4-mini-2026-03-17` in derselben
Gratis-Kontingentgruppe. Das bestätigt keine individuelle Kostenfreiheit: Vor Veröffentlichung
müssen die Teilnahme, das aktive Projekt und die dort geltenden Grenzen im bestehenden
OpenAI-Konto geprüft sein. Das eigene Worker-Tagesbudget ist unabhängig von diesem Programm;
Datasharing-Einstellungen und bestehende Secrets werden durch den Modellwechsel nicht geändert.

Lokale Konfiguration:

```bash
Copy-Item .env.example .env.local
Copy-Item .dev.vars.example .dev.vars
npm run worker:dev
npm run dev
```

Deployment des Workers:

```bash
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put HASH_SALT
npm run worker:deploy
```

Im GitHub-Repository werden anschließend zwei öffentliche Actions-Variablen gesetzt:

- `VITE_SUPPORT_API_URL` mit der Worker-URL ohne abschließenden Slash
- `VITE_TURNSTILE_SITE_KEY` mit dem öffentlichen Site Key des Turnstile-Widgets

Die Secret Keys gehören weder in GitHub-Variablen noch in `.env.local` und werden nie committet.

## GitHub Pages

Der Workflow unter `.github/workflows/deploy.yml` installiert die gesperrten Abhängigkeiten mit
`npm ci` und führt den vollständigen Prüfpfad `npm run check` auch für Pull Requests gegen
`main` aus. Pull Requests führen keine Veröffentlichung durch. Nur ein erfolgreicher Push auf
`main` oder ein manueller `workflow_dispatch` auf `main` lädt das Pages-Artefakt hoch und
veröffentlicht `dist`. Die Worker-Veröffentlichung erfolgt separat.

Im Repository muss unter **Settings → Pages → Build and deployment** als Quelle
**GitHub Actions** ausgewählt sein.

## Kontakt

Schultes IT · Ludwigsburg und Umgebung · deutschlandweit per Fernwartung
[+49 179 1707411](tel:+491791707411)
