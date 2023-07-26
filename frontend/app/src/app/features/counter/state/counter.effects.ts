import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs';
import { CounterEvents } from './counter.actions';
import { Store } from '@ngrx/store';
import { selectCountBranch } from '.';
import { CountState } from './counter.reducer';

@Injectable()
export class CounterEffects {
  // logItAll$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       tap((action) => console.log(`Got an action of type ${action.type}`))
  //     );
  //   },
  //   { dispatch: false }
  // );

  // an effect that turns any countIncremented, countDecremented, countReset, countBySet -> write the counter data to localstorage

  // counterEntered => (countData, nothing)

  loadCountData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CounterEvents.counterEntered),
        map(() => localStorage.getItem('count-data')),
        filter((stored) => stored !== null),
        map((data) => JSON.parse(data!) as CountState),
        map((payload) => CounterEvents.counterData({ payload }))
      );
    },
    { dispatch: true }
  );

  saveCounterState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          CounterEvents.countBySet,
          CounterEvents.countDecremented,
          CounterEvents.countIncremented,
          CounterEvents.countReset
        ),
        concatLatestFrom(() => this.store.select(selectCountBranch)),
        tap(([action, state]) =>
          localStorage.setItem('count-data', JSON.stringify(state))
        )
      );
    },
    { dispatch: false }
  );
  constructor(private readonly actions$: Actions, private store: Store) {}
}
