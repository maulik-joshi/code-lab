import { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import type { Booking } from "../types/Booking";

export default function Appointments() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        setBookings(await getBookings());
      } catch {
        setError("Failed to load appointments.");
      }
    }
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      {error && <p>{error}</p>}
      <ul>
        {bookings.map((booking: Booking) => (
          <li key={booking.id}>{booking.customerName}</li>
        ))}
      </ul>
    </div>
  );
}