import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSidebarNavToggle]'
})
export class SidebarNavToggleDirective {
  @HostListener('mouseover') onMouseOver(): void {
    this.toggleHover(true);
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.toggleHover(false);
  }

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  private toggleHover(hover: boolean): void {
    if (this.document.body.classList.contains('sidebar-icon-only')) {
      this.renderer[hover ? 'addClass': 'removeClass'](this.elementRef.nativeElement, 'hover-open');
    }
  }
}
