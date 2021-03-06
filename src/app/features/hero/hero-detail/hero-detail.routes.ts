import { Routes } from '@angular/router';
import { HeroDetailContainer } from './hero-detail.container';
import { HeroDetailGuard } from './hero-detail.guard';

export const heroDetailRoutes: Routes = [{ path: '', component: HeroDetailContainer, canActivate: [HeroDetailGuard] }];
