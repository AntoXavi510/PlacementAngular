import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company-model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private companyService:CompanyService) { }
  company:Company={
    companyName:'',
}
  ngOnInit(): void {

  }
onSubmit():void{
  this.companyService.addCompany(this.company)
  .subscribe(
    response=>{
      alert("Company has been added successfully");
    }
  );

}
}
