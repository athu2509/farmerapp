import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { ScheduleService } from '../../core/services/schedule.service';
import { FarmService } from '../../core/services/farm.service';
import { ScheduleDialogComponent } from './schedule-dialog.component';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatTableModule, MatButtonModule, MatIconModule,
    MatCardModule, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './schedules.component.html',

})
export class SchedulesComponent implements OnInit {
  farmId = '';
  farmInfo: any = null;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['task_name', 'fertilizer', 'quantity', 'due_date', 'status', 'actions'];

  constructor(
    public auth: AuthService,
    private scheduleService: ScheduleService,
    private farmService: FarmService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
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
      next: (res: any) => this.dataSource.data = res.data ?? []
    });
  }

  openCreate(): void {
    const ref = this.dialog.open(ScheduleDialogComponent, { width: '480px', data: { schedule: null } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.scheduleService.create({ ...result, farm_id: this.farmId }).subscribe({
        next: () => { this.snackBar.open('Schedule created', 'Close', { duration: 3000 }); this.loadSchedules(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  openEdit(schedule: any): void {
    const ref = this.dialog.open(ScheduleDialogComponent, { width: '480px', data: { schedule } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.scheduleService.update(schedule.id, result).subscribe({
        next: () => { this.snackBar.open('Schedule updated', 'Close', { duration: 3000 }); this.loadSchedules(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  updateStatus(schedule: any, status: string): void {
    this.scheduleService.updateStatus(schedule.id, status).subscribe({
      next: () => { this.snackBar.open('Status updated', 'Close', { duration: 3000 }); this.loadSchedules(); },
      error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
    });
  }

  delete(schedule: any): void {
    if (!confirm(`Delete schedule "${schedule.task_name}"?`)) return;
    this.scheduleService.delete(schedule.id).subscribe({
      next: () => { this.snackBar.open('Schedule deleted', 'Close', { duration: 3000 }); this.loadSchedules(); },
      error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
    });
  }
}