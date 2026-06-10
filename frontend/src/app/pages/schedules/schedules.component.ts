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
import { ScheduleService } from '../../core/services/schedule.service';
import { FarmService } from '../../core/services/farm.service';

@Component({
  selector: 'app-schedules',
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
  templateUrl: './schedules.component.html',
  styles: ['.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }']
})
export class SchedulesComponent implements OnInit {
  farmId = '';
  farmInfo: any = null;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['task_name', 'fertilizer', 'quantity', 'due_date', 'status', 'actions'];
  showForm = false;
  editingSchedule: any = null;
  form = new FormGroup({});
  model: any = {};
  loading = false;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        {
          key: 'task_name',
          type: 'input',
          props: { label: 'Task Name', required: true, appearance: 'outline' }
        },
        {
          key: 'fertilizer',
          type: 'input',
          props: { label: 'Fertilizer', required: true, appearance: 'outline' }
        },
        {
          key: 'quantity',
          type: 'input',
          props: { label: 'Quantity', required: true, type: 'number', appearance: 'outline' }
        },
        {
          key: 'quantity_unit',
          type: 'select',
          props: {
            label: 'Unit',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'kg', value: 'kg' },
              { label: 'g', value: 'g' },
              { label: 'L', value: 'L' },
              { label: 'mL', value: 'mL' }
            ]
          }
        },
        {
          key: 'days_after_sowing',
          type: 'input',
          props: { label: 'Days After Sowing', required: true, type: 'number', appearance: 'outline' }
        }
      ]
    }
  ];

  constructor(
    public auth: AuthService,
    private scheduleService: ScheduleService,
    private farmService: FarmService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.farmId = this.route.snapshot.paramMap.get('farmId') ?? '';

    this.farmService.getById(this.farmId).subscribe({
      next: (res: any) => this.farmInfo = res.data
    });

    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getByFarm(this.farmId).subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }

  openCreate(): void {
    this.editingSchedule = null;
    this.model = { quantity_unit: 'kg' };
    this.showForm = true;
  }

  openEdit(schedule: any): void {
    this.editingSchedule = schedule;
    this.model = { ...schedule };
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingSchedule = null;
    this.model = { quantity_unit: 'kg' };
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const data = this.editingSchedule
      ? this.model
      : { ...this.model, farm_id: this.farmId };

    const action = this.editingSchedule
      ? this.scheduleService.update(this.editingSchedule.id, data)
      : this.scheduleService.create(data);

    action.subscribe({
      next: () => {
        this.snackBar.open(
          this.editingSchedule ? 'Schedule updated' : 'Schedule created',
          'Close', { duration: 3000 }
        );
        this.closeForm();
        this.loadSchedules();
        this.loading = false;
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
        this.loading = false;
      }
    });
  }

  updateStatus(schedule: any, status: string): void {
    this.scheduleService.updateStatus(schedule.id, status).subscribe({
      next: () => {
        this.snackBar.open('Status updated', 'Close', { duration: 3000 });
        this.loadSchedules();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }

  delete(schedule: any): void {
    if (!confirm(`Delete schedule "${schedule.task_name}"?`)) return;

    this.scheduleService.delete(schedule.id).subscribe({
      next: () => {
        this.snackBar.open('Schedule deleted', 'Close', { duration: 3000 });
        this.loadSchedules();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }
}
