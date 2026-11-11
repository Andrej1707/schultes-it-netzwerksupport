# Ratgeber-Fotomotive – 11.11.2026

Vier eigenständige illustrative Fotomotive wurden mit dem eingebauten `image_gen`-Werkzeug erzeugt. Es wurde keine separate API-CLI verwendet.

Die Bilder zeigen fiktive Technik-Szenen. Sie stellen weder Kundeninstallationen noch reale Mitarbeitende oder Geschäftsräume von Schultes IT dar. Es wurden keine Referenzfotos von Personen benutzt. Bildschirme enthalten keine persönlichen Informationen, Markenoberflächen oder lesbaren Anleitungen.

## Auslieferung

Projektgebundene Varianten liegen unter `public/images/`. Die Originale bleiben unverändert im lokalen Codex-Generierungsordner; die großen PNG-Dateien werden nicht ins Repository aufgenommen. Die Quelle ist je Motiv 1536 × 1024 Pixel. Der reine Web-Export erhält das Motiv, konvertiert nach WebP (Qualität 82, Methode 6) und skaliert mit Lanczos. Die 1920er-Ausgabe ist ein hochskalierter Export; sie enthält keine zusätzliche native Bildinformation.

| Motiv | 640 × 427 | 1280 × 853 | 1920 × 1280 |
| --- | ---: | ---: | ---: |
| `security-desk` | 21.586 Bytes | 52.792 Bytes | 86.334 Bytes |
| `backup-desk` | 29.702 Bytes | 91.528 Bytes | 158.826 Bytes |
| `privacy-phone` | 24.116 Bytes | 61.752 Bytes | 99.856 Bytes |
| `update-laptop` | 21.350 Bytes | 52.868 Bytes | 86.240 Bytes |

Dateischema: `<motiv>-<breite>.webp`. Alle zwölf Exporte wurden wieder geöffnet und ihre tatsächlichen Dimensionen geprüft. Die vier Originalmotive wurden visuell auf Komposition, Hände/Geräte, fehlende Logos, fehlenden lesbaren Text und ruhige Gestaltung geprüft.

## Prompts und Originalreferenzen

### security-desk

Originalreferenz: `exec-99e9a7e3-1465-4c11-b451-1ee5f722a896.png`

```text
Use case: photorealistic-natural. Asset type: premium German IT advice article photograph. Create one natural editorial photograph, landscape 3:2 composition, 1536x1024 preferred. Calm minimalist premium technology aesthetic: warm silver, white, soft blue, natural window daylight, realistic materials and restrained contrast. Plenty of breathing room, thoughtful composition, impeccable photographic realism. No text, no readable screen UI, no logos, no watermark, no icon overlays, no lock-symbol graphics. This is an illustrative fictional scene, not a representation of real clients, staff or premises. Scene: a modern bright home-office desk, slim unbranded silver laptop, a dark smartphone face up, and a small physical USB-C security key resting clearly in the foreground beside the laptop. The laptop screen has only a very softly defocused neutral blue desktop; no letters or numbers. Angle from seated desk height, security key crisp, laptop slightly softer. Reassuring everyday digital security, not a hacker aesthetic.
```

### backup-desk

Originalreferenz: `exec-5f469a14-4d97-4756-b662-96dc00f724e7.png`

```text
Use case: photorealistic-natural. Asset type: premium German IT advice article photograph. Create one natural editorial photograph, landscape 3:2 composition, 1536x1024 preferred. Calm minimalist premium technology aesthetic: warm silver, white, soft blue, natural window daylight, realistic materials and restrained contrast. Plenty of breathing room, thoughtful composition, impeccable photographic realism. No text, no readable screen UI, no logos, no watermark, no icon overlays, no lock-symbol graphics. This is an illustrative fictional scene, not a representation of real clients, staff or premises. Scene: clean pale oak desk with a compact external silver SSD connected by one neat short USB-C cable to an unbranded open silver laptop. SSD and cable form the clear subject. Subtle warm white wall and a single small plant far in the background. Three-quarter overhead view, natural morning light. No documents, no screen text. Calm visual explanation of a separate local backup.
```

### privacy-phone

Originalreferenz: `exec-4921534a-ee22-4847-9019-b44e6b3d69bb.png`

```text
Use case: photorealistic-natural. Asset type: premium German IT advice article photograph. Create one natural editorial photograph, landscape 3:2 composition, 1536x1024 preferred. Calm minimalist premium technology aesthetic: warm silver, white, soft blue, natural window daylight, realistic materials and restrained contrast. Plenty of breathing room, thoughtful composition, impeccable photographic realism. No text, no readable screen UI, no logos, no watermark, no icon overlays, no lock-symbol graphics. This is an illustrative fictional scene, not a representation of real clients, staff or premises. Scene: close-up of two realistic adult hands holding an unbranded smartphone above a neat bright desk, softly blurred silver laptop behind. Phone screen displays only an abstract neutral pale-blue interface of simple shapes, absolutely no readable letters, numbers or recognizable app logo. No face, no identifiable person, no private information. Natural lighting, refined composition with hands and device sharp and laptop soft, quiet privacy and careful smartphone use.
```

### update-laptop

Originalreferenz: `exec-61b37543-6785-44c6-bcbb-d460fba8695a.png`

```text
Use case: photorealistic-natural. Asset type: premium German IT advice article photograph. Create one natural editorial photograph, landscape 3:2 composition, 1536x1024 preferred. Calm minimalist premium technology aesthetic: warm silver, white, soft blue, natural window daylight, realistic materials and restrained contrast. Plenty of breathing room, thoughtful composition, impeccable photographic realism. No text, no readable screen UI, no logos, no watermark, no icon overlays, no lock-symbol graphics. This is an illustrative fictional scene, not a representation of real clients, staff or premises. Scene: one unbranded silver laptop open on a clean white desk, soft daylight from the left, tidy modern home office. On screen a subtle plain blue background with a simple small circular progress ring and no text or numbers. A slim mouse beside it and a folded pale cloth far to the side, minimal accessories. Front three-quarter view. Reliable everyday computer maintenance, calm and optimistic, visually distinct from the security-key and backup-disk photos.
```


