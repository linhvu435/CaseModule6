import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductModule} from "./product/product.module";
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { ShowAdminComponent } from './Admin/show-admin/show-admin.component';
=======
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




>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c





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
<<<<<<< HEAD
    // AngularFireStorageModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig)
=======
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HomeModule,
    BillModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
  ],
  exports: [
    NavbarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
