export class AuthService {
  authKey = 'marketplace:auth-data';

  getAuthData() {
    return window.localStorage.getItem(this.authKey);
  }

  isAuthenticated() {
    return !!this.getAuthData();
  }

  authenticate(data, cb) {
    setTimeout(() => {
      window.localStorage.setItem(this.authKey, JSON.stringify(data));
      cb();
    }, 1000);
  }

  logout() {
    window.localStorage.removeItem(this.authKey);
  }
}
