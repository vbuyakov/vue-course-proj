// import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
