import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  public reSetPwd:FormGroup
  isFormValid :boolean =false
constructor(private fb:FormBuilder , private toaster:ToastrService){
  this.reSetPwd=this.fb.group({
    email:['' ,Validators.required],
    password:['',Validators.required],
    password_confirmation:['',Validators.required]
  }) 
}
reset(){
  if(this.isFormValid){
    const password=this.reSetPwd.controls['password'];
    const password_confirmation=this.reSetPwd.controls['password_confirmation'];
    const email =this.reSetPwd.controls['email'].value;
if(password!==password_confirmation){
  this.toaster.error('Passwords do not match', 'Error');
        return;
  
}
  }
  

  }


}
