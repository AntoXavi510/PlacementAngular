import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { last } from 'rxjs';
import { Student } from '../models/student-model';
import { StudentService } from '../services/student.service';



@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute,private studentService:StudentService) { }
  
  student!:Student;
  ;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{const id=params.get('id');
      
        if(id){
          this.studentService.getStudentById(id).subscribe(response=>{this.student=response;})
      }
    
    }
    
    )
     }
     onSubmit():void{
      const student
      : Student=
      { userId:this.student?.userId,
        firstName:this.student?.firstName,
        lastName:this.student?.lastName,
        fatherName:this.student?.fatherName,
        branchName:this.student?.branchName,
        graduationYear:this.student?.graduationYear,
        password:this.student?.password,
        currentCgpa:this.student?.currentCgpa,
        class10thMarks:this.student?.class10thMarks,
        class12thMarks:this.student?.class12thMarks
      }
      this.studentService.updateStudent(this.student?.userId,student).
      subscribe(
        response=>{
          this.router.navigate(["admin/students"])
          alert('Successfully Updated the student');
        }
        );
    }
    deleteCompany():void{
      this.studentService.deleteStudent(this.student?.userId)
      .subscribe(
        response=>{
          
          this.router.navigate(['admin/students']);
          alert('Deleted Successfully');
        }
      );
    }

}
