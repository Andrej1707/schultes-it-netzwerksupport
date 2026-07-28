# Schultes IT Website-Architektur

## Ziel

Die Website bildet eine übergeordnete deutsche Marke mit zwei getrennten Servicewegen ab:

1. zentrale, deutschlandweite Fernwartung;
2. persönliche Vor-Ort-Hilfe über aktive regionale Standorte.

Ein Standort ist nicht automatisch eine Filiale oder ein Angestelltenverhältnis. Das Datenmodell
unterscheidet inhabergeführte Standorte und künftig rechtlich selbstständige Lizenznehmer.

## Quellen der Wahrheit

- `src/site/config.ts`: Marke, Kontakt, Domain und zentrale Fernwartung
- `src/site/locations.ts`: aktive und vorbereitete Standorte, Betreiber, Gebiete und Koordinaten
- `src/content/services.ts`: normalisierte Leistungsseiten und ihre Reichweite
- `src/site/publicServices.ts`: öffentlich freigegebene Leistungen aktiver Standorte
- `src/site/routes.ts`: kanonische Seiten, Seitentypen und alte Alias-URLs
- `src/site/schema.ts`: strukturierte Daten passend zum Seitentyp

Die Sitemap, statischen HTML-Dateien und das Build-Manifest entstehen aus `routes.ts`. Neue Seiten
werden deshalb nicht zusätzlich in einer separaten Sitemap-Liste gepflegt.

## Statische Crawl-Schicht

Jede kanonische URL wird beim Produktions-Build als eigene HTML-Datei erzeugt. Bereits ohne
JavaScript enthält sie:

- den richtigen Seitentitel, die Beschreibung, Canonical-URL und Robots-Anweisung;
- den seitenspezifischen H1, die Einleitung und die wichtigsten Inhaltsblöcke;
- echte interne Links mit `href`;
- die zum Seitentyp passenden Schema.org-Daten.

React übernimmt diese statische Erstansicht anschließend und lädt die interaktive Oberfläche.
Damit bleiben Design, Animationen und SupportBot erhalten, während Suchmaschinen nicht erst auf
clientseitiges Rendering angewiesen sind. `scripts/validate-seo.mjs` gleicht den statischen H1
gegen den jeweiligen Routendatensatz ab, prüft verwaiste Seiten und verhindert, dass versehentlich
Startseiten-Inhalte in andere HTML-Dateien kopiert werden.

## Seitentypen

### Marke

Die Startseite beschreibt Schultes IT als `Organization`. Sie trägt bewusst keine lokale Adresse
und kein `ProfessionalService`, damit die Marke nicht mit dem Standort Ludwigsburg verschmilzt.

### Deutschlandweite Fernwartung

Fernwartungsseiten erzeugen ein `Service`-Schema mit `areaServed: Country/Deutschland`. Unterseiten
können ohne Router-Umbau unter `/fernwartung/<thema>/` ergänzt werden.

### Leistungsbereiche

Die Seiten unter `/leistungen/` beschreiben das gemeinsame Angebot der Marke. Sie können zentrale,
remote erbringbare und regional verfügbare Leistungen zusammenführen.

### Standorte

Nur aktive Standortdaten erzeugen lokale `ProfessionalService`-Daten. Betreiber, Adresse,
Koordinaten und Einsatzgebiete stammen aus einem einzelnen Standortdatensatz.

`activeLocations` ist die zentrale öffentliche Standortliste. Standortübersicht, Standortfinder,
Routen, Sitemap, Schema.org, Menüs und Ratgeber verwenden ausschließlich aktive Standorte oder
daraus abgeleitete öffentliche Leistungsdaten. `preparing` bleibt damit intern vorbereitbar, ohne
als aktiver Standort gezählt oder verlinkt zu werden.

Das optionale Betreibermodell kann Geschäftsbezeichnung, Rechtsform, Geschäftsanschrift,
geschäftliche Telefonnummer und E-Mail, verantwortliche Person, Umsatzsteuer-ID,
Impressumsangaben sowie den Hinweis zur Tätigkeit im eigenen Namen und auf eigene Rechnung
aufnehmen. Lokale Seiten lösen Kontakt und Fernwartungshinweis aus diesem Standortdatensatz auf;
zentrale Fernwartungsseiten verwenden weiterhin die Markenkonfiguration.

Lokale Detailseiten werden unter `/standorte/<standort>/<thema>/` erzeugt. Bestehende flache URLs
bleiben als `noindex, follow`-Alias mit Canonical auf die neue Route erreichbar.

## Standortfinder

Die Distanzberechnung erfolgt mit der Haversine-Formel im Browser. Es werden keine Koordinaten an
Schultes IT oder einen Geocoding-Dienst übertragen.

- Bereits freigegebener Standortzugriff kann auf `/standorte/` automatisch genutzt werden.
- Ohne bestehende Berechtigung entscheidet der Besucher über den Button selbst.
- Eine Weiterleitung erfolgt nur, wenn ein aktiver Standort innerhalb seines Einsatzradius liegt.
- Außerhalb aller Gebiete wird Fernwartung angeboten, statt fälschlich Vor-Ort-Abdeckung zu
  versprechen.

Später kann dieselbe Schnittstelle um PLZ-Suche oder serverseitige Gebietspolygone ergänzt werden.

## Neuen Standort ergänzen

1. Standort mit eindeutiger ID, Pfad, Betreiber, Koordinaten und Einsatzgebiet in
   `src/site/locations.ts` anlegen.
2. Nur tatsächlich betriebsbereite Standorte auf `status: "active"` setzen. Die kanonische
   Standortseite, Sitemap und lokalen strukturierten Daten entstehen dann automatisch.
3. Optional standortspezifische Leistungsdaten oder Inhalte ergänzen.
4. `npm run check` ausführen und Schema, Sitemap sowie Standortfinder prüfen.

Ein Bewerberportal, Gebietsvertrag, Ticketing und Abrechnung gehören bewusst noch nicht zu diesem
Website-Baustein. Die Daten- und URL-Struktur ist aber auf diese Erweiterungen vorbereitet.
Auch eine automatisch erzeugte separate Impressumsseite pro selbstständigem Betreiber ist noch
nicht Teil dieses Schritts; dafür kann zunächst eine geprüfte URL oder ein strukturierter
Impressumshinweis am Standort hinterlegt werden.

## Kompatibilität

Alte URLs werden weiterhin statisch ausgeliefert. Sie:

- rendern weiterhin den passenden Inhalt;
- enthalten `noindex, follow`;
- setzen den Canonical auf die neue Zielroute;
- erscheinen nicht in der Sitemap.

Damit bleiben vorhandene Links nutzbar, während Suchmaschinen schrittweise auf die neue Struktur
wechseln können.

Rechtstexte liegen unter `/impressum/` und `/datenschutz/` auf echten Pfaden. Die früheren
Hash-Aufrufe bleiben in der Anwendung als Kompatibilitätsfall erhalten, sind aber keine
indexierbaren Zielseiten.
