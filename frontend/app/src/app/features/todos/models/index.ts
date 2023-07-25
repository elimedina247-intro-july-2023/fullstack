export type TodoListItemModel = {
  id: string;
  description: string;
  status: 'Later' | 'Now' | 'Waiting' | 'Completed';
};

export type TodoListEntryModel = Pick<TodoListItemModel, 'description'>;
