import { Routes } from '@angular/router';
import { HeroEditContainer } from './hero-edit.container';
import { HeroEditGuard } from './hero-edit.guard';

export const heroEditRoutes: Routes = [{ path: '', canActivate: [HeroEditGuard], component: HeroEditContainer }];
