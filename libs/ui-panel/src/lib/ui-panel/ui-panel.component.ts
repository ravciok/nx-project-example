import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-panel',
  imports: [CommonModule],
  templateUrl: './ui-panel.component.html',
  styleUrl: './ui-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelComponent {
  title = input<string>();
  horizontalDirection = input<boolean>(false);
}
