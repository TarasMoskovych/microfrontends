import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductManagementComponent implements OnInit {

  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}
