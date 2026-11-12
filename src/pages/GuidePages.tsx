import { useEffect, useId, useState } from 'react'
import { preload } from 'react-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Search, X } from 'lucide-react'
import type { GuideArticle, GuideCategory, GuidePageData, GuideSummary } from '../content/guides/types'
import type { SitePage } from '../site/types'

const categories: { id: GuideCategory; label: string; short: string; description: string }[] = [
  { id: 'sicherheit', label: 'Sicherheit', short: 'Sicherheit', description: 'Betrug erkennen. Konten schützen. Sicher handeln.' },
  { id: 'windows', label: 'PC & Windows', short: 'PC & Windows', description: 'Probleme eingrenzen und den Computer wieder in Ruhe nutzen.' },
  { id: 'wlan', label: 'Internet & WLAN', short: 'WLAN', description: 'Verbindungen verstehen und dein Zuhause besser vernetzen.' },
  { id: 'daten', label: 'Daten & Backup', short: 'Daten & Backup', description: 'Wichtige Erinnerungen und Dokumente gut aufbewahren.' },
  { id: 'alltag', label: 'Digitaler Alltag', short: 'Alltag', description: 'Drucker, E-Mail und Handy verständlich erklärt.' },
]

function categoryFor(id: GuideCategory) {
  return categories.find((category) => category.id === id)!
}

function guideHref(slug: string) {
  return `/ratgeber/${slug}/`
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${value}T12:00:00Z`))
}

function GuideImage({ image, alt, eager = false, sizes, className = '' }: {
  image: string
  alt: string
  eager?: boolean
  sizes: string
  className?: string
}) {
  const widths = image === 'about-workshop'
    ? [480, 640, 800, 960, 1280, 1920]
    : [480, 640, 800, 1280, 1920]
  const avifSrcSet = [480, 640, 720, 800, 960, 1280, 1920]
    .map((width) => `/images/${image}-${width}.avif ${width}w`).join(', ')

  // React does not automatically preload img fallbacks inside picture.
  // Keep this identical to the AVIF source so the early request is reused.
  if (eager) {
    preload(`/images/${image}-1280.avif`, {
      as: 'image',
      type: 'image/avif',
      imageSrcSet: avifSrcSet,
      imageSizes: sizes,
      fetchPriority: 'high',
    })
  }

  return (
    <picture className="g-picture">
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <img
        className={className}
        src={`/images/${image}-1280.webp`}
        srcSet={widths.map((width) => `/images/${image}-${width}.webp ${width}w`).join(', ')}
        sizes={sizes}
        width={1536}
        height={1024}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  )
}

function GuideCard({ entry }: { entry: GuideSummary }) {
  return (
    <article className="g-card">
      <a className="g-card-link" href={guideHref(entry.slug)}>
        <div className="g-card-photo">
          <GuideImage
            image={entry.image}
            alt={entry.imageAlt}
            sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 88px) / 2), (max-width: 1264px) calc((100vw - 112px) / 3), 384px"
          />
        </div>
        <div className="g-card-copy">
          <div className="g-card-meta">
            <span>{categoryFor(entry.category).short}</span>
            <span>{entry.readMinutes} Min.</span>
          </div>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
          <span className="g-card-action">Ratgeber lesen <ArrowUpRight size={17} aria-hidden="true" /></span>
        </div>
      </a>
    </article>
  )
}

function GuideLibrary({ page, entries }: { page: SitePage; entries: GuideSummary[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<GuideCategory | 'all'>('all')
  const searchId = useId()

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('thema')
    if (categories.some(({ id }) => id === selected)) setCategory(selected as GuideCategory)
  }, [])

  const normalized = query.trim().toLocaleLowerCase('de-DE')
  const results = entries.filter((entry) => {
    const haystack = `${entry.title} ${entry.description} ${categoryFor(entry.category).label}`.toLocaleLowerCase('de-DE')
    return (category === 'all' || category === entry.category) &&
      normalized.split(/\s+/).every((word) => haystack.includes(word))
  })
  const activeCategory = category === 'all' ? undefined : categoryFor(category)
  const resetFilters = () => { setQuery(''); setCategory('all') }

  return (
    <div className="g-library">
      <header className="g-library-hero g-container">
        <div className="g-library-intro">
          <p className="g-eyebrow">SCHULTES IT / RATGEBER</p>
          <h1>{page.heading}<span>{page.accent}</span></h1>
          <p className="g-lead">{page.intro}</p>
          <a className="g-text-link" href="#themen">Dein Thema finden <ArrowRight size={19} aria-hidden="true" /></a>
          <p className="g-hero-note">{entries.length} Themen. Fünf Bereiche. In deinem Tempo.</p>
        </div>
        <div className="g-library-visual">
          {/* The 3:2 photo covers a portrait frame on desktop and a 1.36 frame on mobile. */}
          <GuideImage
            image="about-workshop"
            alt="Heller Arbeitsplatz mit Computer und sorgfältig geordnetem Technikzubehör"
            eager
            sizes="(max-width: 680px) calc((100vw - 40px) * 1.5 / 1.36), (max-width: 800px) calc(100vw - 64px), (max-width: 1050px) calc((100vw - 100px) / 2.08 * 1.62), (max-width: 1264px) calc((100vw - 128px) / 2.08 * 1.62), 885px"
          />
          <div className="g-visual-caption"><span>Ein guter nächster Schritt.</span><strong>Beginnt mit Verstehen.</strong></div>
        </div>
      </header>

      <section className="g-library-section" id="themen" aria-labelledby="guide-library-heading">
        <div className="g-container">
          <div className="g-library-heading">
            <div>
              <p className="g-eyebrow">WISSEN FÜR DEINEN ALLTAG</p>
              <h2 id="guide-library-heading">Was möchtest du lösen?</h2>
            </div>
            <p>Klare Schritte, typische Stolperfallen und der Punkt, an dem persönliche Hilfe sinnvoll wird.</p>
          </div>

          <div className="g-search-area">
            <label htmlFor={searchId}>Thema suchen</label>
            <div className="g-search-field">
              <Search size={21} aria-hidden="true" />
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Zum Beispiel Phishing, WLAN oder Drucker …"
                autoComplete="off"
                aria-controls="guide-results"
              />
              {query && <button type="button" onClick={() => setQuery('')} aria-label="Suche leeren"><X size={19} aria-hidden="true" /></button>}
            </div>
          </div>

          <div className="g-filters" role="group" aria-label="Ratgeber nach Thema filtern">
            <button type="button" onClick={() => setCategory('all')} aria-pressed={category === 'all'}>Alle Themen <span>{entries.length}</span></button>
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                id={`thema-${item.id}`}
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
              >
                {item.label}<span>{entries.filter((entry) => entry.category === item.id).length}</span>
              </button>
            ))}
          </div>
          <div className="g-results-heading">
            <p role="status" aria-live="polite" aria-atomic="true">
              {results.length} {results.length === 1 ? 'Ratgeber' : 'Ratgeber'}
              {activeCategory ? ` · ${activeCategory.label}` : ' · Alle Themen'}
              {query.trim() ? ` zu „${query.trim()}“` : ''}
            </p>
            {(query || activeCategory) && <button type="button" onClick={resetFilters}>Filter zurücksetzen</button>}
          </div>
          {activeCategory && <p className="g-category-description">{activeCategory.description}</p>}
          <div className="g-card-grid" id="guide-results">
            {results.map((entry) => <GuideCard entry={entry} key={entry.slug} />)}
          </div>
          {results.length === 0 && (
            <div className="g-empty">
              <h3>Dazu ist gerade kein Ratgeber dabei.</h3>
              <p>Probiere ein kürzeres Wort oder wähle einen anderen Bereich. Du kannst dein Anliegen auch direkt mit Andrej klären.</p>
              <button type="button" onClick={resetFilters}>Alle Themen anzeigen <ArrowRight size={17} aria-hidden="true" /></button>
              <a href="/#kontakt">Persönliche Hilfe anfragen</a>
            </div>
          )}
          <noscript><p className="g-noscript">Hier findest du alle Ratgeber. Die Suche und Themenfilter stehen mit aktiviertem JavaScript zur Verfügung.</p></noscript>
        </div>
      </section>

      <aside className="g-library-help g-container" aria-labelledby="guide-help-heading">
        <div><p className="g-eyebrow">MANCHMAL HILFT EIN GESPRÄCH</p><h2 id="guide-help-heading">Du musst nicht alles selbst lösen.</h2><p>Andrej unterstützt dich in Ludwigsburg und Umgebung vor Ort. Viele Anliegen lassen sich auch deutschlandweit per Fernwartung klären.</p></div>
        <a className="g-primary-link" href="/#kontakt">Persönliche Hilfe finden <ArrowRight size={18} aria-hidden="true" /></a>
      </aside>
    </div>
  )
}

function GuideArticlePage({ article, entries }: { article: GuideArticle; entries: GuideSummary[] }) {
  const category = categoryFor(article.category)
  const related = article.relatedSlugs
    .map((slug) => entries.find((entry) => entry.slug === slug))
    .filter((entry): entry is GuideSummary => Boolean(entry && entry.slug !== article.slug))
    .slice(0, 3)

  return (
    <article className="g-article">
      <header className="g-article-header g-container">
        <nav className="g-breadcrumbs" aria-label="Navigationspfad">
          <a href="/">Startseite</a><ChevronRight size={13} aria-hidden="true" />
          <a href="/ratgeber/">Ratgeber</a><ChevronRight size={13} aria-hidden="true" />
          <a href={`/ratgeber/?thema=${article.category}#themen`}>{category.label}</a>
        </nav>
        <div className="g-article-heading">
          <p className="g-eyebrow">{category.label}</p>
          <h1>{article.title}</h1>
          <p className="g-article-deck">{article.description}</p>
          <div className="g-byline"><span>Schultes IT · Ratgeber</span><span>{article.readMinutes} Min. Lesezeit</span><span>Stand: <time dateTime={article.updated}>{displayDate(article.updated)}</time></span></div>
        </div>
        <figure className="g-article-figure">
          <GuideImage image={article.image} alt={article.imageAlt} eager sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1264px) calc(100vw - 64px), 1200px" />
        </figure>
      </header>

      <div className="g-reading-layout g-container">
        <aside className="g-contents">
          <nav aria-label="In diesem Ratgeber">
            <p>In diesem Ratgeber</p>
            <ol>
              <li><a href="#kurz-gesagt">Das Wichtigste zuerst</a></li>
              {article.sections.map((section, index) => <li key={section.heading}><a href={`#abschnitt-${index + 1}`}>{section.heading}</a></li>)}
              <li><a href="#persoenliche-hilfe">Wann Hilfe sinnvoll ist</a></li>
              <li><a href="#quellen">Quellen & weiterführende Hilfe</a></li>
            </ol>
          </nav>
          <a className="g-back-to-guides" href="/ratgeber/">Alle Ratgeber <ArrowRight size={16} aria-hidden="true" /></a>
        </aside>

        <div className="g-reading-content">
          <p className="g-article-intro">{article.intro}</p>
          <section className="g-takeaways" id="kurz-gesagt" aria-labelledby="guide-takeaways-heading">
            <h2 id="guide-takeaways-heading">Das Wichtigste zuerst.</h2>
            <ul>{article.takeaways.map((item) => <li key={item}><Check size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          </section>
          {article.sections.map((section, index) => (
            <section className="g-reading-section" id={`abschnitt-${index + 1}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.steps && <ol className="g-steps">{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
              {section.bullets && <ul className="g-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
          <aside className="g-pitfall" aria-labelledby="guide-pitfall-heading">
            <p className="g-eyebrow">GUT ZU WISSEN</p>
            <h2 id="guide-pitfall-heading">Diese Stolperfalle kannst du vermeiden.</h2>
            <p>{article.pitfall}</p>
          </aside>
          <section className="g-article-help" id="persoenliche-hilfe" aria-labelledby="guide-personal-help-heading">
            <p className="g-eyebrow">DEIN NÄCHSTER SCHRITT</p>
            <h2 id="guide-personal-help-heading">Wann persönliche Hilfe sinnvoll ist.</h2>
            <p>{article.whenToGetHelp}</p>
            <p className="g-help-local">Schultes IT hilft in Ludwigsburg und Umgebung vor Ort sowie bei geeigneten Anliegen deutschlandweit per Fernwartung.</p>
            <div className="g-help-links">
              <a className="g-primary-link" href="/#kontakt">Mit Andrej klären <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="g-text-link" href={article.servicePath}>Passende Leistung ansehen <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </section>
          <section className="g-sources" id="quellen" aria-labelledby="guide-sources-heading">
            <h2 id="guide-sources-heading">Quellen & weiterführende Hilfe</h2>
            <p>Offizielle Informationen zum Nachlesen. Bezeichnungen und einzelne Schritte können je nach Gerät und Softwareversion abweichen.</p>
            <ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ArrowUpRight size={15} aria-hidden="true" /><span className="g-sr-only"> (öffnet in einem neuen Tab)</span></a></li>)}</ul>
          </section>
        </div>
      </div>

      {related.length > 0 && (
        <section className="g-related" aria-labelledby="guide-related-heading">
          <div className="g-container">
            <div className="g-related-heading"><h2 id="guide-related-heading">Das könnte dir auch helfen.</h2><a className="g-text-link" href="/ratgeber/">Alle Ratgeber <ArrowRight size={17} aria-hidden="true" /></a></div>
            <div className="g-card-grid">{related.map((entry) => <GuideCard entry={entry} key={entry.slug} />)}</div>
          </div>
        </section>
      )}
    </article>
  )
}

export default function GuidePages({ page, data }: { page: SitePage; data: GuidePageData }) {
  return data.article
    ? <GuideArticlePage article={data.article} entries={data.entries} />
    : <GuideLibrary page={page} entries={data.entries} />
}
