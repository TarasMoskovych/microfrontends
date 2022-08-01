import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then(
      (t) => t.DashboardModule,
    ),
    canActivate: [AuthGuard],
  },
  {
    path: 'frameworks',
    loadChildren: () =>
    import('./modules/frameworks/frameworks.module').then(
      (t) => t.FrameworksModule,
    ),
    canActivate: [AuthGuard],
  },
  {
    title: 'Users',
    path: 'users',
    loadComponent: () =>
    import('users/UsersComponent').then(
      (t) => t.UsersComponent,
    ),
    canActivate: [AuthGuard],
  },
  {
    title: 'Auth',
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
