import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list.component';
import { CourseModalComponent } from './shared/course-modal/course-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseModalComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
