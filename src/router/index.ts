import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: MainPage,
      redirect: to => {
        return { path: '/channel/direct' }
      },
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegistrationPage
    },
    {
      path: '/channel/:channelId',
      component: MainPage
    },
    {
      path: '/channel/:channelId/chat/:chatId',
      component: MainPage
    }
  ],
  history: createWebHistory()
})

export default router