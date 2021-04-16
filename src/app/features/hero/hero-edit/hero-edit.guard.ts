import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Injectable({ providedIn: 'root' })
export class HeroEditGuard implements CanActivate {
  constructor(private store: Store<HeroSlice>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const { slug } = route.params;
    if (slug) this.store.dispatch(HeroActions.loadOne({ payload: { slug } }));
    return this.store.select(HeroSelectors.loaded).pipe(filter(loaded => loaded));
  }
}
