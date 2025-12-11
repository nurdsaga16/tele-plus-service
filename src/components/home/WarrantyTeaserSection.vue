<template>
  <section class="warranty-teaser-section py-20 lg:py-28 px-4 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-[#6b2dd4]"></div>
    
    <div class="container mx-auto relative z-10 max-w-4xl text-center">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
        Гарантия и безопасность
      </h2>
      <p class="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
        Все работы выполняются с официальной гарантией. Мы бережно относимся к вашим данным 
        и обеспечиваем полную конфиденциальность.
      </p>
      <router-link to="/warranty" class="cta-button">
        <span>Подробнее о гарантии</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.warranty-teaser-section {
  position: relative;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: white;
  color: #6b2dd4;
  border: 2px solid white;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.95);
  color: #6b2dd4;
  border-color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-button svg {
  transition: transform 0.3s;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>
