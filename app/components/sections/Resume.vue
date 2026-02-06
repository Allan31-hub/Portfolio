<script setup>
import { ref, onMounted } from 'vue'
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

// langue
const lang = useState('lang', () => 'fr')


const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))
</script>

<template>
  <div ref="root">
  
    <span id="resume" class="anchor"></span>

    <SectionBlock
      :title="lang === 'fr' ? 'Parcours' : 'Resume'"
      :subtitle="lang === 'fr' ? 'Expériences & Formation' : 'Experience & Education'"
    >
      <div class="grid-2">
        <div class="card">
          <h3 class="h3">{{ lang === 'fr' ? 'Expérience' : 'Experience' }}</h3>
          <div class="timeline">
            <div v-for="e in siteData.resume.experience" :key="e.title.fr" class="tl-item">
              <div class="tl-top">
                <strong>{{ e.title[lang] }}</strong>
                <span class="muted small">{{ e.period[lang] }}</span>
              </div>
              <p class="muted small">{{ e.place[lang] }}</p>
              <ul class="bullets">
                <li v-for="b in e.bullets" :key="b[lang]">{{ b[lang] }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="h3">{{ lang === 'fr' ? 'Formation' : 'Education' }}</h3>
          <div class="timeline">
            <div v-for="e in siteData.resume.education" :key="e.title.fr" class="tl-item">
              <div class="tl-top">
                <strong>{{ e.title[lang] }}</strong>
                <span class="muted small">{{ e.period[lang] }}</span>
              </div>
              <p class="muted small">{{ e.place[lang] }}</p>
              <ul class="bullets">
                <li v-for="b in e.bullets" :key="b[lang]">{{ b[lang] }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  </div>
</template>
