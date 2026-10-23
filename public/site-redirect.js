// Runs before the meta-refresh fallback so old links retain their query and anchor.
(() => {
  const canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) return
  const destination = new URL(canonical.href)
  destination.search = window.location.search
  destination.hash = window.location.hash
  if (destination.href !== window.location.href) {
    window.location.replace(destination.href)
  }
})()
