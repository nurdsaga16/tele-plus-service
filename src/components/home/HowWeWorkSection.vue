<template>
  <section class="how-we-work-section py-20 lg:py-28 px-4 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#faf7ff] via-white to-white"></div>
    
    <div class="container mx-auto relative z-10 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Как мы
          <span class="text-[#6b2dd4]">
            работаем
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Простой и прозрачный процесс ремонта в 5 шагов
        </p>
      </div>

      <!-- Steps Container -->
      <div class="steps-container relative">
        <!-- Connector Line (Desktop) -->
        <div class="hidden lg:block connector-line"></div>

        <!-- Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="step-card"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <!-- Step Icon Circle -->
            <div class="step-icon-wrapper">
              <div class="step-icon">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-icon-symbol" v-html="getStepIcon(step.title)"></div>
              </div>
              <div class="icon-glow"></div>
            </div>

            <!-- Step Content -->
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-16 lg:mt-20">
        <a href="#contact-teaser" class="cta-button">
          <span>Оставить заявку</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { workSteps } from '@/data/index.js'

const steps = workSteps

const getStepIcon = (title) => {
  const icons = {
    'Заявка': `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M13 8H7"/>
        <path d="M17 12H7"/>
      </svg>
    `,
    'Диагностика': `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    `,
    'Согласование': `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    `,
    'Ремонт': `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    `,
    'Гарантия': `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    `
  }
  
  return icons[title] || icons['Заявка']
}
</script>

<style scoped>
.how-we-work-section {
  position: relative;
}

/* Steps Container */
.steps-container {
  position: relative;
}

/* Connector Line (Desktop) */
.connector-line {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 2px;
  background: rgba(107, 45, 212, 0.3);
  transform: translateY(-50%);
  z-index: 1;
  border-radius: 2px;
}

.connector-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  background: rgba(107, 45, 212, 0.2);
  animation: connectorPulse 3s ease-in-out infinite;
}

@keyframes connectorPulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Step Card */
.step-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(240, 240, 240, 0.8);
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(107, 45, 212, 0.08);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(107, 45, 212, 0.02);
  opacity: 0;
  transition: opacity 0.35s;
  border-radius: 1.25rem;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(107, 45, 212, 0.15);
  border-color: rgba(107, 45, 212, 0.2);
}

.step-card:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Step Icon Wrapper */
.step-icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #6b2dd4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(107, 45, 212, 0.3), 
              0 0 0 4px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-card:hover .step-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(107, 45, 212, 0.4),
              0 0 0 4px rgba(255, 255, 255, 0.9);
}

.step-number {
  position: absolute;
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  z-index: 3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.step-icon-symbol {
  position: absolute;
  width: 32px;
  height: 32px;
  opacity: 0;
  transition: opacity 0.35s;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.step-icon-symbol svg {
  width: 100%;
  height: 100%;
}

.step-card:hover .step-number {
  opacity: 0;
}

.step-card:hover .step-icon-symbol {
  opacity: 1;
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(107, 45, 212, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  z-index: 1;
}

.step-card:hover .icon-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

/* Step Content */
.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.step-card:hover .step-title {
  color: #6b2dd4;
}

.step-description {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: white;
  color: #6b2dd4;
  border: 2px solid #6b2dd4;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(107, 45, 212, 0.1);
  text-decoration: none;
}

.cta-button:hover {
  background-color: #6b2dd4;
  color: white;
  border-color: #6b2dd4;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(107, 45, 212, 0.25);
}

.cta-button svg {
  transition: transform 0.3s;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 767px) {
  .step-card {
    padding: 1.5rem 1.25rem;
  }

  .step-icon {
    width: 70px;
    height: 70px;
  }

  .step-number {
    font-size: 1.5rem;
  }

  .step-icon-symbol {
    width: 28px;
    height: 28px;
  }

  .step-title {
    font-size: 1.125rem;
  }

  .step-description {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .step-card {
    padding: 1.75rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .step-card {
    padding: 2rem 1.5rem;
  }

  .step-icon {
    width: 90px;
    height: 90px;
  }

  .step-number {
    font-size: 2rem;
  }

  .step-icon-symbol {
    width: 36px;
    height: 36px;
  }

  .step-title {
    font-size: 1.375rem;
  }
}
</style>
