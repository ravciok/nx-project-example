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

export type EmployeesResponseContract = {
  id: string;
  name: string;
  department: Department;
  status: Status;
  email: string;
  equipments: Equipment[];
}[];

export type EmployeeDetailsResponseContract = {
  id: string;
  name: string;
  department: Department;
  status: Status;
  email: string;
  equipments: Equipment[];
};

export type EmployeeDetailsBodyContract = Partial<{
  id: string;
  name: string;
  department: Department;
  status: Status;
  email: string;
  equipments: Equipment[];
}>;
