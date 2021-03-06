import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.scss'
Vue.config.productionTip = false
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Meta from 'vue-meta'
Vue.use(Meta)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
