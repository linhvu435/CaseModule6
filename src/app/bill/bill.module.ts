import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { NavbarleftbillComponent } from './navbarleftbill/navbarleftbill.component';
import {BillComponent} from "./bill.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [

    NavbarleftbillComponent,

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
