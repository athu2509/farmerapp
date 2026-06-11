import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { UserDialogComponent } from './user-dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule, MatButtonModule, MatIconModule,
    MatCardModule, MatSelectModule, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'email', 'roles', 'actions'];
  roleOptions = [
    { value: 'USER', label: 'User' },
    { value: 'ADMIN', label: 'Admin' }
  ];

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void { this.loadUsers(); }

  loadUsers(): void {
    this.userService.getAll().subscribe({
      next: (res: any) => this.dataSource.data = res.data ?? []
    });
    
  }
  getPrimaryRole(roles: string[]): string {
  if (roles.includes('SUPER_USER')) {
    return 'SUPER_USER';
  }

  if (roles.includes('ADMIN')) {
    return 'ADMIN';
  }

  return 'USER';
}

  openCreate(): void {
    const ref = this.dialog.open(UserDialogComponent, { width: '480px', data: { user: null } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      this.userService.create({ ...result, roles: ['USER'] }).subscribe({
        next: () => { this.snackBar.open('User created', 'Close', { duration: 3000 }); this.loadUsers(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  openEdit(user: any): void {
    const ref = this.dialog.open(UserDialogComponent, { width: '480px', data: { user } });
    ref.afterClosed().subscribe(result => {
      if (!result) return;
      const data: any = { name: result.name, email: result.email };
      if (result.password) data.password = result.password;
      this.userService.update(user.id, data).subscribe({
        next: () => { this.snackBar.open('User updated', 'Close', { duration: 3000 }); this.loadUsers(); },
        error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
      });
    });
  }

  getUserRole(user: any): string {
    return user.roles.includes('ADMIN') ? 'ADMIN' : 'USER';
  }

  

  delete(user: any): void {
    if (!confirm(`Delete user "${user.name}"?`)) return;
    this.userService.delete(user.id).subscribe({
      next: () => { this.snackBar.open('User deleted', 'Close', { duration: 3000 }); this.loadUsers(); },
      error: (err: any) => this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 })
    });
  }

  isSuperUser(): boolean { return this.auth.isSuperUser(); }
  isAdmin(): boolean { return this.auth.isAdmin(); }
  canManageRole(user: any): boolean { return !user.roles.includes('SUPER_USER') && (this.isSuperUser() || this.isAdmin()); }
  canDeleteUser(user: any): boolean { return !user.roles.includes('SUPER_USER'); }

  toggleAdminAccess(user: any): void {
  let newRole = 'ADMIN';

  // Superuser can both grant and revoke
  if (this.isSuperUser()) {
    newRole = this.getUserRole(user) === 'ADMIN'
      ? 'USER'
      : 'ADMIN';
  }

  // Admins can only grant admin access
  if (this.isAdmin() && !this.isSuperUser()) {
    newRole = 'ADMIN';
  }

  this.userService.setRole(user.id, newRole).subscribe({
    next: () => {
      this.snackBar.open(
        newRole === 'ADMIN'
          ? 'Admin access granted'
          : 'Admin access revoked',
        'Close',
        { duration: 3000 }
      );
      this.loadUsers();
    },
    error: (err: any) => {
      this.snackBar.open(
        err.error?.message ?? 'Error',
        'Close',
        { duration: 4000 }
      );
    }
  });
  }

  showAdminButton(user: any): boolean {
  if (!this.canManageRole(user)) {
    return false;
  }

  // Superuser sees button for all non-superusers
  if (this.isSuperUser()) {
    return true;
  }

  // Admins only see button for USERs
  return this.isAdmin() && this.getUserRole(user) === 'USER';
}
}