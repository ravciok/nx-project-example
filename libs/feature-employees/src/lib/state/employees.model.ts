import { EmployeeDetailsResponseContract, EmployeesResponseContract } from '@nx-project-example/contracts';

export type EmployeeModel = EmployeesResponseContract[0] & {
  equipmentsName: string;
};

export type EmployeeDetailsModel = EmployeeDetailsResponseContract & {
  isOffboardAvailable: boolean
};
