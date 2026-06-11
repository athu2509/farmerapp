import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-schedule-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title style="font-size:16px; font-weight:500; margin:0 0 4px">
      {{ data.schedule ? 'Edit schedule' : 'Add schedule' }}
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
        {{ data.schedule ? 'Update' : 'Add schedule' }}
      </button>
    </mat-dialog-actions>
  `
})
export class ScheduleDialogComponent {
  form = new FormGroup({});
  model: any = { quantity_unit: 'kg' };

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-grid',
      fieldGroup: [
        { key: 'task_name', type: 'input', props: { label: 'Task name', required: true, appearance: 'outline' } },
        { key: 'fertilizer', type: 'input', props: { label: 'Fertilizer', required: true, appearance: 'outline' } },
        { key: 'quantity', type: 'input', props: { label: 'Quantity', required: true, type: 'number', appearance: 'outline' } },
        {
          key: 'quantity_unit', type: 'select',
          props: {
            label: 'Unit', required: true, appearance: 'outline',
            options: [
              { label: 'kg', value: 'kg' }, { label: 'g', value: 'g' },
              { label: 'L', value: 'L' }, { label: 'mL', value: 'mL' }
            ]
          }
        },
        { key: 'days_after_sowing', type: 'input', props: { label: 'Days after sowing', required: true, type: 'number', appearance: 'outline' } }
      ]
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<ScheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { schedule: any }
  ) {
    if (data.schedule) this.model = { ...data.schedule };
  }

  submit() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.model);
  }

  cancel() { this.dialogRef.close(); }
}