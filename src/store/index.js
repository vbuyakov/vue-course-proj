import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    type: '',
    updated: null
  },
  getters: {
    message: state => state.message,
    type: state => state.type
  },
  mutations: {
    alert (state, payload) {
      state.message = payload.msg
      state.type = payload.type || 'info'
      state.updated = Date.now()
    }
  }
})
