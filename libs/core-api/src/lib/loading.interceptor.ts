import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '@nx-project-example/core-loader';

export const SkipLoading = new HttpContextToken<boolean>(() => false);

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);

  if (req.context.get(SkipLoading)) {
    return next(req);
  }

  loadingService.changeState(true);

  return next(req).pipe(
    finalize(() => {
      loadingService.changeState(false);
    })
  );
};
