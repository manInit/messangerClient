import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import store from '@/store'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: MainPage,
      redirect: to => {
        return { path: '/channel/direct' }
      },
      meta: { requiresAuth: true }
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
      component: MainPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/channel/:channelId/chat/:chatId',
      component: MainPage,
      meta: { requiresAuth: true }
    }
  ],
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // @ts-ignore
    if (!store.state.auth.isAuth) {
      next({
        path: '/login'
      })
    }
    next()
  }

  next()
})


export default router