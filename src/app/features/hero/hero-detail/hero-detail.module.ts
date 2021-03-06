import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ErrorStateModule } from '~shared/error-state/error-state.module';
import { HeroAbilitiesModule } from './hero-abilities/hero-abilities.module';
import { HeroConnectionsModule } from './hero-connections/hero-connections.module';
import { HeroDetailContainer } from './hero-detail.container';
import { heroDetailRoutes } from './hero-detail.routes';
import { HeroHeaderModule } from './hero-header/hero-header.module';
import { HeroStatModule } from './hero-stat/hero-stat.module';

@NgModule({
  declarations: [HeroDetailContainer],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ErrorStateModule,
    HeroAbilitiesModule,
    HeroConnectionsModule,
    HeroHeaderModule,
    HeroStatModule,
    RouterModule.forChild(heroDetailRoutes),
  ],
})
export class HeroDetailModule {}
