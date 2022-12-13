import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student-model';
import { Observable } from 'rxjs';
import { StudentToken } from '../models/studenttoken-model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl;
  addStudent(student:any):Observable<Student>{
    return this.http.post<Student>(this.apiBaseUrl+'/api/Students',student);
   }
   studentLogin(student:any):Observable<StudentToken>{
    return this.http.post<StudentToken>(this.apiBaseUrl+'/api/Students/Login',student);
   }
}
