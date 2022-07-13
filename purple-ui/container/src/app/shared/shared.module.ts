import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  FooterComponent,
  NavbarComponent,
  SidebarComponent,
  SpinnerComponent,
} from './components';

import {
  ContentAnimateDirective,
} from './directives';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    ContentAnimateDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    ContentAnimateDirective,
  ],
})
export class SharedModule { }
