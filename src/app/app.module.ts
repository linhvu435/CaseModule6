import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from "./login/login.module";
import { NavbarComponent } from './navbar/navbar.component';
import {ProductModule} from "./product/product.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NavbarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
