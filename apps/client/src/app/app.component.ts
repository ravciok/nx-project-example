import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@nx-project-example/ui-layout';
import { UiContainerComponent } from '@nx-project-example/ui-layout';

@Component({
  imports: [RouterModule, UiHeaderComponent, UiContainerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
