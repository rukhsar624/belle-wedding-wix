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
import { GetStartedComponent } from './get-started/get-started.component';
import { AuthGuardGuard } from '../services/auth-guard.guard';
import { InnerGuardGuard } from '../services/inner-guard.guard';

const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
    children: [
      {
        path: '',
        redirectTo:'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component:LoginComponent,
      },
      {
        path: 'home',
        component:HomeComponent,
        canActivate: [InnerGuardGuard]
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
        path: 'register',
        component:RegisterComponent,
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'forget',
        component:ForgetPasswordComponent,
      },
      {
        path: 'reset',
        component:ResetPasswordComponent,
      },
      {
        path: 'get-started',
        component:GetStartedComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
