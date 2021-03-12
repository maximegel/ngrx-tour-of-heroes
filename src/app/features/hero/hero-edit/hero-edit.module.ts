import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ContextualBarModule } from '~shared/contextual-bar';
import { HeroEditContainer } from './hero-edit.container';
import { heroEditRoutes } from './hero-edit.routes';
import { HeroFormModule } from './hero-form/hero-form.module';

@NgModule({
  declarations: [HeroEditContainer],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ContextualBarModule,
    HeroFormModule,
    RouterModule.forChild(heroEditRoutes),
  ],
})
export class HeroEditModule {}
