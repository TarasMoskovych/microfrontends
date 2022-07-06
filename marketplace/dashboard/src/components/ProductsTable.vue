<template>
  <div class="p-col-12">
    <div class="card">
      <DataTable
        :value="products"
        :rows="5"
        :rowsPerPageOptions="[5, 10, 25, 50]"
        :sortOrder="-1"
        responsiveLayout="scroll"
        sortField="price"
        style="margin-bottom: 20px"
        :paginator="true">
        <Column>
          <template #header>Logo</template>
          <template #body="slotProps">
            <img :src="slotProps.data.imageUrl" :alt="slotProps.data.name" width="50" />
          </template>
        </Column>
        <Column field="name" header="Name" :sortable="true"></Column>
        <Column field="price" header="Price" :sortable="true">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>
        <Column>
          <template #header>Edit</template>
          <template #body="slotProps">
            <Button
              @click="onProductEdit(slotProps.data)"
              icon="pi pi-pencil"
              type="button"
              class="p-button-success"
            ></Button>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { formatCurrency } from './../utils/format-currency.util';

export default {
  components: {
    Button,
    Column,
    DataTable,
  },
  props: {
    products: Array,
  },
  emits: ['productEdit'],
  methods: {
    onProductEdit(product) {
      this.$emit('productEdit', product);
    },
    formatCurrency,
  },
}
</script>
