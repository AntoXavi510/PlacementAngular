import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin-model';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  admin:Admin={
    userName:'',
    password:''
}
  ngOnInit(): void {

  }
onSubmit():void{
  console.log(this.admin);
  this.adminService.addAdmin(this.admin)
  .subscribe(
    response=>{
      alert("Admin has been added successfully");
    }
  );

}

}
