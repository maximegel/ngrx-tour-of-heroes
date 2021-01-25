import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeroTableComponent } from './hero-table.component';

@NgModule({
  declarations: [HeroTableComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  exports: [HeroTableComponent],
})
export class HeroTableModule {}
