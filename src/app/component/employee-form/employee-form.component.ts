import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../services/employee.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form',
   standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  isEdit: boolean = false;
  employeeId?: number;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.employeeId) {
      this.isEdit = true;
      this.employeeService.getEmployee(this.employeeId).subscribe(employee => {
        this.form.patchValue(employee);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employeeId!, this.form.value).subscribe({
        next: () => {
          this.snackBar.open('Employee updated', 'Close', { duration: 2000 });
          this.router.navigate(['/']);
        },
        error: () => {
          this.snackBar.open('Update failed', 'Close', { duration: 2000 });
        }
      });
    } else {
      this.employeeService.addEmployee(this.form.value).subscribe({
        next: () => {
          this.snackBar.open('Employee added', 'Close', { duration: 2000 });
          this.router.navigate(['/']);
        },
        error: () => {
          this.snackBar.open('Add failed', 'Close', { duration: 2000 });
        }
      });
    }
  }
}