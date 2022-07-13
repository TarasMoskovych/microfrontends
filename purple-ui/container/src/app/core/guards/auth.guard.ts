import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { IUser, UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.canAccess();
  }

  canLoad(): Observable<boolean> {
    return this.canAccess();
  }

  private canAccess(): Observable<boolean> {
    return this.userService.getUser().pipe(
      map((user: IUser) => {
        if (!user) {
          this.router.navigateByUrl('/auth/signin');
        }

        return !!user;
      }),
      take(1),
    );
  }
}
