import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroStatComponent } from './hero-stat.component';

@NgModule({
  declarations: [HeroStatComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [HeroStatComponent],
})
export class HeroStatModule {}
