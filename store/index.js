import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      showLogo: true,
    }),
    actions: {
      showLogo({ commit }) {
        commit('setLogo')
      },
    },
    mutations: {
      setLogo(state) {
        state.showLogo = !state.showLogo
      },
    },
  })
}

export default createStore
