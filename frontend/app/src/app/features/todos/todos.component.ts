import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { TodoListEntryModel, TodoListItemModel } from './models';
import { Store } from '@ngrx/store';
import { FeatureEvents } from './state/feature.actions';
import { TodosEvents } from './state/todos.actions';
import { selectTodoListModel } from './state';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  imports: [CommonModule, EntryComponent, ListComponent],
})
export class TodosComponent {
  // This is going to have to come from an API
  // We'll do that tomorrow.

  constructor(private readonly store: Store) {
    store.dispatch(FeatureEvents.featureEntered());
  }
  todoList = this.store.selectSignal(selectTodoListModel);

  addItem(candidate: TodoListEntryModel) {
    this.store.dispatch(TodosEvents.itemAdded({ payload: candidate }));
  }
  statusChange(payload: TodoListItemModel) {
    this.store.dispatch(TodosEvents.itemStatusCycled({ payload }));
  }
}
