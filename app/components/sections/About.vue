<script setup>
import { ref, onMounted } from 'vue'
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
      id="about"
      :title="lang === 'fr' ? 'À propos' : 'About'"
      :subtitle="lang === 'fr' ? 'Qui je suis' : 'Who I am'"
    >
      <div class="about-center card">
        <h3 class="about-title">{{ lang === 'fr' ? 'À propos' : 'About' }}</h3>

        <p class="about-text">
          {{ siteData.aboutText.intro?.[lang] || siteData.aboutText.intro }}
        </p>

      
        <div class="about-facts">
          <div v-for="f in siteData.aboutText.facts" :key="f.k?.fr || f.k" class="about-fact">
            <span class="about-k">{{ f.k?.[lang] || f.k }}</span>
            <span class="about-v">{{ f.v?.[lang] || f.v }}</span>
          </div>
        </div>
      </div>
    </SectionBlock>
  </div>
</template>
