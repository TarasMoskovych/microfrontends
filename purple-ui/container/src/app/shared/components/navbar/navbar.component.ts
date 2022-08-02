import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { IUser } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbDropdownConfig]
})
export class NavbarComponent {
  @Input() user!: IUser;
  @Output() signout = new EventEmitter<void>();

  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly sidebarService: SidebarService,
    @Inject(DOCUMENT) private document: Document,
    config: NgbDropdownConfig,
  ) {
    config.placement = 'bottom-right';
  }

  toggleOffcanvas(): void {
    this.sidebarService.toggleSidebar();
  }

  toggleSidebar() {
    const body = this.document.body;

    if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      this.renderer[this.iconOnlyToggled ? 'addClass': 'removeClass'](body, 'sidebar-icon-only');
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      this.renderer[this.sidebarToggled ? 'addClass': 'removeClass'](body, 'sidebar-hidden');
    }
  }
}
