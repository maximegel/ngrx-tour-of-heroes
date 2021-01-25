import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeroConnectionsComponent } from './hero-connections.component';

@NgModule({
  declarations: [HeroConnectionsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HeroConnectionsComponent],
})
export class HeroConnectionsModule {}
