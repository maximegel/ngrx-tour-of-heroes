import { Routes } from '@angular/router';
import { isNotFoundError, NotFoundError } from '~core/errors';
import { notFoundRoutes } from './not-found/not-found.routes';

export const errorPaths = {
  notFound: () => 'not-found',
  redirect: (error: NotFoundError) => (isNotFoundError(error) ? errorPaths.notFound() : ''),
};

export const errorRoutes: Routes = [{ path: errorPaths.notFound(), children: notFoundRoutes }];
