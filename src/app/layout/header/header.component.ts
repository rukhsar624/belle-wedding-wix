import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerNotShow:boolean=false;
  public headerShow:boolean=true;

  isMobileNavActive = false;
  constructor(private cd: ChangeDetectorRef,private router:Router){
    router.events.subscribe((val: any) => {
      const routeName = router.routerState.snapshot.url.split("/")[2];
      // console.log(routeName);
      this.headerNotShow = (routeName === 'login' || routeName === 'register' || routeName ==='forget'
      || routeName === 'reset');
    });
    router.events.subscribe((val: any) => {
      const routeName = router.routerState.snapshot.url.split("/")[2];
      // console.log(routeName);
      this.headerShow = (routeName === 'home' || routeName === 'about' || routeName === 'services' || routeName === 'testimonials'
      || routeName === 'gallery' || routeName === 'contact');
    });
  }
  toggleMobileNav(){
    this.isMobileNavActive = !this.isMobileNavActive;
  }
  uersLogOut(){
    localStorage.clear();
    console.log('users logout');
    this.router.navigate(['/auth/login'])
  }
}
