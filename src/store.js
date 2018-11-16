import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    bbb(){
      debugger
    }
  },
  actions: {

  },
  modules: {
    acc: {
      namespaced: true,
      state: {
        ccc: 1
      },
      getters: {

      },
      mutations: {
        bbb(state) {
          debugger
          state.ccc = 2;
        }
      },
      actions: {

      }
    }
  }
})