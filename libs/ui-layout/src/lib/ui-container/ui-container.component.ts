import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-container',
  imports: [CommonModule],
  templateUrl: './ui-container.component.html',
  styleUrl: './ui-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiContainerComponent {}
