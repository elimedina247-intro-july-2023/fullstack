import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListItemModel } from '../../models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input({ required: true }) list: TodoListItemModel[] = [];

  @Output() onStatusCycled = new EventEmitter<TodoListItemModel>();

  cycleTheStatus(item: TodoListItemModel) {
    this.onStatusCycled.emit(item);
  }
}
