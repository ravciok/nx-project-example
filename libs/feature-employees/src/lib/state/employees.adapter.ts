import { map, pipe } from 'rxjs';
import {
  EmployeeDetailsResponseContract,
  EmployeesResponseContract,
  Status,
} from '@nx-project-example/contracts';
import { EmployeeDetailsModel, EmployeeModel } from './employees.model';

export function employeesModelAdapter() {
  return pipe(
    map(
      (employees: EmployeesResponseContract) =>
        employees.map((employee) => ({
          ...employee,
          equipmentsName: employee.equipments
            .map((equipment) => equipment.name)
            .join(', '),
        })) as EmployeeModel[]
    )
  );
}

export function employeeDetailsModelAdapter() {
  return pipe(
    map(
      (employee: EmployeeDetailsResponseContract) =>
        ({
          ...employee,
          isOffboardAvailable: employee.status === Status.ACTIVE,
        } as EmployeeDetailsModel)
    )
  );
}
