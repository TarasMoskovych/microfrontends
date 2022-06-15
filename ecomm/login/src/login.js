import { faker } from '@faker-js/faker';
import './styles.css'

export class Login {
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
    this.loginFormEl = this.container.querySelector('#login-form');
    this.loaderEl = this.container.querySelector('.loader');
    this.loginBtnEl = this.container.querySelector('#login-btn');
  }

  initListeners() {
    this.loginFormEl.addEventListener('submit', this.onSubmit.bind(this));
  }

  render() {
    return `
      <div class="app-login">
        <div id="login-form-wrap">
          <h2>Login</h2>
          <form id="login-form">
            <p>
              <input
                type="text"
                id="text"
                name="username"
                placeholder="User Name"
                required
              ><i class="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                minlength="4"
              ><i class="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <div class="loader hidden"></div>
              <input type="submit" id="login-btn" value="Login">
            </p>
          </form>
          <div id="create-account-wrap">
            <p>Not a member? <a>Create Account</a><p>
          </div>
        </div>
      </div>
    `;
  }

  onSubmit(e) {
    e.preventDefault();

    this.toggleLoading();

    setTimeout(() => {
      this.toggleLoading();
      this.dispatchSubmit({
        username:  Object.fromEntries(new FormData(e.target)).username,
        token: faker.datatype.string(10),
      });
      e.target.reset();
    }, 2000);
  }

  toggleLoading() {
    this.loaderEl.classList.toggle('hidden');
    this.loginBtnEl.classList.toggle('hidden');
  }

  dispatchSubmit(detail) {
    document.dispatchEvent(new CustomEvent('login:success', { detail }));
  }
}
