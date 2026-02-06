export function useActiveSection(sectionIds) {
  const active = ref(sectionIds?.[0] || 'home')
  let io = null

  onMounted(() => {
    const els = sectionIds
      .map((id) => {

        return document.querySelector(`section#${id}`) || document.getElementById(id)
      })
      .filter(Boolean)

    io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) active.value = visible.target.id
      },
      { threshold: [0.2, 0.35, 0.5, 0.7] }
    )

    els.forEach(el => io.observe(el))
  })

  onBeforeUnmount(() => {
    if (io) io.disconnect()
  })

  return { active }
}
