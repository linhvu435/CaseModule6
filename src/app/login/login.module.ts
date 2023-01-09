import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {CheckoutComponent} from "./checkout/checkout.component";
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
<<<<<<< HEAD
=======
import { LoginComponent } from './login/login.component';

>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c


@NgModule({
  declarations: [
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,

<<<<<<< HEAD
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
=======
  ],

  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
})
export class LoginModule { }
