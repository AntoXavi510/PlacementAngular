import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../models/company-model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private companyService:CompanyService,private router: Router,private route:ActivatedRoute,private toastrService:ToastrService) { }
  company:Company={
    companyName:'',
}
  ngOnInit(): void {

  }
onSubmit():void{
  this.companyService.addCompany(this.company)
  .subscribe(
    response=>{
      setTimeout(()=>{  

        this.toastrService.success("Company has been added successfully");                        
        }, 1000);
        this.router.navigate(['admin/Companies']);
    }
    
  );

}
}
