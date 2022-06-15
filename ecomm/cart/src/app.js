import { Cart } from './cart';

const container = document.querySelector('#app-cart');

if (container) {
  new Cart(container);
}
