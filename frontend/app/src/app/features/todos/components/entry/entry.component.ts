import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { TodoListEntryModel } from '../../models';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Output() onItemAdded = new EventEmitter<TodoListEntryModel>();
  hasError = signal(false);
  form = new FormGroup({
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)],
    }),
  });

  itemAdded() {
    if (this.form.valid) {
      this.hasError.set(false);
      const newItem: TodoListEntryModel = {
        description: this.form.controls.description.value,
      };
      this.onItemAdded.emit(newItem);
    } else {
      this.hasError.set(true);
    }
  }
}
