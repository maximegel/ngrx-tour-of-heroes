import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, switchMap, switchMapTo } from 'rxjs/operators';
import { appUrls } from '~app';
import { HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Injectable({ providedIn: 'root' })
export class HeroDetailGuard implements CanActivate {
  constructor(private store: Store<HeroSlice>, private router: Router, private location: Location) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const { slug } = route.params;
    this.store.dispatch(HeroActions.loadOne({ payload: { slug } }));
    return this.store.select(HeroSelectors.loaded).pipe(
      filter(loaded => loaded),
      switchMapTo(this.store.select(HeroSelectors.error)),
      switchMap(error =>
        error
          ? this.router
              .navigateByUrl(appUrls.error(error), { skipLocationChange: true })
              .then(() => this.location.replaceState(state.url))
              .then(() => false)
          : of(true),
      ),
    );
  }
}
