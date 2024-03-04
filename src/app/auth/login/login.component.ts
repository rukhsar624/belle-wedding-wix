import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public Loginform: FormGroup
  public show: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpService, private router: Router, private authGuardServices:AuthGuardService,) {
    this.Loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  showPassword() {
    this.show = !this.show;
  }
  loginUser() {
    this.http.post('/auth/login', this.Loginform.value,false).subscribe(
      (res: any) => {
        console.log(res, "login response");
        localStorage.setItem('access_token', res?.token);
        this.router.navigateByUrl('users/home');
        this.authGuardServices.login('user')
      },
      (err: any) => {
        console.log(err.status, "sdfs");
        if (err.status == 403) {
          localStorage.setItem('email', this.Loginform.controls['email'].value)
      
        }
      }
    )
  }

}
