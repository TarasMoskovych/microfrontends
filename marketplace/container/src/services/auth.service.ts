export class AuthService {
  private authKey = 'marketplace:auth-data';

  getAuthData(): string | null {
    return window.localStorage.getItem(this.authKey);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthData();
  }

  authenticate(data: AuthPayload, cb: () => void): void {
    setTimeout(() => {
      window.localStorage.setItem(this.authKey, JSON.stringify(data));
      cb();
    }, 1000);
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
  }
}

export interface AuthPayload {
  email: string;
}
