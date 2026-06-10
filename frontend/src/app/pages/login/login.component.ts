import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styles: ['.login-fields { display: flex; flex-direction: column; gap: 8px; }']
})
export class LoginComponent {
  form = new FormGroup({});
  model: any = {};
  errorMessage = '';
  loading = false;

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'login-fields',
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          props: { label: 'Email', required: true, type: 'email', appearance: 'outline' }
        },
        {
          key: 'password',
          type: 'input',
          props: { label: 'Password', required: true, type: 'password', appearance: 'outline' }
        }
      ]
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.model.email, this.model.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? 'Invalid credentials';
        this.loading = false;
      }
    });
  }
}
