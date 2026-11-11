# Schultes IT Website-Architektur

## Ziel

Die Website gehört zum inhabergeführten Betrieb Schultes IT & Netzwerksupport von Andrej
Schultes in Ludwigsburg. Sie bietet zwei Wege zu demselben Ansprechpartner:

1. deutschlandweite Fernwartung;
2. persönliche Vor-Ort-Hilfe in Ludwigsburg und Umgebung.

Die Startseite `/` ist die Betriebsseite mit Leistungen, Preisen, Einsatzgebiet und direktem
Kontakt. Standortverzeichnis, Besucher-Standortbestimmung und Partner- oder Franchiseauswahl
sind nicht Teil der Website. Alte Standort- und Betreiberpfade bleiben nur als Aliasse erhalten.

Dieses Dokument beschreibt den Quellstand. Es bestätigt weder eine Veröffentlichung noch eine
abgeschlossene Browser- oder Live-Abnahme. Historische Prüfberichte behalten ihren damaligen
Geltungsbereich.

## Quellen der Wahrheit

- `src/site/config.ts`: Betriebsname, Domain und deutschlandweite Fernwartung
- `src/site/locations.ts`: der Ludwigsburger Betrieb, Ansprechpartner, Kontaktangaben,
  bestehende Preise, Einsatzgebiet und Koordinaten der Geschäftsanschrift
- `src/site/contacts.ts`: Kontaktauflösung für denselben Betrieb auf allen Seiten
- `src/content/services.ts`: normalisierte Leistungsseiten und ihre Reichweite
- `src/content/legacy/`: bestehende redaktionelle Leistungs- und Hilfetexte als Datenbasis
- `src/site/publicServices.ts`: veröffentlichte Leistungen für Menü, Ratgeber und Routen
- `src/site/navigation.ts`: gemeinsame Gruppierung der Leistungen für Menü und Footer
- `src/site/routes.ts`: kanonische Seiten, Seitentypen, Metadaten und alte Alias-URLs
- `src/site/schema.ts`: strukturierte Daten passend zum Seitentyp

Die Sitemap, statischen HTML-Dateien und das Build-Manifest entstehen aus `routes.ts`. Neue Seiten
werden nicht zusätzlich in einer separaten Sitemap-Liste gepflegt. Die bisherigen Inhaltsmodule
bleiben Datenquellen; die aktuelle Oberfläche verwendet die Premium-Komponenten.

Interne Namen wie `location`, `network-service` und `PremiumNetworkPages` stammen aus der
bisherigen Implementierung. Sie begründen keine weiteren öffentlichen Standorte oder
Betreiberangebote. Die Koordinaten des Betriebs dienen Karte und strukturierten Daten;
sie sind keine vom Besucher erhobene Position.

## Gemeinsames Rendern für Build und Browser

`src/SiteView.tsx` stellt den vollständigen Seitenbaum synchron zusammen. Er verwendet
`PremiumShell`, die passende Seitenkomponente und gegebenenfalls die rechtlichen Inhalte aus
`LegalContent.tsx`. Im Seitenbaum gibt es keine asynchron geladenen Seitentypen mit Platzhaltern.

`src/site/staticContent.ts` rendert diesen Baum beim Build mit Reacts `renderToString`.
`vite.config.ts` erzeugt daraus für jede kanonische URL eine eigene HTML-Datei und ergänzt
Metadaten, Canonical-URL, Robots-Anweisung und Schema.org-Daten. Der Entwicklungsserver verwendet
dieselbe Renderfunktion für die angeforderte Route. Der fertige Build benötigt keinen laufenden
Node-Server und wird statisch von GitHub Pages ausgeliefert.

Bereits ohne JavaScript enthält eine kanonische Seite:

- die vollständige gestaltete Navigation, den Seiteninhalt und den Footer;
- genau einen seitenspezifischen H1 und die jeweiligen Texte;
- normale interne Links mit `href` und native aufklappbare Navigation;
- vollständige Impressums- beziehungsweise Datenschutztexte auf den rechtlichen Seiten;
- die zum Seitentyp passenden Metadaten und strukturierten Daten.

`src/main.tsx` löst die Route auf und hydriert vorhandenes kanonisches HTML mit `hydrateRoot`.
Build und Browser verwenden den identischen `identifierPrefix` `schultes-`. `App.tsx` bindet
`SiteView` ein und behandelt frühere Hash-Aufrufe der rechtlichen Seiten. Falls kein passender
Prerender vorhanden ist, wird `createRoot` verwendet. Alias-Aufrufe werden zur kanonischen URL
weitergeleitet, bevor die Anwendung und der Assistent eingebunden werden.

Damit gibt es keine getrennte, verkürzte SEO-Ansicht, die nachträglich gegen ein anderes Design
ausgetauscht wird. Für neue Komponenten müssen der erste Browser-Render und der Server-Render
übereinstimmen. Browser-APIs gehören in Effekte oder benutzerausgelöste Ereignisbehandler.
CSS wird über `main.tsx` eingebunden und nicht über den serverseitig importierten Seitenbaum.

Der Support-Assistent ist davon getrennt: `main.tsx` lädt `src/support/SupportBot.tsx` asynchron
und rendert ihn in `#support-root`. Das Einbinden beim Seitenaufruf bleibt erhalten; es wird
nicht durch ein erstmaliges Nachladen nach einem Klick ersetzt. Sein separater Code blockiert
den statischen Seiteninhalt nicht. Die API läuft weiterhin als Cloudflare Worker mit Durable
Objects. Details zur Sitzungslaufzeit und zum automatischen Öffnen liegen bei der
Assistentenimplementierung.

## Oberfläche und Gestaltung

Das gemeinsame Design verwendet helle Flächen, große Typografie, blaue Aktionen und lokale
Produktmotive. Themen unterscheiden sich durch Bildwahl, Flächenfarben und Anordnung:

- `src/components/PremiumShell.tsx`: Header, vollständiges Leistungs- und Hilfethemenmenü,
  mobile Navigation, Logo und Footer
- `src/pages/PremiumServicePage.tsx`: Varianten für PC, Netzwerk, Web, Automation, Fernwartung,
  Alltagshilfe, Sicherheit, dringende Probleme und Beratung
- `src/pages/PremiumNetworkPages.tsx`: Betriebs-Startseite auf `/`, Leistungsübersicht,
  Ratgeber, Über-uns-Seite und 404
- `src/pages/LegalContent.tsx`: rechtliche Inhalte innerhalb desselben Seitenrahmens
- `src/premium.css`: Grundgestaltung und gemeinsame Komponenten
- `src/premium-service.css`: Leistungsseiten und ihre Themenvarianten
- `src/premium-network.css`: Betriebs-, Übersichts- und redaktionelle Seiten

Die CSS-Klassen verwenden `p-`, `ps-` und `pn-` sowie `sn-` für Navigation und Footer.
Responsive Layouts, sichtbarer Tastaturfokus, eine Sprungmarke zum Hauptinhalt und
`prefers-reduced-motion` gehören zur Gestaltung. Alle veröffentlichten Leistungen und
Hilfethemen sind im Menü auf Desktop und Mobilgeräten erreichbar. Native `details`/`summary`-
Elemente und normale Links erhalten die Navigation ohne JavaScript. JavaScript ergänzt das
Schließen des Menüs und weitere Komfortfunktionen. Kontaktlinks führen zum Telefon oder
zu `/#kontakt`, ohne Zwischenschritt über eine Standortauswahl.

Ratgeberfilter, Telefonnummer-Kopieren und Kartenfreigabe werden nach der Hydrierung interaktiv.
Die vollständige ungefilterte Themenliste und Kontaktlinks bleiben vorher verfügbar.

`src/site/motion.ts` ergänzt die bereits sichtbare Seite aus einem Effekt in `App.tsx`.
Ein `IntersectionObserver` startet kurze CSS-Animationen aus `src/motion.css` einmal pro
Abschnitt. Bereits sichtbare Einstiege werden nicht ausgeblendet. Es gibt keine permanenten
Scroll-Listener oder JavaScript-Animationsschleifen. Separate CSS-Eigenschaften `translate`
und `scale` erhalten die vorhandenen Bildtransformationen.

Tastaturfokus und Sprungmarken beenden betroffene Einblendungen unmittelbar. Reduzierte Bewegung
und Drucken deaktivieren die Effekte; die Rechtstexte und dynamischen Suchergebnisse sind
ausgenommen. Der Controller räumt Observer und Ereignisbehandler bei der React-Effektbereinigung
auf. Auswahl der Elemente, Zeiten und Abnahme stehen in
[design/motion-and-content-polish.md](design/motion-and-content-polish.md).

## Bildmaterial

Fotografische Platzierungen verwenden unterschiedliche illustrative Motive. Die Zuordnung der
Leistungsbilder steht in `src/site/photos.ts`. Die Bilder liegen in `public/images/` als
WebP-Dateien in 640, 1280 und 1920 Pixel Breite. Die Komponenten verwenden `srcset`, `sizes` und feste
Breiten-/Höhenangaben. Bilder unterhalb des Einstiegs werden verzögert geladen.

`public/images/assets.json` dokumentiert die generierte Herkunft sowie Dateimaße und Größen.
Die verwendeten Prompts stehen in `docs/design/image-prompts.json` und den thematischen
`docs/design/*-images.json`-Dateien. Der Release-Check erkennt wiederverwendete Bildpfade
und identische Bilddateien auf kanonischen Seiten. Es handelt sich um allgemeine
illustrative Technik-Szenen, nicht um Belege für Kundenarbeiten, eigene Geschäftsräume oder die
Identität dargestellter Personen. Die lokalen Projekttexte benennen ihren tatsächlichen
Konzept- oder Prototypenstatus getrennt vom Bildmaterial.

## Seitentypen und Reichweite

### Betriebsseite

`/` ist die lokale Betriebsseite für Ludwigsburg und Umgebung. Sie enthält direkte Kontaktwege,
Preise, vorhandene Google-Profilangaben, Einsatzgebiete und Zugang zur Fernwartung. Ihre lokalen
`ProfessionalService`-Daten stammen aus demselben Betriebsdatensatz wie Ansprechpartner und
Adresse. Google Maps wird erst nach einem Klick als iframe eingebunden und kann wieder
deaktiviert werden.

### Deutschlandweite Fernwartung

Fernwartungsseiten erzeugen ein `Service`-Schema mit `areaServed: Country/Deutschland`.
Die kanonischen Pfade liegen unter `/fernwartung/`, etwa `/fernwartung/windows-hilfe/`.
Kontakt und Verantwortung stammen aus der Fernwartungskonfiguration desselben Betriebs.
Verantwortlich ist Andrej Schultes; die nationale Reichweite bedeutet keinen zusätzlichen
Betrieb. Die Vorbereitung beschreibt zuerst die telefonische Abstimmung und anschließend
das gemeinsame Öffnen von RustDesk. Download, Versionsanzeige und Datei-Prüfsumme bleiben erhalten.

### Leistungsübersicht

`/leistungen/` bündelt das Angebot. Lokale Details liegen direkt unter `/leistungen/`, etwa
`/leistungen/pc-laptop/`, `/leistungen/netzwerk-wlan/` und `/leistungen/drucker/`. Breadcrumbs
führen über die Leistungsübersicht statt über eine regionale Auswahl. Aktuelle interne Links
verwenden direkt die kanonischen Ziele.

Die Umstellung ändert keine Preise: Fernhilfe beginnt weiterhin bei 25 €, Vor-Ort-Service bei
49 €; individuelle Projekte werden nach Absprache angeboten. Es werden keine neuen Zeitpakete,
Anfahrtskonditionen oder Zahlungsfunktionen eingeführt.

### Ratgeber, Über uns und rechtliche Seiten

Der Ratgeber bündelt veröffentlichte Hilfeseiten. Suchbegriff und Filter für regionale Hilfe
beziehungsweise Fernwartung wirken auf bereits lokal vorhandene Daten. Alle Hilfelinks sind
im ungefilterten Anfangszustand enthalten.

`/ueber-schultes-it/` beschreibt Andrej und seine Arbeitsweise. Impressum und Datenschutz
werden vollständig auf ihren eigenen Pfaden gerendert und bleiben `noindex, follow`.
Der Datenschutzabschnitt für die entfernte Browser-Standortbestimmung entfällt; der
Google-Maps-Abschnitt bleibt bestehen.

## Kompatibilität und Fehlerseiten

Die bisherigen Standort- und Betreiber-URLs führen auf `/`:

- `/standorte/`
- `/standorte/ludwigsburg/`
- `/ludwigsburg/`
- `/standortinhaber-werden/`

Frühere lokale Leistungsdetails unter `/standorte/ludwigsburg/` werden auf den entsprechenden
Pfad unter `/leistungen/` aufgelöst. Frühere regionale Fernwartungspfade führen auf die passende
nationale Route unter `/fernwartung/`. Weitere historische flache Leistungspfade bleiben
ebenfalls in der Alias-Registry erhalten.

Alte Pfade werden weiterhin als eigene statische HTML-Dateien ausgeliefert. Aliasse indexierbarer
Seiten:

- verwenden `index, follow, max-image-preview:large`;
- setzen den Canonical auf die neue Zielroute;
- enthalten einen Meta-Refresh mit null Sekunden zur kanonischen URL;
- erhalten Suchparameter und Sprungmarken über ein kleines vorgeschaltetes Skript;
- zeigen einen normalen Link zur Zielseite als Rückfallebene;
- erscheinen nicht in der Sitemap und werden intern nicht als Ziel verlinkt.

Die Alias-Dateien sind Weiterleitungsseiten und keine zweite vollständige Inhaltsfassung.
Sie werden nicht mit `noindex` kombiniert, damit Suchmaschinen die Weiterleitung verarbeiten
können. GitHub Pages erhält hier statische Weiterleitungsdateien; die Anwendung setzt dadurch
keinen eigenen HTTP-301-Status. Dokument-URLs mit `index.html` werden wie ihre Verzeichnis-URL
aufgelöst.

Die früheren Hash-Aufrufe `#/impressum` und `#/datenschutz` werden im Browser durch `App.tsx`
auf `/impressum/` beziehungsweise `/datenschutz/` umgeleitet. Sie sind keine eigenständigen
indexierbaren Routen. Der Build erzeugt außerdem eine gestaltete `404.html` mit eigener
Fehlermeldung, Navigation und `noindex, follow`.

## Prüfpfad und Veröffentlichung

`npm run check` führt Frontend- und Worker-Typechecks, Tests, RustDesk-Dateiprüfungen, den Produktions-Build und
`scripts/validate-seo.mjs` aus. Die SEO-Prüfung arbeitet gegen `dist/site-manifest.json` und
kontrolliert unter anderem:

- H1, Titel, Beschreibung, Canonical, Robots und statischen Seiteninhalt;
- strukturierte Daten und den passenden SHA-256-Hash in der Content Security Policy;
- lokale Bild-, CSS- und weitere Asset-Verweise;
- interne kanonische Links, Sitemap-Zuordnung und verwaiste indexierbare Seiten;
- vollständige rechtliche Inhalte, die Fehlerseite und die Alias-Weiterleitungen;
- zurückgebliebene Suspense-Platzhalter im statisch gerenderten Inhalt.

`.github/workflows/deploy.yml` verwendet Node.js 22 und `npm ci`. Pull Requests gegen `main`
durchlaufen denselben vollständigen Prüfpfad, ohne ein Pages-Artefakt zu veröffentlichen oder
ein Deployment zu starten. Nur Pushes auf `main` oder ein manueller Workflow-Start auf `main`
dürfen nach erfolgreichem Build `dist` auf GitHub Pages veröffentlichen. Der Worker wird separat
bereitgestellt.

Browserprüfungen von Desktop-/Mobilansichten, Tastaturbedienung, Navigation ohne JavaScript,
Hydrierung, Sprungmarken und Interaktionen ergänzen diese automatisierten Prüfungen. Erfolgreiche
Quellprüfungen oder ein Build allein belegen weder die Browser-Abnahme noch den veröffentlichten
Produktionsstand.
