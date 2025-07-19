import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

import { ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  displayedColumns: string[] = [' firstName', 'lastName', 'email', 'position', 'actions'];

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.filteredEmployees = data;
        this.updateDataSource();
      },
      error: () => {
        this.snackBar.open('Failed to load employees', 'Close', { duration: 2000 });
      }
    });
  }

  searchEmployees(): void {
    this.filteredEmployees = this.employees.filter(employee =>
       `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
    this.updateDataSource();
  }

  updateDataSource(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const paginated = this.filteredEmployees.slice(startIndex, startIndex + this.itemsPerPage);
    this.dataSource.data = paginated;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDataSource();
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.snackBar.open('Employee deleted', 'Close', { duration: 2000 });
          this.fetchEmployees();
        },
        error: () => {
          this.snackBar.open('Delete failed', 'Close', { duration: 2000 });
        }
      });
    }
  }

  editEmployee(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  addEmployee(): void {
    this.router.navigate(['/add']);
  }
}
