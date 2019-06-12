import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../node_modules/axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
