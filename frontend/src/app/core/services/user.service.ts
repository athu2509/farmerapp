import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/create`, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/update/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/delete/${id}`);
  }

  setRole(id: string, role: string): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/set-role/${id}`, { role });
  }
}
