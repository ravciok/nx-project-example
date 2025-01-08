import { inject, Injectable } from '@angular/core';
import { Routes } from './routes';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {
  private router = inject(Router);

  goTo(routes: Routes.OFFBOARDING_EMPLOYEES): void;
  goTo(routes: Routes.OFFBOARDING_EQUIPMENTS): void;
  goTo(routes: Routes.ONBOARDING): void;
  goTo(routes: Routes.OFFBOARDING_EMPLOYEES_DETAILS, id: string): void;
  goTo(routes: Routes, id?: any): void {
    switch (routes) {
      case Routes.OFFBOARDING_EMPLOYEES:
        this.router.navigateByUrl(`/offboarding/employees`);
        break;
      case Routes.OFFBOARDING_EQUIPMENTS:
        this.router.navigateByUrl(`/offboarding/equipments`);
        break;
      case Routes.ONBOARDING:
        this.router.navigateByUrl(`/onboarding`);
        break;
      case Routes.OFFBOARDING_EMPLOYEES_DETAILS:
        this.router.navigateByUrl(`/offboarding/employees/${id}`);
        break;
    }
  }
}
