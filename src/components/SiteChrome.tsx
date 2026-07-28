import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeEuro,
  Bot,
  Building2,
  ChevronRight,
  FileText,
  GitBranch,
  Globe2,
  Home,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Router,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import {
  getServicePath,
  nationalRemotePages,
  primaryServicePages,
  topicPages,
} from '../content/services'
import type { ServiceIconName } from '../content/types'
import { siteConfig } from '../site/config'

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  laptop: Laptop,
  router: Router,
  globe: Globe2,
  bot: Bot,
}

const services = primaryServicePages.map((service) => ({
  ...service,
  icon: serviceIcons[service.icon],
  href: getServicePath(service),
}))

const topicServices = topicPages.map((service) => ({
  ...service,
  icon: serviceIcons[service.icon],
  href: getServicePath(service),
}))

const remoteServices = nationalRemotePages.map((service) => ({
  ...service,
  icon: serviceIcons[service.icon],
  href: getServicePath(service),
}))

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
          if (distance >= 145) continue

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

      nodes.forEach((node) => {
        const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y)
        context.fillStyle =
          pointerDistance < 180 ? 'rgba(107, 230, 255, .78)' : 'rgba(126, 178, 215, .26)'
        context.beginPath()
        context.arc(node.x, node.y, pointerDistance < 180 ? 1.8 : 1, 0, Math.PI * 2)
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

export function Logo() {
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

export function ShortcutMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const menuRef = useRef<HTMLElement>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!open) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const focusableSelector = 'a[href], button:not([disabled])'
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus()
    }, 80)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeRef.current()
        return
      }
      if (event.key !== 'Tab' || !menuRef.current) return

      const trigger = document.querySelector<HTMLElement>(
        '[aria-controls="shortcut-menu"][aria-expanded="true"]',
      )
      const menuLinks = [...menuRef.current.querySelectorAll<HTMLElement>(focusableSelector)]
      const focusable = trigger ? [trigger, ...menuLinks] : menuLinks
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [open])

  const quickLinks = [
    [BadgeEuro, 'Fernwartung deutschlandweit', '/fernwartung/'],
    [MapPin, 'Standorte & Hilfe vor Ort', '/standorte/'],
    [UserRound, 'Über Schultes IT', '/ueber-schultes-it/'],
    [Building2, 'Standortinhaber werden', '/standortinhaber-werden/'],
  ] as const

  return (
    <motion.nav
      ref={menuRef}
      id="shortcut-menu"
      className="shortcut-menu"
      aria-label="Schnellnavigation"
      aria-hidden={!open}
      inert={!open}
      initial={false}
      animate={open ? 'open' : 'closed'}
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
      <div className="shortcut-menu-shell">
        <div className="shortcut-menu-intro">
          <span>NAVIGATION / DIREKTZUGRIFF</span>
          <h2>Wohin möchtest du?</h2>
          <p>Direkt zur passenden Hilfe, zu Standorten oder zum Kontakt.</p>
          <a className="shortcut-home" href="/" onClick={onClose}>
            <Home aria-hidden="true" /> Startseite <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="shortcut-menu-content">
          <section className="shortcut-menu-section" aria-labelledby="shortcut-help-title">
            <header>
              <span>01 / HILFE FINDEN</span>
              <p id="shortcut-help-title">Direkt zur passenden Leistungsseite</p>
            </header>
            <div className="shortcut-service-grid">
              {services.map((service) => {
                const ServiceIcon = service.icon
                return (
                  <a key={service.href} href={service.href} onClick={onClose}>
                    <span className="shortcut-code">{service.code}</span>
                    <ServiceIcon aria-hidden="true" />
                    <span>
                      <strong>{service.title}</strong>
                      <small>{service.shortTitle}</small>
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </section>

          <section className="shortcut-menu-section shortcut-topics" aria-labelledby="shortcut-remote-title">
            <header>
              <span>02 / FERNWARTUNG</span>
              <p id="shortcut-remote-title">Deutschlandweite Hilfe ohne Anfahrt</p>
            </header>
            <div className="shortcut-topic-list">
              {remoteServices.map((service) => {
                const RemoteIcon = service.icon
                return (
                  <a key={service.href} href={service.href} onClick={onClose}>
                    <RemoteIcon aria-hidden="true" />
                    <span>{service.title}</span>
                    <ChevronRight aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </section>

          <section className="shortcut-menu-section shortcut-topics" aria-labelledby="shortcut-topics-title">
            <header>
              <span>03 / HÄUFIG GESUCHT</span>
              <p id="shortcut-topics-title">Konkrete Hilfe für typische Probleme</p>
            </header>
            <div className="shortcut-topic-list">
              {topicServices.map((service) => {
                const TopicIcon = service.icon
                return (
                  <a key={service.href} href={service.href} onClick={onClose}>
                    <TopicIcon aria-hidden="true" />
                    <span>{service.title}</span>
                    <ChevronRight aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </section>

          <div className="shortcut-menu-lower">
            <section className="shortcut-menu-section" aria-labelledby="shortcut-more-title">
              <header>
                <span>04 / MEHR</span>
                <p id="shortcut-more-title">Weitere Schnellzugriffe</p>
              </header>
              <div className="shortcut-link-list">
                {quickLinks.map(([Icon, label, href]) => (
                  <a key={href} href={href} onClick={onClose}>
                    <Icon aria-hidden="true" /> {label} <ChevronRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>

            <section className="shortcut-menu-section shortcut-contact" aria-labelledby="shortcut-contact-title">
              <header>
                <span>05 / DIREKT</span>
                <p id="shortcut-contact-title">Problem kurz besprechen</p>
              </header>
              <a href={siteConfig.phoneHref} onClick={onClose}>
                <Phone aria-hidden="true" />
                <span><small>ANRUFEN</small>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} onClick={onClose}>
                <Mail aria-hidden="true" />
                <span><small>E-MAIL</small>Nachricht schreiben</span>
              </a>
            </section>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Logo />
      <div className="footer-meta">
        <span>Deutschlandweit · Standort Ludwigsburg</span>
        <span>© {new Date().getFullYear()} Andrej Schultes</span>
      </div>
      <div className="footer-links">
        {[...primaryServicePages, ...nationalRemotePages].map((service) => (
          <a key={service.slug} href={getServicePath(service)}>
            {service.shortTitle}
          </a>
        ))}
        <a href="/standorte/">Standorte</a>
        <a href="/ratgeber/">Ratgeber</a>
        <a href="/ueber-schultes-it/">Über Schultes IT</a>
        <a href="https://github.com/Andrej1707" target="_blank" rel="noreferrer">
          <GitBranch aria-hidden="true" /> GitHub
        </a>
        <a href="/impressum/">
          <FileText aria-hidden="true" /> Impressum
        </a>
        <a href="/datenschutz/">
          <LockKeyhole aria-hidden="true" /> Datenschutz
        </a>
        <span className="footer-private" data-nosnippet>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail aria-hidden="true" /> E-Mail
          </a>
        </span>
      </div>
    </footer>
  )
}
