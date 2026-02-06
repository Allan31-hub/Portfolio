<script setup>
defineProps({
  open: Boolean,
  title: String
})
const emit = defineEmits(['close'])

function onBackdrop(e) {
  if (e.target?.classList?.contains('modal-backdrop')) emit('close')
}
</script>

<template>
  <teleport to="body">
    <div v-if="open" class="modal-backdrop" @click="onBackdrop">
      <div class="modal-card">
        <div class="modal-top">
          <h3 class="h3">{{ title }}</h3>
          <button class="icon-btn" @click="$emit('close')" aria-label="Fermer">✕</button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>
