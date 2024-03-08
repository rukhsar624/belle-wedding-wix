import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public showFooter:boolean=true;
  public showFooterAuth:boolean=true;
constructor(private router:Router,private http: HttpService){
  router.events.subscribe((val: any) => {
    const routeName = router.routerState.snapshot.url.split("/")[2];
    // console.log(routeName);
    this.showFooter = !(routeName === 'home' || routeName === 'contact' || routeName === 'faqs');
  });
}
ngOnInit(){
  // this.observe()
  // this.getCms()
}
// getCms() {
//   try {
//     this.http.get('settings/get', true).subscribe(
//       (res: any) => {
//         console.log(res);
//         this.cms = res?.data;
//       },
//       (error) => {
//         console.error('Error fetching user:', error);
//       }
//     );
//   } catch (error) {
//     console.error('Error fetching user:', error);
//   }
// }


// async observe() {
//   UniversalService.settingsUpdate.subscribe((res: any)=>{
//     if(res){
//       this.getCms();
//     }
//     this.cd.detectChanges();
//   })
// }
}
