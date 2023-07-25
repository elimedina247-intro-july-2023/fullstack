import { createActionGroup, props } from '@ngrx/store';
import { TodoListEntryModel, TodoListItemModel } from '../models';
import { TodoListItem } from './todo-list.reducer';

export const TodosEvents = createActionGroup({
  source: 'Todos Events',
  events: {
    'Item Added': props<{ payload: TodoListEntryModel }>(),
    'Item Status Cycled': props<{ payload: TodoListItemModel }>(),
  },
});

export const TodoDocuments = createActionGroup({
  source: 'Todo Documents',
  events: {
    Todos: props<{ payload: TodoListItem[] }>(),
  },
});
