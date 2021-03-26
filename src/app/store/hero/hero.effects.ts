import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
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
      mergeMap(({ payload }) => this.service.create(payload)),
      map(response => createSuccess({ payload: response })),
      catchError(error => of(createFailure(error))),
    ),
  );
  edit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(edit),
      concatMap(({ payload }) => this.service.edit(payload)),
      map(response => editSuccess({ payload: response })),
      tap(a => console.log(a)),
      catchError(error => of(editFailure(error))),
    ),
  );
  loadMany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMany),
      switchMap(() => this.service.list()),
      map(payload => loadManySuccess({ payload })),
      catchError(error => of(loadManyFailure({ error }))),
    ),
  );
  loadOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOne),
      switchMap(({ payload }) => this.service.find(payload)),
      map(payload => loadOneSuccess({ payload })),
      catchError(error => of(loadOneFailure({ error }))),
    ),
  );

  constructor(private actions$: Actions, private service: HeroService) {}
}
