import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CourseService } from "./core/course.service";
import { CourseModel } from "./core/course.model";
import { CourseModalComponent } from "./shared/course-modal/course-modal.component";
import { AlertService } from '../shared/alert.service';
import { CommonDeleteModalComponent } from '../shared/common-delete-modal/common-delete-modal.component';

@Component({
  selector: "cm-course",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  courses: CourseModel[];

  constructor(
    private courseService: CourseService,
    private modalService: NgbModal,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  addCourse() {
    const modalRef = this.modalService.open(CourseModalComponent);
    modalRef.componentInstance.title = "Add Course";

    modalRef.result
      .then(result => {
        if (!result) return;
        
          this.courseService.createCourse(result).subscribe(
            (success) => {
              this.alert.success('Course is added');
              this.loadCourses();
            },
            error => {
              this.alert.error('Please try later', 'Unexpected error');
            }
          );
      })
      .catch(()=> {});
  }

  deleteCourse(coruse: CourseModel) {
    const modalRef = this.modalService.open(CommonDeleteModalComponent);
    modalRef.componentInstance.title = "coruse";
    modalRef.componentInstance.titleName = coruse.name;
    
    modalRef.result
    .then(() => {
      this.courseService.deleteCourse(coruse.id).subscribe(
        (success) => {
          this.alert.info('Coruse is deleted');
          this.loadCourses();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  private loadCourses() {
    this.courseService.getAll().subscribe(
      (result) => {
        this.courses = result;
      },
      (error) => {
        this.alert.error('Please try later', 'Unexpected error');
      },
    );
  }
}
