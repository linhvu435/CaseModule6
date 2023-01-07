import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',component:HomeComponent

  },{
    path: 'search',component:SearchComponent

  },{
    path: 'home',component:HomeComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
