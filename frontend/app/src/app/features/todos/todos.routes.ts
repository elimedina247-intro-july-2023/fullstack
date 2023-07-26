import { Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { provideState } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TodoListEffects } from './state/todo-list.effects';

export const todosRoutes: Routes = [
  {
    path: '',
    component: TodosComponent,
    providers: [
      provideEffects([TodoListEffects]),
      provideState(FEATURE_NAME, reducers),
      provideHttpClient(),
    ],
  },
];
