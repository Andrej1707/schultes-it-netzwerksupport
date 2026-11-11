# Erweiterung Sicherheitsratgeber: Inhalte und Bildnachweise

Stand: 2026-11-11. Sechs eigenständige Artikel in `src/content/guides/securityExpansion.ts`; bestehende Artikel und Katalogdateien wurden bei diesem Teilauftrag nicht geändert.

## Redaktion und Prüfung

Alle Texte richten sich an Privatpersonen und kleine Betriebe. Sie enthalten eigene praktische Entscheidungsabläufe statt kopierter Herstelleranleitungen, jeweils drei Takeaways, vier Abschnitte, eine typische Falle, einen Hilfebedarf, drei verwandte Artikel und drei öffentliche Primärquellen. Keine Erfolgsgarantien, erfundenen Kundenfälle oder behaupteten persönlichen Erfahrungen. Alle sechs Slugs wurden gegen den vorhandenen Katalog abgegrenzt.

Die nachfolgenden Quellen wurden am 2026-11-11 über Websuche und/oder Direktabruf inhaltlich geprüft. Verlinkt sind offizielle Anbieter-, Behörden- und Verbraucherberatungsseiten. Die kurzen Notizen dokumentieren den geprüften Bezug, keine Verfügbarkeitsgarantie für spätere Abrufe. Ein für die Recherche gefundenes BSI-PDF war direkt nicht abrufbar und wurde nicht als Artikelquelle verwendet.

## Bildproduktion

Verwendet: built-in `image_gen`, sechs separate Aufrufe, keine CLI/API-Fallbacks. Alle Originale: 1536 × 1024 PNG. Alle sechs Motive wurden nach der Generierung visuell geprüft: Thema, physische Anordnung, keine lesbaren Werbetexte/Logos, keine Fake-Oberflächen. Die QR-Karte trägt bewusst nur ein abstraktes QR-ähnliches Muster. Fotos sind illustrative KI-Motive, keine echten Kunden- oder Vorfallaufnahmen.

Exports aus dem jeweiligen Original mit Pillow LANCZOS, WebP quality=82, method=6: 480 × 320, 640 × 427, 800 × 533, 1280 × 853, 1920 × 1280. Die 1920-Version ist ausdrücklich eine Hochskalierung des 1536-Pixel-Originals, keine zusätzliche Originalauflösung. Vorhandene Bilddateien wurden nicht überschrieben. Jede exportierte Datei wurde mit Pillow erneut geöffnet und geprüft.

## fake-shops-erkennen

Titel: Fake-Shops erkennen, bevor du bestellst

Umfang: 523 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [Verbraucherzentrale: Merkmale betrügerischer Online-Shops](https://www.verbraucherzentrale.de/wissen/digitale-welt/onlinehandel/abzocke-online-wie-erkenne-ich-fakeshops-im-internet-13166) — Händlerdaten, tatsächliche Zahlungsart, Preisauffälligkeiten und überprüfbare Gütesiegel; Warnzeichen sind keine Einzelbeweise. Direktabruf und relevante Abschnitte geprüft.
- [Verbraucherzentrale: Fakeshop-Finder und Bedeutung der Ergebnisse](https://www.verbraucherzentrale.de/fakeshopfinder-71560) — URL-Eingabe und Bedeutung der Ampelergebnisse; grün bleibt kein uneingeschränktes Kaufsiegel. Direktabruf geprüft.
- [Google: Sicherheit einer Websiteverbindung prüfen](https://support.google.com/chrome/answer/95617?hl=de) — HTTPS beschreibt eine geschützte Verbindung; auch dort Anbieteradresse und Freigaben prüfen. Direktabruf geprüft.

### Bild

Bildbasis: `guide-fake-shops-erkennen`

Alt-Text: Illustrative Aufnahme kleiner Versandkartons neben einem Laptop und einer Einkaufstasche auf einem hellen Tisch.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-99c7b1a3-bf67-4274-ac1c-f02aee176047.png`

Exportdateien:

- `public/images/guide-fake-shops-erkennen-480.webp`
- `public/images/guide-fake-shops-erkennen-640.webp`
- `public/images/guide-fake-shops-erkennen-800.webp`
- `public/images/guide-fake-shops-erkennen-1280.webp`
- `public/images/guide-fake-shops-erkennen-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: evaluating unfamiliar online shops. A tidy home table with two small plain sealed cardboard parcels, a plain cream paper shopping bag and an open unbranded silver laptop viewed mostly from behind. Focus on the packages; screen content not visible. Wide three-quarter tabletop view, warm neutral palette, generous clean negative space, authentic paper folds, no shipping labels and no bank cards. No people.
```

## qr-codes-sicher-scannen

Titel: QR-Codes sicher scannen: Das Ziel vor der Freigabe prüfen

Umfang: 543 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [Verbraucherzentrale: Quishing mit QR-Codes erkennen](https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/quishing-falsche-qrcodes-in-mails-briefen-oepnv-und-strassenverkehr-98612) — Überklebte Codes an Lade- und Parkautomaten; unabhängige Prüfung bei Bankbriefen. Direktabruf geprüft.
- [Apple: QR-Codes mit der iPhone-Kamera scannen](https://support.apple.com/de-de/guide/iphone/iphe8bda8762/ios) — iPhone-Kamera erkennt den Code und bietet den Link zum Antippen an. Offiziellen Suchtreffer mit vollständiger Anleitung geprüft.
- [Europäisches Verbraucherzentrum: Betrug über QR-Codes](https://www.evz.de/themen/einkaufen-digitales/betrugsmaschen/quishing/) — Einordnung von Quishing und eigenständige Prüfung von Zahlungszielen. Direktabruf geprüft.

### Bild

Bildbasis: `guide-qr-codes-sicher-scannen`

Alt-Text: Illustrative Aufnahme eines Smartphones über einer Karte mit einem abstrakten QR-ähnlichen Muster.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-ee6852cf-528e-4ca2-9bc7-a80e27406858.png`

Exportdateien:

- `public/images/guide-qr-codes-sicher-scannen-480.webp`
- `public/images/guide-qr-codes-sicher-scannen-640.webp`
- `public/images/guide-qr-codes-sicher-scannen-800.webp`
- `public/images/guide-qr-codes-sicher-scannen-1280.webp`
- `public/images/guide-qr-codes-sicher-scannen-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: carefully scanning QR codes. Close-up of one adult hand holding an unbranded smartphone above a small white printed card on a pale stone tabletop. The card contains an abstract black-and-white QR-like geometric pattern that is intentionally nonfunctional, with no letters or words. The phone is seen from the back, camera lenses facing the card; no visible screen. High oblique camera angle, the card and phone form a diagonal, soft green and cream background, natural anatomically correct hand.
```

## app-berechtigungen-pruefen

Titel: App-Berechtigungen prüfen: Kamera, Standort und Kontakte im Griff

Umfang: 560 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [Google: App-Berechtigungen auf Android ändern](https://support.google.com/android/answer/9431959?hl=de) — Menüweg über Apps/Berechtigungen und zeitlich begrenzte Zugriffsoptionen; Versionsunterschiede berücksichtigt. Direktabruf geprüft.
- [Apple: Datenschutzfunktionen von Apps prüfen](https://support.apple.com/de-de/guide/personal-safety/ipsd4dac4a2c/web) — Datenschutz & Sicherheit sowie App-Datenschutzbericht; Zugriffshistorie und Grenzen der Interpretation. Offiziellen Suchtreffer mit Artikelinhalt geprüft.
- [Google: Berechtigungen über das Privatsphäredashboard verwalten](https://support.google.com/android/answer/13530434?hl=de-DE) — Privatsphäredashboard und versionsabhängige Historie der App-Zugriffe. Direktabruf geprüft.

### Bild

Bildbasis: `guide-app-berechtigungen-pruefen`

Alt-Text: Illustrative Aufnahme eines Smartphones neben einer kleinen Kamera und einem Ansteckmikrofon.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-f2591bf3-48db-4d96-ac94-51297c4d1d7e.png`

Exportdateien:

- `public/images/guide-app-berechtigungen-pruefen-480.webp`
- `public/images/guide-app-berechtigungen-pruefen-640.webp`
- `public/images/guide-app-berechtigungen-pruefen-800.webp`
- `public/images/guide-app-berechtigungen-pruefen-1280.webp`
- `public/images/guide-app-berechtigungen-pruefen-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: reviewing phone camera and microphone permissions. Carefully arranged flat lay on a pale grey desk: one unbranded smartphone with its screen dark, a compact unbranded small camera and a wired clip-on lavalier microphone with neatly curved cable, three clearly separate objects. Top-down composition with wide spacing, matte graphite and soft grey materials, quiet soft shadows, no hands and no additional electronics. Avoid surveillance aesthetics.
```

## oeffentliches-wlan-sicher-nutzen

Titel: Öffentliches WLAN sicher nutzen: Ein kurzer Check vor dem Verbinden

Umfang: 536 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [CSBW: Öffentliche WLAN-Netzwerke und VPN](https://www.cybersicherheit-bw.de/sites/default/files/2024-02/Factsheet_%C3%96ffentliche_WLAN-Netzwerke_u_VPN.pdf) — VPN, HTTPS, begrenzte Freigaben und Entfernen gespeicherter öffentlicher Netze. Zweitseitiges behördliches PDF erfolgreich geöffnet und Text geprüft.
- [Microsoft: Netzwerkprofile in Windows verwalten](https://support.microsoft.com/de-de/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows) — Öffentliches und privates Netzwerkprofil mit Auswirkungen auf Auffindbarkeit/Freigaben. Offiziellen Suchtreffer mit vollständiger relevanter Anleitung geprüft.
- [Microsoft: Mehr Sicherheit über Drahtlosverbindungen](https://support.microsoft.com/de-de/windows/security/be-safer-over-wireless-connections) — Risiken offener Netze, zusätzliche Verschlüsselung und sinnvoller Umgang mit Funkverbindungen. Direktabruf geprüft.

### Bild

Bildbasis: `guide-oeffentliches-wlan-sicher-nutzen`

Alt-Text: Illustrative Aufnahme eines Laptops mit Kaffeetasse an einem hellen Caféfenster.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-d54b186e-820b-4a57-b806-c74d9a2afe30.png`

Exportdateien:

- `public/images/guide-oeffentliches-wlan-sicher-nutzen-480.webp`
- `public/images/guide-oeffentliches-wlan-sicher-nutzen-640.webp`
- `public/images/guide-oeffentliches-wlan-sicher-nutzen-800.webp`
- `public/images/guide-oeffentliches-wlan-sicher-nutzen-1280.webp`
- `public/images/guide-oeffentliches-wlan-sicher-nutzen-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: working carefully on public café Wi-Fi. A calm sunlit café window counter with one open unbranded laptop viewed from the back at a distance, a ceramic cappuccino cup and a small closed notebook. The café room and stools are softly blurred in the background with no visible people. Eye-level wide environmental composition, pastel warm wood and off-white colors, a practical place to work, laptop screen content hidden. No wireless icons or signs.
```

## smartphone-verloren

Titel: Smartphone verloren: Gerät, SIM und Konten absichern

Umfang: 574 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [Apple: Ein gestohlenes iPhone oder iPad absichern](https://support.apple.com/de-de/120837) — Verlustmodus, kein eigenständiges Zurückholen, Aktivierungssperre; bei Diebstahl keine Kontaktinformationen ergänzen. Direktabruf geprüft und Text entsprechend präzisiert.
- [Google: Verlorenes Android-Gerät orten, sperren oder löschen](https://support.google.com/accounts/answer/6160491?hl=de) — Voraussetzungen für Sperren/Löschen, letzte bekannte Position, Gastmodus und Wegfall der Suche nach Zurücksetzen. Direktabruf geprüft.
- [Verbraucherzentrale: Handyverlust und SIM-Sperre](https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/handy-verloren-oder-gestohlen-sperren-lassen-anzeige-erstatten-13870) — SIM beim Mobilfunkanbieter sperren, Gerätedaten/IMEI bereithalten und Diebstahl melden. Offiziellen Suchtreffer mit Artikelinhalt geprüft.

### Bild

Bildbasis: `guide-smartphone-verloren`

Alt-Text: Illustrative Aufnahme einer leeren Handyablage neben einer offenen Reisetasche und einem Ladekabel.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-82f91fbb-5bb7-437d-b18d-65d034aaaa7b.png`

Exportdateien:

- `public/images/guide-smartphone-verloren-480.webp`
- `public/images/guide-smartphone-verloren-640.webp`
- `public/images/guide-smartphone-verloren-800.webp`
- `public/images/guide-smartphone-verloren-1280.webp`
- `public/images/guide-smartphone-verloren-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: realizing a smartphone is missing while travelling. A small clean pale entryway console table with an empty felt phone-sized tray and a loose charging cable whose connector rests beside the empty tray. At the side is an open dark green canvas travel bag with its small front pocket visibly empty. There is NO smartphone anywhere in the scene. Intimate medium close-up, low three-quarter angle, gentle morning light, calm muted sage and cream palette, no people, no text, no travel documents.
```

## kindergeraete-sicher-einrichten

Titel: Kindergeräte einrichten: Schutz, Freiraum und klare Absprachen

Umfang: 565 Wörter im Ratgebertext einschließlich Zwischenüberschriften und Hinweisboxen.

### Quellenprüfung

- [Google: Ein eigenes Konto für ein Kind erstellen](https://support.google.com/families/answer/7103338?hl=de) — Eigenes Kinderkonto, passendes Geburtsdatum und Elternaufsicht; schulische Konten haben besondere Grenzen. Offiziellen Suchtreffer mit vollständigem Artikelinhalt geprüft.
- [Google: Apps von Kindern mit Family Link verwalten](https://support.google.com/families/answer/7103028?hl=de) — Genehmigungen, vorhandene Apps und Ausnahmen bei App-Limits; Alltagstest erforderlich. Direktabruf geprüft.
- [Apple: Kindersicherung für iPhone und iPad einrichten](https://support.apple.com/de-de/105121) — Familienfreigabe, eigener Kinderaccount, getrennte Verwaltung von Apps, Kommunikation und Nutzungszeiten. Offiziellen Suchtreffer mit vollständigem Artikelinhalt geprüft. Ergänzender Direktabruf lieferte zeitweise HTTP 429, daher keine Behauptung durchgehend störungsfreier Abrufe.

### Bild

Bildbasis: `guide-kindergeraete-sicher-einrichten`

Alt-Text: Illustrative Aufnahme eines Tablets mit buntem Kopfhörer und Holzspielzeug auf einem niedrigen Tisch.

Original: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-18df53b4-bbc7-4ed3-9835-e7e3d3e62549.png`

Exportdateien:

- `public/images/guide-kindergeraete-sicher-einrichten-480.webp`
- `public/images/guide-kindergeraete-sicher-einrichten-640.webp`
- `public/images/guide-kindergeraete-sicher-einrichten-800.webp`
- `public/images/guide-kindergeraete-sicher-einrichten-1280.webp`
- `public/images/guide-kindergeraete-sicher-einrichten-1920.webp`

Vollständiger verwendeter Prompt:

```text
Use case: photorealistic-natural. Asset type: standalone editorial photograph for a German practical IT guide. Create one premium photorealistic illustrative photo, landscape 1536x1024. Bright calm natural daylight, believable physical geometry and material texture, restrained editorial styling. No logos, no readable text, no watermark, no floating cybersecurity icons, no fake screen UI. Topic: preparing a child’s tablet with sensible parental settings. Bright family reading corner with an unbranded tablet in a soft muted teal protective case lying on a low light wood table; its screen is dark. Beside it sit small over-ear headphones with coral and teal earcups and a few simple wooden building blocks. No child and no other people. Three-quarter close view, soft natural window light, welcoming orderly setting with restrained playful color, realistic dimensions, no app icons, no readable text.
```


