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
import { FarmService } from '../../core/services/farm.service';
import { FarmerService } from '../../core/services/farmer.service';
import { FarmDialogComponent } from './farm-dialog.component';

@Component({
  selector: 'app-farms',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatTableModule, MatButtonModule, MatIconModule,
    MatCardModule, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './farms.component.html',
  // styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  farmerId = '';
  farmerName = '';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['village', 'crop_name', 'area', 'sowing_date', 'actions'];

  constructor(
    public auth: AuthService,
    private farmService: FarmService,
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
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
      next: (res: any) => this.dataSource.data = res.data ?? []
    });
  }

  openCreate(): void {
    const ref = this.dialog.open(FarmDialogComponent, { width: '480px', data: { farm: null } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.farmService.create({ ...result, farmer_id: this.farmerId }).subscribe({
        next: () => { this.snackBar.open('Farm created', 'Close', { duration: 3000 }); this.loadFarms(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  openEdit(farm: any): void {
    const ref = this.dialog.open(FarmDialogComponent, { width: '480px', data: { farm } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.farmService.update(farm.id, result).subscribe({
        next: () => { this.snackBar.open('Farm updated', 'Close', { duration: 3000 }); this.loadFarms(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  delete(farm: any): void {
    if (!confirm(`Delete farm in "${farm.village}"?`)) return;
    this.farmService.delete(farm.id).subscribe({
      next: () => { this.snackBar.open('Farm deleted', 'Close', { duration: 3000 }); this.loadFarms(); },
      error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
    });
  }
}