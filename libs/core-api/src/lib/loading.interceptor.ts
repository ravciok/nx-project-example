import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '@nx-project-example/core-loader';

export const SkipLoading = new HttpContextToken<boolean>(() => false);

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);

  // Check for a custom attribute
  // to avoid showing loading spinner
  if (req.context.get(SkipLoading)) {
    // Pass the request directly to the next handler
    return next(req);
  }

  // Turn on the loading spinner
  loadingService.changeState(true);

  return next(req).pipe(
    finalize(() => {
      // Turn off the loading spinner
      loadingService.changeState(false);
    })
  );
};
