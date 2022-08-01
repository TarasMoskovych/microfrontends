import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { IUser } from 'src/app/core/services/user.service';
import { getRemoteRoutes } from 'src/app/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Input() user!: IUser;

  public remoteRoutes: Routes = [];
  public remotesCollapsed = false;

  get frameworksActive(): boolean {
    return this.router.url.includes('frameworks');
  }

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    const body = document.querySelector('body') as HTMLElement;
    this.remoteRoutes = getRemoteRoutes();

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
