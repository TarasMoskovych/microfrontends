import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export const mount = (el) => {
  createApp(Dashboard).mount(el);
};
