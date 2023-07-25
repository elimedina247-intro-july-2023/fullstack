import { createReducer, on } from '@ngrx/store';
import { CounterEvents, ValidCountByOptions } from './counter.actions';
import { initial } from 'cypress/types/lodash';
export interface CountState {
  current: number;
  by: ValidCountByOptions;
}

const initialState: CountState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(CounterEvents.countIncremented, (oldState) => {
    return { ...oldState, current: oldState.current + oldState.by };
  }),
  on(CounterEvents.countDecremented, (s) => ({
    ...s,
    current: s.current - s.by,
  })),
  on(CounterEvents.countReset, (s) => ({ ...s, current: 0 })),
  on(CounterEvents.countBySet, (s, a) => ({ ...s, by: a.by })),
  on(CounterEvents.counterData, (s, a) => a.payload)
);
