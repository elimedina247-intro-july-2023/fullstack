import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { TodoListItemStatus } from '../models';
import { createReducer, on } from '@ngrx/store';
import { TodoDocuments } from './todos.actions';

export interface TodoListItem {
  id: string;
  description: string;
  status: TodoListItemStatus;
}

export interface TodoListState extends EntityState<TodoListItem> {}

export const adapter = createEntityAdapter<TodoListItem>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(TodoDocuments.todos, (s, a) => adapter.setAll(a.payload, s)),
  on(TodoDocuments.todo, (s, a) => adapter.addOne(a.payload, s))
);
