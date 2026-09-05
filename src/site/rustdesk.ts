import release from '../../public/downloads/rustdesk.json'

export const rustdeskRelease = release
export const rustdeskFileSize = `${new Intl.NumberFormat('de-DE', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format(release.sizeBytes / 1_000_000)} MB`
