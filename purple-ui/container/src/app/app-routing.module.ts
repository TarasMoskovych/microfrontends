import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then(
      (t) => t.DashboardModule,
    ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadComponent: () =>
    import('users/UsersComponent').then(
      (t) => t.UsersComponent,
    ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('auth/AuthModule').then(
      (t) => t.AuthModule,
    ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
