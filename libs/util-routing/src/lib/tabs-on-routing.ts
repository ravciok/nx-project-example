import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

export type TabsOnRouting = {
  path: string;
  title: string;
}[];

export const buildTabsBasedOnRoutingResolver: ResolveFn<
  TabsOnRouting
> = (route: ActivatedRouteSnapshot) => {
  return (route.routeConfig?.children ?? [])
    .filter((childRoute) => !['', '**', '*'].includes(childRoute.path ?? ''))
    .map((childRoute) => ({
      path: childRoute.path ?? '',
      title: childRoute.data?.['title'] ?? '',
    }));
};
