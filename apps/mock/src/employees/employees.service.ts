import { Injectable } from '@nestjs/common';
import {
  EmployeeDetailsBody,
  EmployeeDetailsResponse,
  EmployeesResponse
} from '@nx-project-example/contracts';
import * as MOCKED_EMPLOYEES from './data/employees.json';
import { writeFile } from 'ng-packagr/lib/utils/fs';
import { join } from 'path';

const mockedEmployees = MOCKED_EMPLOYEES as EmployeesResponse;

@Injectable()
export class EmployeesService {
  findAll(): EmployeesResponse {
    return mockedEmployees;
  }

  findOne(id: string): EmployeeDetailsResponse | undefined {
    return Object.values(mockedEmployees).find(
      (employee) => employee.id === id
    );
  }

  async updateOne(
    id: string,
    body: Partial<EmployeeDetailsBody>
  ): Promise<EmployeeDetailsResponse | undefined> {
    const employees = Array.from(mockedEmployees);
    const employee = employees.find((employee) => employee.id === id);

    if (employee) {
      Object.entries(body).forEach(([key, value]) => {
        employee[key] = value;
      });

      await writeFile(
        join(process.cwd(), 'apps/mock/src/employees/data', 'employees.json'),
        JSON.stringify(employees, null, 2)
      );

      return employee;
    }

    return undefined;
  }
}
