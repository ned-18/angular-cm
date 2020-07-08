import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentModalComponent } from './shared/student-modal/student-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentModalComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
