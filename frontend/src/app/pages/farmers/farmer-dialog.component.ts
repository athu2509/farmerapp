import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-farmer-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title style="font-size:16px; font-weight:500; margin:0 0 4px">
      {{ data.farmer ? 'Edit farmer' : 'Add farmer' }}
    </h2>
    <p style="font-size:12px; color:#888; margin:0 0 8px">Fill in the details below</p>

    <mat-dialog-content style="padding-top: 8px">
      <form [formGroup]="form">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" style="gap: 8px; padding: 12px 0 0">
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="form.invalid || loading">
        {{ loading ? 'Saving...' : (data.farmer ? 'Update' : 'Create farmer') }}
      </button>
    </mat-dialog-actions>
  `
})
export class FarmerDialogComponent {
  form = new FormGroup({});
  model: any = {};
  loading = false;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        { key: 'name', type: 'input', props: { label: 'Name', required: true, appearance: 'outline' } },
        { key: 'phone_number', type: 'input', props: { label: 'Phone number', required: true, appearance: 'outline' } },
        { key: 'language', type: 'input', props: { label: 'Language', required: true, appearance: 'outline' } },
        { key: 'country', type: 'input', props: { label: 'Country', required: true, appearance: 'outline' } }
      ]
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<FarmerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { farmer: any }
  ) {
    if (data.farmer) {
      this.model = { ...data.farmer };
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.model);
  }

  cancel() {
    this.dialogRef.close();
  }
}