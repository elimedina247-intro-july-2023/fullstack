namespace TodosApi
{
    public interface IManageTheTodoListCatalog
    {
        Task<TodoListItemResponseModel> AddTodoItemAsync(TodoListCreateModel request);
        Task<CollectionResponse<TodoListItemResponseModel>> GetFullListAsync();
    }
}