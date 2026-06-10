import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FarmService } from '../../core/services/farm.service';
import { FarmerService } from '../../core/services/farmer.service';

@Component({
  selector: 'app-all-farms',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './all-farms.component.html'
})
export class AllFarmsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['farmer', 'village', 'crop_name', 'area', 'sowing_date', 'actions'];
  farmerNames: Record<string, string> = {};

  constructor(
    private farmService: FarmService,
    private farmerService: FarmerService
  ) {}

  ngOnInit(): void {
    this.farmerService.getAll().subscribe({
      next: (res: any) => {
        for (const farmer of res.data ?? []) {
          this.farmerNames[farmer.id] = farmer.name;
        }
        this.loadFarms();
      }
    });
  }

  loadFarms(): void {
    this.farmService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }

  farmerName(farmerId: string): string {
    return this.farmerNames[farmerId] ?? farmerId;
  }
}
