import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    currency: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },
    setCurrency(state, data) {
      state.currency = data
    }
  },
  getters: {
    error(state) {
      return state.error
    }
  },
  actions: {
    async fetchCurrency({dispatch, commit}) {
      const key = process.env.VUE_APP_FIXER
      const data = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,UAH`);
      return await data.json();
      //await commit('setCurrency',data)
    }
  },
  modules: {
    auth,
    info
  }
})
