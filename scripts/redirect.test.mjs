import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { describe, expect, it, vi } from 'vitest'

const script = readFileSync(new URL('../public/site-redirect.js', import.meta.url), 'utf8')

function runRedirect(href, canonicalHref) {
  const current = new URL(href)
  const replace = vi.fn()
  runInNewContext(script, {
    URL,
    document: { querySelector: () => canonicalHref ? { href: canonicalHref } : null },
    window: {
      location: { href, search: current.search, hash: current.hash, replace },
    },
  })
  return replace
}

describe('static compatibility redirect', () => {
  it('takes an old URL directly to its canonical destination with query and anchor intact', () => {
    const replace = runRedirect(
      'https://schultes-it.de/pc-system/?utm_source=google&ref=a%2Fb#faq',
      'https://schultes-it.de/standorte/ludwigsburg/pc-laptop/',
    )
    expect(replace).toHaveBeenCalledExactlyOnceWith(
      'https://schultes-it.de/standorte/ludwigsburg/pc-laptop/?utm_source=google&ref=a%2Fb#faq',
    )
  })

  it('does not loop on the destination or navigate without a canonical', () => {
    expect(runRedirect('https://schultes-it.de/fernwartung/',
      'https://schultes-it.de/fernwartung/')).not.toHaveBeenCalled()
    expect(runRedirect('https://schultes-it.de/pc-system/', null)).not.toHaveBeenCalled()
  })
})
