import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';
import { DialogComponent } from './table/dialog/dialog.component';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCardModule,
  FlexLayoutModule,
  MatTableModule,
  MatIconModule
];

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    EditComponent,
    DialogComponent
  ],
  imports: [
    ...modules
  ],
  exports: [FormComponent]
})
export class UserModule { }
