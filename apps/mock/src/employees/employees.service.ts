import { Injectable } from '@nestjs/common';
import {
  EmployeeDetailsBodyContract,
  EmployeeDetailsResponseContract,
  EmployeesResponseContract,
} from '@nx-project-example/contracts';
import * as MOCKED_EMPLOYEES from './data/employees.json';
import { writeFile } from 'ng-packagr/lib/utils/fs';
import { join } from 'path';

const mockedEmployees = MOCKED_EMPLOYEES as EmployeesResponseContract;

@Injectable()
export class EmployeesService {
  findAll(): EmployeesResponseContract {
    return Array.from(mockedEmployees);
  }

  findOne(id: string): EmployeeDetailsResponseContract | undefined {
    return Array.from(mockedEmployees).find(
      (employee) => employee.id === id
    );
  }

  async updateOne(
    id: string,
    body: Partial<EmployeeDetailsBodyContract>
  ): Promise<EmployeeDetailsResponseContract | undefined> {
    const employees = Array.from(mockedEmployees);
    const employee = employees.find((employee) => employee.id === id);

    if (employee) {
      Object.entries(body).forEach(([key, value]) => {
        employee[key] = value;
      });

      await writeFile(
        join(process.cwd(), 'apps/mock/src/employees/data', 'employees.json'),
        JSON.stringify(employees satisfies EmployeesResponseContract, null, 2)
      );

      return employee;
    }

    return undefined;
  }
}
