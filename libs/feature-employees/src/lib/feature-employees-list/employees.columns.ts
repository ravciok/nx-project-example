import { ColumnsConfig } from '@nx-project-example/ui-table';

export const employeesColumns: ColumnsConfig = [
  {
    name: 'Full Name',
    property: 'name'
  },
  {
    name: 'Email',
    property: 'email'
  },
  {
    name: 'Department',
    property: 'department'
  },
  {
    name: 'Status',
    property: 'status'
  },
  {
    name: 'Equipments',
    property: 'equipmentsName'
  }
];
