<template>
  <div v-if="products.length" class="p-grid p-fluid dashboard">
    <Summary :products="products" />
    <Statistic :products="products" />
    <ProductsTable :products="products" @productEdit="onProductEdit" />
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import ProductsTable from './ProductsTable';
import Statistic from './Statistic';
import Summary from './Summary';

export default {
  components: {
    ProductsTable,
    Statistic,
    Summary,
  },
  data() {
    return {
      products: [],
      totalPrice: 0,
      expensiveProduct: null,
    };
  },
  props: {
    onProductEdit: Function,
  },
  methods: {
    async getProducts() {
      const response = await fetch(`${PRODUCT_SERVICE_URL}/api/products`);
      return await response.json();
    },
  },
  async mounted() {
    this.products = await this.getProducts();
  }
};
</script>

<style lang="scss">
$borderRadius: 3px;

.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #edf0f5;
  padding: 15px 10px;

  .summary {
    position: relative;

    .title {
      font-size: 20px;
    }

    .detail {
      color: #707070;
      display: block;
      margin-top: 10px;
    }

    .count {
      color: #ffffff;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      padding: 7px 14px;
      border-radius: $borderRadius;

      &.visitors {
        background-color: #20d077;
      }

      &.purchases {
        background-color: #f9c851;
      }

      &.revenue {
        background-color: #007be5;
      }
    }
  }

  .card {
    background-color: #ffffff;
    padding: 1em;
    margin-bottom: 16px;
    border-radius: $borderRadius;

    &.card-w-title {
      padding-bottom: 2em;
    }
  }
}
</style>
