import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

export const buildTabsBasedOnRoutingResolver: ResolveFn<
  { path: string; title: string }[]
> = (route: ActivatedRouteSnapshot) => {
  return (route.routeConfig?.children ?? [])
    .filter((childRoute) => !['', '**', '*'].includes(childRoute.path ?? ''))
    .map((childRoute) => ({
      path: childRoute.path ?? '',
      title: childRoute.data?.['title'] ?? '',
    }));
};
