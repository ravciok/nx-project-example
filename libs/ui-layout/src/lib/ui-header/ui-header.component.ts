import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'lib-ui-header',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeaderComponent {}
