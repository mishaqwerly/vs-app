import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, data) {
      state.info = data
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uId = await dispatch('getUserId')
        const info = (await firebase.database().ref(`/users/${uId}/info`).once('value')).val()
        commit('setInfo',info)
      } catch (e) {

      }
    }
  },
  getters: {
    getInfo(state) {
      return state.info
    }
  }
}