export type MainRoutingPath =
  'city'

export const AppRoutes: Record<
  MainRoutingPath,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  city: {routerPath: ':city', fullPath: ':city'}
}
