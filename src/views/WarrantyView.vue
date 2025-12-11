<template>
  <div class="min-h-screen py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Гарантия на ремонт</h1>
        <p class="text-xl text-gray-600">
          Все работы по ремонту телефонов, ноутбуков и планшетов сопровождаются письменной гарантией. 
          Мы уверены в качестве наших услуг и несём ответственность за выполненные работы.
        </p>
      </div>

      <!-- What We Guarantee -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">Что мы гарантируем</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BaseCard>
            <div class="text-center">
              <div class="flex justify-center mb-4">
                <svg class="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Гарантия на работы</h3>
              <p class="text-gray-600">
                Все выполненные работы по ремонту защищены гарантией. 
                Если проблема повторится по нашей вине, устраним бесплатно.
              </p>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="text-center">
              <div class="flex justify-center mb-4">
                <svg class="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Гарантия на запчасти</h3>
              <p class="text-gray-600">
                Установленные запчасти имеют гарантию от производителя и от нашего сервиса. 
                При браке заменим бесплатно.
              </p>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="text-center">
              <div class="flex justify-center mb-4">
                <svg class="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Устранение неисправности</h3>
              <p class="text-gray-600">
                Гарантируем полное устранение заявленной неисправности. 
                Устройство должно работать как заявлено.
              </p>
            </div>
          </BaseCard>
        </div>
      </section>

      <!-- Warranty Terms -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">Сроки гарантии</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Тип работ</th>
                <th class="px-6 py-4 text-center font-semibold">Срок гарантии</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">Ремонтные работы</td>
                <td class="px-6 py-4 text-center text-gray-600">3 месяца</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">Замена запчастей</td>
                <td class="px-6 py-4 text-center text-gray-600">6 месяцев</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">Оригинальные запчасти</td>
                <td class="px-6 py-4 text-center text-gray-600">12 месяцев</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">Прошивка и настройка</td>
                <td class="px-6 py-4 text-center text-gray-600">1 месяц</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-800">Восстановление после влаги</td>
                <td class="px-6 py-4 text-center text-gray-600">2 месяца</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- How to Use Warranty -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">Как воспользоваться гарантией</h2>
        <div class="space-y-6">
          <div v-for="(step, index) in warrantyStepsRef" :key="index" class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- When Warranty Doesn't Apply -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">Когда гарантия не действует</h2>
        <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
          <ul class="space-y-3">
            <li v-for="(case_, index) in warrantyExceptionsRef" :key="index" class="flex items-start">
              <span class="text-red-500 mr-3 font-bold">×</span>
              <span class="text-gray-700">{{ case_ }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- After Warranty -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">После окончания гарантии</h2>
        <BaseCard>
          <p class="text-gray-700 mb-4">
            Мы ценим наших клиентов и предлагаем специальные условия даже после окончания гарантийного срока:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-gray-600 mr-2">•</span>
              <span><strong>Скидки постоянным клиентам</strong> — до 15% на повторные ремонты</span>
            </li>
            <li class="flex items-start">
              <span class="text-gray-600 mr-2">•</span>
              <span><strong>Приоритетная диагностика</strong> — быстрая очередь для постоянных клиентов</span>
            </li>
            <li class="flex items-start">
              <span class="text-gray-600 mr-2">•</span>
              <span><strong>Бесплатные консультации</strong> — помощь в решении технических вопросов</span>
            </li>
            <li class="flex items-start">
              <span class="text-gray-600 mr-2">•</span>
              <span><strong>Лояльные цены</strong> — специальные условия на обслуживание</span>
            </li>
          </ul>
        </BaseCard>
      </section>

      <!-- CTA Block -->
      <section class="bg-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Задать вопрос по гарантии</h2>
        <p class="text-xl mb-8">
          Если у вас возникли вопросы о гарантии или нужна помощь, 
          свяжитесь с нами любым удобным способом.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="secondary" size="lg" class="!bg-white !text-gray-800 hover:!bg-gray-100">
            <a href="https://wa.me/77756511161?text=Здравствуйте! У меня вопрос по гарантии." target="_blank" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Написать в WhatsApp
            </a>
          </BaseButton>
          <BaseButton variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-gray-800">
            <a href="tel:87756511161" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Позвонить
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
import { warrantySteps, warrantyExceptions } from '@/data/index.js'

// Convert imported data to refs for reactivity
const warrantyStepsRef = ref(warrantySteps)
const warrantyExceptionsRef = ref(warrantyExceptions)
</script>

