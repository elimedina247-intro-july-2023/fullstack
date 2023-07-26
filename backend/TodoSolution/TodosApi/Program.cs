using Marten;
using System.Text.Json.Serialization;
using TodosApi;
using TodosApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()//Microsoft stuff for creating instances of controllers, etc.
    .AddJsonOptions(options =>
    { 
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    }); 




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer(); //This is Microsoft stuff for making the endpoints visible to tools.
builder.Services.AddSwaggerGen(); //The service that uses the one above to translate to OpenAPI


var dataConnectionString = builder.Configuration.GetConnectionString("todos") ?? throw new Exception("Need a database connection string");
Console.WriteLine($"Using the connection string {dataConnectionString}");
builder.Services.AddMarten(options =>
{
    options.Connection(dataConnectionString);

    options.AutoCreateSchemaObjects = Weasel.Core.AutoCreate.All; //Good for development it creates everything.
});
//Everything above this line is confirguring "services" in our application.
builder.Services.AddTransient<IManageTheTodoListCatalog, MartenTodoListCatalog>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(pol =>
    {
        pol.AllowAnyOrigin();
        pol.AllowAnyMethod();
        pol.AllowAnyHeader();
    });
});
var app = builder.Build();
//This is configuring the "middleware" -This is code that will see the incoming HTTP request 
//And make a response.
app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); //This is OpenApi this generates the documention which is a JSON file. Called a "Swagger" file
    app.UseSwaggerUI(); //This addds middleware that lets you interact with that documentation.
}

app.UseAuthorization();

app.MapControllers(); //The Api, during setup, is going to look at all our Controller classes, read those attributes
//and create a "route table" - like a phone list.

app.Run(); //Start the Kestrel web server and listen for requests. 
