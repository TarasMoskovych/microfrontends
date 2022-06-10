import './styles.css'

export class Cart {
  constructor(container) {
    if (!container) {
      throw new Error('Container must be defined!');
    }

    this.render(container);
    this.addListeners();
  }

  render(container) {
    container.innerHTML = `
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

  addListeners() {
    const removeAllItems = () => {
      countEl.textContent = 0;
      totalEl.textContent = 0;
      containerEl.classList.add('app-cart--empty');
    };

    const containerEl = document.querySelector('.app-cart');
    const countEl = containerEl.querySelector('.js-count');
    const totalEl = containerEl.querySelector('.js-total');

    document.addEventListener('products:add-to-cart', (e) => {
      countEl.textContent = Number.parseInt(countEl.textContent) + 1;
      totalEl.textContent = Number.parseFloat(totalEl.textContent) + e.detail.price;
      containerEl.classList.remove('app-cart--empty');
    });

    document.addEventListener('cart:remove-all', removeAllItems);

    document.querySelector('.js-clear-all-items').addEventListener('click', removeAllItems);
  }
}

if (process.env.NODE_ENV === 'development') {
  const container = document.querySelector('#app-cart');

  if (container) {
    new Cart(container);
  }
}
