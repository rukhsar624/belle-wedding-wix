import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class InnerGuardGuard implements CanActivate {
  constructor(private router: Router, private authGuardService: AuthGuardService) {}

  canActivate(): boolean {
    const url = localStorage.getItem('loginstate');    
    if (!url) {
        this.router.navigateByUrl('/auth/register');
      return false;
    }
    return true;
  }
  
}
