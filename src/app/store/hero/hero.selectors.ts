import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroPeek } from './hero.entity';
import { adapter, HeroSlice, HeroState, SLICE_KEY } from './hero.reducer';

const state = createFeatureSelector<HeroSlice, HeroState>(SLICE_KEY);
const { selectAll, selectEntities } = adapter.getSelectors();
const entities = createSelector(state, (s: HeroState) => selectEntities(s));
const selectedId = createSelector(state, (s: HeroState) => s.selectedId);

export const all = createSelector(state, (s: HeroState) => selectAll(s) as HeroPeek[]);
export const loaded = createSelector(state, (s: HeroState) => !s.loading);
export const loading = createSelector(state, (s: HeroState) => s.loading);
export const selected = createSelector(entities, selectedId, (dict, id) => (id ? dict[id] ?? null : null));
