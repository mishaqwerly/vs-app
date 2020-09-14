import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import Vuelidate from 'vuelidate'
import massegePlugin from './utils/massege.plugin'
import firebase from 'firebase/app'
import Loader from './components/app/Loader.vue'
import 'firebase/auth';
import 'firebase/database';


import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.use(Vuelidate)
Vue.use(massegePlugin)
Vue.component('Loader', Loader)

Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

firebase.initializeApp({
  apiKey: "AIzaSyALWoE1Ex0rXCt_rDjrAQ9q8u17D3ZNnpk",
  authDomain: "fir-vsapp.firebaseapp.com",
  databaseURL: "https://fir-vsapp.firebaseio.com",
  projectId: "fir-vsapp",
  storageBucket: "fir-vsapp.appspot.com",
  messagingSenderId: "716951220878",
  appId: "1:716951220878:web:6007d5abc96ec665b70fdf"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})




