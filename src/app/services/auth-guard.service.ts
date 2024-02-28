import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
isLogin=false
  constructor() { }
  login(value:string){
    this.isLogin = true;
    localStorage.setItem('loginstate', 'true');
    return of({ success: this.isLogin, role: value });
  }
  isLoggedIn() {
    return localStorage.getItem('access_token')
  }
}
