import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { NavbarleftbillComponent } from './navbarleftbill/navbarleftbill.component';
import {DanggiaoComponent} from "./danggiao/danggiao.component";
import {BillComponent} from "./bill.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [

    NavbarleftbillComponent,

    DanggiaoComponent,
    BillComponent,

  ],
  exports: [
    NavbarleftbillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    FormsModule
  ]
})
export class BillModule { }
