<template>
  <!-- Phone Button - Left Bottom -->
  <div class="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
    <a
      href="tel:87756511161"
      class="floating-phone-btn-link bg-gray-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-700 flex items-center gap-2 font-semibold"
      data-phone="+7 775 651 11 61"
      aria-label="Позвонить"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
      <span class="hidden sm:inline">+7 775 651 11 61</span>
    </a>
  </div>

  <!-- Right Bottom Buttons -->
  <div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
    <!-- WhatsApp Button -->
    <div class="floating-wa-btn-wrapper relative">
      <button
        @click="showWaPopup = !showWaPopup"
        class="floating-wa-btn-link w-12 h-12 md:w-32 lg:w-36 bg-green-500 rounded-full flex items-center justify-center gap-2 md:px-4 md:py-3 shadow-lg text-white font-semibold"
        aria-label="Написать в WhatsApp"
      >
        <svg class="w-6 h-6 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span class="hidden md:inline">WhatsApp</span>
      </button>

      <!-- WhatsApp Popup -->
      <div
        v-if="showWaPopup"
        class="wa-popup absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-2xl p-6 w-80 z-50 border border-gray-200"
      >
        <button
          @click="showWaPopup = false"
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Закрыть"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h3 class="text-lg font-bold mb-4 text-gray-800">Напишите нам в WhatsApp</h3>
        <a
          href="https://wa.me/77756511161?text=Здравствуйте! Меня интересует..."
          class="qr-code-link block mb-4"
          target="_blank"
          rel="nofollow"
        >
          <div class="qr-code mx-auto">
            <img
              src="@/assets/images/qrcode-tele-plus-service.png"
              width="200"
              height="200"
              alt="QR код WhatsApp"
              class="w-full h-auto rounded"
            />
          </div>
        </a>
        <div class="whatsapp-number text-center font-semibold text-gray-800 mb-3">+7 775 651 11 61</div>
        <p class="text-sm text-gray-600 text-center">
          Отсканируйте QR-код камерой телефона или нажмите на него для перехода в WhatsApp
        </p>
      </div>
    </div>

    <!-- 2GIS Button -->
    <a
      href="https://2gis.kz/almaty/firm/70000001056369482"
      target="_blank"
      rel="noopener noreferrer"
      class="w-12 h-12 md:w-32 lg:w-36 bg-white rounded-full flex items-center justify-center md:px-4 md:py-3 shadow-lg border border-gray-200"
      aria-label="Открыть в 2GIS"
    >
      <img :src="gisLogo" alt="2GIS" class="w-8 h-8 md:w-auto md:h-auto object-contain" />
    </a>
  </div>

  <!-- Overlay для закрытия попапа при клике вне его -->
  <div
    v-if="showWaPopup"
    class="fixed inset-0 z-40"
    @click="showWaPopup = false"
  ></div>
</template>

<script setup>
import { ref } from 'vue'
import gisLogo from '@/assets/images/2gis.svg.png'

const showWaPopup = ref(false)
</script>

<style scoped>
.floating-phone-btn-link {
  white-space: nowrap;
}

</style>
