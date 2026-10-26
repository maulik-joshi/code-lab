using BookingApi.Models;

namespace BookingApi.Services;

public class AppointmentService
{
    private readonly List<Appointment> _items = new();

    public IEnumerable<Appointment> GetAll() => _items;

    public Appointment Add(Appointment appt)
    {
        _items.Add(appt);
        return appt;
    }
}
