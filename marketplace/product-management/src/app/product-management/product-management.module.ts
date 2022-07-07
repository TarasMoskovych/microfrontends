import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductManagementComponent } from './product-management.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsService } from './services/products.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NoProductsComponent } from './components/no-products/no-products.component';

@NgModule({
  declarations: [
    ProductManagementComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ConfirmDialogComponent,
    ProductFormComponent,
    NoProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductManagementComponent,
  ],
})
export class ProductManagementModule { }
