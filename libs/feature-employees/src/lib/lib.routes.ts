import { Route } from '@angular/router';
import { prepareEmployeeDetailsResolver } from './resolvers/employee-details.resolver';
import { FeatureEmployeeDetailsComponent } from './feature-employee-details/feature-employee-details.component';
import { FeatureEmployeesListComponent } from './feature-employees-list/feature-employees-list.component';
import { EmployeesStore } from './state/employees.store';
import { EmployeesApi } from './state/employees.api';
import { UsersApi } from '@nx-project-example/feature-users';
import { RoutingService } from '@nx-project-example/core-routing';

export const employeeDetailsRoutes: Route[] = [
  {
    path: '',
    resolve: {
      details: prepareEmployeeDetailsResolver,
    },
    component: FeatureEmployeeDetailsComponent,
    providers: [EmployeesStore, EmployeesApi, UsersApi, RoutingService],
  },
];

export const employeeListRoutes: Route[] = [
  {
    path: '',
    component: FeatureEmployeesListComponent,
    providers: [EmployeesStore, EmployeesApi, UsersApi, RoutingService],
  },
];
