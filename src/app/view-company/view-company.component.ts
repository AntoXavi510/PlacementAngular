import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company-model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute,private companyService:CompanyService) { }
  
  company!:Company;
  ;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{const id=params.get('id');
      
        if(id){
          this.companyService.getCompanyById(id).subscribe(response=>{this.company=response;})
      }
    
    }
    
    )
    // this.route.paramMap.subscribe(
    //   params=>{const id=params.get('companyId');
      
    //     if(id){
    //       this.companyService.getCompanyById(id).subscribe(response=>{this.company=response;})
         
    //   }
    // }
    
    // )
    // this.id = this.route.snapshot.params['companyId'];
        
    // this.companyService.getCompanyById(this.id).subscribe((data: Company)=>{
    //   this.company = data;
    // });
     }
     onSubmit():void{
      const company 
      : Company=
      { companyId:this.company?.companyId,
        companyName:this.company?.companyName,
      }
      this.companyService.updateCompany(this.company?.companyId,company).
      subscribe(
        response=>{
          alert('Successfully Updated');
        }
        );
    }
    deleteCompany():void{
      this.companyService.deleteCompany(this.company?.companyId)
      .subscribe(
        response=>{
          
          this.router.navigate(['admin/Companies']);
          alert('Deleted Successfully');
        }
      );
    }
    
}
