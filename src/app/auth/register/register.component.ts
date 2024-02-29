import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public show: boolean = false;
  public notshow:boolean=false;
  public registerForm:FormGroup
  isFormValid: boolean = false;
constructor(private fb:FormBuilder,private http: HttpService, private router:Router,){
  this.registerForm=this.fb.group({
    fname: ['', [Validators.required]],
    lname:['',[Validators.required]],
    email:['' ,Validators.required],
    phone_no:['' ,Validators.required],
    password:['' , Validators.required],
    password_confirmation:['' , Validators.required],


  })
}
uersResgister(){
  this.http.post('/auth/register' , this.registerForm.value,false).subscribe((res:any)=>{
console.log(res,'hello users');
this.router.navigate(['/auth/home'])

  }),((error:any)=>{
    console.log(error,'Error');
    
  })
// if(this.isFormValid){
//   const password = this.registerForm.controls['password'].value;
//   const password_confirmation = this.registerForm.controls['password_confirmation'].value;
//   if(password!==password_confirmation){
// this.toastr.error('password does not match' , 'Error')
// console.log(this.registerForm.value);
//   }

// }
}
showPassword() {
  this.show = !this.show;
}
notshowPassword(){
  this.notshow=!this.notshow;
}
}
