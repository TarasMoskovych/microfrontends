import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell.component';
import {
  FooterComponent,
  NavbarComponent,
  SidebarComponent,
  SpinnerComponent,
} from './components';

import {
  ContentAnimateDirective,
} from './directives';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ShellComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    DashboardComponent,
    ContentAnimateDirective,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
})
export class ShellModule { }
