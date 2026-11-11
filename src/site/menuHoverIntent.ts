/** One pending pointer intention prevents stale timers from reopening/closing the menu. */
export function createMenuHoverIntent({
  isOpen,
  open,
  close,
}: {
  isOpen: () => boolean
  open: () => void
  close: () => void
}) {
  let timer: ReturnType<typeof setTimeout> | undefined
  const cancel = () => {
    if (timer !== undefined) clearTimeout(timer)
    timer = undefined
  }
  return {
    enter() {
      cancel()
      // Reverse an in-progress exit immediately, without a second opening delay.
      if (isOpen()) open()
      else timer = setTimeout(() => { timer = undefined; open() }, 120)
    },
    leave() {
      cancel()
      if (isOpen()) timer = setTimeout(() => { timer = undefined; close() }, 180)
    },
    cancel,
  }
}
