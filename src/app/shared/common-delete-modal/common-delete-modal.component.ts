import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'cm-common-delete-modal',
  templateUrl: './common-delete-modal.component.html',
  styleUrls: ['./common-delete-modal.component.css']
})
export class CommonDeleteModalComponent implements OnInit {

  @Input() title: string;
  @Input() titleName: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
}
