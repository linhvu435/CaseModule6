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
  {
<<<<<<< HEAD
    path: 'search',
    loadChildren: () => import('./search/search.module').then(module => module.SearchModule)
  },
=======
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(module => module.BillModule)
  },

>>>>>>> 0cdff56c514c3e3ddc86305f975282630cc27fb1

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
