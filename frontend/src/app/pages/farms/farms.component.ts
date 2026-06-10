import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { FarmService } from '../../core/services/farm.service';
import { FarmerService } from '../../core/services/farmer.service';

@Component({
  selector: 'app-farms',
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
  templateUrl: './farms.component.html',
  styles: ['.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }']
})
export class FarmsComponent implements OnInit {
  farmerId = '';
  farmerName = '';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['village', 'crop_name', 'area', 'sowing_date', 'actions'];
  showForm = false;
  editingFarm: any = null;
  form = new FormGroup({});
  model: any = {};
  loading = false;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        {
          key: 'village',
          type: 'input',
          props: { label: 'Village', required: true, appearance: 'outline' }
        },
        {
          key: 'crop_name',
          type: 'input',
          props: { label: 'Crop Name', required: true, appearance: 'outline' }
        },
        {
          key: 'area',
          type: 'input',
          props: { label: 'Area', required: true, appearance: 'outline' }
        },
        {
          key: 'sowing_date',
          type: 'input',
          props: { label: 'Sowing Date', required: true, type: 'date', appearance: 'outline' }
        }
      ]
    }
  ];

  constructor(
    public auth: AuthService,
    private farmService: FarmService,
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.farmerId = this.route.snapshot.paramMap.get('farmerId') ?? '';

    this.farmerService.getById(this.farmerId).subscribe({
      next: (res: any) => this.farmerName = res.data?.name ?? ''
    });

    this.loadFarms();
  }

  loadFarms(): void {
    this.farmService.getByFarmer(this.farmerId).subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }

  openCreate(): void {
    this.editingFarm = null;
    this.model = {};
    this.showForm = true;
  }

  openEdit(farm: any): void {
    this.editingFarm = farm;
    this.model = { ...farm };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingFarm = null;
    this.model = {};
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const data = this.editingFarm
      ? this.model
      : { ...this.model, farmer_id: this.farmerId };

    const action = this.editingFarm
      ? this.farmService.update(this.editingFarm.id, data)
      : this.farmService.create(data);

    action.subscribe({
      next: () => {
        this.snackBar.open(
          this.editingFarm ? 'Farm updated' : 'Farm created',
          'Close', { duration: 3000 }
        );
        this.closeForm();
        this.loadFarms();
        this.loading = false;
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
        this.loading = false;
      }
    });
  }

  delete(farm: any): void {
    if (!confirm(`Delete farm in "${farm.village}"?`)) return;

    this.farmService.delete(farm.id).subscribe({
      next: () => {
        this.snackBar.open('Farm deleted', 'Close', { duration: 3000 });
        this.loadFarms();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }
}
