# SEO- und Autoritäts-Fahrplan

## Was "10/10 technisch" bedeutet

Es gibt keinen universellen technischen SEO-Score von Google. Für dieses Repository gilt der
Produktions-Gate als 10/10, wenn alle folgenden Punkte automatisch bestehen:

- jede indexierbare URL besitzt eine eigene statische HTML-Datei;
- Statuspfad, Canonical, Robots-Angabe, Titel, Beschreibung und Open-Graph-Daten stimmen überein;
- H1 und sichtbarer statischer Inhalt gehören nachweislich zur jeweiligen Route;
- jede indexierbare Seite hat mindestens einen statisch crawlbaren internen Verweis;
- XML- und Text-Sitemap werden aus derselben Seiten-Registry erzeugt;
- Aliasse bleiben erreichbar, sind aber `noindex` und verweisen auf die kanonische Zielseite;
- strukturierte Daten passen zum Seitentyp und enthalten gültige Marken-, Service- oder
  Standortangaben;
- nationale Fernwartung nennt Deutschland, lokale Seiten nur echte aktive Einsatzgebiete;
- 404- und Rechtseiten gelangen nicht versehentlich in den Suchindex;
- TypeScript, Tests, Produktions-Build und `npm run seo:check` bestehen gemeinsam.

Dieser Gate schützt die technische Grundlage. Er garantiert weder Rankings noch Rich Results.

## Was "Autorität 8/10" bedeutet

Google veröffentlicht keine Domain-Autorität. Drittanbieter-Scores sind untereinander nicht
vergleichbar. Schultes IT verwendet deshalb eine eigene, nachvollziehbare Zielskala. 8/10 ist
erreicht, wenn die folgenden Signale organisch aufgebaut wurden:

- mindestens 20 unterschiedliche, thematisch oder regional relevante verweisende Domains;
- davon mindestens 5 redaktionell gesetzte Links von glaubwürdigen lokalen, geschäftlichen oder
  IT-nahen Websites;
- ein vollständig gepflegtes Google-Unternehmensprofil, dessen Website-Link direkt auf
  `/standorte/ludwigsburg/` führt;
- mindestens 15 echte Kundenbewertungen mit laufenden, individuellen Antworten;
- konsistente Unternehmensdaten in seriösen Branchen- und Regionalverzeichnissen;
- mindestens 6 eigenständige hilfreiche Ratgeber und 3 freigegebene Praxisfälle;
- sichtbare Markensuchen und über mehrere Monate wachsende nicht-markenbezogene Suchanfragen in
  der Search Console.

Links werden nicht gekauft oder automatisiert erzeugt. Bewertungen werden nicht erkauft,
vorformuliert oder nur von zufriedenen Kunden erbeten.

## Umsetzung in drei Phasen

### Phase 1: Vertrauen vor Ort

1. Google-Unternehmensprofil auf die Ludwigsburg-Seite verlinken.
2. Unternehmensdaten in bestehenden Profilen vereinheitlichen.
3. Nach abgeschlossenen Aufträgen neutral um eine ehrliche Bewertung bitten.
4. Jede Bewertung persönlich beantworten.
5. Profile bei passenden lokalen Wirtschafts-, Gründer- und Unternehmensnetzwerken aufbauen.

### Phase 2: Verlinkbare Inhalte

1. Sechs Ratgeber zu echten Kundenproblemen veröffentlichen, nicht zu künstlichen Keyword-Listen.
2. Drei anonymisierte Praxisfälle nur mit Kundeneinwilligung veröffentlichen.
3. Lokale Vereine, Seniorentreffs und kleine Unternehmen mit nützlichen Sicherheits- oder
   Technikformaten unterstützen.
4. Seriöse lokale Medien und Partner nur bei echtem Nachrichtenwert ansprechen.

### Phase 3: Deutschlandweite Marke

1. Fernwartungs-Ratgeber auf Windows, Drucker und E-Mail ausbauen.
2. Neue Standortseiten erst veröffentlichen, wenn ein realer aktiver Betreiber existiert.
3. Keine austauschbaren Stadtseiten und keine Doorway Pages erzeugen.
4. Neue Standorte mit Betreiber, Gebiet, Kontakt und eigenständigem lokalem Inhalt auszeichnen.

## Monatliche Messung

- Search Console: indexierte Seiten, Impressionen, Klicks, Suchanfragen und Länder;
- Google-Unternehmensprofil: Anrufe, Website-Klicks, Routenanfragen und neue Bewertungen;
- Cloudflare Analytics: Besuche, Einstiegsseiten und Entwicklung des direkten Traffics;
- Backlink-Werkzeug: neue und verlorene verweisende Domains, Linkqualität und Spam-Anteil;
- Website-Gate: `npm run check` vor jeder Veröffentlichung.

Rankings, Autorität und Bewertungen werden monatlich betrachtet. Tägliche Schwankungen lösen keine
Keyword- oder Seitenkopien aus.
