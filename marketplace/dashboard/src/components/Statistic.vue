<template>
  <div v-if="lineChartData" class="p-col-12 p-md-6">
    <div class="card">
      <Chart type="bar" :data="barChartData" :options="basicOptions" />
    </div>
  </div>
  <div v-if="barChartData" class="p-col-12 p-md-6">
    <div class="card">
      <Chart type="line" :data="lineChartData" :options="basicOptions" />
    </div>
  </div>
</template>
<script>
import Chart from 'primevue/chart';

export default {
  components: {
    Chart,
  },
  data() {
    return {
      barChartData: null,
      lineChartData: null,
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y: {
            min: 0,
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
        },
      },
    };
  },
  props: {
    products: Array,
  },
  methods: {
    getBarChartData() {
      const data = this.products.reduce((acc, item) => {
        const brand = item.name.split(' ')[0];

        if (!acc[brand]) {
          acc[brand] = 1;
        } else {
          acc[brand]++;
        }

        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Count by Brand',
            backgroundColor: '#20D077',
            data: Object.values(data),
          },
        ],
      };
    },
    getLineChartData() {
      const data = this.products.reduce((acc, item) => {
        const brand = item.name.split(' ')[0];

        if (!acc[brand]) {
          acc[brand] = item.price;
        } else {
          acc[brand] += item.price;
        }

        return acc;
      }, {});

      return {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Price by Brand',
            data: Object.values(data),
            fill: false,
            borderColor: '#F9C851',
            tension: .4,
          },
        ],
      };
    },
  },
  mounted() {
    this.barChartData = this.getBarChartData();
    this.lineChartData = this.getLineChartData();
  }
}
</script>
