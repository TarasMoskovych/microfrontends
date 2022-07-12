import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly sessionKey = 'admin-ui:auth-data';

  constructor(private readonly router: Router) { }

  getUser(): IUser {
    return JSON.parse(sessionStorage.getItem(this.sessionKey) as string);
  }

  onLoggedIn(): void {
    this.router.navigateByUrl('/dashboard');
  }

  signout(): void {
    sessionStorage.removeItem(this.sessionKey);
    this.router.navigateByUrl('/auth/signin');
  }
}

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
