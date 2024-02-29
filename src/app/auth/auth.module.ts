import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { AboutComponent } from './about/about.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


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
    GetStartedComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers:[
  ]
})
export class AuthModule { }
