<script setup>
import { ref, computed, onMounted } from 'vue'
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

// langue
const lang = useState('lang', () => 'fr')

// données traduites
const data = computed(() => siteData)


const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))

const goTo = (hash) => {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="home" ref="root" class="hero reveal">
    <div class="hero-card card">
      <p class="kicker">Portfolio</p>

      <h2 class="h1">{{ siteData.hero.headline[lang] }}</h2>
      <p class="muted lead">{{ siteData.hero.sub[lang] }}</p>

      <div class="row">
        <a
          v-for="c in siteData.hero.ctas"
          :key="c.href"
          class="btn"
          :class="{ ghost: c.variant === 'ghost' }"
          :href="c.href"
          @click.prevent="goTo(c.href)"
        >
          {{ c.label[lang] }}
        </a>
      </div>

      <!-- IMAGE CV -->
      <div class="hero-cv">
        <img class="cv-img" :src="siteData.hero.cvImage" alt="CV" />
      </div>
    </div>
  </section>
</template>
