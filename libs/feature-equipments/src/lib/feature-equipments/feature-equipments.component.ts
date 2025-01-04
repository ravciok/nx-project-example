import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-equipments',
  imports: [CommonModule],
  templateUrl: './feature-equipments.component.html',
  styleUrl: './feature-equipments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEquipmentsComponent {}
