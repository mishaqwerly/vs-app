<template>
  <div>
    <loader v-if="loading"></loader>
    <div v-else class="app-main-layout">
      <NavBar 
        @click="isOpen = !isOpen"
      />
      <SideNav v-model="isOpen"/>

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/app/NavBar";
import SideNav from "../components/app/SideNav";
export default {
  name: 'main-layout',
  components: {
    SideNav,
    NavBar
  },
  data() {
    return {
      isOpen: true,
      loading: true
    }
  },
  methods: {
    // toggleMenu() {
    //   console.log(11)
    // }
  },

  
  async mounted() {
    if (!Object.keys(this.$store.getters.getInfo).length) {
      await this.$store.dispatch('fetchInfo')
      //console.log(this.$store.getters.getInfo)
    } else {

    }
    this.loading = false;


  }
}
</script>