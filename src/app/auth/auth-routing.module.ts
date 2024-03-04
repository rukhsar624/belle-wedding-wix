import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../services/auth-guard.guard';
import { AuthComponent } from './auth.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
    children: [
      {
        path: '',
        redirectTo:'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component:LoginComponent,
      },
      {
        path: 'register',
        component:RegisterComponent,
      },
      {
        path: 'forget',
        component:ForgetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
