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
- Framer Motion
- Lucide Icons
- Custom CSS und Canvas-Animation
- Google Maps Embed

## Highlights

- Marken-Startseite mit zwei klaren Einstiegen: Fernwartung und regionale Standorte
- Verschachtelte, statisch erzeugte Routen mit vollständiger Pfadauflösung
- Seitentypabhängige Metadaten und Schema.org-Daten
- Automatisch aus der Seiten-Registry erzeugte XML- und Text-Sitemap
- Datenmodell für aktive Standorte, Betreiber, Einsatzgebiete und Koordinaten
- Datenschutzfreundlicher Standortfinder mit lokaler Distanzberechnung
- Animierte Ludwigsburg-Kommandozentrale als erster Standort
- Projektstream für Tools, Automationen und KI-Prototypen
- Kompetenzmatrix ohne künstliche Prozentwerte
- Sticky Mobile-CTA und Copy-Phone-Funktion
- Spamgeschützter KI-Assistent mit Cloudflare Turnstile, festen Limits und OpenAI-Moderation

## Seitenstruktur

```text
/fernwartung/
  windows-hilfe/
  drucker-hilfe/
  email-outlook/
/leistungen/
  pc-laptop/
  netzwerk-wlan/
  webseiten/
  automation/
/standorte/
  ludwigsburg/
/standortinhaber-werden/
/ratgeber/
/ueber-schultes-it/
```

Bestehende flache URLs bleiben als Kompatibilitätsrouten erreichbar. Sie werden nicht in der
Sitemap geführt und verweisen kanonisch auf die neue Zielroute.

## Lokal starten

```bash
npm install
npm run dev
```

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

- `src/site/`: Marken- und Standortkonfiguration, vollständiges Routing, Seitentypen,
  Distanzlogik und Schema.org-Erzeugung
- `src/content/`: normalisierte Leistungsdaten und getrennte bestehende Inhaltsmodule
- `src/pages/`: neue Marken-, Standort-, Ratgeber- und Netzwerkseiten
- `src/legacy/`: bewährte Ludwigsburg-Oberfläche und bestehende Service-Komponenten
- `vite.config.ts`: statische HTML-Ausgabe, Alias-Kompatibilität, Sitemap und Seitenmanifest
- `scripts/validate-seo.mjs`: automatisierte Prüfung gegen das erzeugte Seitenmanifest

Weitere Details stehen in [docs/architecture.md](docs/architecture.md).

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

Der Workflow unter `.github/workflows/deploy.yml` baut die Website bei jedem Push
auf `main` und veröffentlicht den Inhalt von `dist` über GitHub Pages.

Im Repository muss unter **Settings → Pages → Build and deployment** als Quelle
**GitHub Actions** ausgewählt sein.

## Kontakt

Schultes IT · deutschlandweit per Fernwartung · Standort Ludwigsburg
[+49 1567 9616310](tel:+4915679616310)
