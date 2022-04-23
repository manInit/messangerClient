export const authModule = {
  namespaced: true,
  state: () => ({
    isAuth: false
  }),
  getters: {

  },
  mutations: {
    logIn(state: any, isAuth: boolean) {
      state.isAuth = isAuth
    },
  },
  actions: {
    async tryLogin({ state, commit }: any) {
      commit('logIn', true)
    }
  }
}