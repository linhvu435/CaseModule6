import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";


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
<<<<<<< HEAD
  {

    path: 'admin',
    loadChildren: () => import('./Admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(module => module.SearchModule)

  }
=======
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c

  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(module => module.BillModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
