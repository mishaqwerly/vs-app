<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button 
        class="btn waves-effect waves-light btn-small"
        @click="refresh"
      >
        <i class="material-icons"
        >refresh</i>
      </button>
    </div>

    <loader v-if="loading"></loader>
    <div v-else class="row">
      <HomeBill 
        :rates="currency.rates"
      />
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>

import HomeCurrency from '../components/HomeCurrency'
import HomeBill from '../components/HomeBill'
export default {
  name: 'Home',
  data: () => ({
    loading: true,
    currency: null
  }),
  components: {
    HomeCurrency,
    HomeBill
  },
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
    //console.log(this.currency)
  },
  methods: {
    async refresh() {
      this.loading = true
      await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  }
}
</script>