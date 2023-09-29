import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeBg]',
})
export class changeBg implements OnInit {
  constructor(private element: ElementRef, private render: Renderer2) {
    element.nativeElement.style.backgroundColor = '#c8e6c9';
  }
  ngOnInit(): void {
    this.render.addClass(this.element.nativeElement, 'honnappa');
  }
}
