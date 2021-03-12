import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take, withLatestFrom } from 'rxjs/operators';
import { Hero, HeroActions, HeroSelectors, HeroSlice } from '~store/hero';
import { HeroForm } from './hero-form/hero-form.model';

@Component({
  selector: 'toh-hero-edit',
  templateUrl: './hero-edit.container.html',
  styleUrls: ['./hero-edit.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditContainer {
  hero$: Observable<HeroForm>;
  heroChanges$ = new BehaviorSubject<HeroForm | null>(null);
  isNew$: Observable<boolean>;

  private id$: Observable<Hero['id'] | null>;

  constructor(private store: Store<HeroSlice>, private location: Location) {
    const selected$ = store.select(HeroSelectors.selected);
    this.hero$ = selected$.pipe(
      map(hero => ({
        name: '',
        about: '',
        stats: { durability: 3, energy: 3, fighting: 3, intelligence: 3, speed: 3, strength: 3 },
        ...hero,
      })),
    );
    this.id$ = selected$.pipe(map(hero => hero?.id ?? null));
    this.isNew$ = this.id$.pipe(map(id => !!id));
  }

  onBack(): void {
    this.location.back();
  }

  onDelete(): void {}

  onSave(): void {
    this.heroChanges$
      .pipe(
        filter(hero => !!hero),
        withLatestFrom(this.hero$),
        map(([changes, hero]) => ({ ...hero, ...changes, id: null })),
        withLatestFrom(this.id$),
        map(([hero, id]) =>
          id ? HeroActions.edit({ payload: { ...hero, id } }) : HeroActions.create({ payload: hero }),
        ),
        take(1),
      )
      .subscribe(action => this.store.dispatch(action));
  }
}
