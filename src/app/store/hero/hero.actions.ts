import { createAction, props } from '@ngrx/store';
import { Hero, HeroAlterEgo } from './hero.entity';

export const create = createAction('[Heroes USR] Create', props<{ payload: CreateHero }>());
export const createFailure = createAction('[Heroes API] Create Failure', props<{ error: any }>());
export const createSuccess = createAction('[Heroes API] Create Success', props<{ payload: Hero }>());
export type CreateHero = Pick<Hero, 'name' | 'about' | 'stats' | 'abilities'> & {
  alterEgo?: Pick<HeroAlterEgo, 'firstName' | 'lastName'>;
};

export const deleteOne = createAction('[Heroes USR] DeleteOne', props<{ payload: DeleteHero }>());
export const deleteOneFailure = createAction('[Heroes API] DeleteOne Failure', props<{ error: any }>());
export const deleteOneSuccess = createAction('[Heroes API] DeleteOne Success');
export type DeleteHero = Pick<Hero, 'id'>;

export const edit = createAction('[Heroes USR] Edit', props<{ payload: EditHero }>());
export const editFailure = createAction('[Heroes API] Edit Failure', props<{ error: any }>());
export const editSuccess = createAction('[Heroes API] Edit Success', props<{ payload: Hero }>());
export type EditHero = Pick<Hero, 'id'> & Partial<CreateHero>;

export const loadMany = createAction('[Heroes URL] LoadMany');
export const loadManyFailure = createAction('[Heroes API] LoadMany Failure', props<{ error: any }>());
export const loadManySuccess = createAction('[Heroes API] LoadMany Success', props<{ payload: Hero[] }>());

export const loadOne = createAction('[Heroes URL] LoadOne', props<{ payload: LoadOneHero }>());
export const loadOneFailure = createAction('[Heroes API] LoadOne Failure', props<{ error: any }>());
export const loadOneSuccess = createAction('[Heroes API] LoadOne Success', props<{ payload: Hero }>());
export type LoadOneHero = Partial<Pick<Hero, 'id' | 'slug'>>;
