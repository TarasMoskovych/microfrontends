import { Products } from './products';

const container = document.querySelector('#app-products');

if (container) {
  new Products(container);
}
