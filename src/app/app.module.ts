import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductModule} from "./product/product.module";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "./home/home.module";
import { BillComponent } from './bill/bill.component';
import {BillModule} from "./bill/bill.module";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { BilluserComponent } from './billuser/billuser.component';
import {BilluserModule} from "./billuser/billuser.module";
import {NavbarleftComponent1} from "./home/navbarleft/navbarleft-component1.component";






import { CartComponent } from './cart/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BilluserComponent,// ShowAdminComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HomeModule,
    BillModule,
    BilluserModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    NavbarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
