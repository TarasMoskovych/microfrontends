import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { IUser } from 'src/app/core/services/user.service';
import { getRemoteRoutes } from 'src/app/utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() user!: IUser;
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside && !('toggleSidebar' in targetElement.dataset)) {
      this.sidebarService.closeSidebar();
    }
  }

  public remoteRoutes: Routes = getRemoteRoutes();
  public remotesCollapsed = false;

  get frameworksActive(): boolean {
    return this.router.url.includes('frameworks');
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly router: Router,
    public readonly sidebarService: SidebarService,
  ) {
  }
}
