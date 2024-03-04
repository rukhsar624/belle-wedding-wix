import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerGuardGuard } from './services/inner-guard.guard';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'auth',
    pathMatch: 'full',
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),canActivate:[AuthGuardGuard]},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canActivate:[InnerGuardGuard]},
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
