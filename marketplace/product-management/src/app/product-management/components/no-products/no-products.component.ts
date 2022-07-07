import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-products',
  templateUrl: './no-products.component.html',
  styleUrls: ['./no-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoProductsComponent {
}
