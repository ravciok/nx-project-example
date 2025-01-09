import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from '@nx-project-example/ui-table';
import { toSignal } from '@angular/core/rxjs-interop';
import { employeesColumns } from './employees.columns';
import { EmployeesStore } from '../state/employees.store';
import { EmployeeModel } from '../state/employees.model';
import {
  EmployeesActions,
  EmployeesSelectors,
} from '../state/employees.actions';
import { EmployeesFacade } from '../services/employees.facade';

@Component({
  selector: 'lib-feature-employees-list',
  imports: [CommonModule, UiTableComponent],
  providers: [EmployeesFacade],
  templateUrl: './feature-employees-list.component.html',
  styleUrl: './feature-employees-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEmployeesListComponent {
  private store = inject(EmployeesStore);
  private employeesFacade = inject(EmployeesFacade);

  public employeesList = toSignal(
    this.store.select(EmployeesSelectors.GET_EMPLOYEES),
    { initialValue: [] }
  );
  public columns = employeesColumns;

  constructor() {
    this.store.dispatch(EmployeesActions.INIT_EMPLOYEES);
  }

  public handleRowAction(row: EmployeeModel) {
    this.employeesFacade.rowAction(row.id);
  }
}
