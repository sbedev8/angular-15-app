import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', component: EmployeeListComponent },
      // { path: '', component: EmployeeTableComponent },

    ]
  },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTableComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
