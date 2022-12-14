import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule,ToastContainerModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentsComponent } from './students/students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ViewCompanyComponent,
    AddCompanyComponent,
    HomeComponent,
    AddAdminComponent,
    AdminLoginComponent,
    AddStudentComponent,
    StudentLoginComponent,
    StudentsComponent,
    ViewStudentsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
