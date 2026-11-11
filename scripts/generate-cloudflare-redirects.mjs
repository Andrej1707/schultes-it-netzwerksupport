import { execFile } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { promisify } from 'node:util'

const args = process.argv.slice(2)
const write = args.includes('--write')
const baselineIndex = args.indexOf('--baseline-ref')
const baselineRef = baselineIndex === -1 ? undefined : args[baselineIndex + 1]
const allowed = new Set(['--write', '--check', '--baseline-ref', baselineRef].filter(Boolean))
if (args.some(arg => !allowed.has(arg)) || (write && args.includes('--check')) ||
  (baselineIndex !== -1 && (!baselineRef || baselineRef.startsWith('--')))) {
  throw new Error('Usage: node scripts/generate-cloudflare-redirects.mjs [--check | --write] [--baseline-ref COMMIT]')
}

const directory = join(process.cwd(), 'docs', 'seo')
const combinedPath = join(directory, 'legacy-redirects.csv')
const guidePath = join(directory, 'guide-redirects.csv')
const deltaPath = join(directory, 'guide-expansion-redirects.csv')
const manifest = JSON.parse(await readFile(join(process.cwd(), 'dist', 'site-manifest.json'), 'utf8'))
const rows = new Map()
const guideRows = new Set()
const policy = ',301,TRUE,FALSE,FALSE,FALSE'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function add(source, target, guide = false) {
  const row = `${source},${target}${policy}`
  assert(!rows.has(source) || rows.get(source) === row, `Conflicting redirect targets for ${source}.`)
  rows.set(source, row)
  if (guide) guideRows.add(row)
}

for (const page of manifest.pages) {
  const path = page.path
  assert(/^\/(?:[^,\s?#]*\/)?$/.test(path), `Invalid canonical route ${path}.`)
  const target = `https://schultes-it.de${path}`
  const guide = page.kind === 'guide'
  add(`http://schultes-it.de${path}`, target, guide)
  add(`www.schultes-it.de${path}`, target, guide)
  for (const host of ['schultes-it.de', 'www.schultes-it.de']) {
    add(`${host}${path}index.html`, target, guide)
    if (path !== '/') add(`${host}${path.slice(0, -1)}`, target, guide)
    for (const alias of page.aliases) {
      assert(/^\/(?:[^,\s?#]+\/)$/.test(alias) && alias !== path, `Invalid alias ${alias}.`)
      for (const variant of [alias.slice(0, -1), alias, `${alias}index.html`]) {
        add(`${host}${variant}`, target)
      }
    }
  }
}

function parseCsv(text, label) {
  const lines = text.replaceAll('\r\n', '\n').split('\n').filter(Boolean)
  assert(lines.every(line => line.split(',').length === 7 && line.endsWith(policy)), `Invalid redirect policy or CSV format in ${label}.`)
  assert(new Set(lines.map(line => line.split(',')[0])).size === lines.length, `Duplicate redirect source in ${label}.`)
  return new Set(lines)
}

function serialize(values) {
  return `${[...values].sort().join('\n')}\n`
}

const current = parseCsv(await readFile(combinedPath, 'utf8'), 'legacy-redirects.csv')
const baseline = baselineRef
  ? parseCsv((await promisify(execFile)('git', ['show', `${baselineRef}:docs/seo/legacy-redirects.csv`], { encoding: 'utf8' })).stdout, baselineRef)
  : current
const generated = new Set(rows.values())
const removed = [...baseline].filter(row => !generated.has(row))
const newRows = new Set([...generated].filter(row => !baseline.has(row)))
const aliases = manifest.pages.reduce((sum, page) => sum + page.aliases.length, 0)
assert(generated.size === 6 * manifest.pages.length - 2 + 6 * aliases, 'Rule coverage is incomplete or contains overlapping sources.')
assert(!removed.length, `Generation would remove or change ${removed.length} baseline redirect rules; investigate before publishing.`)
assert([...current].every(row => generated.has(row)), 'Generation would remove or change a rule in the current CSV.')
assert([...newRows].every(row => guideRows.has(row)), 'The incremental guide CSV may contain only newly added canonical guide rules.')

const previousDeltaText = await readFile(deltaPath, 'utf8').catch(error => {
  if (error.code === 'ENOENT') return ''
  throw error
})
const previousDelta = parseCsv(previousDeltaText, 'guide-expansion-redirects.csv')
// Repeating --write without a baseline keeps the already prepared delta instead
// of silently emptying it after the combined CSV has been updated.
const delta = baselineRef || newRows.size ? newRows : previousDelta
assert([...delta].every(row => generated.has(row) && guideRows.has(row)), 'The prepared guide delta is not part of the current canonical guide rules.')
const combined = serialize(generated)
const guides = serialize(guideRows)
const deltaCsv = delta.size ? serialize(delta) : ''
if (write) {
  await writeFile(combinedPath, combined)
  await writeFile(guidePath, guides)
  if (delta.size || previousDeltaText) await writeFile(deltaPath, deltaCsv)
} else {
  assert(serialize(current) === combined, 'Redirect CSV is stale. Build the intended release, then run this script with --write.')
  assert(serialize(parseCsv(await readFile(guidePath, 'utf8'), 'guide-redirects.csv')) === guides, 'Guide redirect CSV does not match the built guide routes.')
  assert(!delta.size || serialize(previousDelta) === deltaCsv, 'The incremental guide CSV does not match the specified baseline.')
}

const requestCount = values => [...values].reduce((sum, row) => sum + (row.startsWith('http://') ? 1 : 2), 0)
console.log(JSON.stringify({
  mode: write ? 'write' : 'check',
  canonicalPages: manifest.pages.length,
  articlePages: manifest.pages.filter(page => page.kind === 'guide').length,
  aliases,
  totalRules: generated.size,
  guideRules: guideRows.size,
  baselineRules: baseline.size,
  unchangedBaselineRules: baseline.size,
  newRules: newRows.size,
  deltaRules: delta.size,
  removedOrChangedRules: removed.length,
  httpHttpsCases: requestCount(generated),
  newHttpHttpsCases: requestCount(delta),
  sha256: createHash('sha256').update(combined).digest('hex'),
}))
