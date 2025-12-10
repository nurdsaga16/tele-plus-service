<template>
  <div class="min-h-screen py-12 px-4">
    <div class="container mx-auto">
      <!-- Intro -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Цены на ремонт</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          Указанные цены являются ориентировочными и показывают стоимость работ «от». 
          Точная сумма определяется после бесплатной диагностики устройства.
        </p>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Диагностика бесплатна и засчитывается в стоимость ремонта, если вы ремонтируете устройство у нас. 
          Мастер всегда согласует цену заранее, перед началом работ.
        </p>
      </div>

      <!-- Phone Prices -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Цены на ремонт телефонов
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Услуга</th>
                <th class="px-6 py-4 text-left font-semibold">Описание</th>
                <th class="px-6 py-4 text-center font-semibold">Цена от</th>
                <th class="px-6 py-4 text-center font-semibold">Срок</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(service, index) in phonePrices" :key="index" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">{{ service.name }}</td>
                <td class="px-6 py-4 text-gray-600 text-sm">{{ service.description }}</td>
                <td class="px-6 py-4 text-center">
                  <span class="text-gray-700 font-bold">{{ service.price }} ₸</span>
                </td>
                <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ service.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Laptop Prices -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Цены на ремонт ноутбуков и ПК
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Услуга</th>
                <th class="px-6 py-4 text-left font-semibold">Описание</th>
                <th class="px-6 py-4 text-center font-semibold">Цена от</th>
                <th class="px-6 py-4 text-center font-semibold">Срок</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(service, index) in laptopPrices" :key="index" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">{{ service.name }}</td>
                <td class="px-6 py-4 text-gray-600 text-sm">{{ service.description }}</td>
                <td class="px-6 py-4 text-center">
                  <span class="text-gray-700 font-bold">{{ service.price }} ₸</span>
                </td>
                <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ service.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Tablet Prices -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg class="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Цены на ремонт планшетов
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Услуга</th>
                <th class="px-6 py-4 text-left font-semibold">Описание</th>
                <th class="px-6 py-4 text-center font-semibold">Цена от</th>
                <th class="px-6 py-4 text-center font-semibold">Срок</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(service, index) in tabletPrices" :key="index" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">{{ service.name }}</td>
                <td class="px-6 py-4 text-gray-600 text-sm">{{ service.description }}</td>
                <td class="px-6 py-4 text-center">
                  <span class="text-gray-700 font-bold">{{ service.price }} ₸</span>
                </td>
                <td class="px-6 py-4 text-center text-gray-600 text-sm">{{ service.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Info Block -->
        <section class="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 mb-16">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Важная информация</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start">
            <span class="text-gray-600 mr-2">•</span>
            <span>Указанные цены включают только стоимость работ. Запчасти оплачиваются отдельно, если требуется их замена.</span>
          </li>
          <li class="flex items-start">
            <span class="text-gray-600 mr-2">•</span>
            <span>Мастер всегда согласует стоимость запчастей и работ заранее, перед началом ремонта.</span>
          </li>
          <li class="flex items-start">
            <span class="text-gray-600 mr-2">•</span>
            <span>Окончательная цена может отличаться в зависимости от модели устройства и сложности работ.</span>
          </li>
          <li class="flex items-start">
            <span class="text-gray-600 mr-2">•</span>
            <span>Диагностика бесплатна и обязательна для точного определения стоимости ремонта.</span>
          </li>
        </ul>
      </section>

      <!-- CTA Block -->
      <section class="bg-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Узнайте точную стоимость ремонта</h2>
        <p class="text-xl mb-8">
          Отправьте фото поломки в WhatsApp или оставьте заявку, 
          и мы рассчитаем точную стоимость работ для вашего устройства.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="secondary" size="lg" class="!bg-white !text-gray-800 hover:!bg-gray-100">
            <a href="https://wa.me/77756511161?text=Здравствуйте! Хочу узнать стоимость ремонта." target="_blank" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Отправить фото в WhatsApp
            </a>
          </BaseButton>
          <router-link to="/contacts">
            <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-gray-800">
              Оставить заявку
            </BaseButton>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const phonePrices = ref([
  { name: 'Замена экрана', description: 'Установка нового дисплея с тачскрином', price: '15 000', time: 'от 1 часа' },
  { name: 'Замена заднего стекла', description: 'Восстановление задней панели смартфона', price: '8 000', time: 'от 30 минут' },
  { name: 'Замена аккумулятора', description: 'Установка новой батареи с калибровкой', price: '8 000', time: 'от 30 минут' },
  { name: 'Ремонт разъёма зарядки', description: 'Восстановление контактов или замена разъёма', price: '5 000', time: 'от 1 часа' },
  { name: 'Ремонт динамика', description: 'Чистка или замена динамика', price: '6 000', time: 'от 1 часа' },
  { name: 'Ремонт микрофона', description: 'Восстановление работы микрофона', price: '5 000', time: 'от 1 часа' },
  { name: 'Ремонт камеры', description: 'Восстановление основной или фронтальной камеры', price: '7 000', time: 'от 1 часа' },
  { name: 'Прошивка и настройка', description: 'Переустановка ОС, удаление вирусов, оптимизация', price: '5 000', time: 'от 1 часа' },
  { name: 'Восстановление после влаги', description: 'Чистка от коррозии, восстановление контактов', price: '10 000', time: 'от 2 часов' },
  { name: 'Замена кнопок', description: 'Восстановление работы кнопок включения и громкости', price: '4 000', time: 'от 30 минут' },
  { name: 'Ремонт вибромотора', description: 'Восстановление работы вибрации', price: '4 000', time: 'от 30 минут' },
  { name: 'Разблокировка', description: 'Снятие блокировки экрана и аккаунта', price: '6 000', time: 'от 1 часа' }
])

const laptopPrices = ref([
  { name: 'Чистка системы охлаждения', description: 'Удаление пыли из вентиляторов и радиаторов', price: '6 000', time: 'от 1 часа' },
  { name: 'Замена термопасты', description: 'Обновление термоинтерфейса процессора и видеокарты', price: '4 000', time: 'от 30 минут' },
  { name: 'Замена клавиатуры', description: 'Установка новой клавиатуры', price: '12 000', time: 'от 1 часа' },
  { name: 'Замена экрана ноутбука', description: 'Установка нового дисплея', price: '25 000', time: 'от 2 часов' },
  { name: 'Установка и настройка ОС', description: 'Переустановка Windows, macOS, установка драйверов', price: '5 000', time: 'от 2 часов' },
  { name: 'Установка и настройка SSD', description: 'Замена HDD на SSD или добавление SSD', price: '8 000', time: 'от 2 часов' },
  { name: 'Увеличение оперативной памяти', description: 'Добавление или замена модулей RAM', price: '5 000', time: 'от 30 минут' },
  { name: 'Удаление вирусов', description: 'Полная очистка системы от вредоносного ПО', price: '5 000', time: 'от 1 часа' },
  { name: 'Ремонт разъёма питания', description: 'Восстановление или замена гнезда зарядки', price: '7 000', time: 'от 1 часа' },
  { name: 'Ремонт материнской платы', description: 'Диагностика и ремонт компонентов платы', price: '15 000', time: 'от 3 дней' },
  { name: 'Замена жёсткого диска', description: 'Установка нового HDD с переносом данных', price: '6 000', time: 'от 2 часов' },
  { name: 'Ремонт тачпада', description: 'Восстановление работы сенсорной панели', price: '8 000', time: 'от 1 часа' }
])

const tabletPrices = ref([
  { name: 'Замена экрана и тачскрина', description: 'Установка нового дисплея с сенсорным слоем', price: '12 000', time: 'от 1 часа' },
  { name: 'Замена аккумулятора', description: 'Установка новой батареи', price: '10 000', time: 'от 1 часа' },
  { name: 'Ремонт разъёма питания', description: 'Восстановление контактов зарядки', price: '5 000', time: 'от 1 часа' },
  { name: 'Прошивка и настройка', description: 'Переустановка ОС, разблокировка, оптимизация', price: '5 000', time: 'от 1 часа' },
  { name: 'Ремонт проблем с Wi-Fi', description: 'Диагностика и ремонт модуля беспроводной связи', price: '6 000', time: 'от 1 часа' },
  { name: 'Замена кнопок', description: 'Восстановление работы кнопок включения и громкости', price: '4 000', time: 'от 30 минут' },
  { name: 'Ремонт камеры', description: 'Восстановление работы основной или фронтальной камеры', price: '7 000', time: 'от 1 часа' },
  { name: 'Восстановление после попадания влаги', description: 'Чистка от коррозии, восстановление контактов', price: '10 000', time: 'от 2 часов' }
])
</script>

