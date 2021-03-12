import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppBarModule } from './app-bar/app-bar.module';
import { ShellComponent, ShellContentDirective, ShellNavDirective } from './shell.component';

@NgModule({
  declarations: [ShellComponent, ShellContentDirective, ShellNavDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    AppBarModule,
  ],
  exports: [ShellComponent, ShellContentDirective, ShellNavDirective],
})
export class ShellModule {}
