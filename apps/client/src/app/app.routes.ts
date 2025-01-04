import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'onboarding',
    loadChildren: () =>
      import('@nx-project-example/page-onboarding').then(
        (c) => c.pageOnboardingRoutes
      ),
  },
  {
    path: 'offboarding',
    loadChildren: () =>
      import('@nx-project-example/page-offboarding').then(
        (c) => c.pageOffboardingRoutes
      ),
  },
  { path: '', redirectTo: '/offboarding', pathMatch: 'full' },
  { path: '**', redirectTo: '/offboarding' },
];
