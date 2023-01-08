import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginModule} from "./login/login.module";
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./login/register/register.component";
import {LoginComponent} from "./login/login/login.component";
import {AuthInterceptor} from "./auth.interceptor";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule
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
