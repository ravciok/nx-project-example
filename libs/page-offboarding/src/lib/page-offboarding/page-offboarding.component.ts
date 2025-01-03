import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-page-offboarding',
  imports: [CommonModule],
  templateUrl: './page-offboarding.component.html',
  styleUrl: './page-offboarding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOffboardingComponent {}
