# RustDesk-Download aktuell halten

Die Website liefert die unveränderte Windows-x86-64-EXE aus dem offiziellen Repository
`rustdesk/rustdesk` unter `/downloads/rustdesk.exe` aus. Die Metadaten liegen in
`public/downloads/rustdesk.json`: Version, Größe, SHA-256, Architektur, Quell-URL und
Veröffentlichungsdatum. `src/site/rustdesk.ts` versorgt damit die Downloadansicht.
Ein Versionsparameter am Downloadlink verhindert, dass der Browser eine zuvor geladene
ältere EXE aus seinem Cache verwendet. Neue Release-Daten fließen in das Änderungsdatum
der Fernwartungsseiten ein.

## Automatischer Ablauf

`.github/workflows/update-rustdesk.yml` läuft täglich um 04:23 UTC und lässt sich manuell
starten. Er benötigt keine zusätzlichen gespeicherten Zugangsdaten.

1. Die offizielle GitHub-API liefert die neueste stabile Veröffentlichung.
2. Der Updater akzeptiert genau die zur Version gehörende Windows-x86-64-EXE. Entwürfe,
   Vorabversionen, fremde URLs, Downgrades und fehlende SHA-256-Angaben werden abgewiesen.
3. Die Datei wird vollständig heruntergeladen. Größe, SHA-256 und PE-Architektur müssen
   passen, bevor die vorhandenen Dateien ersetzt werden. Die EXE wird nicht ausgeführt.
4. Ohne Änderung endet der Lauf nach der Integritätsprüfung. Bei Änderungen folgt
   `npm ci` und der gesamte Prüfpfad `npm run check`.
5. Ausschließlich EXE und Metadaten werden durch `github-actions[bot]` auf `main` committed.
   Ein normaler Push ohne Force verhindert das Überschreiben paralleler Änderungen.
6. Der Workflow startet die bestehende Pages-Pipeline ausdrücklich über `workflow_dispatch`.
   Dort werden erneut alle Prüfungen ausgeführt, bevor die Website veröffentlicht wird.

Der ausdrückliche Dispatch ist nötig, weil ein Push mit `GITHUB_TOKEN` alleine keine weitere
Push-Pipeline auslöst. Siehe [GitHub: Workflows auslösen](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

Nach 30 Tagen ohne Repository-Commit zeichnet ein erfolgreicher Prüflauf zusätzlich
`checkedAt` in den Metadaten auf. Dadurch bleibt die Überprüfung nachvollziehbar und das
Repository aktiv; GitHub deaktiviert Zeitpläne in öffentlichen Repositories nach 60 Tagen
ohne Aktivität. Siehe [GitHub: Workflows aktivieren und deaktivieren](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).

Die manuelle Option `record_verification` zeichnet den Prüfvermerk sofort auf und durchläuft
auch bei unveränderter Version Commit und Veröffentlichung. Sie dient einer vollständigen
Abnahme des Automatikwegs. Die regelmäßigen Läufe brauchen diese Option nicht.

## Fehlerverhalten

Ein fehlgeschlagener Download, ein abweichender Hash oder eine nicht bestandene Prüfung
beendet den Lauf vor dem Commit und der Veröffentlichung. Die bisherige Live-Datei bleibt
verfügbar. Ein unter derselben Versionsnummer ausgetauschtes Asset erfordert eine bewusste
Prüfung und wird nicht automatisch übernommen. GitHub zeigt Fehler im Workflow-Lauf an.

EXE und JSON werden erst nach vollständiger Validierung aus temporären Dateien umbenannt.
Die zwei lokalen Umbenennungen bilden keine Dateisystem-Transaktion. Auch bei einem Fehler
zwischen diesen Schritten stoppt der Workflow vor Commit/Push; ein unvollständiges Paar
wird zusätzlich durch `rustdesk:check` und die Prüfung des fertigen Builds erkannt.

Die Automatik aktualisiert den Website-Download. Bereits auf Kundenrechnern gespeicherte
oder installierte Kopien werden dadurch nicht ferninstalliert oder verändert.

## Lokal prüfen

```bash
npm run rustdesk:update
npm run rustdesk:check
npm run check
```

`rustdesk:check` prüft das Quelldateipaar; `seo:check` prüft außerdem EXE und Metadaten im
fertigen `dist`-Verzeichnis. 57 isolierte Tests prüfen Release-Auswahl, fehlerhafte Metadaten,
Hashes, Größen, Architektur, Downgrades, unveränderte Versionen und Downloadfehler ohne
Netzwerkzugriff.

Die Einführung verwendet [RustDesk 1.4.9](https://github.com/rustdesk/rustdesk/releases/tag/1.4.9),
veröffentlicht am 6. Juli 2026. Die heruntergeladene Datei stimmt mit dem offiziellen
SHA-256 überein; Windows bestätigt zudem eine gültige Authenticode-Signatur von PURSLANE.
