import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./modules/shell/shell.module').then(
      (t) => t.ShellModule,
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
