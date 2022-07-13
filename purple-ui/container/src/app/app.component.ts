import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showSidebar = true;
  isLoading = false;
  user$!: Observable<IUser>;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  onSignout(): void {
    this.userService.signout();
  }
}
