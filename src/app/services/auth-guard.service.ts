import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
isLogin=false;
roleAs: any;
  constructor() { }
  login(value:string){
    this.isLogin=true;
    this.roleAs = value;
    localStorage.setItem('loginstate', 'true'); 
    return of ({success:this.isLogin,value})
  }
  isLoggedIn() {
    return localStorage.getItem('token')
  }

  getRole() {
    return localStorage.getItem('role');
  }
}
