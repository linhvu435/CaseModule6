import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "../product/show/show.component";
import {BillComponent} from "./bill.component";
import {DanggiaoComponent} from "./danggiao/danggiao.component";


const routes: Routes = [
  {
    path: '', component: BillComponent
  }, {
    path: 'allbill', component: BillComponent
  }, {
    path: 'billstatus', component: DanggiaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
