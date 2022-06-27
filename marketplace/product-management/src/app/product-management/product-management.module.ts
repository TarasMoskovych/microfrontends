import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductManagementComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductManagementComponent,
  ],
})
export class ProductManagementModule { }
