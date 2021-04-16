import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorStateComponent } from './error-state.component';

@NgModule({
  declarations: [ErrorStateComponent],
  imports: [CommonModule],
  exports: [ErrorStateComponent],
})
export class ErrorStateModule {}
