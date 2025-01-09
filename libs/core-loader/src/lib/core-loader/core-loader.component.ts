import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LoaderService } from './loader.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-core-loader',
  imports: [CommonModule, MatProgressBar],
  templateUrl: './core-loader.component.html',
  styleUrl: './core-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreLoaderComponent {
  private loader = inject(LoaderService);

  public showLoader = toSignal(this.loader.loading$);
}
