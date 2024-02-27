import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GetStartedComponent } from './get-started/get-started.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
  ]
})
export class AuthModule { }
