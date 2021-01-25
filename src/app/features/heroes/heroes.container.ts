import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appUrls } from '~app';
import { HeroSelectors, HeroSlice } from '~store/hero';
import { HeroTable, HeroTableRow } from './hero-table/hero-table.model';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.container.html',
  styleUrls: ['./heroes.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesContainer {
  heroes$: Observable<HeroTable>;

  constructor(private store: Store<HeroSlice>, private router: Router) {
    this.heroes$ = store.select(HeroSelectors.all).pipe(
      map(heroes =>
        heroes.map(hero => ({
          ...hero,
          alterEgo: hero?.alterEgo?.name,
        })),
      ),
    );
  }

  onAdd(): void {
    this.router.navigateByUrl(appUrls.hero.new());
  }

  onDelete(hero: HeroTableRow): void {}

  onDetail(hero: HeroTableRow): void {
    this.router.navigateByUrl(appUrls.hero.detail(hero.slug));
  }

  onEdit(hero: HeroTableRow): void {
    this.router.navigateByUrl(appUrls.hero.edit(hero.slug));
  }
}
