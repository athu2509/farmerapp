import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ScheduleService } from '../../core/services/schedule.service';

@Component({
  selector: 'app-all-schedules',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './all-schedules.component.html'
})
export class AllSchedulesComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['task_name', 'fertilizer', 'quantity', 'due_date', 'status', 'actions'];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }
}
