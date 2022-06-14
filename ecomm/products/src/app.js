import { faker } from '@faker-js/faker';
import './styles.css';

export class Products {
  constructor(container) {
    if (!container) {
      throw new Error('Container must be defined!');
    }

    this.container = container;
    this.init();
  }

  init() {
    this.container.innerHTML = this.render();
    this.initSelectors();
    this.initListeners();
  }

  initSelectors() {
    this.productsEl = this.container.querySelector('.app-products');
  }

  initListeners() {
    this.productsEl.addEventListener('click', this.onProductClick.bind(this));
  }

  render() {
    return `
      <div class="app-products">
        <div class="app-products__wrapper">
          ${this.getProducts()}
        </div>
      </div>
    `;
  }

  onProductClick(e) {
    const id = e.target.getAttribute('data-id');

    if (id) {
      const detail = {
        id,
        price: Number.parseFloat(e.target.getAttribute('data-price').substring(1)),
      };

      document.dispatchEvent(
        new CustomEvent('products:add-to-cart', { detail })
      );
    }
  }

  getProducts() {
    let products = '';

    for (let i = 0; i < 10; i++) {
      const id = faker.datatype.number({ min: 100000, max: 999999 });
      const name = faker.commerce.productName();
      const imgUrl = faker.image.food(500, 500, true);
      const price = faker.commerce.price(50, 500, 2, '$');
      const description = `${faker.commerce.productDescription().slice(0, 80)}...`;

      products += `
        <div class="app-product">
          <img src="${imgUrl}" alt="${name}" style="width:100%">
          <h3>${name}</h3>
          <p class="app-product__price">${price}</p>
          <p>${description}</p>
          <p class="app-product__action-wrapper">
            <button class="app-product__action" data-id="${id}" data-price="${price}">Add to Cart</button>
          </p>
        </div>
      `;
    }

    return products;
  }
}

if (process.env.NODE_ENV === 'development') {
  const container = document.querySelector('#app-products');

  if (container) {
    new Products(container);
  }
}
