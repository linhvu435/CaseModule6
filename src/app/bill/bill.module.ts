import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { ThanhcongComponent } from './thanhcong/thanhcong.component';
import { NavbarleftbillComponent } from './navbarleftbill/navbarleftbill.component';
import {ChoxacnhanComponent} from "./choxacnhan/choxacnhan.component";
import {DanggiaoComponent} from "./danggiao/danggiao.component";
import {DahuyComponent} from "./dahuy/dahuy.component";


@NgModule({
  declarations: [
    ThanhcongComponent,
    NavbarleftbillComponent,
    ChoxacnhanComponent,
    DanggiaoComponent,
    DahuyComponent,

  ],
  exports: [
    NavbarleftbillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule
  ]
})
export class BillModule { }
