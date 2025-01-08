import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  UserOffboardActionBodyContract,
} from '@nx-project-example/contracts';

@Injectable()
export class UsersApi {
  private http = inject(HttpClient);

  offboard(id: string, body: UserOffboardActionBodyContract): Observable<void> {
    return this.http.post<void>(`/api/users/${id}/offboard`, body);
  }
}
