import type User from '@/types/User'

export const userModalModule = {
  namespaced: true,
  state: () => ({
    open: false,
    user: null
  }),
  getters: {
  },
  mutations: {
    change(state: any, data: {open: boolean, user: User}) {
      state.open = data.open
      state.user = data.user
    },
  },
  actions: {
    show({ state, commit }: any, user: User) {
      commit('change', {open: true, user})
    },
    hide({ state, commit }: any) {
      commit('change', {open: false, user: null})
    }
  }
}