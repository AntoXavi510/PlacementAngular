import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../models/admin-model';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private adminService:AdminService,private router: Router,private route:ActivatedRoute,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    })
    
    }
    onSubmit():void{
      if(this.loginForm.valid)
     {
      console.log(this.loginForm.value)
      //send the obj to database
      this.adminService.adminLogin(this.loginForm.value).subscribe({
        next:(res)=>{
          this.router.navigate(['admin/Companies']);
            //alert("Login Successful");
            setTimeout(()=>{  

              this.toastr.success("Successful Login");                        
              }, 1000);
            return true;
        },
        error:(err)=>{
          alert("Invalid Credentials")
        }
      })
     } 
    
  
    }
    }
  

  
  
  // onSubmit():void{
  //   this.adminService.adminLogin(this.admin)
  //   .subscribe(
  // response=>{
  //       alert("Welcome admin");
  //     }
  //   );
  
  // }
// onSubmit():void{
// if(this.admin){
//   this.adminService.adminLogin(this.admin)
//   .subscribe(response=>{
//     console.log(this.admin);
//       alert("Welcome Admin");}
//       );
//     }
// }
  
  


