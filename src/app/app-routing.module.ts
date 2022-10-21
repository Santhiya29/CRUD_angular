import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './user/edit/edit.component';
import { FormComponent } from './user/form/form.component';
import { TableComponent } from './user/table/table.component';

const routes: Routes = [
  {
    path :"", component : FormComponent,
  },{
    path :"users", component : TableComponent
  },
  {
    path :"update_user/:id", component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
