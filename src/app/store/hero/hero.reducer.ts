import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ErrorObject } from 'serialize-error';
import {
  create,
  createFailure,
  createSuccess,
  edit,
  editFailure,
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
  error: ErrorObject | null;
  loading: boolean;
  selectedId: string | number | null;
}

export const adapter = createEntityAdapter<Hero>();
export const initialState = adapter.getInitialState<HeroInitialState>({
  error: null,
  loading: false,
  selectedId: null,
});

const reduce = createReducer(
  initialState,
  on(create, state => ({ ...state, error: null, loading: true })),
  on(createFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(createSuccess, (state, { payload }) => ({ ...adapter.addOne(payload, state), loading: false })),
  on(edit, state => ({ ...state, error: null, loading: true })),
  on(editFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(editSuccess, (state, { payload }) => ({
    ...adapter.updateOne({ id: payload.id, changes: payload }, state),
    loading: false,
  })),
  on(loadOne, state => ({ ...state, error: null, loading: true })),
  on(loadOneFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(loadOneSuccess, (state, { payload }) => ({
    ...adapter.setOne(payload, state),
    loading: false,
    selectedId: payload.id,
  })),
  on(loadMany, state => ({ ...state, error: null, loading: true })),
  on(loadManyFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(loadManySuccess, (state, { payload }) => ({ ...adapter.setAll(payload, state), loading: false })),
);
export const reducer = (state: HeroState | undefined, action: Action) => reduce(state, action);
