import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PricesView from '../views/PricesView.vue'
import WarrantyView from '../views/WarrantyView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/prices',
      name: 'prices',
      component: PricesView
    },
    {
      path: '/warranty',
      name: 'warranty',
      component: WarrantyView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
