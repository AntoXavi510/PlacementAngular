import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin/add',
    component:AddAdminComponent
  },
  {
    path:'student/register',
    component:AddStudentComponent
  },
  {
    path:'student/Login',
    component:StudentLoginComponent
  },
  {
    path:'admin/Login',
    component:AdminLoginComponent
  },
  {
    path:'admin/Companies',
    component:CompanyComponent
  },
  {
    path:'admin/Companies/add',
    component:AddCompanyComponent
  },
  {
    path:'admin/Companies/:id',
    component:ViewCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
