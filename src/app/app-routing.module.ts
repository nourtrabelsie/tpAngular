import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authentificationGuard } from './authentification.guard';
import { roleGuardGuard } from './role-guard.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:"full"
  },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:
    [authentificationGuard,roleGuardGuard]
    },
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
