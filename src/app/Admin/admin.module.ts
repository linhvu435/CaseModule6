import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ShowAdminComponent} from "./show-admin/show-admin.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';

import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowOneComponent } from './show-one/show-one.component';
import {DeleteComponent} from "./delete/delete.component";


@NgModule({
  declarations: [
    ShowAdminComponent,
    EditComponent,
    SearchComponent,
    ShowOneComponent,
    DeleteComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
