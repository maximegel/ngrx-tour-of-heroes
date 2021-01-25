import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroEditContainer } from './hero-edit.container';
import { heroEditRoutes } from './hero-edit.routes';

@NgModule({
  declarations: [HeroEditContainer],
  imports: [CommonModule, RouterModule.forChild(heroEditRoutes)],
})
export class HeroEditModule {}
