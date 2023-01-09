import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarleftComponent } from './navbarleft/navbarleft.component';
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    NavbarleftComponent,
    SearchComponent
  ],
  exports: [
    NavbarleftComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
