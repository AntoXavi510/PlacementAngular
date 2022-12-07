import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path:'Home',
    component:HomeComponent
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
