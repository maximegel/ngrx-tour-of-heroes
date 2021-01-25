import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Injectable({ providedIn: 'root' })
export class HeroesGuard implements CanActivate {
  constructor(private store: Store<HeroSlice>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(HeroSelectors.all).pipe(
      tap(() => this.store.dispatch(HeroActions.loadMany())),
      filter(heroes => !!heroes?.length),
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}
