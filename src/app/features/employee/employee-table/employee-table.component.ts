import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { Section } from 'src/app/core/models/section.model';
import { Employee } from './../../../core/models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns: string[];
  @Input() employees: Employee[];

  employeesSales2 = "assets/data.json"

  employeesSales = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jsmith@example.com',
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bjohnson@example.com',
    },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jsmith@example.com',
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bjohnson@example.com',
    },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jsmith@example.com',
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bjohnson@example.com',
    },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.com' },
  ];

  employeesMarketing = [
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Brown',
      email: 'abrown@example.com',
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Davis',
      email: 'cdavis@example.com',
    },
    {
      id: 6,
      firstName: 'Eve',
      lastName: 'Miller',
      email: 'emiller@example.com',
    },
  ];

  employeesDevelopment = [
    {
      id: 7,
      firstName: 'Frank',
      lastName: 'Wilson',
      email: 'fwilson@example.com',
    },
    {
      id: 8,
      firstName: 'Grace',
      lastName: 'Taylor',
      email: 'gtaylor@example.com',
    },
    { id: 9, firstName: 'zzz', lastName: 'Moore', email: 'hmoore@example.com' },
  ];

  employeesPrincipal = [
    {
      id: 7,
      firstName: 'Frank Wilson fwilson@example.com',
      lastName: 'Wilson',
      email: 'fwilson@example.com',
    },
    {
      id: 8,
      firstName: 'Grace',
      lastName: 'Taylor',
      email: 'gtaylor@example.com',
    },
    { id: 9, firstName: 'zzz', lastName: 'Moore', email: 'hmoore@example.com' },
  ];

  sections: Section[] = [
    {
      name: 'Sales',
      employees: new MatTableDataSource<Employee>(this.employeesSales),
    },
    {
      name: 'Marketing',
      employees: new MatTableDataSource<Employee>(this.employeesMarketing),
    },
    {
      name: 'Development',
      employees: new MatTableDataSource<Employee>(this.employeesDevelopment),
    },
  ];

  constructor(private el: ElementRef<HTMLElement>) {
    let sec: Section = {
      name: 'Employee principale',
      employees: new MatTableDataSource<Employee>(this.employeesPrincipal),
    };

    this.sections.unshift(sec);

    console.log(this.employeesSales2);
  }

  selectedRow: MatRow;

  dataSource: MatTableDataSource<Employee>;

  // @ViewChild('paginator') paginator: MatPaginator;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.employees);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.paginator.toArray().forEach((paginator, index) => {
      this.sections[index].employees.paginator = paginator;
    });
    this.sections.forEach((section) => {
      section.employees.sort = this.sort;

      setTimeout(() => {
        this.sort.active = 'lastName';
        this.sort.direction = 'desc';
        section.employees.sort.sortChange.emit({
          active: this.sort.active,
          direction: this.sort.direction,
        });
      }, 500);

    });

  }

  applyFilter_(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  applyFilter(filterValue: string) {
    this.sections.forEach((section) => {
      section.employees.filter = filterValue.trim().toLowerCase();
    });
  }

  onRowSelected(row: any) {
    this.selectedRow = row;
  }

  /* ## RUN

  onRowClicked(row: any){
    this.selectedRow = row;
  }

  onMouseEnter(row: any) {
    this.hoveredRow = row;
  }

  onMouseLeave() {
    this.hoveredRow = null;
  }

*/

  // (mouseenter)="onMouseEnter($event.target)"
  // onMouseEnter(row: any) {
  //   row.classList.add('rowhover');
  // }

  // onMouseLeave(el: any){
  //   el.classList.remove('rowhover');
  //   this.hoveredRow = null;
  // }
}
