import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactUsComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
