import { createHash } from 'node:crypto'
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  checkDownload,
  compareVersions,
  releaseMetadata,
  updateRustDesk,
  validateMetadata,
  verifyExecutable,
} from './update-rustdesk.mjs'

const releaseApi =
  'https://api.github.com/repos/rustdesk/rustdesk/releases/latest'
const temporaryPrefix = 'schultes-it-rustdesk-test-'
let directory
let fetchMock

// A small synthetic PE fixture: tests never download or execute an application.
function executable({ size = 1024, marker = 1 } = {}) {
  const bytes = Buffer.alloc(size)
  bytes.writeUInt16LE(0x5a4d, 0)
  bytes.writeUInt32LE(0x80, 0x3c)
  bytes.writeUInt32LE(0x00004550, 0x80)
  bytes.writeUInt16LE(0x8664, 0x84)
  bytes[0x200] = marker
  return bytes
}

function metadataFor(bytes = executable(), version = '1.4.5') {
  return {
    version,
    fileName: 'rustdesk.exe',
    platform: 'windows-x86_64',
    sizeBytes: bytes.length,
    sha256: createHash('sha256').update(bytes).digest('hex'),
    sourceUrl: `https://github.com/rustdesk/rustdesk/releases/download/${version}/rustdesk-${version}-x86_64.exe`,
    releaseUrl: `https://github.com/rustdesk/rustdesk/releases/tag/${version}`,
    publishedAt: '2026-08-01T12:00:00Z',
  }
}

function publishedRelease(metadata = metadataFor()) {
  return {
    draft: false,
    prerelease: false,
    tag_name: metadata.version,
    html_url: metadata.releaseUrl,
    published_at: metadata.publishedAt,
    assets: [
      {
        name: `rustdesk-${metadata.version}-x86_64.exe`,
        digest: `sha256:${metadata.sha256}`,
        size: metadata.sizeBytes,
        browser_download_url: metadata.sourceUrl,
      },
    ],
  }
}

function mockRelease(metadata) {
  fetchMock.mockResolvedValueOnce(Response.json(publishedRelease(metadata)))
}

function mockDownload(
  bytes,
  { declaredLength = bytes.length, status = 200 } = {},
) {
  fetchMock.mockResolvedValueOnce(
    new Response(bytes, {
      status,
      headers:
        declaredLength === null
          ? {}
          : { 'content-length': String(declaredLength) },
    }),
  )
}

async function installFixture(
  bytes = executable(),
  metadata = metadataFor(bytes),
) {
  // Deliberate formatting makes unintended writes visible in the no-op test.
  const json = JSON.stringify(metadata, null, 4) + '\n\n'
  await writeFile(join(directory, 'rustdesk.exe'), bytes)
  await writeFile(join(directory, 'rustdesk.json'), json)
  return { bytes, metadata, json }
}

async function expectUnchanged(fixture) {
  expect(await readFile(join(directory, 'rustdesk.exe'))).toEqual(fixture.bytes)
  expect(await readFile(join(directory, 'rustdesk.json'), 'utf8')).toBe(
    fixture.json,
  )
  expect((await readdir(directory)).sort()).toEqual([
    'rustdesk.exe',
    'rustdesk.json',
  ])
}

beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), temporaryPrefix))
  fetchMock = vi
    .fn()
    .mockRejectedValue(new Error('Unexpected network request in offline test'))
  vi.stubGlobal('fetch', fetchMock)
  vi.stubEnv('GH_TOKEN', 'unit-test-token-only')
})

afterEach(async () => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  if (directory) {
    const target = resolve(directory)
    // Never recursively remove anything except the directory created by this test.
    expect(dirname(target)).toBe(resolve(tmpdir()))
    expect(basename(target).startsWith(temporaryPrefix)).toBe(true)
    await rm(target, { recursive: true, force: true })
  }
  directory = undefined
})

describe('stable release selection', () => {
  it('compares version components numerically', () => {
    expect(compareVersions('1.10.0', '1.9.9')).toBe(1)
    expect(compareVersions('2.0.0', '1.99.99')).toBe(1)
    expect(compareVersions('1.4.5', '1.4.6')).toBe(-1)
    expect(compareVersions('1.4.5', '1.4.5')).toBe(0)
  })

  it.each(['nightly', '1.4.6-rc.1', '1.4.6-beta', 'v1.4.6', '1.4', ''])(
    'rejects the non-stable tag %j',
    (tag) => {
      const release = publishedRelease()
      release.tag_name = tag
      expect(() => releaseMetadata(release)).toThrow(
        'Expected a stable RustDesk version',
      )
    },
  )

  it.each(['draft', 'prerelease'])('rejects a release marked %s', (flag) => {
    expect(() =>
      releaseMetadata({ ...publishedRelease(), [flag]: true }),
    ).toThrow('Only published stable releases are accepted')
  })

  it('requires explicit published and stable release flags', () => {
    const { draft: _draft, ...release } = publishedRelease()
    expect(() => releaseMetadata(release)).toThrow(
      'Only published stable releases are accepted',
    )
  })

  it('selects only the matching Windows x86-64 executable among other assets', () => {
    const metadata = metadataFor()
    const release = publishedRelease(metadata)
    release.assets.unshift(
      { name: 'rustdesk-1.4.5-aarch64.exe' },
      { name: 'rustdesk-1.4.5-x86_64.msi' },
    )
    expect(releaseMetadata(release)).toEqual(metadata)
  })

  it.each([
    'rustdesk-1.4.5-aarch64.exe',
    'rustdesk-1.4.5-x86.exe',
    'rustdesk-1.4.5-x86_64.msi',
  ])('refuses a release whose only asset is %s', (name) => {
    const release = publishedRelease()
    release.assets[0].name = name
    expect(() => releaseMetadata(release)).toThrow(
      'Expected exactly one Windows x86-64 EXE asset',
    )
  })

  it('rejects ambiguous duplicate matching executables', () => {
    const release = publishedRelease()
    release.assets.push({ ...release.assets[0] })
    expect(() => releaseMetadata(release)).toThrow(
      'Expected exactly one Windows x86-64 EXE asset',
    )
  })

  it.each([undefined, '', 'sha256:abc', `sha512:${'a'.repeat(64)}`])(
    'refuses an absent or invalid GitHub digest %j',
    (digest) => {
      const release = publishedRelease()
      release.assets[0].digest = digest
      expect(() => releaseMetadata(release)).toThrow(
        'GitHub did not provide a SHA-256 digest',
      )
    },
  )

  it.each([
    'https://example.com/rustdesk-1.4.5-x86_64.exe',
    'https://github.com/other/rustdesk/releases/download/1.4.5/rustdesk-1.4.5-x86_64.exe',
    'https://github.com/rustdesk/rustdesk/releases/download/1.4.5/rustdesk-1.4.5-aarch64.exe',
    'https://github.com/rustdesk/rustdesk/releases/download/1.4.6/rustdesk-1.4.6-x86_64.exe',
    'http://github.com/rustdesk/rustdesk/releases/download/1.4.5/rustdesk-1.4.5-x86_64.exe',
  ])('refuses a misleading download URL %s', (sourceUrl) => {
    const release = publishedRelease()
    release.assets[0].browser_download_url = sourceUrl
    expect(() => releaseMetadata(release)).toThrow(
      'Download must come from the official RustDesk release',
    )
  })
})

describe('metadata and executable integrity', () => {
  it.each([
    [{ fileName: '../rustdesk.exe' }, 'Unexpected local download filename'],
    [{ platform: 'windows-aarch64' }, 'Expected Windows x86-64'],
    [{ sizeBytes: 1023 }, 'Invalid executable size'],
    [{ sizeBytes: 100 * 1024 * 1024 + 1 }, 'Invalid executable size'],
    [{ sizeBytes: 1024.5 }, 'Invalid executable size'],
    [{ sha256: undefined }, 'Missing or invalid SHA-256 digest'],
    [
      { releaseUrl: 'https://example.com/releases/tag/1.4.5' },
      'Unexpected release URL',
    ],
    [{ publishedAt: 'not-a-date' }, 'Missing release publication date'],
  ])('rejects unsafe or incomplete metadata %j', (change, message) => {
    expect(() => validateMetadata({ ...metadataFor(), ...change })).toThrow(
      message,
    )
  })

  it('verifies the expected file size, digest and x86-64 PE header', () => {
    const bytes = executable()
    expect(() => verifyExecutable(bytes, metadataFor(bytes))).not.toThrow()
  })

  it('rejects a modified file even when its length is unchanged', () => {
    const bytes = executable()
    const metadata = metadataFor(bytes)
    bytes[0x201] ^= 1
    expect(() => verifyExecutable(bytes, metadata)).toThrow(
      'RustDesk SHA-256 does not match',
    )
  })

  it('rejects truncated file bytes before interpreting their header', () => {
    const bytes = executable()
    expect(() =>
      verifyExecutable(bytes.subarray(0, 4), metadataFor(bytes)),
    ).toThrow('RustDesk file size does not match')
  })

  it.each([
    [
      'DOS signature',
      (bytes) => bytes.writeUInt16LE(0, 0),
      'Downloaded file is not a Windows executable',
    ],
    [
      'PE offset before the header',
      (bytes) => bytes.writeUInt32LE(0x20, 0x3c),
      'Invalid Windows executable header',
    ],
    [
      'PE offset outside the file',
      (bytes) => bytes.writeUInt32LE(bytes.length - 5, 0x3c),
      'Invalid Windows executable header',
    ],
    [
      'PE signature',
      (bytes) => bytes.writeUInt32LE(0, 0x80),
      'Invalid PE signature',
    ],
    [
      'ARM64 machine',
      (bytes) => bytes.writeUInt16LE(0xaa64, 0x84),
      'Downloaded executable is not x86-64',
    ],
    [
      'x86 machine',
      (bytes) => bytes.writeUInt16LE(0x014c, 0x84),
      'Downloaded executable is not x86-64',
    ],
  ])(
    'rejects an invalid %s even with a matching SHA-256',
    (_name, mutate, message) => {
      const bytes = executable()
      mutate(bytes)
      expect(() => verifyExecutable(bytes, metadataFor(bytes))).toThrow(message)
    },
  )

  it('checks both on-disk files without contacting a network', async () => {
    const fixture = await installFixture()
    expect(await checkDownload(directory)).toEqual(fixture.metadata)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('rejects an on-disk manifest that targets a different filename', async () => {
    await writeFile(
      join(directory, 'rustdesk.json'),
      JSON.stringify({ ...metadataFor(), fileName: '../outside.exe' }),
    )
    await expect(checkDownload(directory)).rejects.toThrow(
      'Unexpected local download filename',
    )
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('offline updater transactions', () => {
  it('performs a verified no-op without downloading or rewriting the current files', async () => {
    const fixture = await installFixture()
    mockRelease(fixture.metadata)
    await expect(updateRustDesk(directory)).resolves.toEqual({
      changed: false,
      metadata: fixture.metadata,
    })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock.mock.calls[0][0]).toBe(releaseApi)
    await expectUnchanged(fixture)
  })

  it('does not accept a no-op when the locally installed file has been tampered with', async () => {
    const fixture = await installFixture()
    const corrupted = Buffer.from(fixture.bytes)
    corrupted[0x201] ^= 1
    await writeFile(join(directory, 'rustdesk.exe'), corrupted)
    mockRelease(fixture.metadata)
    await expect(updateRustDesk(directory)).rejects.toThrow(
      'RustDesk SHA-256 does not match',
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(await readFile(join(directory, 'rustdesk.exe'))).toEqual(corrupted)
    expect(await readFile(join(directory, 'rustdesk.json'), 'utf8')).toBe(
      fixture.json,
    )
  })

  it('rejects a downgrade before fetching or changing executable bytes', async () => {
    const fixture = await installFixture()
    mockRelease(metadataFor(executable(), '1.4.4'))
    await expect(updateRustDesk(directory)).rejects.toThrow(
      'Refusing to downgrade',
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
    await expectUnchanged(fixture)
  })

  it.each(['digest', 'size'])(
    'rejects a replaced %s under the same release tag',
    async (change) => {
      const fixture = await installFixture()
      const replaced =
        change === 'digest'
          ? metadataFor(executable({ marker: 2 }))
          : { ...fixture.metadata, sizeBytes: fixture.metadata.sizeBytes + 1 }
      mockRelease(replaced)
      await expect(updateRustDesk(directory)).rejects.toThrow(
        'Published asset changed under the same version',
      )
      expect(fetchMock).toHaveBeenCalledTimes(1)
      await expectUnchanged(fixture)
    },
  )

  it('installs a newer verified asset and sends authorization only to the GitHub API', async () => {
    await installFixture()
    const bytes = executable({ marker: 2 })
    const metadata = metadataFor(bytes, '1.4.6')
    mockRelease(metadata)
    mockDownload(bytes)
    await expect(updateRustDesk(directory)).resolves.toEqual({
      changed: true,
      metadata,
    })
    expect(fetchMock).toHaveBeenCalledTimes(2)
    const [apiUrl, apiOptions] = fetchMock.mock.calls[0]
    const [assetUrl, assetOptions] = fetchMock.mock.calls[1]
    expect(apiUrl).toBe(releaseApi)
    expect(new Headers(apiOptions.headers).get('authorization')).toBe(
      'Bearer unit-test-token-only',
    )
    expect(assetUrl).toBe(metadata.sourceUrl)
    expect(new Headers(assetOptions.headers).has('authorization')).toBe(false)
    expect(await readFile(join(directory, 'rustdesk.exe'))).toEqual(bytes)
    expect(await checkDownload(directory)).toEqual(metadata)
    expect((await readdir(directory)).sort()).toEqual([
      'rustdesk.exe',
      'rustdesk.json',
    ])
  })

  it('can create a previously absent download directory after validation', async () => {
    const target = join(directory, 'new-downloads')
    const bytes = executable()
    const metadata = metadataFor(bytes)
    mockRelease(metadata)
    mockDownload(bytes)
    await expect(updateRustDesk(target)).resolves.toEqual({
      changed: true,
      metadata,
    })
    expect(await checkDownload(target)).toEqual(metadata)
    expect((await readdir(target)).sort()).toEqual([
      'rustdesk.exe',
      'rustdesk.json',
    ])
  })

  it('preserves both current files when the release API is unavailable', async () => {
    const fixture = await installFixture()
    fetchMock.mockResolvedValueOnce(
      new Response('rate limited', { status: 403 }),
    )
    await expect(updateRustDesk(directory)).rejects.toThrow(
      'RustDesk release lookup failed: HTTP 403',
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
    await expectUnchanged(fixture)
  })

  it('preserves both current files when the asset download fails', async () => {
    const fixture = await installFixture()
    mockRelease(metadataFor(executable({ marker: 2 }), '1.4.6'))
    mockDownload(Buffer.from('not found'), { status: 404 })
    await expect(updateRustDesk(directory)).rejects.toThrow(
      'RustDesk download failed: HTTP 404',
    )
    await expectUnchanged(fixture)
  })

  it.each([
    ['wrong SHA-256', 'RustDesk SHA-256 does not match'],
    ['wrong Content-Length', 'Download Content-Length differs'],
    [
      'stream exceeds declared size',
      'RustDesk download exceeded its declared size',
    ],
    ['truncated stream', 'RustDesk file size does not match'],
    ['wrong PE architecture', 'Downloaded executable is not x86-64'],
  ])('preserves both current files after a %s', async (failure, message) => {
    const fixture = await installFixture()
    let bytes = executable({ marker: 2 })
    let metadata = metadataFor(bytes, '1.4.6')
    let declaredLength = null
    if (failure === 'wrong SHA-256') bytes[0x201] ^= 1
    if (failure === 'wrong Content-Length') declaredLength = bytes.length + 1
    if (failure === 'stream exceeds declared size')
      bytes = Buffer.concat([bytes, Buffer.from([0])])
    if (failure === 'truncated stream')
      bytes = bytes.subarray(0, bytes.length - 1)
    if (failure === 'wrong PE architecture') {
      bytes.writeUInt16LE(0xaa64, 0x84)
      metadata = metadataFor(bytes, '1.4.6')
    }
    mockRelease(metadata)
    mockDownload(bytes, { declaredLength })
    await expect(updateRustDesk(directory)).rejects.toThrow(message)
    await expectUnchanged(fixture)
  })
})
