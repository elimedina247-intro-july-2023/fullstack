import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCount from './counter.reducer';
export const FEATURE_NAME = 'counterFeature';

export interface CounterState {
  count: fromCount.CountState;
}

export const reducers: ActionReducerMap<CounterState> = {
  count: fromCount.reducer,
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<CounterState>(FEATURE_NAME);

// 2. A selector per "branch" of the state.
export const selectCountBranch = createSelector(selectFeature, (f) => f.count);

// 3. (optional) you have "Helpers"

// 4. What does the component need

export const selectCounterCurrent = createSelector(
  selectCountBranch,
  (b) => b.current
);

export const selectCountingBy = createSelector(selectCountBranch, (b) => b.by);
