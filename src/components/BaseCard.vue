<template>
  <div
    :class="[
      'bg-white rounded-xl shadow-md',
      'p-6 border border-gray-100'
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true
  }
})
</script>

