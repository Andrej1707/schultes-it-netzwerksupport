# Schultes IT Website-Architektur

## Ziel

Die Website bildet eine übergeordnete deutsche Marke mit zwei Servicewegen ab:

1. zentrale, deutschlandweite Fernwartung;
2. persönliche Vor-Ort-Hilfe über aktive regionale Standorte.

Ein Standort ist nicht automatisch eine Filiale oder ein Angestelltenverhältnis. Das Datenmodell
unterscheidet inhabergeführte Standorte und künftig rechtlich selbstständige Lizenznehmer.

## Quellen der Wahrheit

- `src/site/config.ts`: Marke, Domain und zentrale Fernwartung
- `src/site/locations.ts`: Standorte, Betreiber, Kontaktangaben, Preise, Gebiete und Koordinaten
- `src/site/contacts.ts`: Auflösung des zentralen oder regionalen Ansprechpartners
- `src/content/services.ts`: normalisierte Leistungsseiten und ihre Reichweite
- `src/content/legacy/`: bestehende redaktionelle Leistungs- und Hilfetexte als Datenbasis
- `src/site/publicServices.ts`: öffentlich freigegebene Leistungen aktiver Standorte
- `src/site/routes.ts`: kanonische Seiten, Seitentypen, Metadaten und alte Alias-URLs
- `src/site/schema.ts`: strukturierte Daten passend zum Seitentyp

Die Sitemap, statischen HTML-Dateien und das Build-Manifest entstehen aus `routes.ts`. Neue Seiten
werden nicht zusätzlich in einer separaten Sitemap-Liste gepflegt. Die bisherigen Inhaltsmodule
bleiben Datenquellen; die aktuelle Oberfläche verwendet die Premium-Komponenten.

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
- normale interne Links mit `href`;
- vollständige Impressums- beziehungsweise Datenschutztexte auf den rechtlichen Seiten;
- die zum Seitentyp passenden Metadaten und strukturierten Daten.

`src/main.tsx` löst die Route auf und hydriert vorhandenes kanonisches HTML mit `hydrateRoot`.
Build und Browser verwenden den identischen `identifierPrefix` `schultes-`. `App.tsx` bindet
`SiteView` ein und behandelt frühere Hash-Aufrufe der rechtlichen Seiten. Falls kein passender
Prerender vorhanden ist oder ein Alias aufgerufen wird, wird `createRoot` verwendet.

Damit gibt es keine getrennte, verkürzte SEO-Ansicht, die nachträglich gegen ein anderes Design
ausgetauscht wird. Für neue Komponenten müssen der erste Browser-Render und der Server-Render
übereinstimmen. Browser-APIs gehören in Effekte oder benutzerausgelöste Ereignisbehandler.
CSS wird über `main.tsx` eingebunden und nicht über den serverseitig importierten Seitenbaum.

Der Support-Assistent ist davon getrennt: `main.tsx` lädt `src/support/SupportBot.tsx` asynchron
und rendert ihn in `#support-root`. Ein verzögerter Assistent blockiert deshalb weder die Seite
noch ihren statischen Inhalt. Die API läuft weiterhin separat als Cloudflare Worker mit
Durable Objects.

## Oberfläche und Gestaltung

Das gemeinsame Design verwendet helle Flächen, große Typografie, blaue Aktionen und lokale
Produktmotive. Themen unterscheiden sich durch Bildwahl, Flächenfarben und Anordnung:

- `src/components/PremiumShell.tsx`: gemeinsamer Header, mobile Navigation, Logo und Footer
- `src/pages/PremiumHomePage.tsx`: Produktbühnen und die Einstiege Fernwartung/Vor-Ort-Hilfe
- `src/pages/PremiumServicePage.tsx`: Varianten für PC, Netzwerk, Web, Automation, Fernwartung,
  Alltagshilfe, Sicherheit, dringende Probleme und Beratung
- `src/pages/PremiumNetworkPages.tsx`: unterschiedliche Kompositionen für Leistungsübersicht,
  Standortverzeichnis, lokale Seite, Ratgeber, Standortinhaber-Modell, Über-uns-Seite und 404
- `src/pages/LegalContent.tsx`: rechtliche Inhalte innerhalb desselben Seitenrahmens
- `src/premium.css`: Grundgestaltung und gemeinsame Komponenten
- `src/premium-service.css`: Leistungsseiten und ihre Themenvarianten
- `src/premium-network.css`: Übersichts-, Standort- und redaktionelle Seiten

Die CSS-Klassen verwenden die Präfixe `p-`, `ps-` und `pn-` für die jeweiligen Bereiche.
Responsive Layouts, sichtbarer Tastaturfokus, eine Sprungmarke zum Hauptinhalt und
`prefers-reduced-motion` gehören zur Gestaltung. Mobile Navigation, Ratgeberfilter,
Telefonnummer-Kopieren und Kartenfreigabe werden nach der Hydrierung interaktiv.

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

Jede fotografische Platzierung hat ein eigenes Motiv. `workspace`, `wifi` und `support`
gehören ausschließlich zur Startseite; Leistungsübersicht, lokale Seite, Über-uns-Seite
und fotografische Leistungsdetails verwenden jeweils andere Szenen. Die Zuordnung der
Leistungsbilder steht in `src/site/photos.ts`. Alle Bilder liegen in `public/images/` als
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

### Marke

Die Startseite beschreibt Schultes IT als `Organization`. Sie trägt keine lokale Adresse
und kein `ProfessionalService`, damit Marke und Standort Ludwigsburg getrennt bleiben.

### Deutschlandweite Fernwartung

Fernwartungsseiten erzeugen ein `Service`-Schema mit `areaServed: Country/Deutschland`.
Die kanonischen Pfade liegen unter `/fernwartung/`, etwa `/fernwartung/windows-hilfe/`.
Kontakt und Verantwortung stammen aus der zentralen Fernwartungskonfiguration.

### Leistungsübersicht

`/leistungen/` zeigt die gemeinsamen Leistungsbereiche. Regionale Details liegen unter dem
zuständigen Standort, etwa `/standorte/ludwigsburg/pc-laptop/`. Frühere allgemeine Detailpfade
werden als Aliasse aufgelöst. Links in der aktuellen Oberfläche führen direkt auf kanonische
Ziele oder zur Standortauswahl.

### Standorte

Nur aktive Standortdaten erzeugen lokale `ProfessionalService`-Daten. Betreiber, Adresse,
Koordinaten und Einsatzgebiete stammen aus einem einzelnen Standortdatensatz.

`activeLocations` ist die zentrale öffentliche Standortliste. Standortübersicht, Standortfinder,
Routen, Sitemap, Schema.org, Menüs und Ratgeber verwenden aktive Standorte oder daraus abgeleitete
öffentliche Leistungsdaten. `preparing` bleibt intern vorbereitbar, ohne als aktiver Standort
gezählt oder verlinkt zu werden.

Das optionale Betreibermodell kann Geschäftsbezeichnung, Rechtsform, Geschäftsanschrift,
geschäftliche Telefonnummer und E-Mail, verantwortliche Person, Umsatzsteuer-ID,
Impressumsangaben sowie den Hinweis zur Tätigkeit im eigenen Namen und auf eigene Rechnung
aufnehmen. Lokale Seiten lösen Kontakt und Fernwartungshinweis aus diesen Standortdaten auf.

Die lokale Seite enthält direkte Kontaktwege, Kopieren der Telefonnummer, Preise, vorhandene
Google-Profilangaben, Einsatzgebiete und einen Zugang zur Fernwartung samt Download. Google Maps
wird erst nach dem Klick auf „Google Maps laden“ als iframe eingebunden und kann wieder
deaktiviert werden. Die schematische Darstellung im Standortverzeichnis ist eine lokal
gerenderte Illustration des Einsatzgebiets und keine geladene externe Karte.

### Ratgeber, Betreibermodell und rechtliche Seiten

Der Ratgeber bündelt veröffentlichte Hilfeseiten. Suchbegriff und Filter für regionale Hilfe
beziehungsweise Fernwartung wirken auf bereits lokal vorhandene Daten. Alle Hilfelinks sind
im ungefilterten Anfangszustand enthalten.

Die Seite für Standortinhaber beschreibt das vorbereitete Modell und führt zum persönlichen
Kontakt. Sie stellt weder ein Bewerberportal noch eine sofortige Gebietszusage dar.
Impressum und Datenschutz werden vollständig auf ihren eigenen Pfaden gerendert und bleiben
`noindex, follow`.

## Standortfinder

Der Browser fragt erst nach einem ausdrücklichen Klick auf „Meinen Standort prüfen“ nach der
Position. Auch eine bereits erteilte Berechtigung löst keine automatische Standortabfrage aus.
Die Distanz wird mit der Haversine-Formel auf dem Gerät berechnet. Koordinaten werden dabei weder
an Schultes IT noch an einen Geocoding-Dienst übertragen oder in der Website gespeichert.

- Ein Treffer zeigt die ungefähre Luftlinienentfernung und einen Link zum aktiven Standort.
- Der hinterlegte Einsatzradius dient zur Einordnung; ein Termin wird persönlich abgestimmt.
- Außerhalb des Radius wird auf deutschlandweite Fernwartung verwiesen.
- Es gibt keine automatische Weiterleitung nach der Standortberechnung.
- Bei verweigertem Zugriff oder einem Fehler bleibt die manuelle Standortauswahl verfügbar.

Die Suche im Standortverzeichnis filtert Ortsnamen, die hinterlegte Standort-Postleitzahl,
Regionsnamen und Einsatzgebiete. Sie ist keine deutschlandweite PLZ-Geocodierung.

## Kompatibilität und Fehlerseiten

Alte Pfade werden weiterhin als eigene statische HTML-Dateien ausgeliefert. Aliasse indexierbarer
Seiten:

- verwenden `index, follow, max-image-preview:large`;
- setzen den Canonical auf die neue Zielroute;
- enthalten einen Meta-Refresh mit null Sekunden zur kanonischen URL;
- zeigen einen normalen Link zur Zielseite als Rückfallebene;
- erscheinen nicht in der Sitemap und werden intern nicht als Ziel verlinkt.

Die Alias-Dateien sind Weiterleitungsseiten und keine zweite vollständige Inhaltsfassung.
Sie werden nicht mit `noindex` kombiniert, damit Suchmaschinen die Weiterleitung verarbeiten
können. GitHub Pages erhält hier statische Weiterleitungsdateien; die Anwendung setzt dadurch
keinen eigenen HTTP-301-Status.

Die früheren Hash-Aufrufe `#/impressum` und `#/datenschutz` werden im Browser durch `App.tsx`
auf `/impressum/` beziehungsweise `/datenschutz/` umgeleitet. Sie sind keine eigenständigen
indexierbaren Routen. Der Build erzeugt außerdem eine gestaltete `404.html` mit eigener
Fehlermeldung, Navigation und `noindex, follow`.

## Prüfpfad und Veröffentlichung

`npm run check` führt Frontend- und Worker-Typechecks, die Tests, den Produktions-Build und
`scripts/validate-seo.mjs` aus. Die SEO-Prüfung arbeitet gegen `dist/site-manifest.json` und
kontrolliert unter anderem:

- H1, Titel, Beschreibung, Canonical, Robots und statischen Seiteninhalt;
- strukturierte Daten und den passenden SHA-256-Hash in der Content Security Policy;
- lokale Bild-, CSS- und weitere Asset-Verweise;
- interne kanonische Links, Sitemap-Zuordnung und verwaiste indexierbare Seiten;
- vollständige rechtliche Inhalte, die Fehlerseite und die Alias-Weiterleitungen;
- zurückgebliebene Suspense-Platzhalter im statisch gerenderten Inhalt.

`.github/workflows/deploy.yml` verwendet Node.js 22 und `npm ci`, führt `npm run check` aus und
veröffentlicht erst anschließend `dist` auf GitHub Pages. Der Worker wird separat bereitgestellt.
Browserprüfungen von Desktop-/Mobilansichten, Hydrierung, Navigation und Interaktionen ergänzen
diese automatisierten Prüfungen; ein erfolgreicher Build allein belegt keine Live-Abnahme.

## Neuen Standort ergänzen

1. Standort mit eindeutiger ID, Pfad, Betreiber, Koordinaten und Einsatzgebiet in
   `src/site/locations.ts` anlegen.
2. Nur tatsächlich betriebsbereite Standorte auf `status: "active"` setzen. Kanonische
   Standortseite, Sitemap und lokale strukturierte Daten entstehen daraus automatisch.
3. Kontakt-, Preis-, Leistungs- und Betreiberdaten sowie lokale Inhalte prüfen und ergänzen.
4. `npm run check` ausführen und die neue Seite, Verlinkung, Schema-Ausgabe und den
   Standortfinder im Browser prüfen.

Ein Bewerberportal, Gebietsvertrag, Ticketing und Abrechnung sind nicht Teil dieses
Website-Bausteins. Eine automatisch erzeugte separate Impressumsseite pro selbstständigem
Betreiber ist ebenfalls nicht implementiert; eine geprüfte URL oder ein strukturierter
Impressumshinweis kann am Standort hinterlegt werden.
