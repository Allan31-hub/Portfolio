export function useRevealOnScroll() {
  let io = null

  const ensureObserver = () => {
    if (io) return io

    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 }
    )

    return io
  }

  const observe = (el) => {
    if (!el) return
    ensureObserver().observe(el)
  }

  onBeforeUnmount(() => {
    if (io) io.disconnect()
    io = null
  })

  return { observe }
}
