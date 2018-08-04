import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('class.important-color')
  private isHover = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // this.renderer.addClass(this.el.nativeElement, 'card');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.el.nativeElement, 'card-hover');
    this.isHover = true;

  }

  @HostListener('mouseleave') onMuseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'card-hover');
    this.isHover = false;
  }

}
