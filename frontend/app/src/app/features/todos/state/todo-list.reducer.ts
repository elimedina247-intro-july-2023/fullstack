import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { TodoListItemStatus } from '../models';
import { createReducer } from '@ngrx/store';

export interface TodoListItem {
  id: string;
  description: string;
  status: TodoListItemStatus;
}

export interface TodoListState extends EntityState<TodoListItem> {}

export const adapter = createEntityAdapter<TodoListItem>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(initialState);
