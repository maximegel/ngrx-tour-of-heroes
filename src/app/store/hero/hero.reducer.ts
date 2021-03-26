import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  createSuccess,
  editSuccess,
  loadMany,
  loadManyFailure,
  loadManySuccess,
  loadOne,
  loadOneFailure,
  loadOneSuccess,
} from './hero.actions';
import { Hero } from './hero.entity';

export const SLICE_KEY = 'heroes';
export type HeroSlice = Record<typeof SLICE_KEY, HeroState>;

export type HeroState = EntityState<Hero> & HeroInitialState;
export interface HeroInitialState {
  loading: boolean;
  selectedId: string | number | null;
}

export const adapter = createEntityAdapter<Hero>();
export const initialState = adapter.getInitialState<HeroInitialState>({ selectedId: null, loading: false });

const reduce = createReducer(
  initialState,
  on(createSuccess, (state, { payload }) => adapter.addOne(payload, state)),
  on(editSuccess, (state, { payload }) => adapter.updateOne({ id: payload.id, changes: payload }, state)),
  on(loadOne, state => ({ ...state, loading: true })),
  on(loadOneFailure, state => ({ ...state, loading: false })),
  on(loadOneSuccess, (state, { payload }) => ({
    ...adapter.setOne(payload, state),
    loading: false,
    selectedId: payload.id,
  })),
  on(loadMany, state => ({ ...state, loading: true })),
  on(loadManyFailure, state => ({ ...state, loading: false })),
  on(loadManySuccess, (state, { payload }) => ({ ...adapter.setAll(payload, state), loading: false })),
);
export const reducer = (state: HeroState | undefined, action: Action) => reduce(state, action);
