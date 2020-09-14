<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p 
        v-for="cur of currency"
        :key="cur"
        class="currency-line"
        >
          <span >{{getCureency(cur) | currency(cur) }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBill",
  data: () => ({
    currency: ['UAH', 'USD', 'EUR']
  }),
  props: ['rates'],
  computed: {
    bill () {
      return this.$store.getters.getInfo.bill / (this.rates['UAH'] / this.rates['EUR'])
    }
  },
  methods: {
    getCureency(currency) {
      return Math.floor(this.bill * this.rates[currency])
    }
  }

}
</script>