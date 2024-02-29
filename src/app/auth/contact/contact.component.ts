import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm:FormGroup;
  constructor(private fb:FormBuilder ,private http: HttpService, private router:Router,){
  this.contactForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    subject:['',[Validators.required]],
    message:['',[Validators.required]],
  })  
  
  }
  userQuery(){
    this.http.post('/contact_us' , this.contactForm.value, true).subscribe((res:any)=>{
      console.log(this.contactForm,'data');
      
    })
  }
}
