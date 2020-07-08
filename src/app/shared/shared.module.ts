import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonDeleteModalComponent } from './common-delete-modal/common-delete-modal.component';
import { CommonDeleteBtnComponent } from './common-delete-btn/common-delete-btn.component';

@NgModule({
  declarations: [CommonHeaderComponent, CommonDeleteModalComponent, CommonDeleteBtnComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommonHeaderComponent, CommonDeleteBtnComponent, CommonDeleteModalComponent, ReactiveFormsModule]
})
export class SharedModule { }
