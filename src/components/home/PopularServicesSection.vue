<template>
  <section class="popular-services-section py-20 lg:py-28 px-4 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#faf7ff] via-white to-white"></div>
    
    <div class="container mx-auto relative z-10 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Популярные
          <span class="text-[#6b2dd4]">
            услуги
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Прозрачные цены, качественный ремонт, гарантия на все работы
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <!-- Gradient Accent Bar -->
          <div class="accent-bar"></div>

          <!-- Service Content -->
          <div class="service-content">
            <h3 class="service-title">
              {{ service.name }}
            </h3>
            <p class="service-description">
              {{ service.description }}
            </p>
            <div class="service-price-wrapper">
              <span class="service-price">{{ service.price }} ₸</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-16 lg:mt-20">
        <a href="/services" class="cta-button">
          <span>Посмотреть все услуги</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { popularServices } from '@/data/index.js'

const services = popularServices
</script>

<style scoped>
.popular-services-section {
  position: relative;
}

/* Service Card */
.service-card {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 1.25rem;
  padding: 1.75rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
  display: flex;
  flex-direction: column;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(107, 45, 212, 0.02);
  opacity: 0;
  transition: opacity 0.35s;
  border-radius: 1.25rem;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(107, 45, 212, 0.12), 0 0 0 1px rgba(107, 45, 212, 0.08);
  border-color: rgba(107, 45, 212, 0.15);
}

.service-card:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Accent Bar */
.accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #6b2dd4;
  opacity: 0;
  transition: opacity 0.35s;
}

.service-card:hover .accent-bar {
  opacity: 1;
}

/* Service Content */
.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Service Title */
.service-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s;
}

.service-card:hover .service-title {
  color: #6b2dd4;
}

/* Service Description */
.service-description {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

/* Service Price Wrapper */
.service-price-wrapper {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.service-price {
  font-size: 1.75rem;
  font-weight: 800;
  color: #6b2dd4;
  transition: all 0.35s;
  display: inline-block;
  position: relative;
}

.service-card:hover .service-price {
  transform: scale(1.05);
  filter: drop-shadow(0 2px 8px rgba(107, 45, 212, 0.2));
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
@media (max-width: 640px) {
  .popular-services-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .service-card {
    padding: 1.25rem;
  }

  .service-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .service-description {
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
  }

  .service-price {
    font-size: 1.5rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .service-card {
    padding: 2rem;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-price {
    font-size: 2rem;
  }
}
</style>
