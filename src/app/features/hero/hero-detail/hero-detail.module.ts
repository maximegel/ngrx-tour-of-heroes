import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    HeroAbilitiesModule,
    HeroConnectionsModule,
    HeroHeaderModule,
    HeroStatModule,
    RouterModule.forChild(heroDetailRoutes),
  ],
})
export class HeroDetailModule {}
