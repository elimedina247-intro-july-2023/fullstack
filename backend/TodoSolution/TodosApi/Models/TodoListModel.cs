using System.ComponentModel.DataAnnotations;

namespace TodosApi.Models;


public enum TodoItemStatus { Later, Now, Waiting, Completed}
public record TodoListItemResponseModel(Guid ID, string Description, TodoItemStatus Status);


public record TodoListCreateModel
{

    [Required, MaxLength(100)]
    public string Description { get; set; } = string.Empty;
}