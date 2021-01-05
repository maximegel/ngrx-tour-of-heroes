import { Routes } from '@angular/router';
import { DashboardContainer } from './dashboard.container';

export const dashboardPaths = {
  root: () => '',
};

export const dashboardRoutes: Routes = [{ path: dashboardPaths.root(), component: DashboardContainer }];
