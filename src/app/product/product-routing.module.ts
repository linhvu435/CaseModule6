import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {DeleteComponent} from "./delete/delete.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";
import {ShowComponent} from "./show/show.component";

const routes: Routes = [
  {
    path: '', component: ShowComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'delete/:id', component: DeleteComponent
  },
  {
    path: 'edit/:id', component: EditComponent
  },
  {
    path: 'view/:id', component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
