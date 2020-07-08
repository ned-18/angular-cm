import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CardItemModel } from '../core/card-item.model';

@Component({
  selector: 'cm-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() cardItem: CardItemModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  viewDetails() {
    this.router.navigate(['home/details', this.cardItem.id])

  }

}
