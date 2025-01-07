import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsModel } from '../state/employees.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeDetailsFacade } from '../services/employee-details.facade';
import { UiDataPresentationComponent, UiPanelComponent } from '@nx-project-example/ui-panel';

@Component({
  selector: 'lib-feature-employee-details',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    UiPanelComponent,
    UiDataPresentationComponent,
  ],
  templateUrl: './feature-employee-details.component.html',
  styleUrl: './feature-employee-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEmployeeDetailsComponent {
  private employeeDetailsFacade = inject(EmployeeDetailsFacade);

  details = input<EmployeeDetailsModel>();

  openDialog() {
    this.employeeDetailsFacade.openModal(this.details()?.id ?? '');
  }

  backToListAction() {
    this.employeeDetailsFacade.backToList();
  }
}
