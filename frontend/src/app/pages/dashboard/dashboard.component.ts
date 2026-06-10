import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
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
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    FormlyModule
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
  bomForm = new FormGroup({});
  bomModel: any = { farmer_id: '' };
  bomFields: FormlyFieldConfig[] = [];
  bomItems: any[] = [];
  totalBill = 0;
  bomLoading = false;
  farmers: any[] = [];

  constructor(
    public auth: AuthService,
    private scheduleService: ScheduleService,
    private farmerService: FarmerService,
    private farmService: FarmService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef  // ✅ added
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();

    this.scheduleService.getDueToday().subscribe({
      next: (res: any) => {
        this.dueToday = res.data ?? [];
        this.cdr.detectChanges();  // ✅
      }
    });

    this.scheduleService.getDueTomorrow().subscribe({
      next: (res: any) => {
        this.dueTomorrow = res.data ?? [];
        this.cdr.detectChanges();  // ✅
      }
    });

    this.farmerService.getAll().subscribe({
      next: (res: any) => {
        this.farmerCount = res.data?.length ?? 0;
        this.farmers = res.data ?? [];
        this.setupBomFields();
        this.cdr.detectChanges();  // ✅
      }
    });

    this.farmService.getAll().subscribe({
      next: (res: any) => {
        this.farmCount = res.data?.length ?? 0;
        this.cdr.detectChanges();  // ✅
      }
    });

    this.scheduleService.getAll().subscribe({
      next: (res: any) => {
        this.scheduleCount = res.data?.length ?? 0;
        this.cdr.detectChanges();  // ✅
      }
    });
  }

  // ... rest of your methods remain unchanged
  setupBomFields(): void {
    this.bomFields = [
      {
        key: 'farmer_id',
        type: 'select',
        props: {
          label: 'Farmer',
          required: true,
          options: this.farmers.map(f => ({ value: f.id, label: f.name })),
          change: () => this.onFarmerChange()
        }
      }
    ];
  }

  onFarmerChange(): void {
    const farmerId = this.bomModel.farmer_id;
    if (!farmerId) return;

    this.farmService.getByFarmer(farmerId).subscribe({
      next: (res: any) => {
        const farms = res.data ?? [];
        if (farms.length === 0) {
          this.updatePriceFields([]);
          return;
        }

        const requests = farms.map((farm: any) =>
          this.scheduleService.getByFarm(farm.id)
        );

        forkJoin(requests).subscribe({
          next: (results: any) => {
            const resultList = results as any[];
            const fertilizers = new Set<string>();
            for (const result of resultList) {
              for (const schedule of result.data ?? []) {
                if (schedule.fertilizer) {
                  fertilizers.add(schedule.fertilizer);
                }
              }
            }
            this.updatePriceFields([...fertilizers]);
          }
        });
      }
    });
  }

  updatePriceFields(fertilizers: string[]): void {
    const priceFields: FormlyFieldConfig[] = fertilizers.map(name => ({
      key: `price_${name}`,
      type: 'input',
      props: {
        label: `${name} Unit Price`,
        type: 'number',
        required: true,
        min: 0
      }
    }));

    this.bomFields = [
      {
        key: 'farmer_id',
        type: 'select',
        props: {
          label: 'Farmer',
          required: true,
          options: this.farmers.map(f => ({ value: f.id, label: f.name })),
          change: () => this.onFarmerChange()
        }
      },
      ...priceFields
    ];
  }

  generateBom(): void {
    if (!this.bomModel.farmer_id) {
      this.snackBar.open('Select a farmer', 'Close', { duration: 3000 });
      return;
    }

    const fertilizerPrices: Record<string, number> = {};
    for (const key of Object.keys(this.bomModel)) {
      if (key.startsWith('price_') && this.bomModel[key] != null && this.bomModel[key] !== '') {
        const name = key.replace('price_', '');
        fertilizerPrices[name] = Number(this.bomModel[key]);
      }
    }

    if (Object.keys(fertilizerPrices).length === 0) {
      this.snackBar.open('Enter fertilizer prices', 'Close', { duration: 3000 });
      return;
    }

    this.bomLoading = true;

    this.farmerService.getOverallBill(this.bomModel.farmer_id, {
      fertilizer_prices: fertilizerPrices
    }).subscribe({
      next: (res: any) => {
        this.bomItems = res.data?.bill_items ?? [];
        this.totalBill = res.data?.total_bill ?? 0;
        this.bomLoading = false;
        this.cdr.detectChanges();  // ✅
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error generating BOM', 'Close', { duration: 4000 });
        this.bomLoading = false;
      }
    });
  }
}