import { Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { FEATURE_NAME, reducers } from './state';
import { provideState } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { TodoListEffects } from './state/todo-list.effects';
import { provideEffects } from '@ngrx/effects';
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
