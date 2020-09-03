import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import Vuelidate from 'vuelidate'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'


Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
