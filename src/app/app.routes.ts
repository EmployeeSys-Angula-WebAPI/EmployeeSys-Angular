import { Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent }
];
