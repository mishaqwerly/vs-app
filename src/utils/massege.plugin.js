export default {
  install(Vue,options) {
    Vue.prototype.$massege = function(text) {
      M.toast({html: text})
    }

    Vue.prototype.$error = function(text) {
      M.toast({html: `[ошибка]: ${text}`})
    }
  }
}