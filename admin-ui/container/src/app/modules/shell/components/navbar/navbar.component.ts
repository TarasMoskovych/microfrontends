import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    config: NgbDropdownConfig,
  ) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }

  toggleOffcanvas(): void {
    this.document.querySelector('.sidebar-offcanvas')?.classList.toggle('active');
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
