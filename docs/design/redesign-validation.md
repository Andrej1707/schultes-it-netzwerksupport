# Premium-Redesign: Abnahme vom 5. September 2026

Die gesamte Website verwendet eine helle gemeinsame Gestaltung mit eigenen
Kompositionen für die Startseite, Übersichten, den Standort und neun Leistungsfamilien.
27 fotografische Platzierungen verwenden 27 verschiedene Motive. Rechtstexte,
Kontaktdaten, Preise, Projektstände und Downloadangaben bleiben aus den vorhandenen
Inhaltsdaten erhalten; die Datenschutzbeschreibung bildet die nun ausschließlich
per Klick gestartete Standortsuche ab.

## Automatisierte Prüfungen

- `npm run check`: Frontend- und Worker-Typecheck, 72 Tests in acht Dateien,
  Produktionsbuild und vollständige SEO-Validierung erfolgreich.
- 31 indexierbare Seiten, zwei nicht indexierbare rechtliche Seiten und
  29 kanonisch zugeordnete Kompatibilitätsweiterleitungen geprüft.
- Metadaten, eine H1 pro Seite, interne Links und Sprungmarken, Sitemap,
  strukturierte Daten einschließlich CSP-Hash, lokale Assets und vollständige
  Rechtstexte im initialen HTML geprüft.
- 27 verschiedene Fotoplatzierungen über Pfad und SHA-256 der Bilddateien geprüft.
- Alle 62 bisherigen öffentlichen Routen behalten ihre kanonischen Ziele und
  Indexierungseinstellungen. Die separate Fehlerseite bleibt `noindex`.
- Unabhängige Prüfung: keine doppelten IDs oder defekten ARIA-Verweise auf den
  33 kanonischen Seiten; RustDesk-Datei und angezeigter SHA-256 stimmen überein.

## Browser-Abnahme des Produktionsbuilds

34 Seiten einschließlich 404 wurden bei 320, 768 und 1280 Pixel Inhaltsbreite
geprüft: 102 Ansichten ohne horizontalen Überlauf, fehlendes geladenes Einstiegsbild
oder zusätzliche H1. Ergänzende Sichtprüfungen erfassten die Startseite vollständig,
die verschiedenen Leistungsfamilien, Standort, Ratgeber, Verzeichnis und mobile
Standortinhaber-Seite.

Folgende Abläufe wurden tatsächlich bedient:

- Mobiles Menü öffnen/schließen und Escape mit Fokus-Rückgabe.
- Fernwartungslink zur Downloadsektion und Telefonnummer kopieren mit Rückmeldung.
- FAQ öffnen und Antwort lesen.
- Ratgeberfilter, Suche mit Treffer und Suche ohne Treffer.
- Standortsuche mit Postleitzahl und ohne regionalen Treffer.
- Google Maps: zunächst kein Iframe; erst nach Klick laden, anschließend deaktivieren.
- Supportfenster mobil öffnen, lesbare Verifikations-/Fehleransicht und schließen.
  Die externe Turnstile-Prüfung konnte auf localhost nicht abgeschlossen werden;
  ein erfolgreiches Supportgespräch wird daraus nicht abgeleitet.
- Datenschutz und Fernwartung mit deaktiviertem JavaScript: vollständige Inhalte,
  FAQ und Downloadlink vorhanden. JavaScript anschließend wieder aktiviert.

## Bilder und Veröffentlichung

Alle Motive liegen lokal als WebP in 640, 1280 und 1920 Pixel Breite vor.
Die größte einzelne Variante ist 218.968 Bytes groß. Die Website lädt pro Ansicht
eine passende Variante; Bilder unterhalb des Einstiegs werden verzögert geladen.
Prompts und Herkunft stehen in den JSON-Dateien dieses Verzeichnisses, das Inventar
in `public/images/assets.json`. Die Motive illustrieren Leistungen und stellen
keine tatsächlichen Kundeninstallationen, Geschäftsräume oder Mitarbeiterporträts dar.

GitHub Pages veröffentlicht über den bestehenden Workflow erst nach erneutem
`npm ci` und `npm run check`. Der Status des jeweiligen Commits ist unter
[GitHub Actions](https://github.com/Andrej1707/schultes-it-netzwerksupport/actions/workflows/deploy.yml)
nachvollziehbar. Technische SEO-Prüfungen bestätigen keine künftigen Rankings oder
eine bereits erfolgte erneute Indexierung durch Google.
