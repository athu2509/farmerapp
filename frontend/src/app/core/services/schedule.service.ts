import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getByFarm(farmId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/farms/${farmId}/schedules`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/schedules`);
  }

  getById(scheduleId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/schedules/${scheduleId}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/schedules`, data);
  }

  update(scheduleId: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/schedules/${scheduleId}`, data);
  }

  updateStatus(scheduleId: string, status: string): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/schedules/${scheduleId}/status`, { status });
  }

  delete(scheduleId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/schedules/${scheduleId}`);
  }

  getDueToday(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/schedules/due-today`);
  }

  getDueTomorrow(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/schedules/due-tomorrow`);
  }
}
