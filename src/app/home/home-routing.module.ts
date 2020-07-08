import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: HomeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
