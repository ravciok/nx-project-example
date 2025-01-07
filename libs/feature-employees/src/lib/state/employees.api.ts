import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EmployeeDetailsResponseContract,
  EmployeesResponseContract,
} from '@nx-project-example/contracts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApi {
  private http = inject(HttpClient);

  getEmployees(): Observable<EmployeesResponseContract> {
    return this.http.get<EmployeesResponseContract>('/api/employees');
  }

  getEmployeeDetails(id: string): Observable<EmployeeDetailsResponseContract> {
    return this.http.get<EmployeeDetailsResponseContract>(`/api/employees/${id}`);
  }
}
