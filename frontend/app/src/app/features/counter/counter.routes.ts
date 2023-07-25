import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { provideState } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './state/counter.effects';

export const counterRoutes: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [
      provideState(FEATURE_NAME, reducers),
      provideEffects([CounterEffects]),
    ],
  },
];
