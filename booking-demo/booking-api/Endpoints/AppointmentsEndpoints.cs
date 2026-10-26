using BookingApi.Models;
using BookingApi.Services;

namespace BookingApi.Endpoints;

public static class AppointmentsEndpoints
{
    public static void MapAppointments(this IEndpointRouteBuilder routes)
    {
        routes.MapGet("api/appointments", (AppointmentService svc) =>
            svc.GetAll());

        routes.MapPost("api/appointments", (Appointment appt, AppointmentService svc) =>
            svc.Add(appt));
    }
}