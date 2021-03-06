import { Injectable } from '@angular/core';
import kebabCase from 'lodash/kebabCase';
import pick from 'lodash/pick';
import uniqueId from 'lodash/uniqueId';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { NotFoundError } from '~core/errors';
import { CreateHero, DeleteHero, EditHero, LoadOneHero } from './hero.actions';
import { Hero, HeroAlterEgo, HeroPeek } from './hero.entity';
import { HEROES } from './hero.mocks';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes = HEROES;

  create(payload: CreateHero): Observable<Hero> {
    const id = uniqueId();
    return of(this.heroes).pipe(
      map(() => {
        const hero = {
          ...payload,
          id,
          avatar: '',
          ...autoGeneratedFields(payload),
        };
        this.heroes.set(id, hero);
        return hero;
      }),
      map(hero => pickHero(hero)),
      delay(1000),
    );
  }

  delete(payload: DeleteHero): Observable<void> {
    return EMPTY.pipe(delay(1000));
  }

  edit(payload: EditHero): Observable<Hero> {
    return of(this.heroes).pipe(
      map(heroes => {
        const found = heroes.get(payload.id);
        if (!found) throw new NotFoundError('Hero not found.');
        const hero = {
          ...found,
          ...payload,
          ...autoGeneratedFields(payload),
        };
        heroes.set(payload.id, hero);
        return hero;
      }),
      map(hero => pickHero(hero)),
      delay(1000),
    );
  }

  find(payload: LoadOneHero): Observable<Hero> {
    return of(this.heroes).pipe(
      map(heroes => Array.from(heroes.values())),
      map(heroes => heroes.find(hero => hero.id === payload.id || hero.slug === payload.slug)),
      switchMap(hero => (!!hero ? of(hero) : throwError(new NotFoundError('Hero not found.')))),
      map(hero => pickHero(hero)),
      delay(1000),
    );
  }

  list(): Observable<HeroPeek[]> {
    return of(this.heroes).pipe(
      map(heroes => Array.from(heroes.values())),
      map(heroes => heroes.map(hero => pickHeroPeek(hero))),
      delay(1000),
    );
  }
}

function autoGeneratedFields(
  hero: Pick<EditHero | CreateHero, 'name' | 'alterEgo'>,
): Pick<Hero, 'slug'> & { alterEgo: HeroAlterEgo | undefined } {
  return {
    slug: kebabCase(hero.name),
    alterEgo: hero.alterEgo
      ? { ...hero.alterEgo, displayName: `${hero.alterEgo.firstName} ${hero.alterEgo.lastName}` }
      : undefined,
  };
}

function pickHero(hero: Hero): Hero {
  return {
    ...hero,
    connections: hero.connections?.map(c => pick(c, ['id', 'slug', 'name', 'thumbnail', 'alterEgo'])),
  };
}

function pickHeroPeek(hero: Hero): HeroPeek {
  return pick(hero, ['id', 'slug', 'avatar', 'name', 'alterEgo']);
}
