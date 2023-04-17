import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from '../service/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent  {

  @Input() employees: Employee[];


}
