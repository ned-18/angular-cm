import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details/home-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    HomeDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
