import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
    children: [
      {
        path: '',
        redirectTo:'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component:HomeComponent ,
      },
      {
        path: 'about',
        component:AboutComponent ,
      },
      {
        path: 'services',
        component:ServicesComponent ,
      },
      {
        path: 'testimonials',
        component:TestimonialsComponent ,
      },
      {
        path: 'gallery',
        component:GalleryComponent ,
      },
      {
        path: 'contact',
        component:ContactComponent ,
      },
      {
        path: 'login',
        component:LoginComponent,
      },
      {
        path: 'register',
        component:RegisterComponent,
      },
      {
        path: 'forget',
        component:ForgetPasswordComponent,
      },
      {
        path: 'reset',
        component:ResetPasswordComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }