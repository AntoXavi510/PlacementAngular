import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl;
  addAdmin(admin:any):Observable<Admin>{
    return this.http.post<Admin>(this.apiBaseUrl+'/api/Admins',admin);
   }
   adminLogin(admin:any):Observable<Admin>{
    return this.http.post<Admin>(this.apiBaseUrl+'/api/Admins/Login',admin);
   }
   
}
