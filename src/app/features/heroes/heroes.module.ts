import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeroTableModule } from './hero-table/hero-table.module';
import { HeroesContainer } from './heroes.container';
import { heroesRoutes } from './heroes.routes';

@NgModule({
  declarations: [HeroesContainer],
  imports: [CommonModule, MatButtonModule, MatIconModule, HeroTableModule, RouterModule.forChild(heroesRoutes)],
})
export class HeroesModule {}
