import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { TodoWrapperComponent, WeatherWrapperComponent } from './components';
import { TodoService } from './services/todo.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    TodoWrapperComponent,
    WeatherWrapperComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    TodoService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
