import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {CheckoutComponent} from "./checkout/checkout.component";
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,

  ],

  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
