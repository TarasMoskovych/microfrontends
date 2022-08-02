import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private readonly sidebarOpened = new BehaviorSubject<boolean>(false);
  public readonly sidebarOpened$ = this.sidebarOpened.asObservable();

  toggleSidebar(): void {
    this.sidebarOpened.next(!this.sidebarOpened.value);
  }

  closeSidebar(): void {
    this.sidebarOpened.next(false);
  }
}
