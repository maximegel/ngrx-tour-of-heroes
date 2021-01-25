import { appPaths } from './app.routes';
import { heroPaths } from './features/hero/hero.routes';

export const appUrls = {
  dashboard: () => `/${appPaths.dashboard()}`,
  hero: {
    detail: (slug: string) => `/${appPaths.hero()}/${heroPaths.detail(slug)}`,
    edit: (slug: string) => `/${appPaths.hero()}/${heroPaths.edit(slug)}`,
    new: () => `/${appPaths.hero()}/${heroPaths.new()}`,
  },
  heroes: () => `/${appPaths.heroes()}`,
};
