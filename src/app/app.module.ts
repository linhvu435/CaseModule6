import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductModule} from "./product/product.module";
import {HttpClientModule} from "@angular/common/http";
import {AdminModule} from "./Admin/admin.module";






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
    HttpClientModule,
    // AngularFireStorageModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig)
    AdminModule
  ],
  providers: [],
  exports: [
    NavbarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
