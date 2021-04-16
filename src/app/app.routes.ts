import { Routes } from '@angular/router';
import { heroRoutes } from './features/hero/hero.routes';

export const appPaths = {
  dashboard: () => 'dashboard',
  error: () => 'error',
  hero: () => 'hero',
  heroes: () => 'heroes',
};

export const appRoutes: Routes = [
  { path: '', redirectTo: appPaths.dashboard(), pathMatch: 'full' },
  {
    path: appPaths.dashboard(),
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: appPaths.error(),
    loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule),
  },
  {
    path: appPaths.hero(),
    children: heroRoutes,
  },
  {
    path: appPaths.heroes(),
    loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule),
  },
];
