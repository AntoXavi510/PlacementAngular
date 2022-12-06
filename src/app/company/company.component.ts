import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company-model';
import { CompanyService } from '../services/company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService:CompanyService) { }
  companies:Company[]=[];
    ngOnInit(): void {
        this.companyService. getAllCompanies().subscribe
        (
          response=>{this.companies=response}
        );
    }
      
  }

  


