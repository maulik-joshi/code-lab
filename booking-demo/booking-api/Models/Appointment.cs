namespace BookingApi.Models;

public record Appointment
{
    public required Guid Id { get; init; }
    public required string? CustomerName { get; init; }
    public required DateTime StartTime { get; init; }
    public required DateTime EndTime { get; init; }
}