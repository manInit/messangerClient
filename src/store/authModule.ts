import type User from '@/types/User'

export const authModule = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') ?? null,
    login: localStorage.getItem('login') ?? null,
    isAuth: localStorage.getItem('isAuth') === 'true'
  }),
  getters: {
    userToken(state: any) {
      return state.token ?? null
    }
  },
  mutations: {
    logIn(state: any, data: {token: string | null, isAuth: boolean, login: string}) {
      state.token = data.token
      state.isAuth = data.isAuth
      state.login = data.login
    },
  },
  actions: {
    tryLogin({ state, commit }: any, user: User) {
      if (user.token) {
        localStorage.setItem('token', user.token.toString())
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('login', user.login)
        commit('logIn', {token: user.token, isAuth: true, login: user.login})
      } else {
        localStorage.setItem('token', '')
        localStorage.setItem('isAuth', 'false')
        localStorage.setItem('login', '')
        commit('logIn', {token: null, isAuth: false, login: null})
      }
    },
    logOut({state, commit}: any) {
      localStorage.setItem('token', '')
      localStorage.setItem('isAuth', 'false')
      localStorage.setItem('login', '')
      commit('logIn', {token: null, isAuth: false, login: null})
    }
  }
}