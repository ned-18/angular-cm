import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-common-delete-btn',
  templateUrl: './common-delete-btn.component.html',
  styleUrls: ['./common-delete-btn.component.css']
})
export class CommonDeleteBtnComponent implements OnInit {

  @Output() onDeleteClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.onDeleteClick.emit();
  }

  ngOnDestroy(): void {
    this.onDeleteClick.unsubscribe();
  }

}
