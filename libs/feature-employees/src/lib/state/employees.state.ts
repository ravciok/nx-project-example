import { Injectable } from '@angular/core';
import { EmployeeModel } from './employees.model';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { AbstractState } from '@nx-project-example/util-state';

type state = EmployeeModel[] | undefined;
const initialState: state = undefined;

@Injectable({
  providedIn: 'root',
})
export class EmployeesState extends AbstractState<state, EmployeeModel[]> {
  protected _state = new BehaviorSubject(initialState);

  getState(): Observable<EmployeeModel[]> {
    return this._state
      .asObservable()
      .pipe(filter((state) => state !== undefined));
  }

  setState(state: EmployeeModel[]) {
    return this._state.next(state);
  }

  snapshot(): EmployeeModel[] | undefined {
    return this._state.value;
  }

  reset(): void {
    this._state.next(undefined);
  }
}
