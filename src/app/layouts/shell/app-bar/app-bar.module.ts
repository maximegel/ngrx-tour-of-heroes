import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContextualBarModule } from '~shared/contextual-bar';
import { AppBarComponent } from './app-bar.component';

@NgModule({
  declarations: [AppBarComponent],
  imports: [CommonModule, MatToolbarModule, ContextualBarModule],
  exports: [AppBarComponent],
})
export class AppBarModule {}
