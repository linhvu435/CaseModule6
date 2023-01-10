import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BillComponent} from "../bill/bill.component";
import {BilluserComponent} from "./billuser.component";

const routes: Routes = [
  {
    path: '', component: BilluserComponent
  },
  {
    path:'billuser',component : BilluserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilluserRoutingModule { }
