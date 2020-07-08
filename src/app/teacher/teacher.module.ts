import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherModalComponent } from './shared/teacher-modal/teacher-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherModalComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
