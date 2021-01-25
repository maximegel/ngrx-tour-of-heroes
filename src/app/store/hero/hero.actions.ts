import { createAction, props } from '@ngrx/store';
import { Hero } from './hero.entity';

export const create = createAction('[Heroes USR] Create', props<{ payload: CreatePayload }>());
export const createFailure = createAction('[Heroes API] Create Failure', props<{ error: any }>());
export const createSuccess = createAction('[Heroes API] Create Success');
export type CreatePayload = Omit<Hero, 'id'>;

export const deleteOne = createAction('[Heroes USR] DeleteOne', props<{ id: string | number }>());
export const deleteOneFailure = createAction('[Heroes API] DeleteOne Failure', props<{ error: any }>());
export const deleteOneSuccess = createAction('[Heroes API] DeleteOne Success');

export const edit = createAction('[Heroes USR] Edit', props<{ payload: EditPayload }>());
export const editFailure = createAction('[Heroes API] Edit Failure', props<{ error: any }>());
export const editSuccess = createAction('[Heroes API] Edit Success');
export type EditPayload = Pick<Hero, 'id'> & Partial<Hero>;

export const loadMany = createAction('[Heroes URL] LoadMany');
export const loadManyFailure = createAction('[Heroes API] LoadMany Failure', props<{ error: any }>());
export const loadManySuccess = createAction('[Heroes API] LoadMany Success', props<{ payload: Hero[] }>());

export const loadOne = createAction('[Heroes URL] LoadOne', props<{ payload: LoadOnePayload }>());
export const loadOneFailure = createAction('[Heroes API] LoadOne Failure', props<{ error: any }>());
export const loadOneSuccess = createAction('[Heroes API] LoadOne Success', props<{ payload: Hero }>());
export type LoadOnePayload = Partial<Pick<Hero, 'id' | 'slug'>>;
