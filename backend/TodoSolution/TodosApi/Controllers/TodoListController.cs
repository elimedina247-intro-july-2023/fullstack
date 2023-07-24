﻿using Marten;

namespace TodosApi.Controllers;


[ApiController]
public class TodoListController : ControllerBase
{

    private readonly IManageTheTodoListCatalog _todoListCatalog;

    public TodoListController(IManageTheTodoListCatalog todoListCatalog)
    {
        _todoListCatalog = todoListCatalog;
    }

    [HttpPost("/todo-list")]
    public async Task<ActionResult> AddTodoItem([FromBody]TodoListCreateModel request)
    {
        //Write the code you wish you had.
        TodoListItemResponseModel response = await _todoListCatalog.AddTodoItemAsync(request);
        return Ok(response);
    }
    // GET /todo-list
    [HttpGet("/todo-list")]
    public async Task<ActionResult> GetTodoList()
    {
        CollectionResponse<TodoListItemResponseModel> list = await _todoListCatalog.GetFullListAsync();
        return Ok(list);
    }

}
