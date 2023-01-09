import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductModule} from "./product/product.module";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { ShowAdminComponent } from './Admin/show-admin/show-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    // ShowAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    // AngularFireStorageModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  exports: [
    NavbarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
