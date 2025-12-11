<template>
  <section class="what-we-repair-section py-20 lg:py-28 px-4 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#faf7ff] via-white to-white"></div>
    
    <div class="container mx-auto relative z-10 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Что мы
          <span class="text-[#6b2dd4]">
            ремонтируем
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Профессиональный ремонт всех типов устройств с гарантией качества
        </p>
      </div>

      <!-- Devices Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(device, index) in devices"
          :key="index"
          class="device-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Device Icon -->
          <div class="device-icon-wrapper">
            <div class="device-icon" v-html="getDeviceIcon(device.title)"></div>
            <div class="icon-glow"></div>
          </div>

          <!-- Device Title -->
          <h3 class="device-title">{{ device.title }}</h3>

          <!-- Device Description -->
          <p class="device-description">{{ device.description }}</p>

          <!-- Brands Grid -->
          <div class="brands-grid">
              <div 
                v-for="(brand, i) in device.brands" 
                :key="i" 
              class="brand-badge"
                :title="brand.name"
              >
                <img 
                  v-if="brand.logoUrl && brand.logoUrl !== ''" 
                  :src="brand.logoUrl" 
                  :alt="brand.name"
                class="brand-logo"
                  @error="handleImageError($event, brand)"
                />
              <span v-else class="brand-name">{{ brand.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { devices } from '@/data/index.js'

const handleImageError = (event, brand) => {
  event.target.style.display = 'none'
  brand.logoUrl = null
}

const getDeviceIcon = (title) => {
  const uniqueId = title.replace(/\s+/g, '').toLowerCase()
  
  const icons = {
    'Смартфоны': `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="8" width="28" height="48" rx="3" stroke="#6b2dd4" stroke-width="2.5" fill="none"/>
        <rect x="22" y="12" width="20" height="36" rx="1" fill="#6b2dd4" opacity="0.1"/>
        <circle cx="32" cy="50" r="2" fill="#6b2dd4"/>
        <rect x="28" y="6" width="8" height="2" rx="1" fill="#6b2dd4" opacity="0.6"/>
      </svg>
    `,
    'Ноутбуки и компьютеры': `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="48" height="32" rx="2" stroke="#6b2dd4" stroke-width="2.5" fill="none"/>
        <rect x="10" y="14" width="44" height="28" rx="1" fill="#6b2dd4" opacity="0.15"/>
        <rect x="6" y="44" width="52" height="4" rx="1" fill="#6b2dd4" opacity="0.4"/>
        <rect x="28" y="46" width="8" height="2" rx="1" fill="#6b2dd4" opacity="0.6"/>
        <line x1="16" y1="20" x2="48" y2="20" stroke="#6b2dd4" stroke-width="1" opacity="0.3"/>
      </svg>
    `,
    'Планшеты': `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="8" width="36" height="48" rx="3" stroke="#6b2dd4" stroke-width="2.5" fill="none"/>
        <rect x="16" y="10" width="32" height="44" rx="1" fill="#6b2dd4" opacity="0.1"/>
        <circle cx="32" cy="54" r="2.5" fill="#6b2dd4"/>
        <rect x="28" y="6" width="8" height="2" rx="1" fill="#6b2dd4" opacity="0.6"/>
        <line x1="20" y1="18" x2="44" y2="18" stroke="#6b2dd4" stroke-width="1" opacity="0.2"/>
      </svg>
    `
  }
  
  return icons[title] || icons['Смартфоны']
}
</script>

<style scoped>
.what-we-repair-section {
  position: relative;
}

/* Device Card */
.device-card {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.device-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(107, 45, 212, 0.02);
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 1.5rem;
}

.device-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(107, 45, 212, 0.1);
  border-color: rgba(107, 45, 212, 0.2);
}

.device-card:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Device Icon Wrapper */
.device-icon-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  height: 100px;
}

.device-icon {
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 2;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 4px 16px rgba(107, 45, 212, 0.2));
}

.device-icon svg {
  width: 100%;
  height: 100%;
}

.device-card:hover .device-icon {
  transform: scale(1.15) translateY(-6px);
  filter: drop-shadow(0 8px 24px rgba(107, 45, 212, 0.3));
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(107, 45, 212, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s, transform 0.4s;
  z-index: 1;
  animation: pulseGlow 3s ease-in-out infinite;
}

.device-card:hover .icon-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.3);
  animation: pulseGlowHover 1.5s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes pulseGlowHover {
  0%, 100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.3);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.4);
  }
}

/* Device Title */
.device-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s;
}

.device-card:hover .device-title {
  color: #6b2dd4;
}

/* Device Description */
.device-description {
  font-size: 0.9375rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Brands Grid */
.brands-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
}

/* Brand Badge */
.brand-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  background: #f9fafb;
  border: 1px solid #f0f0f0;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 70px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.brand-badge::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(107, 45, 212, 0.05) 0%, rgba(255, 199, 0, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.brand-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(82, 33, 166, 0.15);
  border-color: rgba(107, 45, 212, 0.2);
  background: white;
}

.brand-badge:hover::before {
  opacity: 1;
}

.brand-logo {
  max-width: 100%;
  max-height: 32px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.3) opacity(0.8);
  transition: all 0.3s;
}

.brand-badge:hover .brand-logo {
  filter: grayscale(0) opacity(1);
  transform: scale(1.05);
}

.brand-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-align: center;
  line-height: 1.2;
}

.brand-badge:hover .brand-name {
  color: #1a1a1a;
}

/* Responsive */
@media (max-width: 640px) {
  .what-we-repair-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .device-card {
    padding: 1.5rem;
  }

  .device-icon-wrapper {
    height: 80px;
    margin-bottom: 1.25rem;
  }

  .device-icon {
    width: 64px;
    height: 64px;
  }

  .device-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .device-description {
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
  }

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .brand-badge {
    min-height: 60px;
    padding: 0.5rem 0.375rem;
  }

  .brand-logo {
    max-height: 28px;
  }

  .brand-name {
    font-size: 0.6875rem;
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .device-card {
    padding: 1.75rem;
  }

  .brands-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .device-card {
    padding: 2.5rem;
  }

  .device-icon-wrapper {
    height: 120px;
    margin-bottom: 2rem;
  }

  .device-icon {
    width: 96px;
    height: 96px;
  }

  .icon-glow {
    width: 120px;
    height: 120px;
  }
}
</style>
