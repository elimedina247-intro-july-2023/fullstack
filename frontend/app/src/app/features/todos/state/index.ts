import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
export const FEATURE_NAME = 'todosFeature';

export interface TodosState {
  todoList: fromTodoList.TodoListState;
}

export const reducers: ActionReducerMap<TodosState> = {
  todoList: fromTodoList.reducer,
};
