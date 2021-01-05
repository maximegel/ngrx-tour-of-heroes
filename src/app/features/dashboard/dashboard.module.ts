import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardContainer } from './dashboard.container';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [DashboardContainer],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
})
export class DashboardModule {}
