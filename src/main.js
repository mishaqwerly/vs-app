import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import Vuelidate from 'vuelidate'
import massegePlugin from './utils/massege.plugin'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

Vue.use(Vuelidate)
Vue.use(massegePlugin)

Vue.config.productionTip = false
Vue.filter('date', dateFilter)

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




