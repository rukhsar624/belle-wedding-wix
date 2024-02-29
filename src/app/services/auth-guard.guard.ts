import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authGuardService: AuthGuardService, private router: Router) { }

  canActivate():boolean{
    if(localStorage.getItem('loginstate')){
      const role = localStorage.getItem('role');
      if (role === 'contractor') {
        this.router.navigate(['contractors']);
      } else if (role === 'user') {
        this.router.navigate(['users']);
      }
      return false;
    }
    return true;
    
  }
  
}
