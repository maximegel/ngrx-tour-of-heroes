import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { loadMany, loadManyFailure, loadManySuccess, loadOne, loadOneFailure, loadOneSuccess } from './hero.actions';
import { HeroService } from './hero.service';

@Injectable()
export class HeroEffects {
  loadMany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMany),
      exhaustMap(() => this.service.list()),
      map(payload => loadManySuccess({ payload })),
      catchError(error => of(loadManyFailure({ error }))),
    ),
  );
  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOne),
      exhaustMap(({ payload }) => this.service.find(payload)),
      map(payload => loadOneSuccess({ payload })),
      catchError(error => of(loadOneFailure({ error }))),
    ),
  );

  constructor(private actions$: Actions, private service: HeroService) {}
}
