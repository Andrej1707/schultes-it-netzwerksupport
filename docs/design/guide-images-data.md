# Eigene Daten-Ratgeberbilder – 11.11.2026

Sieben eigenständige illustrative Fotomotive wurden mit dem eingebauten `image_gen`-Werkzeug erzeugt, mit genau einem separaten Aufruf je Motiv. Es wurde keine separate API-CLI verwendet. Jeder Artikel erhält ein exklusives Motiv. `backup-3-2-1` behält als achtes exklusives Daten-Motiv `backup-desk`; dessen Prompt und Herkunft stehen in [guide-image-prompts.md](guide-image-prompts.md).

Die Bilder zeigen fiktive Technik-Szenen. Sie stellen weder Kundeninstallationen noch reale Mitarbeitende oder Geschäftsräume von Schultes IT dar. Es wurden keine Referenzfotos von Personen benutzt. Es gibt keine lesbaren Anleitungen, persönlichen Informationen oder Markenoberflächen. Der physische Sicherheitsschlüssel im Verschlüsselungsmotiv ist ein Symbol für geschützten Zugriff, keine Darstellung eines konkreten BitLocker-Verfahrens.

## Auslieferung und Prüfung

Projektvarianten liegen unter `public/images/guide-<slug>-<breite>.webp`. Die unveränderten PNG-Originale bleiben im lokalen Codex-Generierungsordner und werden nicht ins Repository aufgenommen. Die Quellen haben jeweils 1536 × 1024 Pixel. Für den reinen Web-Export wurden RGB-Konvertierung, Pillow/Lanczos und WebP-Methode 6 verwendet; die Qualitätsstufe steht je Motiv unten. Die 1920er-Ausgabe ist hochskaliert und enthält keine zusätzliche native Bildinformation.

Alle sieben Motive wurden einzeln visuell geprüft: unterschiedliche Kompositionen, plausible Geräte und die einzelne ruhende Hand, keine erkennbaren Logos, kein lesbarer Text und keine erfundenen Softwaredialoge. Alle 21 Exporte wurden erneut geöffnet und auf ihre tatsächlichen Abmessungen geprüft. Die sieben 1280er-Dateien haben unterschiedliche SHA-256-Prüfsummen.

| Artikel/Slug | 640 × 427 | 1280 × 853 | 1920 × 1280 | WebP-Qualität |
| --- | ---: | ---: | ---: | ---: |
| `externe-festplatte-sichern` | 32.258 Bytes | 105.482 Bytes | 173.290 Bytes | 82 |
| `cloud-sync-oder-backup` | 36.974 Bytes | 149.886 Bytes | 276.542 Bytes | 82 |
| `daten-auf-neuen-pc` | 38.200 Bytes | 104.278 Bytes | 175.156 Bytes | 84 |
| `dateien-geloescht` | 24.466 Bytes | 87.526 Bytes | 147.836 Bytes | 84 |
| `laufwerk-verschluesseln` | 15.336 Bytes | 41.366 Bytes | 71.362 Bytes | 78 |
| `alte-geraete-verkaufen` | 26.154 Bytes | 84.682 Bytes | 155.100 Bytes | 78 |
| `usb-sticks-sicher-nutzen` | 16.850 Bytes | 58.018 Bytes | 100.722 Bytes | 78 |

## Vollständige Prompts und Originalquellen

### externe-festplatte-sichern

Bildschlüssel: `guide-externe-festplatte-sichern`

Alttext: Externe SSD mit USB-Kabel neben einem Laptop auf einem hellen Holztisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-cf8fcbd7-2416-4ad6-9f52-e32e3e22d7ea.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German technology guide about safely backing up files to an external hard drive. Landscape 1536x1024, natural photographic realism. Scene: close three-quarter view across a pale oak desk, a compact dark graphite external SSD connected by a tidy short USB cable to the edge of an open silver laptop. The SSD is the sharply focused main subject in foreground; the laptop keyboard is visible but its screen falls outside the top of frame. Soft daylight from the left, calm warm-white and muted gray palette, honest material texture, restrained high-end editorial composition with generous negative space. No people, logos, branding, readable text, numbers, screen UI, watermarks, security shields, floating symbols, or glowing effects. This is an illustrative scene, not an actual customer installation.
```

### cloud-sync-oder-backup

Bildschlüssel: `guide-cloud-sync-oder-backup`

Alttext: Geschlossener Laptop und Smartphone neben einem separat aufbewahrten externen Laufwerk

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-8e106295-d4ec-40e1-93ff-a2ba6cc3e30e.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German technology guide comparing cloud synchronization with an independent backup. Landscape 1536x1024, natural photographic realism, distinctive overhead composition. On a warm light stone table: a closed thin silver laptop on the left, a smartphone face down in the upper right, and a small midnight-blue portable external drive stored separately in an open soft fabric protective pouch in the lower right, with its cable neatly coiled inside the pouch and disconnected from all devices. A small ceramic cup at the far upper edge, subtle linen texture, no unnecessary objects. Gentle afternoon window light and believable soft shadows, refined quiet contemporary home workspace, restrained warm neutral palette. The different devices suggest everyday synchronization, while the separate unplugged drive represents an independent backup, without using icons or diagrams. No people, logos, branding, readable text, numbers, screen UI, watermarks, floating clouds, arrows, glowing effects, security shields, or illustrative overlays. This is an illustrative scene, not an actual customer installation.
```

### daten-auf-neuen-pc

Bildschlüssel: `guide-daten-auf-neuen-pc`

Alttext: Älteres und neueres Notebook mit einer externen SSD auf einem hellen Holztisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cb8a-25b6-7223-bdba-a0b094803e8a/exec-968f0be4-b0de-4512-88ff-2d469ad676c0.png`

```text
Use case: photorealistic-natural.
Asset type: editorial photograph for a German IT help website guide about moving personal files to a new PC.
Create one standalone photorealistic landscape photograph, 1536 x 1024 pixels, 3:2 aspect ratio.
Scene and subject: two clearly different, unbranded open laptops on a tidy light oak home-office table, an older slightly thicker dark laptop and a newer slim silver laptop. A small portable external SSD with one short, neatly resting transfer cable lies between them. Three-quarter side view, believable device proportions, the screens turned sufficiently away from the camera that they show only muted natural window reflections, no software or interface. The laptops and the transfer SSD are the clear main subjects.
Style: high-quality natural editorial photography, quiet everyday realism, authentic materials, restrained detail, no staged corporate stock-photo gestures.
Composition and light: a composed medium-wide horizontal shot from seated desk height, soft daylight through an out-of-frame window, gentle shadows, subtle depth of field, inviting clean domestic background, generous breathing room around all devices.
Constraints: no people, no logos or brand marks, no readable text anywhere, no fake UI, no icons or graphical overlays, no watermark. Do not show digital transfer arrows. The image must communicate a calm, well-organized computer move through the physical arrangement alone.
```

### dateien-geloescht

Bildschlüssel: `guide-dateien-geloescht`

Alttext: Ruhende Hand neben einem geschlossenen Notebook und einem abgezogenen USB-Stick

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cb8a-25b6-7223-bdba-a0b094803e8a/exec-1aaecad2-7c65-459e-912b-265a03cd80b5.png`

```text
Use case: photorealistic-natural.
Asset type: editorial photograph for a German IT help website guide about accidentally deleted files and calmly pausing device use.
Create one standalone photorealistic landscape photograph, 1536 x 1024 pixels, 3:2 aspect ratio.
Scene and subject: a closed, unbranded graphite laptop on a light, softly textured desk. A small unplugged USB flash drive lies clearly separate from the laptop, with its connector visible. One natural adult hand rests still on the tabletop near the closed laptop, fingers relaxed and lightly curled in a quiet, thoughtful pause. Only the hand and a short section of a plain neutral sleeve appear; no face or full person.
Composition: an intimate high three-quarter viewpoint over the desk, different from a typical laptop product shot. Focus on the relaxed hand, unplugged drive and edge of the closed laptop. Keep the physical relationship of all three objects clear and believable, with ample uncluttered surface around them.
Style and light: high-quality natural editorial photography, soft indirect window daylight, gentle warm-neutral tones, realistic skin texture and anatomical hand, subtle material texture, calm and considered mood rather than panic.
Constraints: the laptop is fully closed; the USB drive is disconnected. No other devices or props. No logos or brand marks, no readable text, no screens, no software UI, no graphics or symbolic overlays, no watermark. The image communicates stopping and getting help after lost files through a quiet real-world moment.
```

### laufwerk-verschluesseln

Bildschlüssel: `guide-laufwerk-verschluesseln`

Alttext: Geschlossenes Notebook mit einem physischen Sicherheitsschlüssel auf einem hellen Schreibtisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-187ee3ee-b1e4-4eaf-a0f6-c2bc99162f61.png`

```text
Use case: photorealistic-natural. Asset type: editorial hero photograph for a German IT guide about drive encryption. Generate one premium photorealistic illustrative photograph, landscape 1536x1024. Scene: a bright, calm home-office desk with a closed unbranded charcoal aluminium notebook. Subject: a small physical USB-C security key with a metallic contact and a subtle circular touch area resting on the closed notebook as a visual symbol of access protection, not a claim of how drive encryption works. Composition: low three-quarter camera angle, notebook placed diagonally, key in sharp focus in the foreground, soft blurred pale neutral wall background, enough breathing room around objects. Realistic proportions, tactile brushed metal and soft wood grain, understated editorial quality. Soft daylight from a large window, restrained ivory and graphite palette. No people, no logos, no readable text, no symbols floating in the air, no padlock overlay, no fake screen interface, no watermark.
```

### alte-geraete-verkaufen

Bildschlüssel: `guide-alte-geraete-verkaufen`

Alttext: Geschlossenes älteres Notebook mit Ladekabel in einem offenen Versandkarton

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-bef32163-6b35-41d7-8383-46d721730313.png`

```text
Use case: photorealistic-natural. Asset type: editorial hero photograph for a German IT guide about preparing old devices for sale. Generate one premium photorealistic illustrative photograph, landscape 1536x1024. Scene: a tidy bright table beside a window. Subject: one clean closed older unbranded silver notebook nestled in protective plain brown paper inside an open cardboard shipping box; its neatly coiled power cable and power brick rest in a separate paper-lined space in the same box. Composition: elevated three-quarter view showing the full open box and carefully arranged device, subtly used but well cared for materials, generous clean tabletop margin. Realistic laptop, cable, box scale and geometry. Soft natural daylight, warm cardboard and pale linen palette, calm professional editorial photography. This is a visual illustration of selling hardware, not evidence of erased data. No people, no logos, no readable text or shipping label, no screen interface, no watermark.
```

### usb-sticks-sicher-nutzen

Bildschlüssel: `guide-usb-sticks-sicher-nutzen`

Alttext: USB-Stick neben dem passenden Anschluss an einem Notebook

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf7-a57b-7e72-b472-6f0df10feff2/exec-99292c1c-4fc5-40ce-b436-c7b2d0f770db.png`

```text
Use case: photorealistic-natural. Asset type: editorial hero photograph for a German IT guide about safe USB drive use. Generate one premium photorealistic illustrative photograph, landscape 1536x1024. Scene: a light matte desk with the side edge of an unbranded graphite notebook visible. Subject: one compact plain silver USB-A flash drive lying on the table beside the matching USB-A port of the notebook; connector and port should both be clearly recognizable and physically plausible, the drive is NOT inserted. Composition: close macro-like oblique view at desk level, flash drive diagonal across the foreground with the notebook edge behind it, crisp brushed aluminium texture and believable USB contact geometry, shallow but sufficient depth of field. Quiet background and natural soft window light, cool silver with warm white surfaces. Practical premium editorial photograph with no dramatic cyber styling. No hands or people, no logos, no readable text, no glowing cables, no floating shields, no fake screen interface, no watermark.
```

