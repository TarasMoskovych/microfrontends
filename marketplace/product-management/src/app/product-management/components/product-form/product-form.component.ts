import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize, take } from 'rxjs';
import { IProduct, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;

  get title(): string {
    return this.product ? `Edit ${this.product.name}` : 'Add product';
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly matDialogRef: MatDialogRef<ProductFormComponent>,
    private readonly productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.productService[this.product ? 'update' : 'create']({...this.product, ...this.form.value }).pipe(
      take(1),
      finalize(() => this.loading = false),
    ).subscribe((response: IProduct) => this.matDialogRef.close(response));
  }

  private initForm(): void {
    const { name, description, imageUrl, price } = this.product || {};

    this.form = this.fb.group({
      name: [name, Validators.required],
      description: [description, Validators.required],
      imageUrl: [imageUrl],
      price: [price, Validators.required],
    });
  }
}
