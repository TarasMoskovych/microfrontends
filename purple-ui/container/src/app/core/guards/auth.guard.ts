import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private readonly userService: UserService,
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
    const hasPermission = !!this.userService.getUser();

    if (!hasPermission) {
      this.router.navigateByUrl('/auth/signin');
    }

    return hasPermission;
  }
}
