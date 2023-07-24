namespace TodosApi.Models;


public enum TodoItemStatus { Later, Now, Waiting, Completed}
public record TodoListItemResponseModel(Guid ID, string Description, TodoItemStatus Status);
