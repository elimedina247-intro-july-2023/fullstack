import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import { TodoListItemModel } from '../models';
export const FEATURE_NAME = 'todosFeature';

export interface TodosState {
  todoList: fromTodoList.TodoListState;
}

export const reducers: ActionReducerMap<TodosState> = {
  todoList: fromTodoList.reducer,
};

// 1. Feature Selector

const selectFeature = createFeatureSelector<TodosState>(FEATURE_NAME);

// 2. Selector per branch of the feature

const selectTodoListBranch = createSelector(selectFeature, (f) => f.todoList);

// 3. Helpers

const { selectAll: selectTodoListItemArray } =
  fromTodoList.adapter.getSelectors(selectTodoListBranch);

// 4. What the component needs.

// TODO: One that returns a TodoListItemModel[]

export const selectTodoListModel = createSelector(
  selectTodoListItemArray,
  (items) => items as TodoListItemModel[]
);
