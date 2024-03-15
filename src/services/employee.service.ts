import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class employeeService {
  private apiUrl = 'http://localhost:8080/employees'
  constructor(private http: HttpClient) { }

  getAllemployee(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}`);
  }
  getEmployeeById(id: number): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/${id}`);
  }
  createEmployeeById(data: employee): Observable<employee[]> {
    return this.http.post<employee[]>(this.apiUrl, data);
  }
  updateEmployeeById(id: number, data: employee): Observable<employee[]> {
    return this.http.put<employee[]>(`${this.apiUrl}/${id}`, data);
  }
  DeleteEmployee(id: number): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/${id}`);
  }
}
