import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilluserRoutingModule } from './billuser-routing.module';
import { NavbarleftbilluserComponent } from './navbarleftbilluser/navbarleftbilluser.component';


@NgModule({
  declarations: [
    NavbarleftbilluserComponent
  ],
  exports: [
    NavbarleftbilluserComponent
  ],
  imports: [
    CommonModule,
    BilluserRoutingModule
  ]
})
export class BilluserModule { }
