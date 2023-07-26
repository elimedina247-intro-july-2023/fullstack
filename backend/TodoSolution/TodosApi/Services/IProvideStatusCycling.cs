namespace TodosApi;

public interface IProvideStatusCycling
{
    
    TodoListItemResponseModel ProvidePreviousStatusFrom(TodoListItemResponseModel savedItem);
}