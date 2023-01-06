import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login/login.component";
import {ShowAdminComponent} from "./show-admin/show-admin.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '', component:ShowAdminComponent
  },
  {
    path: 'edit/:id', component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
