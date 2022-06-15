import { Cart } from 'cart/CartIndex';
import { Products } from 'products/ProductsIndex';
import { Login } from 'login/LoginIndex';
import { Router } from './router';
import { AuthService } from './auth';

import './styles.css';

class App {
  routes = [
    {
      path: '#login',
      template: '<div class="login"></div>',
      render: this.onLoginPageRender.bind(this),
    },
    {
      path: '#',
      template: `
        <header>
          <div class="header-wrapper">
            <h1>Ecomm store</h1>
            <div class="header-right-panel">
              <div class="user">
                <span>Hello, <span class="js-username"></span></span>
                <button class="js-logout">Log out</button>
              </div>
              <div class="cart"></div>
            </div>
          </div>
        </header>
        <main>
          <div class="products"></div>
        </main>
        <footer>
          <p>Ecomm <b>MicroFrontends</b> with Module Federation plugin</p>
          <p>&copy; Lorem ipsum dolor sit amet, 2022</p>
        </footer>
      `,
      render: this.onHomePageRender.bind(this),
      default: true,
      canActivate: this.onCanActivateRoute.bind(this),
    },
  ];

  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.authService = new AuthService();
    this.router = new Router(this.container, this.routes);
    this.initListeners();
  }

  initListeners() {
    document.addEventListener('login:success', this.onLogin.bind(this));
  }

  onLoginPageRender() {
    new Login(document.querySelector('.login'));
  }

  onHomePageRender() {
    new Cart(document.querySelector('.cart'));
    new Products(document.querySelector('.products'));
    this.container.querySelector('.js-username').textContent = this.authService.getUsername();
    this.container.querySelector('.js-logout').addEventListener('click', this.onLogout.bind(this));
  }

  onCanActivateRoute() {
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      window.location.hash = '#login';
    }

    return isAuthenticated;
  }

  onLogin(e) {
    this.authService.authenticate(e.detail);
    this.router.navigate('#');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate('#login');
  }
}

new App(document.querySelector('#root'));
