# Daten-Ratgeber-Erweiterung – 11.11.2026

Sechs neue Artikel in `src/content/guides/dataExpansion.ts`, Export `dataExpansionGuides`. Themen: gezielte OneDrive-Fehlersuche, kontrollierte Freigaben, Betrieb eines Heim-NAS, praktische Rücksicherungsprobe, Ablage und Suche sowie PDF-Kompression. Die vorhandenen Grundlagen zu 3-2-1, externen Sicherungen, Cloud-Sync und PC-Umzug bleiben eigenständige Vertiefungen.

## Inhalt und Quellenprüfung

Alle Artikel haben drei Kernaussagen, vier Abschnitte, eine Stolperfalle, einen Hinweis zum passenden Hilfebedarf, drei verwandte Artikel und drei offizielle Primärquellen. Stand der Prüfung: 11.11.2026. Die Texte vermeiden feste Versions- oder Tarifversprechen; verfügbare Funktionen und Organisationsregeln werden bei Bedarf eingegrenzt.

Quellen wurden über die Websuche auf den offiziellen Herstellerdomains geprüft und direkt geöffnet. Microsoft und Adobe lieferten passende Titel und Artikelseiten. Synology lieferte beim direkten Textabruf teilweise nur die JavaScript-Seitenhülle; Titel und relevante Artikelinhalte waren im offiziellen Suchindex vollständig einsehbar. Das ist eine Grenze des Textabrufs, keine behauptete Browser-Funktionsprüfung. Es wurden keine Drittanbieter-Anleitungen als Quellen übernommen. Der länderbezogene Adobe-Kompressionslink wurde auf die beim Abruf erreichte kanonische Adresse ohne Länderpräfix vereinheitlicht.

| Artikel | Wörter im Hauptinhalt | Abgrenzung und geprüfte Kernaussage |
| --- | ---: | --- |
| `onedrive-synchronisiert-nicht` | 549 | Fehler an Konto, Status, Speicher oder einzelnen Dateien eingrenzen; lokale Änderungen vor Neuverknüpfung sichern. |
| `dateien-sicher-teilen` | 548 | Empfängerkreis, bestehende Berechtigungen und Ende der Freigabe; keine Garantie gegen bereits erstellte Kopien. |
| `nas-zu-hause` | 560 | Verantwortlicher Betrieb, getrennte Konten und unabhängige Sicherung; RAID und Snapshots allein sind kein getrenntes Backup. |
| `backup-wiederherstellung-testen` | 568 | Nichtdestruktive Rücksicherung in getrennten Zielordner; Versionen, Schlüssel, Inhalte und tatsächlicher Testumfang. |
| `dateien-ordnen-wiederfinden` | 567 | Praktische Ablage, Dateiendungen, Suchbereich und Indexierung; keine pauschale Dublettenlöschung. |
| `pdf-dateien-verkleinern` | 594 | Original erhalten, Zielgröße und Qualität vergleichen, Cloud-Upload und signierte Dokumente berücksichtigen. |

### Verifizierte Primärquellen je Artikel

#### onedrive-synchronisiert-nicht

- [Microsoft: OneDrive-Synchronisierungsprobleme beheben](https://support.microsoft.com/en-us/onedrive/fix-onedrive-sync-problems)
- [Microsoft: Bedeutung der OneDrive-Symbole](https://support.microsoft.com/en-us/onedrive/what-do-the-onedrive-icons-mean)
- [Microsoft: Einschränkungen in OneDrive und SharePoint](https://support.microsoft.com/en-us/onedrive/restrictions-and-limitations-in-onedrive-and-sharepoint)

#### dateien-sicher-teilen

- [Microsoft: Dateien und Ordner in OneDrive freigeben](https://support.microsoft.com/en-us/onedrive/share-files-and-folders-in-microsoft-onedrive)
- [Microsoft: Externe Freigaben und Gastzugriff](https://support.microsoft.com/en-us/sharepoint/lists/sharepoint-sharing-and-permissions/external-or-guest-sharing-in-onedrive-sharepoint-and-lists)
- [Microsoft: Freigegebene Dateien und Zugriffe anzeigen](https://support.microsoft.com/en-us/onedrive/see-files-you-shared-in-onedrive)

#### nas-zu-hause

- [Synology: Sicherheit eines NAS verbessern](https://kb.synology.com/en-us/DSM/tutorial/How_to_add_extra_security_to_your_Synology_NAS)
- [Synology: NAS-Daten unabhängig sichern](https://kb.synology.com/en-ca/DSM/tutorial/How_to_back_up_your_Synology_NAS)
- [Synology: Ordnerberechtigungen verwalten und prüfen](https://kb.synology.com/en-eu/DSM/tutorial/How_to_manage_ACL_settings_on_your_Synology_NAS)

#### backup-wiederherstellung-testen

- [Microsoft: Dateien mit dem Dateiversionsverlauf wiederherstellen](https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history)
- [Synology: Integritätsprüfung von Hyper-Backup-Aufgaben](https://kb.synology.com/en-in/DSM/tutorial/What_is_backup_integrity_check_for_Hyper_Backup_tasks)
- [Synology: Vorhandene Sicherungsdaten wiederherstellen](https://kb.synology.com/en-us/DSM/tutorial/How_to_restore_settings_apps_files_permissions_by_Hyper_Backup)

#### dateien-ordnen-wiederfinden

- [Microsoft: Dateien und Apps in Windows finden](https://support.microsoft.com/en-gb/windows/experience/storage-filemanagement/find-your-files-and-apps-in-windows)
- [Microsoft: Suchindexierung in Windows](https://support.microsoft.com/en-us/windows/experience/performance-optimization/search-indexing-in-windows)
- [Microsoft: Dateinamenerweiterungen verstehen und anzeigen](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

#### pdf-dateien-verkleinern

- [Adobe: PDF-Dateigröße in Acrobat reduzieren](https://helpx.adobe.com/acrobat/desktop/create-documents/optimize-pdfs/reduce-file-size.html)
- [Adobe: PDFs online komprimieren und speichern](https://helpx.adobe.com/acrobat/web/share-review-and-export/export-and-print/compress-pdfs.html)
- [Adobe: Berechtigungen und Einschränkungen signierter PDFs](https://helpx.adobe.com/acrobat/desktop/e-sign-documents/learn-about-signatures/signed-pdf-limitations.html)

## Eigene Fotomotive und Auslieferung

Werkzeug: eingebautes `image_gen`, sechs separate Aufrufe, genau ein neues Motiv pro Artikel. Der Imagegen-Skill wurde angewandt; keine API-CLI und keine Referenzfotos wurden verwendet. Die Motive sind fiktive illustrative Szenen, keine dokumentierten Kundeninstallationen, Mitarbeitenden oder Geschäftsräume. Die Aufnahme mit Papierstapeln ist eine Größenmetapher, keine Empfehlung, inhaltlich benötigte Seiten zu entfernen.

Alle sechs Originale wurden visuell auf Komposition, plausible Geräte und Hände, fehlende Marken und fehlende lesbare Bildschirmoberflächen geprüft. Die Quellauflösung beträgt jeweils 1536 × 1024 Pixel. Alle 30 Web-Exporte wurden erneut geöffnet und auf ihre Abmessungen geprüft. Export: Pillow, RGB, Lanczos, WebP Qualität 82, Methode 6. Die 1920er-Versionen sind hochskaliert und enthalten keine zusätzliche native Bildinformation. Die Originale bleiben unverändert im Codex-Generierungsordner; nur die WebP-Varianten liegen im Repository.

Dateischema: `public/images/guide-<slug>-<breite>.webp`.

| Artikel | 480 × 320 | 640 × 427 | 800 × 533 | 1280 × 853 | 1920 × 1280 |
| --- | ---: | ---: | ---: | ---: | ---: |
| `onedrive-synchronisiert-nicht` | 12.628 Bytes | 18.306 Bytes | 25.128 Bytes | 47.152 Bytes | 80.564 Bytes |
| `dateien-sicher-teilen` | 22.306 Bytes | 34.604 Bytes | 48.682 Bytes | 94.960 Bytes | 156.812 Bytes |
| `nas-zu-hause` | 18.252 Bytes | 28.082 Bytes | 39.474 Bytes | 82.916 Bytes | 147.540 Bytes |
| `backup-wiederherstellung-testen` | 20.154 Bytes | 30.226 Bytes | 42.042 Bytes | 82.500 Bytes | 135.230 Bytes |
| `dateien-ordnen-wiederfinden` | 11.040 Bytes | 16.748 Bytes | 24.170 Bytes | 63.162 Bytes | 136.014 Bytes |
| `pdf-dateien-verkleinern` | 15.336 Bytes | 24.692 Bytes | 35.430 Bytes | 79.310 Bytes | 132.798 Bytes |

### Vollständige Prompts und Originalpfade

#### onedrive-synchronisiert-nicht

Bildschlüssel: `guide-onedrive-synchronisiert-nicht`

Alttext: Silberner Laptop an einem hellen Fenster mit Blick auf einen bewölkten Himmel

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-1191bca4-88ee-4560-8a5c-55347ceea78d.png`

```text
Use case: photorealistic-natural. Create one premium editorial photo for a German guide about troubleshooting cloud file synchronization. Landscape 1536x1024, natural photographic realism. A slim unbranded silver laptop sits open on a pale desk beside a large real window showing soft white clouds in a pale blue sky outside. The camera looks diagonally from behind the laptop so the screen is not visible; the window reflection gently falls on the lid and keyboard edge. One tidy power lead, a small plain notebook, no clutter. Distinct airy composition with the real cloud-filled window occupying the upper half, laptop in the lower right, honest textures and gentle morning daylight. No person, no logos, readable text, numbers, screen UI, watermark, floating cloud icons, arrows, or graphic overlays. This is a fictional illustrative workspace, not a real client installation.
```

#### dateien-sicher-teilen

Bildschlüssel: `guide-dateien-sicher-teilen`

Alttext: Zwei getrennte Laptop-Arbeitsplätze mit einer geschlossenen Dokumentenmappe auf einem gemeinsamen Tisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-baa9e6cf-8f81-43e4-856b-8544cebab952.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German guide about sharing files with specific people and limited permissions. Landscape 1536x1024. Two distinct neat workstations face each other across a light oak shared desk in a small bright home office: a slim open silver laptop in foreground seen from behind, a second dark laptop farther opposite, both screens turned away so no interface is visible. A single closed plain cream document folder rests centrally, a pair of simple desk chairs slightly pulled back, soft linen curtain and natural daylight. Composition emphasizes two deliberate separate workspaces, tasteful asymmetry, real materials, clean neutral colors, subtle shallow depth of field. No people, no cables between laptops, no logos, readable writing, numbers, fake UI, symbols, arrows, locks, watermarks, or overlays. Fictional illustrative photo, not an actual client location.
```

#### nas-zu-hause

Bildschlüssel: `guide-nas-zu-hause`

Alttext: Kompakter Netzwerkspeicher mit zwei Laufwerksschächten neben einer Festplatte auf einer Schutzunterlage

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-afceee59-2847-4a2c-82c6-cfcb2ec3ab43.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German guide about a NAS for home file storage. Landscape 1536x1024, photorealistic quiet technology editorial. Subject: a compact unbranded two-bay graphite network attached storage enclosure on a sturdy pale wooden shelf, both closed front drive trays clearly visible and physically plausible. A single spare bare 3.5 inch hard drive with blank plain top label lies safely on an antistatic pouch beside the enclosure, not opened or taken apart. One neat ethernet cable exits from behind the NAS. Three-quarter close view at shelf level, soft natural daylight, warm-white wall, airy residential office background, ample space around cooling vents, no staged rack or dramatic server lights. Accurate practical hardware proportions, subtle brushed metal and matte plastic texture. No people, no logos, readable text, numbers, screen UI, watermark or illustrative overlays. Fictional illustrative scene, not an actual customer setup.
```

#### backup-wiederherstellung-testen

Bildschlüssel: `guide-backup-wiederherstellung-testen`

Alttext: Hände an einem Laptop mit angeschlossenem USB-Laufwerk und drei Landschaftsfotos auf dem Tisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-2524e2dd-c204-42d2-a8c9-7cd7d8946544.png`

```text
Use case: photorealistic-natural. Create one distinct premium editorial photo for a German guide about actually testing restoration from a backup. Landscape 1536x1024, natural realistic photography. Close over-the-shoulder view of one adult's natural hands at a small home-office desk, one resting on the touchpad of an open unbranded dark laptop. A compact light-silver external USB drive is visibly connected at the side. Beside it, three small physical photo prints show generic landscapes with no people and no lettering, suggesting sample files being checked. The laptop screen is angled away and strongly defocused with only a neutral gray glow, absolutely no interface or writing. Gentle side daylight, ivory wall, pale wood, quiet careful working moment, anatomically correct hands, authentic textures, uncluttered balanced composition. No face, logos, readable text or numbers, fake UI, floating arrows, checkmarks, watermark or overlays. Fictional illustration; do not imply a real customer or a certified recovery result.
```

#### dateien-ordnen-wiederfinden

Bildschlüssel: `guide-dateien-ordnen-wiederfinden`

Alttext: Vier geordnete Dokumentenmappen mit einer Lupe und einer Laptop-Ecke auf einem hellen Tisch

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-1f4e83a4-7e7e-4f77-8826-f731517707ea.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German guide about organizing files and finding documents again. Landscape 1536x1024, photo realism. A quiet top-down view of a cream desk with four plain slim paper folders carefully aligned in a simple stepped arrangement, colors ivory, muted blue, sage and warm gray. A small real metal magnifying glass rests partly on one closed folder as a subtle physical search metaphor. At the upper edge only the corner of an unbranded silver laptop keyboard is visible, no screen. One plain pen aligned alongside the folders. Gentle diffuse daylight with soft shadows, authentic paper grain and brushed metal, refined practical editorial composition with generous negative space. No people, logos, labels, readable text, numbers, screen UI, cartoon symbols, watermark, or overlays. Fictional illustrative scene, not a photographed customer archive.
```

#### pdf-dateien-verkleinern

Bildschlüssel: `guide-pdf-dateien-verkleinern`

Alttext: Dicker Papierstapel und ein schmales geheftetes Papierbündel neben einem geschlossenen Laptop

Originalquelle: `C:/Users/PC/.codex/generated_images/01a1cbf8-1917-75e2-8ef9-7ef523d26130/exec-4ef70c38-93f1-48da-bc48-a526a03670b3.png`

```text
Use case: photorealistic-natural. Create one premium editorial photograph for a German guide about reducing PDF file size while keeping documents readable. Landscape 1536x1024. On a clean pale stone desk, a thick neatly squared stack of blank white paper sits on the left, and a much slimmer neat bundle of paper held by one small black binder clip sits to its right, a compact unbranded closed silver laptop farther behind. Low close three-quarter composition emphasizing the difference in paper thickness, real paper edges and subtle texture, calm bright daylight through sheer curtains, warm white and silver palette, refined restrained editorial styling. This is a physical visual metaphor for compact documents, not a claim that compression removes pages. No people, no written pages, logos, text, numbers, PDF icons, fake UI, floating arrows, watermarks, or graphic overlays. Fictional illustrative photo, no actual confidential documents.
```

## Validierung

Der isolierte TypeScript-Check für `dataExpansion.ts` ist bestanden. Die sechs Artikel wurden auf vollständige Struktur, Wortumfang, eindeutige Slugs/Bildschlüssel, gültige interne Verweise und vorhandene Bildvarianten geprüft. Katalogerzeugung, Gesamtbuild und Veröffentlichung liegen bei der Hauptaufgabe und werden hier nicht als erledigt behauptet.

