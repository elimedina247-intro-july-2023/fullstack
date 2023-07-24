namespace TodosApi.Models;

public record CollectionResponse<T>(IReadOnlyList<T> List);