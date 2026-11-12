# 70 Ratgeber und Unterseiten: Release-Prüfung am 11.11.2026

## Umfang und bestätigter lokaler Stand

Die Bibliothek wurde von 40 auf 70 eigenständige Artikel erweitert: 14 Themen in jeder der fünf Kategorien Sicherheit, Windows, WLAN, Daten und Alltag. Die frühere [Abnahme der ersten 40 Artikel](qa-home-guides-2026-11-11.md) bleibt ein historischer Bericht und wird nicht auf die neue Artikelzahl umgeschrieben.

- Die fünf Erweiterungsmodule sind in `articles.ts` und den generierten Katalog integriert. Alle 30 neuen Texte wurden unabhängig auf inhaltliche Risiken, Dopplungen, Quellen und irreführende Aussagen geprüft; es blieben keine substantiellen Veröffentlichungsblocker.
- Das Bildinventar bestätigt 70 unterschiedliche Bildnamen und 70 unterschiedliche SHA-256-Werte. Alle 70 Artikelbilder in der 1280er-Größe haben tatsächlich 1280 × 853 Pixel. Herkunft und Prompts der neuen Motive stehen in den fünf `docs/design/guide-expansion-*.md`-Dateien.
- Startseitenzahl, Ratgeber-SEO-Titel und Beschreibung folgen dem Katalog. Artikelseiten verwenden das eigene Motiv und seinen Alt-Text für Open Graph und Twitter; das `Article`-Schema zeigt auf dasselbe Bild.
- Der Build enthält 100 kanonische Seiten und 48 historische Alias-Dokumente. Beide Sitemaps enthalten 98 indexierbare URLs; Impressum und Datenschutz bleiben bewusst ausgeschlossen. Die Fehlerseite bleibt ebenfalls `noindex`.
- Alle kanonischen Seiten und die Fehlerseite enthalten das gemeinsame CSS und die passende Seitenfamilie direkt im HTML-Head. Die Release-Prüfung kontrolliert fehlende, doppelte oder falsche Styles, verbleibende externe Stylesheet-Links und die exakte Übereinstimmung mit den gebauten CSS-Dateien. Aliasse behalten ihre vorgesehenen externen Stylesheets.
- Die vorhandenen Fotos, Hover-Menüs und das Einbinden des Chat-Assistenten beim Seitenaufruf bleiben erhalten. Zusätzliche Bildgrößen unterstützen die passende Auslieferung für Karten und die verschiedenen Hero-Layouts.

## Lokale Abnahme

Build, Redirectgenerierung und anschließend `npm run check` sind bestanden: 187 Tests, Katalog- und Bildprüfungen, Frontend- und Worker-Typechecks, RustDesk-Integrität, Produktions-Build und SEO-/Redirect-Prüfung.

Die lokale Browserprüfung bestätigt 70 Ratgeberkarten mit 70 verschiedenen Bildern, funktionierende Suche, die mobile Navigation bei 320 Pixeln Breite, Öffnen des Menüs per Hover, passende responsive Bildauswahl und den unmittelbaren Chat-Mount. Dies sind Browserprüfungen in simulierten Ansichten, keine Messungen auf physischen Geräten.

## Vorbereitete Cloudflare-Erweiterung

Der versionierte Generator `scripts/generate-cloudflare-redirects.mjs` erzeugt aus dem gebauten Manifest 886 Regeln. Gegenüber dem veröffentlichten Referenzstand `c6189faf8621fb7cd79e46aa01e303635b798013` bleiben alle 706 vorhandenen Regelzeilen unverändert; 180 Regeln für die 30 neuen Artikel kommen hinzu.

Die [Ergänzungs-CSV](seo/guide-expansion-redirects.csv) enthält ausschließlich diese 180 Regeln. Sie entsprechen 330 neuen HTTP-/HTTPS-Fällen. Die kombinierte CSV enthält 886 Regeln; die separate Ratgeber-CSV deckt alle 70 Artikel mit 420 Regeln ab. Die Generierung und der anschließende Abgleich sind bestanden. Eine Aktivierung in Cloudflare ist damit noch nicht bestätigt.

## Noch getrennt zu bestätigender Veröffentlichungsstand

Deployment, der öffentliche HTTP-/Asset-Audit von 96 Ratgeber- und Leistungsseiten, die Aktivierung und Prüfung der neuen Weiterleitungen sowie die erneute Sitemap-Einreichung werden nach Veröffentlichung ergänzt. Die 96 Seiten bestehen aus Ratgeberübersicht und 70 Artikeln sowie Leistungsübersicht und 24 Leistungsseiten einschließlich Fernwartung.

Neue PageSpeed-Ergebnisse werden pro geprüfter URL dokumentiert; die früheren Startseitenwerte werden nicht auf alle Unterseiten übertragen. Erfolgreiche Sitemap-Einreichung oder erkannte URLs bestätigen keine vollständige Google-Indexierung und keine Rankings.
