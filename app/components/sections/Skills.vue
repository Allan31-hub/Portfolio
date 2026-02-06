<script setup>
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))

const lang = useState('lang', () => 'fr')
</script>

<template>
  <div ref="root">
    <SectionBlock
      id="skills"
      :title="lang === 'fr' ? 'Compétences' : 'Skills'"
      :subtitle="lang === 'fr' ? 'Mes compétences' : 'My skills'"
    >
      <div class="card">
        <div class="skills-list">
          <span
            v-for="s in siteData.skills"
            :key="typeof s.label === 'object' ? s.label.fr : s.label"
            class="skill-pill"
          >
            {{ typeof s.label === 'object' ? s.label[lang] : s.label }}
          </span>
        </div>
      </div>
    </SectionBlock>
  </div>
</template>
