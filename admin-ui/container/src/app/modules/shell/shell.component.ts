import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../core/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {
  showSidebar = true;
  isLoading = false;
  user!: IUser;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  onSignout(): void {
    this.authService.signout();
  }
}
