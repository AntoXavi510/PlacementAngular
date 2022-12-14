import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company-model';
import { CompanyService } from '../services/company.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  @ViewChild(ToastContainerDirective, {static: true}) toastContainer: ToastContainerDirective; 
  constructor(private router: Router,private route:ActivatedRoute,private companyService:CompanyService,private toastrService:ToastrService) { }
  
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
     }
     onSubmit():void{
      const company 
      : Company=
      { companyId:this.company?.companyId,
        companyName:this.company?.companyName,
      }
      setTimeout(() =>{

        this.companyService.updateCompany(this.company?.companyId,company).
  
        subscribe(
  
          response =>{
  
  
  
            setTimeout(()=>{
  
              this.toastrService.success("Successfully edited Company","Success");
  
            }, 1000)
  
  
  
          }
  
        );
  
      }, 3000)
  
        this.router.navigate(["admin/Companies"]);
  
    }
      // setTimeout(() =>{
      // this.companyService.updateCompany(this.company?.companyId,company).
      // subscribe(
      //   response=>{
      //     //alert('Successfully Updated');
      //     //this.toastrService.success("Successfully updated",'',);
      //     //this.router.navigate(['admin/Companies']);
      //     setTimeout(()=>{  

      //       this.toastrService.success("Successfully updated the company");                        
      //       }, 5000);

      //     console.log("toastr touched")

      //   }
  
      //   );
  
      // }, 3000)
  
      //   this.router.navigate(["admin/Companies"]);
  
    
    deleteCompany():void{
      this.companyService.deleteCompany(this.company?.companyId)
      .subscribe(
        response=>{
        
          this.router.navigate(['admin/Companies']);
          //alert('Deleted Successfully');
        }
      );
      setTimeout(()=>{  

        this.toastrService.warning("Successfully deleted the company");                        
        }, 5000);
    }
    
}
