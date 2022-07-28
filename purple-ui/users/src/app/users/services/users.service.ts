import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets } from 'chart.js';
import { BehaviorSubject, exhaustMap, map, Observable, OperatorFunction, pluck, tap } from 'rxjs';
import { environment } from './../../../environments/environment';

const DEFAULT_SORT: ISort = {
  asc: true,
  prop: 'name',
};

const INITIAL_PAGINATION = {
  currentPage: 1,
  itemsPerPage: 5,
  pages: [],
  totalPages: 0,
};

@Injectable()
export class UsersService {
  public readonly countryUrl = 'https://countryflagsapi.com/png';
  public readonly columns = ['name', 'gender', 'age', 'email', 'country', 'phone'];
  public readonly perAgeLabels = ['Under 18', '19-25', '26-35', '36-45', '46-55', '56-65', '66 and over'];
  public readonly numberOfItems = [5, 10, 25, 50, 'ALL'];
  public byCountries: IStatistic = {};
  public byAges: IStatistic = {};
  public chartData!: ChartDataSets[];

  private users: IUser[] = [];
  private readonly positions = 7;
  private readonly users$ = new BehaviorSubject<IUser[] | null>(null);
  private readonly sort$ = new BehaviorSubject<ISort>(DEFAULT_SORT);
  private readonly pagination$ = new BehaviorSubject<IPagination>(INITIAL_PAGINATION);

  constructor(private readonly http: HttpClient) { }

  getSort(): Observable<ISort> {
    return this.sort$.asObservable();
  }

  getPagination(): Observable<IPagination> {
    return this.pagination$.asObservable();
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get(`${environment.proxyUrl}/api/users`).pipe(
      pluck('results') as OperatorFunction<Object, IUser[]>,
      map((users: IUser[]) => users.map((user: IUser) => ({ ...user, name: { ...user.name, full: `${user.name.first} ${user.name.last}` } }))),
      tap((users: IUser[]) => this.initData(users)),
      exhaustMap(() => this.users$.asObservable() as Observable<IUser[]>),
    );
  }

  sortUsers({ asc, prop }: ISort): void {
    if (prop === 'age') {
      this.users = this.users.sort((a: IUser, b: IUser) => {
        return this.getValueByProp(asc ? a : b, prop) - this.getValueByProp(asc ? b : a, prop);
      });
    } else {
      this.users = this.users.sort((a: IUser, b: IUser) => {
        return this.getValueByProp(asc ? a : b, prop).localeCompare(this.getValueByProp(asc ? b : a, prop));
      });
    }

    this.sort$.next({ asc, prop });
    this.emitUsers();
  }

  goToPage(currentPage: number): void {
    const { itemsPerPage, totalPages } = this.pagination$.value;

    this.pagination$.next({
      currentPage: this.calculatePage(currentPage),
      itemsPerPage,
      totalPages,
      pages: this.calculatePages(totalPages, currentPage),
    });
    this.emitUsers();
  }

  goToPreviousPage(): void {
    let { currentPage, totalPages } = this.pagination$.value;

    if (currentPage > 1) {
      this.pagination$.next({
        ...this.pagination$.value,
        currentPage: --currentPage,
        pages: this.calculatePages(totalPages, currentPage),
      });
      this.emitUsers();
    }
  }

  goToNextPage(): void {
    let { currentPage, totalPages } = this.pagination$.value;

    if (currentPage < totalPages) {
      this.pagination$.next({
        ...this.pagination$.value,
        currentPage: ++currentPage,
        pages: this.calculatePages(totalPages, currentPage),
      });
      this.emitUsers();
    }
  }

  itemsPerPageChange(itemsPerPage: number | string): void {
    if (itemsPerPage === 'ALL') {
      this.pagination$.next({ ...this.pagination$.value, pages: [], itemsPerPage });
      return this.emitUsers();
    }

    const { currentPage } = this.pagination$.value;
    const totalPages = Math.ceil(this.users.length / (itemsPerPage as number));
    const page = this.calculatePage(currentPage, totalPages);

    this.pagination$.next({
      totalPages,
      itemsPerPage,
      currentPage: page,
      pages: this.calculatePages(totalPages, page),
    });

    this.emitUsers();
  }

  private initData(users: IUser[]): void {
    this.users = users;
    this.initStatistic();
    this.initPagination();
  }

  private initStatistic(): void {
    this.perAgeLabels.forEach((ageLabel: string) => this.byAges[ageLabel] = 0);

    this.users.forEach((user: IUser) => {
      const { age } = user.dob;
      const { country } = user.location;

      this.byCountries[country] ? this.byCountries[country]++ : this.byCountries[country] = 1;

      if (age < 18) {
        this.byAges[this.perAgeLabels[0]]++;
      } else if (age >= 19 && age <= 25) {
        this.byAges[this.perAgeLabels[1]]++;
      } else if (age >= 26 && age <= 35) {
        this.byAges[this.perAgeLabels[2]]++;
      } else if (age >= 36 && age <= 45) {
        this.byAges[this.perAgeLabels[3]]++;
      } else if (age >= 45 && age <= 55) {
        this.byAges[this.perAgeLabels[4]]++;
      } else if (age >= 56 && age <= 65) {
        this.byAges[this.perAgeLabels[5]]++;
      } else if (age > 66) {
        this.byAges[this.perAgeLabels[6]]++;
      }
    });

    this.chartData = [
      {
        data: Object.values(this.byAges),
      },
    ];
  }

  private initPagination(): void {
    const { itemsPerPage, currentPage } = this.pagination$.value;
    const totalPages = Math.ceil(this.users.length / (itemsPerPage as number));
    const pages = this.calculatePages(totalPages);

    this.pagination$.next({ currentPage, itemsPerPage, totalPages, pages });
    this.sortUsers(this.sort$.value);
  }

  private calculatePages(totalPages: number, page?: number): Array<string | number> {
    const currentPage = page || this.pagination$.value.currentPage;
    const width: number = currentPage === 1 || currentPage === totalPages ? this.positions + 1 : this.positions;
    const result: Array<string | number> = [];
    const middle: number = Math.ceil(this.positions / 2);

    if (totalPages < 2) {
      return result;
    }

    if (totalPages <= width) {
      for (let i = 1; i <= totalPages; i += 1) {
        result.push(i);
      }

      return result;
    }

    if (currentPage <= middle) {
      for (let i = 1; i <= width - 2; i += 1) {
        result.push(i);
      }
      result.push('');
      result.push(totalPages);
    } else if (currentPage > middle && currentPage < totalPages - middle + 1) {
      result.push(1);
      result.push('');

      const stepBack = Math.ceil((width - 5) / 2);
      const stepForward = Math.floor((width - 5) / 2);

      for (let i = currentPage - stepBack; i <= currentPage + stepForward; i += 1) {
        result.push(i);
      }

      result.push('');
      result.push(totalPages);
    } else {
      result.push(1);
      result.push('');

      for (let i = totalPages - width + 3; i <= totalPages; i += 1) {
        result.push(i);
      }
    }

    return result;
  }

  private calculatePage(page: number, totalPages?: number): number {
    return Math.max(1, Math.min(page, totalPages || this.pagination$.value.totalPages));
  }

  private emitUsers(): void {
    const { currentPage, itemsPerPage } = this.pagination$.value as { currentPage: number, itemsPerPage: any };

    if (itemsPerPage === 'ALL') {
      this.users$.next(this.users);
    } else {
      this.users$.next(this.users.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
    }
  }

  private getValueByProp(user: IUser, prop: string): any {
    switch (prop) {
      case 'age':
        return user.dob.age;
      case 'name':
        return user.name.full;
      case 'gender':
        return user.gender;
      case 'email':
        return user.email;
      case 'country':
        return user.location.country;
      case 'phone':
        return user.phone;
      default:
        return user;
    }
  }
}

export interface IStatistic {
  [key: string]: number;
}

export interface IPagination {
  itemsPerPage: number | string;
  currentPage: number;
  pages: Array<number | string>;
  totalPages: number;
}

export interface ISort {
  asc: boolean;
  prop: string;
}

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
    full: string; // custom
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
