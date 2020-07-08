import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { StudentModel } from '../../core/student.model';

@Component({
  selector: 'cm-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {
  @Input() title: string;
  @Input() student: StudentModel;
  @Input() btnLabel: string = 'Add'
  studentForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.createForm();
  }

  get firstNameField(): AbstractControl {
    return this.studentForm.controls.firstName;
  }

  get lastNameField(): AbstractControl {
    return this.studentForm.controls.lastName;
  }

  get emailField(): AbstractControl {
    return this.studentForm.controls.email;
  }

  get phoneNumberField(): AbstractControl {
    return this.studentForm.controls.phoneNumber;
  }

  handleAdd() {
    if (this.studentForm.invalid) return;

    this.activeModal.close(this.studentForm.value);
  }

  private createForm() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male', Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
    });

    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }
}
