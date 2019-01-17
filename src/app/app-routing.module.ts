import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "./services/auth.guard";
import { AuthLoginGuard } from "./services/auth.login.guard";


const routes: Routes = [
  { path: '',  canActivate: [AuthGuard], redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'register',component: PublicComponent },
  { path: 'login',canActivate: [AuthLoginGuard] ,component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
