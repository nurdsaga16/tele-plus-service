<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import FloatingActions from './components/layout/FloatingActions.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
    <FloatingActions />
  </div>
</template>

<style scoped></style>
