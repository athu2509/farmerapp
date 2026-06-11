import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { FarmerService } from '../../core/services/farmer.service';
import { FarmerDialogComponent } from './farmer-dialog.component';

@Component({
  selector: 'app-farmers',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatTableModule, MatButtonModule, MatIconModule,
    MatCardModule, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './farmers.component.html',
 
})
export class FarmersComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'phone_number', 'language', 'country', 'actions'];

  constructor(
    public auth: AuthService,
    private farmerService: FarmerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void { this.loadFarmers(); }

  loadFarmers(): void {
    this.farmerService.getAll().subscribe({
      next: (res: any) => this.dataSource.data = res.data ?? []
    });
  }

  openCreate(): void {
    const ref = this.dialog.open(FarmerDialogComponent, {
      width: '480px',
      data: { farmer: null }
    });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.farmerService.create(result).subscribe({
        next: () => { this.snackBar.open('Farmer created', 'Close', { duration: 3000 }); this.loadFarmers(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  openEdit(farmer: any): void {
    const ref = this.dialog.open(FarmerDialogComponent, {
      width: '480px',
      data: { farmer }
    });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.farmerService.update(farmer.id, result).subscribe({
        next: () => { this.snackBar.open('Farmer updated', 'Close', { duration: 3000 }); this.loadFarmers(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  delete(farmer: any): void {
    if (!confirm(`Delete farmer "${farmer.name}"?`)) return;
    this.farmerService.delete(farmer.id).subscribe({
      next: () => { this.snackBar.open('Farmer deleted', 'Close', { duration: 3000 }); this.loadFarmers(); },
      error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
    });
  }
}