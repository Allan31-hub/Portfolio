<script setup>
import { ref, reactive, onMounted } from 'vue'
import SectionBlock from '~/components/core/layout/SectionBlock.vue'
import { siteData } from '~/utils/siteData'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'


const lang = useState('lang', () => 'fr')

const root = ref(null)
const { observe } = useRevealOnScroll()
onMounted(() => observe(root.value))


const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle')
const feedback = ref('')

async function submit() {
  status.value = 'loading'
  feedback.value = ''

  try {
    const res = await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'ok'
    feedback.value = res?.message || (lang.value === 'fr' ? 'Message envoyé.' : 'Message sent.')
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    status.value = 'error'
    feedback.value = lang.value === 'fr' ? 'Erreur lors de l’envoi. Réessaie.' : 'Error while sending. Please try again.'
  }
}
</script>

<template>
  <div ref="root">

    <span id="contact" class="anchor"></span>

    <SectionBlock
      :title="lang === 'fr' ? 'Contact' : 'Contact'"
      :subtitle="lang === 'fr' ? 'Discutons' : 'Let’s talk'"
    >
      <div class="grid-2">
        <div class="card">
          <h3 class="h3">{{ lang === 'fr' ? 'Coordonnées' : 'Details' }}</h3>

          <p class="muted">
            {{ lang === 'fr' ? 'Email' : 'Email' }} :
            <a class="link" :href="`mailto:${siteData.person.email}`">{{ siteData.person.email }}</a>
          </p>

          <p class="muted">
            {{ lang === 'fr' ? 'Téléphone' : 'Phone' }} :
            <span class="muted">{{ siteData.person.phone }}</span>
          </p>

          <p class="muted">
            {{ lang === 'fr' ? 'Localisation' : 'Location' }} :
            <span class="muted">{{ siteData.person.location[lang] }}</span>
          </p>
        </div>

        <form class="card" @submit.prevent="submit">
          <h3 class="h3">{{ lang === 'fr' ? 'Formulaire' : 'Form' }}</h3>

          <div class="field">
            <label>{{ lang === 'fr' ? 'Nom' : 'Name' }}</label>
            <input
              v-model="form.name"
              required
              :placeholder="lang === 'fr' ? 'Ton nom et prénom' : 'Your full name'"
            />
          </div>

          <div class="field">
            <label>{{ lang === 'fr' ? 'Email' : 'Email' }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              :placeholder="lang === 'fr' ? 'ton@email.com' : 'your@email.com'"
            />
          </div>

          <div class="field">
            <label>{{ lang === 'fr' ? 'Message' : 'Message' }}</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              :placeholder="lang === 'fr' ? 'Ton message...' : 'Your message...'"
            />
          </div>

          <div class="row">
            <button class="btn" :disabled="status === 'loading'">
              {{ status === 'loading' ? (lang === 'fr' ? 'Envoi...' : 'Sending...') : (lang === 'fr' ? 'Envoyer' : 'Send') }}
            </button>

            <span v-if="feedback" class="muted small">{{ feedback }}</span>
          </div>
        </form>
      </div>
    </SectionBlock>
  </div>
</template>
