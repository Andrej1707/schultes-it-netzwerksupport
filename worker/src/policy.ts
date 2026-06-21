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

export function isBasicSupportDialogueFollowUp(message: string) {
  return (
    /\b(hat nicht geholfen|hilft nicht|geht immer noch nicht|funktioniert immer noch nicht|problem besteht|noch immer|weiterhin kaputt|wo ist|wo genau|wo finde|was genau|wie mache|wie geht das|welche taste|welcher knopf|was meinst du|nur ein gerät|mehrere geräte|alle geräte|nur mein|nur der|nur die)\b/i.test(
      message,
    ) || /^(ja|nein|weiß ich nicht|weiss ich nicht|keine ahnung)[.!?\s]*$/i.test(message.trim())
  )
}

export const OUT_OF_SCOPE_REPLY =
  'Dabei kann ich nicht helfen. Ich beantworte nur Fragen zu Schultes IT und gebe höchstens einen sicheren Basischeck wie Neustart, WLAN aus und an oder Router kurz vom Strom trennen. Für alles Weitere erreichst du Andrej direkt unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.'

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
  decision: 'assist' | 'escalate'
  intro: string
  step_ids: BasicSupportStepId[]
  question: string
  closing: string
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

export const BASIC_SUPPORT_ADAPTER_PROMPT = `Du führst einen natürlichen, sicheren Hilfedialog für Schultes IT & Netzwerksupport.
Analysiere die aktuelle Nachricht im Kontext des bisherigen Chats und gib ausschließlich ein JSON-Objekt nach dem vorgegebenen Schema zurück.

ENTSCHEIDUNG
- assist: Bei jedem neu beschriebenen Technikproblem. Wähle 1 bis 3 erlaubte Schritt-IDs und stelle bei Bedarf genau eine kurze Rückfrage.
- escalate: Erst wenn der Nutzer ausdrücklich sagt, dass passende Basisschritte nicht geholfen haben, ein Risiko erkennbar ist oder eine persönliche Prüfung wirklich nötig ist.
- Eine frühere Hilfsantwort, Smalltalk oder eine neue Problembeschreibung ist niemals allein ein Grund für escalate.
- Wenn Details fehlen, entscheide assist, gib mindestens einen universell sicheren Schritt und frage gezielt nach Gerät, Anzeige oder betroffenen Geräten.

FORMULIERUNG
- Schreibe intro, question und closing selbst, natürlich, freundlich und passend zum konkreten Verlauf.
- intro und closing dürfen jeweils höchstens 220 Zeichen, question höchstens 180 Zeichen lang sein.
- Bei assist enthält closing eine kurze Einladung, das Ergebnis oder die Antwort auf die Rückfrage zu schreiben.
- Bei escalate erklärt closing kurz und ohne Druck, warum Andrej persönlich sinnvoll helfen sollte. Kontaktdaten ergänzt der Server.
- Erfinde keine weiteren Anleitungen in den Textfeldern. Gib dort keine Links, Kontaktdaten, Codes, Befehle, Downloads, Registry-, BIOS-, Reparatur- oder Sicherheitshinweise aus.
- Unterscheide instabiles oder schwaches WLAN von einem vollständigen Internetausfall.

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
  if (plan.decision !== 'assist' && plan.decision !== 'escalate') return false
  if (typeof plan.intro !== 'string' || typeof plan.question !== 'string' || typeof plan.closing !== 'string') {
    return false
  }
  const fields = [plan.intro.trim(), plan.question.trim(), plan.closing.trim()]
  if (!fields[0] || !fields[2] || fields[0].length > 220 || fields[1].length > 180 || fields[2].length > 220) {
    return false
  }
  if (
    fields.some((field) =>
      /https?:\/\/|www\.|\+49|@|```|\b(code|powershell|terminal|download|bios|registry|firmware)\b/i.test(field),
    )
  ) return false
  if (!Array.isArray(plan.step_ids) || plan.step_ids.length > 3) return false
  if (plan.decision === 'assist' && plan.step_ids.length < 1) return false
  if (plan.decision === 'escalate' && plan.step_ids.length > 0) return false
  return (
    new Set(plan.step_ids).size === plan.step_ids.length &&
    plan.step_ids.every((step) => BASIC_SUPPORT_STEP_IDS.includes(step as BasicSupportStepId))
  )
}

export function renderBasicSupportPlan(value: unknown) {
  if (!isBasicSupportPlan(value)) return null
  const steps = value.step_ids.map((step, index) => `${index + 1}. ${BASIC_SUPPORT_STEPS[step]}`)
  const parts = [value.intro.trim()]
  if (steps.length > 0) parts.push(steps.join('\n'))
  if (value.question.trim()) parts.push(value.question.trim())
  parts.push(value.closing.trim())
  if (value.decision === 'escalate') {
    parts.push('Du erreichst Andrej unter +49 1523 3364752 oder per E-Mail an it.schulteslb@gmail.com.')
  }
  return { reply: parts.join('\n\n'), escalated: value.decision === 'escalate' }
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
