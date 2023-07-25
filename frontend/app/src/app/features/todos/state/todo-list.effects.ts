import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FeatureEvents } from './feature.actions';

import { switchMap } from 'rxjs';

import { TodoListItem } from './todo-list.reducer';

import { map } from 'rxjs';

import { TodoDocuments } from './todos.actions';

@Injectable()
export class TodoListEffects {
  // When the feature is entered, go to the API, get the the todo list, and turn into a action with the items.

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeatureEvents.featureEntered),

      switchMap(() =>
        this.httpClient

          .get<{ list: TodoListItem[] }>('http://localhost:8080/todo-list')

          .pipe(
            map((response) => response.list),

            map((payload) => TodoDocuments.todos({ payload }))
          )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,

    private readonly httpClient: HttpClient
  ) {}
}
