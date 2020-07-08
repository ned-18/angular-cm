import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  @Input() title: string;

  @Output() onAddClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.onAddClick.emit();
  }

  ngOnDestroy(): void {
    this.onAddClick.unsubscribe();
  }

}
