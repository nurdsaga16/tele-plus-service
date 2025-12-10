<template>
  <div class="min-h-screen py-12 px-4">
    <div class="container mx-auto">
      <!-- Intro -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Наши услуги</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Здесь собраны основные виды ремонта телефонов, ноутбуков и планшетов. 
          Если вы не нашли свою проблему, свяжитесь с нами — мы обязательно поможем!
        </p>
      </div>

      <!-- Phone Repair -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Ремонт мобильных телефонов
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="(service, index) in phoneServices" :key="index">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ service.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ service.description }}</p>
            <div class="flex justify-between items-center">
                <span class="text-gray-700 font-bold">от {{ service.price }} ₸</span>
              <span class="text-sm text-gray-500">{{ service.time }}</span>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Laptop Repair -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Ремонт ноутбуков и компьютеров
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="(service, index) in laptopServices" :key="index">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ service.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ service.description }}</p>
            <div class="flex justify-between items-center">
                <span class="text-gray-700 font-bold">от {{ service.price }} ₸</span>
              <span class="text-sm text-gray-500">{{ service.time }}</span>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Tablet Repair -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Ремонт планшетов
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="(service, index) in tabletServices" :key="index">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ service.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ service.description }}</p>
            <div class="flex justify-between items-center">
                <span class="text-gray-700 font-bold">от {{ service.price }} ₸</span>
              <span class="text-sm text-gray-500">{{ service.time }}</span>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- CTA Block -->
      <section class="bg-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Не нашли свою проблему?</h2>
        <p class="text-xl mb-8">
          Опишите вашу ситуацию, и мы подскажем решение. 
          Консультация бесплатна!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="secondary" size="lg" class="!bg-white !text-gray-800 hover:!bg-gray-100">
            <a href="tel:87756511161" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Позвонить
            </a>
          </BaseButton>
          <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-gray-800">
            <a href="https://wa.me/77756511161" target="_blank" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Написать в WhatsApp
            </a>
          </BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

const phoneServices = ref([
  {
    name: 'Замена экрана',
    description: 'Установка нового дисплея с тачскрином. Используем оригинальные и качественные аналоги.',
    price: '15 000',
    time: 'от 1 часа'
  },
  {
    name: 'Замена заднего стекла',
    description: 'Восстановление задней панели смартфона. Сохраняем водозащиту при возможности.',
    price: '8 000',
    time: 'от 30 минут'
  },
  {
    name: 'Замена аккумулятора',
    description: 'Установка новой батареи. Все модели, включая iPhone с сохранением калибровки.',
    price: '8 000',
    time: 'от 30 минут'
  },
  {
    name: 'Ремонт разъёма зарядки',
    description: 'Восстановление контактов или замена разъёма. Решаем проблемы с зарядкой и синхронизацией.',
    price: '5 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт динамиков и микрофона',
    description: 'Чистка или замена аудиокомпонентов. Восстанавливаем качество звука и разговоров.',
    price: '6 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт камеры',
    description: 'Восстановление работы основной или фронтальной камеры. Замена модуля при необходимости.',
    price: '7 000',
    time: 'от 1 часа'
  },
  {
    name: 'Прошивка и настройка ПО',
    description: 'Переустановка операционной системы, удаление вирусов, разблокировка, оптимизация.',
    price: '5 000',
    time: 'от 1 часа'
  },
  {
    name: 'Восстановление после попадания влаги',
    description: 'Чистка от коррозии, восстановление контактов. Срочная помощь при попадании воды.',
    price: '10 000',
    time: 'от 2 часов'
  },
  {
    name: 'Замена кнопок',
    description: 'Восстановление работы кнопок включения, громкости, Home. Все модели устройств.',
    price: '4 000',
    time: 'от 30 минут'
  }
])

const laptopServices = ref([
  {
    name: 'Чистка системы охлаждения',
    description: 'Удаление пыли из вентиляторов и радиаторов. Профилактика перегрева и шума.',
    price: '6 000',
    time: 'от 1 часа'
  },
  {
    name: 'Замена термопасты',
    description: 'Обновление термоинтерфейса процессора и видеокарты. Снижение температуры на 10-15°C.',
    price: '4 000',
    time: 'от 30 минут'
  },
  {
    name: 'Замена клавиатуры',
    description: 'Установка новой клавиатуры. Все модели ноутбуков, включая MacBook.',
    price: '12 000',
    time: 'от 1 часа'
  },
  {
    name: 'Замена экрана ноутбука',
    description: 'Установка нового дисплея. Подбор матрицы под конкретную модель.',
    price: '25 000',
    time: 'от 2 часов'
  },
  {
    name: 'Установка и переустановка ОС',
    description: 'Настройка Windows, macOS, Linux. Установка драйверов и необходимого ПО.',
    price: '5 000',
    time: 'от 2 часов'
  },
  {
    name: 'Установка и настройка SSD',
    description: 'Замена HDD на SSD или добавление SSD. Перенос данных и настройка системы.',
    price: '8 000',
    time: 'от 2 часов'
  },
  {
    name: 'Увеличение оперативной памяти',
    description: 'Добавление или замена модулей RAM. Подбор совместимых планок памяти.',
    price: '5 000',
    time: 'от 30 минут'
  },
  {
    name: 'Удаление вирусов',
    description: 'Полная очистка системы от вредоносного ПО. Восстановление работоспособности.',
    price: '5 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт разъёма питания',
    description: 'Восстановление или замена гнезда зарядки. Решение проблем с зарядкой ноутбука.',
    price: '7 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт материнской платы',
    description: 'Диагностика и ремонт компонентов материнской платы. Восстановление после короткого замыкания.',
    price: '15 000',
    time: 'от 3 дней'
  }
])

const tabletServices = ref([
  {
    name: 'Замена экрана и тачскрина',
    description: 'Установка нового дисплея с сенсорным слоем. Все модели планшетов.',
    price: '12 000',
    time: 'от 1 часа'
  },
  {
    name: 'Замена аккумулятора',
    description: 'Установка новой батареи. Восстановление времени автономной работы.',
    price: '10 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт разъёма питания',
    description: 'Восстановление контактов зарядки. Решение проблем с зарядкой планшета.',
    price: '5 000',
    time: 'от 1 часа'
  },
  {
    name: 'Прошивка и настройка',
    description: 'Переустановка операционной системы, разблокировка, оптимизация работы.',
    price: '5 000',
    time: 'от 1 часа'
  },
  {
    name: 'Ремонт проблем с Wi-Fi',
    description: 'Диагностика и ремонт модуля беспроводной связи. Восстановление подключения.',
    price: '6 000',
    time: 'от 1 часа'
  },
  {
    name: 'Замена кнопок',
    description: 'Восстановление работы кнопок включения и регулировки громкости.',
    price: '4 000',
    time: 'от 30 минут'
  }
])
</script>

