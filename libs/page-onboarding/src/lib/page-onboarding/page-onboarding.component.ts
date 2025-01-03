import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-page-onboarding',
  imports: [CommonModule],
  templateUrl: './page-onboarding.component.html',
  styleUrl: './page-onboarding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOnboardingComponent {}
