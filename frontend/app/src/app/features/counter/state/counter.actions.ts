import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountState } from './counter.reducer';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    'Count Incremented': emptyProps(),
    'Count Decremented': emptyProps(),
    'Count Reset': emptyProps(),
    'Count By Set': props<{ by: ValidCountbyOptions }>(),
    'Counter Entered': emptyProps(),
    'Counter Data': props<{ payload: CountState }>(),
  },
});

export type ValidCountbyOptions = 1 | 3 | 5;
