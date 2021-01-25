import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { CreatePayload, EditPayload, LoadOnePayload } from './hero.actions';
import { Hero, HeroPeek } from './hero.entity';
import { HEROES } from './hero.mocks';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes: Hero[] = HEROES;

  create(payload: CreatePayload): Observable<void> {
    return EMPTY.pipe(delay(500));
  }

  delete(...ids: (string | number)[]): Observable<void> {
    return EMPTY.pipe(delay(500));
  }

  edit(payload: EditPayload): Observable<void> {
    return EMPTY.pipe(delay(500));
  }

  find(payload: LoadOnePayload): Observable<Hero> {
    return of(this.heroes.find(hero => hero.id === payload.id || hero.slug === payload.slug)).pipe(
      mergeMap(found => (!!found ? of(found) : throwError(''))),
      delay(1000),
    );
  }

  list(): Observable<HeroPeek[]> {
    return of(this.heroes).pipe(delay(1000));
  }
}
