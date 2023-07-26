namespace TodosApi
{
    public interface IManageTheTodoListCatalog
    {
        Task<TodoListItemResponseModel> AddTodoItemAsync(TodoListCreateModel request);
        Task<TodoListItemResponseModel?> ChangeStatusAsync(TodoListItemRequestModel request);
        Task<CollectionResponse<TodoListItemResponseModel>> GetFullListAsync();
    }
}