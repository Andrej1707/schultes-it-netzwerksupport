# AVIF für Ratgeber und Leistungsfotos

Stand: 2026-11-12. Die vorhandenen Fotomotive, Bildausschnitte, WebP-Dateien und Social-Media-Bilder bleiben erhalten. Diese Änderung ergänzt ausschließlich responsive Formatvarianten und die passende Browserauswahl.

## Qualität und Varianten

Die AVIFs werden direkt aus den jeweiligen ursprünglichen PNGs erzeugt, nicht aus bereits verlustbehafteten WebPs. Die vollständige Zuordnung einschließlich SHA-256, Ausgangsabmessungen, Zielabmessungen und Dateigrößen steht in `avif-image-variants.json`. Die fünf zuvor nicht zugeordneten Originale für `about-workshop`, `overview-network`, `support`, `wifi` und `workspace` wurden anhand eindeutiger Bildvergleiche wiedergefunden.

Export mit Pillow: RGB, `Image.Resampling.LANCZOS`, AVIF `quality=65`, `speed=4`, `subsampling='4:2:0'`, `max_threads=2`. Die Breiten 480 / 640 / 720 / 800 / 960 / 1280 / 1920 bieten passende Zwischenstufen für Karten, Mobilgeräte und größere Bildflächen. Die Höhe wird proportional gerundet; Bildausschnitte und Motive bleiben gleich. Die 1920er-Ausgabe ist wie bei den bisherigen WebPs aus dem 1536er-Original hochskaliert und enthält keine zusätzlichen Originaldetails.

AVIF- und WebP-Qualitätszahlen sind nicht direkt vergleichbar. Vor der Umstellung wurden drei unterschiedliche Motive gegen die gleich groß skalierten Original-PNGs verglichen. AVIF65 hielt Kanten, Holzstruktur, Fotodetails und Stoffstruktur im visuellen 1:1-Vergleich ohne erkennbare Verschlechterung gegenüber den bisherigen WebPs. Auch die gemessene PSNR war jeweils höher; diese technische Kennzahl ergänzt den Sichtvergleich und ersetzt ihn nicht.

| Motiv und Breite | Bisheriges WebP | AVIF65 | Einsparung | PSNR WebP / AVIF gegen PNG |
| --- | ---: | ---: | ---: | ---: |
| Internet-Geschwindigkeit messen, 800 | 57.732 Bytes | 44.370 Bytes | 23,1 % | 36,27 / 36,98 dB |
| Handy-Fotos sichern, 800 | 87.810 Bytes | 74.397 Bytes | 15,3 % | 34,35 / 35,13 dB |
| Fernwartung, 960 | 30.458 Bytes | 21.872 Bytes | 28,2 % | 40,49 / 41,14 dB |

Die zusätzliche 720er-Datei des Internetmotivs benötigt 37.612 Bytes. Sie passt beispielsweise zu einer benötigten physischen Bildbreite von ungefähr 651 Pixeln. Die 800er- und größeren Dateien bleiben für höhere Pixeldichten verfügbar; die Optimierung basiert nicht auf einer pauschal verminderten Auflösung. AVIF80/85 wurde ebenfalls ausprobiert, ergab für diese Motive jedoch größere Dateien als die bisherigen WebPs.

Das vollständige Inventar umfasst 74 Motive mit 518 AVIF-Dateien und insgesamt 19.675.342 Bytes. Bei den 386 direkt mit bestehenden WebPs vergleichbaren Größen sinkt die Summe von 21.819.250 auf 15.653.717 Bytes, also um 28,3 %. Nur eine Variante ist geringfügig größer: `guide-alte-geraete-verkaufen-1280.avif` benötigt 86.147 statt 84.682 Bytes (+1,7 %). Dafür wurde die einheitliche geprüfte Bildqualität beibehalten.

## Einbindung ohne Layoutänderung

`GuideImage` und `ServicePhoto` verwenden ein `picture` mit einem AVIF-`source` und dem unveränderten WebP-`img` als Rückfallformat. Beide verwenden dieselben vorhandenen `sizes`-Angaben; die AVIF-Auswahl enthält zusätzlich 720 und durchgehend 960 Pixel. Breite, Höhe, Alt-Texte, eager/lazy-Verhalten und hohe Priorität der Hauptbilder bleiben erhalten. Es gibt keine Browsererkennung und keinen Formatwechsel nach der Hydrierung.

Die ausschließlich für diese Komponenten vorgesehenen Picture-Wrapper verwenden `display: contents`. Direkte CSS-Kindselektoren wurden an die neue DOM-Struktur angepasst, damit Positionierung, Seitenverhältnisse und Cover-Ausschnitte unverändert greifen. Die beiden Foto-Hoverregeln in `motion.css` erreichen auch das verschachtelte Leistungsfoto; Dauer, Kurve und Skalierung sind unverändert.

React erzeugt für ein `img` innerhalb von `picture` keinen automatischen Bild-Preload. Daher ruft jede eager-Komponente `preload` aus `react-dom` mit `type: 'image/avif'`, `fetchPriority: 'high'` und exakt den `srcSet`-/`sizes`-Werten ihres AVIF-Source auf. Es wird nur dieses Format vorgeladen. Browser ohne AVIF-Unterstützung verwenden den WebP-Fallback. Das gesonderte Vite-Hoisting verschiebt den serverseitig erzeugten Preload früh in den Kopf des Dokuments; es erfindet keine eigene Bildauswahl.

OG-Bilder, strukturierte Daten, Inhalte, Menüs und die unmittelbare Einbindung des Chats werden durch diese Formatänderung nicht angepasst.

## Prüfung

- Gezielter TypeScript-Check für beide Seitenkomponenten bestanden.
- In-Memory-SSR für Ratgeberübersicht und Artikel: exakt ein AVIF-Preload, identisches Source-/Preload-`srcSet` und `sizes`, WebP-Fallback vorhanden; lazy-Karten erzeugen keinen zusätzlichen Preload.
- Sechs zusätzliche Service-SSR-Fälle: drei Layouts jeweils mit eager/lazy, korrekte Vorladung nur bei eager und unveränderte WebP-Auswahl.
- Alle alten direkten Bildselektoren in den betroffenen Styles überprüft; die zusätzliche Picture-Ebene ist berücksichtigt.
- Exportpipeline und maschinenlesbarer Provenienznachweis dokumentieren Dateivollständigkeit, Dimensionen und unveränderte Bestandsdateien.
- `python scripts/generate-avif-variants.py --check` hat alle 74 Motive und 518 dekodierten AVIF-Dateien erfolgreich geprüft. SHA-256-Vergleiche bestätigen 398 unveränderte WebPs und 74 unveränderte Original-PNGs.

Zum erneuten Export dient `python scripts/generate-avif-variants.py`; mit `--source-root` kann das Originalarchiv an einem anderen Ort angegeben werden. Die reine `--check`-Prüfung benötigt die Original-PNGs nicht, aber Pillow mit AVIF-Unterstützung. Der Generator überschreibt keine unbestätigten vorhandenen Ausgaben und prüft die Vollständigkeit gegen den aktuellen Guide-Katalog sowie die Service-Fotozuordnung.

Diese lokalen Prüfungen belegen die technische Einbindung und die geprüfte Bildqualität. Sie versprechen keinen bestimmten Lighthouse-Wert; die gemeinsame Browser-, Release- und Liveprüfung erfolgt nach Integration.
