using BookingApi.Models;
using BookingApi.Services;

namespace BookingApi.Endpoints;

public static class AppointmentsEndpoints
{
    public static void MapAppointments(this IEndpointRouteBuilder routes)
    {
        routes.MapGet("api/appointments", (AppointmentService svc) =>
            svc.GetAll());

        routes.MapPost("api/appointments", (AppointmentCreateRequest  apptCreateRequest, AppointmentService svc) =>
        {
            if (string.IsNullOrWhiteSpace(apptCreateRequest.CustomerName))
                return Results.BadRequest("Customer name is required");
        
            var created = svc.Add(apptCreateRequest);
            return Results.Created($"/api/appointments/{created.Id}", created);
        });
    }
}