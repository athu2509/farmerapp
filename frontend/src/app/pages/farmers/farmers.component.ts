import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { FarmerService } from '../../core/services/farmer.service';

@Component({
  selector: 'app-farmers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ],
  templateUrl: './farmers.component.html',
  styles: ['.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }']
})
export class FarmersComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'phone_number', 'language', 'country', 'actions'];
  showForm = false;
  editingFarmer: any = null;
  form = new FormGroup({});
  model: any = {};
  loading = false;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: { label: 'Name', required: true, appearance: 'outline' }
        },
        {
          key: 'phone_number',
          type: 'input',
          props: { label: 'Phone Number', required: true, appearance: 'outline', pattern: /^\d{10}$/ }
        },
        {
          key: 'language',
          type: 'input',
          props: { label: 'Language', required: true, appearance: 'outline' }
        },
        {
          key: 'country',
          type: 'input',
          props: { label: 'Country', required: true, appearance: 'outline' }
        }
      ]
    }
  ];

  constructor(
    public auth: AuthService,
    private farmerService: FarmerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadFarmers();
  }

  loadFarmers(): void {
    this.farmerService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }

  openCreate(): void {
    this.editingFarmer = null;
    this.model = {};
    this.showForm = true;
  }

  openEdit(farmer: any): void {
    this.editingFarmer = farmer;
    this.model = { ...farmer };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingFarmer = null;
    this.model = {};
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const action = this.editingFarmer
      ? this.farmerService.update(this.editingFarmer.id, this.model)
      : this.farmerService.create(this.model);

    action.subscribe({
      next: () => {
        this.snackBar.open(
          this.editingFarmer ? 'Farmer updated' : 'Farmer created',
          'Close', { duration: 3000 }
        );
        this.closeForm();
        this.loadFarmers();
        this.loading = false;
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
        this.loading = false;
      }
    });
  }

  delete(farmer: any): void {
    if (!confirm(`Delete farmer "${farmer.name}"?`)) return;

    this.farmerService.delete(farmer.id).subscribe({
      next: () => {
        this.snackBar.open('Farmer deleted', 'Close', { duration: 3000 });
        this.loadFarmers();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }
}
