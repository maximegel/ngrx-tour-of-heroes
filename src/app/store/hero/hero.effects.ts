import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap } from 'rxjs/operators';
import {
  create,
  createFailure,
  createSuccess,
  edit,
  editFailure,
  editSuccess,
  loadMany,
  loadManyFailure,
  loadManySuccess,
  loadOne,
  loadOneFailure,
  loadOneSuccess,
} from './hero.actions';
import { HeroService } from './hero.service';

@Injectable()
export class HeroEffects {
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(create),
      mergeMap(({ payload }) =>
        this.service.create(payload).pipe(
          map(response => createSuccess({ payload: response })),
          catchError(error => of(createFailure({ error }))),
        ),
      ),
    ),
  );
  edit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(edit),
      concatMap(({ payload }) =>
        this.service.edit(payload).pipe(
          map(response => editSuccess({ payload: response })),
          catchError(error => of(editFailure({ error }))),
        ),
      ),
    ),
  );
  loadMany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMany),
      exhaustMap(() =>
        this.service.list().pipe(
          map(response => loadManySuccess({ payload: response })),
          catchError(error => of(loadManyFailure({ error }))),
        ),
      ),
    ),
  );
  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOne),
      exhaustMap(({ payload }) =>
        this.service.find(payload).pipe(
          map(response => loadOneSuccess({ payload: response })),
          catchError(error => of(loadOneFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: HeroService) {}
}
