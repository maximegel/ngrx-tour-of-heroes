import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HeroAbilitiesComponent } from './hero-abilities.component';

@NgModule({
  declarations: [HeroAbilitiesComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [HeroAbilitiesComponent],
})
export class HeroAbilitiesModule {}
