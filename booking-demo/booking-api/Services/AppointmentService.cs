using BookingApi.Models;

namespace BookingApi.Services;

public class AppointmentService
{
    private readonly List<Appointment> _items = new()
    {
        new Appointment
        {
            Id = Guid.NewGuid(),
            CustomerName = "John Doe",
            StartTime = DateTime.UtcNow,
            EndTime = DateTime.UtcNow.AddHours(1)
        }
    };

    public IEnumerable<Appointment> GetAll() => _items;

    public Appointment Add(AppointmentCreateRequest apptCreateRequest)
    {
        var created = new Appointment
        {
            Id = Guid.NewGuid(),
            CustomerName = apptCreateRequest.CustomerName,
            StartTime = apptCreateRequest.StartTime,
            EndTime = apptCreateRequest.EndTime
        };

        _items.Add(created);
        return created;
    }
}
