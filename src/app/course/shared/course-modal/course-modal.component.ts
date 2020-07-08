import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

import { CourseModel } from "../../core/course.model";

@Component({
  selector: "cm-course-modal",
  templateUrl: "./course-modal.component.html",
  styleUrls: ["./course-modal.component.css"],
})
export class CourseModalComponent implements OnInit {
  course: CourseModel;
  courseForm: FormGroup;

  @Input() title: string;

  constructor(public activeModal: NgbActiveModal, private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.createForm();
  }

  get today(): NgbDateStruct {
    return this.calendar.getToday();
  }

  get nameField(): AbstractControl {
    return this.courseForm.controls.name;
  }

  get startDateField(): AbstractControl {
    return this.courseForm.controls.startDate;
  }

  handleAdd() {
    if (this.courseForm.invalid) return;


    this.activeModal.close(this.courseForm.value);
  }

  private createForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      city: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });
  }
}
