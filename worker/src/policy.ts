export type SupportIntent = 'business' | 'basic-support' | 'conversation' | 'out-of-scope'

const forbiddenPatterns = [
  /\b(websuche|web-suche|googeln|google.*such|im web such|online such|recherchier|browse)\b/i,
  /\b(such|suche|sucht|suchst)\b.*\b(web|internet|online|google)\b/i,
  /\b(neueste|aktuellste|live)\b.*\b(news|update|quelle|information|preis)\b/i,
  /\b(code|coden|coding|programmier|script|powershell|terminal|registry|api)\b/i,
  /\b(python|javascript|typescript|react|html|css|sql)\b/i,
  /\b(schreib|erstell|bau|entwickl)\b.*\b(app|programm|website|webseite|bot|code)\b/i,
  /\b(systemprompt|system prompt|interne regeln|wissensbasis.*zeig|ignoriere.*regeln)\b/i,
  /\b(search the web|web search|browse the web|latest news|write.*code|can you code|build.*app|create.*app)\b/i,
]

const businessPattern =
  /\b(preise?|kosten?|kostet|fern(hilfe|wartung)|vor ort|kommst|zu mir|hausbesuch|termine?|öffnungszeiten?|geöffnet|erreichbar|kontakt|telefon|nummer|e-?mail|adresse|standort|maps|ludwigsburg|leistungen?|angebote?|andrej|schultes|betrieb|service|webseiten?|automation|tools?|firma)\b/i

const techPattern =
  /\b(wlan|wi-?fi|internet|router|pc|computer|laptop|windows|drucker|smartphone|handy|gerät|software|programm|bildschirm|monitor|maus|tastatur)\b/i

const problemPattern =
  /\b(geht nicht|kaputt|langsam|schlecht|schlechtes|schwaches?|instabil|unzuverlässig|manchmal|stockt|ruckelt|aussetzer|unterbrechung|startet nicht|kein internet|keine verbindung|weg|fehler|problem|abbruch|abbricht|ausgefallen|einrichten|verbunden|schwarz|hängt|friert|druckt nicht|hilfe)\b/i

export function classifySupportIntent(message: string): SupportIntent {
  if (forbiddenPatterns.some((pattern) => pattern.test(message))) return 'out-of-scope'
  if (businessPattern.test(message)) return 'business'
  if (techPattern.test(message) && problemPattern.test(message)) return 'basic-support'
  return 'conversation'
}

export function isBasicSupportFailureFollowUp(message: string) {
  return /\b(hat nicht geholfen|hilft nicht|geht immer noch nicht|funktioniert immer noch nicht|problem besteht|noch immer|weiterhin kaputt)\b/i.test(
    message,
  )
}

export const OUT_OF_SCOPE_REPLY =
  'Dabei kann ich nicht helfen. Ich beantworte nur Fragen zu Schultes IT und gebe höchstens einen sicheren Basischeck wie Neustart, WLAN aus und an oder Router kurz vom Strom trennen. Für alles Weitere erreichst du Andrej direkt unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.'

export const DIRECT_HANDOFF_REPLY =
  'Der sichere Basischeck reicht hier nicht aus. Bitte probiere nicht weiter auf eigene Faust, sondern lass Andrej das Problem richtig prüfen. Du erreichst ihn unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.'

export const BASIC_SUPPORT_CATEGORIES = [
  'wlan_unstable',
  'internet_outage',
  'computer',
  'printer',
  'smartphone',
  'general',
] as const

export const BASIC_SUPPORT_STEP_IDS = [
  'toggle_wifi',
  'check_other_devices',
  'power_cycle_router',
  'restart_device',
  'check_visible_cables',
  'note_error',
  'printer_basics',
  'toggle_flight_mode',
] as const

type BasicSupportCategory = (typeof BASIC_SUPPORT_CATEGORIES)[number]
type BasicSupportStepId = (typeof BASIC_SUPPORT_STEP_IDS)[number]

type BasicSupportPlan = {
  category: BasicSupportCategory
  intro: string
  step_ids: BasicSupportStepId[]
}

const BASIC_SUPPORT_STEPS: Record<BasicSupportStepId, string> = {
  toggle_wifi: 'Schalte WLAN am betroffenen Gerät einmal aus und wieder ein.',
  check_other_devices: 'Prüfe kurz, ob andere Geräte im selben WLAN ebenfalls betroffen sind.',
  power_cycle_router:
    'Wenn mehrere Geräte betroffen sind, trenne den Router etwa 30 Sekunden vom Strom, schließe ihn wieder an und warte einige Minuten.',
  restart_device: 'Starte das betroffene Gerät einmal normal neu.',
  check_visible_cables: 'Prüfe nur sichtbare Strom-, Netzwerk- und Bildschirmkabel auf festen Sitz.',
  note_error: 'Notiere eine sichtbare Fehlermeldung möglichst genau.',
  printer_basics: 'Prüfe Stromversorgung, Papier und sichtbare Fehlermeldungen am Drucker.',
  toggle_flight_mode: 'Schalte den Flugmodus kurz ein und anschließend wieder aus.',
}

export const BASIC_SUPPORT_ADAPTER_PROMPT = `Du bist der sichere Basischeck von Schultes IT & Netzwerksupport.
Analysiere das konkrete Problem und gib ausschließlich ein JSON-Objekt nach dem vorgegebenen Schema zurück.
Wähle ein passendes Thema und genau 1 bis 3 erlaubte Schritt-IDs. Passe Auswahl und Reihenfolge an die Nutzernachricht an.
Die Einleitung darf höchstens 160 Zeichen lang sein, soll das Problem knapp und freundlich einordnen und darf selbst keine Anleitung enthalten.
Erfinde keine Schritte. Gib keine Links, Kontaktdaten, Codes, Befehle, Downloads, Registry-, BIOS-, Reparatur- oder Sicherheitshinweise aus.
Unterscheide instabiles oder schwaches WLAN von einem vollständigen Internetausfall.
Erlaubte Schritte:
- toggle_wifi: WLAN am Gerät aus und wieder ein
- check_other_devices: prüfen, ob andere Geräte betroffen sind
- power_cycle_router: Router kurz stromlos machen, nur wenn mehrere Geräte betroffen sind
- restart_device: betroffenes Gerät normal neu starten
- check_visible_cables: nur sichtbare Kabel prüfen
- note_error: sichtbare Fehlermeldung notieren
- printer_basics: Strom, Papier und Anzeige prüfen
- toggle_flight_mode: Flugmodus kurz ein und aus`

function isBasicSupportPlan(value: unknown): value is BasicSupportPlan {
  if (!value || typeof value !== 'object') return false
  const plan = value as Partial<BasicSupportPlan>
  if (!BASIC_SUPPORT_CATEGORIES.includes(plan.category as BasicSupportCategory)) return false
  if (typeof plan.intro !== 'string') return false
  const intro = plan.intro.trim()
  if (!intro || intro.length > 160) return false
  if (/https?:\/\/|www\.|\+49|@|```|\b(code|powershell|terminal|download|bios|registry)\b/i.test(intro)) {
    return false
  }
  if (!Array.isArray(plan.step_ids) || plan.step_ids.length < 1 || plan.step_ids.length > 3) {
    return false
  }
  return (
    new Set(plan.step_ids).size === plan.step_ids.length &&
    plan.step_ids.every((step) => BASIC_SUPPORT_STEP_IDS.includes(step as BasicSupportStepId))
  )
}

export function renderBasicSupportPlan(value: unknown) {
  if (!isBasicSupportPlan(value)) return null
  const steps = value.step_ids.map((step, index) => `${index + 1}. ${BASIC_SUPPORT_STEPS[step]}`)
  return `${value.intro.trim()}\n\n${steps.join('\n')}\n\nWenn das nicht hilft, prüft Andrej das gern persönlich. Du erreichst ihn unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.`
}

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
