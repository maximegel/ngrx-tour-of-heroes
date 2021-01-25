import { Routes } from '@angular/router';
import { HeroesContainer } from './heroes.container';
import { HeroesGuard } from './heroes.guard';

export const heroesRoutes: Routes = [{ path: '', component: HeroesContainer, canActivate: [HeroesGuard] }];
