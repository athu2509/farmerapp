import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ScheduleService } from '../../core/services/schedule.service';
import { FarmerService } from '../../core/services/farmer.service';
import { FarmService } from '../../core/services/farm.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = null;
  dueToday: any[] = [];
  dueTomorrow: any[] = [];
  farmerCount = 0;
  farmCount = 0;
  scheduleCount = 0;
  today = new Date();
  farmers: any[] = [];

  // BOM
  selectedFarmerId = '';
  bomRows: { fertilizer: string; quantity: number; unit: string; unitPrice: number }[] = [];
  totalBill = 0;
  bomLoading = false;

  constructor(
    public auth: AuthService,
    private scheduleService: ScheduleService,
    private farmerService: FarmerService,
    private farmService: FarmService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();

    this.scheduleService.getDueToday().subscribe({
      next: (res: any) => {
        this.dueToday = res.data ?? [];
        this.cdr.detectChanges();
      }
    });

    this.scheduleService.getDueTomorrow().subscribe({
      next: (res: any) => {
        this.dueTomorrow = res.data ?? [];
        this.cdr.detectChanges();
      }
    });

    this.farmerService.getAll().subscribe({
      next: (res: any) => {
        this.farmerCount = res.data?.length ?? 0;
        this.farmers = res.data ?? [];
        this.cdr.detectChanges();
      }
    });

    this.farmService.getAll().subscribe({
      next: (res: any) => {
        this.farmCount = res.data?.length ?? 0;
        this.cdr.detectChanges();
      }
    });

    this.scheduleService.getAll().subscribe({
      next: (res: any) => {
        this.scheduleCount = res.data?.length ?? 0;
        this.cdr.detectChanges();
      }
    });
  }

  onFarmerSelect(farmerId: string): void {
    this.selectedFarmerId = farmerId;
    this.bomRows = [];
    this.totalBill = 0;
    if (!farmerId) return;

    this.bomLoading = true;

    this.farmService.getByFarmer(farmerId).subscribe({
      next: (res: any) => {
        const farms = res.data ?? [];
        if (farms.length === 0) {
          this.bomLoading = false;
          this.cdr.detectChanges();
          return;
        }

        const requests = farms.map((farm: any) =>
          this.scheduleService.getByFarm(farm.id)
        );

        forkJoin(requests).subscribe({
          next: (results: any) => {
            const fertMap: Record<string, { quantity: number; unit: string }> = {};

            for (const result of results as any[]) {
              for (const s of result.data ?? []) {
                if (!s.fertilizer) continue;
                const qty = this.convertQuantity(s.quantity, s.quantity_unit);
                const unit = s.quantity_unit === 'g' ? 'kg'
                           : s.quantity_unit === 'mL' ? 'L'
                           : s.quantity_unit;
                if (fertMap[s.fertilizer]) {
                  fertMap[s.fertilizer].quantity += qty;
                } else {
                  fertMap[s.fertilizer] = { quantity: qty, unit };
                }
              }
            }

            this.bomRows = Object.entries(fertMap).map(([fertilizer, data]) => ({
              fertilizer,
              quantity: Math.round(data.quantity * 100) / 100,
              unit: data.unit,
              unitPrice: 0
            }));

            this.bomLoading = false;
            this.cdr.detectChanges();
          },
          error: () => {
            this.bomLoading = false;
            this.cdr.detectChanges();
          }
        });
      },
      error: () => {
        this.bomLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  convertQuantity(quantity: number, unit: string): number {
    if (unit === 'g') return quantity / 1000;
    if (unit === 'mL') return quantity / 1000;
    return quantity;
  }

  recalculate(): void {
    this.totalBill = this.bomRows.reduce((sum, row) => {
      return sum + (row.quantity * (row.unitPrice || 0));
    }, 0);
  }

  generateBom(): void {
    this.recalculate();
    this.snackBar.open('BOM calculated', 'Close', { duration: 2000 });
  }
}