import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Injectable({ providedIn: 'root' })
export class HeroDetailGuard implements CanActivate {
  constructor(private store: Store<HeroSlice>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const { slug } = route.params;
    return this.store.select(HeroSelectors.selected).pipe(
      tap(() => this.store.dispatch(HeroActions.loadOne({ payload: { slug } }))),
      filter(hero => !!hero),
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}
