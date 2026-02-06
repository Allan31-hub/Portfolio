<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import Tag from '~/components/ui/Tag.vue'
import Modal from '~/components/ui/Modal.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'


const lang = useState('lang', () => 'fr')


const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))


const allLabel = computed(() => (lang.value === 'fr' ? 'Tous' : 'All'))

const categories = computed(() => {
  const set = new Set(siteData.portfolio.map(p => p.category?.[lang.value]).filter(Boolean))
  return [allLabel.value, ...Array.from(set)]
})

const current = ref(allLabel.value)
const open = ref(false)
const selected = ref(null)


watch(lang, () => {
  current.value = allLabel.value
})


const items = computed(() => {
  if (current.value === allLabel.value) return siteData.portfolio
  return siteData.portfolio.filter(p => p.category?.[lang.value] === current.value)
})

function show(p) {
  selected.value = p
  open.value = true
}
</script>

<template>
  <div ref="root">
  
    <span id="portfolio" class="anchor"></span>

    <SectionBlock
      :title="lang === 'fr' ? 'Projets' : 'Projects'"
      :subtitle="lang === 'fr' ? 'Sélection' : 'Selection'"
    >
      <div class="filter-row">
        <button
          v-for="c in categories"
          :key="c"
          class="chip"
          :class="{ active: current === c }"
          @click="current = c"
        >
          {{ c }}
        </button>
      </div>

      <div class="grid-3">
        <button
          v-for="p in items"
          :key="p.id"
          class="card project"
          @click="show(p)"
        >
          <div class="thumb">
            <img :src="p.image" :alt="p.title?.[lang] || 'Project'" />
          </div>

          <div class="project-meta">
            <div class="row-between">
              <strong>{{ p.title?.[lang] }}</strong>
              <span class="muted small">{{ p.category?.[lang] }}</span>
            </div>

            <p class="muted small clamp">{{ p.desc?.[lang] }}</p>

            <div class="tags">
              <Tag
                v-for="t in (p.tags || [])"
                :key="t?.fr || t?.en"
                :text="t?.[lang]"
              />
            </div>
          </div>
        </button>
      </div>

      <Modal :open="open" :title="selected?.title?.[lang]" @close="open = false">
        <div v-if="selected" class="modal-project">
          <img class="modal-img" :src="selected.image" :alt="selected.title?.[lang] || 'Project'" />

          <p class="muted">{{ selected.desc?.[lang] }}</p>

          <div class="tags">
            <Tag
              v-for="t in (selected.tags || [])"
              :key="t?.fr || t?.en"
              :text="t?.[lang]"
            />
          </div>

          <div class="row">
            <a
              v-for="l in (selected.links || [])"
              :key="(l.label?.fr || l.label?.en || '') + l.href"
              class="btn small"
              :href="l.href"
              :target="l.download ? null : '_blank'"
              rel="noreferrer"
              :download="l.download ? '' : null"
            >
              {{ l.label?.[lang] || l.label }}
            </a>
          </div>
        </div>
      </Modal>
    </SectionBlock>
  </div>
</template>
