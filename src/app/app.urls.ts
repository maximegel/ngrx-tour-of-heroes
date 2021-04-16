import { appPaths } from './app.routes';
import { errorPaths } from './features/error/error.routes';
import { heroPaths } from './features/hero/hero.routes';

export const appUrls = {
  dashboard: () => `/${appPaths.dashboard()}`,
  error: (...args: Parameters<typeof errorPaths.redirect>) => `${appPaths.error()}/${errorPaths.redirect(...args)}`,
  hero: {
    detail: (...args: Parameters<typeof heroPaths.detail>) => `/${appPaths.hero()}/${heroPaths.detail(...args)}`,
    edit: (...args: Parameters<typeof heroPaths.edit>) => `/${appPaths.hero()}/${heroPaths.edit(...args)}`,
    new: (...args: Parameters<typeof heroPaths.new>) => `/${appPaths.hero()}/${heroPaths.new(...args)}`,
  },
  heroes: () => `/${appPaths.heroes()}`,
};
