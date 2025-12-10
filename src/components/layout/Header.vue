<template>
  <header class="bg-white shadow-md sticky top-0 z-40">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <img :src="logo" alt="Tele Plus Service" class="h-15 md:h-15 w-auto" />
          <span 
            class="text-xl md:text-2xl font-bold"
            style="background: linear-gradient(135deg, #1e40af 0%, #5221a6 50%, #7c3aed 100%); -webkit-background-clip: text; background-clip: text; color: transparent;"
          >
            Tele Plus Service Center
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li>
            <router-link
              to="/"
              class="text-gray-700 hover:text-gray-900 font-medium"
              active-class="text-gray-900"
            >
              Главная
            </router-link>
          </li>
          <li>
            <router-link
              to="/services"
              class="text-gray-700 hover:text-gray-900 font-medium"
              active-class="text-gray-900"
            >
              Услуги
            </router-link>
          </li>
          <li>
            <router-link
              to="/warranty"
              class="text-gray-700 hover:text-gray-900 font-medium"
              active-class="text-gray-900"
            >
              Гарантия
            </router-link>
          </li>
          <li>
            <router-link
              to="/contacts"
              class="text-gray-700 hover:text-gray-900 font-medium"
              active-class="text-gray-900"
            >
              Контакты
            </router-link>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Меню"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t pt-4"
      >
        <ul class="flex flex-col space-y-3">
          <li>
            <router-link
              to="/"
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
              active-class="text-gray-900"
            >
              Главная
            </router-link>
          </li>
          <li>
            <router-link
              to="/services"
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
              active-class="text-gray-900"
            >
              Услуги
            </router-link>
          </li>
          <li>
            <router-link
              to="/prices"
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
              active-class="text-gray-900"
            >
              Цены
            </router-link>
          </li>
          <li>
            <router-link
              to="/warranty"
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
              active-class="text-gray-900"
            >
              Гарантия
            </router-link>
          </li>
          <li>
            <router-link
              to="/contacts"
              @click="mobileMenuOpen = false"
              class="block text-gray-700 hover:text-gray-900 font-medium py-2"
              active-class="text-gray-900"
            >
              Контакты
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/tele-plus-service.png'

const mobileMenuOpen = ref(false)
</script>

