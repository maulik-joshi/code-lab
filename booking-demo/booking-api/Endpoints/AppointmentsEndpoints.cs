using BookingApi.Models;
using BookingApi.Services;

namespace BookingApi.Endpoints;

public static class AppointmentsEndpoints
{
    public static void MapAppointments(this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/appointments", (AppointmentService svc) =>
            svc.GetAll());

        routes.MapPost("/appointments", (Appointment appt, AppointmentService svc) =>
            svc.Add(appt));
    }
}