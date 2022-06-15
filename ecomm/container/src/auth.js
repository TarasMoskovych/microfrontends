export class AuthService {
  authKey = 'ecomm:auth-data';

  getUsername() {
    return JSON.parse(this.getAuthData() || '{}')?.username;
  }

  getAuthData() {
    return window.localStorage.getItem(this.authKey);
  }

  isAuthenticated() {
    return !!this.getAuthData();
  }

  authenticate(data) {
    window.localStorage.setItem(this.authKey, JSON.stringify(data));
  }

  logout() {
    window.localStorage.removeItem(this.authKey);
  }
}
