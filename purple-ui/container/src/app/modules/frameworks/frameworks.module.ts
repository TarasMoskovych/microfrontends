import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrameworksComponent } from './frameworks.component';
import { getRemoteRoutes } from 'src/app/utils';

const routes: Routes = [
  {
    path: '',
    component: FrameworksComponent,
    children: getRemoteRoutes(),
  },
];

@NgModule({
  declarations: [
    FrameworksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FrameworksModule { }
