import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction, pluck, tap } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    @Inject('AUTH_CALLBACK') private readonly authCallback: { onLoggedIn: (user: IUser) => void },
  ) {
  }

  login(data: IUserCredentials): Observable<IUser> {
    return this.http.get('https://randomuser.me/api').pipe(
      pluck('results', '0') as OperatorFunction<Object, IUser>,
      tap((user: IUser) => {
        sessionStorage.setItem('purple-ui:auth-data', JSON.stringify(user))
        this.authCallback.onLoggedIn(user);
      }),
    )
  }
}

export interface IUserCredentials {
  username: string;
  password: string;
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
