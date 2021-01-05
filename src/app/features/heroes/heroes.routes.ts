import { Routes } from '@angular/router';
import { HeroesContainer } from './heroes.container';

export const heroesPaths = {
  root: () => '',
};

export const heroesRoutes: Routes = [{ path: heroesPaths.root(), component: HeroesContainer }];
