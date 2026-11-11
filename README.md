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
- Durchsuchbare Hilfethemen mit Filtern für Fernwartung und regionale Hilfe
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
/ueber-schultes-it/
/impressum/
/datenschutz/
```

`/` ist die lokale Betriebsseite für Ludwigsburg und Umgebung. `/leistungen/` bündelt das
Angebot; die lokalen Leistungsdetails liegen direkt unter `/leistungen/<thema>/`.
Deutschlandweite Fernwartung bleibt unter `/fernwartung/`.

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

GitHub Pages liefert die Alias-Dateien mit HTTP 200 aus. Die sofortige Meta-Weiterleitung ist
für Google ein permanentes Weiterleitungssignal, aber kein HTTP-301-Status. Eigene HTTP-301/308-
Regeln für diese Pfade müssten am Hosting- oder vorgeschalteten Proxy-Dienst eingerichtet werden.
Domain- und HTTPS-Weiterleitungen sind davon getrennt zu prüfen.

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

Er umfasst Frontend- und Worker-TypeScript, Tests, RustDesk-Dateiprüfungen, Produktions-Build
und die datengetriebene SEO-Validierung aller kanonischen Routen und Aliasse. Desktop-, Mobil-,
Tastatur- und Ohne-JavaScript-Prüfungen im Browser sind zusätzliche Abnahmeschritte.

## Architektur

- `src/SiteView.tsx`: gemeinsamer, synchroner Seitenbaum für Build und Browser
- `src/components/PremiumShell.tsx`: Navigation, Logo und Footer aller Seiten
- `src/site/navigation.ts`: gemeinsame Gruppierung aller veröffentlichten Leistungen für Menü und Footer
- `src/pages/PremiumServicePage.tsx`: Leistungsdetails mit themenspezifischen Varianten
- `src/pages/PremiumNetworkPages.tsx`: lokale Betriebs-Startseite, Leistungsübersicht,
  Ratgeber, Über-uns-Seite und 404; der Dateiname ist historisch
- `src/pages/LegalContent.tsx`: vollständige Impressums- und Datenschutzinhalte
- `src/premium.css`, `src/premium-service.css`, `src/premium-network.css`: gemeinsames Design
  und die Gestaltungsvarianten der Seiten
- `src/site/motion.ts`, `src/motion.css`: progressive Bewegungen ohne zusätzliche Bibliothek
- `src/site/`: Betriebsdaten, Kontakte, Routing,
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
`npm ci` und führt den vollständigen Prüfpfad `npm run check` auch für Pull Requests gegen
`main` aus. Pull Requests führen keine Veröffentlichung durch. Nur ein erfolgreicher Push auf
`main` oder ein manueller `workflow_dispatch` auf `main` lädt das Pages-Artefakt hoch und
veröffentlicht `dist`. Die Worker-Veröffentlichung erfolgt separat.

Im Repository muss unter **Settings → Pages → Build and deployment** als Quelle
**GitHub Actions** ausgewählt sein.

## Kontakt

Schultes IT · Ludwigsburg und Umgebung · deutschlandweit per Fernwartung
[+49 179 1707411](tel:+491791707411)
