# Schultes IT & Netzwerksupport

Die digitale Kommandozentrale von Andrej Schultes für IT-Support, Netzwerksupport,
PC-Hilfe, Webseiten und kleine Automatisierungen in Ludwigsburg.

Die Seite verbindet lokale Service-Kommunikation mit einer persönlichen Projektübersicht,
Kompetenzmatrix, Google-Maps-Bereich und direktem Mobile-Kontakt.

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

- Animierte Kommandozentrale mit reaktivem Netzwerk-Hintergrund
- Leistungen, Arbeitsweise und persönliche Positionierung
- Projektstream für Tools, Automationen und KI-Prototypen
- Kompetenzmatrix ohne künstliche Prozentwerte
- Local-Trust-Bereich für Ludwigsburg
- Sticky Mobile-CTA und Copy-Phone-Funktion
- Spamgeschützter KI-Assistent mit Cloudflare Turnstile, festen Limits und OpenAI-Moderation

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

Andrej Schultes · Ludwigsburg  
[+49 1523 3364752](tel:+4915233364752)
