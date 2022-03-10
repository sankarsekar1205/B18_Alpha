import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {
    path:'nav', component: NavbarComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'register', component: RegistrationComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'myOrders', component:MyOrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
