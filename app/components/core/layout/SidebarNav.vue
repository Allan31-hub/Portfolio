<script setup>
import { computed } from 'vue'
import { siteData } from '~/utils/siteData'
import { useActiveSection } from '~/composables/useActiveSection'


const lang = useState('lang', () => 'fr')

const sections = computed(() => ([
  { id: 'home', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'services', label: { fr: 'Services', en: 'Services' } },
  { id: 'resume', label: { fr: 'Parcours', en: 'Resume' } },
  { id: 'skills', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'portfolio', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } }
]))

const { active } = useActiveSection(sections.value.map(s => s.id))

function goTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="sidebar-inner">
    <div class="profile card">
      <img class="avatar" :src="siteData.person.avatar" alt="Photo de profil" />
      <div class="profile-meta">
        <h1 class="h3">{{ siteData.person.name }}</h1>
        <p class="muted">{{ siteData.person.title[lang] }}</p>
        <p class="muted small">{{ siteData.person.location[lang] }}</p>
      </div>

      <div class="profile-actions">
        <a class="btn small" :href="`mailto:${siteData.person.email}`">
          {{ lang === 'fr' ? 'Email' : 'Email' }}
        </a>
        <a class="btn small ghost" href="#contact" @click.prevent="goTo('#contact')">
          {{ lang === 'fr' ? 'Contact' : 'Contact' }}
        </a>
      </div>

      <div class="socials">
        <a
          v-for="s in siteData.person.socials"
          :key="s.label"
          class="link"
          :href="s.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ s.label }}
        </a>
      </div>
    </div>

    <nav class="nav card">
      <button
        v-for="s in sections"
        :key="s.id"
        class="nav-item"
        :class="{ active: active === s.id }"
        @click="goTo(`#${s.id}`)"
      >
        {{ s.label[lang] }}
      </button>
    </nav>
  </div>
</template>
