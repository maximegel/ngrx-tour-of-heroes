import { Routes } from '@angular/router';

export const appPaths = {
  dashboard: () => 'dashboard',
  heroes: () => 'heroes',
};

export const appRoutes: Routes = [
  { path: '', redirectTo: appPaths.dashboard(), pathMatch: 'full' },
  {
    path: appPaths.dashboard(),
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: appPaths.heroes(),
    loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule),
  },
];
