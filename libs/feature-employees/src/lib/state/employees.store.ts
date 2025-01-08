import { inject, Injectable } from '@angular/core';
import { EmployeesApi } from './employees.api';
import { EmployeesState } from './employees.state';
import { catchError, Observable, take, tap } from 'rxjs';
import {
  employeeDetailsModelAdapter,
  employeesModelAdapter,
} from './employees.adapter';
import { EmployeesActions, EmployeesSelectors } from './employees.actions';
import { EmployeeDetailsState } from './employees-details.state';
import { EmployeeDetailsModel, EmployeeModel } from './employees.model';
import { UsersApi, UsersModel } from '@nx-project-example/feature-users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routes, RoutingService } from '@nx-project-example/core-routing';
import { AbstractStore } from '@nx-project-example/util-state';

@Injectable()
export class EmployeesStore extends AbstractStore {
  protected api = inject(EmployeesApi);
  protected state = inject(EmployeesState);
  private detailsState = inject(EmployeeDetailsState);
  private usersApi = inject(UsersApi);
  private routingService = inject(RoutingService);
  private snackbar = inject(MatSnackBar);

  dispatch(action: EmployeesActions.INIT_EMPLOYEES): void;
  dispatch(action: EmployeesActions.INIT_EMPLOYEE_DETAILS, id: string): void;
  dispatch(
    action: EmployeesActions.OFFBOARD_EMPLOYEE,
    id: string,
    data: UsersModel
  ): void;
  dispatch(action: EmployeesActions, id?: any, data?: any): void {
    switch (action) {
      case EmployeesActions.INIT_EMPLOYEES:
        this.initEmployees();
        break;
      case EmployeesActions.INIT_EMPLOYEE_DETAILS:
        this.initEmployeeDetails(id);
        break;
      case EmployeesActions.OFFBOARD_EMPLOYEE:
        this.offboardEmployee(id, data);
        break;
    }
  }

  select(
    selector: EmployeesSelectors.GET_EMPLOYEES
  ): Observable<EmployeeModel[]>;
  select(
    selector: EmployeesSelectors.GET_EMPLOYEE_DETAILS,
    id: string
  ): Observable<EmployeeDetailsModel>;
  select(selector: EmployeesSelectors, id?: any) {
    switch (selector) {
      case EmployeesSelectors.GET_EMPLOYEES:
        return this.state.getState();
      case EmployeesSelectors.GET_EMPLOYEE_DETAILS:
        return this.detailsState.getState(id);
    }
  }

  private initEmployees() {
    if (this.state.snapshot() === undefined) {
      this.api
        .getEmployees()
        .pipe(
          employeesModelAdapter(),
          tap((employees) => this.state.setState(employees)),
          take(1)
        )
        .subscribe();
    }
  }

  private initEmployeeDetails(id: string) {
    if (this.detailsState.snapshot(id) === undefined) {
      this.api
        .getEmployeeDetails(id)
        .pipe(
          catchError((error) => {
            this.snackbar.open(
              `Ooops! employee with id: "${id}" not found 😱`,
              undefined,
              { duration: 5000, verticalPosition: 'top' }
            );
            this.routingService.goTo(Routes.OFFBOARDING_EMPLOYEES);

            throw error.message;
          }),
          employeeDetailsModelAdapter(),
          tap((employee) => this.detailsState.setState(employee)),
          take(1)
        )
        .subscribe();
    }
  }

  private offboardEmployee(id: string, data: UsersModel) {
    const employeeName = this.detailsState.snapshot(id)?.name ?? '';

    this.usersApi
      .offboard(id, data)
      .pipe(
        take(1),
        tap(() => {
          this.snackbar.open(
            `Cheers! ${employeeName} offboarded successfully 😇`,
            undefined,
            { duration: 5000, verticalPosition: 'top' }
          );
          this.state.reset();
          this.detailsState.reset(id);
          this.routingService.goTo(Routes.OFFBOARDING_EMPLOYEES);
        })
      )
      .subscribe();
  }
}
