import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart/cart.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },

  // {
  //   path: 'search',
  //   loadChildren: () => import('./search/search.module').then(module => module.SearchModule)
  // },
  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(module => module.BillModule)
  },
  {
    path: 'billuser',
    loadChildren: () => import('./billuser/billuser.module').then(module => module.BilluserModule)
  },
  {
    path: 'cart', component: CartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
