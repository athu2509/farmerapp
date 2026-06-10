import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FarmService {
  constructor(private http: HttpClient) {}

  getByFarmer(farmerId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/farmers/${farmerId}/farms`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/farms`);
  }

  getById(farmId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/farms/${farmId}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/farms`, data);
  }

  update(farmId: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/farms/${farmId}`, data);
  }

  delete(farmId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/farms/${farmId}`);
  }
}
