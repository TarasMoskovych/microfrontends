import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  canActivate(): boolean {
    return this.canAccess();
  }

  canLoad(): boolean {
    return this.canAccess();
  }

  private canAccess(): boolean {
    const hasPermission = !!this.authService.getUser();

    if (!hasPermission) {
      this.router.navigateByUrl('/auth/signin');
    }

    return hasPermission;
  }
}
