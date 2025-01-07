import { Route } from '@angular/router';
import { prepareEmployeeDetailsResolver } from './resolvers/employee-details.resolver';
import { FeatureEmployeeDetailsComponent } from './feature-employee-details/feature-employee-details.component';

export const employeeDetailsRoutes: Route[] = [
  {
    path: '',
    resolve: {
      details: prepareEmployeeDetailsResolver,
    },
    component: FeatureEmployeeDetailsComponent,
  },
];
