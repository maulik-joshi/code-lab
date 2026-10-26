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

    public Appointment Add(Appointment appt)
    {
        _items.Add(appt);
        return appt;
    }
}
