import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company-model';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl;
 
  getAllCompanies():Observable<Company[]>
  {
    return this.http.get<Company[]>(this.apiBaseUrl+'/api/Companies');
  }

  getCompanyById(id:any):Observable<Company> {
    //return this.http.get(this.apiBaseUrl + "/api/Companies/"+ id);
    return this.http.get<Company>(this.apiBaseUrl+'/api/Companies/'+id);
  }
  addCompany(company:any):Observable<Company>{
    return this.http.post<Company>(this.apiBaseUrl+'/api/Companies',company);
   }
   deleteCompany(id:any):Observable<Company>{
    return this.http.delete<Company>(this.apiBaseUrl+'/api/Companies/'+id);
   }
   updateCompany(id:any,company:any):Observable<Company>{
    return this.http.put<Company>(this.apiBaseUrl+'/api/Companies/'+id,company);
   }
}
