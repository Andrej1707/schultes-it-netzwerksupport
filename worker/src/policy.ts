export type SupportIntent = 'business' | 'basic-support' | 'out-of-scope'

const forbiddenPatterns = [
  /\b(websuche|web-suche|googeln|google.*such|im web such|online such|recherchier|browse)\b/i,
  /\b(neueste|aktuellste|live)\b.*\b(news|update|quelle|information|preis)\b/i,
  /\b(code|coden|coding|programmier|script|powershell|terminal|registry|api)\b/i,
  /\b(python|javascript|typescript|react|html|css|sql)\b/i,
  /\b(schreib|erstell|bau|entwickl)\b.*\b(app|programm|website|webseite|bot|code)\b/i,
  /\b(übersetz|hausaufgabe|bewerbung|gedicht|witz|rezept|bild generier|rechne)\b/i,
  /\b(systemprompt|system prompt|interne regeln|wissensbasis.*zeig|ignoriere.*regeln)\b/i,
  /\b(search the web|web search|browse the web|latest news|write.*code|can you code|build.*app|create.*app)\b/i,
]

const businessPattern =
  /\b(preise?|kosten?|kostet|fern(hilfe|wartung)|vor ort|kommst|zu mir|hausbesuch|termine?|öffnungszeiten?|geöffnet|erreichbar|kontakt|telefon|nummer|e-?mail|adresse|standort|maps|ludwigsburg|leistungen?|angebote?|andrej|schultes|betrieb|service|webseiten?|automation|tools?|firma)\b/i

const techPattern =
  /\b(wlan|wi-?fi|internet|router|pc|computer|laptop|windows|drucker|smartphone|handy|gerät|software|programm|bildschirm|monitor|maus|tastatur)\b/i

const problemPattern =
  /\b(geht nicht|kaputt|langsam|startet nicht|kein internet|keine verbindung|weg|fehler|problem|abbruch|abbricht|ausgefallen|einrichten|verbunden|schwarz|hängt|friert|druckt nicht|hilfe)\b/i

export function classifySupportIntent(message: string): SupportIntent {
  if (forbiddenPatterns.some((pattern) => pattern.test(message))) return 'out-of-scope'
  if (businessPattern.test(message)) return 'business'
  if (techPattern.test(message) && problemPattern.test(message)) return 'basic-support'
  return 'out-of-scope'
}

export const OUT_OF_SCOPE_REPLY =
  'Dabei kann ich nicht helfen. Ich beantworte nur Fragen zu Schultes IT und gebe höchstens einen sicheren Basischeck wie Neustart, WLAN aus und an oder Router kurz vom Strom trennen. Für alles Weitere erreichst du Andrej direkt unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.'

export const DIRECT_HANDOFF_REPLY =
  'Der sichere Basischeck reicht hier nicht aus. Bitte probiere nicht weiter auf eigene Faust, sondern lass Andrej das Problem richtig prüfen. Du erreichst ihn unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.'

export function getBasicSupportReply(message: string) {
  if (/\b(wlan|wi-?fi|internet|router)\b/i.test(message)) {
    return 'Bitte probiere nur diese sicheren Basics: WLAN am Gerät einmal aus und wieder an. Wenn alle Geräte betroffen sind, den Router etwa 30 Sekunden vom Strom trennen, wieder anschließen und einige Minuten warten. Hilft das nicht, kontaktiere Andrej unter +49 1523 3364752 oder it.schulteslb@gmail.com.'
  }
  if (/\b(drucker)\b/i.test(message)) {
    return 'Bitte prüfe nur Stromversorgung, Papier und sichtbare Fehlermeldungen und starte den Drucker einmal normal neu. Hilft das nicht, kontaktiere Andrej unter +49 1523 3364752 oder it.schulteslb@gmail.com.'
  }
  if (/\b(handy|smartphone)\b/i.test(message)) {
    return 'Bitte starte das Handy einmal normal neu und schalte Flugmodus sowie WLAN kurz aus und wieder an. Hilft das nicht, kontaktiere Andrej unter +49 1523 3364752 oder it.schulteslb@gmail.com.'
  }
  return 'Bitte starte das Gerät einmal normal neu und prüfe nur sichtbare Strom- und Bildschirmkabel auf festen Sitz. Notiere eine genaue Fehlermeldung. Hilft das nicht, kontaktiere Andrej unter +49 1523 3364752 oder it.schulteslb@gmail.com.'
}

export function containsDisallowedOutput(text: string) {
  return /```|<script\b|\bfunction\s+\w+\s*\(|\bconst\s+\w+\s*=|\bdef\s+\w+\s*\(|\bpublic\s+class\b|\bselect\s+.+\s+from\b/i.test(text)
}
