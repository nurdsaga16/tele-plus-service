<template>
  <section class="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="container mx-auto relative z-10">
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Почему выбирают
          <span class="text-[#6b2dd4]">нас</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Технологичный подход к каждому устройству</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card group"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @mouseenter="handleFeatureHover(index)"
          @mouseleave="handleFeatureLeave(index)"
        >
          <div class="glass-feature-card">
            <div class="feature-icon-wrapper" v-html="feature.icon"></div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            <div class="feature-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { features } from '@/data/index.js'

const featureHoverStates = ref(Array(features.length).fill(false))

const handleFeatureHover = (index) => {
  featureHoverStates.value[index] = true
}

const handleFeatureLeave = (index) => {
  featureHoverStates.value[index] = false
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(107, 45, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 45, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.feature-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card:hover .glass-feature-card {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(107, 45, 212, 0.2);
}

.glass-feature-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  padding: 2.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon-wrapper {
  margin-bottom: 1.5rem;
  transition: transform 0.4s;
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.feature-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(107, 45, 212, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.feature-card:hover .feature-glow {
  opacity: 1;
}
</style>

