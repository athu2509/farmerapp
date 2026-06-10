import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'farmers',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/farmers/farmers.component').then(m => m.FarmersComponent)
  },
  {
    path: 'all-farms',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/all-farms/all-farms.component').then(m => m.AllFarmsComponent)
  },
  {
    path: 'all-schedules',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/all-schedules/all-schedules.component').then(m => m.AllSchedulesComponent)
  },
  {
    path: 'farmers/:farmerId/farms',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/farms/farms.component').then(m => m.FarmsComponent)
  },
  {
    path: 'farms/:farmId/schedules',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/schedules/schedules.component').then(m => m.SchedulesComponent)
  },
  {
    path: 'users',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'SUPER_USER'] },
    loadComponent: () =>
      import('./pages/users/users.component').then(m => m.UsersComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
