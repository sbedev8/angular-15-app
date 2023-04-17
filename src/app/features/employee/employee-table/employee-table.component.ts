import { Observable } from 'rxjs';
import { EmployeeService } from './../service/employee.service';
import {
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/core/models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[];
  @Input() employees: Employee[];

  dataSource: MatTableDataSource<Employee>;

  // @ViewChild('paginator') paginator: MatPaginator;
  // @ViewChild('sort') sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employees'] && changes['employees'].currentValue) {
      this.dataSource = new MatTableDataSource(this.employees);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
