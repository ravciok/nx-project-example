import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-users',
  imports: [CommonModule],
  templateUrl: './feature-users.component.html',
  styleUrl: './feature-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersComponent {}
