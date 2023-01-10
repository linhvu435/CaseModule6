import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarleftComponent1 } from './navbarleft/navbarleft-component1.component';
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    NavbarleftComponent1,
    SearchComponent,

  ],
  exports: [
    NavbarleftComponent1
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
