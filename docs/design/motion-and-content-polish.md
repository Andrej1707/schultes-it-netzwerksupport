# Bewegungen und Zielgruppen-Texte

Abnahme vom 5. September 2026, aufbauend auf dem Premium-Redesign `70a226b`.

## Responsive und Texte

Der Einstieg benennt jetzt „Für Privatpersonen. Für kleine Unternehmen.“. Beide Aussagen
bleiben als zusammengehörige Wortgruppen lesbar und umbrechen auf kleinen Bildschirmen
untereinander. Webseiten nennen Hobby, Portfolio und private Projekte; Automation nennt
Dateien und Aufgaben zu Hause. Die Leistungsübersicht und Standorttexte tragen diese
Ansprache mit. Die gesonderten Angebote für kleine Betriebe bleiben erkennbar.

Metadaten und FAQ-Daten kommen weiterhin aus denselben Inhaltsquellen wie die sichtbare
Oberfläche. Preise, Kontakte, Leistungsgebiete, Routen und Indexierungsregeln bleiben erhalten.

## Bewegungsprinzip

Als gestalterische Referenz wurden die aktuellen Seiten
[Mac](https://www.apple.com/mac/) und [MacBook Air](https://www.apple.com/macbook-air/)
betrachtet. Die MacBook-Air-Seite verwendet kurze Fade-/Slide-Einstiege für Überschriften
und getrennte Produktbühnen. Die Umsetzung für Schultes IT ist eigenständig:

- Überschriften im Einstieg: 10 px vertikale Bewegung, 720 ms, ohne Ausblenden.
- Weitere Texte und kleine Karten: 20 px, 680 ms, einmaliges Einblenden beim Erscheinen.
- Produktbühnen: 16 px und eine Skalierung von 0,985 auf 1, 820 ms.
- Nebeneinanderliegende Karten: maximal 195 ms Staffelung; auf Mobilgeräten keine Verzögerung.
- Mobiles Menü: 6 px und 220 ms; Aktionspfeile und begrenzte Bildflächen reagieren dezent auf Hover.

Die Bilder und Texte haben keinen versteckten Ausgangszustand. Ein `IntersectionObserver`
ergänzt die Animationsklasse erst beim Erscheinen. Bereits sichtbarer Einstiegsinhalt bleibt
deckend. Eltern und Kinder werden nicht gleichzeitig animiert. Nach Abschluss werden Klassen
und temporäre Stile entfernt. Es entstehen keine neuen Bibliotheks- oder Netzwerkabhängigkeiten.

## Barrierefreiheit und Rückfallebenen

- Betriebssystem-Einstellung für reduzierte Bewegung wird beim Laden und bei Änderungen berücksichtigt.
- Fokussierte Inhalte und Ziele von Sprungmarken werden sofort vollständig sichtbar.
- Sprunglink führt zum fokussierbaren Hauptinhalt; Escape schließt das mobile Menü und stellt
  den Fokus auf dessen Schalter zurück.
- Druckansicht und Darstellung ohne JavaScript enthalten alle Inhalte ohne Effekte.
- Rechtliche Seiten, dynamische Filterergebnisse und Support-UI sind vom neuen Controller ausgenommen.
- Die vier illustrativen Fotos der Leistungsübersicht sind bewusst dekorativ (`alt=""`);
  ihre Themen und Aktionen stehen direkt daneben als Text.

## Durchgeführte Abnahme

- 34 Seiten einschließlich Fehlerseite bei 320, 768 und 1280 px Inhaltsbreite: 102 Ansichten,
  kein horizontaler Überlauf, je ein H1, keine versteckten Überschriften oder Absätze.
- Startseite zusätzlich visuell auf Mobilgeräten geprüft; die gekürzte Webdesign-Einleitung
  und Leistungsübersicht nach dem Textfeinschliff erneut geprüft.
- Einblendungen, Animation-Endzustände, Tastaturfokus während einer Einblendung, Sprunglink,
  Menü mit Escape, Abschnittslink, reduzierte Bewegung, Druckansicht und JavaScript-Abschaltung
  im Browser geprüft.
- `npm run check`: Frontend-/Worker-Typechecks, 72 Tests, Produktions-Build und SEO-Prüfung bestanden.
- SEO-Prüfung: 31 indexierbare und zwei nicht indexierbare kanonische Seiten, 29 Aliasse und
  27 eindeutige fotografische Platzierungen bestanden.
- Unabhängige Prüfung von Motion-Cleanup/SSR und Text-/SEO-Konsistenz ohne Release-Blocker.

## Performance

Gegenüber der zuvor live ausgelieferten Fassung wachsen Haupt-JavaScript und Haupt-CSS zusammen
um **1.637 Byte gzip** (mit identischen gzip-Einstellungen verglichen). Bilddateien und
zusätzliche Abhängigkeiten ändern sich nicht.

Ein lokaler Browser-Kaltstart mit deaktiviertem Cache, vierfach gedrosselter CPU, 150 ms
Netzwerklatenz und 200.000 Byte/s Download erreichte `DOMContentLoaded` nach rund 1,34 s.
Die erfasste JavaScript-Zeit betrug rund 49 ms. Nach Abschluss der Effekte entstand im
folgenden 18-Sekunden-Leerlaufintervall keine zusätzliche JavaScript- oder Layout-Zeit.
Alle Drosselungen wurden danach zurückgesetzt.

Diese Werte sind eine lokale Labor-Stichprobe, keine Core-Web-Vitals-Felddaten oder
Lighthouse-Bewertung. Der spezielle DevTools-Trace-Dienst war nicht verfügbar; die Werte
stammen aus den nativen Browser-Performance-Metriken. Die Live-Abnahme nach Veröffentlichung
ergänzt den lokalen Prüfpfad.
