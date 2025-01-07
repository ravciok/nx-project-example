import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-data-presentation',
  imports: [CommonModule],
  templateUrl: './ui-data-presentation.component.html',
  styleUrl: './ui-data-presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataPresentationComponent {}
