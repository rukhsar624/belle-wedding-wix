import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  public reset:FormGroup
  constructor(private fb: FormBuilder, private toaster: ToastrService , private http:HttpService ,private router: Router) {
    this.reset = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    })
  }
  resetPasswordFunction() {
    const newPassword = this.reset.controls['password'].value;
// console.log(localStorage.getItem('otp'));

    this.http
      .post(
        'forget-password',
        {
          email: localStorage.getItem('email'),
          otp:localStorage.getItem('otp'),
          password: newPassword,
        },
        true
      )
      .subscribe(
        (res: any) => {
          console.log('Password reset successful', res);
          this.router.navigate(['auth/login']);
          localStorage.removeItem('otp')
          localStorage.removeItem('email')
        },
        (error: any) => {
          console.error('Password reset failed', error);
        }
      );
  }
}
