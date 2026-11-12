# Windows-Ratgeber: Erweiterung am 11. November 2026

## Inhalt und Prüfung

Datei: `src/content/guides/windowsExpansion.ts`, Export `windowsExpansionGuides: GuideArticle[]`. Sechs neue Themen der Kategorie `windows`, jeweils aktualisiert auf `2026-11-11`. Abgleich mit den 40 bisherigen Katalogeinträgen: keine doppelten Slugs oder Themen; die Akkupflege behandelt Laden und Alterung, der bestehende Wärme-Ratgeber weiterhin Kühlung und Belastung.

| Artikel | Wörter im Hauptinhalt | Alttext |
| --- | ---: | --- |
| zweiten-monitor-einrichten | 562 | Zwei nebeneinander aufgestellte Monitore mit Tastatur und Maus auf einem hellen Schreibtisch |
| bluetooth-verbindet-nicht | 550 | Kabellose hellgraue Kopfhörer neben einem geschlossenen Laptop auf einer hellen Schreibtischmatte |
| mikrofon-kamera-videokonferenz | 560 | Externe Webcam auf einem Monitor und ein kompaktes Tischmikrofon an einem hellen Arbeitsplatz |
| laptop-akku-pflegen | 555 | Geschlossener Laptop mit angeschlossenem Ladekabel und frei liegendem Netzteil auf einem Holztisch |
| usb-c-dockingstation | 555 | USB-C-Dockingstation am Laptop mit angeschlossenem Bildschirmkabel und Netzwerkkabel |
| barrierefreiheit-windows | 577 | Tastatur mit großen Tasten neben einer Hand auf einem Trackball an einem hellen Arbeitsplatz |

Gezählt: Intro, Takeaways, Abschnittsüberschriften und -texte einschließlich Schritte, Stolperfalle und Hilfekriterium; ohne Metadaten und Quellenliste. Geprüft sind vier Abschnitte, drei Takeaways, drei gültige Related-Slugs, drei HTTPS-Quellen und fünf vorhandene Bildvarianten je Artikel. Die Leistungsziele verwenden bestehende kanonische Pfade (`/leistungen/pc-laptop/` beziehungsweise `/leistungen/windows-einrichten/`). Isolierter TypeScript-Check der neuen Datei mit `tsc --ignoreConfig --noEmit --module esnext --target es2022 --moduleResolution bundler --skipLibCheck` erfolgreich. Keine Katalog-, Build- oder Commit-Aktionen durch diesen Teilauftrag.

## Quellenprüfung am 11. November 2026

Offizielle Primärquellen über Websuche und/oder direkt geöffnete Seiten inhaltlich geprüft. Es wurden keine Community-Antworten oder Drittanbieter-Treiberseiten als Beleg verwendet. Die Texte formulieren eigenständige praktische Abläufe; Versions- und Modellunterschiede sind ausdrücklich benannt. Keine garantierte Fehlerbehebung, Akkulebensdauer oder pauschale Dock-Kompatibilität wird versprochen.

### zweiten-monitor-einrichten

- [Microsoft: Mehrere Monitore](https://support.microsoft.com/en-us/windows/hardware/display-graphics/how-to-use-multiple-monitors-in-windows): Windows + P, Erweitern/Duplizieren, Identifizieren und Anordnung bestätigt.
- [Microsoft: Auflösung und Skalierung](https://support.microsoft.com/en-us/windows/hardware/display-graphics/change-your-screen-resolution-and-layout-in-windows): empfohlene Auflösung, separate Skalierung und mögliche Unschärfe niedrigerer Auflösungen bestätigt.
- [Microsoft: Externe Monitorverbindungen](https://support.microsoft.com/en-us/windows/hardware/display-graphics/troubleshoot-external-monitor-connections-in-windows): Kabel-/Gerätevergleich, Grenzen der Grafikausgabe und Unterschied eines Splitters zu unabhängigen Anzeigen bestätigt.

### bluetooth-verbindet-nicht

- [Microsoft: Bluetooth-Gerät koppeln](https://support.microsoft.com/en-gb/windows/hardware/bluetooth/pair-a-bluetooth-device-in-windows): vorhandener Adapter, Erkennbarkeit und geräteabhängiger Kopplungsmodus bestätigt.
- [Microsoft: Bluetooth verbindet nicht](https://support.microsoft.com/en-us/windows/hardware/bluetooth/troubleshoot-bluetooth-not-connecting-in-windows): Ladezustand, Entfernen/erneutes Hinzufügen, Neustart und Problembehandlung bestätigt.
- [Microsoft: Verbunden, aber kein Ton](https://support.microsoft.com/en-au/windows/hardware/bluetooth/fix-bluetooth-connected-but-no-sound-issue-on-windows): Ton-Ausgabe und Lautstärke gesondert prüfen. Keine universelle Aussage zu gleichzeitigen Bluetooth-Verbindungen; dafür verweist der Artikel auf die konkrete Anleitung.

### mikrofon-kamera-videokonferenz

- [Microsoft: Kamera-, Mikrofon- und Datenschutz](https://support.microsoft.com/en-us/windows/privacy/windows-camera-microphone-and-privacy): Windows-Freigabe, gemeinsame Desktop-App-Einstellung und zusätzliche Website-Berechtigung bestätigt.
- [Microsoft: Mikrofontest](https://support.microsoft.com/en-us/windows/hardware/drivers/how-to-set-up-and-test-microphones-in-windows): Auswahl über System → Sound → Eingabe, Test und verfügbare Wiedergabe der Probe bestätigt; Versionsvorbehalt aufgenommen.
- [Microsoft: Kamera funktioniert nicht](https://support.microsoft.com/en-us/windows/hardware/camera/camera-doesn-t-work-in-windows): physische Schalter/Abdeckungen, direkte Verbindung und Test mit Kamera-App bestätigt. Pauschales Abschalten von Schutzsoftware wird im Ratgeber nicht empfohlen.

### laptop-akku-pflegen

- [Microsoft: Akkupflege](https://support.microsoft.com/en-us/windows/experience/power-battery/caring-for-your-battery-in-windows): Alterung, Wärme, tiefe Entladung und mittlerer Ladestand bei Lagerung bestätigt.
- [Microsoft: Intelligentes Laden](https://support.microsoft.com/en-us/windows/experience/power-battery/use-smart-charging-in-windows): Ladebegrenzung unter 100 Prozent und unterschiedliche Herstellerimplementierungen bestätigt.
- [Dell: Aufgeblähte Lithium-Ionen-Akkus](https://www.dell.com/support/manuals/en-us/dell/swollenbattery): nicht weiter nutzen, nicht drücken/öffnen und fachgerechte Hilfe bestätigt. Der zunächst gefundene Artikel 000128491 ist ausdrücklich nicht mehr gepflegt; sein verlinktes aktuelles Handbuch wurde geöffnet und als Quelle übernommen. Keine Anleitung zur Eigenreparatur eines aufgeblähten Akkus.

### usb-c-dockingstation

- [Microsoft: USB-C-Probleme](https://support.microsoft.com/en-gb/windows/hardware/usb/fix-usb-c-problems-in-windows): Funktionen von Port, Kabel und Gerät müssen zusammenpassen; Bildausgabe und Versorgung können getrennt scheitern.
- [Dell: Dockingstationen](https://www.dell.com/support/kbdoc/en-ap/000124295/guide-to-dell-docking-stations): modellbezogene Auswahl, unterschiedliche Dock-Techniken und Herstellerunterlagen bestätigt. Kein pauschales Leistungs- oder Betriebssystemversprechen übernommen.
- [Dell: Laden über Docks und Hubs](https://www.dell.com/support/kbdoc/en-gb/000205967/dell-da305-and-da310-adapters-do-not-charge-or-are-slow-to-charge-your-computer?lang=en): eigener Leistungsbedarf des Docks und Zubehörs sowie unterdimensionierte Versorgung bestätigt. Die im Herstellerartikel genannten Einzelwerte werden nicht auf alle Modelle übertragen.

### barrierefreiheit-windows

- [Microsoft: Windows leichter sehen](https://support.microsoft.com/en-au/accessibility/windows/make-windows-easier-to-see): Textgröße, Skalierung und Kontrastdesigns bestätigt.
- [Microsoft: Eingabegeräte anpassen](https://support.microsoft.com/en-us/accessibility/windows/make-your-mouse-keyboard-and-other-input-devices-easier-to-use): Zeiger-/Cursoranpassung, Einrastfunktion, Anschlagfilter und Bildschirmtastatur bestätigt.
- [Microsoft: Liveuntertitel](https://support.microsoft.com/en-gb/accessibility/windows/use-live-captions-to-better-understand-audio): Windows 11 ab 22H2, Windows + Strg + L, Sprachdateien sowie besondere Geräte-/Versionsanforderungen zusätzlicher Übersetzung bestätigt. Keine Zusage einer fehlerfreien Transkription.

## Bildherstellung und Sichtprüfung

Sechs eigenständige Motive mit dem eingebauten Imagegen-Werkzeug erzeugt, exakt ein Aufruf pro Motiv. Keine Referenzbilder, keine CLI-API-Aufrufe. Jedes Original ist 1536 × 1024 Pixel. Alle sechs Originale und alle sechs 480-Pixel-WebP-Varianten wurden visuell geprüft: passendes Motiv, natürliche Beleuchtung, plausible Geräte, keine erkennbaren Marken, keine lesbare Oberfläche, kein Wasserzeichen.

Pillow 12.1.1, RGB, Lanczos, WebP Qualität 82, method=6. Responsive Varianten: 480 × 320, 640 × 427, 800 × 533, 1280 × 853 und 1920 × 1280. Die 1920-Variante ist aus dem Original hochskaliert; sie enthält keine zusätzliche native Bildinformation. Bestehende Assets wurden nicht ersetzt. Alle 30 WebP-Dateien wurden nach dem Speichern erneut dekodiert und auf Abmessungen geprüft.

### zweiten-monitor-einrichten

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-aeecefc7-5022-419d-9c3a-b06803002ede.png`
- Bildbasis: `public/images/guide-zweiten-monitor-einrichten`
- Dateien: `guide-zweiten-monitor-einrichten-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial guide photo for setting up a second computer monitor. Create one independent 1536 x 1024 landscape photograph, 3:2. A bright quiet home office with exactly two unbranded slim desktop monitors side by side on a light oak desk, their heights comfortably aligned. A simple keyboard and mouse below, neatly routed visible cables at the back. Wide three-quarter view from the left, both monitors fully inside the frame. Screens show only soft neutral window reflections, absolutely no interface or text. Soft morning daylight, ivory walls, subtle natural plant blur far in the background, authentic metal and glass textures, restrained contemporary look, believable hardware. No people, logos, readable writing, labels, icons, arrows, graphic overlays or watermark. A real practical dual-monitor workspace, not a rendering.
```

### bluetooth-verbindet-nicht

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-f55aefac-ac22-48da-8d7d-191f652fb405.png`
- Bildbasis: `public/images/guide-bluetooth-verbindet-nicht`
- Dateien: `guide-bluetooth-verbindet-nicht-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial IT guide photo about connecting wireless headphones. Create one independent 1536 x 1024 landscape photograph, 3:2. Close editorial still life of an unbranded pair of light grey wireless over-ear headphones lying naturally on a pale linen desk mat next to the corner of a slim closed silver laptop. Headphones are the clear main subject, physically realistic ear cushions and headband, no cable connected. Soft side daylight from an unseen window, gentle shadows, warm neutral palette, shallow depth of field, sophisticated quiet domestic workspace. Low oblique close camera view, generous negative space on the desk, no people. No logos, readable text, illuminated displays, software UI, Bluetooth symbols, digital waves, graphic overlays or watermark. Natural photography rather than a synthetic product render.
```

### mikrofon-kamera-videokonferenz

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-b9bd090e-6817-4a08-90fa-bd0e5ffe978f.png`
- Bildbasis: `public/images/guide-mikrofon-kamera-videokonferenz`
- Dateien: `guide-mikrofon-kamera-videokonferenz-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial IT guide photo about checking a webcam and microphone for video meetings. Create one independent 1536 x 1024 landscape photograph, 3:2. An unbranded compact external webcam correctly clipped to the top edge of a desktop monitor, with a small charcoal tabletop USB microphone on a stable short stand in the foreground on a light desk. Medium close three-quarter front view, webcam and microphone both clearly visible and naturally separated in depth. Monitor screen is dark with faint window reflections only; no software or faces on screen. Thin cables routed naturally down toward the rear desk edge, realistic attachment and proportions. Bright soft window light, airy cream interior, subtle blue-grey accents, genuine lens and microphone mesh texture. No people, logos, readable text, symbols, fake UI, graphic overlays or watermark. Quiet, useful and polished editorial photography.
```

### laptop-akku-pflegen

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-04f55b95-ef33-40d1-af9e-014400a394e8.png`
- Bildbasis: `public/images/guide-laptop-akku-pflegen`
- Dateien: `guide-laptop-akku-pflegen-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial IT guide photo about sensible laptop charging and battery care. Create one independent 1536 x 1024 landscape photograph, 3:2. A closed unbranded warm silver laptop resting flat on a clear hard light-oak work surface, its USB-C charging cable visibly and correctly attached to a side port. The cable curves gently to a small unbranded charging brick placed safely on the desktop, an ordinary power lead continues out of frame. Nothing covers the laptop or charger. Soft indirect daylight, calm light cream room, no harsh sun falling on the device. Elevated three-quarter medium view with carefully balanced negative space, realistic everyday materials, a subtle single plant blur in the background. No people, exposed battery cells, tools, damage, logos, readable text, battery icons, graphs, software UI, overlays or watermark. A natural editorial photo of a sensible charging workspace rather than a product advertisement.
```

### usb-c-dockingstation

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-55257467-3843-4b5a-8677-f66f25cd0b9b.png`
- Bildbasis: `public/images/guide-usb-c-dockingstation`
- Dateien: `guide-usb-c-dockingstation-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial IT guide photo about a USB-C docking station. Create one independent 1536 x 1024 landscape photograph, 3:2. Close-up of a compact unbranded matte aluminium USB-C docking station on a pale stone-textured desk, with one short USB-C host cable correctly connected to the visible side port of a slim laptop at the edge of frame. The dock has a believable row of distinct ports, including rectangular USB-A, HDMI and Ethernet; only an Ethernet cable and one HDMI cable are attached, running neatly toward the background, leaving a USB port visible. Physically plausible connector shapes and cable routing, no impossible adapters or tangled bundle. Low three-quarter macro editorial viewpoint focused on the dock and connector, shallow depth of field, bright soft natural daylight and neutral grey-beige tones. No logos, readable port labels, text, software screens, symbols, diagrams, graphic overlays or watermark. Premium natural photography with honest hardware detail.
```

### barrierefreiheit-windows

- Original: `C:\Users\PC\.codex\generated_images\01a1cb8a-25b6-7223-bdba-a0b094803e8a\exec-bfeb4ec9-7f35-49af-beb3-4c7d96916aa2.png`
- Bildbasis: `public/images/guide-barrierefreiheit-windows`
- Dateien: `guide-barrierefreiheit-windows-{480,640,800,1280,1920}.webp`

Vollständiger Prompt:

```text
Use case: photorealistic-natural. Asset type: premium editorial IT guide photo about making a Windows computer easier to use. Create one independent 1536 x 1024 landscape photograph, 3:2. An accessible computer workspace with a large unbranded keyboard with generously sized high-contrast dark keycaps, and a separate ergonomic trackball mouse with a prominent blue ball, both clearly visible on a light oak desk. A relaxed adult hand rests naturally on the trackball, fingers anatomically correct. The keyboard is viewed from a low side angle so individual printed key legends are not legible. A softly defocused monitor in the distant background shows only neutral window reflections, no UI. The mood is confident everyday independence, not clinical or patronizing. Warm soft window light, cream and pale wood palette, authentic skin and material texture, medium close composition with breathing room around input devices. No logos, readable words, medical imagery, oversized decorative icons, overlays or watermark. Photorealistic editorial photography.
```

