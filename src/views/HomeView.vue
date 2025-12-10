<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4" style="background: linear-gradient(135deg, #5221a6 0%, #6b2dd4 40%, #ffc700 100%);">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Профессиональный Ремонт Телефонов - Планшетов - Ноутбуков - MacBook - iMac - iPad - Apple Watch в Алматы
            </h1>
            <p class="text-xl mb-8 text-white/90">
              Бесплатная диагностика • Опытные мастера • Гарантия на все работы • 
              Прозрачные цены • Оплата после ремонта
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#contact-teaser" class="inline-block">
                <BaseButton
                  variant="secondary"
                  size="lg"
                  class="w-full sm:w-auto !bg-white !text-[#5221a6] hover:!bg-white/90 !border-2 !border-white"
                >
                  Оставить заявку
                </BaseButton>
              </a>
              <BaseButton variant="outline" size="lg" class="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10">
                <a href="https://wa.me/77756511161" target="_blank" class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Написать в WhatsApp
                </a>
              </BaseButton>
            </div>
          </div>
          <div class="hidden lg:flex items-center justify-center relative h-[500px]">
            <!-- Animated Cards Container -->
            <div class="relative w-full h-full flex items-center justify-center">
              <!-- Card 1: Телефоны -->
              <div
                ref="card1"
                class="absolute w-56 h-56 rounded-3xl flex flex-col items-center justify-center"
                :style="card1Style"
                @mouseenter="handleMouseEnter(0)"
                @mouseleave="handleMouseLeave(0)"
                @mousemove="handleMouseMove($event, 0)"
              >
                <div class="backdrop-blur-xl rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center border-2 border-white/40 shadow-2xl card-glow-1">
                  <svg class="w-16 h-16 mb-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <div class="text-xl font-bold text-white drop-shadow-lg">Телефоны</div>
                </div>
              </div>

              <!-- Card 2: Ноутбуки -->
              <div
                ref="card2"
                class="absolute w-56 h-56 rounded-3xl flex flex-col items-center justify-center z-10"
                :style="card2Style"
                @mouseenter="handleMouseEnter(1)"
                @mouseleave="handleMouseLeave(1)"
                @mousemove="handleMouseMove($event, 1)"
              >
                <div class="backdrop-blur-xl rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center border-2 border-white/40 shadow-2xl card-glow-2">
                  <svg class="w-16 h-16 mb-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div class="text-xl font-bold text-white drop-shadow-lg">Ноутбуки</div>
                </div>
              </div>

              <!-- Card 3: Планшеты -->
              <div
                ref="card3"
                class="absolute w-56 h-56 rounded-3xl flex flex-col items-center justify-center z-20"
                :style="card3Style"
                @mouseenter="handleMouseEnter(2)"
                @mouseleave="handleMouseLeave(2)"
                @mousemove="handleMouseMove($event, 2)"
              >
                <div class="backdrop-blur-xl rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center border-2 border-white/40 shadow-2xl card-glow-3">
                  <svg class="w-16 h-16 mb-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <div class="text-xl font-bold text-white drop-shadow-lg">Планшеты</div>
                </div>
              </div>

              <!-- Card 4: Быстро -->
              <div
                ref="card4"
                class="absolute w-56 h-56 rounded-3xl flex flex-col items-center justify-center z-30"
                :style="card4Style"
                @mouseenter="handleMouseEnter(3)"
                @mouseleave="handleMouseLeave(3)"
                @mousemove="handleMouseMove($event, 3)"
              >
                <div class="backdrop-blur-xl rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center border-2 border-white/40 shadow-2xl card-glow-4">
                  <svg class="w-16 h-16 mb-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <div class="text-xl font-bold text-white drop-shadow-lg">Быстро</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Почему нас выбирают
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="(feature, index) in features" :key="index">
            <div class="text-center">
              <div class="flex justify-center mb-4" v-html="feature.icon"></div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- What We Repair -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Что мы ремонтируем
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BaseCard v-for="(device, index) in devices" :key="index">
            <div class="text-center">
              <div class="flex justify-center mb-4" v-html="device.icon"></div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ device.title }}</h3>
              <p class="text-gray-600 mb-4">{{ device.description }}</p>
              <div class="grid grid-cols-3 gap-3 mt-6">
                <div 
                  v-for="(brand, i) in device.brands" 
                  :key="i" 
                  class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px]"
                  :title="brand.name"
                >
                  <img 
                    v-if="brand.logoUrl && brand.logoUrl !== ''" 
                    :src="brand.logoUrl" 
                    :alt="brand.name"
                    class="h-10 w-auto object-contain max-w-full mb-2"
                    @error="handleImageError($event, brand)"
                  />
                  <span class="text-xs text-gray-600 font-medium text-center leading-tight">
                    {{ brand.name }}
                  </span>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Popular Services & Prices -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Типовые поломки и цены от
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="(service, index) in popularServices" :key="index">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ service.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ service.description }}</p>
            <p class="text-gray-700 font-bold text-xl">от {{ service.price }} ₸</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Как мы работаем
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div v-for="(step, index) in workSteps" :key="index" class="text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              {{ index + 1 }}
            </div>
            <h3 class="font-semibold mb-2 text-gray-800">{{ step.title }}</h3>
            <p class="text-sm text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Warranty Teaser -->
    <section class="py-16 px-4 bg-gray-800">
      <div class="container mx-auto text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Гарантия и безопасность</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Все работы выполняются с официальной гарантией. Мы бережно относимся к вашим данным 
          и обеспечиваем полную конфиденциальность.
        </p>
        <router-link to="/warranty" class="flex items-center justify-center">
          <BaseButton variant="secondary" size="lg" class="!bg-white !text-gray-800 hover:!bg-gray-100">
            Подробнее о гарантии
          </BaseButton>
        </router-link>
      </div>
    </section>

    <!-- Reviews -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Отзывы клиентов
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BaseCard v-for="(review, index) in reviews" :key="index">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ review.name }}</h4>
                <p class="text-sm text-gray-500">{{ review.device }}</p>
              </div>
            </div>
            <div class="flex mb-3">
              <span v-for="i in 5" :key="i" class="text-gray-400">★</span>
            </div>
            <p class="text-gray-600">{{ review.text }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Contact Teaser -->
    <section id="contact-teaser" class="py-16 px-4 scroll-mt-25">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Свяжитесь с нами</h2>
        <p class="text-lg text-gray-600 mb-8">
          г. Алматы, 5-й микрорайон, 19Б, торговый дом М5<br>
          Телефон: <a href="tel:87756511161" class="text-gray-700 font-semibold hover:text-gray-900">+7 775 651 11 61</a>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contacts" class="w-full sm:w-auto">
            <BaseButton variant="primary" size="lg" class="w-full sm:w-auto">Все контакты</BaseButton>
          </router-link>
          <BaseButton variant="secondary" size="lg" class="w-full sm:w-auto">
            <a href="https://wa.me/77001234567" target="_blank" class="flex items-center justify-center gap-2">
              Написать в WhatsApp
            </a>
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'

// Refs for cards
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)

// Card rotation states
const cardRotations = ref([
  { rotateX: 0, rotateY: 0, isHovered: false },
  { rotateX: 0, rotateY: 0, isHovered: false },
  { rotateX: 0, rotateY: 0, isHovered: false },
  { rotateX: 0, rotateY: 0, isHovered: false }
])

// Animation delay for staggered entrance
const animationDelays = [0, 0.1, 0.2, 0.3]

// Handle mouse enter
const handleMouseEnter = (index) => {
  cardRotations.value[index].isHovered = true
}

// Handle mouse leave
const handleMouseLeave = (index) => {
  cardRotations.value[index].isHovered = false
  cardRotations.value[index].rotateX = 0
  cardRotations.value[index].rotateY = 0
}

// Handle mouse move for 3D tilt effect
const handleMouseMove = (event, index) => {
  if (!cardRotations.value[index].isHovered) return
  
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  const mouseX = event.clientX - centerX
  const mouseY = event.clientY - centerY
  
  // Calculate rotation (max 20 degrees for more powerful effect)
  const maxRotation = 20
  const rotateY = (mouseX / rect.width) * maxRotation
  const rotateX = -(mouseY / rect.height) * maxRotation
  
  cardRotations.value[index].rotateY = rotateY
  cardRotations.value[index].rotateX = rotateX
}

// Card positions - grid layout without overlap
// Card size: w-56 h-56 = 224px, spacing: 120px from center = 16px gap between cards
const cardPositions = [
  { x: -120, y: -120 },  // Card 1: top-left
  { x: 120, y: -120 },    // Card 2: top-right
  { x: -120, y: 120 },    // Card 3: bottom-left
  { x: 120, y: 120 }      // Card 4: bottom-right
]

// Computed styles for each card with 3D transforms
const card1Style = computed(() => {
  const rotation = cardRotations.value[0]
  const pos = cardPositions[0]
  const scale = rotation.isHovered ? 1.08 : 1
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) perspective(1200px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(${scale})`,
    transition: rotation.isHovered ? 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `fadeInUpScale 1s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelays[0]}s forwards`
  }
})

const card2Style = computed(() => {
  const rotation = cardRotations.value[1]
  const pos = cardPositions[1]
  const scale = rotation.isHovered ? 1.08 : 1
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) perspective(1200px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(${scale})`,
    transition: rotation.isHovered ? 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `fadeInUpScale 1s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelays[1]}s forwards`
  }
})

const card3Style = computed(() => {
  const rotation = cardRotations.value[2]
  const pos = cardPositions[2]
  const scale = rotation.isHovered ? 1.08 : 1
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) perspective(1200px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(${scale})`,
    transition: rotation.isHovered ? 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `fadeInUpScale 1s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelays[2]}s forwards`
  }
})

const card4Style = computed(() => {
  const rotation = cardRotations.value[3]
  const pos = cardPositions[3]
  const scale = rotation.isHovered ? 1.08 : 1
  return {
    transform: `translate(${pos.x}px, ${pos.y}px) perspective(1200px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(${scale})`,
    transition: rotation.isHovered ? 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: `fadeInUpScale 1s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelays[3]}s forwards`
  }
})

const features = ref([
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
    title: 'Бесплатная диагностика',
    description: 'Определяем причину поломки без оплаты. Если ремонтируете у нас, диагностика засчитывается в стоимость.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    title: 'Опытные мастера',
    description: 'Специалисты с многолетним опытом работы. Регулярно повышают квалификацию и следят за новинками.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    title: 'Качественные запчасти',
    description: 'Используем только оригинальные и сертифицированные запчасти от проверенных поставщиков.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    title: 'Быстрые сроки',
    description: 'Большинство ремонтов выполняем в день обращения. Сложные случаи - в течение 1-3 дней.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    title: 'Гарантия на работы',
    description: 'Предоставляем официальную гарантию на все виды работ и установленные запчасти.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    title: 'Честные цены',
    description: 'Прозрачное ценообразование без скрытых доплат. Согласовываем стоимость до начала работ.'
  }
])

const devices = ref([
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    title: 'Смартфоны',
    description: 'Ремонт всех популярных брендов',
    brands: [
      { name: 'iPhone', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png' },
      { name: 'Xiaomi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2560px-Xiaomi_logo_%282021-%29.svg.png' },
      { name: 'Huawei', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Huawei_wordmark_2019.svg/2560px-Huawei_wordmark_2019.svg.png' },
      { name: 'OPPO', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png' },
      { name: 'Vivo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vivo_logo_2019.svg/2560px-Vivo_logo_2019.svg.png' },
      { name: 'Realme', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png' }
    ]
  },
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    title: 'Ноутбуки и компьютеры',
    description: 'Восстановление работоспособности ПК',
    brands: [
      { name: 'Apple MacBook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Lenovo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/2560px-Lenovo_%282015%29.svg.png' },
      { name: 'HP', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/2560px-HP_logo_2025.svg.png' },
      { name: 'Dell', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png' },
      { name: 'ASUS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png' },
      { name: 'Acer', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_Acer.png/2560px-Logo_Acer.png' },
      { name: 'MSI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Micro-Star_International_logo.svg/2560px-Micro-Star_International_logo.svg.png' }
    ]
  },
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    title: 'Планшеты',
    description: 'Ремонт всех типов планшетов',
    brands: [
      { name: 'iPad', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Samsung Galaxy Tab', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png' },
      { name: 'Lenovo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/2560px-Lenovo_%282015%29.svg.png' },
      { name: 'Huawei', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Huawei_wordmark_2019.svg/2560px-Huawei_wordmark_2019.svg.png' },
      { name: 'Xiaomi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2560px-Xiaomi_logo_%282021-%29.svg.png' }
    ]
  }
])

const handleImageError = (event, brand) => {
  event.target.style.display = 'none'
  brand.logoUrl = null
}

const popularServices = ref([
  { name: 'Замена дисплея IPS', description: 'Установка IPS-модуля на телефон или планшет', price: '6 000' },
  { name: 'Замена батареи', description: 'Подбор и установка новой батареи', price: '8 000' },
  { name: 'Замена порта Type-C', description: 'Замена разъёма Type-C', price: '6 000' },
  { name: 'Офисные ноутбуки — чистка + MX-4', description: 'Чистка системы охлаждения, замена термопасты MX-4', price: '8 000' },
  { name: 'MacBook — чистка + MX-4', description: 'Чистка системы охлаждения, термопаста MX-4', price: '10 000' },
  { name: 'Замена шлейфов', description: 'Шлейф кнопок, дисплея, датчиков', price: '5 000' },
  { name: 'Замена слухового/полифонического динамика', description: 'Чистка или замена динамиков', price: '6 000' },
  { name: 'Замена порта Micro-USB', description: 'Замена разъёма Micro-USB', price: '3 000' },
  { name: 'Замена шлейфа зарядки', description: 'Шлейф зарядного модуля', price: '5 000' }
])

const workSteps = ref([
  { title: 'Заявка', description: 'Оставляете заявку или звоните нам' },
  { title: 'Диагностика', description: 'Бесплатная диагностика устройства' },
  { title: 'Согласование', description: 'Озвучиваем цену и сроки ремонта' },
  { title: 'Ремонт', description: 'Выполняем работы качественно и быстро' },
  { title: 'Гарантия', description: 'Выдаём устройство с гарантийным талоном' }
])

const reviews = ref([
  {
    name: 'Александр',
    device: 'iPhone 12',
    text: 'Отлично починили разбитый экран за один день. Цена адекватная, мастер всё объяснил. Рекомендую!'
  },
  {
    name: 'Мария',
    device: 'MacBook Pro',
    text: 'Ноутбук перегревался, почистили и заменили термопасту. Теперь работает как новый. Спасибо!'
  },
  {
    name: 'Дмитрий',
    device: 'Samsung Galaxy',
    text: 'Быстро восстановили телефон после попадания воды. Очень доволен сервисом и гарантией.'
  }
])
</script>

<style scoped>
@keyframes fadeInUpScale {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.7) rotateY(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateY(0deg);
  }
}

.card-glow-1 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  box-shadow: 0 20px 60px rgba(82, 33, 166, 0.4), 0 0 40px rgba(255, 199, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-glow-1:hover {
  box-shadow: 0 25px 80px rgba(82, 33, 166, 0.6), 0 0 60px rgba(255, 199, 0, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.card-glow-2 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  box-shadow: 0 20px 60px rgba(107, 45, 212, 0.4), 0 0 40px rgba(255, 199, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-glow-2:hover {
  box-shadow: 0 25px 80px rgba(107, 45, 212, 0.6), 0 0 60px rgba(255, 199, 0, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.card-glow-3 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  box-shadow: 0 20px 60px rgba(255, 199, 0, 0.4), 0 0 40px rgba(82, 33, 166, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-glow-3:hover {
  box-shadow: 0 25px 80px rgba(255, 199, 0, 0.6), 0 0 60px rgba(82, 33, 166, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.card-glow-4 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  box-shadow: 0 20px 60px rgba(82, 33, 166, 0.3), 0 0 40px rgba(107, 45, 212, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-glow-4:hover {
  box-shadow: 0 25px 80px rgba(82, 33, 166, 0.5), 0 0 60px rgba(107, 45, 212, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2);
}
</style>

