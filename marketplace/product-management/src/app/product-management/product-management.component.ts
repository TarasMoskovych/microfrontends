import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { IProduct, ProductsService } from './services/products.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductManagementComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  selected!: IProduct;

  constructor(
    private readonly productsService: ProductsService,
    private readonly matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelectProduct(product: IProduct): void {
    this.selected = product;
  }

  onAddProduct(): void {
    console.log('on add');
  }

  onEditProduct(product: IProduct): void {
    console.log(product);
  }

  onDeleteProduct(product: IProduct): void {
    this.matDialog.open(ConfirmDialogComponent, {
      data: product,
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log(product);
      }
    });
  }

  private getProducts(): void {
    this.products$ = this.productsService.getProducts().pipe(
      tap((products: IProduct[]) => {
        if (!this.selected) {
          this.selected = products[0];
        }
      }),
    );
  }
}
