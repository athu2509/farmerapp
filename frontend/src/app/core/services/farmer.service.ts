import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class FarmerService {
  private base = `${environment.apiUrl}/farmers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.base);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.base}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.base, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.base}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }

  getByCrop(cropName: string): Observable<any> {
    return this.http.get(`${this.base}/crop/${cropName}`);
  }

  getBill(farmerId: string, body: any): Observable<any> {
    return this.http.post(`${this.base}/${farmerId}/bill`, body);
  }

  getOverallBill(farmerId: string, body: any): Observable<any> {
    return this.http.post(`${this.base}/${farmerId}/overall-bill`, body);
  }
}
