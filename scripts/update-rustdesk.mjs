import { createHash, randomUUID } from 'node:crypto'
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const releaseApi =
  'https://api.github.com/repos/rustdesk/rustdesk/releases/latest'
const downloadRoot = 'https://github.com/rustdesk/rustdesk/releases/download/'
const maxDownloadBytes = 100 * 1024 * 1024

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

export function compareVersions(left, right) {
  for (const version of [left, right]) {
    assert(
      /^\d+\.\d+\.\d+$/.test(version),
      'Expected a stable RustDesk version',
    )
  }
  const a = left.split('.').map(Number),
    b = right.split('.').map(Number)
  for (let index = 0; index < 3; index++) {
    if (a[index] !== b[index]) return Math.sign(a[index] - b[index])
  }
  return 0
}

export function validateMetadata(metadata) {
  assert(metadata && typeof metadata === 'object', 'Missing RustDesk metadata')
  compareVersions(metadata.version, metadata.version)
  assert(
    metadata.fileName === 'rustdesk.exe',
    'Unexpected local download filename',
  )
  assert(metadata.platform === 'windows-x86_64', 'Expected Windows x86-64')
  assert(
    Number.isSafeInteger(metadata.sizeBytes) &&
      metadata.sizeBytes >= 1024 &&
      metadata.sizeBytes <= maxDownloadBytes,
    'Invalid executable size',
  )
  assert(
    typeof metadata.sha256 === 'string' &&
      /^[a-f0-9]{64}$/.test(metadata.sha256),
    'Missing or invalid SHA-256 digest',
  )
  const expectedName = `rustdesk-${metadata.version}-x86_64.exe`
  assert(
    metadata.sourceUrl === `${downloadRoot}${metadata.version}/${expectedName}`,
    'Download must come from the official RustDesk release',
  )
  assert(
    metadata.releaseUrl ===
      `https://github.com/rustdesk/rustdesk/releases/tag/${metadata.version}`,
    'Unexpected release URL',
  )
  assert(
    typeof metadata.publishedAt === 'string' &&
      Number.isFinite(Date.parse(metadata.publishedAt)),
    'Missing release publication date',
  )
  return metadata
}

export function releaseMetadata(release) {
  assert(
    release && release.draft === false && release.prerelease === false,
    'Only published stable releases are accepted',
  )
  const version = release.tag_name
  compareVersions(version, version)
  const assets =
    release.assets?.filter(
      (asset) => asset.name === `rustdesk-${version}-x86_64.exe`,
    ) ?? []
  assert(assets.length === 1, 'Expected exactly one Windows x86-64 EXE asset')
  const asset = assets[0]
  assert(
    /^sha256:[a-f0-9]{64}$/.test(asset.digest ?? ''),
    'GitHub did not provide a SHA-256 digest; keeping the existing download',
  )
  return validateMetadata({
    version,
    fileName: 'rustdesk.exe',
    platform: 'windows-x86_64',
    sizeBytes: asset.size,
    sha256: asset.digest.slice(7),
    sourceUrl: asset.browser_download_url,
    releaseUrl: release.html_url,
    publishedAt: release.published_at,
  })
}

export function verifyExecutable(bytes, metadata) {
  validateMetadata(metadata)
  assert(
    bytes.length === metadata.sizeBytes,
    'RustDesk file size does not match its release metadata',
  )
  assert(
    createHash('sha256').update(bytes).digest('hex') === metadata.sha256,
    'RustDesk SHA-256 does not match the official release digest',
  )
  assert(
    bytes.readUInt16LE(0) === 0x5a4d,
    'Downloaded file is not a Windows executable',
  )
  const peOffset = bytes.readUInt32LE(0x3c)
  assert(
    peOffset >= 0x40 && peOffset <= bytes.length - 6,
    'Invalid Windows executable header',
  )
  assert(bytes.readUInt32LE(peOffset) === 0x00004550, 'Invalid PE signature')
  assert(
    bytes.readUInt16LE(peOffset + 4) === 0x8664,
    'Downloaded executable is not x86-64',
  )
}

export async function checkDownload(directory) {
  const metadata = validateMetadata(
    JSON.parse(await readFile(join(directory, 'rustdesk.json'), 'utf8')),
  )
  verifyExecutable(await readFile(join(directory, metadata.fileName)), metadata)
  return metadata
}

async function download(metadata) {
  const response = await fetch(metadata.sourceUrl, {
    signal: AbortSignal.timeout(120_000),
  })
  assert(
    response.ok && response.body,
    `RustDesk download failed: HTTP ${response.status}`,
  )
  const contentLength = response.headers.get('content-length')
  assert(
    !contentLength || Number(contentLength) === metadata.sizeBytes,
    'Download Content-Length differs from release metadata',
  )
  const chunks = []
  let size = 0
  for await (const chunk of response.body) {
    size += chunk.length
    assert(
      size <= metadata.sizeBytes && size <= maxDownloadBytes,
      'RustDesk download exceeded its declared size',
    )
    chunks.push(chunk)
  }
  const bytes = Buffer.concat(chunks)
  verifyExecutable(bytes, metadata)
  return bytes
}

export async function updateRustDesk(
  directory = join(projectRoot, 'public/downloads'),
) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'schultes-it-rustdesk-updater',
  }
  // This token is sent only to api.github.com, never to release asset redirects.
  if (process.env.GH_TOKEN)
    headers.Authorization = `Bearer ${process.env.GH_TOKEN}`
  const response = await fetch(releaseApi, {
    headers,
    signal: AbortSignal.timeout(30_000),
  })
  assert(response.ok, `RustDesk release lookup failed: HTTP ${response.status}`)
  const metadata = releaseMetadata(await response.json())
  let current
  try {
    current = validateMetadata(
      JSON.parse(await readFile(join(directory, 'rustdesk.json'), 'utf8')),
    )
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  if (current) {
    assert(
      compareVersions(metadata.version, current.version) >= 0,
      'Refusing to downgrade the current RustDesk download',
    )
    if (metadata.version === current.version) {
      assert(
        metadata.sha256 === current.sha256 &&
          metadata.sizeBytes === current.sizeBytes,
        'Published asset changed under the same version; manual review required',
      )
      await checkDownload(directory)
      return { changed: false, metadata }
    }
  }

  // Keep the current files until the entire new executable has passed validation.
  const bytes = await download(metadata)
  await mkdir(directory, { recursive: true })
  const suffix = `${randomUUID()}.tmp`
  const binaryTemp = join(directory, `rustdesk-${suffix}`)
  const metadataTemp = join(directory, `rustdesk-json-${suffix}`)
  try {
    await writeFile(binaryTemp, bytes, { flag: 'wx' })
    await writeFile(metadataTemp, JSON.stringify(metadata, null, 2) + '\n', {
      flag: 'wx',
    })
    await rename(binaryTemp, join(directory, 'rustdesk.exe'))
    await rename(metadataTemp, join(directory, 'rustdesk.json'))
  } finally {
    await rm(binaryTemp, { force: true })
    await rm(metadataTemp, { force: true })
  }
  await checkDownload(directory)
  return { changed: true, metadata }
}

async function main() {
  const mode = process.argv[2]
  assert(
    !mode || mode === '--check' || mode === '--check-dist',
    'Use no argument, --check or --check-dist',
  )
  if (mode) {
    const directory = join(
      projectRoot,
      mode === '--check-dist' ? 'dist/downloads' : 'public/downloads',
    )
    const metadata = await checkDownload(directory)
    console.log(
      `RustDesk ${metadata.version}: SHA-256, file size and Windows x86-64 executable verified (${mode}).`,
    )
  } else {
    const { changed, metadata } = await updateRustDesk()
    console.log(
      `RustDesk ${metadata.version}: ${changed ? 'updated and verified' : 'already current and verified'}.`,
    )
  }
}

if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}
