import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-farm-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, MatDialogModule, MatButtonModule],
//   styleUrls: ['./farms.component.css'],
  template: `
    <h2 mat-dialog-title style="font-size:16px; font-weight:500; margin:0 0 4px">
      {{ data.farm ? 'Edit farm' : 'Add farm' }}
    </h2>
    <p style="font-size:12px; color:#888; margin:0 0 8px">Fill in the details below</p>
    <mat-dialog-content style="padding-top:8px">
      <form [formGroup]="form">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="gap:8px; padding:12px 0 0">
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="form.invalid">
        {{ data.farm ? 'Update' : 'Add farm' }}
      </button>
    </mat-dialog-actions>
  `
})
export class FarmDialogComponent {
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        { key: 'village', type: 'input', props: { label: 'Village', required: true, appearance: 'outline' } },
        { key: 'crop_name', type: 'input', props: { label: 'Crop name', required: true, appearance: 'outline' } },
        { key: 'area', type: 'input', props: { label: 'Area', required: true, appearance: 'outline' } },
        { key: 'sowing_date', type: 'input', props: { label: 'Sowing date', required: true, type: 'date', appearance: 'outline' } }
      ]
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<FarmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { farm: any }
  ) {
    if (data.farm) this.model = { ...data.farm };
  }

  submit() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.model);
  }

  cancel() { this.dialogRef.close(); }
}