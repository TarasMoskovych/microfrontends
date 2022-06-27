import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(`${environment.productManagementUrl}/api/products`);
  }
}
