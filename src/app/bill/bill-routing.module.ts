import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "../product/show/show.component";
import {BillComponent} from "./bill.component";
import {ChoxacnhanComponent} from "./choxacnhan/choxacnhan.component";
import {DanggiaoComponent} from "./danggiao/danggiao.component";
import {ThanhcongComponent} from "./thanhcong/thanhcong.component";
import {DahuyComponent} from "./dahuy/dahuy.component";

const routes: Routes = [
  {
    path: '', component: BillComponent
  }, {
    path: 'allbill', component: BillComponent
  }, {
    path: 'choxacnhan', component: ChoxacnhanComponent
  }, {
    path: 'danggiao', component: DanggiaoComponent
  },{
    path: 'thanhcong', component: ThanhcongComponent
  },{
    path: 'dahuy', component: DahuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
