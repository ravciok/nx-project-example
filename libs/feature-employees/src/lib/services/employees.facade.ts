import { inject, Injectable } from '@angular/core';
import { Routes, RoutingService } from '@nx-project-example/core-routing';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFacade {
  private routingService = inject(RoutingService);

  public rowAction(id: string) {
    this.routingService.goTo(Routes.OFFBOARDING_EMPLOYEES_DETAILS, id);
  }
}
