import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./login/register/register.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
<<<<<<< HEAD
  { path: 'register', component: RegisterComponent },
=======
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },

  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(module => module.BillModule)
  },
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
