import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],

  template: `
    <h2 mat-dialog-title style="font-size:16px; font-weight:500; margin:0 0 4px">
      {{ data.user ? 'Edit user' : 'Add user' }}
    </h2>
    <p style="font-size:12px; color:#888; margin:0 0 8px">Fill in the details below</p>
    <mat-dialog-content style="padding-top:8px">
      <form [formGroup]="form">
        <div class="form-grid">
          <mat-form-field appearance="outline">
            <mat-label>Name</mat-label>
            <input matInput formControlName="name" />
            <mat-error *ngIf="form.get('name')?.hasError('required')">Required</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" type="email" />
            <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" style="grid-column: span 2">
            <mat-label>{{ data.user ? 'New password (leave blank to keep)' : 'Password' }}</mat-label>
            <input matInput formControlName="password" type="password" />
            <mat-error *ngIf="form.get('password')?.hasError('required')">Required</mat-error>
            <mat-error *ngIf="form.get('password')?.hasError('minlength')">Minimum 6 characters</mat-error>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="gap:8px; padding:12px 0 0">
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="form.invalid">
        {{ data.user ? 'Update' : 'Add user' }}
      </button>
    </mat-dialog-actions>
  `
})
export class UserDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [data.user?.name ?? '', Validators.required],
      email: [data.user?.email ?? '', [Validators.required, Validators.email]],
      password: ['', data.user ? Validators.minLength(6) : [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.value);
  }

  cancel() { this.dialogRef.close(); }
}