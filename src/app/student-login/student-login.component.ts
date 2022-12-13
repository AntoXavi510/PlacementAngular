import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private studentService:StudentService,private router: Router,private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userId: new FormControl(),
      password: new FormControl()
    })
  }
  onSubmit():void{
    if(this.loginForm.valid)
   {
    console.log(this.loginForm.value)
    //send the obj to database
    this.studentService.studentLogin(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
       // this.router.navigate(['admin/students/'],res.student.userId);
        //this.router.navigate(['admin/students/'],this.loginForm.value.userId);
        this.router.navigate(["admin/students/", res.student.userId]); 
        
        alert("Login Successful");
          return true;
      },
      error:(err)=>{
      
        alert("Invalid Credentials")
      }
    })
   }
  }  

}
