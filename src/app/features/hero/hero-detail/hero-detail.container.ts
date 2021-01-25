import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  header$: Observable<HeroHeader>;
  stats$: Observable<Hero['stats']>;

  constructor(private store: Store<HeroSlice>) {
    const selected$ = this.store.select(HeroSelectors.selected);
    this.header$ = selected$.pipe(map(hero => ({ ...hero, alterEgo: hero?.alterEgo?.name })));
    this.stats$ = store.select(HeroSelectors.selected).pipe(map(hero => hero?.stats));
    this.abilities$ = store.select(HeroSelectors.selected).pipe(map(hero => hero?.abilities));
    this.connections$ = selected$.pipe(
      map(hero => hero?.connections?.map(conn => ({ ...conn, alterEgo: conn.alterEgo?.name }))),
    );
  }
}
