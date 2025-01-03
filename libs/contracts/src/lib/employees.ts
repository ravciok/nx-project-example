export const enum Department {
  ENGINEERING = 'Engineering',
  MARKETING = 'Marketing',
  SALES = 'Sales',
}

export const enum Status {
  OFFBOARDED = 'OFFBOARDED',
  ACTIVE = 'ACTIVE',
}

interface Equipment {
  id: string;
  name: string;
}

interface Employee {
  id: string;
  name: string;
  department: Department;
  status: Status;
  email: string;
  equipments: Equipment[];
}

export type EmployeesResponse = Employee[];

export type EmployeeDetailsResponse = Employee;

export type EmployeeDetailsBody = Partial<Employee>;
