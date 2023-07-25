import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { TodoListEntryModel, TodoListItemModel } from './models';

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
  todoList: TodoListItemModel[] = [
    {
      id: '1',
      description: 'Buy Beer',
      status: 'Now',
    },
  ];

  addItem(candidate: TodoListEntryModel) {
    // send it to the API, when it returns
    // POST http:/api.com/todolist
    const newItem: TodoListItemModel = {
      id: '99',
      description: candidate.description,
      status: 'Later',
    };
    // some change

    this.todoList = [newItem, ...this.todoList];
  }
}
