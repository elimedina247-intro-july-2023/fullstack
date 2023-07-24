using Marten;

namespace TodosApi.Services;

public class MartenTodoListCatalog : IManageTheTodoListCatalog
{
    private readonly IDocumentSession _session;

    public MartenTodoListCatalog(IDocumentSession session)
    {
        _session = session;
    }

    public async Task<TodoListItemResponseModel> AddTodoItemAsync(TodoListCreateModel request)
    {
        var response = new TodoListItemResponseModel(Guid.NewGuid(), request.Description, TodoItemStatus.Later);

        _session.Store(response);
        await _session.SaveChangesAsync();
        return response;
    }

    public async Task<CollectionResponse<TodoListItemResponseModel>> GetFullListAsync()
    {
        var response = await _session.Query<TodoListItemResponseModel>().ToListAsync();
        return new CollectionResponse<TodoListItemResponseModel>(response);
    }
}
