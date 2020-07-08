import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TeacherModel } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/teachers');
  }

  createTeacher(teacher: TeacherModel): Observable<any> {
    return this.http.post('http://localhost:3000/teachers', teacher);
  }

  updateTeacher(id: number, teacher: TeacherModel): Observable<any> {
    return this.http.put(`http://localhost:3000/teachers/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/teachers/${id}`);
  }

}
