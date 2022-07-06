<template>
  <div class="p-col-12 p-lg-4">
    <div class="card summary">
      <span class="title">Products</span>
      <span class="detail">Number of products</span>
      <span class="count visitors">{{ products.length }}</span>
    </div>
  </div>
  <div class="p-col-12 p-lg-4">
    <div class="card summary">
      <span class="title">Total Price</span>
      <span class="detail">Total products price</span>
      <span class="count purchases">{{ totalPrice }}</span>
    </div>
  </div>
  <div class="p-col-12 p-lg-4">
    <div class="card summary">
      <span class="title">The most expensive product</span>
      <span class="detail">{{ expensiveProduct.name }}</span>
      <span class="count revenue">{{ expensiveProduct.price }}</span>
    </div>
  </div>
</template>
<script setup>
// Composition API
import { ref, onMounted } from 'vue';
import { formatCurrency } from './../utils/format-currency.util';

// data
const totalPrice = ref(0);
const expensiveProduct = ref({
  name: 'NA',
  price: 0,
});

// props
const props = defineProps({
  products: Array,
});

// methods
const getTotalPrice = () => {
  return formatCurrency(
    props.products.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0)
  );
};

const getExpensiveProduct = () => {
  const price = Math.max(...props.products.map(p => p.price));

  return {
    price: formatCurrency(price),
    name: props.products.find((p) => p.price === price).name,
  };
};

onMounted(() => {
  totalPrice.value = getTotalPrice();
  expensiveProduct.value = getExpensiveProduct();
});
</script>
