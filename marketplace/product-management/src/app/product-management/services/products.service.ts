import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.productManagementUrl}/api/products`);
  }
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
