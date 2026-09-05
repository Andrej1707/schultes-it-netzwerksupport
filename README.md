# Schultes IT & Netzwerksupport

Die digitale Grundlage für Schultes IT: deutschlandweite Fernwartung und regionale,
rechtlich selbstständig betriebene Vor-Ort-Standorte unter einer gemeinsamen Marke.

Ludwigsburg ist der erste inhabergeführte Standort. Weitere echte Standorte können später
über zentrale Inhaltsdaten ergänzt werden, ohne Routing, Sitemap oder SEO-Code zu kopieren.

## Live

[schultes-it.de](https://schultes-it.de/)

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

- Marken-Startseite mit zwei klaren Einstiegen: Fernwartung und regionale Standorte
- Klare Ansprache für Privatpersonen und kleine Unternehmen, auch bei digitalen Projekten
- Helles Premium-Design mit großen Produktmotiven, klarer Typografie und eigenen
  Gestaltungsvarianten für die einzelnen Themen
- Dezente einmalige Einblendungen und kleine Hover-Effekte; Inhalte bleiben ohne JavaScript,
  bei reduzierter Bewegung und beim Drucken vollständig sichtbar
- Verschachtelte, statisch erzeugte Routen mit vollständiger Pfadauflösung
- Vollständiges React-HTML beim Build; dieselben Komponenten werden im Browser hydriert
- Seitentypabhängige Metadaten und Schema.org-Daten
- Automatisch aus der Seiten-Registry erzeugte XML- und Text-Sitemap
- Datenmodell für aktive Standorte, Betreiber, Einsatzgebiete und Koordinaten
- Durchsuchbares Standortverzeichnis und Standortfinder mit lokaler Distanzberechnung,
  der erst nach einem Klick aktiv wird
- Eigene Ludwigsburg-Seite mit Ansprechpartner, Einstiegspreisen, Einsatzgebiet und Kartenfreigabe
- Projektübersicht mit ausdrücklich benanntem Konzept- oder Prototypenstatus
- Durchsuchbare Hilfethemen mit Filtern für Fernwartung und regionale Hilfe
- Mobile Navigation, direkte Kontaktwege und Copy-Phone-Funktion
- Spamgeschützter KI-Assistent mit Cloudflare Turnstile, festen Limits und OpenAI-Moderation

## Seitenstruktur

```text
/fernwartung/
  windows-hilfe/
  drucker-hilfe/
  email-outlook/
/leistungen/
/standorte/
  ludwigsburg/
    pc-laptop/
    netzwerk-wlan/
    webseiten/
    automation/
    <weitere Hilfethemen>/
/standortinhaber-werden/
/ratgeber/
/ueber-schultes-it/
/impressum/
/datenschutz/
```

`/leistungen/` ist die zentrale Übersicht. Regionale Leistungsdetails liegen unter dem jeweiligen
Standort; deutschlandweite Fernwartung liegt unter `/fernwartung/`.

Bestehende flache URLs und ältere Leistungspfade bleiben als Kompatibilitätsrouten erreichbar.
Sie verwenden `index, follow`, einen Canonical auf die Zielroute und eine Weiterleitung per
Meta-Refresh mit null Sekunden. Ein normaler Link zur Zielseite bleibt als Rückfallebene sichtbar.
Aliasse erscheinen nicht in der Sitemap; die rechtlichen Seiten und die Fehlerseite bleiben
`noindex, follow`.

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

Er umfasst Frontend- und Worker-TypeScript, Tests, Produktions-Build und die datengetriebene
SEO-Validierung aller kanonischen Routen und Aliasse.

## Architektur

- `src/SiteView.tsx`: gemeinsamer, synchroner Seitenbaum für Build und Browser
- `src/components/PremiumShell.tsx`: Navigation, Logo und Footer aller Seiten
- `src/pages/PremiumHomePage.tsx`: Marken-Startseite
- `src/pages/PremiumServicePage.tsx`: Leistungsdetails mit themenspezifischen Varianten
- `src/pages/PremiumNetworkPages.tsx`: Leistungsübersicht, Standortverzeichnis, lokale Seite,
  Ratgeber, Betreibermodell, Über-uns-Seite und 404
- `src/pages/LegalContent.tsx`: vollständige Impressums- und Datenschutzinhalte
- `src/premium.css`, `src/premium-service.css`, `src/premium-network.css`: gemeinsames Design
  und die Gestaltungsvarianten der Seiten
- `src/site/motion.ts`, `src/motion.css`: progressive Bewegungen ohne zusätzliche Bibliothek
- `src/site/`: Marken- und Standortdaten, Kontakte, Routing, Distanzlogik,
  Schema.org-Erzeugung und statisches Rendern
- `src/content/`: normalisierte Leistungsdaten; `src/content/legacy/` enthält weiterhin
  die bestehenden redaktionellen Leistungs- und Hilfetexte als Datenbasis
- `public/images/`: generierte illustrative Motive in lokalen WebP-Größen;
  Herkunft und Maße stehen in `assets.json`, die Prompts in
  [docs/design/image-prompts.json](docs/design/image-prompts.json)
- `vite.config.ts`: statische HTML-Ausgabe, Alias-Kompatibilität, Sitemap und Seitenmanifest
- `scripts/validate-seo.mjs`: automatisierte Prüfung gegen das erzeugte Seitenmanifest

Die Bildmotive zeigen allgemeine Technik-Szenen. Sie dokumentieren keine Kundenprojekte,
keine Geschäftsräume und keine identifizierten Personen.

Weitere Details stehen in [docs/architecture.md](docs/architecture.md). Der messbare technische
SEO-Gate und der Offpage-Aufbau sind in
[docs/seo-authority-roadmap.md](docs/seo-authority-roadmap.md) dokumentiert.
Die Abnahme der Bewegungen und Zielgruppen-Texte steht in
[docs/design/motion-and-content-polish.md](docs/design/motion-and-content-polish.md).

## Business-Assistent

Die Website bleibt statisch auf GitHub Pages. Der Assistent läuft getrennt als Cloudflare Worker
mit einer Durable-Object-Instanz für atomare Sitzungs-, Rate- und Tageslimits.

- festes Textmodell `gpt-5.4-mini`, keine Tools und keine Websuche
- Ein- und Ausgabeprüfung mit `omni-moderation-latest`
- 24-Stunden-Sitzung erst nach Cloudflare Turnstile
- serverseitiger Gesprächskontext, maximal acht Nachrichten
- globales Budget von maximal 1.000.000 reservierten/verbrauchten Tokens pro UTC-Tag
- API-Schlüssel bleiben ausschließlich in verschlüsselten Worker-Secrets

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
`npm ci`, führt bei jedem Push auf `main` den vollständigen Prüfpfad `npm run check` aus und
veröffentlicht anschließend den Inhalt von `dist` über GitHub Pages. Ein manueller Start über
`workflow_dispatch` ist ebenfalls möglich. Die Worker-Veröffentlichung erfolgt separat.

Im Repository muss unter **Settings → Pages → Build and deployment** als Quelle
**GitHub Actions** ausgewählt sein.

## Kontakt

Schultes IT · deutschlandweit per Fernwartung · Standort Ludwigsburg
[+49 179 1707411](tel:+491791707411)
