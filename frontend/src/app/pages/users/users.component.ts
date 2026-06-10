import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatTableModule, MatButtonModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule
  ],
  templateUrl: './users.component.html',
  styles: ['.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }']
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'email', 'roles', 'actions'];
  showForm = false;
  editingUser: any = null;
  form: FormGroup;
  loading = false;
  roleOptions = [
    { value: 'USER', label: 'User' },
    { value: 'ADMIN', label: 'Admin' }
  ];

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data ?? [];
      }
    });
  }

  openCreate(): void {
    this.editingUser = null;
    this.form.reset();
    this.form.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.form.get('password')?.updateValueAndValidity();
    this.showForm = true;
  }

  openEdit(user: any): void {
    this.editingUser = user;
    this.form.patchValue({ name: user.name, email: user.email, password: '' });
    this.form.get('password')?.setValidators(Validators.minLength(6));
    this.form.get('password')?.updateValueAndValidity();
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingUser = null;
    this.form.reset();
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const raw = this.form.value;
    const data: any = { name: raw.name, email: raw.email };
    if (raw.password) data['password'] = raw.password;

    const action = this.editingUser
      ? this.userService.update(this.editingUser.id, data)
      : this.userService.create({ ...data, password: raw.password, roles: ['USER'] });

    action.subscribe({
      next: () => {
        this.snackBar.open(
          this.editingUser ? 'User updated' : 'User created',
          'Close', { duration: 3000 }
        );
        this.closeForm();
        this.loadUsers();
        this.loading = false;
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
        this.loading = false;
      }
    });
  }

  getUserRole(user: any): string {
    return user.roles.includes('ADMIN') ? 'ADMIN' : 'USER';
  }

  onRoleChange(user: any, role: string): void {
    if (this.getUserRole(user) === role) return;

    this.userService.setRole(user.id, role).subscribe({
      next: () => {
        this.snackBar.open('Role updated', 'Close', { duration: 3000 });
        this.loadUsers();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
        this.loadUsers();
      }
    });
  }

  makeAdmin(user: any): void {
    this.userService.setRole(user.id, 'ADMIN').subscribe({
      next: () => {
        this.snackBar.open('User promoted to admin', 'Close', { duration: 3000 });
        this.loadUsers();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }

  delete(user: any): void {
    if (!confirm(`Delete user "${user.name}"?`)) return;

    this.userService.delete(user.id).subscribe({
      next: () => {
        this.snackBar.open('User deleted', 'Close', { duration: 3000 });
        this.loadUsers();
      },
      error: (err: any) => {
        this.snackBar.open(err.error?.message ?? 'Error', 'Close', { duration: 4000 });
      }
    });
  }

  isSuperUser(): boolean {
    return this.auth.isSuperUser();
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  canManageRole(user: any): boolean {
    return !user.roles.includes('SUPER_USER') && (this.isSuperUser() || this.isAdmin());
  }

  canDeleteUser(user: any): boolean {
    return !user.roles.includes('SUPER_USER');
  }
}
