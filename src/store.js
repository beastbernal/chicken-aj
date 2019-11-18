import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10000,
    shed: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    edit (state, val) {
      state.shed = val
    }
  },
  actions: {

  }
})
