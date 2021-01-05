import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesContainer } from './heroes.container';
import { heroesRoutes } from './heroes.routes';

@NgModule({
  declarations: [HeroesContainer],
  imports: [CommonModule, RouterModule.forChild(heroesRoutes)],
})
export class HeroesModule {}
