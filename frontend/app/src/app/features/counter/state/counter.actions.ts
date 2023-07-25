import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountState } from './counter.reducer';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    'Count Incremented': emptyProps(),
    'Count Decremented': emptyProps(),
    'Count Reset': emptyProps(),
    'Count by Set': props<{ by: ValidCountByOptions }>(),
    'Counter Entered': emptyProps(),
    'Counter Data': props<{ payload: CountState }>(),
  },
});

export type ValidCountByOptions = 1 | 3 | 5;
