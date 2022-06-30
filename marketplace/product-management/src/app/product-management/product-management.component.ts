import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, take, tap } from 'rxjs';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { IProduct, ProductsService } from './services/products.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductManagementComponent implements OnInit {
  products$ = new Subject<IProduct[]>();
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
    this.openProductFormDialog();
  }

  onEditProduct(data: IProduct): void {
    this.openProductFormDialog(data);
  }

  onDeleteProduct(product: IProduct): void {
    this.matDialog.open(ConfirmDialogComponent, {
      data: product,
    }).afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteProduct(product);
      }
    });
  }

  private getProducts(id?: number): void {
    this.productsService.getAll().pipe(
      take(1),
      tap((products: IProduct[]) => {
        this.products$.next(products);

        if (id) {
          this.selected = products.find((p: IProduct) => p.id === id) as IProduct;
        } else if (products.length) {
          this.selected = products[0];
        }
      }),
    ).subscribe();
  }

  private deleteProduct(product: IProduct): void {
    this.productsService.delete(product).pipe(
      take(1),
      tap(() => this.getProducts()),
    ).subscribe();
  }

  private openProductFormDialog(data?: IProduct): void {
    this.matDialog.open(ProductFormComponent, { data }).afterClosed().subscribe((product: IProduct) => {
      if (product) {
        this.getProducts(product.id);
      }
    });
  }
}
