import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@nx-project-example/ui-layout';
import { UiContainerComponent } from '@nx-project-example/ui-layout';
import { CoreLoaderComponent } from '@nx-project-example/core-loader';

@Component({
  imports: [
    RouterModule,
    UiHeaderComponent,
    UiContainerComponent,
    CoreLoaderComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
