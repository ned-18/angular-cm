import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseModel } from './course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/courses');
  }

  getCourse(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/courses/'+id);
  }

  createCourse(course: CourseModel): Observable<any> {
    return this.http.post('http://localhost:3000/courses', course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }

}
