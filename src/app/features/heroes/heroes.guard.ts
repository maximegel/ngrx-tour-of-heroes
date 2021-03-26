import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Injectable({ providedIn: 'root' })
export class HeroesGuard implements CanActivate {
  constructor(private store: Store<HeroSlice>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(HeroActions.loadMany());
    return this.store.select(HeroSelectors.loaded).pipe(filter(loaded => loaded));
  }
}
