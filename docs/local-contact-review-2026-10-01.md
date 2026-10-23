# Direkte lokale Anfragen: Analyse und Änderungen

## Ausgangslage

Quelle: vom Auftraggeber bereitgestellte August-Zahlen aus dem Google-Business-Bericht
vom 23.09.2026. Der Originalbericht wurde nicht unabhängig abgerufen.

| Kennzahl | August | Veränderung laut Bericht |
| --- | ---: | ---: |
| Profilaufrufe | 171 | −6 % |
| Interaktionen | 63 | nicht angegeben |
| Routenanfragen | 56 | +36 % |
| Websitebesuche | 6 | −25 % |
| Anrufe | 1 | nicht angegeben |
| Chat-Klicks | 0 | nicht angegeben |

56 / 63 = 88,9 % der Interaktionen sind Routenanfragen; Websitebesuche machen
9,5 % und Anrufe 1,6 % aus. Das sind Anteile von Aktionen, keine personenbezogenen
Conversion-Raten. Die Zahlen belegen weder tatsächliche Anfahrten noch Aufträge.
Aus sechs Websitebesuchen lässt sich keine belastbare Wirkung einzelner Website-CTAs
oder Ursache des Rückgangs ableiten. Auch 0 Google-Chat-Klicks sagen nichts über die
Nutzung des Website-Assistenten aus.

Die Verteilung ist ein Anlass, lokale Kontaktaufnahme deutlicher anzubieten und den
Vor-Ort-Service beim Kunden von der Geschäftsanschrift verständlich zu unterscheiden.
Ein Zusammenhang zwischen Routenanfragen und unklarer Besuchserwartung bleibt eine
Hypothese; deshalb keine erfundenen Öffnungszeiten oder neuen Betriebszusagen.

## Geprüfter Stand

Basis: Commit `c0704be` auf `main`. Beim Start waren keine offenen Pull Requests vorhanden.
Telefon, E-Mail und Fernwartung ab 25 € waren bereits konfiguriert. Die lokale Seite
hatte einen Ansprechpartner, Telefon, E-Mail, Preise und eine Karte mit Freigabe.

Die Startseite leitete mit „IT-Hilfe finden“ zur Fernwartungs-Erklärung, daneben zur
Leistungsübersicht. Der lokale Einstieg erschien erst nach mehreren Inhaltsbereichen.
Der Header der Startseite bot einen weiteren Navigationsschritt statt eines Anrufs an.
Auf der Standortseite führte der zweite Hero-Link zu Leistungen statt zur schriftlichen Anfrage.

## Umgesetzte Änderungen

- Startseite: Fernwartung ab dem konfigurierten Preis bleibt der primäre CTA.
  Ludwigsburg erhält den zweiten Hero-CTA; Telefon und sichtbare E-Mail stehen direkt darunter.
- Startseiten-Header: direkter Anruf über den vorhandenen zentralen Fernwartungskontakt.
  Der Support-Assistent verwendet dadurch auf der Startseite ebenfalls den zentralen Kontakt;
  lokale Seiten behalten ihren Standortkontakt.
- Lokale Landingpage: Anruf und vorbereitete E-Mail-Anfrage im Hero, Einstiegspreise
  und Hinweis auf Terminvereinbarung. Ein eigener Fernwartungslink bleibt sichtbar.
- Vorbereitete E-Mail: Problem, Ort/PLZ, Erreichbarkeit und Terminwunsch als ausfüllbare
  Vorlage; Entscheidung zwischen Fernwartung und Vor-Ort-Service erst nach Abstimmung.
  Empfänger und Ansprechpartner werden aus dem tatsächlichen Standortbetreiber abgeleitet.
- Einsatzgebietsabschnitt: Anfrage vor dem bestehenden Maps-Link.
- Abschluss und Footer: direkter Kontakt statt zusätzlicher Suche; sichtbare E-Mail als
  Ausweichweg für Menschen ohne eingerichtetes E-Mail-Programm.
- Kontaktlinks funktionieren auch im vorgerenderten HTML ohne JavaScript; die
  Startseitenlinks sind mit mindestens 44 px Höhe für Touch bedienbar.

Es werden keine Nachrichten automatisch versendet. `mailto:` öffnet einen Entwurf im
E-Mail-Programm; es ist kein Formular und bietet keine Versandbestätigung.

## Weitere Auswertung

Für lokale Google-Business-Besucher ist `/standorte/ludwigsburg/` die passende Zielseite.
Eine Änderung des Google-Profils wurde nicht vorgenommen. Ein möglicher Website-Link:

`https://schultes-it.de/standorte/ludwigsburg/?utm_source=google&utm_medium=organic&utm_campaign=gbp_ludwigsburg`

UTM-Parameter allein liefern keine Auswertung. Im vorhandenen Projekt wurde keine neue
Analytics-Integration eingebaut. Nach Veröffentlichung tatsächliche lokale Anfragen
und vereinbarte Termine erfassen; freiwillig nach der Herkunft fragen. Google-Aktionen
weiterhin getrennt betrachten. Mindestens einen vollständigen Folgemonat vergleichen,
bei den niedrigen Fallzahlen keine Wirkung aus einzelnen Klicks behaupten.

## Prüfung

Vollständiger Repository-Prüfpfad: `npm run check` (Frontend/Worker-TypeScript,
Vitest, RustDesk-Prüfung, Produktions-Build und SEO-Validierung).
Zusätzliche Regressionstests prüfen beide Kontaktwege und den Fernwartungseinstieg
im statischen Hero sowie URL-Encoding und den Empfänger bei einem anderen Betreiber.

Ergebnis: 132 Tests bestanden; vollständiger Prüfpfad erfolgreich. SEO-Prüfung für
31 indexierbare Routen, 2 nicht indexierbare kanonische Routen und 29 Aliasse bestanden.
Die visuelle Browserprüfung konnte nicht durchgeführt werden: Der Cloud-Browser
blockiert den lokalen Vorschau-Link (`ERR_BLOCKED_BY_CLIENT`). Responsive Darstellung
und das Öffnen eines E-Mail-Entwurfs in echten Mobil-Mail-Apps bleiben manuell zu prüfen.
