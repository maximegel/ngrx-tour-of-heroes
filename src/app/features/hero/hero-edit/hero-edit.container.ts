import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, switchMapTo, take, tap, withLatestFrom } from 'rxjs/operators';
import { appUrls } from '~app';
import { Hero, HeroActions, HeroSelectors, HeroSlice } from '~store/hero';

@Component({
  selector: 'toh-hero-edit',
  templateUrl: './hero-edit.container.html',
  styleUrls: ['./hero-edit.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditContainer implements OnInit {
  form = new FormControl();
  isNew$: Observable<boolean>;

  private id$: Observable<Hero['id'] | null>;

  constructor(private store: Store<HeroSlice>, private router: Router, private location: Location) {
    this.id$ = store.select(HeroSelectors.selected).pipe(map(hero => hero?.id ?? null));
    this.isNew$ = this.id$.pipe(map(id => !id));
  }

  ngOnInit(): void {
    this.store
      .select(HeroSelectors.selected)
      .pipe(take(1))
      .subscribe({ next: hero => this.form.setValue(hero) });
  }

  onBack(): void {
    this.location.back();
  }

  onDelete(): void {}

  onSave(): void {
    of(this.form.value)
      .pipe(
        withLatestFrom(this.isNew$, this.id$),
        map(([payload, isNew, id]) =>
          !isNew && id ? HeroActions.edit({ payload: { ...payload, id } }) : HeroActions.create({ payload }),
        ),
        tap(editOrCreate => this.store.dispatch(editOrCreate)),
        switchMapTo(this.store.select(HeroSelectors.loaded)),
        filter(loaded => loaded),
        switchMapTo(this.store.select(HeroSelectors.selected)),
        take(1),
      )
      .subscribe({ next: hero => hero && this.router.navigateByUrl(appUrls.hero.detail(hero)) });
  }
}
