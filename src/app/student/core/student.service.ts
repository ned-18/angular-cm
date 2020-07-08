import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/students');
  }

  createStudent(student: StudentModel): Observable<any> {
    return this.http.post('http://localhost:3000/students', student);
  }

  updateStudent(id: number, student: StudentModel): Observable<any> {
    return this.http.put(`http://localhost:3000/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/students/${id}`);
  }

}
