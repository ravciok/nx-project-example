import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EmployeeDetailsModel } from '../state/employees.model';
import { EmployeesStore } from '../state/employees.store';
import { EmployeesActions, EmployeesSelectors } from '../state/employees.actions';

export const prepareEmployeeDetailsResolver: ResolveFn<EmployeeDetailsModel> = (
  route: ActivatedRouteSnapshot
) => {
  const store = inject(EmployeesStore);
  const id: string = route.params['id'];

  store.dispatch(EmployeesActions.INIT_EMPLOYEE_DETAILS, id);

  return store.select(EmployeesSelectors.GET_EMPLOYEE_DETAILS, id);
};
