using Marten;
using System.Runtime.CompilerServices;

namespace TodosApi.Services;

public class MartenTodoListCatalog : IManageTheTodoListCatalog
{
    private readonly IDocumentSession _session;
    private readonly IProvideStatusCycling _statusCycler;
    public MartenTodoListCatalog(IDocumentSession session, IProvideStatusCycling statusCycler)
    {
        _session = session;
        _statusCycler = statusCycler;
    }

    public async Task<TodoListItemResponseModel> AddTodoItemAsync(TodoListCreateModel request)
    {
        var response = new TodoListItemResponseModel(Guid.NewGuid(), request.Description, TodoItemStatus.Later);

        _session.Store(response);
        await _session.SaveChangesAsync();
        return response;
    }

    public async Task<TodoListItemResponseModel?> ChangeStatusAsync(TodoListItemRequestModel request)
    {
        //Change the status of the thing to next status
        var savedItem = await _session
            .Query<TodoListItemResponseModel>()
            .Where(t => t.ID == request.Id).SingleOrDefaultAsync();

        if(savedItem == null) {
            return null;

        }
        TodoListItemResponseModel updated = _statusCycler.ProvideNextStatusFrom(savedItem);


        return updated;
        //Save it in the database
        //return the saved thing back (not null) saying this worked okay.
    }

    public async Task<CollectionResponse<TodoListItemResponseModel>> GetFullListAsync()
    {
        var response = await _session.Query<TodoListItemResponseModel>().ToListAsync();
        return new CollectionResponse<TodoListItemResponseModel>(response);
    }
}
