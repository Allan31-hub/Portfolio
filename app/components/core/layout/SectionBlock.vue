<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <section class="section">
    <header class="section-head">
      <p v-if="subtitle" class="kicker">{{ subtitle }}</p>
      <h2 class="h2">{{ title }}</h2>
      <div class="divider" />
    </header>
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>
