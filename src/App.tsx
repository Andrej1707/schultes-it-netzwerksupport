import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  ChevronRight,
  CircleDot,
  Code2,
  GitBranch,
  Globe2,
  Laptop,
  Menu,
  Network,
  Phone,
  Radio,
  Router,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Variants } from 'framer-motion'

const phoneDisplay = '+49 1523 3364752'
const phoneHref = 'tel:+4915233364752'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: Laptop,
    title: 'PC & System',
    description:
      'Wenn Windows streikt, Software nervt oder ein Gerät sauber eingerichtet werden soll: Problem eingrenzen, verständlich erklären, lösen.',
    tags: ['Windows', 'Software', 'Einrichtung'],
  },
  {
    icon: Router,
    title: 'Netzwerk & WLAN',
    description:
      'Stabiles WLAN, Router-Konfiguration und ein Heim- oder Firmennetz, das nicht genau dann aussteigt, wenn es gebraucht wird.',
    tags: ['WLAN', 'Router', 'Heimnetz'],
  },
  {
    icon: Globe2,
    title: 'Webseiten',
    description:
      'Schnelle, moderne Webseiten für lokale Unternehmen. Klar positioniert, mobil stark und ohne austauschbaren Baukasten-Look.',
    tags: ['Konzept', 'Frontend', 'Launch'],
  },
  {
    icon: Bot,
    title: 'Tools & Automation',
    description:
      'Kleine digitale Werkzeuge, Automationen und moderne KI-/Agenten-Projekte, die wiederkehrende Arbeit wirklich abnehmen.',
    tags: ['Workflows', 'KI', 'Prototypen'],
  },
]

const diagnostics = [
  'ANALYSE  Verbindung und Fehlerbild erfassen',
  'PRÜFUNG  Ursache von Symptomen trennen',
  'LÖSUNG   Den praktikabelsten Weg umsetzen',
  'STATUS   System stabil · Übergabe verständlich',
]

const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
    <a className="brand" href="#top" aria-label="Schultes IT & Netzwerksupport – Startseite">
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diagnosticIndex, setDiagnosticIndex] = useState(0)
  const reduceMotion = useReducedMotion()
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

      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#arbeitsweise">Arbeitsweise</a>
          <a href="#andrej">Über Andrej</a>
        </nav>
        <a className="header-call" href={phoneHref}>
          <Phone size={16} aria-hidden="true" />
          <span>{phoneDisplay}</span>
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
          ['Arbeitsweise', '#arbeitsweise'],
          ['Über Andrej', '#andrej'],
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
          <motion.div className="hero-content" style={{ y: heroLift, opacity: heroFade }}>
            <div className="hero-kicker">
              <span className="live-dot" />
              Verfügbar in Ludwigsburg
              <span className="kicker-code">SYS/LB/07141</span>
            </div>

            <h1>
              Technik,
              <br />
              die <span>funktioniert.</span>
            </h1>

            <div className="hero-lower">
              <p className="hero-intro">
                IT-Support, Netzwerke, Webseiten und smarte Tools. Direkt, verständlich und
                lösungsorientiert – für Privatpersonen und kleine Unternehmen.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href={phoneHref}>
                  <span>
                    Problem besprechen
                    <small>{phoneDisplay}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-action" href="#leistungen">
                  System erkunden <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="diagnostic-console"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
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
            initial="hidden"
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

          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  className="service-row"
                  key={service.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
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
                </motion.article>
              )
            })}
          </div>

          <div className="support-band">
            <div>
              <Radio aria-hidden="true" />
              <span>
                <small>SUPPORT-KANAL</small>
                Vor Ort in Ludwigsburg oder per Remote-Hilfe
              </span>
            </div>
            <a href={phoneHref}>
              Verbindung herstellen <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="process section-shell" id="arbeitsweise">
          <div className="process-grid">
            <motion.div
              className="process-copy"
              variants={reveal}
              initial="hidden"
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

            <div className="process-path">
              {[
                ['01', 'Verstehen', 'Was passiert wirklich – und was ist nur das sichtbare Symptom?'],
                ['02', 'Eingrenzen', 'Strukturiert prüfen, statt wahllos Einstellungen zu verändern.'],
                ['03', 'Lösen', 'Die sinnvollste Lösung umsetzen, testen und verständlich übergeben.'],
              ].map(([number, title, copy], index) => (
                <motion.div
                  className="process-step"
                  key={number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.45 }}
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
            </div>
          </div>
        </section>

        <section className="about section-shell" id="andrej">
          <motion.div
            className="about-panel"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="about-identity">
              <div className="identity-orbit" aria-hidden="true">
                <span className="initials">AS</span>
                <span className="orbit-dot" />
              </div>
              <div>
                <span className="section-number">04 / PERSON</span>
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
          </motion.div>
        </section>

        <section className="final-cta section-shell">
          <motion.div
            className="cta-frame"
            variants={reveal}
            initial="hidden"
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
                {phoneDisplay}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="cta-spark" aria-hidden="true">
              <Sparkles />
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />
        <div className="footer-meta">
          <span>Ludwigsburg, Deutschland</span>
          <span>© {new Date().getFullYear()} Andrej Schultes</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Andrej1707" target="_blank" rel="noreferrer">
            <GitBranch aria-hidden="true" /> GitHub
          </a>
          <a href={phoneHref}>
            <Phone aria-hidden="true" /> Kontakt
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
