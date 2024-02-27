import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private el: ElementRef, private renderer: Renderer2){
  }
  ngAfterViewInit() {
    const header = this.el.nativeElement.querySelector('.main-div app-header');
    const footer = this.el.nativeElement.querySelector('.main-div app-footer');
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const availableHeight = window.innerHeight - (headerHeight + footerHeight);
    const innerDiv = this.el.nativeElement.querySelector('.main-div .inner-div');
    this.renderer.setStyle(innerDiv, 'min-height', `${availableHeight}px`);
  }
}
