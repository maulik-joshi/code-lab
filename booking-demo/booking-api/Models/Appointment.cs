namespace BookingApi.Models;

public record Appointment(
    Guid Id,
    string CustomerName,
    DateTime StartTime,
    DateTime EndTime
);