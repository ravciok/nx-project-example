import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeOffboardDialogComponent } from '../employee-offboard-dialog/employee-offboard-dialog.component';
import { UsersModel } from '@nx-project-example/feature-users';
import { Routes, RoutingService } from '@nx-project-example/core-routing';
import { EmployeesStore } from '../state/employees.store';
import { EmployeesActions } from '../state/employees.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class EmployeeDetailsFacade {
  private store = inject(EmployeesStore);
  private routingService = inject(RoutingService);
  private readonly dialog = inject(MatDialog);

  public openModal(id: string) {
    const form = this.prepareForm();
    const dialogRef = this.dialog.open(EmployeeOffboardDialogComponent, {
      minWidth: '60vw',
      data: form,
    });

    dialogRef.beforeClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(
          EmployeesActions.OFFBOARD_EMPLOYEE,
          id,
          form.getRawValue() as UsersModel
        );
      }
    });
  }

  public backToList() {
    this.routingService.goTo(Routes.OFFBOARDING_EMPLOYEES);
  }

  private prepareForm() {
    return new FormGroup({
      receiver: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[0-9]{5,20}')
      ]),
      address: new FormGroup({
        streetLine: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
        postalCode: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern('^[0-9]{2}-[0-9]{3}$'),
        ]),
        country: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      }),
      notes: new FormControl('', [Validators.maxLength(220)]),
    });
  }
}
