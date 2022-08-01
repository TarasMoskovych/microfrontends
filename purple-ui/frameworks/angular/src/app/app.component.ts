import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare const NG_VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  title = 'angular';
  version = NG_VERSION;
}
