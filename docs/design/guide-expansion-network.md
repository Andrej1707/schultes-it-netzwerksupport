# Netzwerk-Ratgeber: Erweiterung um sechs Themen

Stand und Quellenprüfung: 2026-11-11. Zuständiger Inhaltsbaustein: `src/content/guides/networkExpansion.ts`, Export `networkExpansionGuides`.

## Inhalt und Abgrenzung

Die sechs Artikel behandeln Messmethodik, Videogespräche, Powerline, Smart-Home-Netzplanung, Druckeradressierung und IP-Protokolle. Die vorhandenen Beiträge zu WLAN-Reichweite, Mesh-Planung und Routerwechsel bleiben eigenständig. Jeder neue Artikel enthält drei Kernaussagen, vier konkrete Abschnitte, eine Stolperfalle, einen Hinweis auf passende Hilfe und drei Verweise auf bestehende Ratgeber. Quellen sind verlinkte Primärquellen; Texte sind eigenständig formuliert.

| Slug | Wörter im Artikelkörper | Service |
| --- | ---: | --- |
| `internet-geschwindigkeit-messen` | 522 | `/leistungen/netzwerk-wlan/` |
| `videokonferenz-ruckelt` | 523 | `/leistungen/netzwerk-wlan/` |
| `powerline-sinnvoll-nutzen` | 528 | `/leistungen/netzwerk-wlan/` |
| `smart-home-netzwerk` | 536 | `/leistungen/netzwerk-wlan/` |
| `netzwerkdrucker-feste-adresse` | 547 | `/leistungen/drucker/` |
| `ipv4-ipv6-verstehen` | 552 | `/leistungen/router-entstoerung/` |

## Quellenprüfnachweise

Alle folgenden URLs wurden am 2026-11-11 über das Webwerkzeug geöffnet beziehungsweise im offiziellen Suchindex mit passendem Titel und relevanten Textpassagen geprüft. Die dynamische FRITZ!-Wissensdatenbank liefert dem direkten Textextraktor teilweise nur ihre Seitenhülle; dort ist der tatsächlich gelesene offizielle Indextext ausdrücklich genannt. Der ergänzende direkte Python-HTTPS-Abruf bestätigte die neun Nicht-FRITZ-URLs mit HTTP 200 und identischer Endadresse. Bei sechs FRITZ-URLs meldete die lokale TLS-Prüfung `CERTIFICATE_VERIFY_FAILED: certificate has expired`; die Prüfung wurde nicht umgangen. Das ist ein Abruflimit dieses Zusatzchecks, kein behaupteter HTTP-Erfolg. Die zuerst betrachtete BSI-Smart-Home-Seite lieferte 403 und wurde nicht als Quelle aufgenommen.

### internet-geschwindigkeit-messen

- [Bundesnetzagentur: Fragen und Antworten zur Festnetzmessung](https://support.breitbandmessung.de/festnetz/fragen-und-antworten): Festnetz-FAQ im vollständigen Webtext gelesen: direkte LAN-Verbindung, paralleler Verkehr, Netzteil und Testvoraussetzungen. Die Anleitung im Artikel beschränkt sich auf praktische Vorbereitung; keine Aussage über einen individuellen Rechtsanspruch.
- [Breitbandmessung: Festnetz-Nachweisverfahren](https://gis.breitbandmessung.de/festnetz/nachweisverfahren): Nachweisverfahren per offizieller Suchausgabe verifiziert: Desktop-App, angeleitete Messkampagne und Messprotokoll. Keine veraltete feste Messanzahl in den Artikel übernommen.
- [Bundesnetzagentur: Angebote der Breitbandmessung](https://www.breitbandmessung.de/): Startseite der Breitbandmessung vollständig geöffnet: Unterscheidung der Messangebote und Verweis auf das Festnetzverfahren.

### videokonferenz-ruckelt

- [Microsoft: Internetverbindung für bessere Teams-Anrufe verbessern](https://support.microsoft.com/en-gb/teams/troubleshooting/how-to-improve-your-internet-connection-for-better-call-quality-in-microsoft-teams): Microsoft-Anleitung vollständig geöffnet: Download und Upload sowie Bedingungen der Internetverbindung beeinflussen Teams-Anrufe.
- [Microsoft: Anruf- und Besprechungsqualität in Teams überwachen](https://support.microsoft.com/en-gb/teams/meetings/monitor-call-and-meeting-quality-in-microsoft-teams): Microsoft-Anrufstatistik vollständig geöffnet: Paketverlust und Jitter sowie die verfügbare Qualitätsansicht geprüft. Keine universellen Grenzwerte oder Garantie aus Einzelwerten abgeleitet.

### powerline-sinnvoll-nutzen

- [FRITZ!: So funktioniert Powerline](https://fritz.com/blogs/fritz-entdecken/technologie-wie-funktioniert-powerline): FRITZ!-Technologieartikel vollständig geöffnet: Übertragung über vorhandene Stromleitungen und Abhängigkeit der Datenrate von der Strecke. Keine Übernahme pauschaler Marketingaussagen zur Störungsfreiheit.
- [FRITZ!: Langsame Powerline-Verbindung untersuchen](https://fritz.com/apps/knowledge-base/fritz-powerline-1220/795_powerline-verbindung-langsam): FRITZ!-Wissensdokument 795 über ausführlichen offiziellen Suchindextext geprüft: Wandsteckdose, elektrische Störquellen und Grenzen durch das häusliche Stromnetz. Direkter Web-Extractor lieferte bei der dynamischen Wissensdatenbank nur die Seitenhülle; daher kein vollständiger Direktabruf des Artikeltexts behauptet.
- [FRITZ!: Mögliche Störungen zwischen Powerline und VDSL](https://fritz.com/apps/knowledge-base/FRITZ-Box-7580/3441_FRITZ-Box-meldet-Die-Storung-wurde-moglicherweise-durch-Powerline-verursacht/): FRITZ!-Wissensdokument 3441 über offiziellen indexierten Artikeltext geprüft: VDSL und Powerline können sich aufgrund teilweise überlappender Frequenzen stören. Keine Behauptung, dass dies immer auftritt.

### smart-home-netzwerk

- [Cybersicherheit NRW: Sicherheit für das Smart Home](https://www.cybersicherheit.nrw/themenportal/sicherheit-fuer-mein-smart-home): Offizielles Landesportal cybersicherheit.nrw vollständig geöffnet: Firmwareupdates, individuelle Passwörter, Zwei-Faktor-Anmeldung, Berechtigungen und getrennte Netze.
- [FRITZ!: Gastzugang und Trennung vom Heimnetz](https://fritz.com/apps/knowledge-base/fritz-box-7590/294_wlan-gastzugang-in-fritz-box-einrichten/): FRITZ!-Wissensdokument 294 über ausführlichen offiziellen Suchindextext geprüft: Gast- und Heimnetz sind getrennt. Die Schlussfolgerung, dass lokale Erkennung/Steuerung dadurch verhindert werden kann, wird als planungsabhängiger Hinweis formuliert. Kein pauschales Verschieben aller Smart-Home-Geräte empfohlen.

### netzwerkdrucker-feste-adresse

- [FRITZ!: Einem Netzwerkgerät dieselbe IP-Adresse zuweisen](https://fritz.com/apps/knowledge-base/FRITZ-Box-6660-Cable/201_Netzwerkgerat-immer-die-gleiche-IP-Adresse-von-FRITZ-Box-zuweisen-lassen/): FRITZ!-Wissensdokument 201 über offiziellen indexierten Artikeltext geprüft: Zuordnung zur MAC-Adresse, Reservierung durch den DHCP-Server, automatischer Adressbezug am Endgerät als Voraussetzung. Die Anleitung setzt keine generell häufig wechselnde FRITZ!-Adresse voraus.
- [Microsoft: Netzwerkdrucker in Windows hinzufügen](https://support.microsoft.com/de-de/windows/hardware/printer/add-or-install-a-printer-in-windows): Microsoft-Anleitung vollständig geöffnet: Windows-Druckereinstellungen, reguläres Hinzufügen und Netzwerkdruckerinstallation. Keine universelle Druckertreiber- oder Portänderung vorgeschrieben.

### ipv4-ipv6-verstehen

- [IETF: Spezifikation des Internetprotokolls IPv6](https://www.rfc-editor.org/rfc/rfc8200.html): RFC 8200 beim RFC Editor vollständig geöffnet; Einleitung und erweiterter IPv6-Adressraum geprüft. Nur Grundlagen, keine Protokollimplementierung oder Spezialkonfiguration übernommen.
- [Microsoft: Hinweise zu IPv6 unter Windows](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-ipv6-in-windows): Microsoft Learn vollständig geöffnet: Microsoft empfiehlt nicht, IPv6 pauschal zu deaktivieren oder die Bindung zu entfernen; Windows-Komponenten können beeinträchtigt werden.
- [FRITZ!: MyFRITZ! an IPv6- und DS-Lite-Anschlüssen](https://fritz.com/apps/knowledge-base/fritz-box-7590/1497_kann-myfritz-an-einem-internetzugang-mit-ipv6-ds-lite-genutzt-werden): FRITZ!-Wissensdokument 1497 über offiziellen indexierten Artikeltext geprüft: notwendige IPv6-Erreichbarkeit des externen Zugangs für MyFRITZ! bei IPv6/DS-Lite. Keine Aussage, dass alle beliebigen Fernzugriffslösungen identisch funktionieren.

## Eigene Bildproduktion

Sechs getrennte Aufrufe des eingebauten `imagegen`-Werkzeugs nach dem lokalen Skill `C:/Users/PC/.codex/skills/.system/imagegen/SKILL.md`. Modus: neue photorealistische Editorialmotive ohne Referenzbild. Kein CLI-Fallback und keine Fremdfotos. Pro Motiv genau ein erfolgreicher Aufruf, keine Wiederholungen. Alle Originale sind tatsächlich 1536 × 1024 Pixel und bleiben unverändert unter `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/` erhalten.

Die Bilder zeigen fiktive illustrative Geräteaufbauten, keine realen Kundeninstallationen oder Mitarbeiter. Jedes zurückgegebene Original wurde visuell betrachtet: helles Umfeld, unterschiedliche plausible Motive, keine sichtbaren Marken und keine lesbare Bedienoberfläche. Die Powerline-Aufnahme zeigt einen geschlossenen Adapter ohne offene Elektroinstallation; das Switchfoto ist ein Netzwerk-Symbolmotiv und keine buchstäbliche Darstellung der Protokollversionen. Vorhandene Bilder wurden nicht überschrieben.

### Responsive Exportvarianten

Pillow aus dem jeweiligen Original, RGB, `Image.Resampling.LANCZOS`, WebP `quality=82`, `method=6`. Unveränderter Bildausschnitt, keine Motivbearbeitung. Breiten 480 / 640 / 800 / 1280 / 1920 ergeben Höhen 320 / 427 / 533 / 853 / 1280. Die geforderte 1920er-Variante ist eine 1,25-fache Hochskalierung des 1536er-Originals und enthält keine zusätzlichen Originaldetails. Kleinere Varianten vermeiden unnötige Übertragung auf Karten und Mobilgeräten.

| Bildbasis unter `public/images/` | 480 Bytes | 640 Bytes | 800 Bytes | 1280 Bytes | 1920 Bytes |
| --- | ---: | ---: | ---: | ---: | ---: |
| `guide-internet-geschwindigkeit-messen` | 26900 | 41728 | 57732 | 118884 | 197318 |
| `guide-videokonferenz-ruckelt` | 22748 | 34214 | 47694 | 94208 | 156526 |
| `guide-powerline-sinnvoll-nutzen` | 18022 | 28434 | 40288 | 88314 | 151604 |
| `guide-smart-home-netzwerk` | 19650 | 31380 | 45530 | 106168 | 186344 |
| `guide-netzwerkdrucker-feste-adresse` | 18964 | 28356 | 38046 | 73194 | 119500 |
| `guide-ipv4-ipv6-verstehen` | 23774 | 35478 | 48420 | 92948 | 152198 |

### Vollständige Prompts und Originalpfade

#### internet-geschwindigkeit-messen

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-954a0d2b-6527-48e0-b584-b413abfd87b0.png`

Ziele: `public/images/guide-internet-geschwindigkeit-messen-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: a clean bright desk seen from a thoughtful three-quarter overhead angle. An unbranded slim silver laptop is connected by one clearly visible blue Ethernet cable to a small neutral router beside it. A small real mechanical stopwatch with a plain unmarked light dial and simple hands rests near the cable, suggesting careful timing without any displayed measurement. Laptop screen is softly defocused pale blue without UI. Distinct focus on a physical wired test setup and the stopwatch, realistic cable connectors fully seated, no people.
```

#### videokonferenz-ruckelt

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-8c26ef89-8d69-495a-adf5-230aad53920e.png`

Ziele: `public/images/guide-videokonferenz-ruckelt-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: an inviting quiet home-office video-call workspace, front-side camera angle at seated eye level. A slim unbranded laptop on a simple stand, a small realistic external webcam centered at the top edge, and a dark wired headset resting neatly beside the keyboard. Laptop screen shows only soft abstract out-of-focus rectangles in neutral blue and warm grey, no faces or recognizable meeting software. An Ethernet cable exits neatly behind the laptop. Soft daylight through a light curtain, a chair edge in the background, no people. Make the webcam and headset the visual focus.
```

#### powerline-sinnvoll-nutzen

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-19cefa5d-1cf5-4708-b662-a93448671145.png`

Ziele: `public/images/guide-powerline-sinnvoll-nutzen-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: close editorial view of one compact plain white Powerline network adapter plugged directly into a modern German Schuko wall socket on a pale warm wall, low above a light oak floor and skirting board. One realistic Ethernet cable is securely connected to its underside and curves gently along the floor toward the edge of the image. The adapter housing is fully closed, safely fitted and unbranded, with a tiny subtle status light but no labels. Show only this ordinary accessible outlet, no power strip, no opened socket, no tools, no exposed wiring, no people. Natural lateral daylight emphasizes plausible plastic and wall textures.
```

#### smart-home-netzwerk

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-363896a7-bb9f-422d-a977-129bde26f702.png`

Ziele: `public/images/guide-smart-home-netzwerk-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: a calm lived-in modern living-room sideboard with three clearly distinct unbranded smart-home objects: a small white wireless door/window contact sensor pair resting together in the foreground, a compact round neutral hub next to them, and a simple table lamp with a warm softly lit shade behind. A subtle short Ethernet cable runs from the hub toward the back of the sideboard. Three-quarter close viewpoint, believable scale and fine material texture, no screens, no phone, no people. The composition suggests planning connected household devices, without any diagrams or symbolic effects.
```

#### netzwerkdrucker-feste-adresse

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-35667c3b-e64e-45b6-a4c0-57b358b2a802.png`

Ziele: `public/images/guide-netzwerkdrucker-feste-adresse-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: an organized small home-office desk with one compact white multifunction printer and one small neutral router nearby. A realistic blue Ethernet cable links their rear network ports, clearly visible as a gentle loop on the desk; use a rear three-quarter angle so the physical connection reads naturally while the printer remains recognizable. Printer has a small blank dark display and a few unmarked controls, one clean blank sheet in the output tray. Quiet pale wall, soft daylight, no laptop dominant, no people, no labels, no product branding. Crisp practical editorial equipment photography.
```

#### ipv4-ipv6-verstehen

Original: `C:/Users/PC/.codex/generated_images/01a1cbf5-83bb-7da0-ac7d-42f41eca7cd8/exec-82473671-536c-4382-aa3c-a4c45916d1f4.png`

Ziele: `public/images/guide-ipv4-ipv6-verstehen-{480,640,800,1280,1920}.webp`

```text
Use case: photorealistic-natural. Asset type: premium German IT guide editorial photograph. Generate one separate landscape 3:2 image, 1536x1024 preferred. Bright natural daylight, warm white and pale wood, restrained silver and soft blue accents, calm real materials and subtle everyday texture, photorealistic rather than a 3D render. One coherent photographic scene with generous framing for responsive crops. This is an illustrative fictional equipment scene, not an actual customer installation or staff portrait. Absolutely no text, readable interface, letters, numbers, logos, brands, watermarks, arrows, diagrams, floating symbols or artificial glowing effects. Scene: macro-like editorial close view of a compact unbranded brushed-metal Ethernet switch on a bright clean desk. Several correctly proportioned RJ45 connectors from soft blue, muted teal and neutral grey network cables are fully seated in adjacent ports; the cables curve in distinct gentle arcs into the background. No printed port numbers or labels. Tiny realistic status lights, restrained shallow depth of field with connectors in focus, natural window light. This photograph is an illustrative network motif, not a literal depiction of protocol versions. No router antenna, no screens, no people.
```

## Prüfung

- Gezielter TypeScript-Check der neuen Inhaltsdatei und von `types.ts` bestanden (`tsc --ignoreConfig --noEmit --skipLibCheck --target ES2022 --module ESNext --moduleResolution Bundler`).
- Datenform, sechs eindeutige Slugs, Kategorie, Aktualisierungsdatum, Quellenanzahl und drei Verweise auf bestehende Ratgeber je Artikel geprüft.
- Artikelkörper einschließlich Abschnittstiteln: 522, 523, 528, 536, 547 und 552 Wörter; alle im Zielbereich 450–650.
- Alle 30 WebP-Dateien existieren, wurden mit Pillow erneut geöffnet und auf die erwarteten Abmessungen geprüft.
- Unabhängiger nurlesender Inhaltsreview durch `expansion_review`: keine substantiellen Korrekturbefunde.
- Kein Build, keine Katalogänderung, kein Commit und kein Deployment in diesem Teilauftrag. Die gemeinsame Integration und Liveprüfung erfolgen durch den Hauptagenten.

