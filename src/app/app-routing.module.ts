import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      { 
        path: 'courses', 
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
      },
      { path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
      { path: 'teachers', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
    ]
  },
  {
    path: '**',
    component: Page404Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
