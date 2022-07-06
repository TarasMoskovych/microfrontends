import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Dashboard from './components/Dashboard.vue';

export const mount = (el, { onProductEdit }) => {
  const app = createApp(Dashboard, { onProductEdit });

  app.use(PrimeVue);
  app.mount(el);
};
