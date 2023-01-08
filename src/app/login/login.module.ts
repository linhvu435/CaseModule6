import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        CheckoutComponent,
        LoginComponent,
        RegisterComponent
    ],

    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
