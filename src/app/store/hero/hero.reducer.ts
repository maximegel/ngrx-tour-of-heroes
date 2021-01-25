import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { loadManySuccess, loadOneSuccess } from './hero.actions';
import { Hero } from './hero.entity';

export const SLICE_KEY = 'heroes';
export type HeroSlice = Record<typeof SLICE_KEY, HeroState>;

export interface HeroState extends EntityState<Hero> {
  selectedId?: string | number;
}

export const adapter = createEntityAdapter<Hero>();
export const initialState = adapter.getInitialState({});

const reduce = createReducer(
  initialState,
  on(loadManySuccess, (state, { payload: data }) => ({ ...adapter.setAll(data, state) })),
  on(loadOneSuccess, (state, { payload: data }) => ({ ...adapter.addOne(data, state), selectedId: data.id })),
);
export const reducer = (state: HeroState | undefined, action: Action) => reduce(state, action);
