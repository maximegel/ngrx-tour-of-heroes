import { Routes } from '@angular/router';
import { Hero } from '~store/hero';

export const heroPaths = {
  detail: (hero: Pick<Hero, 'slug'>) => `${hero.slug}`,
  edit: (hero: Pick<Hero, 'slug'>) => `edit/${hero.slug}`,
  new: () => 'new',
};

export const heroRoutes: Routes = [
  {
    path: heroPaths.new(),
    loadChildren: () => import('./hero-edit/hero-edit.module').then(m => m.HeroEditModule),
  },
  {
    path: heroPaths.edit({ slug: ':slug' }),
    loadChildren: () => import('./hero-edit/hero-edit.module').then(m => m.HeroEditModule),
  },
  {
    path: heroPaths.detail({ slug: ':slug' }),
    loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule),
  },
];
