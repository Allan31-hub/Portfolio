
<script setup>
import SidebarNav from '~/components/core/layout/SidebarNav.vue'

const lang = useState('lang', () => 'fr')

// toggle la langue
const toggleLang = () => {
  lang.value = lang.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <SidebarNav />
    </aside>

    <main class="content">
      <div class="topbar">
        <button class="chip" type="button" @click="toggleLang">
          {{ lang === 'fr' ? 'FR' : 'EN' }}
        </button>
      </div>

      <slot />

      <footer class="footer">
        <span class="muted">© {{ new Date().getFullYear() }} — Portfolio</span>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.topbar{
  display:flex;
  justify-content:flex-end;
  padding: 10px 16px;
}
</style>
