import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/alert.service';


import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';
import { StudentModalComponent } from '../shared/student-modal/student-modal.component';
import { CommonDeleteModalComponent } from 'src/app/shared/common-delete-modal/common-delete-modal.component';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: StudentModel[];

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }


  addStudent() {
    const modalRef = this.modalService.open(StudentModalComponent);
    modalRef.componentInstance.title = "Add Student";

    modalRef.result.then((result) => {
      if (!result) return;

      this.studentService.createStudent(result).subscribe(
        (success) => {
          this.alert.info('Student is added');
          this.loadStudents();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    });
  }

  editStudent(student: StudentModel) {
    const modalRef = this.modalService.open(StudentModalComponent);
    modalRef.componentInstance.title = "Edit Student";
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.btnLabel = 'Edit';

    modalRef.result.then((result) => {
      if (!result) return;

      this.studentService.updateStudent(student.id, result).subscribe(
        (success) => {
          this.alert.info('Student is edited');
          this.loadStudents();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  deleteStudent(student: StudentModel) {
    const modalRef = this.modalService.open(CommonDeleteModalComponent);
    modalRef.componentInstance.title = "studnet";
    modalRef.componentInstance.titleName = student.firstName;
    
    modalRef.result
    .then(() => {
      this.studentService.deleteStudent(student.id).subscribe(
        (success) => {
          this.alert.info('Student is deleted');
          this.loadStudents();
        },
        (error) => {
          this.alert.error('Please try later', 'Unexpected error');
        }
      );
    })
    .catch(() => {});
  }

  private loadStudents() {
    this.studentService.getAll().subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        this.alert.error('Please try later', 'Unexpected error');
      }
    );
  }

}
