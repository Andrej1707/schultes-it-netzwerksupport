import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeEuro,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck2,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  FileSearch,
  FileText,
  GitBranch,
  Globe2,
  Laptop,
  Languages,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Radio,
  ReceiptText,
  Router,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Workflow,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Variants } from 'framer-motion'
import {
  servicePageBySlug,
  servicePages,
  type ServiceIconName,
  type ServicePageData,
} from './serviceCatalog'

const phoneParts = ['+49', '1523', '3364752']
const phoneDisplay = phoneParts.join(' ')
const phoneHref = `tel:${phoneParts.join('')}`
const phoneCopy = phoneDisplay
const email = ['it.schulteslb', 'gmail.com'].join('@')
const address = 'Egerländer Str. 24, 71638 Ludwigsburg'
const mapsUrl = 'https://maps.app.goo.gl/9riyhNzidDpzvynd8'
const mapsEmbedUrl = 'https://www.google.com/maps?q=48.8886228%2C9.2064228&z=17&output=embed'

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  laptop: Laptop,
  router: Router,
  globe: Globe2,
  bot: Bot,
}

const services = servicePages.map((service) => ({
  ...service,
  icon: serviceIcons[service.icon],
  href: `/${service.slug}/`,
}))

const googleProfileServices = [
  'PC-Probleme',
  'Software-Probleme',
  'Netzwerkprobleme',
  'Einrichtung',
  'Fehlerbehebung',
  'Technische Hilfe im Alltag',
]

const googleProfileOptions = [
  [CalendarCheck2, 'Onlinetermine möglich'],
  [MapPin, 'Service bei dir vor Ort'],
  [Languages, 'Unterstützung in weiteren Sprachen'],
] as const

const diagnostics = [
  'ANALYSE  Verbindung und Fehlerbild erfassen',
  'PRÜFUNG  Ursache von Symptomen trennen',
  'LÖSUNG   Den praktikabelsten Weg umsetzen',
  'STATUS   System stabil · Übergabe verständlich',
]

const projects = [
  {
    code: 'RP/01',
    icon: Workflow,
    title: 'ReviewPilot',
    type: 'Workflow-Agent · Konzept',
    description:
      'Ein strukturierter Ansatz für lokale Lead-Recherche, Kontaktverwaltung und Akquise-Workflows. Nicht blind automatisieren, sondern Informationen vorbereiten, sortieren und handhabbar machen.',
    outcome: 'Aus verstreuten Schritten wird ein nachvollziehbarer Prozess.',
    tags: ['Recherche', 'CRM-Logik', 'Agenten'],
  },
  {
    code: 'ER/02',
    icon: ReceiptText,
    title: 'E-Rechnung Zahlungshelfer',
    type: 'Desktop-App · Prototyp',
    description:
      'PDF-, XML- und E-Rechnungen erkennen, Zahlungsdaten extrahieren und den nächsten Schritt verständlich vorbereiten. Entwickelt aus einem echten Alltagsproblem.',
    outcome: 'Weniger Übertragen, weniger Fehler, mehr Übersicht.',
    tags: ['Dokumente', 'Datenextraktion', 'Desktop'],
  },
  {
    code: 'BMA/03',
    icon: FileSearch,
    title: 'BMA Screenshot Analyzer',
    type: 'Analyse-Tool · Prototyp',
    description:
      'Ein Werkzeug zur Analyse und Dokumentation technischer Screenshots aus Anlagenumgebungen – mit Fokus auf wiederkehrende, saubere Dokumentationsarbeit.',
    outcome: 'Technische Informationen schneller erfassen und konsistent festhalten.',
    tags: ['Analyse', 'Dokumentation', 'Praxis'],
  },
  {
    code: 'AI/04',
    icon: BrainCircuit,
    title: 'Lokale KI-Systeme',
    type: 'Experimente · In Entwicklung',
    description:
      'Prototypen mit lokal laufender KI, Memory, Websuche und Assistenzlogik. Der interessante Teil beginnt dort, wo KI nicht nur antwortet, sondern einen echten Workflow unterstützt.',
    outcome: 'KI als Werkzeug einsetzen, nicht als Showeffekt.',
    tags: ['Local AI', 'Memory', 'Automation'],
  },
]

const capabilities = [
  {
    domain: 'Support & Systeme',
    icon: Laptop,
    skills: [
      ['Fehleranalyse', 'praxis'],
      ['Windows & Software', 'praxis'],
      ['Geräteeinrichtung', 'praxis'],
      ['Verständliche Übergabe', 'fokus'],
    ],
  },
  {
    domain: 'Netzwerk',
    icon: Network,
    skills: [
      ['WLAN & Router', 'praxis'],
      ['Heim- und Kleinfirmennetze', 'praxis'],
      ['Strukturierte Diagnose', 'fokus'],
      ['Systemzusammenhänge', 'fokus'],
    ],
  },
  {
    domain: 'Build & Web',
    icon: Code2,
    skills: [
      ['React & TypeScript', 'praxis'],
      ['Responsive Interfaces', 'praxis'],
      ['Tools & Prototypen', 'fokus'],
      ['Deployment', 'praxis'],
    ],
  },
  {
    domain: 'Automation & KI',
    icon: Cpu,
    skills: [
      ['Workflow-Design', 'fokus'],
      ['KI-/Agenten-Prototypen', 'ausbau'],
      ['Lokale Systeme', 'ausbau'],
      ['Prozessvereinfachung', 'fokus'],
    ],
  },
]

const chapters = [
  ['top', 'Start'],
  ['leistungen', 'Support'],
  ['preise', 'Preise'],
  ['arbeitsweise', 'System'],
  ['projekte', 'Build'],
  ['kompetenzen', 'Skills'],
  ['andrej', 'Andrej'],
  ['ludwigsburg', 'Lokal'],
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const serviceHeroSequence: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.09 },
  },
}

const serviceHeroItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

const serviceTitleLine: Variants = {
  hidden: { opacity: 0, y: '58%', rotateX: -12, filter: 'blur(9px)' },
  visible: {
    opacity: 1,
    y: '0%',
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.88, ease: [0.16, 1, 0.3, 1] },
  },
}

const servicePanelReveal: Variants = {
  hidden: { opacity: 0, x: 46, scale: 0.965, rotateY: -5, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
}

const serviceGridReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.085, delayChildren: 0.04 },
  },
}

const serviceCardReveal: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.985, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = canvas.getContext('2d')
    if (!context) return

    let frame = 0
    let width = window.innerWidth
    let height = window.innerHeight
    let pointer = { x: width * 0.68, y: height * 0.34 }
    const nodeCount = Math.min(58, Math.max(28, Math.floor(width / 24)))
    const nodes = Array.from({ length: nodeCount }, (_, index) => ({
      x: (Math.sin(index * 12.9898) * 0.5 + 0.5) * width,
      y: (Math.sin(index * 78.233 + 2) * 0.5 + 0.5) * height,
      vx: Math.sin(index * 1.7) * 0.09,
      vy: Math.cos(index * 2.1) * 0.09,
    }))

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < -20 || node.x > width + 20) node.vx *= -1
        if (node.y < -20 || node.y > height + 20) node.vy *= -1
      })

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)
          if (distance < 145) {
            const pointerDistance = Math.min(
              Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y),
              480,
            )
            const alpha = (1 - distance / 145) * (0.05 + (1 - pointerDistance / 480) * 0.14)
            context.strokeStyle = `rgba(78, 210, 255, ${alpha})`
            context.lineWidth = 0.75
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y)
        const radius = pointerDistance < 180 ? 1.8 : 1
        context.fillStyle =
          pointerDistance < 180 ? 'rgba(107, 230, 255, .78)' : 'rgba(126, 178, 215, .26)'
        context.beginPath()
        context.arc(node.x, node.y, radius, 0, Math.PI * 2)
        context.fill()
      })

      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />
}

function Logo() {
  return (
    <a className="brand" href="/" aria-label="Schultes IT & Netzwerksupport – Startseite">
      <span className="brand-mark" aria-hidden="true">
        <span>S</span>
      </span>
      <span className="brand-copy">
        <strong>Schultes</strong>
        <small>IT & Netzwerksupport</small>
      </span>
    </a>
  )
}

type LegalPage = 'impressum' | 'datenschutz'

function LegalLayout({ page }: { page: LegalPage }) {
  const isImprint = page === 'impressum'

  useEffect(() => {
    document.body.dataset.legalPage = 'true'
    document.title = `${isImprint ? 'Impressum' : 'Datenschutz'} | Schultes IT & Netzwerksupport`
    const scrollTimer = window.setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      window.clearTimeout(scrollTimer)
      delete document.body.dataset.legalPage
      document.title = 'IT-Support Ludwigsburg | Schultes IT & Netzwerksupport'
    }
  }, [isImprint])

  return (
    <>
      <a className="skip-link" href="#legal-main">
        Zum Inhalt springen
      </a>
      <NetworkCanvas />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="site-header legal-header">
        <Logo />
        <a className="legal-back" href="/">
          <ArrowDownRight aria-hidden="true" />
          Zur Startseite
        </a>
      </header>

      <main className="legal-page" id="legal-main">
        <header className="legal-hero">
          <span className="section-number">
            {isImprint ? 'LEGAL NODE / 01' : 'LEGAL NODE / 02'}
          </span>
          <div className="legal-icon" aria-hidden="true">
            {isImprint ? <FileText /> : <LockKeyhole />}
          </div>
          <h1>{isImprint ? 'Impressum' : 'Datenschutz'}</h1>
          <p>
            {isImprint
              ? 'Klare Angaben zur verantwortlichen Person hinter Schultes IT & Netzwerksupport.'
              : 'Transparent erklärt: welche Daten beim Besuch dieser Website verarbeitet werden und warum.'}
          </p>
          <nav className="legal-switch" aria-label="Rechtliche Seiten">
            <a href="/#/impressum" aria-current={isImprint ? 'page' : undefined}>
              Impressum
            </a>
            <a href="/#/datenschutz" aria-current={!isImprint ? 'page' : undefined}>
              Datenschutz
            </a>
          </nav>
        </header>

        {isImprint ? <ImprintContent /> : <PrivacyContent />}
      </main>

      <SiteFooter />
    </>
  )
}

function ImprintContent() {
  return (
    <div className="legal-content">
      <section>
        <span>01 / ANBIETER</span>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          <strong>Schultes IT & Netzwerksupport</strong>
          <br />
          Inhaber: Andrej Schultes
          <br />
          Egerländer Str. 24
          <br />
          71638 Ludwigsburg
          <br />
          Deutschland
        </address>
      </section>

      <section>
        <span>02 / KONTAKT</span>
        <h2>Direkter Kontakt</h2>
        <p>
          <span data-nosnippet>
            Telefon: <a href={phoneHref}>{phoneDisplay}</a>
          </span>
          <br />
          <span data-nosnippet>
            E-Mail: <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      </section>

      <section>
        <span>03 / INHALT</span>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Andrej Schultes
          <br />
          {address}
        </p>
      </section>

      <section>
        <span>04 / STREITBEILEGUNG</span>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <span>05 / HAFTUNG</span>
        <h2>Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich
          keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber verantwortlich.
        </p>
      </section>
    </div>
  )
}

function PrivacyContent() {
  return (
    <div className="legal-content privacy-content">
      <section>
        <span>01 / VERANTWORTLICH</span>
        <h2>Verantwortliche Stelle</h2>
        <address>
          <strong>Andrej Schultes</strong>
          <br />
          Schultes IT & Netzwerksupport
          <br />
          Egerländer Str. 24
          <br />
          71638 Ludwigsburg
          <br />
          Deutschland
        </address>
        <p>
          <span data-nosnippet>
            Telefon: <a href={phoneHref}>{phoneDisplay}</a>
          </span>
          <br />
          <span data-nosnippet>
            E-Mail: <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      </section>

      <section>
        <span>02 / HOSTING</span>
        <h2>Bereitstellung über GitHub Pages</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist GitHub, Inc., 88 Colin
          P Kelly Jr Street, San Francisco, CA 94107, USA. Beim Aufruf verarbeitet GitHub technisch
          erforderliche Verbindungsdaten. Nach Angaben von GitHub wird insbesondere die IP-Adresse
          zu Sicherheitszwecken protokolliert und gespeichert.
        </p>
        <p>
          Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung dieser Website auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren,
          performanten und manipulationsgeschützten Betrieb des Webangebots. Eine Übermittlung in die
          USA kann dabei nicht ausgeschlossen werden.
        </p>
        <p>
          Mehr Informationen:{' '}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von GitHub <ExternalLink aria-hidden="true" />
          </a>
        </p>
      </section>

      <section>
        <span>03 / KONTAKTAUFNAHME</span>
        <h2>Telefon und E-Mail</h2>
        <p>
          Wenn du telefonisch oder per E-Mail Kontakt aufnimmst, werden die von dir übermittelten
          Angaben verarbeitet, um deine Anfrage zu beantworten und mögliche Anschlussfragen zu
          klären.
        </p>
        <p>
          Soweit deine Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist,
          erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. In allen anderen
          Fällen beruht sie auf Art. 6 Abs. 1 lit. f DSGVO und dem berechtigten Interesse an einer
          effizienten Kommunikation. Die Daten werden gelöscht, sobald die Anfrage abschließend
          bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <span>04 / GOOGLE MAPS</span>
        <h2>Karte nur nach Einwilligung</h2>
        <p>
          Die interaktive Google-Karte wird beim ersten Seitenaufruf nicht geladen. Erst wenn du
          aktiv auf „Google Maps laden“ klickst, wird eine Verbindung zu Google hergestellt.
          Anbieter für Nutzerinnen und Nutzer im Europäischen Wirtschaftsraum ist Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Dabei können insbesondere IP-Adresse, Geräte- und Browserinformationen, Zeitpunkt,
          Referrer-URL sowie Interaktionen mit der Karte an Google übertragen werden. Bist du bei
          Google angemeldet, können die Daten deinem Konto zugeordnet werden. Eine Verarbeitung in
          den USA ist möglich.
        </p>
        <p>
          Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1
          TDDDG. Du kannst die Karte jederzeit über „Karte deaktivieren“ wieder entfernen. Bereits
          erfolgte Übertragungen werden dadurch nicht rückgängig gemacht.
        </p>
        <p>
          Mehr Informationen:{' '}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">
            Datenschutzerklärung von Google <ExternalLink aria-hidden="true" />
          </a>
        </p>
      </section>

      <section>
        <span>05 / LOKALE FUNKTIONEN</span>
        <h2>Zwischenablage und externe Links</h2>
        <p>
          Die Funktion „Telefonnummer kopieren“ nutzt ausschließlich die lokale
          Zwischenablage-Funktion deines Browsers. Dabei werden keine Daten an mich oder einen
          Analysedienst übermittelt. Externe Angebote wie Google Maps oder GitHub werden erst
          aufgerufen, wenn du den jeweiligen Link aktiv anklickst.
        </p>
      </section>

      <section>
        <span>06 / TRACKING</span>
        <h2>Keine Analyse und keine Werbe-Cookies</h2>
        <p>
          Auf dieser Website werden keine Analyse-, Marketing- oder Profiling-Dienste eingesetzt.
          Es werden durch diese Website keine Werbe-Cookies gesetzt. Externe Schriftarten werden
          nicht geladen.
        </p>
      </section>

      <section>
        <span>07 / DEINE RECHTE</span>
        <h2>Betroffenenrechte</h2>
        <p>
          Du hast im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine
          erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde. Für
          nichtöffentliche Stellen in Baden-Württemberg ist insbesondere der Landesbeauftragte für
          den Datenschutz und die Informationsfreiheit Baden-Württemberg zuständig.
        </p>
      </section>

      <section>
        <span>08 / STAND</span>
        <h2>Stand dieser Erklärung</h2>
        <p>14. Juni 2026</p>
      </section>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Logo />
      <div className="footer-meta">
        <span>Ludwigsburg, Deutschland</span>
        <span>© {new Date().getFullYear()} Andrej Schultes</span>
      </div>
      <div className="footer-links">
        {servicePages.map((service) => (
          <a key={service.slug} href={`/${service.slug}/`}>
            {service.shortTitle}
          </a>
        ))}
        <a href="https://github.com/Andrej1707" target="_blank" rel="noreferrer">
          <GitBranch aria-hidden="true" /> GitHub
        </a>
        <a href="/#/impressum">
          <FileText aria-hidden="true" /> Impressum
        </a>
        <a href="/#/datenschutz">
          <LockKeyhole aria-hidden="true" /> Datenschutz
        </a>
        <span className="footer-private" data-nosnippet>
          <a href={`mailto:${email}`}>
            <Mail aria-hidden="true" /> E-Mail
          </a>
        </span>
      </div>
    </footer>
  )
}

function ServicePage({ service }: { service: ServicePageData }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroLift = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : -54])
  const Icon = serviceIcons[service.icon]
  const motionInitial = reduceMotion ? false : 'hidden'

  useEffect(() => {
    document.body.dataset.servicePage = service.slug
    document.body.dataset.menuOpen = menuOpen ? 'true' : 'false'
    document.title = service.seoTitle

    return () => {
      delete document.body.dataset.servicePage
      delete document.body.dataset.menuOpen
    }
  }, [menuOpen, service.seoTitle, service.slug])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneCopy)
    } catch {
      const input = document.createElement('textarea')
      input.value = phoneCopy
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const relatedServices = service.related
    .map((slug) => servicePageBySlug[slug])
    .filter((entry): entry is ServicePageData => Boolean(entry))

  return (
    <>
      <a className="skip-link" href="#service-main">
        Zum Inhalt springen
      </a>
      <NetworkCanvas />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true">
        <motion.span style={{ scaleY: scrollYProgress }} />
      </div>

      <header className="site-header service-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="/#leistungen">Leistungen</a>
          <a href="/#preise">Preise</a>
          <a href="/#andrej">Über Andrej</a>
          <a href="#service-contact">Kontakt</a>
        </nav>
        <a className="header-call" href={phoneHref}>
          <Phone size={16} aria-hidden="true" />
          <span data-nosnippet>{phoneDisplay}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <motion.nav
        className="mobile-nav"
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            visibility: 'visible',
            clipPath: 'inset(0 0 0 0)',
            pointerEvents: 'auto',
          },
          closed: {
            opacity: 0,
            visibility: 'hidden',
            clipPath: 'inset(0 0 100% 0)',
            pointerEvents: 'none',
          },
        }}
      >
        {[
          ['Startseite', '/'],
          ['Alle Leistungen', '/#leistungen'],
          ['Preise', '/#preise'],
          ['Über Andrej', '/#andrej'],
          ['Kontakt', '#service-contact'],
          ['Direkt anrufen', phoneHref],
        ].map(([label, href], index) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </motion.nav>

      <main className="service-page" id="service-main">
        <section className="service-detail-hero">
          <motion.div
            className="service-detail-hero-copy"
            style={{ y: heroLift }}
            variants={serviceHeroSequence}
            initial={motionInitial}
            animate="visible"
          >
            <motion.nav
              className="service-breadcrumb"
              aria-label="Brotkrümelnavigation"
              variants={serviceHeroItem}
            >
              <a href="/">Startseite</a>
              <ChevronRight aria-hidden="true" />
              <a href="/#leistungen">Leistungen</a>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">{service.title}</span>
            </motion.nav>
            <motion.span className="service-detail-code" variants={serviceHeroItem}>
              {service.code}
            </motion.span>
            <motion.h1 variants={serviceHeroSequence}>
              <motion.span className="service-hero-primary" variants={serviceTitleLine}>
                {service.heroLead}
              </motion.span>
              <motion.span variants={serviceTitleLine}>{service.heroAccent}</motion.span>
            </motion.h1>
            <motion.p variants={serviceHeroItem}>{service.heroText}</motion.p>
            <motion.div className="service-detail-actions" variants={serviceHeroItem}>
              <a className="primary-action" href={phoneHref}>
                <span>
                  Problem besprechen
                  <small data-nosnippet>{phoneDisplay}</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-action" href="#was-ich-loese">
                Leistungen ansehen <ArrowDownRight aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            className="service-status-panel"
            variants={servicePanelReveal}
            initial={motionInitial}
            animate="visible"
            aria-label={`Status ${service.title}`}
          >
            <header>
              <span>
                <CircleDot aria-hidden="true" /> SERVICE NODE
              </span>
              <strong>AKTIV</strong>
            </header>
            <div className="service-status-icon" aria-hidden="true">
              <Icon />
              <i />
            </div>
            <dl>
              <div>
                <dt>Bereich</dt>
                <dd>{service.title}</dd>
              </div>
              <div>
                <dt>Region</dt>
                <dd>Ludwigsburg</dd>
              </div>
              <div>
                <dt>Modus</dt>
                <dd>Bei dir / Remote</dd>
              </div>
            </dl>
            <footer>
              <BadgeEuro aria-hidden="true" />
              <span>
                <small>KOSTENRAHMEN</small>
                {service.price}
              </span>
            </footer>
          </motion.aside>
        </section>

        <section className="service-audiences" aria-labelledby="audience-title">
          <header>
            <span className="section-number">01 / FÜR WEN</span>
            <h2 id="audience-title">Technik für Menschen. Nicht für Zielgruppen-Folien.</h2>
          </header>
          <motion.div
            className="audience-grid"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {service.audiences.map((audience, index) => (
              <motion.article
                key={audience.label}
                variants={serviceCardReveal}
              >
                <span>0{index + 1}</span>
                <h3>{audience.label}</h3>
                <p>{audience.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="service-situations service-detail-shell">
          <motion.header
            className="service-detail-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">02 / KOMMT DIR DAS BEKANNT VOR?</span>
            <h2>
              Das Problem beginnt selten
              <span> mit einer klaren Fehlermeldung.</span>
            </h2>
            <p>
              Du musst die Ursache nicht kennen. Eine gute Anfrage darf mit „Es funktioniert einfach
              nicht“ anfangen.
            </p>
          </motion.header>
          <motion.div
            className="situation-grid"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            {service.situations.map((situation, index) => (
              <motion.article
                key={situation.title}
                variants={serviceCardReveal}
              >
                <span>CASE / 0{index + 1}</span>
                <h3>{situation.title}</h3>
                <p>{situation.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="service-solutions service-detail-shell" id="was-ich-loese">
          <motion.header
            className="service-detail-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">03 / LEISTUNGEN</span>
            <h2>
              Konkret helfen.
              <span> Verständlich übergeben.</span>
            </h2>
            <p>
              Der genaue Umfang richtet sich nach deinem Fall. Diese Bausteine zeigen, wobei ich dich
              in diesem Bereich unterstützen kann.
            </p>
          </motion.header>
          <motion.div
            className="solution-list"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            {service.solutions.map((solution, index) => (
              <motion.article
                key={solution.title}
                variants={serviceCardReveal}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Check aria-hidden="true" />
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="service-process service-detail-shell">
          <motion.header
            className="service-detail-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">04 / ABLAUF</span>
            <h2>
              Klarer Prozess.
              <span> Kein Rätselraten.</span>
            </h2>
          </motion.header>
          <motion.div
            className="service-process-track"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {service.process.map((step, index) => (
              <motion.article
                key={step.title}
                variants={serviceCardReveal}
              >
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="service-confidence service-detail-shell">
          <motion.div
            className="confidence-copy"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">05 / VERSPRECHEN</span>
            <ShieldCheck aria-hidden="true" />
            <h2>{service.confidenceTitle}</h2>
            <p>{service.confidenceText}</p>
          </motion.div>
          <motion.div
            className="confidence-points"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {service.confidencePoints.map((point, index) => (
              <motion.div key={point} variants={serviceCardReveal}>
                <span>0{index + 1}</span>
                <Check aria-hidden="true" />
                <strong>{point}</strong>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="service-faq service-detail-shell">
          <motion.header
            className="service-detail-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">06 / HÄUFIGE FRAGEN</span>
            <h2>
              Vorher wissen,
              <span> woran du bist.</span>
            </h2>
          </motion.header>
          <div className="faq-list">
            {service.faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>0{index + 1}</span>
                  {faq.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="related-services service-detail-shell">
          <header>
            <span className="section-number">07 / WEITERE BEREICHE</span>
            <h2>Technikprobleme bleiben selten in einer Schublade.</h2>
          </header>
          <motion.div
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {relatedServices.map((related) => {
              const RelatedIcon = serviceIcons[related.icon]
              return (
                <motion.a
                  key={related.slug}
                  href={`/${related.slug}/`}
                  variants={serviceCardReveal}
                >
                  <RelatedIcon aria-hidden="true" />
                  <span>
                    <small>{related.code}</small>
                    <strong>{related.title}</strong>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>
        </section>

        <section className="service-final-cta service-detail-shell" id="service-contact">
          <div>
            <span className="section-number">08 / DIREKTER KONTAKT</span>
            <h2>
              Erzähl mir nicht die Diagnose.
              <span> Erzähl mir, was nicht funktioniert.</span>
            </h2>
            <p>
              Gemeinsam klären wir, ob Fernhilfe passt, ein Termin bei dir sinnvoll ist oder ein
              anderes Vorgehen ehrlicher wäre.
            </p>
          </div>
          <div className="service-contact-panel">
            <a href={phoneHref}>
              <Phone aria-hidden="true" />
              <span>
                <small>JETZT ANRUFEN</small>
                <strong data-nosnippet>{phoneDisplay}</strong>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={`mailto:${email}`}>
              <Mail aria-hidden="true" />
              <span>
                <small>PER E-MAIL</small>
                <strong data-nosnippet>{email}</strong>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <p>
              <Clock3 aria-hidden="true" /> Montag–Freitag 08:00–20:00 · Samstag–Sonntag 09:00–17:00
            </p>
          </div>
        </section>
      </main>

      <div className="mobile-contact-dock" aria-label="Schnellkontakt">
        <a href={phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>JETZT ANRUFEN</small>
            <span data-nosnippet>{phoneDisplay}</span>
          </span>
        </a>
        <button type="button" onClick={copyPhoneNumber} aria-label="Telefonnummer kopieren">
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          <span>{copied ? 'Kopiert' : 'Kopieren'}</span>
        </button>
      </div>

      <SiteFooter />
    </>
  )
}

function MarketingApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diagnosticIndex, setDiagnosticIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [mapsEnabled, setMapsEnabled] = useState(false)
  const [activeChapter, setActiveChapter] = useState('top')
  const reduceMotion = useReducedMotion()
  const motionInitial = reduceMotion ? false : 'hidden'
  const { scrollYProgress } = useScroll()
  const heroLift = useTransform(scrollYProgress, [0, 0.22], [0, reduceMotion ? 0 : -72])
  const heroFade = useTransform(scrollYProgress, [0, 0.18], [1, 0.45])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDiagnosticIndex((current) => (current + 1) % diagnostics.length)
    }, 2300)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? 'true' : 'false'
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const sections = chapters
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveChapter(visible.target.id)
      },
      { rootMargin: '-25% 0px -55%', threshold: [0.05, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneCopy)
    } catch {
      const input = document.createElement('textarea')
      input.value = phoneCopy
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <NetworkCanvas />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true">
        <motion.span style={{ scaleY: scrollYProgress }} />
      </div>
      <div className="chapter-indicator" aria-hidden="true">
        <span>{String(chapters.findIndex(([id]) => id === activeChapter) + 1).padStart(2, '0')}</span>
        <i />
        <strong>{chapters.find(([id]) => id === activeChapter)?.[1]}</strong>
      </div>

      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#preise">Preise</a>
          <a href="#projekte">Projekte</a>
          <a href="#kompetenzen">Kompetenzen</a>
          <a href="#andrej">Über Andrej</a>
        </nav>
        <a className="header-call" href={phoneHref}>
          <Phone size={16} aria-hidden="true" />
          <span data-nosnippet>{phoneDisplay}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <motion.nav
        className="mobile-nav"
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            visibility: 'visible',
            clipPath: 'inset(0 0 0 0)',
            pointerEvents: 'auto',
          },
          closed: {
            opacity: 0,
            visibility: 'hidden',
            clipPath: 'inset(0 0 100% 0)',
            pointerEvents: 'none',
          },
        }}
      >
        {[
          ['Leistungen', '#leistungen'],
          ['Preise & Profil', '#preise'],
          ['Arbeitsweise', '#arbeitsweise'],
          ['Projekte', '#projekte'],
          ['Kompetenzen', '#kompetenzen'],
          ['Über Andrej', '#andrej'],
          ['Ludwigsburg', '#ludwigsburg'],
          ['Direkt anrufen', phoneHref],
        ].map(([label, href], index) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </motion.nav>

      <main id="main">
        <section className="hero" id="top">
          <motion.div
            className="hero-content"
            style={{ y: heroLift, opacity: heroFade }}
            variants={serviceHeroSequence}
            initial={motionInitial}
            animate="visible"
          >
            <motion.div className="hero-kicker" variants={serviceHeroItem}>
              <span className="live-dot" />
              Verfügbar in Ludwigsburg
              <span className="kicker-code">SYS/LB/07141</span>
            </motion.div>

            <motion.h1 variants={serviceHeroSequence}>
              <motion.span className="hero-title-line" variants={serviceTitleLine}>
                Technik,
              </motion.span>
              <motion.span className="hero-title-line" variants={serviceTitleLine}>
                die <em>funktioniert.</em>
              </motion.span>
            </motion.h1>

            <motion.div className="hero-lower" variants={serviceHeroItem}>
              <div>
                <p className="hero-intro">
                  IT-Support, Netzwerke, Webseiten und smarte Tools. Direkt, verständlich und
                  lösungsorientiert – für Privatpersonen und kleine Unternehmen.
                </p>
                <p className="hero-visit-note">
                  <MapPin aria-hidden="true" /> Bei Vor-Ort-Terminen komme ich zu dir.
                </p>
              </div>
              <div className="hero-actions">
                <a className="primary-action" href={phoneHref}>
                  <span>
                    Problem besprechen
                    <small data-nosnippet>{phoneDisplay}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-action" href="#leistungen">
                  System erkunden <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.aside
            className="diagnostic-console"
            variants={servicePanelReveal}
            initial={motionInitial}
            animate="visible"
            aria-label="Live-Diagnose"
          >
            <div className="console-topline">
              <span>
                <Terminal size={14} aria-hidden="true" /> LIVE DIAGNOSTIC
              </span>
              <span className="console-status">ONLINE</span>
            </div>
            <div className="radar">
              <div className="radar-ring ring-one" />
              <div className="radar-ring ring-two" />
              <div className="radar-ring ring-three" />
              <div className="radar-sweep" />
              <div className="radar-core">
                <Network aria-hidden="true" />
              </div>
              <span className="radar-point p1" />
              <span className="radar-point p2" />
              <span className="radar-point p3" />
            </div>
            <div className="diagnostic-output" aria-live="polite">
              <span>0{diagnosticIndex + 1}</span>
              <p>{diagnostics[diagnosticIndex]}</p>
            </div>
            <div className="console-metrics">
              <div>
                <small>FOKUS</small>
                <strong>PRAXIS</strong>
              </div>
              <div>
                <small>MODUS</small>
                <strong>LÖSUNG</strong>
              </div>
              <div>
                <small>REGION</small>
                <strong>LB</strong>
              </div>
            </div>
          </motion.aside>

          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <i />
            <span>COMMAND / CENTER</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Leistungsschwerpunkte">
          <div className="signal-track">
            {[...Array(2)].flatMap((_, group) =>
              ['IT-SUPPORT', 'NETZWERK', 'PC-HILFE', 'WEBSEITEN', 'AUTOMATION', 'REMOTE'].map(
                (item) => (
                  <span key={`${group}-${item}`}>
                    <CircleDot aria-hidden="true" /> {item}
                  </span>
                ),
              ),
            )}
          </div>
        </section>

        <section className="services section-shell" id="leistungen">
          <motion.div
            className="section-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">02 / LEISTUNGEN</span>
            <h2>
              Ein Ansprechpartner.
              <br />
              <span>Mehr als eine Schublade.</span>
            </h2>
            <p>
              Technikprobleme halten sich selten an Kategorien. Deshalb zählt nicht, wie das
              Problem heißt – sondern dass am Ende eine belastbare Lösung steht.
            </p>
          </motion.div>

          <motion.div
            className="service-list"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.a
                  className="service-row"
                  key={service.title}
                  href={service.href}
                  variants={serviceCardReveal}
                >
                  <span className="service-index">0{index + 1}</span>
                  <div className="service-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ChevronRight className="service-arrow" aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>

          <div className="support-band">
            <div>
              <Radio aria-hidden="true" />
              <span>
                <small>SUPPORT-KANAL</small>
                Bei dir vor Ort in Ludwigsburg oder per Remote-Hilfe
              </span>
            </div>
            <a href={phoneHref}>
              Verbindung herstellen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="profile-offer section-shell" id="preise">
          <motion.div
            className="profile-offer-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div>
              <span className="section-number">02B / GOOGLE-PROFIL</span>
              <h2>
                Klare Hilfe.
                <br />
                <span>Klare Einstiegspreise.</span>
              </h2>
            </div>
            <div className="google-proof">
              <div className="google-rating" aria-label="5,0 von 5 Sternen bei 2 Google-Rezensionen">
                <Star aria-hidden="true" />
                <strong>5,0</strong>
                <span>2 Google-Rezensionen</span>
              </div>
              <blockquote>„Super schnelle Hilfe“</blockquote>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Angaben im Google-Profil ansehen <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="profile-offer-grid"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.article
              className="price-terminal"
              variants={serviceCardReveal}
            >
              <header>
                <span><i /> GOOGLE BUSINESS PROFILE</span>
                <small>COMPUTERSUPPORT UND -DIENSTE</small>
              </header>
              <div className="price-row">
                <div>
                  <Radio aria-hidden="true" />
                  <span>
                    <small>REMOTE / FERNWARTUNG</small>
                    Fernhilfe
                  </span>
                </div>
                <strong><small>AB</small> 25 €</strong>
              </div>
              <div className="price-row">
                <div>
                  <MapPin aria-hidden="true" />
                  <span>
                    <small>LUDWIGSBURG / BEI DIR VOR ORT</small>
                    Service bei dir
                  </span>
                </div>
                <strong><small>AB</small> 49 €</strong>
              </div>
              <div className="price-policy">
                <BadgeEuro aria-hidden="true" />
                <p>
                  Weitere Leistungen werden transparent nach Aufwand berechnet. Material- und
                  Zusatzkosten entstehen nur nach vorheriger Absprache.
                </p>
              </div>
            </motion.article>

            <motion.div
              className="profile-service-catalog"
              variants={serviceCardReveal}
            >
              <div className="profile-catalog-head">
                <span>ANGEBOT LAUT GOOGLE-PROFIL</span>
                <strong>Privatkunden & kleine Betriebe</strong>
              </div>
              <div className="profile-service-list">
                {googleProfileServices.map((service, index) => (
                  <div key={service}>
                    <span>0{index + 1}</span>
                    <strong>{service}</strong>
                    <Check aria-hidden="true" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="profile-availability"
              variants={serviceCardReveal}
            >
              <div className="hours-head">
                <Clock3 aria-hidden="true" />
                <span>
                  <small>ERREICHBARKEIT</small>
                  Öffnungszeiten
                </span>
              </div>
              <dl className="hours-list">
                <div>
                  <dt>Montag – Freitag</dt>
                  <dd>08:00 – 20:00</dd>
                </div>
                <div>
                  <dt>Samstag – Sonntag</dt>
                  <dd>09:00 – 17:00</dd>
                </div>
              </dl>
              <div className="profile-options">
                {googleProfileOptions.map(([Icon, option]) => (
                  <div key={option}>
                    <Icon aria-hidden="true" />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              <a href={phoneHref}>
                Termin oder Problem besprechen <ArrowUpRight aria-hidden="true" />
              </a>
            </motion.aside>
          </motion.div>
        </section>

        <section className="process section-shell" id="arbeitsweise">
          <div className="process-grid">
            <motion.div
              className="process-copy"
              variants={reveal}
              initial={motionInitial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="section-number">03 / ARBEITSWEISE</span>
              <h2>Keine Show. Ein System.</h2>
              <p>
                Ich interessiere mich nicht für Lösungen, die nur auf dem Papier funktionieren.
                Mein Ablauf bleibt bewusst klar: verstehen, eingrenzen, lösen – und so erklären,
                dass du danach nicht ratlos vor deiner eigenen Technik sitzt.
              </p>
              <a className="inline-call" href={phoneHref}>
                <Phone aria-hidden="true" />
                Direkt mit Andrej sprechen
                <ArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              className="process-path"
              variants={serviceGridReveal}
              initial={motionInitial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
            >
              {[
                ['01', 'Verstehen', 'Was passiert wirklich – und was ist nur das sichtbare Symptom?'],
                ['02', 'Eingrenzen', 'Strukturiert prüfen, statt wahllos Einstellungen zu verändern.'],
                ['03', 'Lösen', 'Die sinnvollste Lösung umsetzen, testen und verständlich übergeben.'],
              ].map(([number, title, copy], index) => (
                <motion.div
                  className="process-step"
                  key={number}
                  variants={serviceCardReveal}
                >
                  <div className="step-node">
                    <span>{number}</span>
                    {index < 2 && <i />}
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="projects section-shell" id="projekte">
          <motion.div
            className="section-heading project-heading"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="section-number">04 / PROJEKTE</span>
            <h2>
              Mehr als Support.
              <br />
              <span>Ideen werden Systeme.</span>
            </h2>
            <p>
              Andrej verbindet klassisches IT-Verständnis mit Builder-Mentalität: Problem sehen,
              Lösungsidee entwickeln, testen und daraus etwas praktisch Nutzbares bauen.
            </p>
          </motion.div>

          <div className="project-stage">
            <motion.aside
              className="project-manifesto"
              variants={serviceCardReveal}
              initial={motionInitial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="manifesto-label">BUILD PRINCIPLE / 01</span>
              <p>„Ich baue lieber einen funktionierenden Prototypen als eine perfekte Ausrede.“</p>
              <div className="manifesto-signal">
                <Lightbulb aria-hidden="true" />
                Beobachten → vereinfachen → bauen
              </div>
            </motion.aside>

            <motion.div
              className="project-stream"
              variants={serviceGridReveal}
              initial={motionInitial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
            >
              {projects.map((project, index) => {
                const ProjectIcon = project.icon
                return (
                  <motion.article
                    className="project-entry"
                    key={project.code}
                    variants={serviceCardReveal}
                  >
                    <div className="project-code">
                      <span>{project.code}</span>
                      <i>{String(index + 1).padStart(2, '0')}</i>
                    </div>
                    <div className="project-glyph">
                      <ProjectIcon aria-hidden="true" />
                    </div>
                    <div className="project-copy">
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <strong>{project.outcome}</strong>
                    </div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            className="website-project-note"
            variants={serviceCardReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <Globe2 aria-hidden="true" />
            <div>
              <span>WEBSEITEN FÜR LOKALE UNTERNEHMEN</span>
              <p>
                Vertrauen, Mobilansicht und Kontaktaufnahme zuerst. Design ist dabei kein
                Selbstzweck, sondern macht ein Angebot klarer und einfacher erreichbar.
              </p>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </motion.div>
        </section>

        <section className="capability-section section-shell" id="kompetenzen">
          <motion.div
            className="capability-intro"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-number">05 / KOMPETENZMATRIX</span>
            <h2>
              Breites Fundament.
              <br />
              <span>Klarer Praxisfokus.</span>
            </h2>
            <p>
              Keine Fantasie-Prozentwerte. Die Matrix zeigt, wo Andrej bereits praktisch arbeitet,
              wo sein besonderer Fokus liegt und welche Felder er aktiv weiter ausbaut.
            </p>
            <div className="matrix-legend" aria-label="Legende der Kompetenzmatrix">
              <span><i className="level-praxis" /> Praxis</span>
              <span><i className="level-fokus" /> Fokus</span>
              <span><i className="level-ausbau" /> Im Ausbau</span>
            </div>
          </motion.div>

          <motion.div
            className="capability-matrix"
            variants={serviceGridReveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map((capability, index) => {
              const CapabilityIcon = capability.icon
              return (
                <motion.article
                  className="capability-domain"
                  key={capability.domain}
                  variants={serviceCardReveal}
                >
                  <header>
                    <span>0{index + 1}</span>
                    <CapabilityIcon aria-hidden="true" />
                    <h3>{capability.domain}</h3>
                  </header>
                  <div className="capability-rows">
                    {capability.skills.map(([skill, level]) => (
                      <div className="capability-row" key={skill}>
                        <span>{skill}</span>
                        <div className={`signal-level signal-${level}`} aria-label={level}>
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </section>

        <section className="about section-shell" id="andrej">
          <motion.div
            className="about-panel"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="about-identity">
              <div className="identity-orbit" aria-hidden="true">
                <span className="initials">AS</span>
                <span className="orbit-dot" />
              </div>
              <div>
                <span className="section-number">06 / PERSON</span>
                <h2>Andrej Schultes</h2>
                <p>Angehender IT-Systemelektroniker · Builder · Problemlöser</p>
              </div>
            </div>

            <blockquote>
              „Technik muss nicht kompliziert wirken, nur damit sie professionell ist.“
            </blockquote>

            <div className="about-details">
              <p>
                Ich arbeite gern dort, wo Systeme, Menschen und praktische Lösungen
                aufeinandertreffen. Ob Netzwerkfehler, Windows-Problem, Webseite oder kleines
                digitales Tool: Ich lerne mich schnell ein, zerlege komplexe Themen in klare
                Schritte und baue lieber etwas Nutzbares, als lange darüber zu reden.
              </p>
              <div className="strength-grid">
                {[
                  ['Systemisch denken', Network],
                  ['Direkt kommunizieren', Zap],
                  ['Praktisch umsetzen', Wrench],
                  ['Modern entwickeln', Code2],
                ].map(([label, Icon]) => {
                  const StrengthIcon = Icon as LucideIcon
                  return (
                    <span key={label as string}>
                      <StrengthIcon aria-hidden="true" />
                      {label as string}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="personal-depth">
              <div className="personal-statement">
                <span>MEIN BLICK AUF TECHNIK</span>
                <h3>Ein Fehler ist selten nur ein einzelner Fehler.</h3>
                <p>
                  Meistens ist es ein Zusammenspiel aus Gerät, Netzwerk, Software, Nutzung und
                  Erwartung. Genau deshalb denke ich gern in Systemen: Erst das Gesamtbild
                  verstehen, dann an der richtigen Stelle handeln.
                </p>
              </div>
              <div className="builder-sequence">
                {[
                  ['01', 'Neugierig bleiben', 'Neue Themen schnell verstehen und selbst testen.'],
                  ['02', 'Klar zerlegen', 'Komplexität in nachvollziehbare Schritte übersetzen.'],
                  ['03', 'Echt bauen', 'Nicht nur erklären – umsetzen, prüfen und verbessern.'],
                  ['04', 'Nutzbar machen', 'Die Lösung muss im Alltag zuverlässig funktionieren.'],
                ].map(([number, title, copy]) => (
                  <div key={number}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="local-trust section-shell" id="ludwigsburg">
          <motion.div
            className="local-grid"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="map-frame">
              {mapsEnabled ? (
                <iframe
                  title="Standort von Schultes IT & Netzwerksupport"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="map-consent">
                  <ShieldCheck aria-hidden="true" />
                  <span>EXTERNAL SERVICE / GOOGLE MAPS</span>
                  <h3>Karte bleibt privat, bis du sie lädst.</h3>
                  <p>
                    Erst nach deiner Einwilligung wird eine Verbindung zu Google aufgebaut. Dabei
                    können personenbezogene Daten an Google übertragen werden.
                  </p>
                  <button type="button" onClick={() => setMapsEnabled(true)}>
                    Google Maps laden
                  </button>
                  <a href="#/datenschutz">Details im Datenschutz</a>
                </div>
              )}
              <div className="map-hud">
                <span><i /> LOCAL NODE ONLINE</span>
                {mapsEnabled ? (
                  <button type="button" onClick={() => setMapsEnabled(false)}>
                    Karte deaktivieren
                  </button>
                ) : (
                  <strong>SCHULTES IT / LUDWIGSBURG</strong>
                )}
              </div>
            </div>

            <div className="local-copy">
              <span className="section-number">07 / LOKAL ERREICHBAR</span>
              <h2>Support mit einem echten Standort.</h2>
              <p>
                Schultes IT & Netzwerksupport entsteht in Ludwigsburg – als direkte technische
                Anlaufstelle für Menschen und kleine Unternehmen aus der Region. Für Vor-Ort-Termine
                komme ich zu dir nach Hause oder in deinen Betrieb; du musst deine Technik nicht
                erst irgendwohin transportieren.
              </p>
              <p className="maps-presence">Schultes IT & Netzwerksupport auf Google Maps</p>
              <div className="trust-points">
                <div>
                  <MapPin aria-hidden="true" />
                  <span><small>REGION</small>Ludwigsburg & Umgebung</span>
                </div>
                <div>
                  <Building2 aria-hidden="true" />
                  <span><small>FÜR WEN</small>Privat & kleine Unternehmen</span>
                </div>
                <div>
                  <Radio aria-hidden="true" />
                  <span><small>MODUS</small>Bei dir vor Ort & Remote-Hilfe</span>
                </div>
              </div>
              <div className="local-actions">
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  In Google Maps öffnen <ExternalLink aria-hidden="true" />
                </a>
                <button type="button" onClick={copyPhone} className={copied ? 'is-copied' : ''}>
                  {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                  {copied ? 'Nummer kopiert' : 'Telefonnummer kopieren'}
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="final-cta section-shell">
          <motion.div
            className="cta-frame"
            variants={reveal}
            initial={motionInitial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="cta-status">
              <ShieldCheck aria-hidden="true" />
              <span>
                <small>NÄCHSTER SCHRITT</small>
                Verbindung bereit
              </span>
            </div>
            <h2>
              Dein Technikproblem
              <br />
              hat jetzt <span>eine Nummer.</span>
            </h2>
            <p>
              Kurz anrufen, Situation schildern, nächsten sinnvollen Schritt klären. Ohne
              Ticket-Labyrinth und ohne Fachchinesisch.
            </p>
            <a className="cta-call" href={phoneHref}>
              <span className="cta-call-icon">
                <Phone aria-hidden="true" />
              </span>
              <span>
                <small>JETZT ANRUFEN</small>
                <span data-nosnippet>{phoneDisplay}</span>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <button
              className={`cta-copy ${copied ? 'is-copied' : ''}`}
              type="button"
              onClick={copyPhone}
              aria-live="polite"
            >
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copied ? 'Telefonnummer kopiert' : 'Nummer in Zwischenablage kopieren'}
            </button>
            <div className="cta-spark" aria-hidden="true">
              <Sparkles />
            </div>
          </motion.div>
        </section>
      </main>

      <div className="mobile-contact-dock" aria-label="Schnellkontakt">
        <a href={phoneHref}>
          <Phone aria-hidden="true" />
          <span>
            <small>JETZT ANRUFEN</small>
            <span data-nosnippet>{phoneDisplay}</span>
          </span>
        </a>
        <button type="button" onClick={copyPhone} aria-label="Telefonnummer kopieren">
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          <span>{copied ? 'Kopiert' : 'Kopieren'}</span>
        </button>
      </div>

      <SiteFooter />
    </>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const pathSlug = window.location.pathname.split('/').filter(Boolean)[0]
  const servicePage = pathSlug ? servicePageBySlug[pathSlug] : undefined

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  if (hash === '#/impressum') return <LegalLayout page="impressum" />
  if (hash === '#/datenschutz') return <LegalLayout page="datenschutz" />
  if (servicePage) return <ServicePage service={servicePage} />

  return <MarketingApp />
}

export default App
