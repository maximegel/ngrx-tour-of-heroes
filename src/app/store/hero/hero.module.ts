import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeroEffects } from './hero.effects';
import { reducer, SLICE_KEY } from './hero.reducer';

@NgModule({
  imports: [StoreModule.forFeature(SLICE_KEY, reducer), EffectsModule.forFeature([HeroEffects])],
})
export class StoreHeroModule {}
