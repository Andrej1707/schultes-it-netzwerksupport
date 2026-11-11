# Zusätzliche responsive Bildgrößen – 11.11.2026

Die vorhandenen Motive, Bildausschnitte und bisherigen 640/1280/1920-WebPs bleiben unverändert. Diese Ergänzung enthält ausschließlich technische Exporte, keine neu erzeugten Motive. Die bereits vorhandenen 800er-Dateien von `workspace`, `support` und `wifi` wurden ebenfalls unverändert beibehalten.

Es wurden 101 WebP-Dateien für 44 Motive ergänzt: 480 px und 800 px für die 40 Ratgebermotive plus das Übersichtsbild, außerdem 800 px und 960 px für die 18 Leistungsfotos sowie 960 px für das hochkant beschnittene Übersichtsbild. Gemeinsame Motive werden nur einmal exportiert. 480 px dienen kleinen Karten; 800/960 px schließen die Lücke zwischen 640 und 1280, ohne die großen Varianten zu entfernen.

Reproduktion: Original nach RGB konvertieren, mit Pillow `Image.Resampling.LANCZOS` auf die Zielbreite und proportional gerundete Höhe skalieren, dann `format="WEBP", quality=82, method=6` speichern. Ausgabegrößen sind 480 × 320, 800 × 533 und 960 × 640. Die Original-PNGs liegen unverändert unter dem lokalen Codex-Verzeichnis `generated_images`; Dateinamen und ursprüngliche Prompts sind in den bestehenden Bild-Provenienzdateien dieses Ordners dokumentiert. Für fünf ältere Motive ohne dokumentierte PNG-Dateizuordnung wurde der vorhandene 1920er-WebP verwendet. Der hochskalierte 1920er-WebP enthält keine zusätzliche native Bildinformation.

Alle neuen Dateien wurden erneut geöffnet und auf Format und Dimensionen geprüft. Die Originalzuordnung wurde vor dem Export durch einen 192 × 128-Vergleich mit der vorhandenen 1280er-Ausgabe geprüft (maximale mittlere RGB-Kanalabweichung 1,151 von 255). SHA-256-Vergleiche bestätigen, dass alle vorher vorhandenen WebP-Dateien und alle verwendeten Originalquellen unverändert blieben.

Gesamtgröße der neuen Dateien: **2,749,078 Bytes**. 39 Motive verwenden ihre dokumentierten Original-PNGs, fünf den vorhandenen WebP-Fallback.

| Motiv | Exportquelle | Neu ergänzte Breiten in px |
| --- | --- | --- |
| `about-workshop` | Vorhandene Datei `public/images/about-workshop-1920.webp` | 480, 800, 960 |
| `backup-desk` | Original-PNG `exec-5f469a14-4d97-4756-b662-96dc00f724e7.png` | 480, 800 |
| `consulting-service` | Original-PNG `exec-b383215d-4d73-468c-85f2-51c79786beb4.png` | 800, 960 |
| `email-service` | Original-PNG `exec-f5ab165d-903b-435a-8d96-04b3cc46692e.png` | 480, 800, 960 |
| `fritzbox-service` | Original-PNG `exec-2ae557db-1797-485c-960e-a53c8524b5f9.png` | 480, 800, 960 |
| `guide-alte-geraete-verkaufen` | Original-PNG `exec-bef32163-6b35-41d7-8383-46d721730313.png` | 480, 800 |
| `guide-bluescreen-einordnen` | Original-PNG `exec-fb96e0fb-bf02-403b-958b-d86b33c1ce10.png` | 480, 800 |
| `guide-cloud-sync-oder-backup` | Original-PNG `exec-8e106295-d4ec-40e1-93ff-a2ba6cc3e30e.png` | 480, 800 |
| `guide-dateien-geloescht` | Original-PNG `exec-1aaecad2-7c65-459e-912b-265a03cd80b5.png` | 480, 800 |
| `guide-daten-auf-neuen-pc` | Original-PNG `exec-968f0be4-b0de-4512-88ff-2d469ad676c0.png` | 480, 800 |
| `guide-externe-festplatte-sichern` | Original-PNG `exec-cf8fcbd7-2416-4ad6-9f52-e32e3e22d7ea.png` | 480, 800 |
| `guide-handy-fotos-sichern` | Original-PNG `exec-b8e2a5b7-7477-481c-95b7-5eec2245e6a9.png` | 480, 800 |
| `guide-konto-gehackt` | Original-PNG `exec-04eb3ca5-0e66-4a06-afa7-884a905bbb3d.png` | 480, 800 |
| `guide-lan-oder-wlan` | Original-PNG `exec-bab54c9c-2d36-4c57-8a01-0e7b0215696e.png` | 480, 800 |
| `guide-laufwerk-verschluesseln` | Original-PNG `exec-187ee3ee-b1e4-4eaf-a0f6-c2bc99162f61.png` | 480, 800 |
| `guide-passwortmanager` | Original-PNG `exec-3cb5cfa3-9fc9-47c9-bf9d-e5c572c95c6a.png` | 480, 800 |
| `guide-ransomware-vorbeugen` | Original-PNG `exec-b66aae15-2c5e-4128-bc8e-95b444df0118.png` | 480, 800 |
| `guide-router-wechseln` | Original-PNG `exec-727cd55f-385d-4e0c-990e-d07b20973ae5.png` | 480, 800 |
| `guide-speicherplatz-freigeben` | Original-PNG `exec-89c2a475-536d-49f3-a095-98fe0a6269d9.png` | 480, 800 |
| `guide-usb-sticks-sicher-nutzen` | Original-PNG `exec-99292c1c-4fc5-40ce-b436-c7b2d0f770db.png` | 480, 800 |
| `guide-windows-update-probleme` | Original-PNG `exec-a1b90e7f-4021-4749-a66c-f72f3cb8f11e.png` | 480, 800 |
| `guide-zwei-faktor-anmeldung` | Original-PNG `exec-b2418374-9b99-4ffd-a631-c9514658cec9.png` | 480, 800 |
| `installation-service` | Original-PNG `exec-30a50893-533b-4608-abe1-e635e8691a62.png` | 480, 800, 960 |
| `mesh-service` | Original-PNG `exec-ca5d0217-17fe-42b8-93dd-ffc56bfef4ba.png` | 480, 800, 960 |
| `network-service` | Original-PNG `exec-eb5775db-ecd4-411a-9037-ed02021bc5aa.png` | 480, 800, 960 |
| `office-service` | Original-PNG `exec-cd6a7f59-0239-40d8-bf52-9443543c08a2.png` | 480, 800, 960 |
| `overview-network` | Vorhandene Datei `public/images/overview-network-1920.webp` | 480, 800 |
| `pc-service` | Original-PNG `exec-debb170a-e999-4199-a54f-c9904a9eeb1a.png` | 480, 800, 960 |
| `printer-service` | Original-PNG `exec-a44a6b25-d5e1-4538-8e23-977c54ccfdad.png` | 480, 800, 960 |
| `privacy-phone` | Original-PNG `exec-4921534a-ee22-4847-9019-b44e6b3d69bb.png` | 480, 800 |
| `remote-email` | Original-PNG `exec-bcfd2999-c487-4602-bcab-5e07f52162be.png` | 480, 800, 960 |
| `remote-main` | Original-PNG `exec-f3c579bc-cc18-41c9-81c4-08e185ce5e28.png` | 800, 960 |
| `remote-printer` | Original-PNG `exec-8ecb7135-8693-451e-bc6c-0c4e038be961.png` | 480, 800, 960 |
| `remote-windows` | Original-PNG `exec-559c1111-4733-46ca-b2c0-a7ba9182c3f5.png` | 800, 960 |
| `router-service` | Original-PNG `exec-6e8a22f1-993b-4841-bea8-a0eabe0377c3.png` | 480, 800, 960 |
| `security-desk` | Original-PNG `exec-99e9a7e3-1465-4c11-b451-1ee5f722a896.png` | 480, 800 |
| `seniors-service` | Original-PNG `exec-6c04e560-ebf3-4491-ae7f-a01021f7f257.png` | 480, 800, 960 |
| `slow-pc-service` | Original-PNG `exec-26a7be06-923f-4ab5-9a39-661f410038eb.png` | 480, 800, 960 |
| `software-service` | Original-PNG `exec-f77559a4-3aba-482a-b2c4-c907d8c76377.png` | 480, 800, 960 |
| `support` | Vorhandene Datei `public/images/support-1920.webp` | 480 |
| `update-laptop` | Original-PNG `exec-61b37543-6785-44c6-bcbb-d460fba8695a.png` | 480, 800 |
| `wifi` | Vorhandene Datei `public/images/wifi-1920.webp` | 480 |
| `windows-service` | Original-PNG `exec-94f0ab3b-9b61-4406-a0a6-1f3ce34be684.png` | 480, 800, 960 |
| `workspace` | Vorhandene Datei `public/images/workspace-1920.webp` | 480 |
