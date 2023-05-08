import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/core/models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, OnChanges, OnChanges {

  @Input() displayedColumns: string[];
  @Input() employees: Employee[];

  // tables : any;

  // ngAfterViewInit(): void {
  //   this.tables = this.el.nativeElement.querySelectorAll('table');
  //   this.alignColumns();

  //   this.paginator.page.subscribe(() => {
  //     this.alignColumns();
  //   });

  // //  console.log(tables[0].querySelectorAll('th'))

  // }


  // alignColumns(): void {
  //   if (this.tables && this.tables.length === 2) {
  //     setTimeout(() => {

  //       const headerTable = this.tables.item(0);
  //       const bodyTable = this.tables.item(1);

  //       const headerCells = headerTable.querySelectorAll('th');
  //       const bodyRows = bodyTable.querySelectorAll('tr');

  //       console.log(bodyRows)

  //       bodyRows.forEach((bcell, index) => {

  //           const width = bcell.getBoundingClientRect().width;

  //             headerCells[index].style.width = `${width}px`;

  //         });

  //     }, 0 );
  //   }
  // }

  constructor(private el: ElementRef<HTMLElement>,){

  }


  selectedRow: any;
  hoveredRow: any;

  dataSource: MatTableDataSource<Employee>;

  // @ViewChild('paginator') paginator: MatPaginator;
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
