<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link 
      v-for="link of menuLinks"
      :key="link.name"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a class="waves-effect waves-orange pointer">{{link.name}}</a>
    </router-link>

  </ul>
</template>

<script>
export default {

  data() {
    return {
      menuLinks: [
        {
          name: 'Счет',
          url: '/',
          exact: true
        },
        {
          name: 'История',
          url: '/history'
        },
        {
          name: 'Планирование',
          url: '/planning'
        },
        {
          name: 'Новая запись',
          url: '/record'
        },
        {
          name: 'Категории',
          url: '/categories'
        },
      ]
    }
  },
  props: {
    value: Boolean
  }
}
</script>