import type User from '@/types/User'

export const authModule = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') ?? null,
    isAuth: localStorage.getItem('isAuth') === 'true'
  }),
  getters: {
    userToken(state: any) {
      return state.token ?? null
    }
  },
  mutations: {
    logIn(state: any, data: {token: string | null, isAuth: boolean}) {
      state.token = data.token
      state.isAuth = data.isAuth
    },
  },
  actions: {
    tryLogin({ state, commit }: any, user: User) {
      if (user.token) {
        localStorage.setItem('token', user.token.toString())
        localStorage.setItem('isAuth', 'true')
        commit('logIn', {token: user.token, isAuth: true})
      } else {
        localStorage.setItem('token', '')
        localStorage.setItem('isAuth', 'false')
        commit('logIn', {token: null, isAuth: false})
      }
    },
    logOut({state, commit}: any) {
      localStorage.setItem('token', '')
      localStorage.setItem('isAuth', 'false')
      commit('logIn', {token: null, isAuth: false})
    }
  }
}