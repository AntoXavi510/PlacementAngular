import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Student } from '../models/student-model';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  StudentForm:FormGroup;
  constructor(private studentService:StudentService,private router: Router,private route:ActivatedRoute,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.StudentForm=new FormGroup({
    userId:new FormControl(null,[Validators.required]),
    firstName:new FormControl(null,[Validators.required]),
    lastName:new FormControl(),
    branchName:new FormControl(null,[Validators.required]),
    graduationYear:new FormControl(null,[Validators.required]), 
    class10thMarks:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(100)]),
    class12thMarks:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(100)]),
    currentCgpa:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(10)]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
    })
  }
  onRegister():void{
    console.log(this.StudentForm)
    if(this.StudentForm.valid)
    {
     console.log(this.StudentForm.value)
     //send the obj to database
     this.studentService.addStudent(this.StudentForm.value).subscribe({
       next:(res)=>{
        this.router.navigate(['student/Login']);
           return true;
       },
       error:(err)=>{
         alert("Invalid Credentials")
       }
     })
    }
    setTimeout(()=>{  

      this.toastr.success(" Regirstration Successful.Please Login to continue");                        
      }, 1000);
  
  }
}
