import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.productManagementUrl}/api/products`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${environment.productManagementUrl}/api/product`, product);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${environment.productManagementUrl}/api/product/${product.id}`, product);
  }

  delete(product: IProduct): Observable<void> {
    return this.httpClient.delete<void>(`${environment.productManagementUrl}/api/product/${product.id}`);
  }
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
