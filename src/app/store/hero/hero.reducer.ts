import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { createSuccess, editSuccess, loadManySuccess, loadOneSuccess } from './hero.actions';
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
  on(createSuccess, (state, { payload }) => ({ ...adapter.addOne(payload, state) })),
  on(editSuccess, (state, { payload }) => ({ ...adapter.updateOne({ id: payload.id, changes: payload }, state) })),
  on(loadOneSuccess, (state, { payload }) => ({ ...adapter.setOne(payload, state), selectedId: payload.id })),
  on(loadManySuccess, (state, { payload }) => ({ ...adapter.setAll(payload, state) })),
);
export const reducer = (state: HeroState | undefined, action: Action) => reduce(state, action);
