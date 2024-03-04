import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
    children:[
      {
        path: '',
        redirectTo:'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component:HomeComponent,
      },
      {
        path: 'about',
        component:AboutUsComponent,
      },
      {
        path:'services',
        component:ServicesComponent
      },
      {
        path:'testimonials',
        component:TestimonialsComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'contact',
        component:ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
