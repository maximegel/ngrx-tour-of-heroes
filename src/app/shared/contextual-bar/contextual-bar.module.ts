import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextualBarContainerComponent, DefaultBarDirective } from './contextual-bar-container.component';
import { ContextualBarOutletComponent } from './contextual-bar-outlet.component';
import { ContextualBarComponent } from './contextual-bar.component';

@NgModule({
  declarations: [
    ContextualBarContainerComponent,
    ContextualBarOutletComponent,
    ContextualBarComponent,
    DefaultBarDirective,
  ],
  imports: [CommonModule, PortalModule],
  exports: [ContextualBarContainerComponent, ContextualBarOutletComponent, ContextualBarComponent, DefaultBarDirective],
})
export class ContextualBarModule {}
