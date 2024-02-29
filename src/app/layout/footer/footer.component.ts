import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public showFooter:boolean=true;
  public showFooterAuth:boolean=true;
constructor(private router:Router){
  router.events.subscribe((val: any) => {
    const routeName = router.routerState.snapshot.url.split("/")[2];
    // console.log(routeName);
    this.showFooter = !(routeName === 'home' || routeName === 'contact' || routeName === 'faqs');
  });
}
}
