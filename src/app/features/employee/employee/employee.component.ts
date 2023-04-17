import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from 'src/app/core/models/Employee';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  loading = true;
  errorMessage: string | null = null;

  employees: Employee[];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (error) => {
        this.loading = false
        console.error(error);
        this.errorMessage = `Une erreur s'est produite lors de la récupération des employés. Veuillez réessayer \n ${error.message}`;
      },
      complete: () => (this.loading = false),
    });
  }

}
