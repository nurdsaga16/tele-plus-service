<template>
  <section class="relative flex items-center justify-center overflow-hidden hero-section">
    <!-- Background Texture/Noise -->
    <div class="absolute inset-0 hero-texture"></div>

    <!-- Soft Light Spots -->
    <div class="absolute inset-0 hero-lights"></div>

    <div class="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10 py-12 lg:py-16">
      <div class="grid grid-cols-1 gap-12 lg:gap-16 items-center max-w-4xl mx-auto">
        <!-- Left: Text Content -->
        <div class="space-y-8 lg:space-y-10 text-white lg:px-8 xl:px-12">
          <div class="space-y-5 lg:space-y-6">
            <h1 class="text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-[1.15] tracking-[-0.02em] text-center lg:text-left text-white drop-shadow-lg">
              Профессиональный Ремонт Телефонов - Планшетов - Ноутбуков - MacBook - iMac - iPad - Apple Watch в Алматы
            </h1>
          </div>

          <!-- Value Pills -->
          <div class="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start">
            <div class="value-pill">
              <div class="value-dot bg-green-400"></div>
              <span>Бесплатная диагностика</span>
            </div>
            <div class="value-pill">
              <div class="value-dot bg-blue-400"></div>
              <span>Опытные мастера</span>
            </div>
            <div class="value-pill">
              <div class="value-dot bg-purple-400"></div>
              <span>Гарантия на все работы</span>
            </div>
            <div class="value-pill">
              <div class="value-dot bg-red-400"></div>
              <span>Прозрачные цены</span>
            </div>
            <div class="value-pill">
              <div class="value-dot bg-orange-400"></div>
              <span>Оплата после ремонта</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-4 lg:pt-6 justify-center lg:justify-start">
            <a href="#contact-teaser" class="inline-block">
              <button class="cta-primary">
                Оставить заявку
              </button>
            </a>
            <a href="https://wa.me/77756511161" target="_blank" class="inline-block">
              <button class="cta-secondary">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Написать в WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #5221a6 0%, #6b2dd4 40%, #ffc700 100%);
  position: relative;
}

.hero-texture {
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"),
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 199, 0, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.hero-lights {
  background:
    radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(255, 199, 0, 0.1) 0%, transparent 40%);
  pointer-events: none;
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

.value-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.value-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 199, 0, 0.1) 0%, rgba(107, 45, 212, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 9999px;
}

.value-pill:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(255, 199, 0, 0.2);
}

.value-pill:hover::before {
  opacity: 1;
}

.value-pill:hover .value-dot {
  transform: scale(1.2);
  box-shadow: 0 0 8px currentColor;
}

@media (min-width: 1024px) {
  .value-pill {
    padding: 0.625rem 1.25rem;
    font-size: 0.9375rem;
  }
}

.value-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
  flex-shrink: 0;
}

.cta-primary {
  padding: 1.125rem 2.75rem;
  background: white;
  color: #5221a6;
  border: none;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(255, 255, 255, 0.3);
  width: 100%;
  position: relative;
  overflow: hidden;
}

@media (min-width: 640px) {
  .cta-primary {
    width: auto;
  }
}

.cta-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(255, 255, 255, 0.2);
}

.cta-primary:hover::before {
  opacity: 1;
}

.cta-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.125rem 2.75rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  backdrop-filter: blur(10px);
}

@media (min-width: 640px) {
  .cta-secondary {
    width: auto;
  }
}

.cta-secondary:hover {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Value Pills Container */
.value-pills-container {
  width: 100%;
  max-width: 500px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Central Icon */
.central-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: iconPulse 4s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(255, 199, 0, 0.4));
}

@keyframes iconPulse {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
}

/* Value Pills Grid */
.value-pills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* Value Pill Card */
.value-pill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
    0 0 0 0 rgba(255, 199, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.value-pill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(255, 199, 0, 0.1) 0%,
      rgba(107, 45, 212, 0.1) 50%,
      rgba(82, 33, 166, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 2rem;
}

.value-pill-card:hover {
  animation-play-state: paused;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2),
    0 0 0 4px rgba(255, 199, 0, 0.4),
    0 0 40px rgba(255, 199, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

.pill-1:hover {
  transform: translate(-10px, -8px) scale(1.05);
}

.pill-2:hover {
  transform: translate(10px, -8px) scale(1.05);
}

.pill-3:hover {
  transform: translate(-8px, -8px) scale(1.05);
}

.pill-4:hover {
  transform: translate(8px, -8px) scale(1.05);
}

.pill-5:hover {
  transform: translate(-12px, -8px) scale(1.05);
}

.pill-6:hover {
  transform: translate(12px, -8px) scale(1.05);
}

.value-pill-card:hover::before {
  opacity: 1;
}

/* Pill Icon */
.pill-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc700;
  filter: drop-shadow(0 0 8px rgba(255, 199, 0, 0.6));
  transition: all 0.4s;
}

.value-pill-card:hover .pill-icon {
  transform: scale(1.15) rotate(5deg);
  color: #ffc700;
  filter: drop-shadow(0 0 12px rgba(255, 199, 0, 0.8));
}

.pill-icon svg {
  width: 100%;
  height: 100%;
}

/* Pill Text */
.pill-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  line-height: 1.3;
  transition: color 0.4s;
}

.value-pill-card:hover .pill-text {
  color: white;
}

/* Individual Pill Animations */
.pill-1 {
  animation: floatPill1 6s ease-in-out infinite;
  animation-delay: 0s;
}

.pill-2 {
  animation: floatPill2 6s ease-in-out infinite;
  animation-delay: 1s;
}

.pill-3 {
  animation: floatPill3 6s ease-in-out infinite;
  animation-delay: 2s;
}

.pill-4 {
  animation: floatPill4 6s ease-in-out infinite;
  animation-delay: 3s;
}

.pill-5 {
  animation: floatPill5 6s ease-in-out infinite;
  animation-delay: 4s;
}

.pill-6 {
  animation: floatPill6 6s ease-in-out infinite;
  animation-delay: 5s;
}

/* Float Animations with individual X offsets */
@keyframes floatPill1 {

  0%,
  100% {
    transform: translate(-10px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(-10px, -5px);
    opacity: 0.95;
  }
}

@keyframes floatPill2 {

  0%,
  100% {
    transform: translate(10px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(10px, -5px);
    opacity: 0.95;
  }
}

@keyframes floatPill3 {

  0%,
  100% {
    transform: translate(-8px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(-8px, -5px);
    opacity: 0.95;
  }
}

@keyframes floatPill4 {

  0%,
  100% {
    transform: translate(8px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(8px, -5px);
    opacity: 0.95;
  }
}

@keyframes floatPill5 {

  0%,
  100% {
    transform: translate(-12px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(-12px, -5px);
    opacity: 0.95;
  }
}

@keyframes floatPill6 {

  0%,
  100% {
    transform: translate(12px, 0);
    opacity: 1;
  }

  50% {
    transform: translate(12px, -5px);
    opacity: 0.95;
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .value-pills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .value-pill-card {
    padding: 1.25rem 1rem;
  }

  .pill-text {
    font-size: 0.875rem;
  }
}
</style>
