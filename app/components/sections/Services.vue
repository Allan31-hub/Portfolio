<script setup>
import { ref, onMounted } from 'vue'
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'


const lang = useState('lang', () => 'fr')


const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))
</script>

<template>
  <div ref="root">
    
    <span id="services" class="anchor"></span>

    <SectionBlock
      :title="lang === 'fr' ? 'Services' : 'Services'"
      :subtitle="lang === 'fr' ? 'Ce que je propose' : 'What I offer'"
    >
      <div class="cards-3">
        <div v-for="s in siteData.services" :key="s.title.fr" class="card service">
          <h3 class="h3">{{ s.title[lang] }}</h3>
          <p class="muted">{{ s.desc[lang] }}</p>
        </div>
      </div>
    </SectionBlock>
  </div>
</template>
