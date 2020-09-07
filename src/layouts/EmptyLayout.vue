<template>
  <div class="grey darken-1 empty-layout">
    <router-view/> 
  </div>
</template>

<script>
import masseges from '../utils/massege'
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fBError) {
      this.$error(masseges[fBError.code] || 'что-то пошло не так')
      console.log(fBError)
    }
  }
}
</script>