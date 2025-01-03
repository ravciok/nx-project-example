import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-employees',
  imports: [CommonModule],
  templateUrl: './feature-employees.component.html',
  styleUrl: './feature-employees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEmployeesComponent {}
