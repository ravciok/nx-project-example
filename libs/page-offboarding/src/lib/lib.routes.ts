import { Route } from '@angular/router';
import { PageOffboardingComponent } from './page-offboarding/page-offboarding.component';
import { buildTabsBasedOnRoutingResolver } from '@nx-project-example/util-routing';

export const pageOffboardingRoutes: Route[] = [
  {
    path: '',
    component: PageOffboardingComponent,
    data: {
      title: 'Offboarding',
    },
    resolve: {
      tabs: buildTabsBasedOnRoutingResolver,
    },
    children: [
      {
        path: 'employees',
        data: {
          title: 'Employees',
        },
        loadChildren: () =>
          import('@nx-project-example/feature-employees').then(
            (c) => c.employeeListRoutes
          ),
      },
      {
        path: 'equipments',
        data: {
          title: 'Equipments',
        },
        loadComponent: () =>
          import('@nx-project-example/feature-equipments').then(
            (c) => c.FeatureEquipmentsComponent
          ),
      },
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
    ],
  },
  {
    path: 'employees/:id',
    loadChildren: () =>
      import('@nx-project-example/feature-employees').then(
        (c) => c.employeeDetailsRoutes
      ),
  },
];
