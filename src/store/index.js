import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    type: '',
    updated: null
  },
  mutations: {
    appMessaging (state, payload) {
      state.message = payload.msg
      state.type = payload.type || 'info'
      state.updated = Date.now()
    }
  }
})
