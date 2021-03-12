import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextualBarComponent } from './contextual-bar.component';

@NgModule({
  declarations: [ContextualBarComponent],
  imports: [CommonModule],
  exports: [ContextualBarComponent],
})
export class ContextualBarModule {}
