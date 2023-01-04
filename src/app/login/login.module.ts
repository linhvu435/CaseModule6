import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


@NgModule({
    declarations: [
        CheckoutComponent,
        LoginComponent,
        RegisterComponent
    ],

    imports: [
        CommonModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
