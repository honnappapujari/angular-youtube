import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef, private re: Renderer2) {}
  @HostListener('mouseenter') changebg() {
    this.re.setStyle(this.el.nativeElement, 'background', 'red');
  }
  @HostListener('mouseleave') originalbg() {
    this.re.setStyle(this.el.nativeElement, 'background', '');
  }
}
