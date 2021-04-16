import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { appUrls } from '~app';
import { Hero, HeroSelectors, HeroSlice } from '~store/hero';
import { HeroAbilities } from './hero-abilities/hero-abilities.model';
import { HeroConnections } from './hero-connections/hero-connections.model';
import { HeroHeader } from './hero-header/hero-header.model';

@Component({
  selector: 'toh-hero-detail',
  templateUrl: './hero-detail.container.html',
  styleUrls: ['./hero-detail.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailContainer {
  abilities$: Observable<HeroAbilities>;
  connections$: Observable<HeroConnections>;
  error$: Observable<Error | null>;
  header$: Observable<HeroHeader>;
  stats$: Observable<Hero['stats']>;

  constructor(private store: Store<HeroSlice>, private router: Router) {
    const hero$ = store.select(HeroSelectors.selected);
    this.header$ = hero$.pipe(map(hero => ({ ...hero, alterEgo: hero?.alterEgo?.displayName })));
    this.stats$ = hero$.pipe(map(hero => hero?.stats));
    this.abilities$ = hero$.pipe(map(hero => hero?.abilities));
    this.connections$ = hero$.pipe(
      map(hero => hero?.connections?.map(conn => ({ ...conn, alterEgo: conn.alterEgo?.displayName }))),
    );
    this.error$ = store.select(HeroSelectors.error);
  }

  onEdit(): void {
    this.store
      .select(HeroSelectors.selected)
      .pipe(take(1))
      .subscribe({ next: hero => hero && this.router.navigateByUrl(appUrls.hero.edit(hero)) });
  }
}
