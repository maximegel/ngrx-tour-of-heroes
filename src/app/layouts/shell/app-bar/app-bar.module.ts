import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppBarComponent } from './app-bar.component';

@NgModule({
  declarations: [AppBarComponent],
  imports: [CommonModule, PortalModule, MatToolbarModule],
  exports: [AppBarComponent],
})
export class AppBarModule {}
