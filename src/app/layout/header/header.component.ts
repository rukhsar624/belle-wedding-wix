import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileNavActive = false;
  toggleMobileNav(){
    this.isMobileNavActive = !this.isMobileNavActive;
  }
}
