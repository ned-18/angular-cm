import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from 'src/app/shared/alert.service';

import { TeacherModel } from "../core/teacher.model";
import { TeacherService } from "../core/teacher.service";
import { TeacherModalComponent } from "../shared/teacher-modal/teacher-modal.component";
import { CommonDeleteModalComponent } from "src/app/shared/common-delete-modal/common-delete-modal.component";

@Component({
  selector: "cm-teacher-list",
  templateUrl: "./teacher-list.component.html",
  styleUrls: ["./teacher-list.component.css"],
})
export class TeacherListComponent implements OnInit {
  teachers: TeacherModel[];

  constructor(
    private teacherService: TeacherService,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.loadTeachers();
  }

  addTeacher() {
    const modalRef = this.modalService.open(TeacherModalComponent);
    modalRef.componentInstance.title = "Add Teacher";

    modalRef.result
    .then((result) => {
      if (!result) return;

      this.teacherService.createTeacher(result).subscribe(
        (success) => {
          this.loadTeachers();
          this.alert.success('Teacher added');
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  editTeacher(teacher: TeacherModel) {
    const modalRef = this.modalService.open(TeacherModalComponent);
    modalRef.componentInstance.title = "Edit Teacher";
    modalRef.componentInstance.teacher = teacher;
    modalRef.componentInstance.btnLabel = 'Edit';

    modalRef.result.then((result) => {
      if (!result) return;

      this.teacherService.updateTeacher(teacher.id, result).subscribe(
        (success) => {
          this.alert.info('Teacher is edited');
          this.loadTeachers();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  deleteTeacher(teacher: TeacherModel) {
    const modalRef = this.modalService.open(CommonDeleteModalComponent);
    modalRef.componentInstance.title = "teacher";
    modalRef.componentInstance.titleName = teacher.firstName;
    
    modalRef.result
    .then(() => {
      this.teacherService.deleteTeacher(teacher.id).subscribe(
        (success) => {
          this.alert.info('Teacher is deleted');
          this.loadTeachers();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  private loadTeachers() {
    this.teacherService.getAll().subscribe(
      (response) => {
        this.teachers = response;
      },
      (error) => {
        this.alert.error('Please try later', 'Unexpected error');
      }
    );
  }
}


