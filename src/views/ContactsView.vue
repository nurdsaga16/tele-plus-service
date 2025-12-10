<template>
  <div class="min-h-screen py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Intro -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Контакты</h1>
        <p class="text-xl text-gray-600">
          Здесь вы найдёте все способы связаться с нами и добраться до нашего сервиса. 
          Мы всегда рады помочь!
        </p>
      </div>

      <!-- Main Contacts -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-800">Основные контакты</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1 text-gray-800">Адрес</h3>
                  <p class="text-gray-600">г. Алматы, 5-й микрорайон, 19Б​</p>
                  <p class="text-gray-600">торговый дом М5</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1 text-gray-800">Телефон</h3>
                  <a href="tel:87756511161" class="text-gray-700 font-semibold text-lg hover:text-gray-900 hover:underline">
                    +7 775 651 11 61
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1 text-gray-800">WhatsApp</h3>
                  <BaseButton variant="secondary" size="sm" class="mt-2">
                    <a href="https://wa.me/77756511161" target="_blank" class="flex items-center justify-center gap-2">
                      Написать в WhatsApp
                    </a>
                  </BaseButton>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1 text-gray-800">График работы</h3>
                  <p class="text-gray-600">Понедельник - Суббота: 10:00 - 20:00</p>
                  <p class="text-gray-600">Воскресенье: 11:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-800">Как нас найти</h2>
            <div class="bg-gray-200 rounded-lg h-96 mb-6 overflow-hidden">
              <!-- 2GIS Map iframe placeholder -->
              <!-- Замените src на реальный iframe от 2GIS -->
              <!-- Пример: <iframe src="https://2gis.kz/almaty/..." width="100%" height="100%" frameborder="0"></iframe> -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.073748537718!2d76.8636394!3d43.228913399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883694e9475d6a3%3A0x42fc0ef1df64a92e!2zVGVsZSBQbHVzIFNlcnZpY2UgKNCi0LXQu9C1INCf0LvRjtGBINCh0LXRgNCy0LjRgSk!5e0!3m2!1sru!2skz!4v1765353168088!5m2!1sru!2skz" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
            <BaseButton variant="outline" size="lg" class="w-full">
              <a href="https://2gis.kz/almaty/firm/70000001056369482?m=76.873026%2C43.223253%2F12.27" target="_blank" class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Открыть в 2GIS
              </a>
            </BaseButton>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section id="contact-form">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">Форма обратной связи</h2>
        <BaseCard>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Имя <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Ваше имя"
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Телефон <span class="text-red-500">*</span>
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="+7 (700) 123-45-67"
              />
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
            </div>

            <div>
              <label for="device" class="block text-sm font-medium text-gray-700 mb-2">
                Тип устройства <span class="text-red-500">*</span>
              </label>
              <select
                id="device"
                v-model="form.device"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Выберите тип устройства</option>
                <option value="smartphone">Смартфон</option>
                <option value="pc">Компьютер</option>
                <option value="laptop">Ноутбук</option>
                <option value="tablet">Планшет</option>
              </select>
              <p v-if="errors.device" class="text-red-500 text-sm mt-1">{{ errors.device }}</p>
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                Описание проблемы <span class="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                v-model="form.description"
                required
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                placeholder="Опишите проблему с вашим устройством..."
              ></textarea>
              <p v-if="errors.description" class="text-red-500 text-sm mt-1">{{ errors.description }}</p>
            </div>

            <div class="flex items-start">
              <input
                id="consent"
                v-model="form.consent"
                type="checkbox"
                required
                class="mt-1 w-4 h-4 text-gray-700 border-gray-300 rounded focus:ring-gray-500"
              />
              <label for="consent" class="ml-3 text-sm text-gray-700">
                Я согласен на обработку персональных данных <span class="text-red-500">*</span>
              </label>
            </div>
            <p v-if="errors.consent" class="text-red-500 text-sm">{{ errors.consent }}</p>

            <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
              Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>

            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              :disabled="isSubmitting"
              class="w-full"
            >
              {{ isSubmitting ? 'Отправка...' : 'Отправить заявку' }}
            </BaseButton>
          </form>
        </BaseCard>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

const form = ref({
  name: '',
  phone: '',
  device: '',
  description: '',
  consent: false
})

const errors = ref({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Пожалуйста, укажите ваше имя'
  }
  
  if (!form.value.phone.trim()) {
    errors.value.phone = 'Пожалуйста, укажите номер телефона'
  } else if (!/^[\d\s\-\+\(\)]+$/.test(form.value.phone)) {
    errors.value.phone = 'Некорректный формат телефона'
  }
  
  if (!form.value.device) {
    errors.value.device = 'Пожалуйста, выберите тип устройства'
  }
  
  if (!form.value.description.trim()) {
    errors.value.description = 'Пожалуйста, опишите проблему'
  }
  
  if (!form.value.consent) {
    errors.value.consent = 'Необходимо согласие на обработку данных'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real app, you would send the form data to your backend
  console.log('Form submitted:', form.value)
  
  isSubmitting.value = false
  submitSuccess.value = true
  
  // Reset form after success
  setTimeout(() => {
    form.value = {
      name: '',
      phone: '',
      device: '',
      description: '',
      consent: false
    }
    submitSuccess.value = false
  }, 5000)
}
</script>

