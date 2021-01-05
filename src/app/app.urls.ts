import { appPaths } from './app.routes';
import { dashboardPaths } from './features/dashboard/dashboard.routes';

export const appUrls = {
  dashboard: () => `/${appPaths.dashboard()}/${dashboardPaths.root()}`,
};
