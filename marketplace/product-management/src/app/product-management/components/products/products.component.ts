import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { IProduct } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  @Input() products: IProduct[] = [];
  @Input() selected!: IProduct;
  @Output() selectProduct = new EventEmitter<IProduct>();

  onSelectProduct(e: MatSelectionListChange): void {
    this.selectProduct.emit(this.products.find((p: IProduct) => p.id === e.options[0].value));
  }
}
