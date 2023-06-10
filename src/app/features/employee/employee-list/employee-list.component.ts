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
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from '../service/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements AfterViewInit {
  @Input() employees: Employee[];

  displayedColumns: string[] = [
    'tiers',
    'id',
    'firstName',
    'lastName',
    'email',
  ]; // Mettez à jour cette liste avec vos noms de colonnes

  @ViewChildren('idCell') idCells: QueryList<ElementRef>;
  @ViewChildren('firstCell') firstCells: QueryList<ElementRef>;
  @ViewChildren('lastCell') lastCells: QueryList<ElementRef>;
  @ViewChildren('emailCell') emailCells: QueryList<ElementRef>;

  idCellWidth: any;
  firstCellWidth: any;
  lastCellWidth: any;
  emailCellWidth: any;

  ngAfterViewInit() {

    setTimeout(() => {
      this.idCellWidth = this.idCells.reduce((maxWidth, cell) => {
        return Math.max(maxWidth, cell.nativeElement.offsetWidth);
      }, 0);
      this.firstCellWidth = this.firstCells.reduce((maxWidth, cell) => {
        return Math.max(maxWidth, cell.nativeElement.offsetWidth);
      }, 0);
      this.lastCellWidth = this.lastCells.reduce((maxWidth, cell) => {
        return Math.max(maxWidth, cell.nativeElement.offsetWidth);
      }, 0);
      this.emailCellWidth = this.emailCells.reduce((maxWidth, cell) => {
        return Math.max(maxWidth, cell.nativeElement.offsetWidth);
      }, 0);
    });

    // setTimeout(() => {
    //   this.idCellWidth = this.idCells.reduce((maxWidth, cell) => {
    //     return Math.max(maxWidth, cell.nativeElement.offsetWidth);
    //   }, 0);
    // }, 100);
    // setTimeout(() => {
    //   this.firstCellWidth = this.firstCells.reduce((maxWidth, cell) => {
    //     return Math.max(maxWidth, cell.nativeElement.offsetWidth);
    //   }, 0);
    // }, 200);
    // setTimeout(() => {
    //   this.lastCellWidth = this.lastCells.reduce((maxWidth, cell) => {
    //     Math.max(maxWidth, cell.nativeElement.offsetWidth);
    //     return Math.max(maxWidth, cell.nativeElement.offsetWidth);
    //   }, 0);
    // }, 300);
    // setTimeout(() => {
    //   this.emailCellWidth = this.emailCells.reduce((maxWidth, cell) => {
    //     return Math.max(maxWidth, cell.nativeElement.offsetWidth);
    //   }, 0);
    // }, 400);
  }

  calculMaxWidth() {
    setTimeout(() => {
      this.lastCells.forEach((element) => {
        if (element.nativeElement.offsetWidth > this.lastCellWidth) {
          this.lastCellWidth = element.nativeElement.offsetWidth;
        }
      });
    }, 500);
    console.log(this.lastCellWidth);
  }

  groups = [
    {
      name: 'Employee principale',
      data: [
        {
          id: 2,
          firstName: 'Jane jsmith@example.com',
          lastName: 'Smith',
          email: 'jsmith@example.com',
        },
        {
          id: 3,
          firstName: 'Bob',
          lastName: 'Johnson',
          email: 'bjohnson@example.com',
        },
      ],
    },
    {
      name: 'Employee',
      data: [
        {
          id: 4,
          firstName: 'Alice',
          lastName: 'Brown jsmith@example.com jsmith@example.com',
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
      ],
    },
    // Ajoutez autant de groupes que nécessaire
  ];
}
