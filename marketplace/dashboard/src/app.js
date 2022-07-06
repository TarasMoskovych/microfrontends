import { mount } from './mount';

mount(document.querySelector('#app-dashboard'), {
  onProductEdit: (event) => console.log('onProductEdit', event),
});
