import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-page-offboarding',
  imports: [
    CommonModule,
    RouterOutlet,
    MatTabsModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-offboarding.component.html',
  styleUrl: './page-offboarding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOffboardingComponent {
  readonly title = input<string>();
  readonly tabs = input<{ path: string; title: string }[]>();
}
