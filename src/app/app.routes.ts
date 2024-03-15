import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

export const routes: Routes = [
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'employees',component:EmployeeListComponent},
    {path:'employees/:id',component:EmployeeDetailsComponent},
    {path:'edit-employees',component:EditEmployeeComponent},
    {path:'', redirectTo:'/employees' , pathMatch:'full'},
];
