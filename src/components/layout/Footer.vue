<template>
  <footer class="bg-gray-900 text-gray-300 mt-20">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-white font-bold text-lg mb-4">О нас</h3>
          <p class="text-sm">
            Профессиональный ремонт телефонов, ноутбуков и планшетов в Алматы. 
            Опытные мастера, качественные запчасти, гарантия на все работы.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-white font-bold text-lg mb-4">Навигация</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="hover:text-gray-100">
                Главная
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-gray-100">
                Услуги
              </router-link>
            </li>
            <li>
              <router-link to="/warranty" class="hover:text-gray-100">
                Гарантия
              </router-link>
            </li>
            <li>
              <router-link to="/contacts" class="hover:text-gray-100">
                Контакты
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-bold text-lg mb-4">Услуги</h3>
          <ul class="space-y-2 text-sm">
            <li>Ремонт смартфонов</li>
            <li>Ремонт ноутбуков</li>
            <li>Ремонт планшетов</li>
            <li>Диагностика</li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <h3 class="text-white font-bold text-lg mb-4">Контакты</h3>
          <ul class="space-y-2 text-sm">
            <li>г. Алматы, 5-й микрорайон, 19Б​</li>
            <li>торговый дом М5</li>
            <li>
              <a href="tel:87756511161" class="hover:text-gray-100">
                +7 775 651 11 61
              </a>
            </li>
            <li>Пн-Чт: 10:00 - 20:00</li>
            <li>Пт: 15:00 - 20:00</li>
            <li>Сб-Вс: 12:00 - 20:00</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {{ currentYear }} Tele Plus Service. Все права защищены.</p>
        <p class="mt-2 text-xs text-gray-500">
          Информация на сайте носит ознакомительный характер. Точная стоимость ремонта определяется после диагностики.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

