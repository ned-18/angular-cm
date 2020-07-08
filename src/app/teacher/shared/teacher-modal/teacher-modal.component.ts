import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TeacherModel } from '../../core/teacher.model';

@Component({
  selector: 'cm-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css']
})
export class TeacherModalComponent implements OnInit {
  @Input() title: string;
  @Input() teacher: TeacherModel;
  @Input() btnLabel: string = 'Add';
  teacherForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.createForm();
  }

  get firstNameField(): AbstractControl {
    return this.teacherForm.controls.firstName;
  }

  get lastNameField(): AbstractControl {
    return this.teacherForm.controls.lastName;
  }

  get emailField(): AbstractControl {
    return this.teacherForm.controls.email;
  }

  handleConfirm() {
    if (this.teacherForm.invalid) return;

    this.activeModal.close(this.teacherForm.value);
  }

  private createForm() {
    this.teacherForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male', Validators.required),
      company: new FormControl(null)
    });

    if (this.teacher) {
      this.teacherForm.patchValue(this.teacher);
    }
  }

}
