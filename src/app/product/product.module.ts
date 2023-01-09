import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {ViewComponent} from "./view/view.component";
import { ShowComponent } from './show/show.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerviewComponent } from './customerview/customerview.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ViewComponent,
    ShowComponent,
    CustomerviewComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
