import { Injectable } from '@angular/core';
import { EmployeeDetailsModel } from './employees.model';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { AbstractState } from '@nx-project-example/util-state';

type state = Record<string, EmployeeDetailsModel | undefined>;
const initialState: state = {};

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsState extends AbstractState<
  state,
  EmployeeDetailsModel
> {
  protected _state = new BehaviorSubject(initialState);

  getState(id: string): Observable<EmployeeDetailsModel> {
    return this._state.asObservable().pipe(
      map((state) => state[id]),
      filter((state) => state !== undefined)
    );
  }

  setState(state: EmployeeDetailsModel) {
    return this._state.next({
      ...this._state.value,
      [state.id]: state,
    });
  }

  snapshot(id: string): EmployeeDetailsModel | undefined {
    return this._state.value[id];
  }

  reset(id: string): void {
    this._state.next({
      ...this._state.value,
      [id]: undefined,
    });
  }
}
