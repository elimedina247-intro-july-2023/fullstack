export type TodoListItemModel = {
  id: string;
  description: string;
  status: TodoListItemStatus;
};

export type TodoListEntryModel = Pick<TodoListItemModel, 'description'>;

export type TodoListItemStatus = 'Later' | 'Now' | 'Waiting' | 'Completed';
