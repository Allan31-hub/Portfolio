<script setup>
const props = defineProps({
  error: Object
})
const status = computed(() => props.error?.statusCode || 500)
const message = computed(() => props.error?.message || 'Une erreur est survenue.')
</script>

<template>
  <div class="error">
    <div class="card">
      <h1>Erreur {{ status }}</h1>
      <p class="muted">{{ message }}</p>
      <NuxtLink class="btn" to="/">Retour à l’accueil</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.error{min-height:100vh;display:grid;place-items:center;padding:24px}
.card{max-width:520px}
</style>
