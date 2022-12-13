import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company-model';
import { Student } from '../models/student-model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  students:Student[]=[];
    ngOnInit(): void {
        this.studentService. getAllStudents().subscribe
        (
          response=>{this.students=response}
        );
    }
}
