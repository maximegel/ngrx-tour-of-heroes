import { Routes } from '@angular/router';

export const heroPaths = {
  detail: (slug: string) => `${slug}`,
  edit: (slug: string) => `edit/${slug}`,
  new: () => 'new',
};

export const heroRoutes: Routes = [
  {
    path: heroPaths.new(),
    loadChildren: () => import('./hero-edit/hero-edit.module').then(m => m.HeroEditModule),
  },
  {
    path: heroPaths.edit(':slug'),
    loadChildren: () => import('./hero-edit/hero-edit.module').then(m => m.HeroEditModule),
  },
  {
    path: heroPaths.detail(':slug'),
    loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule),
  },
];
