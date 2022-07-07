<template>
  <div v-if="products" class="p-grid p-fluid dashboard">
    <NoProducts v-if="!products.length" />
    <Summary v-if="products.length" :products="products" />
    <Statistic v-if="products.length" :products="products" />
    <ProductsTable v-if="products.length" :products="products" @productEdit="onProductEdit" />
  </div>
  <div v-else class="dashboard-loader">
    <ProgressSpinner style="width:100px; height:100px" strokeWidth="2" />
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import ProgressSpinner from 'primevue/progressspinner';
import NoProducts from './NoProducts';
import ProductsTable from './ProductsTable';
import Statistic from './Statistic';
import Summary from './Summary';

export default {
  components: {
    ProgressSpinner,
    NoProducts,
    ProductsTable,
    Statistic,
    Summary,
  },
  data() {
    return {
      products: null,
      totalPrice: 0,
      expensiveProduct: null,
    };
  },
  props: {
    onProductEdit: Function,
  },
  methods: {
    getProducts() {
      fetch(`${PRODUCT_SERVICE_URL}/api/products`)
        .then((response) => response.json())
        .then(products => this.products = products)
        .catch(() => this.products = []);
    },
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style lang="scss">
$borderRadius: 3px;

body {
  margin: 0;
}

.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #edf0f5;
  padding: 15px 10px;

  &-loader {
    padding: 20px 0;
    text-align: center;
  }

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
