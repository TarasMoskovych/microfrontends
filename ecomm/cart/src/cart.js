import './styles.css'

export class Cart {
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
    this.cartEl = this.container.querySelector('.app-cart');
    this.countEl = this.container.querySelector('.js-count');
    this.totalEl = this.container.querySelector('.js-total');
  }

  initListeners() {
    document.addEventListener('products:add-to-cart', this.onAddToCart.bind(this));
    document.addEventListener('cart:remove-all', this.onRemoveAllItems.bind(this));
    document.querySelector('.js-clear-all-items').addEventListener('click', this.onRemoveAllItems.bind(this));
  }

  render() {
    return `
      <div class="app-cart app-cart--empty">
        <div class="app-cart__wrapper">
          <p class="app-cart__text">Cart: <span class="js-count">0</span> item(s)</p>
        </div>
        <div class="app-cart__info">
          <p>Total Price: $<span class="js-total">0</span></p>
          <button class="js-clear-all-items">Remove All</button>
        </div>
      </div>
    `;
  }

  onAddToCart(e) {
    this.countEl.textContent = Number.parseInt(this.countEl.textContent) + 1;
    this.totalEl.textContent = Number.parseFloat(this.totalEl.textContent) + e.detail.price;
    this.cartEl.classList.remove('app-cart--empty');
  }

  onRemoveAllItems() {
    this.countEl.textContent = 0;
    this.totalEl.textContent = 0;
    this.cartEl.classList.add('app-cart--empty');
  }
}
