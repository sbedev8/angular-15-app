import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "./Employee";

export interface Section {
  name: string;
  employees: MatTableDataSource<Employee>;
}
